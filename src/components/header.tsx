import React from "react";
import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <main className="flex  justify-end gap-4 bg-neutral-200 w-full">
      <div className="p-4 flex gap-2  justify-end">
        <ConnectButton label="Other Wallets..." />
        <WalletButton wallet="metamask" />
      </div>
    </main>
  );
};

export default Header;
