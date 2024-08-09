import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkInIcon } from "./icons/LinkInIcon";

export const Header = () => (
  <header className="sticky top-0 z-40">
    <Section className="flex items-center pb-0 backdrop-blur-sm">
      <img
        src="/me_picture.png"
        alt="me picture"
        className="size-16 rounded-full border border-accent bg-white object-cover
        "
      />
      <div className="flex-1" />
      <ul className="space-x-2">
        {" "}
        <Link
          href={"https://github.com/warrenrhodes"}
          className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
        >
          <GithubIcon size={12} />
        </Link>{" "}
        <Link
          href={"https://www.linkedin.com/warren-rhodes-140970225"}
          className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
        >
          <LinkInIcon size={12} />
        </Link>
        <div
          className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
        >
          <Settings size={12} />
        </div>
      </ul>
    </Section>
  </header>
);
