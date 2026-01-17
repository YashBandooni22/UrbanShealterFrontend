import React, { useState } from "react";


const LeftPanel = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <div className="hidden lg:flex w-1/2 bg-black text-white px-10 lg:px-25 py-10 lg:py-6 flex-col ">


            <div className="flex items-center my-6 max-w-[200px]">
                <div className="flex-1 border-t border-gray-200 "></div>
                <span className="px-4 text-xs text-gray-400 tracking-widest">URBAN SHEALTER</span>
            </div>

            <div className="flex items-start mt-6">

                <div>
                    <h3 className="text-5xl ">
                        The New Era of Spatial Discovery
                    </h3>
                    <p className="text-md text-gray-400 max-w-sm leading-relaxed mt-4">
                        Experience real estate through a curated, <br /> video-first lens. High-fidelity tours for the <br /> discerning modern dweller.
                    </p>
                </div>
            </div>

            <div className="space-y-5 mt-10">
                <div
                    className="flex gap-6 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div
                        className={`
        w-10 h-10 rounded-full transition-colors duration-200
        ${hoveredIndex === 0 ? "bg-white" : "bg-transparent border border-gray-600"}
      `}
                    />
                    <div>
                        <p className="text-sm font-bold text-gray-300 uppercase">
                            Cinematic Tours
                        </p>
                        <p className="text-xs text-gray-400">
                            Ultra-HD property walkthroughs
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div
                    className="flex gap-6 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div
                        className={`
        w-10 h-10 rounded-full transition-colors duration-200
        ${hoveredIndex === 1 ? "bg-white" : "bg-transparent border border-gray-600"}
      `}
                    />
                    <div>
                        <p className="text-sm font-bold text-gray-300 uppercase">
                            Verified Assets
                        </p>
                        <p className="text-xs text-gray-400">
                            100% authenticity guaranteed
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div
                    className="flex gap-6 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div
                        className={`
        w-10 h-10 rounded-full transition-colors duration-200
        ${hoveredIndex === 2 ? "bg-white" : "bg-transparent border border-gray-600"}
      `}
                    />
                    <div>
                        <p className="text-sm font-bold text-gray-300 uppercase">
                            Priority Access
                        </p>
                        <p className="text-xs text-gray-400">
                            Exclusive off-market listings
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-sm text-gray-600 tracking-widest mt-10">
                PREMIUM REAL ESTATE PLATFORM
            </p>
        </div>
    );
};

export default LeftPanel;