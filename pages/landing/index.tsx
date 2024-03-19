import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getCryptoList } from "../../services/get-crypto-list";
import Head from "next/head";

const Landing = () => {
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
    <div>
      <Head>
        <title>Blockchain App</title>
        <meta content="Created by Oswaldo" name="description" />
      </Head>
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

      <div className="my-12"></div>
    </div>
  );
};

export default Landing;
