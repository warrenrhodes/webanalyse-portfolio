import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => (
  <section className={cn("max-w-4xl m-auto p-4", props.className)}>
    {props.children}
  </section>
);
