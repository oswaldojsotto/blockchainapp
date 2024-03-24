import React from "react";
import Chart from "react-google-charts";

const LineChart = (data: { data: string[][] }) => {
  const chartData = [["Time", "Price"], ...data.data];

  const options = {
    series: {
      0: { color: "#F0B90B" },
    },

    chart: {
      title:
        "Data shown in this graphic is referential since the source is not 100% accurate",
      subtitle: "Prices at left are represented in Dollars (USD)",
    },
  };

  return (
    <div className="">
      {chartData.length > 1 ? (
        <Chart
          className=""
          chartType="Line"
          width="100%"
          height="300px"
          data={chartData}
          options={options}
        />
      ) : (
        <div className="w-full bg-red-400 rounded-sm text-[12px] p-2 items-center ">
          <p className="-mt-0.5 text-neutral-700">
            Insufficient Data Available: Chart Cannot Be Generated Due to
            Limited Data
          </p>
        </div>
      )}
    </div>
  );
};

export default LineChart;
