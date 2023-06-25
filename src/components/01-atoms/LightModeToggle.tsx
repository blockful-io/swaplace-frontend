import { ThemeContext } from "@/contexts/theme-config";
import { Theme } from "@/lib/client/constants";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect } from "react";

export const LightModeToggle = () => {
  const { theme, updateActiveThemeConfiguration } = useContext(ThemeContext);

  return (
    <div>
      {theme.themeName === Theme.Light ? (
        <button
          onClick={() => updateActiveThemeConfiguration(Theme.Dark)}
          style={{ fill: "#000" }}
        >
          <MoonIcon className="w-10 lg:w-12 hover:text-gray-300" />
        </button>
      ) : theme.themeName === Theme.Dark ? (
        <button onClick={() => updateActiveThemeConfiguration(Theme.Light)}>
          <SunIcon
            className="w-10 lg:w-12 hover:text-gray-300"
            style={{ fill: "#FFF" }}
          />
        </button>
      ) : null}
    </div>
  );
};
