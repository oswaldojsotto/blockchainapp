"use client";
import Image from "next/image";
import React, { useState } from "react";

const HeroLogged = ({ balance, address }: HeroLoggedProps) => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="my-12 text-neutral-700">
      <h1 className="font-bold text-[28px] ">Wallet Overview</h1>
      <p className="font-semibold">Address: {address}</p>
      <section className="flex  font-semibold text-[14px] my-4">
        <p>Estimated Balance</p>
        <div
          className="w-5 max-w-5 h-5 max-h-5 mt-1 mx-2 cursor-pointer select-none"
          onClick={() => setShowBalance(!showBalance)}>
          <Image
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
          <div className="font-bold text-[28px] flex gap-4">
            <Image
              width={28}
              height={28}
              alt="show-balance-icon"
              src={`/icons/coins/eth.svg`}
            />
            <p>{`${balance?.symbol}: ${balance?.formatted}`}</p>
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
            <p className="font-semibold text-[12px] mt-[2px] text-neutral-500">
              Your assets are hidden, tap the eye icon to show your assets.
            </p>
          </>
        )}
      </section>
    </div>
  );
};

export default HeroLogged;
