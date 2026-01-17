// FilterModal.jsx
import React, { useRef, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

const FilterModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  const [selectedReady, setSelectedReady] = useState(null);
  const [showTiming, setShowTiming] = useState(false);
  const [selectedTiming, setSelectedTiming] = useState([]);
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);

  const [selectedBed, setSelectedBed] = useState(null);

  const READY_OPTIONS = [
    { id: 1, label: "Ongoing Work" },
    { id: 2, label: "Coming Soon" },
    { id: 3, label: "Second Hand" },
    { id: 4, label: "Ready Now" },
  ];

  const MAIN_CATEGORIES = [
    { id: 1, label: "Residential" },
    { id: 2, label: "Commercial" },
    { id: 3, label: "Industrial" },
  ];

  const SUB_CATEGORIES = [
    { id: 1, label: "Apartment" },
    { id: 2, label: "Villa" },
    { id: 3, label: "Penthouse" },
    { id: 4, label: "Farmhouse" },
    { id: 5, label: "Heritage Home" },
    { id: 6, label: "Weekend Home" },
    { id: 7, label: "Builder Floor" },
    { id: 8, label: "Row House" },
    { id: 9, label: "Studio" },
    { id: 10, label: "Duplex" },
    { id: 11, label: "Plot/Land" },
  ];

  const CATEGORY_OPTIONS = [
    { id: 1, label: "Vaastu Compliant" },
    { id: 2, label: "Sea View" },
    { id: 3, label: "Quiet Area" },
    { id: 4, label: "Gated Security" },
    { id: 5, label: "Family Friendly" },
    { id: 6, label: "Modern Luxury" },
    { id: 7, label: "Green Living" },
    { id: 8, label: "Skyline View" },
    { id: 9, label: "Zen Garden" },
    { id: 10, label: "Smart Home" },
  ];

  const categories = [
    "Vaastu Compliant",
    "Sea View",
    "Quiet Area",
    "Gated Security",
    "Family Friendly",
    "Modern Luxury",
    "Green Living",
    "Skyline View",
    "Zen Garden",
    "Smart Home",
  ];
  const BEDROOM_OPTIONS = ["1", "2", "3", "4", "5+"];




  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black/30" >
      <div
        ref={modalRef}
        className="bg-white max-w-4xl w-full rounded-md overflow-y-auto max-h-[80vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center  p-6">
          <h2 className="text-xl font-normal text-gray-400">More Filters</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FiX size={18} />
          </button>
        </div>

        {/* Filter content */}
        <div className='bg-[#FAFAFA] p-8'>
          <p
            className="mb-2 tracking-[0.25em]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "10px",
              lineHeight: "15px",
              color: "oklch(0.21 0.034 264.665)",
            }}
          >
            1. WHEN IS IT READY?
          </p>
          <div className="grid grid-cols-4 gap-4 mb-4">
            {READY_OPTIONS.map((option) => {
              const isActive = selectedReady === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setSelectedReady(option.id);
                    // Show timing select only for Coming Soon or Ready Now
                    if (option.label === "Coming Soon" || option.label === "Ready Now") {
                      setShowTiming(true);
                    } else {
                      setShowTiming(false);
                      setSelectedTiming([]); // reset
                    }
                  }}
                  className={`p-4 text-xs font-medium border transition ${isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-500 border-gray-200 hover:border-black"
                    }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          {showTiming && (
            <div className="mt-4">
              <p className="text-[10px] font-bold tracking-[0.25em] mb-2">
                WHEN WILL IT BE FINISHED?
              </p>

              <div className="relative">
                <select
                  multiple
                  value={selectedTiming}
                  onChange={(e) => {
                    const options = Array.from(e.target.selectedOptions, (option) => option.value);
                    setSelectedTiming(options);
                  }}
                  className="w-full border border-gray-300 rounded-md p-3 text-sm text-gray-700 placeholder-gray-400
                   focus:outline-none focus:border-black cursor-pointer"
                >
                  <option value="" disabled>
                    CHOOSE TIMING
                  </option>
                  <option value="in_3_months">IN 3 MONTHS</option>
                  <option value="in_6_months">IN 6 MONTHS</option>
                  <option value="in_1_year">IN 1 YEAR</option>
                  <option value="over_1_year">OVER 1 YEAR</option>
                </select>

                {/* Optional: icon on right */}
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          )}


          <p
            className="text-xs font-semibold tracking-[0.25em] mb-2"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "10px",
              lineHeight: "15px",
              color: "oklch(0.21 0.034 264.665)",
            }}
          >
            2. SELECT CATEGORY
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {MAIN_CATEGORIES.map((category) => {
              const isActive = selectedMain === category.id; // ✅ compare with id

              return (
                <button
                  key={category.id} // ✅ unique key
                  type="button"
                  onClick={() => setSelectedMain(category.id)}
                  className={`p-2 text-xs font-medium border transition ${isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-500 border-gray-200 hover:border-black"
                    }`}
                >
                  {category.label} {/* ✅ render label */}
                </button>
              );
            })}
          </div>


          <div className="grid grid-cols-3 gap-4">
            {SUB_CATEGORIES.map((sub) => {
              const isActive = selectedSub === sub.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSub(sub.id)}
                  className={`
          p-2 text-xs font-medium border transition
          ${isActive
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-500 border-gray-200 hover:border-black"}
        `}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Bedrooms */}
        <div className="px-8 py-6 bg-[#FAFAFA]">
          <p className="text-[10px] font-bold tracking-[0.25em] mb-4">
            3. HOW MANY BEDROOMS?
          </p>

          <div className="grid grid-cols-5 gap-4">
            {BEDROOM_OPTIONS.map((bed) => {
              const isActive = selectedBed === bed;

              return (
                <button
                  key={bed}
                  type="button"
                  onClick={() => setSelectedBed(bed)}
                  className={`
                h-14 text-sm font-medium border transition
                ${isActive
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-600 border-gray-200 hover:border-black"}
              `}
                >
                  {bed}
                </button>
              );
            })}
          </div>
        </div>


        {/* Budget */}
        <div className="px-8 py-6 bg-[#FAFAFA]">
          <p className="text-[10px] font-bold tracking-[0.25em]  mb-4">
            4. YOUR BUDGET (₹)
          </p>

          <div className="grid grid-cols-2 gap-6">
            {/* Min */}
            <div className="border border-gray-200 bg-white h-14 flex items-center px-4">
              <span className="text-xs text-gray-400 mr-3">MIN</span>
              <input
                type="number"
                placeholder="0"
                className="w-full text-sm outline-none placeholder-gray-400"
              />
            </div>

            {/* Max */}
            <div className="border border-gray-200 bg-white h-14 flex items-center px-4">
              <span className="text-xs text-gray-400 mr-3">MAX</span>
              <input
                type="text"
                placeholder="Any"
                className="w-full text-sm outline-none placeholder-gray-400"
              />
            </div>
          </div>
        </div>




        {/* Must-have features */}
        <div className="bg-[#FAFAFA] px-8 py-6">
          <p className="text-xs font-bold tracking-[0.25em] mb-6">
            6. MUST-HAVE FEATURES
          </p>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            {/* Essential Utilities */}
            <div>
              <p className="text-[8px] font-semibold text-gray-400 mb-2 tracking-wider">
                ESSENTIAL UTILITIES
              </p>

              <div className="space-y-4">
                {["24/7 Security", "24h Water Supply"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-4 text-xs text-gray-700 font-semibold cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                    {item}
                  </label>

                ))}
              </div>
            </div>

            <div>
              <p className="text-[8px] font-semibold text-transparent mb-4">.</p>

              <div className="space-y-4">
                {["Power Backup", "Covered Parking"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-4 text-xs text-gray-700 font-semibold cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                    {item}
                  </label>

                ))}
              </div>
            </div>

            {/* Lifestyle & Health */}
            <div>
              <p className="text-[10px] font-semibold text-gray-400 mb-2 tracking-wider">
                LIFESTYLE & HEALTH
              </p>

              <div className="space-y-4">
                {["Premium Gym", "Private Balcony"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-4 text-sm text-gray-700  font-semibold cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-blue-600 cursor-pointer "
                    />
                    {item}
                  </label>

                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold text-transparent mb-4">.</p>

              <div className="space-y-4">
                {["Swimming Pool", "Clubhouse Access"].map((item) => (
                  <label className="flex items-center gap-4 text-sm text-gray-700 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                    24/7 Security
                  </label>


                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Actions */}
        <div className=" flex justify-between items-center px-8 py-3">
          <button className="text-gray-400">RESET EVERYTHING</button>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-gray-700">SAVE SEARCH</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">SHOW RESULTS</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default FilterModal;
