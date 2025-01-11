import React from "react";

const ResponseTime = () => {
  return (
    <div className="rounded-md  shadow-md text-text_color p-4">
      {" "}
      <i className="bi bi-clock-history m-1"></i>
      Response Time
      <button className="text-white bg-indigo-800 focus:outline-none font-medium rounded-sm text-xs px-3 py-1.5 mt-4 mb-4 text-center mb-1 ">
        Std Time-2 min
      </button>
      <div className="border-dashed border-2 border-text_color bg-gray text-center text-sm my-5">
        <span className="text-blue text-2xl font-medium">60</span>% Ans took{" "}
        {/* need to work upon arrow */}
        <span className="text-red-500 font-bold">↑</span>{" "}
        <span className="text-indigo-800 font-medium">2 min</span>
      </div>
      <hr className="border-t border-l_gray m-6" />
      <p className="text-black text-3xl text-center">
        You are <span className="text-red-700">slow</span>!
      </p>
    </div>
  );
};

export default ResponseTime;
