'use client'

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ score }) => {

  const correct = score; // Correct answers
  const incorrect = 15 - score;
  const data = {
    datasets: [
      {
        
        data: [correct, incorrect], // Correct and incorrect answers
        backgroundColor: ["#3b82f6", "#e5e7eb"], // TailwindCSS colors (blue and gray)
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "65%", // Adjusts the doughnut chart's inner radius
    plugins: {
      tooltip: { enabled: false }, // Disable hover tooltips
    },
  };

  return (
    <div className="flex flex-col p-6  bg-white rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-medium">Question Analysis</h3>
        <p className="text-gray-500 text-sm"> 
        <strong> You scored 12 question correct out of 15. </strong>However, it still needs some improvements.
        </p>
      </div>
      <div className="relative w-32 h-32 mt-4 ">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">🎯</span>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
