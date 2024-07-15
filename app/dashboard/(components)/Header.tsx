import ToggleSwitch from "@/components/toggleDark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b h-16 flex justify-between items-center md:px-10 px-5">
      <div></div>
      <div className="gap-4 flex items-center">
        <Button
          className="bg-primary text-white rounded-lg px-5 text-xs "
          asChild
        >
          <Link href="https://ko-fi.com/dreidev" target="_blank">Support the Developer</Link>
        </Button>
        <UserButton />
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
