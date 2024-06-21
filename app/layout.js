import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Web3Modal } from "../context/Web3Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carbon-chain",
  description: "Carbon credits dapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CarbonChain</title>
      </head>
      <body className={inter.className}>
        <Navbar></Navbar>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}
