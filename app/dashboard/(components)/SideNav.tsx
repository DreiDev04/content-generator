"use client";
import { History, Home, Receipt, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const MenuList = [
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
    {
      name: "Billing",
      path: "/dashboard/billings",
      icon: Receipt,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const path = usePathname();

  return (
    <aside className="h-full shadow-sm p-5 flex flex-col">
      <div className="flex justify-center border-b">
        <Image
          src="/logoipsum.svg"
          alt="logo"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {MenuList.map((menu) => {
          return (
            <Link
              key={menu.name}
              href={menu.path}
              className={`flex text-lg gap-2 rounded-lg p-2 hover:bg-primary hover:text-background ${
                path == menu.path ? "bg-primary text-background dark:text-foreground" : ""
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
