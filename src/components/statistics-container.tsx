import React from "react";
import { usdFormatter } from "../hooks/usd-formatter";

interface StatisticsContainerProps {
  data: RowProps;
}

const StatisticsContainer = ({ data }: StatisticsContainerProps) => {
  const information = [
    {
      title: "Popularity",
      description: "Popularity is based on the relative market cap of assets.",
      value: data.rank,
    },
    {
      title: "Market Cap",
      description:
        "Market cap is calculated by multiplying the asset's circulating supply with its current price.",
      value: usdFormatter(Number(data.market_cap_usd)),
    },
  ];

  console.log(information);

  return <div>BTC Market Information</div>;
};

export default StatisticsContainer;
