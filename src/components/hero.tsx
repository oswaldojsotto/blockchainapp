"use client";
import React from "react";
import { Button } from "./ui/button";
import { WalletButton } from "@rainbow-me/rainbowkit";

const Hero = () => {
  return (
    <div className="mt-12 mb-12">
      <div className=" gap-[-16] text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.5rem] font-bold text-[#1E2329] flex flex-col">
        <p className="">Trading</p>
        <p className="-mt-4 md:-mt-8">
          <span className="text-[#F0B90B]">Crypto</span> has never
        </p>
        <p className="-mt-4 md:-mt-8">Been easier</p>
      </div>

      <WalletButton.Custom wallet="metamask">
        {({ ready, connect }) => {
          return (
            <Button variant="custom" disabled={!ready} onClick={connect}>
              🦊 Sign In with MetaMask
            </Button>
          );
        }}
      </WalletButton.Custom>
    </div>
  );
};

export default Hero;
