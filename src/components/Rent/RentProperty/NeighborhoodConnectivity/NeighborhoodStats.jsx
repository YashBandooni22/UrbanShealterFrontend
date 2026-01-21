import React from "react";
import { FiNavigation } from "react-icons/fi";

const NeighborhoodStats = () => {
  return (
    <div className="bg-gray-900 text-gray-300 rounded-xl p-6 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="bg-gray-800 p-3 rounded-md mr-4">
          <FiNavigation className="text-white text-xl" />
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase text-gray-300">
            Neighborhood Stats
          </h2>
          <p className="text-xs text-gray-500">Andheri East District</p>
        </div>
      </div>

      <hr className="border-gray-700 mb-6" />

      {/* Stats */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500">
            Air Quality Index
          </p>
          <p className="text-green-400 font-semibold text-sm">
            Optimal <span className="text-white">(42)</span>
          </p>
          <p className="text-xs text-gray-500">Health Grade A+</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-gray-500">
            Transit Score
          </p>
          <p className="text-white font-semibold text-sm">92/100</p>
          <p className="text-xs text-gray-500">World Class</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-gray-500">
            Safety Ranking
          </p>
          <p className="text-white font-semibold text-sm">Top 1%</p>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodStats;
