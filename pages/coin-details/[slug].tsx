"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { transformDataToArray } from "@/hooks/transform-chart-data";
import { getCryptoDetails } from "@/services/get-details";
import { getMarketPrices } from "@/services/get-market-prices";
import { filterAverage } from "@/hooks/filter-average";
import { toast } from "@/lib/use-toast";
import { usdFormatter } from "@/hooks/usd-formatter";
import Head from "next/head";
import CryptoImage from "@/components/crypto-image";
import LineChart from "@/components/line-chart";
import StatisticsContainer from "@/components/statistics-container";
import TradeCalculator from "@/components/trade-calculator";
import ErrorPage from "../404";

const Index = () => {
  const router = useRouter();
  const [hasCoinId, setHasCoinId] = useState<boolean>(false);
  const [chartData, setChartData] = useState<string[][]>();
  const coinId = Number(router.query.slug);

  const isValidNumber = !isNaN(coinId) && Number.isInteger(Number(coinId));

  const {
    data: detailData,
    error: detailError,
    isFetching: detailIsFetching,
  } = useQuery({
    queryKey: ["cryptoDetail"],
    queryFn: () => getCryptoDetails(coinId),
    enabled: hasCoinId,
  });

  const {
    data: marketData,
    error: marketError,
    isFetching: marketIsFetching,
  } = useQuery({
    queryKey: ["cryptoMarket"],
    queryFn: () => getMarketPrices(coinId),
    enabled: hasCoinId,
  });

  useEffect(() => {
    if (coinId) {
      setHasCoinId(true);
    }
  }, [coinId]);

  useEffect(() => {
    if (marketData && detailData) {
      const data = filterAverage(detailData[0].price_usd, marketData);
      const transformedData = transformDataToArray(data);
      setChartData(transformedData);
    }
  }, [marketData, detailData]);

  if (detailError || marketError) {
    toast({
      variant: "destructive",
      title: "Something went wrong.",
      description: "There was a problem with your request.",
    });
  }

  if (marketIsFetching || detailIsFetching) {
    return <p>loading</p>;
  }

  if (!isValidNumber) {
    return <ErrorPage />;
  }

  return (
    <div className="flex mx-8  justify-center items-center">
      <div className="h-[100%] pt-[72px] flex flex-col w-full sm:max-w-4xl max-w-4xl  ">
        {!detailIsFetching && !marketIsFetching && hasCoinId && (
          <div className="flex flex-col md:flex-row w-full md:justify-between ">
            <div>
              <Head>
                <title>
                  {detailIsFetching ? "Blockchain App" : detailData[0]?.name}
                </title>
              </Head>

              <section className="flex gap-3 my-4 flex-col">
                <div className="flex ">
                  <CryptoImage coinName={detailData[0]?.nameid} size="lg" />
                  <div className="flex items-center text-[26px] md:text-[32px] font-bold text-neutral-800 mx-2">
                    <div className="flex">
                      <p>
                        {" "}
                        {detailData[0]?.name} Price
                        <span className="mx-2 pt-3 text-[20px] text-neutral-500 font-semibold">
                          ({detailData[0]?.symbol})
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <h1 className="text-3xl font-bold text-neutral-800">
                    {usdFormatter(detailData[0]?.price_usd)}
                    <span
                      className={`mx-2 ${
                        detailData[0].percent_change_24h > 0
                          ? `text-emerald-400 text-xl`
                          : `text-red-400 text-xl`
                      }`}>
                      {detailData[0]?.percent_change_24h}%
                    </span>
                  </h1>
                  <span className="text-neutral-700 flex items-center mt-3 font-semibold text-[13px] ">
                    1D
                  </span>
                </div>
              </section>
            </div>
            <div>
              <TradeCalculator
                coinSymbol={detailData[0]?.symbol}
                coinValue={detailData[0]?.price_usd}
                nameId={detailData[0]?.nameid}
              />
            </div>
          </div>
        )}

        {chartData && detailData && (
          <section className="flex flex-col">
            <LineChart data={chartData} />
            <StatisticsContainer data={detailData[0]} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
