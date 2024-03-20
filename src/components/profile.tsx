import { useEffect } from "react";
import { useAccount, useBalance, useEnsName } from "wagmi";
import Hero from "./hero";
import HeroLogged from "./hero-logged";

const Profile = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });
  const { data, error, status } = useEnsName({ address });

  useEffect(() => {
    console.log(balance);
  }, [balance]);

  if (status === "pending") return <Hero />;
  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;
  return (
    <div>
      <HeroLogged />
      {/* Balance:{balance?.formatted}
      {JSON.stringify(balance?.symbol)} */}
    </div>
  );
};

export default Profile;
