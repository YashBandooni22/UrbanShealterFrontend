import React from "react";
import { FiClock } from "react-icons/fi";

const QuarterStatusCard = () => {
  return (
    <section className="max-w-md mx-auto bg-white border border-neutral-200 shadow-sm p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between text-[11px] text-neutral-400 tracking-widest">
        <div className="flex items-center gap-2">
          <span>Quarter Status</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
        <span>Current Q1</span>
      </div>

      {/* Revenue & Earnings */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[11px] text-neutral-400 uppercase tracking-widest">
            Sales Revenue
          </p>
          <h3 className="text-[25px]  text-neutral-900 mt-1">
            ₹118,147
          </h3>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-emerald-500 uppercase tracking-widest">
            Your Earnings
          </p>
          <h3 className="text-[25px]  text-neutral-900 ">
            ₹11,815
          </h3>
          <p className="text-[10px] text-neutral-400">(10% Commission)</p>
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* Tier & Milestone */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 font-semibold">
            S
          </div>
          <div>
            <p className="text-[11px] text-neutral-400 tracking-widest uppercase">
              Active Tier
            </p>
            <p className="text-[14px] font-medium text-neutral-900">Silver Tier</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-neutral-400 tracking-widest uppercase">
            Next Milestone
          </p>
          <p className="text-[14px] font-medium text-neutral-900">₹150,000</p>
        </div>
      </div>

      {/* Quarterly Settlement */}
      <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 px-4 py-3 rounded">
        <FiClock className="text-neutral-400" />
        <p className="text-[11px] text-neutral-400 uppercase tracking-widest flex-1">
          Quarterly Settlement
        </p>
        <span className="text-[12px] font-semibold text-neutral-900">April 05</span>
      </div>
    </section>
  );
};

export default QuarterStatusCard;
