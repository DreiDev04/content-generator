import React from "react";

import { TEMPLATE } from "@/app/(data)/TemplateListData";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (template: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${template.slug}`}>
      <div className="border p-8 flex flex-col gap-2 shadow-lg rounded-lg cursor-pointer hover:scale-110 transition-transform duration-200 bg-card">
        <Image src={template.icon} alt={template.name} width={50} height={50} />
        <h3 className="font-bold text-lg">{template.name}</h3>
        <p className="text-gray-500 line-clamp-4">{template.desc}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
