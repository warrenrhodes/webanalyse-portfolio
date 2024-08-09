import Link from "next/link";
import { Code } from "./Code";
import { FlutterIcon } from "./icons/FlutterIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { Section } from "./Section";

export const Skills = () => {
  return (
    <Section className="flex flex-col gap-5">
      <p className="text-sm text-muted-foreground">Skills</p>
      <p className="text-2xl font-semibold tracking-tight">
        I love working on...
      </p>
      <div className="space-y-8 pt-5 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        <SectionGrid
          title="Flutter"
          description={
            <span>
              My main framework is{" "}
              <Link href={"https://flutter.dev"}>
                <Code>Flutter</Code> .
              </Link>
              is the best hybrid framework to create the app multi-platform with
              only one code.
            </span>
          }
          icon={<FlutterIcon className="size-10 object-contain" />}
        />
        <SectionGrid
          title="React"
          description={
            <span>
              I can create <u>smooth</u> application base on your convenance. i
              also use{" "}
              <Link href={"https://nextjs.org/"}>
                <Code>Next.js</Code>
              </Link>
              as a backend and frontend framework
            </span>
          }
          icon={<ReactIcon className="size-10 animate-spin-slow" />}
        />
        <SectionGrid
          title="Tailwind"
          description={
            <span>
              I can create <u>beautiful</u> application seconds using{" "}
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
