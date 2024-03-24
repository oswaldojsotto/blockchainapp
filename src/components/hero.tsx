"use client";
import React from "react";
import { Button } from "@/src/components/ui/button";
import { WalletButton } from "@rainbow-me/rainbowkit";

const Hero = () => {
  return (
    <div className="flex justify-start lg:justify-center w-full">
      <div className="mt-12 mb-12  w-full lg:max-w-4xl">
        <div className=" gap-[-16] text-[2rem] sm:text-[3rem] md:text-[4rem]  font-bold text-[#1E2329] flex flex-col">
          <p className="">Trading</p>
          <p className="-mt-4 md:-mt-8">
            <span className="text-[#F0B90B]">Crypto</span> has never
          </p>
          <p className="-mt-4 md:-mt-8">Been easier</p>
          <div className="-my-4 lg:-my-8">
            <WalletButton.Custom wallet="metamask">
              {({ ready, connect }) => {
                return (
                  <Button
                    size="sm"
                    variant="custom"
                    disabled={!ready}
                    onClick={connect}>
                    🦊 Connect with MetaMask
                  </Button>
                );
              }}
            </WalletButton.Custom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
