"use client";
import React, { useMemo } from "react";
import Table from "./table";
import CryptoImage from "./crypto-image";
import { usdFormatter } from "../hooks/usd-formatter";
import { useRouter } from "next/router";
import Image from "next/image";
import Collapsible from "./collapsible";

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
            <div className={`sm:text-[12px] text-[10px] text-neutral-400`}>
              Name
            </div>
          );
        },
        accessor: (row: RowProps) => {
          return (
            <div
              className="flex gap-2 my-2 text-sm cursor-pointer"
              onClick={() => goToDetails(Number(row.id))}>
              <CryptoImage coinName={row.nameid} size="sm" />
              <div className="flex flex-col sm:flex-row mt-2 gap-1 text-sm">
                <span className="flex font-bold text-sm text-neutral-700">
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
            <div className="hidden text-neutral-600 font-semibold sm:flex ">
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
          const value = usdFormatter(row.market_cap_usd);
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
            <div
              className="w-4 h-4 cursor-pointer -mt-0.5"
              onClick={() => goToDetails(Number(row.id))}>
              <Image
                src={`/icons/info.svg`}
                alt="details"
                width={15}
                height={15}
              />
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="w-full flex justify-center ">
      <div className="flex flex-col w-full lg:w-[90%] xl:w-[75%] ">
        <Collapsible />
        <Table data={tableData} columns={columns} />
      </div>
    </div>
  );
};

export default CurrencyList;
