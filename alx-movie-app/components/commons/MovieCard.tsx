import React from "react";

const MovieCard = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <div className="h-48 bg-gray-300 rounded mb-2"></div>
      <h3 className="text-lg font-semibold">Movie Title</h3>
      <p className="text-sm text-gray-600">Release Year</p>
    </div>
  );
};

export default MovieCard;
