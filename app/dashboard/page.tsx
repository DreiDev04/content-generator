"use client"
import React, { useState } from "react";
import TemplateList from "./(components)/TemplateList";
import { Search } from "lucide-react";

const Dashboard = () => {
  const [search, setSearch] = useState<string>("")

  return (
    <main>
      <section className="gradient_bg flex flex-col p-10 justify-center align-middle items-center gap-3 bg-background">
        <h1 className="text-4xl font-bold text-white justify-center text-center">
          Browse All Template
        </h1>
        <p className="text-white"> What would you like to create today?</p>
        <div className="md:w-[50%] md:mt-10 flex bg-background items-center p-2 rounded-lg text-foreground gap-2">
          <Search className="text-gradient_bg"/>
          <input
            type="text"
            placeholder="Search for templates"
            className="w-full bg-background outline-none"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            
          />
        </div>
      </section>

      <section className="p-10 bg-background">
        <TemplateList search={search} />
      </section>
    </main>
  );
};

export default Dashboard;
