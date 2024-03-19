import { useRouter } from "next/router";
import React from "react";

const CoinDetails = () => {
  const router = useRouter();

  const backToMain = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Detail Page</h1>
      <button type="button" onClick={backToMain}>
        {" "}
        Back to main
      </button>
    </div>
  );
};

export default CoinDetails;
