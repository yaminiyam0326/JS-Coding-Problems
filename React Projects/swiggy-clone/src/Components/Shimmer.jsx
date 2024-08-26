import React from "react";

function Shimmer() {
  return (
    <div className="animate-pulse flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-full">
      <div className="w-full h-32 bg-gray-300 rounded-md mb-4"></div>
      <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
    </div>
  );
}

export default Shimmer;
