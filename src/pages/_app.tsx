import "@rainbow-me/rainbowkit/styles.css";
import "tailwindcss/tailwind.css";
import { chains, wagmiClientConfig } from "../config/wallet";
import { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import {
  RainbowKitProvider,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { CookiesProvider } from "react-cookie";
import { ThemeContextProvider } from "@/contexts/theme-config";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <CookiesProvider>
          <WagmiConfig config={wagmiClientConfig}>
            <RainbowKitProvider
              theme={{
                lightMode: lightTheme({
                  accentColor: "black",
                  borderRadius: "small",
                  overlayBlur: "small",
                }),
                darkMode: darkTheme({
                  borderRadius: "small",
                  overlayBlur: "small",
                }),
              }}
              chains={chains}
            >
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        </CookiesProvider>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
