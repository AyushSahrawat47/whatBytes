"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressComponent = () => {
  const progressData = [
    { title: "HTML Tools, Forms, History", percentage: 80, color: "#3b82f6" }, // Blue
    { title: "Tags & References in HTML", percentage: 60, color: "#f97316" }, // Orange
    { title: "Tables & References in HTML", percentage: 24, color: "#dc2626" }, // Red
    { title: "Tables & CSS Basics", percentage: 96, color: "#16a34a" }, // Green
  ];

  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-md font-bold mb-4">Syllabus Wise Analysis</h2>
      <div className="space-y-4">
        {progressData.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-1">
              <p className="text-sm font-medium">{item.title}</p>
              <div className="h-4  bg-gray-200 rounded-full mt-2">
                <div
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  className="h-full rounded-full"
                ></div>
              </div>
            </div>
            <div className="w-10 h-4">
              <CircularProgressbar
                value={item.percentage}
                text={`${item.percentage}%`}
                styles={buildStyles({
                  textSize: "30px",
                  textColor: item.color,
                  pathColor: item.color,
                  trailColor: "#d6d6d6",
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressComponent;
