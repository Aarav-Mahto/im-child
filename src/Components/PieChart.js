import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import "./PieChart.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ data, labels, colors, title }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data, // Values for the pie chart
        backgroundColor: colors, // Colors for each segment
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,  // Enable responsive behavior
    plugins: {
      legend: {
        position: 'right',
        align: "center",
      },
      title: {
        position: 'bottom',
        align: "center",
        display: true,
        text: title,  // Use the title passed as a prop
        font: {
          size: 18,
        },
        padding: {
          top: 30,
        },
      },
    },
    layout: {
      padding: {
        right: 20, // Add padding to the right to avoid overlap with the legend
      },
    },
  };

  return (
    <div className="pie-chart-wrapper">
      <div className="chart-container">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;