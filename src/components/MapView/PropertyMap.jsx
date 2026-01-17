import React from "react";

const PropertyMap = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-12">
      <div className="mb-4">
        <p className="text-xl font-light">Global Presence</p>
        <p className="text-xs text-gray-500">
          Properties across major cities worldwide
        </p>
      </div>

      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md bg-white flex items-center justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default PropertyMap;
