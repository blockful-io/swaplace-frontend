import {
  DEFAULT_THEME,
  Theme,
  THEME_COOKIE_KEY,
  THEMES_CONFIGURATION,
} from "../lib/client/constants";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const ThemeContext = React.createContext({
  theme: THEMES_CONFIGURATION[DEFAULT_THEME],
  updateActiveThemeConfiguration: (newTheme: Theme) => {},
});

export const ThemeContextProvider = ({ children }: any) => {
  const [cookies, setCookie] = useCookies([THEME_COOKIE_KEY]);

  const updateActiveThemeConfiguration = (newTheme: Theme) => {
    setCookie(THEME_COOKIE_KEY, newTheme, {
      path: "/",
    });
    configTheme({
      ...theme,
      theme: THEMES_CONFIGURATION[newTheme],
    });
  };

  const [theme, configTheme] = useState({
    theme: THEMES_CONFIGURATION[Theme.Loading],
    updateActiveThemeConfiguration,
  });

  useEffect(() => {
    const initialTheme = !!cookies[THEME_COOKIE_KEY]
      ? THEMES_CONFIGURATION[cookies[THEME_COOKIE_KEY] as Theme]
      : THEMES_CONFIGURATION[DEFAULT_THEME];

    configTheme({
      theme: initialTheme,
      updateActiveThemeConfiguration,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
