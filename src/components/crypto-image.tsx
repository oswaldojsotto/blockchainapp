"use client";
import Image from "next/image";
import React from "react";

const CryptoImage = ({ coinName, size = "sm" }: CryptoImageProps) => {
  const smallImage = `https://www.coinlore.com/img/50x50/${coinName}.png`;
  const bigImage = `https://www.coinlore.com/img/${coinName}.webp`;

  return (
    <Image
      className={`${
        size === "sm" ? "w-[32px] h-[32px]" : "w-[64px] h-[64px]"
      } mt-3 sm:mt-0`}
      src={size === "sm" ? smallImage : bigImage}
      alt="crypto-image"
      width={size === "sm" ? 32 : 64}
      height={size === "sm" ? 32 : 64}
    />
  );
};

export default CryptoImage;
