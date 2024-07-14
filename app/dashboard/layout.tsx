import { ModeToggle } from "@/components/ui/mode-toggle";
import Header from "./(components)/Header";
import SideNav from "./(components)/SideNav";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen">
      <div className="md:w-1/6 hidden md:block">
        <SideNav />
      </div>
      <div className="md:w-5/6 w-full">
        <Header />
        {children}
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}
