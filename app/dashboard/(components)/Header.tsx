import ToggleSwitch from "@/components/toggleDark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="border-b h-16 flex justify-between items-center md:px-10 px-5">
      <div></div>
      <div className="gap-4 flex items-center">
        <Button className="bg-primary text-background rounded-lg px-2 text-xs ">
          Support the Developer for Only $5
        </Button>
        <UserButton />
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
