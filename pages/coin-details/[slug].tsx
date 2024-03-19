import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const coinId = router.query.slug;

  const backToMain = () => {
    router.push("/");
  };

  if (coinId) console.log(coinId);

  return (
    <div>
      <h1>Detail Page for </h1>
      <button type="button" onClick={backToMain}>
        {" "}
        Back to main
      </button>
    </div>
  );
};

export default Index;
