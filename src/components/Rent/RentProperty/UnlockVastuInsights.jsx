import React, { useState } from "react";
import { FiStar } from "react-icons/fi";
import PriorityConciergeModal from "../Modal/PriorityConciergeModal";

const UnlockVastuInsights = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full  overflow-hidden">
        {/* ================= BACKGROUND IMAGE ================= */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-md scale-110"
          style={{
            backgroundImage:
              "url(data:image/png;base64,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)",
          }}
        />

        {/* ================= OVERLAY ================= */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

        {/* ================= CARD ================= */}
        <div className="relative z-10 max-w-2xl mx-auto px-16 py-14 text-center border-l-4 border-r-4 border-black bg-white shadow-2xl">
          
          {/* ICON */}
          <div className="flex justify-center mb-6">
            <FiStar className="w-8 h-8 text-slate-900" />
          </div>

          {/* HEADING */}
          <h3 className="text-[40px] leading-[1.15] font-serif font-medium text-slate-900 mb-6">
            Unlock Vastu Insights
          </h3>

          {/* DESCRIPTION */}
          <p className="text-[16px] leading-[1.8] text-slate-600 mb-10 max-w-md mx-auto">
            Experience a detailed spatial analysis with our certified Vastu
            experts. Ensure your new home aligns perfectly with universal
            prosperity.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-2 bg-slate-900 text-white text-[10px] tracking-[0.3em] uppercase font-semibold shadow-lg hover:opacity-90 transition"
            >
              Schedule <br /> Consultation
            </button>

            <button
              className="px-12 py-2 border border-slate-300 text-slate-900 text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-slate-50 transition"
            >
              Download <br /> Report
            </button>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <PriorityConciergeModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default UnlockVastuInsights;
