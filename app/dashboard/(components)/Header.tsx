"use client";
import ToggleSwitch from "@/components/toggleDark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./SideNav";
import Image from "next/image";
import { useTheme } from "next-themes";

const Header = () => {
  const [isDrop, setIsDrop] = useState(false);
  const { theme } = useTheme();
  const handleDrop: () => void = () => {
    setIsDrop(!isDrop);
  };

  return (
    <>
      <header className=" h-16 flex justify-between items-center md:px-10 px-5">
        <div>
          <Button
            variant={"ghost"}
            className="lg:hidden block"
            onClick={handleDrop}
          >
            <Menu />
          </Button>
        </div>
        <div className="gap-4 flex items-center">
          <Button
            className="bg-primary text-white rounded-lg px-5 flex items-center justify-center"
            asChild
          >
            <Link
              href="https://ko-fi.com/dreidev"
              target="_blank"
              className="md:block hidden "
            >
              Support the Developer
            </Link>
          </Button>
          <UserButton />
          <ToggleSwitch />
        </div>
      </header>

      {isDrop && (
        <>
          <div className="lg:hidden flex flex-col my-4 gap-2">
            <div className=" flex justify-center items-center ">
              <Link href="/">
                <Image
                  src={
                    theme === "light"
                      ? "/a-idea-logo/svg/logo-no-background.svg"
                      : theme === "dark"
                      ? "/a-idea-logo/svg/logo-no-background-white.svg"
                      : "/a-idea-logo/svg/logo-no-background.svg"
                  }
                  alt="logo"
                  width={150}
                  height={150}
                  className=""
                />
              </Link>
            </div>
            {MenuList.map((menu) => {
              return (
                <Link
                  key={menu.name}
                  href={menu.path}
                  className={`text-lg gap-2 rounded-md p-2 hover:bg-primary hover:text-background flex justify-center items-center`}
                  onClick={handleDrop}
                >
                  <menu.icon />
                  {menu.name}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
