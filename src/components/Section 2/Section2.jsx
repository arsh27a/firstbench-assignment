import React from "react";
import Improvments from "./Improvments";
import ResponseTime from "./ResponseTime";
import ApproachTime from "./ApproachTime";
import Suggestions from "./Suggestions";

const Section2 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <Improvments />
      <ResponseTime />
      <ApproachTime />
      <Suggestions />
    </div>
  );
};

export default Section2;
