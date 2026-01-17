import React from "react";

const ConciergePayouts = () => {
  const ReadOnlyField = ({ label, value }) => (
    <div>
      <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-2">
        {label}
      </p>
      <div className="border border-gray-200 bg-white px-5 py-4 text-sm text-gray-900">
        {value}
      </div>
    </div>
  );

  return (
    <div className="group bg-white border border-gray-300 p-10 w-full max-w-4xl mt-12 transition-colors duration-200 hover:border-gray-900 mb-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded bg-gray-300 transition-colors duration-200 group-hover:bg-green-500">
          {/* Card icon */}
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="20"
              height="14"
              rx="2"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="6"
              x2="21"
              y2="6"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div>
          <p className="text-xs font-bold text-gray-900 uppercase">
            Concierge Payouts
          </p>
          <p className="text-sm text-gray-500">Bank Information</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        <ReadOnlyField label="Account Name" value="Rajesh Kumar" />
        <ReadOnlyField label="Account Number" value="1234567890" />
        <ReadOnlyField label="IFSC Code" value="HDFC0001234" />
        <ReadOnlyField label="UPI ID" value="rajesh@paytm" />
      </div>

      {/* Action */}
      <div className="flex justify-end mt-12">
        <button className="border border-gray-900 px-10 py-3 text-xs tracking-[0.25em] uppercase text-gray-900 hover:bg-gray-50 transition">
          Update Transfer Info
        </button>
      </div>
    </div>
  );
};

export default ConciergePayouts;
