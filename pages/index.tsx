"use client";
import type { NextPage } from "next";
import { getCryptoList } from "@/services/get-crypto-list";
import { useQuery } from "@tanstack/react-query";
import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";
import { toast } from "@/lib/use-toast";
import { getCryptoDetails } from "@/services/get-details";
import { useDispatch } from "react-redux";
import { setEthereumToUsd } from "@/store/ethereum-slice";
import CurrencyList from "@/components/currency-list";
import Hero from "@/components/hero";
import Head from "next/head";
import HeroLogged from "@/components/hero-logged";
import Collapsible from "@/components/collapsible";

const Home: NextPage = () => {
  const { address, connector } = useAccount();
  const wallet = connector?.name;
  const dispatch = useDispatch();
  const [shouldToast, setShouldToast] = useState(false);

  const { data: balance, status } = useBalance({
    address: address,
  });

  const {
    data: ethereumData,
    error: detailError,
    isFetching,
  } = useQuery({
    queryKey: ["ethereumData"],
    queryFn: () => getCryptoDetails(80),
  });

  const { data: listData } = useQuery({
    queryKey: ["cryptos"],
    queryFn: () => getCryptoList(),
  });

  useEffect(() => {
    if (!isFetching) {
      dispatch(
        setEthereumToUsd({
          ethereums:
            balance?.formatted !== undefined ? Number(balance?.formatted) : 0,
          ethereumPriceUsd: Number(ethereumData[0]?.price_usd),
        })
      );
    }
  }, [!isFetching]);

  useEffect(() => {
    if (status === "success" && shouldToast) {
      toast({
        variant: "success",
        description: `Successfully connected to ${wallet} ✅`,
      });

      setShouldToast(false);
    }

    if (status === "pending") {
      setShouldToast(true);
    }

    if (status === "error" || detailError) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }, [status]);

  return (
    <main className="mx-8 pt-16 lg:mx-0">
      <Head>
        <title>Blockchain App</title>
        <meta content="Created by Oswaldo" name="description" />
      </Head>

      {!balance ? (
        <Hero />
      ) : (
        <HeroLogged balance={balance} address={address} walletName={wallet} />
      )}

      <Collapsible
        title="Top Tokens by Market Capitalization"
        description=" This page displays the latest prices, 24-hour trading volume, price changes, and market capitalizations for all cryptocurrencies on BE-TRADE. Users can quickly access key information about these digital assets and access the trade page from here. The data presented is for informational purposes only. Some data is provided by coinlore.com and is shown on an “as is” basis, without representation or warranty of any kind. Please view our General Risk Warning for more information."
      />
      {listData && <CurrencyList data={listData} />}
    </main>
  );
};

export default Home;
