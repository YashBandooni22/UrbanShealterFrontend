import React from "react";
import { FiChevronRight } from "react-icons/fi";

const PremiumSectionHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      <div>
        <h3 className="text-5xl md:text-6xl  text-slate-900">
          Premium Furnished Apartments
        </h3>

        <p className="mt-3 text-slate-500 text-xl">
          Luxury fully-furnished residences ready to move in · Exclusive video
          tours
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-widest">
          <span className="text-emerald-600 font-semibold">
            12 Properties
          </span>
          <span className="text-slate-400">· South Mumbai</span>
          <span className="text-slate-400">
            · ₹75K – ₹2.5L/month
          </span>
        </div>
      </div>

      <button className="flex items-center gap-4 border border-slate-500 mt-5 px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-slate-700 hover:border-slate-500 transition hover:bg-black hover:text-white ">
        View All <FiChevronRight />
      </button>
    </div>
  );
};

export default PremiumSectionHeader;
