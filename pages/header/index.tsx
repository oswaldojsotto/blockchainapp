import React from "react";
import styles from "../../styles/Home.module.css";
import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <main className="flex">
      <ConnectButton label="Connect Wallets" />
      <WalletButton wallet="metamask" />
    </main>
  );
};

export default Header;
