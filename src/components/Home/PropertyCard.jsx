import React, { useRef } from "react";
import { FiHeart, FiShare2, FiEye, FiMapPin } from "react-icons/fi";

const PropertyCard = ({ data, onPlay }) => {
    const videoRef = useRef(null);

    return (
        <div className="space-y-3" style={{ fontFamily: "Montserrat, sans-serif" }}>

            {/* CARD */}
        <div className="relative h-[320px] sm:h-[320px] md:h-[330px] w-full rounded-2xl overflow-hidden bg-gray-200 border border-gray-800 cursor-pointer"
                onClick={onPlay}
                >
                {/* Preview Video */}
                <video
                    ref={videoRef}
                    src={data.videoUrl}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay (always visible) */}
                <div
                    className="
            absolute inset-0
            // bg-gradient-to-t from-black/90 via-black/40 to-transparent
            bg-gray-200
            p-3
            sm:p-3
            md:p-3
            flex flex-col justify-between
          "
                >
                    {/* Top */}
                    <div className="flex justify-between items-start gap-2">
                        <div className="bg-black/20 text-[9px] sm:text-[10px] font-semibold px-2 sm:px-3 py-1.5 sm:py-2 rounded backdrop-blur">
                            {data.tag}
                        </div>

                        <div className="bg-black/70 text-[10px] font-bold sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-xl">
                            {data.duration}
                        </div>
                    </div>

                    {/* Play */}
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPlay();
                            }}
                            className="
                w-12 h-12
                sm:w-14 sm:h-14
                md:w-16 md:h-16
                text-lg sm:text-xl md:text-2xl
                bg-white text-black
                rounded-full
                flex items-center justify-center
                transition
              "
                        >
                            ▶
                        </button>
                    </div>

                    {/* Bottom */}
                    <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between text-[10px] sm:text-xs text-gray-300">
                            <span className="flex items-center gap-1">
                                <FiEye size={12} className="sm:hidden" />
                                <FiEye size={14} className="hidden sm:block" />
                                {data.views}
                            </span>

                            <span className="bg-white/10 border border-white/30 px-3 sm:px-3 py-3 sm:py-3 rounded-mdtext-[12px] sm:text-[9px] uppercase">
                                {data.engagement.count} {data.engagement.label}
                            </span>

                        </div>

                        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
                            {data.price}
                        </h4>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-300">
                            <span className="flex items-center gap-1">
                                <FiHeart /> {data.stats.likes}
                            </span>
                            <span className="flex items-center gap-1">
                                <FiShare2 /> {data.stats.shares}
                            </span>
                            <span className="flex items-center gap-1">
                                <FiEye /> {data.stats.views}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Title & Location */}
            <div>
                <p className="text-sm sm:text-base font-medium text-black truncate">
                    {data.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                    <FiMapPin /> {data.location}
                </p>
            </div>
        </div>
    );
};

export default PropertyCard;
