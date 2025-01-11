import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const CompareAccuracy3 = () => {
  return (
    <div>
      <span className="text-text_color">
        <i className="bi bi-arrow-down-up m-1"></i>Compare Accuracy
      </span>
      <Bar
        className="mt-6"
        data={{
          labels: [1, 2, 3, 4, 5, 6, 7], // Labels for the x-axis
          datasets: [
            {
              data: [85, 40, 35, 60, 55, 45, 63], // Data points for the bars
              backgroundColor: ["rgb(132, 135, 212)"], // Bar colors
              borderRadius: 5, // Rounded corners for the bars
              barThickness: 15, // Adjust bar thickness
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true, // Start y-axis at 0
              max: 100, // Maximum value of the y-axis
              ticks: {
                stepSize: 25, // Interval of 25 between y-axis ticks
                callback: (value) => `${value}%`, // Display percentage symbol
              },
              title: {
                display: true,
                text: "Accuracy",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            x: {
              title: {
                display: true,
                text: "Slots",
                align: "center",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CompareAccuracy3;
