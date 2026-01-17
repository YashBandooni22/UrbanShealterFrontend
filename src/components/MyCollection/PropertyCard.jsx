import React from "react";
import { FiX, FiEye } from "react-icons/fi";
import { IoPlaySharp } from "react-icons/io5";


const PropertyCard = ({ property, onRemove }) => {
  return (
    <div className="w-[230px]">
      {/* Card */}
      <div className="relative group bg-white overflow-hidden">
        {/* Image */}
        <img
          src={property.image}
          className="w-full h-100 object-cover"
        />

        {/* Top-left badge */}
        <div className="absolute top-4 left-4 bg-neutral-700 text-white text-[10px] tracking-widest px-3 py-1 uppercase">
          Private Viewing
        </div>

        {/* Top-right close */}
        <button
          onClick={() => onRemove?.(property.id)}
          className="
    absolute top-4 right-4 z-20
    w-8 h-8
    bg-neutral-700 text-white
    flex items-center justify-center
    opacity-90
    hover:opacity-100
    hover:bg-red-500
    transition-colors duration-200
  ">
          <FiX size={14} />
        </button>


        {/* Hover play button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
            <IoPlaySharp className="text-black ml-1 " />
          </div>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1 text-white text-xs">
              <FiEye />
              {property.views}
            </div>

            {property.live && (
              <span className="bg-green-600 text-white text-[10px] px-3 py-2 rounded-full">
                LIVE
              </span>
            )}
          </div>

          <div className="text-white text-xl font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {property.price}
          </div>

          <div className="flex gap-4 text-white/80 text-xs mt-2">
            <span>{property.beds} Beds</span>
            <span>{property.baths} Baths</span>
            <span>{property.area} sqft</span>
          </div>
        </div>
      </div>

      {/* Outside content (as per Figma) */}
      <div className="mt-1">
        <p className="text-[10px] leading-none font-bold tracking-widest uppercase mt-4">
          {property.title}
        </p>
        <p className="text-[8px] leading-none tracking-widest uppercase text-gray-400 mt-2">
          {property.location}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
