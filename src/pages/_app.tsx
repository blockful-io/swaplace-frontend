import "@rainbow-me/rainbowkit/styles.css";
import "tailwindcss/tailwind.css";
// import "../styles/global.css";
// import "../styles/fonts.css";

import { chains, wagmiClientConfig } from "../config/wallet";

import { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
// import {
//   ReservoirKitProvider,
//   lightTheme as reservoirLightTheme,
// } from "@reservoir0x/reservoir-kit-ui";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { CookiesProvider } from "react-cookie";
import { ThemeContextProvider } from "@/contexts/theme-config";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  //   const reservoirTheme = reservoirLightTheme({
  //     headlineFont: "Inter",
  //     font: "Inter",
  //     buttonFont: "Inter",
  //     primaryColor: "black",
  //     textColor: "black",
  //     primaryHoverColor: "rgb(31 41 55)", // text-gray-800
  //     buttonTextColor: "white",
  //     buttonTextHoverColor: "white",
  //     borderRadius: "10px",
  //     overlayBackground: "rgba(0,0,0, 0.3)",
  //   });

  return (
    <>
      <ThemeContextProvider>
        <CookiesProvider>
          {/* <SessionProvider session={session}> */}
          {/* <ReservoirKitProvider
              options={{
                chains: [
                  {
                    id: 1,
                    baseApiUrl: "https://api.reservoir.tools",
                    default: true,
                    apiKey: process.env.NEXT_PUBLIC_RESERVOIR_API_KEY,
                  },
                  {
                    id: 5,
                    baseApiUrl: "https://api-goerli.reservoir.tools",
                    default: false,
                    apiKey: process.env.NEXT_PUBLIC_RESERVOIR_API_KEY,
                  },
                ],
                disablePoweredByReservoir: true,
                source: "namehash.io",
                marketplaceFee: 150, // 1.5%
                marketplaceFeeRecipient:
                  process.env.NEXT_PUBLIC_NAMEHASH_TREASURY_ADDRESS,
              }}
              theme={reservoirTheme}
            > */}
          <WagmiConfig config={wagmiClientConfig}>
            <RainbowKitProvider
              theme={lightTheme({
                accentColor: "black",
                borderRadius: "small",
                overlayBlur: "small",
              })}
              chains={chains}
            >
              <Component {...pageProps} />
              {/* <Toaster
                    position="bottom-center"
                    toastOptions={{
                      icon: null,
                      className: "bg-black",
                      style: {
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "6px",
                        fontSize: "14px",
                        boxShadow:
                          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        padding: "12px",
                        fontWeight: 500,
                      },
                    }}
                  /> */}
            </RainbowKitProvider>
          </WagmiConfig>
          {/* </ReservoirKitProvider> */}
          {/* </SessionProvider> */}
        </CookiesProvider>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
// export default trpc.withTRPC(MyApp);
