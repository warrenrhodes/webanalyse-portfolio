import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkInIcon } from "./icons/LinkInIcon";
import { LocaleSelection } from "./LocaleSelection";
import { Section } from "./Section";
import { ThemeSwitch } from "./ThemeSwitch";

export const Header = () => (
  <header className="sticky top-0 z-40">
    <Section className="z-10 flex items-center pb-0 backdrop-blur-sm">
      <img
        src="/me_avatar.png"
        alt="me picture"
        className="size-16 object-contain"
      />
      <div className="flex-1" />
      <ul className="flex space-x-2">
        <div className="group relative size-8">
          <Link
            href={"https://github.com/warrenrhodes"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "relative w-full h-full p-0 z-10 group-hover:bg-transparent backdrop-blur-sm bg-primary/5"
            )}
          >
            <GithubIcon size={12} />
          </Link>
          <div className="absolute inset-0 size-full rounded-md bg-primary/5 p-0 transition-all duration-300 group-hover:origin-bottom group-hover:rotate-45" />
        </div>
        <div className="group relative size-8">
          <Link
            href={"https://www.linkedin.com/warren-rhodes-140970225"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "relative w-full h-full p-0 z-10 group-hover:bg-transparent backdrop-blur-sm bg-primary/5"
            )}
          >
            <LinkInIcon size={12} />
          </Link>
          <div className="absolute inset-0 size-full rounded-md bg-primary/5 p-0 transition-all duration-300 group-hover:origin-bottom group-hover:rotate-45" />
        </div>

        <div className="group relative size-8">
          <LocaleSelection />
        </div>
        <div className="group relative">
          <ThemeSwitch />
        </div>
      </ul>
    </Section>
  </header>
);
