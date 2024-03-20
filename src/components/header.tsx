import React from "react";
import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <main className="flex mx-8 my-4 justify-end gap-4">
      <ConnectButton label="Other Wallets..." />
      <WalletButton wallet="metamask" />
    </main>
  );
};

export default Header;
