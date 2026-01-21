import React from "react";
import ConnectivityFilter from "./NeighborhoodConnectivity/ConnectivityFilter";
import ConnectivityMap from "./NeighborhoodConnectivity/ConnectivityMap";
import NeighborhoodStats from "./NeighborhoodConnectivity/NeighborhoodStats";

const NeighborhoodConnectivity = () => {
  return (
    <section className="w-full h-[140vh] flex px-8">
      
      {/* LEFT PANEL */}
      <aside className="w-[35%] h-full bg-white z-10">
        <ConnectivityFilter />
      </aside>

      {/* MAP CANVAS */}
      <div className="w-[65%] h-full relative">
        {/* Map */}
        <ConnectivityMap />

        {/* OVERLAY CARD — BOTTOM RIGHT */}
        <div className="absolute bottom-2 right-2 z-20">
          <NeighborhoodStats />
        </div>
      </div>

    </section>
  );
};

export default NeighborhoodConnectivity;
