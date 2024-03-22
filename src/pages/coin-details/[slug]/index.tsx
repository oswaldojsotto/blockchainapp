"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCryptoDetails } from "../../../services/get-details";
import Head from "next/head";
import Image from "next/image";
import { getMarketPrices } from "../../../services/get-market-prices";
import CryptoImage from "../../../components/crypto-image";
import { formatMarketData } from "../../../hooks/format-market-data";
import { filterAverage } from "../../../hooks/filter-average";
import Chart from "../components/chart";

const Index = () => {
  const router = useRouter();
  const [hasCoinId, setHasCoinId] = useState(false);
  const [chartData, setChartData] = useState<SortProps[]>();
  const coinId = router.query.slug;

  const {
    data: detailData,
    error: detailError,
    isLoading: detailIsLoading,
    isFetching: detailIsFetching,
    // refetch: detailRefresh,
  } = useQuery({
    queryKey: ["cryptoDetail"],
    queryFn: () => getCryptoDetails(Number(coinId)),
    enabled: hasCoinId,
  });

  const {
    data: marketData,
    error: marketError,
    isLoading: marketIsLoading,
    isFetching: marketIsFetching,
    // refetch: marketRefresh,
  } = useQuery({
    queryKey: ["cryptoMarket"],
    queryFn: () => getMarketPrices(Number(coinId)),
    enabled: hasCoinId,
  });

  if (detailData) console.log();

  useEffect(() => {
    if (coinId) {
      setHasCoinId(true);
    }
  }, [coinId]);

  const backToMain = () => {
    router.push("/");
  };

  useEffect(() => {
    if (marketData && detailData) {
      setChartData(filterAverage(detailData[0].price_usd, marketData));
    }
  }, [detailData, marketData]);

  if (detailError || marketError) {
    return (
      <div>
        Theres has been an error while loading data try{" "}
        <span>
          <button className="bg-yellow-400 text-neutral-700">REFRESH</button>
        </span>
      </div>
    );
  }

  if (marketIsFetching || detailIsFetching) {
    return <p>loading</p>;
  }

  return (
    <div>
      {!detailIsFetching && !marketIsFetching && hasCoinId && (
        <div>
          <Head>
            {!detailIsFetching && <title>{detailData[0]?.name}</title>}

            <meta content="" name="" />
          </Head>

          <h1>Detail Page for {detailData[0]?.nameid} </h1>
          <CryptoImage coinName={detailData[0]?.nameid} size="lg" />
          <button type="button" onClick={backToMain}>
            {" "}
            Back to main
          </button>
        </div>
      )}

      {/* {marketData && detailData && coinId && (
        <div className="max-h-[10rem]">
          <Chart data={chartData} />
        </div>
      )} */}
    </div>
  );
};

export default Index;
