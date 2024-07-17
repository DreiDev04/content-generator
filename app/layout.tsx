import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "A-Idea",
  description: "A-Idea is a tool to generate ideas for your content.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/a-idea-logo/svg/a-idea-favicon-black.svg" type="image/svg+xml" />
          <meta property="og:title" content="A-Idea" />
          <meta property="og:description" content="A-Idea is a tool to generate ideas for your content." />
          <meta property="og:image" content="/a-idea-logo/png/logo-white.png" />
          <meta property="og:url" content="https://a-idea.vercel.app" />
          <meta property="og:type" content="website" />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
