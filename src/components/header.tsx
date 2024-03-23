"use client";
import React from "react";
import { WalletConnectButton } from "./wallet-connect-button";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const router = useRouter();
  const { connector } = useAccount();
  const walletIcon = connector?.icon;
  const backToMain = () => {
    router.push("/");
  };

  return (
    <main className="fixed top-0 flex justify-between w-full gap-4 bg-white shadow-md -200 z-10 h-[70px]">
      <div
        className="flex items-center mx-8 cursor-pointer tracking-tighter b "
        onClick={() => backToMain()}>
        <h1 className="font-bold text-2xl   text-[#F0B90B] min-w-[6rem]">
          BE<span className="text-neutral-700">-</span>TRADE
        </h1>
      </div>

      <div className=" justify-between gap-2 p-4 hidden sm:flex">
        <WalletConnectButton />
      </div>
      <div className="flex sm:hidden mx-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div className="w-8 h-8 max-w-8 max-h-8">
              <img
                className="outline-none"
                src={
                  walletIcon !== undefined
                    ? walletIcon
                    : "/icons/hamburguer.svg"
                }
                alt="wallet"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom">
            <DropdownMenuItem>
              <WalletConnectButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </main>
  );
};

export default Header;
