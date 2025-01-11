import React from "react";

const LeftLastSec = () => {
  return (
    <div className="rounded-3xl shadow-lg text-text_color bg-white p-6 mx-3 my-6">
      <div>
        <div className=" text-black font-medium text-2xl m-1">
          {" "}
          Revisit Paper
        </div>
        <div className="text-text_color text-lg m-1">
          Challenge your friends by simply sharing alink to this test
        </div>
      </div>
      {/* last part */}
      <button
        type="button"
        className="p-2 my-2 text-md font-medium text-white focus:outline-none bg-indigo-800 rounded-lg w-full m-1"
      >
        <i className="bi bi-arrow-right-square m-1"></i> Visit
      </button>
      <div className="text-text_color text-xs m-1">
        <i className="bi bi-info-circle m-1"></i>Instructions for how to upload
        your handwritten material in given
      </div>
    </div>
  );
};

export default LeftLastSec;
