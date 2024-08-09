import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = (
  props: ComponentPropsWithoutRef<"span"> & { className?: string }
) => {
  return (
    <span
      className={cn(
        props.className,
        "text-primary text-sm bg-primary/15 hover:bg-primary/25 transition-colors p-1 rounded-sm border border-accent font-mono"
      )}
    >
      {props.children}
    </span>
  );
};
