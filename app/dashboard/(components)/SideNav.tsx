import { History, Home, Receipt, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      path: "/dashboard/settings",
      icon: Receipt,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];
  return (
    <aside className="h-full border shadow-sm p-5 flex flex-col">
      <div className="flex justify-center border-b">
        <Image
          src="/logoipsum.svg"
          alt="logo"
          width={150}
          height={150}
          className=""
        />
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {MenuList.map((menu) => {
          return (
            <Link key={menu.name} href={menu.path} className="flex text-lg gap-2 rounded-lg p-2 hover:bg-primary text-primary hover:text-background">
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
