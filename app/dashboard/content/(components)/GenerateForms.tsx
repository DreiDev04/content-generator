"use client";

import React, { useContext } from "react";
import { TEMPLATE } from "@/app/(data)/TemplateListData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FormContext } from "@/components/context/FormContext";
import { chatSession } from "@/utils/aimodel";

interface GenerateFormsProps {
  selectedTemplate: TEMPLATE;
}

export interface FORMDATA {
  name: string;
}
const GenerateForms = ({ selectedTemplate }: GenerateFormsProps) => {
  const [dataForm, setDataForm] = useState<FORMDATA>();
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("GenerateForms must be used within a FormProvider");
  }

  const { formData, setFormData, setIsLoading, isLoading } = context;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setFormData(dataForm);
    // console.log("Form submitted: ", dataForm);

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
    // const extractedData: { key: string; value: any; }[] = [];
    // if (datas) {
    //   Object.entries(datas).forEach(([key, value]) => {
    //     console.log(`${key}: ${value}`);
    //     extractedData.push({ key, value });
    //   });
    // } else {
    //   console.log('No data provided');
    // }
    // console.log("Extracted: ",extractedData);
    setIsLoading(true);
    const Prompt  = selectedTemplate.aiPrompt + "\n\n" + JSON.stringify(datas);
    
    const result = await chatSession.sendMessage(Prompt);
    console.log("Result: ", result.response.text());
    setFormData(result.response.text());
    setIsLoading(false);
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
