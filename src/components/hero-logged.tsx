"use client";
import Image from "next/image";
import React, { useState } from "react";
import { copyToClipboard } from "../hooks/useClipboard";

const HeroLogged = ({ balance, address }: HeroLoggedProps) => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="my-12 text-neutral-700">
      <h1 className="font-bold text-[28px] ">Wallet Overview</h1>

      <div className="flex gap-2">
        <p className="font-semibold flex">Address: {address} </p>
        <div onClick={() => copyToClipboard(JSON.stringify(address))}>
          <Image
            className="mt-0.5 w-5 max-w-5 h-5 max-h-5 cursor-pointer active:w-[19px] active:h-[19px] transition-all "
            width={16}
            height={16}
            alt="show-balance-icon"
            src={`/icons/clipboard.svg`}
          />
        </div>
      </div>

      <section className="flex  font-semibold text-[14px] my-4">
        <p>Estimated Balance</p>
        <div
          className=" mt-[1px] mx-2 cursor-pointer select-none"
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
          <div className="font-bold text-[28px] flex gap-4 -mb-[3px]">
            <Image
              width={28}
              height={28}
              alt="show-balance-icon"
              src={`/icons/coins/eth.svg`}
            />
            <p>
              {`${balance?.formatted} ${balance?.symbol}`}
              {/* <span className="text-[20px] mb-2 ">($0.00 USD)</span> */}
            </p>
          </div>
        ) : (
          <p className="font-bold text-[28px]">***BALANCE HIDDEN***</p>
        )}
      </section>
      <section
        className={`w-full h-6  flex align-center rounded-md my-2 transition-all  ${
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
            <p className="font-semibold text-[12px]  text-neutral-500">
              Your assets are hidden, tap the eye icon to show your assets.
            </p>
          </>
        )}
      </section>
    </div>
  );
};

export default HeroLogged;
