import React from "react";

const LeftMidSec = () => {
  return (
    <div className="rounded-3xl shadow-lg text-text_color bg-white p-6 mx-3 my-6">
      <div className="button-1 bg-l_indigo text-center text-text_color text-xl w-full rounded-md flex justify-around items-centers flex-wrap p-2">
        {/* flex-item2 */}
        <div className=" flex justify-center items-center ">
          {/* flex-item1 */}
          <div className="focus:outline-none bg-indigo-50 h-8 rounded-lg flex justify-center items-center m-3 p-2">
            <i className="bi bi-journals m-1"></i>{" "}
          </div>
          <div className="3rd flex justify-center items-center flex-col">
            <div className="text-white bg-indigo-800 focus:outline-none rounded-full text-xs px-2 py-1 text-center mt-1">
              You've PASSED
            </div>
            <div className="text-sm">
              {" "}
              <span className="text-blue text-2xl font-medium">136</span>/240
            </div>
          </div>
        </div>
        {/*flex item2  */}
        <div className="flex justify-center items-center p-3">
          <div className="h-9 w-px bg-black mx-1 "></div>

          <div className="3rd flex justify-center items-center flex-col">
            <span className="text-white bg-blue px-2 py-1 text-xs font-bold">
              76%
            </span>{" "}
            <span className="text-blue text-xs font-medium">ACCURACY</span>
          </div>
        </div>
      </div>
      {/* mid part 2section */}
      <div className="button-2 bg-l_indigo text-center text-text_color text-xl w-full rounded-md my-4 p-2">
        {/* flex item2 */}
        <div className="flex justify-around items-center">
          <div className=" flex justify-center items-center flex-col">
            <p className="text-text_color text-xs font-small">Top Score</p>
            <div className="text-sm">
              {" "}
              <span className="text-blue text-2xl font-medium">230</span>/240
            </div>
          </div>
        </div>
        {/* 2nd  */}
        <div>
          {" "}
          <div className="border-t-2 border-text_color w-auto my-2 mx-4" />
          {/* below line */}
          <div className="flex justify-between items-center mx-6 flex-wrap">
            <span className="text-text_color text-sm">
              By{" "}
              <span className="text-sm text-black font-medium">
                Parth Akotkar
              </span>
            </span>
            {/* ---- */}
            <button className="text-white bg-blue focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mx-1 ">
              92% ACCURACY
            </button>
          </div>
        </div>
      </div>
      {/* last 2nd part */}
      <div>
        <div className=" text-black font-medium text-xl">
          {" "}
          Improve your Marks
        </div>
        <div className="text-text_color text-sl">
          Improve your score by practicing more.
        </div>
      </div>
      {/* last part */}
      <button
        type="button"
        className="p-2 my-2 text-md font-medium text-white focus:outline-none bg-indigo-600 rounded-lg w-full"
      >
        Practice more
      </button>
    </div>
  );
};

export default LeftMidSec;
