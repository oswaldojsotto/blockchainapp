import { useAccount, useBalance } from "wagmi";
import Hero from "./hero";
import HeroLogged from "./hero-logged";
import Collapsible from "./collapsible";
import { useEffect, useState } from "react";
import { toast } from "../lib/use-toast";

const Profile = () => {
  const { address, connector } = useAccount();
  const wallet = connector?.name;
  const [shouldToast, setShouldToast] = useState(false);

  const {
    data: balance,
    status,
    isFetching,
  } = useBalance({
    address: address,
  });

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

    if (status === "error") {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }, [status]);

  if (isFetching)
    return (
      <div>
        <p className="w-full h-[50vh] flex justify-center items-center font-medium text-neutral-300">
          Loading Information, please wait...
        </p>
      </div>
    );

  return (
    <div>
      {status === "pending" ? (
        <Hero />
      ) : (
        <HeroLogged balance={balance} address={address} walletName={wallet} />
      )}
      <Collapsible
        title="Top Tokens by Market Capitalization"
        brief="Get a comprehensive snapshot of all cryptocurrencies available on BE-TRADE..."
        description=" This page displays the latest prices, 24-hour trading volume, price changes, and market capitalizations for all cryptocurrencies on BE-TRADE. Users can quickly access key information about these digital assets and access the trade page from here. The data presented is for informational purposes only. Some data is provided by coinlore.com and is shown on an “as is” basis, without representation or warranty of any kind. Please view our General Risk Warning for more information."
      />
    </div>
  );
};

export default Profile;
