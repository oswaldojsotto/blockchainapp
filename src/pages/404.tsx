import { useRouter } from "next/router";
import React from "react";
import { Button } from "../components/ui/button";

const ErrorPage = () => {
  const router = useRouter();

  const backToMain = () => {
    router.push("../");
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center font-semibold text-xl flex-col gap-3">
      <p> Error 404 Page Not Found </p>
      <Button onClick={backToMain}>Back to main page</Button>
    </div>
  );
};

export default ErrorPage;
