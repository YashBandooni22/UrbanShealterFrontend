import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const PriorityConciergeModal = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [preferredWindow, setPreferredWindow] = useState("Immediate Assistance");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, contact, preferredWindow });
  };

  return (
    // Overlay with blur and click-to-close
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose} // click outside closes
    >
      {/* Modal Container */}
      <div
        className="bg-white h-[350px] w-[500px] max-w-full flex rounded-lg overflow-hidden shadow-xl border-2 border-white relative"
        onClick={(e) => e.stopPropagation()} // prevent modal click from closing
      >
        {/* Left Column */}
        <div className="bg-[#0A142F] text-white flex flex-col justify-between p-8 w-1/2">
          <div>
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2l1.176 3.618L17 6.382l-2.618 1.618L15 12l-3-1.382L9 12l.618-3L7 6.382l3.824-.764L12 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Priority Concierge</h3>
            <p className="text-xs text-gray-300">
              Our expert advisors will provide a personalized walkthrough and valuation brief within 15 minutes of your request.
            </p>
          </div>
          <div className="flex items-center text-gray-500 text-xs mt-6">
            {/* You can replace this with a shield icon if needed */}
            <span className="mr-2">🔒</span> DATA ENCRYPTED
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8 w-1/2 relative">
          {/* X Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <AiOutlineClose size={20} />
          </button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-[10px] uppercase text-gray-400 font-semibold mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="E.g. Alexander Knight"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-1 text-sm"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-gray-400 font-semibold mb-1 block">
                Connect
              </label>
              <input
                type="text"
                placeholder="+91 00000 00000"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-1 text-sm"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-gray-400 font-semibold mb-1 block">
                Preferred Window
              </label>
              <select
                value={preferredWindow}
                onChange={(e) => setPreferredWindow(e.target.value)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-1 text-sm"
              >
                <option>Immediate Assistance</option>
                <option>Next 2 Hours</option>
                <option>Evening Brief</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-[#0A142F] text-white py-3 uppercase text-[10px] font-semibold hover:opacity-90"
            >
              Secure Callback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PriorityConciergeModal;
