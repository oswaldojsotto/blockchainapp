import React from "react";
import CurrencyItem from "./currency-item";

const CurrencyList = () => {
  const items = ["Name", "Change", "24h Volume", "Cap Market", "Actions"];
  return (
    <div>
      <div className="flex border border-black rounded-md">
        {items.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <CurrencyItem />
    </div>
  );
};

export default CurrencyList;
