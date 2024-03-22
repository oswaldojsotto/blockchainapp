import React from "react";
import Chart from "react-google-charts";

const LineChart = (data: { data: string[][] }) => {
  const chartData = [["Time", "Price"], ...data.data];

  const options = {
    series: {
      0: { color: "#F0B90B" },
    },
    hAxis: {
      title: "Time",
      fontName: "Arial", // Font for the horizontal axis
      fontSize: 12, // Font size for the horizontal axis
    },
    vAxis: {
      title: "Price",
      fontName: "Arial", // Font for the vertical axis
      fontSize: 12, // Font size for the vertical axis
    },
    chart: {
      title: "Box Office Earnings in First Two Weeks of Opening",
      subtitle: "Prices at left are represented in Dollars (USD)",
    },
  };

  return (
    <div className="">
      {chartData.length > 3 ? (
        <Chart
          className=" font-sans font-semibold"
          chartType="Line"
          width=""
          height="300px"
          data={chartData}
          options={options}
        />
      ) : (
        <div>Theres not enough data to show this graphic</div>
      )}
    </div>
  );
};

export default LineChart;
