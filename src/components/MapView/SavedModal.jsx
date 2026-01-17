import React, { useRef } from "react";
import { FiX, FiBookmark } from "react-icons/fi";

const SavedModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // If the click is outside the modal content, close the modal
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      style={{ fontFamily: "Montserrat, sans-serif" }}
      onClick={handleOverlayClick} // <-- listen for overlay clicks
    >
      <div
        ref={modalRef}
        className="bg-white w-[420px] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 ">
          <h2 className="text-sm tracking-widest text-gray-400 uppercase">
            Save Collection
          </h2>
          <button onClick={onClose}>
            <FiX size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <label className="block text-[10px] tracking-widest text-gray-400 uppercase mb-2">
            Collection Name
          </label>
          <input
            type="text"
            placeholder="e.g. Waterfront Enclaves"
            className="w-full border-b border-black pb-2 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 gap-4">
          <button
            onClick={onClose}
            className="w-1/2 border border-gray-200 py-2 text-[10px] tracking-widest uppercase text-gray-400"
          >
            Cancel
          </button>
          <button className="w-1/2 bg-gray-100 py-2 text-[10px] tracking-widest uppercase text-gray-300 cursor-not-allowed">
            Commit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedModal;
