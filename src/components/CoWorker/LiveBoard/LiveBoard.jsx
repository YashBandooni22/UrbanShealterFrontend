import React from "react";
import LiveHeader from "./LiveHeader";
import NationalStandings from "./NationalStandings";
import NextMilestone from "./NextMilestone ";
import BroadcastNews from "./BroadcastNews ";

const LiveBoard = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-50 ">
      <LiveHeader />
      <div className="flex gap-8 px-16 h-full">
        <NationalStandings className="flex-1" />
        <div className="flex flex-col gap-5 flex-1 ">
          <NextMilestone />
          <BroadcastNews />
        </div>
      </div>
    </div>
  );
};

export default LiveBoard;
