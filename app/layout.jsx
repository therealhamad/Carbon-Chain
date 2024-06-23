import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Web3Provider from "@/components/Web3Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CarbonChain</title>
      </head>
      <body className={inter.className}>
        <Web3Provider>
          <Navbar />
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
