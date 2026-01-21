import React from "react";

const NearbyPlacesHeader = ({ count }) => {
  return (
    <div className="pr-8 py-4 flex items-center justify-between border-t border-neutral-200">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-xs tracking-widest uppercase text-neutral-600">
          Nearby Places
        </span>
      </div>

      <span className="text-xs text-neutral-500  px-3 py-1 bg-gray-100">
        {count} Found
      </span>
    </div>
  );
};

export default NearbyPlacesHeader;
