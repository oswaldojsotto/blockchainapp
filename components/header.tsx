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
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const router = useRouter();
  const { connector } = useAccount();
  const walletIcon = connector?.icon;
  const backToMain = () => {
    router.push("/");
  };

  return (
    <main className="bg-white z-10 flex fixed w-full justify-center border-b-2 h-[72px] ">
      <div className="flex justify-between w-full lg:max-w-4xl mx-8 lg-mx-0">
        <div
          className="flex items-center  cursor-pointer tracking-tighter b "
          onClick={() => backToMain()}>
          <h1 className="font-bold text-2xl text-[#F0B90B] drop-shadow-xl min-w-[6rem]">
            BE<span className="text-neutral-700 mt-[4px]">-</span>TRADE
          </h1>
        </div>

        <div className=" justify-between gap-2 py-4 hidden sm:flex">
          <WalletConnectButton />
        </div>
        <div className="flex sm:hidden ">
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
      </div>
    </main>
  );
};

export default Header;
