import React from "react";
import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <main className="flex  fixed top-0 justify-between gap-4 -200 w-full bg-white shadow-md">
      <div className=" flex items-center mx-8">
        <h1 className="font-bold text-2xl text-[#F0B90B]">
          BE<span className="text-neutral-800">-</span>TRADE
        </h1>
      </div>
      <div className="p-4 flex gap-2  justify-between">
        <ConnectButton label="Other Wallets..." />
        <WalletButton wallet="metamask" />
      </div>
    </main>
  );
};

export default Header;
