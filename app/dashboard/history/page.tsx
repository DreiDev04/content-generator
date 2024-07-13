import React from "react";
import { Payment, columns } from "./(components)/columns";
import { DataTable } from "./(components)/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const History = async () => {
  const data = await getData();

  return (
    <div className="bg-card h-full w-full p-5">
      <div className="bg-background rounded-lg p-5">
        <div>
          <h1 className=" font-extrabold text-2xl">History</h1>
          <p className="text-gray-500 font-serif">
            View previously generated AI content.
          </p>
        </div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default History;
