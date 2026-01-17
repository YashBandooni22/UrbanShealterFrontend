import React, { useState } from "react";
import AmenitiesModal from "./AmenitiesModal";
import { FiBookmark } from "react-icons/fi";
import SavedModal from "./MapView/SavedModal";
import FilterModal from "./MapView/FilterModal"

const locations = ["Marol Naka", "Andheri East", "Bandra", "Powai"];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [savedOpen, setSavedOpen] = useState(false);

  const handleSearch = () => {
    alert(
      `Searching for "${searchQuery}" in ${selectedLocation} with amenities: ${selectedAmenities.join(
        ", "
      )}`
    );
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto mt-4 flex justify-center"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex flex-col lg:flex-row  items-center justify-center w-full">
          <div className="relative w-full sm:max-w-[690px] lg:max-w-[65vw] flex shadow-md " >
            {/* Search Icon */}
            <img
              src="/Icon (3).png"
              alt="Search Icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 opacity-50 pointer-events-none"
            />

            {/* Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search street, building..."
              className="w-full border-t border-b border-l border-gray-300 rounded-l-md rounded-r-none pl-14 pr-40 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"/>

            {/* Location Selector (Figma-aligned) */}

            <div
              className="absolute right-27 top-1/2 -translate-y-1/2 flex items-center px-2 py-2 bg-white hover:bg-gray-100 transition">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="text-sm text-gray-600 bg-transparent focus:outline-none cursor-pointer">
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleSearch}
              className="bg-black text-white px-8 font-semibold text-[10px] uppercase hover:bg-green-600 shadow-md transition">
              Search
            </button>
          </div>

          {/* Filters */}
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center justify-center border border-gray-300 text-gray-600 rounded-md px-8 py-2 text-xs hover:border-gray-100 w-full lg:w-auto shadow-md ml-2"
          >
            <span className="mr-2">≡</span> Filters
          </button>

          <button
            onClick={() => setSavedOpen(true)}
            className="flex items-center justify-center gap-2 bg-green-100 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white shadow-md ml-2">
            <FiBookmark className="text-xs" />
            <span className="text-xs">SAVE</span>
          </button>

        </div>


        {/* Modal */}
        <AmenitiesModal
          isOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
          selectedAmenities={selectedAmenities}
          setSelectedAmenities={setSelectedAmenities}
        />

        <SavedModal
          isOpen={savedOpen}
          onClose={() => setSavedOpen(false)}
        />
        <FilterModal
          isOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
          selectedAmenities={selectedAmenities}
          setSelectedAmenities={setSelectedAmenities}
        />

      </div>
      <div className="w-full border-t border-gray-300 mt-3"></div>
    </>

  );
};

export default SearchBar;
