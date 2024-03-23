import React from "react";
import { usdFormatter } from "@/src/hooks/usd-formatter";
import Statistic from "@/src/components/statistic";

const StatisticsContainer = ({ data }: StatisticsContainerProps) => {
  const information = [
    {
      id: 1,
      title: "Popularity",
      description: "Popularity is based on the relative market cap of assets.",
      value: `#${data.rank}`,
    },
    {
      id: 2,
      title: "Market Cap",
      description:
        "Market cap is calculated by multiplying the asset's circulating supply with its current price.",
      value: usdFormatter(Number(data.market_cap_usd)),
    },
    {
      id: 3,
      title: "Volume 24H",
      description: "Trading volume of coin for last 24h in USD.",
      value: usdFormatter(data.volume24),
    },
    {
      id: 4,
      title: "Price change (1h)",
      description: "Price change in percent for last 1 hour.",
      value: `${data.percent_change_1h}%`,
    },
    {
      id: 5,
      title: "Price change (1d)",
      description: "Price change in percent for last day.",
      value: `${data.percent_change_24h}%`,
    },
    {
      id: 6,
      title: "Price change (7d)",
      description: "Price change in percent for last 7 days.",
      value: `${data.percent_change_7d}%`,
    },
    {
      id: 7,
      title: "Circulation Supply",
      description:
        "The number of coins circulating in the market and available to the public for trading.",
      value: `${usdFormatter(Number(data.csupply))}`,
    },
    {
      id: 8,
      title: "Total Supply",
      description: "Total coins circulating in the market",
      value: `${usdFormatter(Number(data.tsupply))}`,
    },
    {
      id: 9,
      title: "Price BTC",
      description: "Price in Bitcoin",
      value: `${data.price_btc}`,
    },
  ];

  return (
    <div className="w-full mt-8 mb-16">
      <h1 className="my-2 text-neutral-700 font-semibold">
        {data.symbol} Market Information
      </h1>
      <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
        {information.map(item => {
          return (
            <div key={item.id}>
              <Statistic
                title={item.title}
                description={item.description}
                value={item.value}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatisticsContainer;
