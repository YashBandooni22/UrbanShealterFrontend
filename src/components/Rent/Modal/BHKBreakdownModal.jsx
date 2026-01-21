import React, { useEffect, useRef } from "react";
import {
  FiX,
  FiHome,
  FiDroplet,
  FiGrid,
  FiCoffee,
  FiBox,
} from "react-icons/fi";

const breakdownData = [
  { name: "Master Bedroom", area: "160 sq.ft", dimension: "13.5' × 12'", icon: FiHome },
  { name: "Master Bathroom", area: "50 sq.ft", dimension: "7' × 7'", icon: FiDroplet },
  { name: "Bedroom 2", area: "130 sq.ft", dimension: "12' × 11'", icon: FiHome },
  { name: "Bathroom 2", area: "40 sq.ft", dimension: "6' × 6.5'", icon: FiDroplet },
  { name: "Living Room", area: "180 sq.ft", dimension: "16' × 11.5'", icon: FiGrid },
  { name: "Dining Area", area: "100 sq.ft", dimension: "10' × 10'", icon: FiCoffee },
  { name: "Kitchen", area: "90 sq.ft", dimension: "10' × 9'", icon: FiBox },
  { name: "Balcony", area: "75 sq.ft", dimension: "12' × 6.5'", icon: FiGrid },
  { name: "Entrance Foyer", area: "35 sq.ft", dimension: "6' × 6'", icon: FiBox },
];

const BHKBreakdownModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  /* Lock scroll */
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  /* ESC close */
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onMouseDown={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[520px] bg-white rounded-lg shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <FiX size={20} />
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-100">
          <p className="text-[11px] tracking-[0.2em] text-gray-400 uppercase">
            Precision Blueprint
          </p>

          <div className="flex items-end justify-between mt-2">
            <div>
              <h2 className="text-2xl font-serif text-gray-900">
                2 BHK Breakdown
              </h2>
              <p className="mt-1 text-xs tracking-wide text-gray-400 uppercase">
                Certified Architectural Dimensions
              </p>
            </div>

            <div className="text-right">
              <p className="text-[11px] uppercase tracking-wide text-gray-400">
                Total Built-up
              </p>
              <p className="text-lg font-semibold text-gray-900">
                920 sq.ft
              </p>
            </div>
          </div>
        </div>

        {/* Table header */}
        <div className="px-8 pt-6 text-[11px] uppercase tracking-widest text-gray-400 grid grid-cols-3">
          <span>Space Allocation</span>
          <span className="text-center">Area</span>
          <span className="text-right">Dimension</span>
        </div>

        {/* Rows */}
        <div className="px-8 mt-4 max-h-[360px] overflow-y-auto">
          {breakdownData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="grid grid-cols-3 items-center py-4 border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 flex items-center justify-center bg-gray-100 rounded">
                    <Icon size={14} className="text-gray-400" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gray-900 font-medium">
                    {item.name}
                  </span>
                </div>

                <span className="text-sm text-gray-400 text-center">
                  {item.area}
                </span>

                <span className="text-sm font-semibold text-gray-900 text-right">
                  {item.dimension}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              RERA Verified
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              Vastu Compliant
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-3 text-xs tracking-widest uppercase bg-gray-900 text-white rounded hover:bg-gray-800"
          >
            Close Breakdown
          </button>
        </div>
      </div>
    </div>
  );
};

export default BHKBreakdownModal;
