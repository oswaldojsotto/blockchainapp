import { useQuery } from "@tanstack/react-query";
import { getCryptoList } from "@/src/services/get-crypto-list";
import Head from "next/head";
import CurrencyList from "@/src/components/currency-list";
import Profile from "@/src/components/profile";

const Landing = () => {
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

  return (
    <div className="mx-8">
      <Head>
        <title>Blockchain App</title>
        <meta content="Created by Oswaldo" name="description" />
      </Head>

      <div className="my-12 w-full flex flex-col justify-center">
        <Profile />
        <CurrencyList data={data} />
      </div>
    </div>
  );
};

export default Landing;
