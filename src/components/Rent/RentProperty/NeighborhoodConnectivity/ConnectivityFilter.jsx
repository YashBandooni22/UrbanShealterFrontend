import React, { useState } from "react";
import FilterGrid from "./FilterGrid";
import FilterHeader from "./FilterHeader";
import NearbyPlacesHeader from "./NearbyPlacesHeader";
import NearbyPlacesList from "./NearbyPlacesList";

// filterData.js
export const FILTERS = [
  { key: "all", label: "All", icon: "📍" },
  { key: "hospital", label: "Hospital", icon: "🏥" },
  { key: "school", label: "School", icon: "🏫" },
  { key: "college", label: "College", icon: "🎓" },
  { key: "mall", label: "Mall", icon: "🛍️" },
  { key: "metro", label: "Metro", icon: "🚇" },
  { key: "train", label: "Train", icon: "🚆" },
  { key: "bus", label: "Bus", icon: "🚌" },
  { key: "airport", label: "Airport", icon: "✈️" },
  { key: "restaurant", label: "Restaurant", icon: "🍽️" },
  { key: "park", label: "Park", icon: "🌳" },
  { key: "cafe", label: "Cafe", icon: "☕" },
];

const PLACES = [
  { id: 1, name: "Nanavati Hospital", type: "hospital", distance: "2.5 KM" },
  { id: 2, name: "Kokilaben Hospital", type: "hospital", distance: "3.2 KM" },
  { id: 3, name: "Seven Hills Hospital", type: "hospital", distance: "1.8 KM" },
  { id: 4, name: "Holy Spirit Hospital", type: "hospital", distance: "2.1 KM" },
];

const ConnectivityFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // limit to at most 4 places
  const filteredPlaces =
    activeFilter === "all"
      ? PLACES.slice(0, 4)
      : PLACES.filter((p) => p.type === activeFilter).slice(0, 4);

  return (
    <div className="h-full flex flex-col border-l border-neutral-200">
      <FilterHeader />
      <FilterGrid
        filters={FILTERS}
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />
      <NearbyPlacesHeader count={filteredPlaces.length} />

      {/* Display up to 4 places, take remaining space */}
      <div className="flex flex-col justify-start mt-4 pr-14 gap-4 flex-grow">
        {filteredPlaces.map((place) => (
          <NearbyPlacesList key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default ConnectivityFilter;
