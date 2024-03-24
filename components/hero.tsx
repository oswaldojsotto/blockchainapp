"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { WalletButton } from "@rainbow-me/rainbowkit";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("@/components/countdown/countdown"), {
  ssr: false,
});

const Hero = () => {
  const HALVING = 24 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date("2024-03-21").getTime();

  const timeToHalving = NOW_IN_MS + HALVING;

  return (
    <div className="flex flex-col md:flex-row justify-start lg:justify-center w-full bg">
      <div className="flex flex-col lg:flex-row lg:max-w-4xl w-full  lg:justify-between">
        <div className="mt-12 mb-12 flex ">
          <div className=" gap-[-16] text-[2.5rem] sm:text-[3rem] md:text-[4rem]  font-bold text-[#1E2329] flex flex-col">
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
        <div className="flex flex-col justify-center">
          <p className="text-xl font-semibold">
            <span className="font-bold text-[#F0B90B]">Bitcoin</span> Halving
          </p>
          <Countdown targetDate={timeToHalving} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
