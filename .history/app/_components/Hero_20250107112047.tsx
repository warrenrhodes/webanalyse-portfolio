"use client";

import { useLocalization } from "@/lib/hooks/useLocalization";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const { localization } = useLocalization();
  const downloadResume = () => {
    window.open(
      "https://docs.google.com/document/d/1HsAWJGKIf_u2XM7OkTQxNwGZHiRhCkZE73TMu3SwTJg/edit?usp=sharing",
      "_blank"
    );
  };
  return (
    <Section className="flex items-start gap-3 py-0 max-md:flex-col z-50">
      <div className="flex flex-[2] flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Warren Rhodes</h2>
        <h3 className="font-caption text-3xl">Software Developer</h3>
        <span className="relative flex flex-wrap items-center text-base text-muted-foreground">
          {localization.iLoveCreating}{" "}
          <Link href={"https://spreeloop.com"}>
            <Code className="m-1 inline-flex items-center gap-1">
              <img
                src={"/spreeloop_logo.png"}
                alt="spreeloop logo"
                className="size-4"
              />
              Spreeloop
            </Code>
          </Link>
          . {localization.livingIn}{" "}
          <Code className="m-1 inline-flex items-center gap-1">
            <img
              src={"/flag_of_Cameroon.png"}
              alt="spreeloop logo"
              className="size-4"
            />
            Cameroun
          </Code>
        </span>
        <Button
          type="button"
          // className="flex items-center gap-2 p-4 w-auto rounded-2xl bg-primary/15 text-center font-sans text-xl font-semibold ring-1 cursor-pointer hover:bg-primary/30"
          onClick={downloadResume}
        >
          <LinkIcon />

          <p className="text-primary">{localization.download}</p>
        </Button>
      </div>
      <div id="me-avatar" className="ml-auto flex-1 max-md:m-auto">
        <img
          src={"/me_avatar.png"}
          alt="my picture"
          className="h-auto w-full max-w-xs  max-md:w-48"
        />
      </div>
    </Section>
  );
};
