import React from "react";

const ApproachTime = () => {
  return (
    <div className="rounded-md shadow-md text-text_color p-4">
      <i className="bi bi-graph-up-arrow m-1"></i> Approach Time
      <button
        type="button"
        className="p-2 my-2 text-start text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 w-full"
      >
        <span className="text-indigo-800 bg-indigo-50 p-1 rounded-sm">25%</span>{" "}
        Based on <span className="text-indigo-800 text-xl ">Facts</span>
      </button>
      <button
        type="button"
        className="p-2 my-2 text-start text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 w-full"
      >
        <span className="text-indigo-800 bg-indigo-50 p-1 rounded-sm">32%</span>{" "}
        Based on <span className="text-indigo-800 text-xl ">Analysis</span>
      </button>
      <button
        type="button"
        className="p-2 my-2 text-start text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 w-full"
      >
        <span className="text-indigo-800 bg-indigo-50 p-1 rounded-sm">19%</span>{" "}
        Based on <span className="text-indigo-800 text-xl ">Elinination</span>
      </button>
      <button
        type="button"
        className="p-2 my-2 text-start text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 w-full"
      >
        <span className="text-indigo-800 bg-indigo-50 p-1 rounded-sm">24%</span>{" "}
        Based on <span className="text-indigo-800 text-xl ">Guess</span>
      </button>
    </div>
  );
};

export default ApproachTime;
