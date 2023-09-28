/*
    This file should hold the addresses of the blockchain
    contracts that are used by the application.
*/

import { SupportedNetworks } from "@/config/wallet";

enum Contracts {
  "MyContractName",
}

export const ContractAddressByChain: Record<
  SupportedNetworks,
  Record<Contracts, string>
> = {
  [SupportedNetworks.Mainnet]: {
    [Contracts.MyContractName]: "0x000",
  },
  [SupportedNetworks.Goerli]: {
    [Contracts.MyContractName]: "0x000",
  },
};
