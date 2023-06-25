import { configureChains, createConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

const apiKey = process.env.NEXT_PUBLIC_USE_TESTNET
  ? process.env.NEXT_PUBLIC_ALCHEMY_TESTNET_KEY
  : process.env.NEXT_PUBLIC_ALCHEMY_KEY;

const { chains, publicClient } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: apiKey ?? "" }), publicProvider()]
);

const wagmiClientConfig = createConfig({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  publicClient,
});

export { chains, wagmiClientConfig };
