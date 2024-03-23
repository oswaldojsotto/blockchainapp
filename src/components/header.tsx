"use client";
import React from "react";
import { WalletConnectButton } from "./wallet-connect-button";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const backToMain = () => {
    router.push("/");
  };

  return (
    <main className="fixed top-0 flex justify-between w-full gap-4 bg-white shadow-md -200 z-10">
      <div
        className="flex items-center mx-8 cursor-pointer tracking-tighter b "
        onClick={() => backToMain()}>
        <h1 className="font-bold text-xl sm:text-2xl  text-[#F0B90B] min-w-[6rem]">
          BE<span className="text-neutral-700">-</span>TRADE
        </h1>
      </div>
      <div className="flex justify-between gap-2 p-4 ">
        <WalletConnectButton />
      </div>
    </main>
  );
};

export default Header;
