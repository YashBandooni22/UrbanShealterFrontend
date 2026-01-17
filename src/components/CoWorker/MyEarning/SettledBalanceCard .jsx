import React from "react";

const SettledBalanceCard = () => {
  return (
    <section className="max-w-sm mx-auto border border-neutral-200 bg-white shadow-sm relative">
      {/* Top Green Indicator */}
      <div className="h-1 w-full bg-emerald-500" />

      {/* Content */}
      <div className="p-6 flex flex-col items-center gap-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <p className="text-[11px] tracking-widest text-neutral-400 uppercase">
            Settled Balance
          </p>
          <span className="text-[10px] font-medium text-green-500 bg-emerald-100 px-2  rounded">
            Ready
          </span>
        </div>

        {/* Amount */}
        <div className="flex items-start gap-1">
          <span className="text-lg font-medium text-neutral-900">
            ₹
          </span>
          <h3 className="text-[55px] font-medium text-neutral-900 leading-none">
            32,500
          </h3>
        </div>


        {/* Button */}
        <button className="w-full bg-black text-white font-semibold text-[12px] tracking-widest py-3 uppercase hover:opacity-90 transition">
          Request Payout
        </button>

        {/* Footer Note */}
        <p className="text-[11px] text-neutral-400 text-center">
          Earnings from previous quarters are fully settled.
        </p>
      </div>
    </section>
  );
};

export default SettledBalanceCard;
