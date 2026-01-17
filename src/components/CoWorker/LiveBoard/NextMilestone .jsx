import React from "react";

const NextMilestone = () => {
  return (
    <section className="bg-white border border-neutral-200 shadow-sm p-10 max-w-md mt-20 ">
      {/* ===================== HEADER ===================== */}
      <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400 mb-6">
        Next Milestone
      </p>

      {/* ===================== TARGET ROW ===================== */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[13px] tracking-[0.2em] uppercase font-semibold text-neutral-900">
          To Rank #1
        </span>

        <span className="text-[13px] tracking-[0.2em] uppercase font-semibold text-neutral-900">
          +3 Sales
        </span>
      </div>

      {/* ===================== PROGRESS BAR ===================== */}
      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden mb-3">
        <div className="h-full w-[85%] bg-emerald-500 rounded-full" />
      </div>

      {/* ===================== FOOTER ===================== */}
      <p className="text-[12px] tracking-[0.05em] uppercase text-neutral-900 leading-relaxed">
        You are outperforming 85% of your peers this week.
      </p>
    </section>
  );
};

export default NextMilestone;
