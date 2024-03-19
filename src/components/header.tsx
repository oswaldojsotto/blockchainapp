import React from "react";
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
