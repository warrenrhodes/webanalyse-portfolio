"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Theme, ThemeContextType, themes } from "../../lib/theme";

const initialContext: ThemeContextType = {
  theme: themes[0],
  setTheme: () => null,
};
export const ThemeContext = createContext(initialContext);

export const ThemeProvider = (props: React.PropsWithChildren) => {
  const [theme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = useCallback((themeToSet: Theme) => {
    const preference = window.localStorage.getItem("theme");
    console.log({ preference });
    if (preference && preference !== "null") {
      document.body.classList.remove(preference);
    }
    document.body.classList.add(themeToSet.name);
    window.localStorage.setItem("theme", themeToSet.name);
    setCurrentTheme(() => themeToSet);
  }, []);

  useEffect(() => {
    let themeToSet: Theme | undefined;
    const preference = window.localStorage.getItem("theme");
    if (preference && preference !== "null") {
      themeToSet = themes.find((theme) => theme.name === preference) ?? theme;
    }
    if (!themeToSet) themeToSet = themes[0];
    setCurrentTheme(() => themeToSet);
    document.body.classList.add(themeToSet.name);
    window.localStorage.setItem("theme", themeToSet.name);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
