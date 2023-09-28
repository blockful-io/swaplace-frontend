/* 
    This file should hold the wallet interaction functions
    that are used by the UI. We use viem (https://viem.sh/)
    to interact with the blockchain.
*/

import { ENV_DEFAULT_CHAIN_ID } from "@/config/wallet";
import { getPublicClient } from "@wagmi/core";
import { createWalletClient, custom } from "viem";
import { goerli, mainnet } from "viem/chains";

const validateAddress = (address: string) => {
  const ETHEREUM_ADDRESS_LENGTH = 40;
  const pattern = new RegExp(`^0x[a-fA-F0-9]{${ETHEREUM_ADDRESS_LENGTH}}$`);

  if (!pattern.test(address)) {
    throw new Error(`Invalid Ethereum address: ${address}`);
  } else {
    return true;
  }
};

// Get Signer and Provider
const getProvider = () => {
  return getPublicClient({ chainId: ENV_DEFAULT_CHAIN_ID });
};

const getSigner = (userAddress: string) => {
  if (validateAddress(userAddress))
    return createWalletClient({
      chain: process.env.NEXT_PUBLIC_USE_TESTNET ? goerli : mainnet,
      transport: custom(window.ethereum!),
      account: userAddress as `0x${string}`,
    });
};
