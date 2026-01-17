import React from 'react';
import { FiTrendingUp, FiMapPin, FiAward, FiTarget } from "react-icons/fi";

const rankings = [
  {
    id: 1,
    icon: <FiAward size={16} />,
    label: "All India",
    rank: "#47",
    total: "of 847 partners",
  },
  {
    id: 2,
    icon: <FiMapPin size={16} />,
    label: "Mumbai",
    rank: "#8",
    total: "of 187 partners",
  },
  {
    id: 3,
    icon: <FiTarget size={16} />,
    label: "Andheri West",
    rank: "#2",
    total: "of 23 partners",
  },
];

const LiveHeader = () => {
  return (
    <main className="max-w-7xl mx-auto px-16 py-14 ">
      {/* ===================== PAGE HEADER ===================== */}
      <section className="mb-8">
        <div className="flex items-center gap-4">
          <span className="text-neutral-800 text-xl">∿</span>
          <h3 className="text-[38px] font-serif text-neutral-900">
            What's Happening
          </h3>
        </div>

        <p className="mt-3 text-[12px] tracking-[0.15em] uppercase text-neutral-400">
          Real-time rankings and news from our community.
        </p>
      </section>

      {/* ===================== MY STANDINGS CARD ===================== */}
      <section className="bg-white border border-neutral-200 shadow-sm p-10 mt-14">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[11px] tracking-[0.03em] uppercase  mb-2">
              My Standings
            </p>
            <p className="text-[14px] text-neutral-700">
              Mumbai • Andheri West
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm font-bold tracking-wide">
            <FiTrendingUp />
            <span>15.2% GROWTH</span>
          </div>
        </div>

        {/* Rankings */}
        <div className="grid grid-cols-3 gap-10 ">
          {rankings.map(({ id, icon, label, rank, total }) => (
            <div key={id} className="border border-neutral-100 bg-gray-50 py-10 text-center hover:bg-white hover:border hover:border-gray-500">
              <div className="flex items-center justify-center gap-2 text-neutral-400 mb-2">
                {icon}
                <span className="text-[11px] tracking-[0.03em] uppercase font-semibold">
                  {label}
                </span>
              </div>

              <h3 className="text-[56px]  text-neutral-900 leading-none">
                {rank}
              </h3>

              <p className="mt-2 text-[11px] tracking-[0.28em] uppercase font-bold">
                {total}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LiveHeader;
