import { TEMPLATE } from "@/app/(data)/TemplateListData";
import Image from "next/image";
import React from "react";
import GenerateForms from "./GenerateForms";

interface FormProps {
  selectedTemplate: TEMPLATE;
}

const FormSection = ({ selectedTemplate }: FormProps) => {
  return (
    <div className="border flex flex-col p-5 rounded-sm shadow-md bg-card gap-3">
      <Image
        src={selectedTemplate?.icon}
        alt={selectedTemplate?.name}
        width={50}
        height={50}
      />
      <h1 className="font-bold text-primary text-lg">
        {selectedTemplate?.name}
      </h1>
      <p className="text-gray-500">{selectedTemplate?.desc}</p>
      <GenerateForms selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default FormSection;
