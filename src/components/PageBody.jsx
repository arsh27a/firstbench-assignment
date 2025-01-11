import React from "react";
import CompareAccuracy from "./CompareAccuracy";
import Section2 from "./Section 2/Section2";
import Section3 from "./Section 3/Section3";
import LeftSection from "./LeftSection/LeftSection";

const PageBody = () => {
  return (
    <div className=" p-4   sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-4 p-4">
        {/* <!-- Left Column (25%) --> */}
        <div className=" rounded-md col-span-1 h-auto lg:h-full bg-indigo-50 p-4 flex  sm:justify-center   sm:items-center ">
          <LeftSection />{" "}
        </div>
        {/* <!-- Right Section (75%) --> */}
        <div className="col-span-3 grid grid-rows-1 w-full h-full gap-4 p-4">
          {/* compareAccuracy section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {" "}
            <CompareAccuracy />
            <CompareAccuracy />
            <CompareAccuracy />
          </div>
          {/*  section 2 */}
          <Section2 />
          {/* section 3*/}
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default PageBody;
