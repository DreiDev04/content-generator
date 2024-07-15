"use client";
import React, { useEffect, useState } from "react";
import { columns } from "./(components)/columns";
import { DataTable } from "./(components)/data-table";
import { GetHistory } from "@/utils/helper";
import { Skeleton } from "@/components/ui/skeleton";

export interface HistoryProps {
  aiResponse: string;
  createdAt: string;
  createdBy: string;
  formdata: string;
  id?: number;
  templateSlug: string;
}

const History = () => {
  const [data, setData] = useState<HistoryProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetHistory();

      if (result) {
        setData(result);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-card h-full w-full p-5">
      <div className="bg-background rounded-lg p-5 flex flex-col gap-5">
        <div>
          <h1 className="font-extrabold text-2xl">History</h1>
          <div className="text-gray-500 font-serif">
            View previously generated AI content. Note tha the AI Respnse will
            lose its markdown formatting.
          </div>
        </div>
        <div className="text-foreground ">
          { <DataTable columns={columns} data={data}/>}
        </div>
      </div>
    </div>
  );
};

export default History;
