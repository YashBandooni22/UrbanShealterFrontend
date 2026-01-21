import React, { useEffect } from "react";

const FinancialAdvisoryModal = ({ isOpen, onClose }) => {
  // Scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="financial-advisory-title"
    >
      <div className="relative w-full max-w-md  bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between  px-6 py-5">
          <div>
            <h2
              id="financial-advisory-title"
              className="text-lg font-bold text-gray-900"
            >
              Financial Advisory
            </h2>
            <p className="mt-1 text-xs font-medium tracking-widest text-gray-400">
              PRECISION EMI ESTIMATION
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className=" px-4 space-y-6 shadow-lg">
          {/* Principle & Interest */}
          <div className="grid grid-cols-2 gap-6 ">
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400">
                PRINCIPLE
              </p>
              <p className="mt-2 text-lg font-semibold text-gray-900">
                ₹2.28 Cr
              </p>
              <div className="mt-3 h-px bg-gray-200" />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400">
                INTEREST
              </p>
              <p className="mt-2 text-lg font-semibold text-gray-900">
                8.5%
              </p>
              <div className="mt-3 h-px bg-gray-200" />
            </div>
          </div>

          {/* Tenure */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400">
              TENURE (YEARS)
            </p>

            <div className="relative mt-4">
              <div className="h-1 rounded-full bg-gray-200" />
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900" />
            </div>

            <div className="mt-3 flex justify-between text-xs font-medium text-gray-400">
              <span>5Y</span>
              <span className="text-gray-900">20 YEARS</span>
              <span>30Y</span>
            </div>
          </div>

          {/* EMI Card */}
          <div className="rounded-lg bg-gradient-to-br from-gray-900 to-slate-800 px-6 py-8 text-center text-white">
            <p className="text-xs font-semibold tracking-widest text-gray-300">
              ESTIMATED MONTHLY PAYMENT
            </p>
            <p className="mt-3 text-3xl font-bold">
              ₹1,98,450
            </p>
            <p className="mt-2 text-xs tracking-wider text-gray-400">
              CALCULATED WITH 15% DOWNPAYMENT
            </p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="px-6 pb-6 mt-10">
          <button className="w-full rounded-md bg-gradient-to-r from-gray-900 to-slate-800 py-4 text-xs font-semibold tracking-widest text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-800">
            CONSULT HOME LOAN EXPERT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialAdvisoryModal;
