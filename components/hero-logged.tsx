"use client";
import Image from "next/image";
import React, { useState } from "react";
import { copyToClipboard } from "@/hooks/useClipboard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { usdFormatter } from "@/hooks/usd-formatter";

const HeroLogged = ({ balance, address, walletName }: HeroLoggedProps) => {
  const [showBalance, setShowBalance] = useState(false);
  const usd = useSelector((state: RootState) => state.ethereumPrice.usd);

  return (
    <div className="  w-full flex lg:justify-center ">
      <div className=" w-full lg:max-w-4xl">
        <h1 className="font-bold text-[28px] mt-8 ">Wallet Overview</h1>

        <section className="flex gap-2 ">
          <div className="font-semibold flex flex-col sm:flex-row sm:gap-2">
            <p className="text-[14px] font-semibold sm:text-[16px]">
              {walletName} Address:
            </p>
            <div className="flex ">
              <p className="text-[14px] font-semibold sm:text-[16px]">
                {address}
              </p>
              <div
                className=""
                onClick={() => copyToClipboard(JSON.stringify(address))}>
                <Image
                  className=" sm:mt-0.5 w-5 max-w-5 h-5 max-h-5 cursor-pointer  transition-all "
                  width={16}
                  height={16}
                  alt="show-balance-icon"
                  src={`/icons/clipboard.svg`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex  font-semibold text-[14px] my-4 ">
          <p>Estimated Balance</p>
          <div
            className=" mt-[1px] mx-2 cursor-pointer select-none "
            onClick={() => setShowBalance(!showBalance)}>
            <Image
              className="w-5 max-w-5 h-5 max-h-5"
              width={16}
              height={16}
              alt="show-balance-icon"
              src={`${
                showBalance ? `/icons/eye-open.svg` : `/icons/eye-closed.svg`
              }`}
            />
          </div>
        </section>
        <section>
          {showBalance ? (
            <div className="font-bold text-[28px] block gap-4 -mb-[3px] bg-[#e4e4e4] w-auto p-3 rounded-xl ">
              <Image
                width={28}
                height={28}
                alt="show-balance-icon"
                src={`/icons/coins/eth.svg`}
              />
              <p>{`${balance?.formatted} ${balance?.symbol}`}</p>
              {usd !== undefined && (
                <p className=" font-semibold text-[16px] text-neutral-400 flex items-center mt-1">{`(USD ${usdFormatter(
                  usd
                )})`}</p>
              )}
            </div>
          ) : (
            <p className="font-bold text-[20px]">***BALANCE HIDDEN***</p>
          )}
        </section>
        <section
          className={`w-full h-auto  flex align-center rounded-md my-2 transition-all  ${
            !showBalance ? `bg-yellow-100` : `bg-transparent`
          }`}>
          {showBalance ? null : (
            <>
              <Image
                className="mx-4"
                width={16}
                height={16}
                alt="show-balance-icon"
                src={`/icons/secret.svg`}
              />
              <p className="font-semibold text-[10px] sm:text-[12px]  mt-0.5   text-neutral-500">
                Your assets are hidden, tap the eye icon to show your assets.
              </p>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default HeroLogged;
