import React from "react";
import LeftMidSec from "./LeftMidSec";
import LeftLastSec from "./LeftLastSec";

const LeftSection = () => {
  return (
    <div className="left-section ">
      <div className="top-part items-center flex justify-center ">
        <div>
          <div className="flex justify-center items-center ">
            <img src="left1.png" alt="error" />
          </div>
          <p className="text-indigo-800 text-2xl p-2 text-center font-medium">
            Your Result!
          </p>
          <p className="text-xl text-text_color p-2">
            All your insights & details in one place
          </p>
        </div>
      </div>
      {/* top-part ended and mid part start */}
      <LeftMidSec />
      <LeftLastSec />
    </div>
  );
};

export default LeftSection;
