"use client";

import Preview from "@/components/Preview";
import Collection from "@/components/Collection";
import CollectionCards from "@/components/CollectionCards";

import Header from "@/components/Header";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

export default function Home() {
  return (
    <main className="mx-20">
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <Header />
            <Preview />
            <Collection />
            <CollectionCards />
            <CollectionCards />
            <CollectionCards />
            <CollectionCards />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </main>
  );
}
