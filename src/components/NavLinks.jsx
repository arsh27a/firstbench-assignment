import React from "react";

const NavLinks = ({ isMobile }) => {
  return (
    <div
      className={`${
        isMobile
          ? "flex flex-col justify:center items:centerspace-y-2"
          : "flex space-x-2 mx-6"
      }`}
    >
      <a
        href="#"
        className="rounded-md p-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center items-center"
        aria-current="page"
      >
        <i className="bi bi-house m-1"></i> Dashboard
      </a>
      <a
        href="#"
        className="rounded-md p-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center items-center"
      >
        <i className="bi bi-stars m-1"></i>FirstGuru
      </a>
      <a
        href="#"
        className="rounded-md p-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center items-center"
      >
        <i className="bi bi-shop m-1"></i>TownHall
      </a>
      <a
        href="#"
        className="rounded-md p-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center items-center"
      >
        <i className="bi bi-lightning-charge m-1"></i> AI Evaluation
      </a>
      <a
        href="#"
        className="rounded-md p-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center items-center"
      >
        <i className="bi bi-graph-up m-1"></i>Performance
      </a>
      <a
        href="#"
        className="rounded-md p-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center items-center"
      >
        <i className="bi bi-card-checklist m-1"></i> Mock Test
      </a>
    </div>
  );
};

export default NavLinks;
