import JourneyHeader from "./JourneyHeader";
import JourneyConversionPath from "./JourneyConversionPath";
import WeeklyPulse from "./WeeklyPulseRow";
import JourneyBroadcastTools from "./JourneyBroadcastTools";

const Journey = () => {
  return (
    <div className="space-y-16">
      <JourneyHeader />
      <JourneyConversionPath />
      <WeeklyPulse />
      <JourneyBroadcastTools />
    </div>
  );
};

export default Journey;
