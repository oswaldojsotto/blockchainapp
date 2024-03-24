"use client";
import React, { useMemo } from "react";
import Table from "@/src/components/table";
import CryptoImage from "@/src/components/crypto-image";
import { usdFormatter } from "@/src/hooks/usd-formatter";
import { useRouter } from "next/router";
import InfoTooltip from "@/src/components/info-tooltip";

const CurrencyList = ({ data }: CurrencyListProps) => {
  const tableData = React.useMemo(() => data, [data]);
  const router = useRouter();

  const goToDetails = (coinId: number) => {
    router.push({
      pathname: `/coin-details/${coinId}`,
    });
  };

  const columns = useMemo(
    () => [
      {
        id: "name",
        Header: () => {
          return (
            <div className={`ml-2 sm:text-[12px] text-[10px] text-neutral-400`}>
              Name
            </div>
          );
        },
        accessor: (row: RowProps) => {
          return (
            <div
              className="flex gap-2 my-2 ml-2 text-sm cursor-pointer "
              onClick={() => goToDetails(Number(row.id))}>
              <CryptoImage coinName={row.nameid} size="sm" />
              <div className="flex flex-col gap-1 mt-2 text-sm sm:flex-row">
                <span className="flex text-sm font-bold text-neutral-700">
                  {row.symbol}
                </span>
                <span className="flex text-sm text-neutral-400">
                  {row.name}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        id: "price",
        Header: () => {
          return (
            <div
              className={`hidden sm:text-[12px] text-[10px] text-neutral-400 sm:flex `}>
              Price
            </div>
          );
        },

        accessor: (row: { price_usd: string }) => {
          return (
            <div className="hidden font-semibold text-neutral-600 sm:flex ">
              {usdFormatter(Number(row.price_usd))}
            </div>
          );
        },
      },
      {
        id: "24Change",
        Header: () => {
          return (
            <div className={`sm:text-[12px] text-[10px] text-neutral-400`}>
              24h Change
            </div>
          );
        },

        accessor: (row: RowProps) => {
          const value = Number(row.percent_change_24h);
          return (
            <div
              className={`font-semibold ${
                value >= 0 ? "text-emerald-600" : `text-red-400`
              }`}>
              {value}%
            </div>
          );
        },
      },
      {
        id: "24volume",
        Header: () => {
          return (
            <div
              className={`hidden md:flex sm:text-[12px] text-[10px] text-neutral-400`}>
              24h Volume
            </div>
          );
        },
        accessor: (row: RowProps) => {
          const value = usdFormatter(row.volume24);
          return (
            <div className={`hidden md:flex font-semibold text-neutral-600`}>
              {value}
            </div>
          );
        },
      },
      {
        id: "marketcap",
        Header: () => {
          return (
            <div className={`sm:text-[12px] text-[10px] text-neutral-400 flex`}>
              Market Cap <span className="hidden sm:flex">(USD)</span>
            </div>
          );
        },
        accessor: (row: RowProps) => {
          const value = usdFormatter(Number(row.market_cap_usd));
          return (
            <div className={`font-semibold text-neutral-600`}>{value}</div>
          );
        },
      },
      {
        id: "details",
        Header: () => {
          return (
            <div className={`sm:text-[12px] text-[10px] text-neutral-400`}>
              Details
            </div>
          );
        },
        accessor: (row: { id: string }) => {
          return (
            <div onClick={() => goToDetails(Number(row.id))}>
              <InfoTooltip content="See details of this coin" link />
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="flex justify-center w-full ">
      <div className="flex w-full lg:max-w-4xl ">
        <Table data={tableData} columns={columns} />
      </div>
    </div>
  );
};

export default CurrencyList;
