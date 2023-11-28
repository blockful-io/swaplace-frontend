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
import Head from "next/head";
import localFont from "next/font/local";
import "@/styles/globals.css";

const onest = localFont({
  src: "../../public/fonts/Onest-VariableFont_wght.woff2",
  variable: "--font-onest",
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>Swaplace</title>
        <link rel="icon" href="/images/favicon.png" />
        <meta
          name="description"
          content="Swaplace is a P2P DEX, ownerless, open-source, cross-chain and feeless environment designed for swaps."
        />
        <meta name="robots" content="index" />
        <link
          rel="canonical"
          href="https://swaplace-frontend.vercel.app/about"
        />
      </Head>
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
              <main className={onest.className}>
                <Component {...pageProps} />
              </main>
            </RainbowKitProvider>
          </WagmiConfig>
        </CookiesProvider>
      </ThemeContextProvider>
    </>
  );
}
