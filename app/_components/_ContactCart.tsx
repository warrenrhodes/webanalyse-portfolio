import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type Contact = {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
};

export const ContactCart = (props: Contact) => {
  return (
    <Link
      href={props.link}
      className="group inline-flex h-16 w-full items-center gap-2 rounded-md border border-accent bg-primary/5 p-2 hover:bg-primary/10"
    >
      <div className="relative size-12 max-w-md rounded-full">
        <img
          src="/me_picture.png"
          alt="me picture"
          className="size-11 rounded-full border border-accent bg-white object-cover
      "
        />
        <div className="absolute bottom-0 right-0 flex size-5 rounded-full bg-white p-1">
          {props.icon}
        </div>
      </div>

      <div className="mr-auto">
        <h3 className="text-sm font-semibold">{props.title}</h3>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>

      <div className="ml-0 text-end text-[10px] text-muted-foreground">
        <ArrowUpRight className="mr-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
