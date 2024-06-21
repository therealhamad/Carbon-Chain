// context/Web3Modal.tsx

"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import "dotenv";
import dotenv from "dotenv";

dotenv.config();

export const projectId = `${
  process.env.NEXT_PUBLIC_WEB3MODAL_PROJECT_ID || ""
}`;

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const metadata = {
  name: "Carbon-chain",
  description: "Carbon credits",
  url: "https://sahilraj.xyz", // origin must match your domain & subdomain
  icons: ["https://sahilraj.xyz/favicon.png"],
};

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export function Web3Modal({ children }) {
  return children;
}
