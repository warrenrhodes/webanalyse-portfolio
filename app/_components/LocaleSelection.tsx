"use client";

import { buttonVariants } from "@/components/ui/button";

import { Locale, localization } from "@/lib/localization";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useLocale } from "../provider/localization";

export const LocaleSelection = () => {
  const { locale, setLocale } = useLocale();

  const handleLocaleSelection = (newLocale: Locale) => {
    if (locale === newLocale) return;
    setLocale(newLocale);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            buttonVariants({ variant: "outline" }),
            "relative w-full h-full p-0 z-10 group-hover:bg-transparent backdrop-blur-sm cursor-pointer bg-primary/5"
          )}
        >
          {locale}
          <div className="absolute inset-0 size-full rounded-md bg-primary/5 p-0 transition-all duration-300 group-hover:origin-bottom group-hover:rotate-45" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-12 p-0">
        <div className="flex w-full flex-col space-y-2 p-1">
          {localization.locales.map((i) => (
            <div
              key={i}
              onClick={() => handleLocaleSelection(i)}
              className={cn(
                { "bg-primary/15": locale == i },
                "h-7 w-full cursor-pointer hover:bg-primary/30 flex items-center justify-center"
              )}
            >
              {i}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
