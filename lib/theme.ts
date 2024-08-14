export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
}

export const themes: Theme[] = [
  {
    name: "theme-default",
    colors: {
      primary: "229 100% 62%",
      secondary: "229 14% 8%;",
      background: "229 41% 4%",
    },
  },
  {
    name: "theme-orange",
    colors: {
      primary: "20.5 90.2% 48.2%",
      secondary: "12 6.5% 15.1%",
      background: "20 14.3% 4.1%",
    },
  },
  {
    name: "theme-rose",
    colors: {
      primary: "346.8 77.2% 49.8%",
      secondary: "240 3.7% 15.9%",
      background: "20 14.3% 4.1%",
    },
  },
  {
    name: "theme-light-blue",
    colors: {
      primary: "229 100% 62%",
      secondary: "229 20% 90%",
      background: "229 57% 100%",
    },
  },
  {
    name: "theme-light-orange",
    colors: {
      primary: "24.6 95% 53.1%",
      secondary: "60 4.8% 95.9%",
      background: " 0 0% 100%",
    },
  },
  {
    name: "theme-light-rose",
    colors: {
      primary: "346.8 77.2% 49.8%",
      secondary: "240 4.8% 95.9%",
      background: "0 0% 100%",
    },
  },
];
