"use client";
import React, { useContext, useState } from "react";
import TemplateListData, { TEMPLATE } from "@/app/(data)/TemplateListData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircleIcon, ArrowLeftIcon, Terminal, XIcon } from "lucide-react";
import FormSection from "../(components)/FormSection";
import OutputSection from "../(components)/OutputSection";
import { FormProvider } from "@/components/context/FormContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateContent = ({ params }: PROPS) => {
  const selectedTemplate: TEMPLATE = TemplateListData?.find(
    (template: TEMPLATE) => template.slug === params["template-slug"]
  )!;
  const [isAlertClosed, setisAlertClosed] = useState(false);

  const handleAlert = () => {
    setisAlertClosed(true);
  };

  return (
    <div className="bg-background p-5 flex flex-col gap-2 mb-10">
      <div className=" ">
        <Button asChild className="m-2">
          <Link href="/dashboard" className="flex gap-2">
            <ArrowLeftIcon />
            Back
          </Link>
        </Button>
      </div>
      <Alert className={`${isAlertClosed && "hidden"} bg-card shadow-md`}>
        <AlertCircleIcon />
        <div className="ml-3 my-1">
          <AlertTitle>Notice </AlertTitle>
          <AlertDescription>
            Some content has been flagged and prohibited by Gemini AI. To avoid
            this, ensure all content adheres to Gemini standards.{" "}
            <span>
              <Link
                href="https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/configure-safety-attributes" target="_blank"
                className="underline"
              >
                View guidelines
              </Link>
            </span>
          </AlertDescription>
        </div>
        <div className="absolute top-0 right-0 p-3">
          <XIcon
            className="w-5 h-5 hover:cursor-pointer"
            onClick={handleAlert}
          />
        </div>
      </Alert>
      <FormProvider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-1">
            <FormSection selectedTemplate={selectedTemplate} />
          </div>
          <div className="col-span-2 h-full flex rounded-lg">
            <div className="w-full rounded-sm bg-white border">
              {/* <ToastUIEditor /> */}
              <OutputSection />
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default CreateContent;
