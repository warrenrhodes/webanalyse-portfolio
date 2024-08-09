import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const FiraSans = Fira_Sans({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Warren Portfolio",
  description: "Software developer on language like TypeScript, Dart, script",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/me_avatar.png" sizes="32x32" />
        <link rel="icon" href="/me_avatar.png" type="image/svg+xml" />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          FiraSans.variable,
          "font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
