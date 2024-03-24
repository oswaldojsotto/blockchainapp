"use client";
import React, { useState } from "react";
import { usdFormatter } from "@/hooks/usd-formatter";
import CryptoImage from "@/components/crypto-image";
import { Button } from "@/components/ui/button";

const TradeCalculator = ({
  coinSymbol,
  coinValue,
  nameId,
}: TradeCalculatorProps) => {
  const [inputNumber, setInputNumber] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputNumber(inputValue);

    const multipliedResult = coinValue * Number(inputValue);
    setResult(multipliedResult);
  };

  return (
    <div className="  my-6  w-full md:w-[20rem] lg:w-[25rem] xl:w-[30rem]">
      <p
        className="text-xl my-2 underline-offset-8 decoration-[#F0B90B] decoration-4 
      font-medium underline text-neutral-700">
        BUY {coinSymbol}
      </p>
      <p className="mt-7 font-semibold text-neutral-500 ">Buy</p>
      <div className="flex justify-start md:justify-between my-2 items-center">
        <input
          className=" text-[24px] outline-none caret w-[80%] "
          type="text"
          placeholder="0.00"
          value={inputNumber}
          onChange={handleInputChange}
        />
        <div className="w-[6rem] flex border items-center rounded-xl bg-neutral-200 h-[40px] min-h-[40px] mt-0.5">
          <div className="-mt-[10px] sm:mt-0 ">
            <CryptoImage coinName={nameId} />
          </div>
          <p className="mx-2 font-bold text-neutral-600">{coinSymbol}</p>
        </div>
      </div>
      <div className="flex justify-between  font-semibold text-[24px] text-neutral-600">
        <div className="">
          {inputNumber} {coinSymbol}=
        </div>
        <p>{result ? usdFormatter(result) : `$0.00`}</p>
      </div>

      <Button className="w-full" variant="custom">
        BUY {coinSymbol}
      </Button>
    </div>
  );
};

export default TradeCalculator;
