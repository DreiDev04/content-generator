"use client";
import { History, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const MenuList = [
  {
    name: "Home",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "History",
    path: "/dashboard/history",
    icon: History,
  },
];

const SideNav = () => {
  const path = usePathname();
  const { theme } = useTheme();

  return (
    <aside className="h-full shadow-sm p-5 flex flex-col fixed w-1/6 bg-background ">
      <div className="flex justify-center h-11">
        <Button variant={"link"} asChild>
          <Link href="/">
          <Image
              src={
                theme === "dark"
                  ? "/a-idea-logo/svg/logo-no-background-white.svg"
                  : "/a-idea-logo/svg/logo-no-background.svg"
              }
              alt="logo"
              width={150}
              height={150}
            />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {MenuList.map((menu) => {
          return (
            <Link
              key={menu.name}
              href={menu.path}
              className={`flex text-lg gap-2 rounded-lg p-2 hover:bg-primary hover:text-background ${
                path == menu.path
                  ? "bg-primary text-background dark:text-foreground"
                  : ""
              }`}
            >
              <menu.icon />
              {menu.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default SideNav;
