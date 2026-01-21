import React, { useState } from "react";
import BHKBreakdownModal from "../Modal/BHKBreakdownModal";
import PriorityConciergeModal from "../Modal/PriorityConciergeModal";


const FloorPlanPricing = () => {
  const [selectedBHK, setSelectedBHK] = useState("3 BHK");
  const [isBreakdownOpen, setIsBreakdownOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK"];

  const floorData = {
    "1 BHK": {
      price: "60.00 Lakh",
      carpet: 550,
      bathrooms: 2,
      balconies: 1,
      possession: "Dec 2026",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
    },
    "2 BHK": {
      price: "80.00 Lakh",
      carpet: 700,
      bathrooms: 2,
      balconies: 2,
      possession: "Jan 2027",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
    },
    "3 BHK": {
      price: "95.00 Lakh",
      carpet: 850,
      bathrooms: 3,
      balconies: 2,
      possession: "Mar 2027",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
    },
  };

  const data = floorData[selectedBHK];

  return (
    <>
      <section className="max-w-8xl px-8 py-12">
        {/* ===================== HEADER ===================== */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8">
          <div>
            <h3 className="text-4xl text-gray-900 mb-2">
              Floor Plan & Pricing
            </h3>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Precise Spatial Configurations & Valuations
            </p>
          </div>

          <div className="flex space-x-2 mt-4 md:mt-0">
            {bhkOptions.map((bhk) => (
              <button
                key={bhk}
                onClick={() => setSelectedBHK(bhk)}
                className={`px-4 py-2 text-sm font-medium border rounded transition ${selectedBHK === bhk
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
              >
                {bhk}
              </button>
            ))}
          </div>
        </div>

        {/* ===================== MAIN CONTENT ===================== */}
        <div className="flex flex-col md:flex-row gap-8 pl-4">
          {/* ===================== IMAGE ===================== */}
          <div
            className={`relative md:w-2/3 h-[600px] p-10 shadow-2xl bg-white`}
          >
            <img
              src={data.img}
              alt={`${selectedBHK} Floor Plan`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />

            <div className="absolute top-12 left-12 px-3 py-2 text-xs font-semibold text-gray-900 bg-gray-50 rounded shadow space-y-1">
              <p className="text-gray-500">CONFIGURATION</p>
              <p className="text-xl font-semibold">{selectedBHK}</p>
            </div>

          </div>

          {/* ===================== INFO CARD ===================== */}
          <div
            className={`md:w-1/3 h-[460px]  bg-white shadow-md rounded p-6 flex flex-col justify-between`}
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Valuation
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {data.price}{" "}
                <span className="text-sm font-normal text-gray-400">
                  onwards
                </span>
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span className="text-sm text-gray-400">Carpet Area</span>
                  <span className="font-medium">
                    {data.carpet} sq.ft
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm text-gray-400">Bathrooms</span>
                  <span className="font-medium">
                    {data.bathrooms}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm text-gray-400">Balconies</span>
                  <span className="font-medium">
                    {data.balconies}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm text-gray-400">Possession</span>
                  <span className="font-medium">
                    {data.possession}
                  </span>
                </li>
              </ul>
            </div>

            {/* ===================== CTAs ===================== */}
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setIsBreakdownOpen(true)}
                className="w-full px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition"
              >
                View Detailed Dimensions
              </button>

              <button
                onClick={() => setIsConciergeOpen(true)}
                className="w-full px-4 py-2 border border-gray-300 text-sm font-medium rounded hover:bg-gray-50 transition"
              >
                Enquire for Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MODALS ===================== */}
      <BHKBreakdownModal
        isOpen={isBreakdownOpen}
        onClose={() => setIsBreakdownOpen(false)}
      />

      {isConciergeOpen && (
        <PriorityConciergeModal
          onClose={() => setIsConciergeOpen(false)}
        />
      )}
    </>
  );
};

export default FloorPlanPricing;
