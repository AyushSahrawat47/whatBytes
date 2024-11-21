'use client'

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const ComparisonChart = ({ percentile }) => {

  const yourPercentile = 89

  const data = {
    labels: Array.from({ length: 11 }, (_, i) => i * 10), // X-axis labels (0, 10, ..., 100)
    datasets: [
      {
        label: "Percentile Distribution",
        data: [0, 5, 10, 25, 50, 72, 90, 80, 70, 20, 0], // Example data points
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "white",
        pointBorderColor: "blue",
        tension: 0.4, // Smooth curve
      },
      // {
      //   label: "Your Percentile",
      //   data: Array(11).fill(null).map((_, index) => (index * 10 === yourPercentile ? 90 : null)), // Highlight only your percentile
      //   borderColor: "red",
      //   borderDash: [5, 5],
      //   borderWidth: 2,
      //   pointRadius: 6,
      //   pointBackgroundColor: "green",
      //   pointBorderColor: "green",
      //   type: "line", // Vertical line
      // },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            if (value !== null) {
              return `Your Percentile: ${value}`;
            }
            return `Score: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentile",
        },
        grid: {
          display: false, // Remove gridlines
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Score",
        },
        grid: {
          display: false, // Remove gridlines
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ComparisonChart;
