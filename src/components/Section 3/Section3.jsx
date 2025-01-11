import React from "react";
import CompareAccuracy3 from "./CompareAccuracy3";
import TimeTaken from "./TimeTaken";

const Section3 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-md shadow-md  p-4">
        <CompareAccuracy3 />
      </div>
      <div className="rounded-md shadow-md p-4">
        <TimeTaken />
      </div>
    </div>
  );
};

export default Section3;
