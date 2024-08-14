"use client";

import { useLocalization } from "@/lib/hooks/useLocalization";
import Link from "next/link";
import { Code } from "./Code";
import { FlutterIcon } from "./icons/FlutterIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { Section } from "./Section";

export const Skills = () => {
  const { localization } = useLocalization();

  return (
    <Section className="flex flex-col gap-5">
      <p className="text-sm text-muted-foreground">{localization.skills}</p>
      <p className="text-2xl font-semibold tracking-tight">
        {localization.iLoveWorkOn}...
      </p>
      <div className="space-y-8 pt-5 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        <SectionGrid
          title="Flutter"
          description={
            <span>
              {localization.flutterDescription1}{" "}
              <Link href={"https://flutter.dev"}>
                <Code>Flutter</Code> .
              </Link>
              {localization.flutterDescription2}
            </span>
          }
          icon={<FlutterIcon className="size-10 object-contain" />}
        />
        <SectionGrid
          title="React"
          description={
            <span>
              {localization.reactDescription1}
              <u>{localization.reactDescription2}</u>{" "}
              {localization.reactDescription3}
              <Link href={"https://nextjs.org/"}>
                <Code>Next.js</Code>
              </Link>
              {localization.reactDescription4}
            </span>
          }
          icon={<ReactIcon className="size-10 animate-spin-slow" />}
        />
        <SectionGrid
          title="Tailwind"
          description={
            <span>
              {localization.reactDescription1}{" "}
              <u>{localization.tailwindDescription2}</u>
              {localization.tailwindDescription3}
              <Code>Tailwindcss</Code>.
            </span>
          }
          icon={<TailwindIcon className="size-10 object-contain" />}
        />
      </div>
    </Section>
  );
};

const SectionGrid = (props: {
  title: string;
  description: JSX.Element;
  icon: JSX.Element;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      {props.icon}
      <h3 className="mb-2 text-xl font-bold">{props.title}</h3>
      <p className={"text-base text-muted-foreground"}>{props.description}</p>
    </div>
  );
};
