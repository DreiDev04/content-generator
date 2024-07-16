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
import { useGenerateAIContent } from "@/hooks/useGenerateAIContent";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

interface GenerateFormsProps {
  selectedTemplate: TEMPLATE;
}

export interface FORMDATA {
  [key: string]: string;
}

const GenerateForms = ({ selectedTemplate }: GenerateFormsProps) => {
  const [dataForm, setDataForm] = useState<FORMDATA>({});
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("GenerateForms must be used within a FormProvider");
  }

  const { setFormData, setIsLoading, isLoading } = context;

  const { generateContent, error } = useGenerateAIContent();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateContent(selectedTemplate, dataForm);
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

  const handleReload = () => {
    window.location.reload();
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
              autoComplete="off"
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
      <AlertDialog open={!!error}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Prompt Error</AlertDialogTitle>
            <AlertDialogDescription>{error?.message}</AlertDialogDescription>
            <AlertDialogDescription>
              <span className="text-red-500">
                Safety filters detected: a potential harmful content in the
                response. Please try again.
              </span>
            </AlertDialogDescription>
            <AlertDialogDescription>
              <Link
                href="https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/configure-safety-attributes"
                className="underline"
              >
                https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/configure-safety-attributes
              </Link>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleReload}>Okay</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  );
};

export default GenerateForms;
