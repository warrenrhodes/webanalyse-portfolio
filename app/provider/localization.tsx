"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  LanguageContextType,
  Locale,
  localIsValid,
  localization,
} from "../../lib/localization";

const initialContext: LanguageContextType = {
  locale: localization.defaultLocale,
  setLocale: () => null,
};
const LanguageContext = createContext(initialContext);

export const LanguageProvider = (props: PropsWithChildren) => {
  const [locale, setSaveLocale] = useState(localization.defaultLocale);

  const setLocale = useCallback((localToSet: Locale) => {
    setSaveLocale(localToSet);
    document.documentElement.lang = localToSet;
    window.localStorage.setItem("lang", localToSet);
  }, []);

  useEffect(() => {
    let localToSet: Locale = localization.defaultLocale;
    const preference = window.localStorage.getItem("lang");

    if (preference && preference !== "null" && localIsValid(preference)) {
      localToSet = preference as Locale;
    }

    document.documentElement.lang = localToSet;
    window.localStorage.setItem("lang", localToSet);

    setSaveLocale(localToSet);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLocale = (): LanguageContextType => useContext(LanguageContext);
