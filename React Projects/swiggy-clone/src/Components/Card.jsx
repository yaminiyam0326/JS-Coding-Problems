import React from "react";

function Card({ image, name, avgrating, duration, area, costForTwo }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
        alt={name}
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2">{name}</h1>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs mr-2">{avgrating}</span>
          <span>{duration}</span>
        </div>
        <p className="text-sm text-gray-600 mb-1">{costForTwo}</p>
        <p className="text-sm text-gray-600">{area}</p>
      </div>
    </div>
  );
}

export default Card;
