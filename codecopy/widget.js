// AreaChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false, // This disables the toolbar
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['1 Month', '3 Months', '6 Months', '12 Months'],
    },
    tooltip: {
      x: {
        show: false, // Hides the x-axis tooltip since it's not a date format
      },
    },
  };

  const chartSeries = [
    {
      name: 'Website traffic',
      data: [150, 100, 30, 130],
    },
    {
      name: 'Brand engagement',
      data: [250, 200, 400, 250],
    },
    {
      name: 'Time spent on website',
      data: [190, 250, 150, 300],
    },
    {
      name: 'New leads generated',
      data: [50, 105, 100, 250],
    }
  ];

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
