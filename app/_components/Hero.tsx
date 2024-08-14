"use client";

import { useLocalization } from "@/lib/hooks/useLocalization";
import { Download } from "lucide-react";
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";

export const Hero = () => {
  const { localization } = useLocalization();
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/cv_Lekane_Warren.pdf";
    link.download = "cv_Lekane_Warren";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Section className="flex items-start gap-3 py-0 max-md:flex-col">
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
        <button
          type="button"
          className="group relative h-14 w-48 rounded-2xl bg-primary/15 text-center font-sans text-xl font-semibold ring-1"
          onClick={downloadResume}
        >
          <div className="absolute left-1 top-[4px] z-10 flex h-12 w-1/4 items-center justify-center gap-3 overflow-hidden rounded-xl  bg-primary/25 text-primary duration-500 group-hover:w-[184px]">
            <p className="hidden text-primary transition-all group-hover:flex">
              {localization.download}
            </p>
            <Download />
          </div>
          <p className="translate-x-2 text-primary transition-all group-hover:invisible">
            {localization.resume}
          </p>
        </button>
      </div>
      <div className="ml-auto flex-1 max-md:m-auto">
        <img
          src={"/me_avatar.png"}
          alt="my picture"
          className="h-auto w-full max-w-xs  max-md:w-48"
        />
      </div>
    </Section>
  );
};
