import React from 'react';
import { FiEye, FiPlay } from 'react-icons/fi';
import { propertiesData } from "../../assets/assest"

const Properties = () => {
    return (
        <div className="max-w-8xl px-8 mt-8" style={{ fontFamily: "Montserrat, sans-serif" }}>

            {/* Header */}
            <div className="mb-4">
                <p className="text-[22px] font-light">5. Properties</p>
                <p className="text-xs text-gray-500 mt-2">Premium residences in Mumbai</p>
                <hr className='text-gray-300 mt-2' />
            </div>


            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertiesData.map((property) => (
                    <div key={property.id} className="border rounded-md shadow-md overflow-hidden">

                        {/* IMAGE CONTAINER */}
                        <div className="relative h-100 overflow-hidden">

                            {/* Image */}
                            <img
                                src={property.image}
                                className="w-full h-full object-cover"
                            />

                            {/* Bottom Gradient Shadow */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

                            {/* Most Viewed */}
                            <div className="absolute top-2 left-2 bg-gray-800 text-white text-[10px] px-2 py-1 uppercase z-20">
                                MOST VIEWED
                            </div>

                            {/* Duration */}
                            <div className="absolute top-2 right-2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded-full z-20">
                                {property.duration}
                            </div>

                            {/* Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center text-white z-20">
                                <FiPlay size={28} />
                            </div>

                            {/* DATA OVER IMAGE */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 z-30 text-[10px] text-white">

                                {/* Views + Price */}
                                <div className="mb-2">
                                    <div className="flex items-center gap-1 bg-white/90 text-black border rounded-lg w-fit px-2 py-[2px] mb-1">
                                        <FiEye size={12} /> {property.views}
                                    </div>

                                    <div className="font-semibold text-sm">{property.price}</div>
                                </div>

                                {/* Meta */}
                                <div className="flex gap-4 text-xs">
                                    <div>{property.beds} 🛏</div>
                                    <div>{property.baths} 🛁</div>
                                    <div>{property.area} sq.ft</div>
                                </div>
                            </div>

                        </div>

                        {/* BOTTOM WHITE CONTENT */}
                        <div className="bg-white p-4">
                            <p className="font-semibold text-sm">{property.name}</p>
                            <p className="text-xs text-gray-400">{property.location}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Properties;
