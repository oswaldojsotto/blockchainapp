import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getCryptoList } from "../Services/getCoins";
import Header from "./header";

const Home: NextPage = () => {
  const router = useRouter();
  const { data, error, isLoading } = useQuery({
    queryKey: ["cryptos"],
    queryFn: getCryptoList,
  });

  if (isLoading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const goToDetails = (coinId: number) => {
    router.push({
      pathname: `/coin-details/${coinId}`,
      // query: { coinId },
    });
  };

  return (
    <div className="">
      <Head>
        <title>Blockchain App</title>
        <meta content="Created by Oswaldo" name="description" />
      </Head>

      <main className="">
        <Header />
        <ul>
          {data.map(
            (crypto: {
              id: number;
              name: string;
              symbol: string;
              price_usd: number;
            }) => (
              <div
                key={crypto.id}
                className="flex gap-2 justify-between w-[26rem]  cursor-pointer"
                onClick={() => goToDetails(crypto.id)}>
                <div className="min-w-[10rem]">{crypto.name}</div>
                <p>({crypto.symbol})</p>
                <p>Price in USD: {crypto.price_usd}</p>
              </div>
            )
          )}
        </ul>
      </main>
    </div>
  );
};

export default Home;
