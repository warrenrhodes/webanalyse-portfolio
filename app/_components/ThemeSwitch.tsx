"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Theme, themes } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { useTheme } from "../provider/theme";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeSelection = (newTheme: Theme) => {
    if (newTheme.name === theme.name) return;
    setTheme(newTheme);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            buttonVariants({ variant: "outline" }),
            "relative w-7 h-full p-1 z-10 group-hover:bg-transparent backdrop-blur-sm cursor-pointer"
          )}
        >
          <div
            className="size-full rounded-sm"
            style={{ backgroundColor: `hsl(${theme?.colors.primary})` }}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <div className="flex flex-col space-y-2 p-1">
          {themes.map((i) => (
            <div
              key={i.name}
              className={cn(
                { "bg-primary/15": theme.name == i.name },
                "w-full cursor-pointer hover:bg-primary/30 flex flex-col items-center justify-center"
              )}
              onClick={() => handleThemeSelection(i)}
            >
              <div className="flex w-full items-center justify-center">
                <div
                  className="m-1 rounded-sm ring-1"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: `hsl(${i.colors.primary})`,
                  }}
                />
                <div
                  className="m-1 rounded-sm ring-1"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: `hsl(${i.colors.background})`,
                  }}
                />
                <div
                  className="m-1 rounded-sm ring-1"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: `hsl(${i.colors.secondary})`,
                  }}
                />
              </div>

              <p> {i.name}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
