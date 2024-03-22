// import React, { useMemo } from "react";
// import dynamic from "next/dynamic";
// // import { Area } from "@ant-design/plots";

// const AreaChart = dynamic(
//   () => import("@ant-design/plots").then(module => module.Area),
//   { ssr: true }
// );

// const Chart = (data: { data: SortProps[] | undefined }) => {
//   console.log(data.data);
//   const config = {
//     data: data,
//     xField: "price",
//     yField: "time",
//     // areaStyle: () => {
//     //   return {
//     //     fill: "#5900D9",
//     //     cursor: "pointer",
//     //   };
//     // },
//   };

//   return (
//     <div className="h-[4rem] -mr-4 ">
//       <AreaChart {...config} />;
//     </div>
//   );
// };

// export default Chart;
