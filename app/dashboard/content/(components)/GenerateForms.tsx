"use client";

import React, { useContext, useState } from "react";
import { TEMPLATE } from "@/app/(data)/TemplateListData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormContext } from "@/components/context/FormContext";
import { chatSession } from "@/utils/aimodel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";

interface GenerateFormsProps {
  selectedTemplate: TEMPLATE;
}

export interface FORMDATA {
  name: string;
}

const GenerateForms = ({ selectedTemplate }: GenerateFormsProps) => {
  const [dataForm, setDataForm] = useState<FORMDATA>();
  const context = useContext(FormContext);
  const { user } = useUser();

  if (!context) {
    throw new Error("GenerateForms must be used within a FormProvider");
  }

  const { setFormData, setIsLoading, isLoading } = context;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    GenerateAIContent(dataForm);
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  };

  const GenerateAIContent = async (datas: FORMDATA | undefined) => {
    setIsLoading(true);
    const selectedPrompt = selectedTemplate.aiPrompt;
    const stringData = JSON.stringify(datas);
    const Prompt = selectedPrompt + "\n\n" + stringData;

    try {
      const result = await chatSession.sendMessage(Prompt);
      const aiResponse = await result.response.text();
      console.log("Result: ", aiResponse);
      setFormData(aiResponse);
      await SaveToDB(stringData, selectedTemplate.slug, aiResponse);
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const SaveToDB = async (
    stringData: string,
    selectedTemplate: string,
    AIResult: string
  ) => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      if (!email) {
        throw new Error("User email is not defined");
      }

      const result = await db.insert(AIOutput).values({
        formdata: stringData,
        airesponse: AIResult,
        templateSlug: selectedTemplate,
        createdBy: email,
        createdAt: new Date(), 
      });
      console.log(result);
    } catch (error) {
      console.error("Error saving to DB:", error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-5">
      {selectedTemplate?.form?.map((item, index) => (
        <div className="flex flex-col gap-2 mb-4" key={index}>
          <label htmlFor={item.name} className="font-semibold text-sm">
            {item.label
              .toLowerCase()
              .split(" ")
              .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
              .join(" ")}
          </label>
          {item.field === "input" ? (
            <Input
              name={item.name}
              required={item?.required}
              onChange={handleOnChange}
            />
          ) : item.field === "textarea" ? (
            <Textarea
              maxLength={2000}
              name={item.name}
              required={item?.required}
              onChange={handleOnChange}
            />
          ) : null}
        </div>
      ))}
      <Button type="submit" className="w-full" disabled={!!isLoading}>
        Generate
      </Button>
    </form>
  );
};

export default GenerateForms;
