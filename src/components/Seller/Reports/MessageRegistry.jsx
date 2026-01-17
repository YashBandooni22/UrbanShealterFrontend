const MessageRegistry = ({ isOpen, onClose }) => {
  const messages = [
    { identity: "Manish Jain", contact: "+91 5500956307", date: "15 Jan 2026", timestamp: "7:38 AM", transcript: "Is parking included?", status: "Replied" },
    { identity: "Manish Jain", contact: "+91 3729239554", date: "14 Jan 2026", timestamp: "2:41 AM", transcript: "Send more photos", status: "Replied" },
    { identity: "Meera Shah", contact: "+91 8192171356", date: "13 Jan 2026", timestamp: "2:57 AM", transcript: "Send more photos", status: "Replied" },
    { identity: "Manish Jain", contact: "+91 5500956307", date: "15 Jan 2026", timestamp: "7:38 AM", transcript: "Is parking included?", status: "Replied" },
    { identity: "Manish Jain", contact: "+91 3729239554", date: "14 Jan 2026", timestamp: "2:41 AM", transcript: "Send more photos", status: "Replied" },
    { identity: "Meera Shah", contact: "+91 8192171356", date: "13 Jan 2026", timestamp: "2:57 AM", transcript: "Send more photos", status: "Replied" },
  ];

  const STATUS_STYLES = {
    Replied: "bg-green-600 text-white",
    Pending: "bg-gray-200 text-gray-700",
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/100 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-5xl h-[80vh] rounded-lg shadow-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-green-600 mb-1">
              Pulse Connect
            </p>
            <h3 className="text-3xl ">Message Registry</h3>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
              Luxury Penthouse, Juhu
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </div>

        {/* Total Voice Engagements */}
        <div className="px-8 py-4 border-b border-gray-200 text-gray-400 bg-gray-100 font-normal">
          Total Voice Engagements: 45
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto">
          {/* Table Header */}
          <div className="grid grid-cols-[1.5fr_1.3fr_1fr_1fr_2fr_1fr] px-6 py-6 text-xs tracking-widest uppercase text-gray-400 bg-gray-50 sticky top-0 z-10 border-b border-gray-200">
            <span>Identity</span>
            <span>Contact</span>
            <span>Date</span>
            <span>Timestamp</span>
            <span>Transcript Preview</span>
            <span>Status</span>
          </div>

          {/* Table Rows */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className="grid grid-cols-[1.5fr_1.3fr_1fr_1fr_2fr_1fr] px-6 py-8 items-center hover:bg-gray-50 border-b border-gray-100"
            >
              <span className="font-medium text-gray-900">{msg.identity}</span>
              <span className="text-gray-500">{msg.contact}</span>
              <span className="text-gray-400">{msg.date}</span>
              <span className="text-gray-400">{msg.timestamp}</span>
              <span className="text-gray-500">{msg.transcript}</span>
              <span
                className={`px-3 py-1 text-xs uppercase tracking-widest rounded text-center ${STATUS_STYLES[msg.status]}`}
              >
                {msg.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageRegistry;
