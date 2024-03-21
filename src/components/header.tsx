import React from "react";
import { WalletConnectButton } from "./wallet-connect-button";

const Header = () => {
  return (
    <main className="fixed top-0 flex justify-between w-full gap-4 bg-white shadow-md -200">
      <div className="flex items-center mx-8 ">
        <h1 className="font-bold text-2xl text-[#F0B90B]">
          BE<span className="text-neutral-700">-</span>TRADE
        </h1>
      </div>
      <div className="flex justify-between gap-2 p-4">
        {/* <ConnectButton label="Other Wallets..." /> */}
        <WalletConnectButton />
        {/* <WalletButton wallet="metamask" /> */}
      </div>
    </main>
  );
};

export default Header;
