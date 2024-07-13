import React from "react";
import TemplateListData, { TEMPLATE } from "@/app/(data)/TemplateListData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon, CopyIcon, ListRestartIcon } from "lucide-react";
import FormSection from "../(components)/FormSection";
import OutputSection from "../(components)/OutputSection";
import { FormProvider } from "@/components/context/FormContext";
import ToastUIEditor from "../(components)/ToastUIEditor";


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
    <div className="bg-card p-5 ">
      <div className="flex justify-between ">
        <Button asChild className="m-2">
          <Link href="/dashboard" className="flex gap-2">
            <ArrowLeftIcon />
            Back
          </Link>
        </Button>
        <div>
          <Button asChild className="m-2">
            <Link href="/dashboard" className="flex gap-2">
              Re-generate
              <ListRestartIcon />
            </Link>
          </Button>
          <Button asChild className="m-2">
            <Link href="/dashboard" className="flex gap-2">
              Copy
              <CopyIcon />
            </Link>
          </Button>
        </div>
      </div>
      <FormProvider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-screen ">
          <div className="col-span-1">
            <FormSection selectedTemplate={selectedTemplate} />
          </div>
          <div className="col-span-2 h-full flex rounded-lg">
            <div className="w-full h-full rounded-lg bg-white">
              <ToastUIEditor />
            </div>
            {/* <OutputSection /> */}
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default CreateContent;
