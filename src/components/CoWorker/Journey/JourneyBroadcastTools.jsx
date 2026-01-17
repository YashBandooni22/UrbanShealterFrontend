import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { HiOutlineQrcode } from "react-icons/hi";

/* ===================== TOOL CARD ===================== */
const ToolCard = ({ icon, title, subtitle }) => {
  return (
    <div
      className="
        group
        border border-neutral-200 bg-white p-10
        cursor-pointer
        transition-all duration-300
        hover:border-green-600
      "
    >
      {/* Icon Container */}
      <div
        className="
          w-14 h-14 flex items-center justify-center
          border border-neutral-200
          mb-8
          transition-all duration-300
          group-hover:bg-green-600
          group-hover:border-green-600
        "
      >
        <div className="transition-colors duration-300 group-hover:text-white">
          {icon}
        </div>
      </div>

      {/* Title */}
      <p className="text-[13px] font-semibold tracking-widest uppercase text-neutral-900 mb-3">
        {title}
      </p>

      {/* Subtitle */}
      <p className="text-[11px] tracking-widest uppercase text-neutral-400">
        {subtitle}
      </p>
    </div>
  );
};

/* ===================== PAGE ===================== */
const JourneyBroadcastTools = () => {
  return (
    <section className="border border-neutral-200 bg-white p-12 max-w-5xl mx-auto mb-10">
      {/* ===================== HEADER ===================== */}
      <div className="mb-16">
        <p className="text-[11px] tracking-widest uppercase text-neutral-400 mb-4">
          Broadcast Tools
        </p>

        <p className="text-neutral-500 text-sm max-w-xl">
          Use these tools to share your link with people you know.
        </p>
      </div>

      {/* ===================== TOOLS GRID ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ToolCard
          icon={<FiMessageCircle className="w-6 h-6" />}
          title="Whatsapp Message"
          subtitle="Pre-written text for quick messaging"
        />

        <ToolCard
          icon={<HiOutlineQrcode className="w-6 h-6" />}
          title="Custom QR Code"
          subtitle="Ready for high-quality printing"
        />
      </div>
    </section>
  );
};

export default JourneyBroadcastTools;
