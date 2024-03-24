"use client";
import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }: DateTimeProps) => {
  return (
    <div
      className={`${
        isDanger ? "countdown danger" : "countdown"
      } flex flex-col -gap-4`}>
      <p className="">{value}</p>
      <span className="text-[12px]">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
