"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

const AreaChart = dynamic(
  () => import("@ant-design/plots").then(module => module.Area),
  { ssr: false }
);

const Chart = (data: {
  data: { price: number; time: string }[] | undefined;
}) => {
  console.log(data.data);
  const config = useMemo(
    () => ({
      data: data.data.slice(0, 20),
      xField: "time",
      yField: "price",

      //   line: {
      //     style: {
      //       stroke: "#5900D9",
      //       lineWidth: 2,
      //     },
      //     visible: true,
      //   },

      //   areaStyle: () => {
      //     return {
      //       fill: "#5900D9",
      //       cursor: "pointer",
      //     };
      //   },
    }),
    []
  );

  return <AreaChart {...config} style={{ backgroundColor: "#f5f5f5" }} />;
};

export default Chart;
