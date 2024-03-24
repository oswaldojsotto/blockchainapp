import React from "react";

const Footer = () => {
  const myPage = "http://oswaldo-sotto.xyz";
  const github = "https://github.com/oswaldojsotto";

  return (
    <div className=" mt-12 w-full h-16  lg:justify-center items-center flex justify-between border-t-2 border-neutral-200 ">
      <div className="mx-8">
        <p className="text-[14px] text-neutral-400">
          Built by{" "}
          <span className="underline underline-offset-4">
            <a target="_blank" href={myPage}>
              Oswaldo Sotto,
            </a>
          </span>{" "}
          Source code is in{" "}
          <span className="underline underline-offset-4">
            <a target="_blank" href={github}>
              Github
            </a>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
