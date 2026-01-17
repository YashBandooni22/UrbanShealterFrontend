import React, { useState } from "react";

const DATA = {
  all: [
    { rank: 1, code: "CW-1047", growth: "22.5%", sales: 45 },
    { rank: 2, code: "CW-2156", growth: "18.3%", sales: 42 },
    { rank: 3, code: "CW-3892", growth: "15.8%", sales: 38 },
  ],
  city: [
    { rank: 1, code: "CW-2156", growth: "18.3%", sales: 42 },
    { rank: 2, code: "CW-3892", growth: "15.8%", sales: 38 },
  ],
  area: [
    { rank: 1, code: "CW-3892", growth: "15.8%", sales: 38 },
  ],
  you: [
    { rank: 47, code: "YOU (RK-2847)", growth: "15.2%", sales: 12, isYou: true },
  ],
};

const FILTERS = [
  { key: "all", label: "All India" },
  { key: "city", label: "My City" },
  { key: "area", label: "My Area" },
];

const NationalStandings = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Combine active filter data with YOU row
  const standings = [...DATA[activeFilter], ...DATA.you];

  return (
    <section className="min-w-2xl">
      {/* ===================== FILTER VIEW ===================== */}
      <div className="flex items-center gap-8 mb-10">
        <span className="text-[11px] tracking-[0.35em] uppercase text-gray-600">
          Filter View
        </span>

        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-8 py-2 text-[10px] tracking-[0.15em] uppercase font-bold transition
              ${activeFilter === filter.key
                ? "bg-neutral-900 text-white shadow-2xl"
                : "bg-white border border-neutral-200 text-neutral-400"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* ===================== NATIONAL STANDINGS ===================== */}
      <div className="bg-white border border-neutral-200 shadow-sm h-[90vh] overflow-y-auto">
        <div className="px-12 py-8 border-b border-neutral-100">
          <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400">
            National Standings
          </p>
        </div>

        {standings.map((item) => (
          <div
            key={item.rank}
            className={`grid items-start px-8 py-6 border-b border-neutral-100 ${item.isYou ? "relative bg-neutral-50" : ""
              }`}
            style={{ gridTemplateColumns: "80px 1fr 120px 120px" }} 
          >
            {item.isYou && <div className="absolute left-0 top-0 bottom-0 w-1 bg-neutral-900" />}

            {/* Rank */}
            <h3
              className={`w-10 h-10 flex items-center justify-center text-xl ${item.isYou ? "bg-neutral-200" : "bg-neutral-900 text-white"
                }`}
            >
              {item.rank}
            </h3>

            {/* Identity */}
            <div>
              <p className="font-semibold text-neutral-900 text-sm">{item.code}</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mt-1">
                Verified Partner
              </p>
            </div>

            {/* Growth */}
            <div className="text-right text-sm">
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-1">
                Growth
              </p>
              <p className="font-semibold ">↗ {item.growth}</p>
            </div>

            {/* Success */}
            <div className="text-right text-sm">
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-1">
                Success
              </p>
              <p>{item.sales} sales</p>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default NationalStandings;
