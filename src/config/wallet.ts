import { configureChains, createConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

const apiKey = process.env.NEXT_PUBLIC_USE_TESTNET
  ? process.env.NEXT_PUBLIC_ALCHEMY_TESTNET_KEY
  : process.env.NEXT_PUBLIC_ALCHEMY_KEY;

const { chains, publicClient } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: apiKey ?? "" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Swaplace",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "",
  chains,
});

const wagmiClientConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { chains, wagmiClientConfig };
