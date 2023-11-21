export enum Theme {
  "Light" = "light",
  "Dark" = "dark",
  "Loading" = "loading",
}
export const DEFAULT_THEME = Theme.Dark;
export const THEME_COOKIE_KEY = "swaplace_theme";

interface ThemeConfig {
  // Create a configuration for making these options available
  // to be used in the JSX definition by UI components across the app,
  // for customization purposes.
  themeName: Theme;
  mainColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  connectWalletBackground: string;
  connectWalletTextColor: string;
  hoveredConnectWalletBackground: string;
  hoveredConnectWalletTextColor: string;
}

export const THEMES_CONFIGURATION: Record<Theme, ThemeConfig> = {
  [Theme.Loading]: {
    themeName: Theme.Loading,
    mainColor: "",
    secondaryColor: "",
    tertiaryColor: "",
    primaryTextColor: "",
    secondaryTextColor: "",
    connectWalletBackground: "",
    connectWalletTextColor: "",
    hoveredConnectWalletBackground: "",
    hoveredConnectWalletTextColor: "",
  },
  [Theme.Light]: {
    themeName: Theme.Light,
    mainColor: "#F7F7F7",
    secondaryColor: "#FFFFFF",
    tertiaryColor: "#F7F7F7",
    primaryTextColor: "#000000",
    secondaryTextColor: "#000000",
    connectWalletBackground: "#000",
    connectWalletTextColor: "#FFF",
    hoveredConnectWalletBackground: "#CCC",
    hoveredConnectWalletTextColor: "#000",
  },
  [Theme.Dark]: {
    themeName: Theme.Dark,
    mainColor: "#0B221E",
    secondaryColor: "#DDF23D",
    tertiaryColor: "#F6F6F1",
    primaryTextColor: "#FFF",
    secondaryTextColor: "#FFF",
    connectWalletBackground: "#FFF",
    connectWalletTextColor: "#000",
    hoveredConnectWalletBackground: "#CCC",
    hoveredConnectWalletTextColor: "#FFF",
  },
};
