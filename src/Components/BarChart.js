import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
 
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);
 
const AssessmentStatusChart = ({names, completedData, inprogressData, title}) => {
  // Define the chart data
  const chartData = {
    labels: names,
    datasets: [
      {
        label: "In Progress",
        data: inprogressData, 
        backgroundColor: "#E6DBF6", // Light purple
      },
      {
        label: "Completed",
        data: completedData, 
        backgroundColor: "#6A4C93", // Darker purple
      },
    ],
  };
 
  // Chart options
  const options = {
    indexAxis: "y", // Horizontal bar chart
    maintainAspectRatio: false, // Disable the default aspect ratio
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
      },
    
    title: {
        position: 'bottom',
        align: "center",
        display: true,
        text: title,  
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
          right: 20, 
        },
      },
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        grid: {
          display: false, 
        },
        ticks: {
          callback: function(value) {
            if (Number.isInteger(value)) {
              return value; // Only show integer values
            }
          }
        },
      },
      y: {
        position: 'left',
        stacked: true,
        grid: {
          display: false, 
        },
        ticks: {
            autoSkip: false, // Ensure all labels are shown
          },
      },
    },
  };

  return (
  <div className="bar-chart-wrapper">
    <div className="chart-container-bar">
      <Bar data={chartData} options={options} />
    </div>
  </div>
  );
};
 
export default AssessmentStatusChart;