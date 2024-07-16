"use client";
import ToggleSwitch from "@/components/toggleDark";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { theme } = useTheme();
  const { isSignedIn, user } = useUser();

  return (
    <div>
      <header className="border flex justify-between md:px-20 px-5 py-5">
        <div>
          <Link href="/dashboard">
            <Image
              src={
                theme === "light"
                  ? "/a-idea-logo/svg/logo-no-background.svg"
                  : theme === "dark"
                  ? "/a-idea-logo/svg/logo-no-background-white.svg"
                  : "/a-idea-logo/svg/logo-no-background-white.svg"
              }
              alt="logo"
              width={150}
              height={150}
              className=""
            />
          </Link>
        </div>
        <div className="flex md:gap-4 gap-2">
          {!isSignedIn && (
            <div className="flex gap-3">
              <Button
                variant="default"
                className="text-background dark:text-foreground hover:text-foreground hover:underline"
                asChild
              >
                <Link href={"sign-in"}>Login</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={"sign-up"}>Sign up</Link>
              </Button>
            </div>
          )}
          <div className=" flex items-center">
            <div className="md:block hidden">
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-24 text-center  flex flex-col gap-4">
          <h1 className="md:text-5xl text-3xl font-bold text-foreground ">
            Welcome to A-Idea
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            Turn your ideas into reality with A-Idea. A platform that helps you
            to create idea with the help of Gemini AI. A-Idea is a free to use
            platform that offers powerful tools and resources to help you get
            started.
          </p>
          <div>
            <Button
              asChild
              className="text-background dark:text-foreground hover:text-foreground hover:underline"
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      {/*  GIF Section */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl font-bold text-foreground text-center">
              How it works
            </h2>
            <div className="mt-8 border ">
              <Image
                unoptimized
                src="/content/A-idea.gif"
                alt="idea"
                width={900}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-foreground text-center">
            Features
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded shadow flex flex-col gap-3"
              >
                <Image
                  src={feature.icon}
                  alt={"icons"}
                  width={50}
                  height={50}
                />
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-400 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-background text-foreground py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} A-Idea. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link> */}
            <Link
              href="https://dreidevs-portfolio.vercel.app"
              target="_blank"
              className="text-sm hover:underline"
            >
              Developed by John Andrei
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Easy to Use",
    description:
      "A-Idea offers an interface that requires minimal effort to learn and operate, making it accessible for users of all skill levels.",
    icon: "https://cdn-icons-png.flaticon.com/128/5650/5650867.png",
  },
  {
    title: "Free to Use",
    description:
      "A-Idea is free to use for everyone, providing powerful tools and resources without any cost.",
    icon: "https://cdn-icons-png.flaticon.com/128/6021/6021560.png",
  },
  {
    title: "25+ Templates",
    description:
      "Choose from 25+ designed ai promt templates to jumpstart your ideas and projects with ease.",
    icon: "https://cdn-icons-png.flaticon.com/128/6863/6863985.png",
  },
];
