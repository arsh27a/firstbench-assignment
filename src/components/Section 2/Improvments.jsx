import React from "react";

const Improvments = () => {
  return (
    <div className="rounded-md shadow-md p-4">
      <span className="text-text_color">
        <i className="bi bi-graph-up-arrow m-1"></i> Improvments
      </span>
      <p className="p-1 py-4">Subject Understanding</p>
      <span className=" flex justify-center flex-wrap items-center">
        <button
          type="button"
          className="text-white bg-blue focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          Geography
        </button>
        <button
          type="button"
          className="text-white bg-yellow-500  focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          Poltics
        </button>
        <button
          type="button"
          className="text-white bg-blue focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          General Studies
        </button>
        <button
          type="button"
          className="text-white bg-red-700 focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          Current Affairs
        </button>
        <button
          type="button"
          className="text-white bg-blue focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          Mathematics
        </button>
        <button
          type="button"
          className="text-white bg-l_gray focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          Social Science
        </button>
        <button
          type="button"
          className="text-white bg-red-700 focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          English Literature
        </button>
        <button
          type="button"
          className="text-white bg-yellow-500 focus:outline-none font-medium rounded-full text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          Indian History
        </button>
        <button
          type="button"
          className="text-white bg-blue focus:outline-none font-medium rounded-full  text-xs px-3 py-1.5 text-center mb-1 m-1"
        >
          Economics
        </button>
      </span>
    </div>
  );
};

export default Improvments;
