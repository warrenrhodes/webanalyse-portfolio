import Image from "next/image";
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";

export const Hero = () => (
  <Section className="flex items-start gap-3 py-0 max-md:flex-col">
    <div className="flex flex-[2] flex-col gap-2">
      <h2 className="font-caption text-5xl text-primary">Warren Rhodes</h2>
      <h3 className="font-caption text-3xl">Software Developer</h3>
      <span>
      I love creating content. currently working at{" "}
      <Link href={"https://spreeloop.com"}>
          <Code>
            <Image
              src={"/spreeloop_logo.png"}
              alt="spreeloop logo"
              width={15}
              height={15}
            />
            Spreeloop
          </Code>
        </Link>.
        Living i <Code className="inline-flex items-center gap-1">
          <Image
            src={"/Flag_of_Cameroon.png"}
            alt="spreeloop logo"
            width={15}
            height={15}
          />
          Cameroun
        </Code>
              
            </span>
     
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
