import React from "react";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
    return (
        <section className="bg-gray-50 px-4 md:px-8 lg:px-8 py-16 flex flex-col md:flex-row items-start justify-between">
            {/* Left Content */}
            <div className="max-w-xl">
                <div className="flex">
                    <h3 className="text-4xl md:text-5xl  text-black mb-4">
                        Coworker 
                    </h3>
                    <p className="text-4xl md:text-5xl text-gray-400 ml-2"> Earnings</p>
                </div>
                <p className="text-sm  text-gray-400 uppercase tracking-widest">
                    Performance-based incentives for urban shelter partners. Track your growth across quarterly tiers.
                </p>
            </div>

            {/* Right Action */}
            <div className="mt-18 md:mt-18">
                <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 px-5 py-3 text-sm font-semibold rounded hover:bg-gray-50 transition">
                    <FiDownload className="w-4 h-4" />
                    Export Report
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
