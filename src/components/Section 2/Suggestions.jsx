import React from "react";

const Suggestions = () => {
  return (
    <div className="rounded-md shadow-md text-text_color p-4">
      <i className="bi bi-stars m-1"></i> Suggestions
      {/* 1st */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div>
          {" "}
          <button className="text-white bg-indigo-800 focus:outline-none font-medium rounded-sm text-xs p-1 mt-7 mx-1 mb-2 text-center h-55">
            Q. 1-12
          </button>
          <button className="border-dashed border-2 border-text_color rounded-md bg-indigo-50 text-center text-black text-lg my-2 py-7 px-1 m-1">
            <span className="font-medium text-sm">40</span>min
          </button>
          <span className="text-green-700 text-base mx-2">Easy</span>
        </div>
        {/* 2nd */}
        <div>
          <button className="text-white bg-indigo-800 focus:outline-none font-medium rounded-sm text-xs p-1 mt-7 mx-1 mb-2 text-center h-55">
            Q. 12-32
          </button>
          <button className="border-dashed border-2 border-text_color rounded-md bg-indigo-50 text-center text-black text-lg my-2 py-7 px-1 m-1">
            <span className="font-medium text-sm">1.5</span>min
          </button>{" "}
          <span className="text-yellow-500 text-base mx-2">Medium</span>
        </div>
        {/* 3rd */}
        <div>
          <button className="text-white bg-indigo-800 focus:outline-none font-medium rounded-sm text-xs p-1 mt-7 mx-1 mb-2 text-center h-55">
            Q. 32-40
          </button>

          <button className="border-dashed border-2 border-text_color rounded-md bg-indigo-50 text-center text-black text-lg my-2 py-7 px-1 m-1">
            <span className="font-medium text-sm">3</span>min
          </button>
          <span className="text-red-700 text-base mx-2">Hard</span>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
