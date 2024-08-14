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
    document.documentElement.setAttribute("locale", localToSet);
    window.localStorage.setItem("locale", localToSet);
  }, []);

  useEffect(() => {
    let localToSet: Locale = localization.defaultLocale;
    const preference = window.localStorage.getItem("locale");

    if (preference && preference !== "null" && localIsValid(preference)) {
      localToSet = preference as Locale;
    }

    document.documentElement.setAttribute("locale", localToSet);
    window.localStorage.setItem("locale", localToSet);

    setSaveLocale(localToSet);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLocale = (): LanguageContextType => useContext(LanguageContext);
