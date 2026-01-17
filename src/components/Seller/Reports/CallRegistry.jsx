import React from "react";

const CallRegistry = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 🔹 Call data object (mock fetch source)
  const calls = [
    {
      identity: "Rohan Joshi",
      contact: "+91 1457065074",
      date: "14 Jan 2026",
      timestamp: "4:51 AM",
      tenure: "5 MIN 50 SEC",
      outcome: "ANSWERED",
    },
    {
      identity: "Arjun Nair",
      contact: "+91 9803652123",
      date: "13 Jan 2026",
      timestamp: "2:36 AM",
      tenure: "2 MIN 43 SEC",
      outcome: "MISSED",
    },
    {
      identity: "Kavya Reddy",
      contact: "+91 6971071166",
      date: "13 Jan 2026",
      timestamp: "1:07 PM",
      tenure: "1 MIN 47 SEC",
      outcome: "ANSWERED",
    },
  ];

  // 🔹 Outcome badge styles
  const OUTCOME_STYLES = {
    ANSWERED: "bg-gray-900 text-white",
    MISSED: "bg-gray-200 text-gray-600",
  };

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 bg-black/100 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="bg-white w-[90%] max-w-5xl h-[80vh] rounded-lg shadow-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-green-600 mb-1">
              Voice Intelligence
            </p>
            <h2 className="text-3xl font-medium text-gray-900">
              Call Registry
            </h2>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
              Luxury Penthouse, Juhu
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </div>

        {/* Engagement Summary */}
        <div className="px-8 py-4 border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-widest text-gray-400">
          Total Voice Engagements:{" "}
          <span className="text-gray-900">{calls.length}</span>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto">
          {/* Table Header */}
          <div className="grid grid-cols-[1.5fr_1.3fr_1fr_1fr_1.2fr_1fr] px-6 py-4 text-xs uppercase tracking-widest text-gray-400 bg-gray-50 sticky top-0 z-10 border-b border-gray-200">
            <span>Caller Identity</span>
            <span>Contact</span>
            <span>Date</span>
            <span>Timestamp</span>
            <span>Tenure</span>
            <span>Outcome</span>
          </div>

          {/* Table Rows */}
          {calls.map((call, index) => (
            <div
              key={index}
              className="grid grid-cols-[1.5fr_1.3fr_1fr_1fr_1.2fr_1fr] px-6 py-7 items-center border-b border-gray-100 hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-900">
                {call.identity}
              </span>
              <span className="text-gray-500">{call.contact}</span>
              <span className="text-gray-400">{call.date}</span>
              <span className="text-gray-400">{call.timestamp}</span>
              <span className="text-gray-500">{call.tenure}</span>

              <span
                className={`px-4 py-1 text-xs uppercase tracking-widest rounded text-center w-fit ${OUTCOME_STYLES[call.outcome]}`}
              >
                {call.outcome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallRegistry;
