"use client";

import { useLocale } from "@/app/provider/localization";
import { dictionary, DictWords } from "../localization";

export const useLocalization = () => {
  const { locale } = useLocale();

  const localization = new Proxy({} as Record<DictWords, string>, {
    get: (target, prop: DictWords) => {
      return dictionary[prop][locale] || prop;
    },
  });

  return { localization };
};
