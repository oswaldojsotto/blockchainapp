"use client";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const AreaChart = dynamic(
  () => import("@ant-design/plots").then(module => module.Area),
  { ssr: false }
);

const Chart = data => {
  console.log(data.data);
  const config = {
    data: {
      value: data.data,
    },
    xField: "time",
    yField: "price",
    line: {
      style: {
        stroke: "black",
        lineWidth: 2,
      },
      // visible: true,
    },
  };
  //   const config = useMemo(
  //     () => ({
  //       data: { value: data.data },
  //       xField: "time",
  //       yField: "price",

  //       xAxis: {
  //         range: [0, 1],
  //         tickCount: 64,
  //       },
  //       //   tooltip: {
  //       //     customContent: (tooltipDate: string) => {
  //       //       const dataPoint = dataList.find(info => info.date === tooltipDate);
  //       //       if (dataPoint) {
  //       //         return customTooltip({ date: tooltipDate, total: dataPoint.total });
  //       //       }
  //       //       return null;
  //       //     },
  //       //   },
  //       //   yAxis: {
  //       //     label: {
  //       //       formatter: (total: unknown) =>
  //       //         `${currentCurrency} ${new Intl.NumberFormat("en-US", {
  //       //           minimumFractionDigits: 2,
  //       //         }).format(Number(total))}`,
  //       //     },
  //       //   },
  //       line: {
  //         style: {
  //           stroke: "#5900D9",
  //           lineWidth: 2,
  //         },
  //         // visible: true,
  //       },

  //       areaStyle: () => {
  //         return {
  //           fill: "#5900D9",
  //           cursor: "pointer",
  //         };
  //       },
  //     }),
  //     [data]
  //   );

  if (!data) {
    // Render a loading state or a placeholder if data is not an array
    return <div>Loading...</div>;
  }

  return <AreaChart {...config} />;
};

export default Chart;
