import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RealTimeLineChart = props => {
  const { chartList, range } = props;
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      animations: {
        easing: "linear",
        dynamicAnimation: {
          speed: 500,
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
      range: range,
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: val => val.toFixed(0),
      },
      title: { text: "Value" },
    },
    colors: ["#32C5FF"],
  };

  return (
    <ReactApexChart
      type="line"
      options={options}
      series={chartList}
      width={480}
      height={110}
    />
  );
};

export default RealTimeLineChart;
