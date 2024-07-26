import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = () => {
  const options = {
    animationEnabled: true, // Enable animation
    animationDuration: 3000,
    theme: 'light1', // "light1", "dark1", "dark2"
    title: {
      text: '',
    },   
    axisX: {
      title: '',
      interval: 1,
      labelAngle: -1,
      labelFormatter: function (e) {
        // Custom label formatting
        return e.value === 1 ? "1 Month" :
               e.value === 2 ? "2 Months" :
               e.value === 3 ? "3 Months" :
               e.value === 4 ? "4 Months" :
               e.value === 5 ? "5 Months" :
               e.value === 6 ? "6 Months" :
               e.value === 7 ? "7 Months" :
               e.value === 8 ? "8 Months" :
               e.value === 9 ? "9 Months" :
               e.value === 10 ? "10 Months" :
               e.value === 11 ? "11 Months" :
               e.value === 12 ? "12 Months" :
               e.value; // Default case
      }
    },
    axisY: {
      title: 'Change (%)',
      includeZero: true,
      gridThickness: 0, // Remove horizontal grid lines
      tickThickness: 0, // Optionally remove vertical tick marks
    },
    data: [
      {
        type: 'line',
        name: 'Website traffic',
        showInLegend: true,
        color: '#FF5733', // Custom color
        lineThickness: 4,
        lineDashType: 'solid', // Remove dashed lines
        dataPoints: [
          { x: 1, y: 3 },
          { x: 2, y: 3 },
          { x: 3, y: 3.34 },
          { x: 4, y: 4.36 },
          { x: 5, y: 6.06 },
          { x: 6, y: 8.44 },
          { x: 7, y: 11.5 },
          { x: 8, y: 15.24 },
          { x: 9, y: 19.66 },
          { x: 10, y: 24.76 },
          { x: 11, y: 30.54 },
          { x: 12, y: 37 },
        ],
      },
      {
        type: 'line',
        name: 'Brand engagement',
        showInLegend: true,
        color: '#33FF57', // Custom color
        lineThickness: 4,
        lineDashType: 'solid', // Remove dashed lines
        dataPoints: [
          { x: 1, y: 5 },
          { x: 2, y: 5.3 },
          { x: 3, y: 6.3 },
          { x: 4, y: 7.9 },
          { x: 5, y: 10.2 },
          { x: 6, y: 13.2 },
          { x: 7, y: 16.9 },
          { x: 8, y: 21.1 },
          { x: 9, y: 26.1 },
          { x: 10, y: 31.7 },
          { x: 11, y: 38 },
          { x: 12, y: 45 },
        ],
      },
      {
        type: 'line',
        name: 'Time spent on website',
        showInLegend: true,
        color: '#3357FF', // Custom color
        lineThickness: 4,
        lineDashType: 'solid', // Remove dashed lines
        dataPoints: [
          { x: 1, y: 10 },
          { x: 2, y: 10.9 },
          { x: 3, y: 11.8 },
          { x: 4, y: 10.3 },
          { x: 5, y: 11.4 },
          { x: 6, y: 13.3 },
          { x: 7, y: 15.9 },
          { x: 8, y: 19.2 },
          { x: 9, y: 23.3 },
          { x: 10, y: 28.1 },
          { x: 11, y: 33.7 },
          { x: 12, y: 40 },
        ],
      },
      {
        type: 'line',
        name: 'New leads generated',
        showInLegend: true,
        color: '#FF33A6', // Custom color
        lineThickness: 4,
        lineDashType: 'solid', // Remove dashed lines
        dataPoints: [
          { x: 1, y: 0 },
          { x: 2, y: 0 },
          { x: 3, y: 0.32 },
          { x: 4, y: 1.28 },
          { x: 5, y: 2.88 },
          { x: 6, y: 5.12 },
          { x: 7, y: 8 },
          { x: 8, y: 11.52 },
          { x: 9, y: 15.68 },
          { x: 10, y: 20.48 },
          { x: 11, y: 25.92 },
          { x: 12, y: 32 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default LineChart;
