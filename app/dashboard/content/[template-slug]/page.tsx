import React from "react";
import TemplateListData, { TEMPLATE } from "@/app/(data)/TemplateListData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon, CopyIcon } from "lucide-react";
import FormSection from "../(components)/FormSection";
import OutputSection from "../(components)/OutputSection";
import { FormProvider } from "@/components/context/FormContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateContent = ({ params }: PROPS) => {
  const selectedTemplate: TEMPLATE = TemplateListData?.find(
    (template: TEMPLATE) => template.slug === params["template-slug"]
  )!;

  return (
    <div className="bg-card">
      <div className="flex  justify-between">
        <Button asChild className="m-2">
          <Link href="/dashboard">
            <ArrowLeftIcon />
            Back
          </Link>
        </Button>
        <Button asChild className="m-2">
          <Link href="/dashboard">
            Copy
            <CopyIcon />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 h-full">
        <div className="col-span-1">
          <FormProvider>
            <FormSection selectedTemplate={selectedTemplate} />
          </FormProvider>
        </div>
        <div className="col-span-2 h-full flex">
          <OutputSection />
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
