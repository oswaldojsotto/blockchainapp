import React, { useMemo } from "react";
import Table from "./table";

const CurrencyList = () => {
  const tableData = [
    {
      name: "Bitcoin (BTC)",
      percent_change_24h: "-1.14",
      volume24: 48629043325.577194,
      market_cap_usd: "1330359705908.70",
      rank: 1,
    },
    {
      name: "Ethereum (ETH)",
      percent_change_24h: "-3.39",
      volume24: 18690996549.03755,
      market_cap_usd: "431299825148.08",
      rank: 2,
    },
    // You can add more rows here...
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "24h % Change",
        accessor: "percent_change_24h",
      },
      {
        Header: "24h Volume",
        accessor: "volume24",
      },
      {
        Header: "Market Cap (USD)",
        accessor: "market_cap_usd",
      },
      {
        Header: "Rank",
        accessor: "rank",
      },
    ],
    []
  );

  return (
    <div>
      <Table tableData={tableData} columns={columns} />
    </div>
  );
};

export default CurrencyList;
