import React, { useState } from "react";
import { FiPhone, FiMessageCircle } from "react-icons/fi";
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";
import PriorityConciergeModal from "../../Modal/PriorityConciergeModal"; 

const AgentProfileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <aside className="border border-neutral-200 px-10 py-4 flex flex-col justify-between shadow-xl mt-10">
        {/* PROFILE */}
        <div>
          <div className="flex items-center gap-6 mb-10">
            <img
              src="https://via.placeholder.com/96"
              alt="Priya Malhotra, Senior Portfolio Advisor"
              className="w-24 h-24 object-cover grayscale"
            />
            <div>
              <h3 className="text-2xl text-neutral-900">Priya Malhotra</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs tracking-widest uppercase text-neutral-500">
                  Senior Portfolio Advisor
                </span>
              </div>
            </div>
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-3 gap-5 mb-16">
            {[
              { label: "Portfolio", value: "24" },
              { label: "Total Views", value: "4,280" },
              { label: "Calls", value: "156" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs tracking-widest uppercase text-black mb-2">
                  {item.label}
                </p>
                <p className="text-xl font-semibold text-neutral-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <button className="flex items-center justify-center gap-3 py-4 text-sm font-medium uppercase bg-gray-100 hover:bg-black hover:text-white">
              <FiPhone />
              Voice Call
            </button>
            <button className="flex items-center justify-center gap-3 py-4 text-sm font-medium uppercase bg-gray-100 hover:bg-green-500 hover:text-white">
              <FiMessageCircle />
              WhatsApp
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6 text-xl text-neutral-600 mb-10">
            <a href="#" className="hover:text-pink-500"><FiInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FiTwitter /></a>
            <a href="#" className="hover:text-blue-700"><FiLinkedin /></a>
            <a href="#" className="hover:text-blue-800"><FiFacebook /></a>
          </div>
        </div>

        {/* REQUEST PORTFOLIO BUTTON */}
        <button
          onClick={openModal}
          className="w-full py-5 bg-slate-900 text-white text-xs uppercase shadow-2xl tracking-[0.3em] font-bold mb-8"
        >
          Request Portfolio →
        </button>
        <p className="text-sm text-center text-gray-800">
          Confidential consultation guaranteed
        </p>
      </aside>

      {/* MODAL */}
      {isModalOpen && <PriorityConciergeModal onClose={closeModal} />}
    </>
  );
};

export default AgentProfileCard;
