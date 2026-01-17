import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const AnnualPerformanceCard = () => {
  return (
    <section className="bg-white border border-neutral-200 shadow-sm p-10 max-w-md mx-auto">
      {/* Header */}
      <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-6">
        Annual Performance
      </p>

      {/* Metrics */}
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-2">
            Sales Volume
          </p>
          <h3 className="text-2xl  text-black">₹1.2M</h3>
        </div>
        <div>
          <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-2">
            Total Payouts
          </p>
          <h2 className="text-2xl  text-black">₹145,000</h2>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-neutral-200 mb-6" />

      {/* Bonus Eligibility */}
      <div>
        <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-2">
          Yearly Bonus Eligibility
        </p>
        <div className="w-full bg-neutral-200 h-2 rounded-full mb-4">
          <div
            className="bg-black h-1 rounded-full"
            style={{ width: "65%" }}
          ></div>
        </div>
        <div className="flex items-start gap-2 text-[11px] text-neutral-500">
          <span className="mt-0.5 text-white bg-black border rounded-full p-1">
            <FiArrowUpRight size={12} />
          </span>
          <p>
            Achieve <span className="font-semibold text-black">₹2M</span> total
            volume for an additional 2.5% annual loyalty bonus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnnualPerformanceCard;
