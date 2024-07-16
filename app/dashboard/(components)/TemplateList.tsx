"use client";
import TemplateListData from "@/app/(data)/TemplateListData";
import React, { use } from "react";
import TemplateCard from "./TemplateCard";
import { useState, useEffect } from "react";
import { TEMPLATE } from "@/app/(data)/TemplateListData";

const TemplateList = ({ search }: any) => {
  const [templateDataList, setTemplateDataList] = useState<TEMPLATE[]>([]);

  useEffect(() => {
    // console.log(search);
    if (search) {
      const filteredData = TemplateListData.filter((template: TEMPLATE) => {
        return template.name.toLowerCase().includes(search.toLowerCase());
      });
      setTemplateDataList(filteredData);
    } else {
      setTemplateDataList(TemplateListData);
    }
  }, [search]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {templateDataList.map((template: TEMPLATE, index: number) => {
        return <TemplateCard {...template} key={index} />;
      })}
    </div>
  );
};

export default TemplateList;
