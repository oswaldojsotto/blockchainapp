import { useAccount, useBalance } from "wagmi";
import Hero from "./hero";
import HeroLogged from "./hero-logged";
import Collapsible from "./collapsible";

const Profile = () => {
  const { address } = useAccount();

  const {
    data: balance,
    error,
    status,
    isFetching,
  } = useBalance({
    address: address,
  });

  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;

  if (isFetching) return null;

  return (
    <div>
      {/* Balance:{balance?.formatted}
      {JSON.stringify(balance?.symbol)} */}
      {status === "pending" ? (
        <Hero />
      ) : (
        <HeroLogged balance={balance} address={address} />
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
