import React from "react";
import InfoTooltip from "@/src/components/info-tooltip";

const Statistic = ({ title, description, value }: StatisticProps) => {
  return (
    <div
      className=" pl-1 text-[13px] text-neutral-500  py-2 
    border border-[#e3e3e3] min-w-[9rem] rounded-lg">
      <div className="flex justify-start gap-2 ">
        <h3 className="font-medium">{title}</h3>
        <span className="mt-[3px]">
          <InfoTooltip content={description} />
        </span>
      </div>
      <h1 className="font-bold text-neutral-600">{value}</h1>
    </div>
  );
};

export default Statistic;
