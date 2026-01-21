import React from "react";

const NearbyPlacesList = ({ place }) => {
  const { name, type, distance } = place;

  return (
    <div className="flex items-start gap-4 px-2 py-3 transition-colors cursor-pointer hover:bg-neutral-900 group">
      {/* ICON */}
      <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-sm text-neutral-500 group-hover:text-white group-hover:border-neutral-700">
        🏥
      </div>

      {/* CONTENT */}
      <div>
        <p className="text-sm font-medium text-neutral-900 group-hover:text-white">
          {name}
        </p>

        <div className="flex items-center gap-3 mt-1 text-xs">
          <span className="uppercase tracking-widest text-neutral-400 group-hover:text-neutral-300">
            {type}
          </span>
          <span className="text-emerald-600 font-medium flex items-center gap-1">
            📍 {distance}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NearbyPlacesList;
