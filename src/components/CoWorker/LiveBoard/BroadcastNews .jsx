import React from "react";

// ===================== DATA =====================
const BROADCAST_DATA = [
  {
    id: "ID-1047",
    title: "Secured Premium Sale",
    amount: "+₹4,000",
    isYou: false,
  },
  {
    id: "ID-3892",
    title: "Converted Trial User",
    amount: "+₹3,000",
    isYou: false,
  },
  {
    id: "YOU",
    title: "Gained New Clicks",
    amount: "Pulse ↑",
    isYou: true,
  },
];

const BroadcastNews = () => {
  return (
    <section className="bg-white border border-neutral-200 shadow-sm p-4 max-w-md mb-10">
      {/* ===================== HEADER ===================== */}
      <div className="flex items-center gap-3 mb-5">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <p className="text-[12px] tracking-[0.35em] uppercase font-bold text-neutral-900">
          Broadcast News
        </p>
      </div>

      {/* ===================== ITEMS ===================== */}
      {BROADCAST_DATA.map((item, index) => (
        <div
          key={index}
          className={`pb-2 border-b border-neutral-100  `}
        >
          <div className="flex items-start gap-4">
            <span className="text-neutral-300 text-xl">⚡</span>

            <div>
              <p
                className={`text-sm font-semibold text-neutral-900 mb-1`} 
              >
                {item.id}
              </p>
              <p
                className={`text-[12px] tracking-[0.15em] text-sm uppercase text-neutral-400 mb-3 `}
              >
                {item.title}
              </p>
              <p
                className={`text-sm text-emerald-600 font-semibold tracking-wide`}
              >
                {item.amount}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BroadcastNews;
