import React, { useEffect } from "react";

/* ===================== DATA ===================== */
const engagementLedger = [
    {
        channel: "Call",
        identity: "Vikram Singh",
        contact: "+91 9456147366",
        date: "15 Jan 2026",
        timestamp: "7:57 PM",
        engagementBrief: "Duration: 3 min 55 sec",
        status: "Answered",
    },
    {
        channel: "Call",
        identity: "Ananya Mehta",
        contact: "+91 9245390957",
        date: "15 Jan 2026",
        timestamp: "9:40 AM",
        engagementBrief: "Duration: 9 min 35 sec",
        status: "Answered",
    },
    {
        channel: "WhatsApp",
        identity: "Manish Jain",
        contact: "+91 6667227463",
        date: "15 Jan 2026",
        timestamp: "6:51 PM",
        engagementBrief: "Interested in viewing",
        status: "Replied",
    },
    {
        channel: "Call",
        identity: "Neha Gupta",
        contact: "+91 6355122792",
        date: "14 Jan 2026",
        timestamp: "11:57 PM",
        engagementBrief: "Duration: 1 min 8 sec",
        status: "Answered",
    },
    {
        channel: "Call",
        identity: "Vikram Singh",
        contact: "+91 3346125234",
        date: "14 Jan 2026",
        timestamp: "4:27 AM",
        engagementBrief: "Duration: 8 min 29 sec",
        status: "Missed",
    },
    {
        channel: "WhatsApp",
        identity: "Meera Shah",
        contact: "+91 4016746456",
        date: "14 Jan 2026",
        timestamp: "7:44 AM",
        engagementBrief: "Price negotiable?",
        status: "Pending",
    },
];

/* ===================== STYLE MAPS ===================== */
const STATUS_STYLES = {
    Answered: "bg-black text-white",
    Missed: "bg-gray-200 text-gray-700",
    Replied: "bg-black text-white",
    Pending: "bg-gray-100 text-gray-600",
};

const CHANNEL_STYLES = {
    Call: "bg-black text-white",
    WhatsApp: "bg-green-600 text-white",
};

/* ===================== COMPONENT ===================== */
const EngagementLedgerModal = ({ onClose }) => {
    /* ESC key handling */
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            onClick={onClose}
        >
            <div
                className="bg-white w-[95%] max-w-7xl h-[80vh] rounded-lg shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ================= HEADER ================= */}
                <div className="flex items-center justify-between px-10 py-6 ">
                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-green-600 mb-2">
                            Combined Intelligence
                        </p>
                        <h3 className="text-3xl  font-medium">
                            Unified Engagement Ledger
                        </h3>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                            Luxury Penthouse, Juhu
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-500 hover:bg-gray-100"
                    >
                        ✕
                    </button>
                </div>

                {/* ================= METRICS ================= */}
                <div className="grid grid-cols-3 py-6 px-8  bg-gray-50 ">
                    {/* Aggregate Momentum Index */}
                    <div className="flex items-center  gap-6">
                        <p className="text-xs tracking-[0.15em] text-gray-400 uppercase whitespace-nowrap">
                            Aggregate Momentum Index
                        </p>
                        <h3 className="text-2xl  text-gray-900">109</h3>
                    </div>

                    {/* Voice */}
                    <div className="flex items-center gap-6 border-gray-200">
                        <p className="text-xs tracking-[0.15em] text-gray-400 uppercase whitespace-nowrap">
                            Voice
                        </p>
                        <h3 className="text-2xl  text-gray-900">67</h3>
                    </div>

                    {/* Pulse */}
                    <div className="flex items-center gap-6 ">
                        <p className="text-xs tracking-[0.15em] text-gray-400 uppercase whitespace-nowrap">
                            Pulse
                        </p>
                        <h3 className="text-2xl text-gray-900">42</h3>
                    </div>
                </div>


                {/* ================= TABLE HEADER ================= */}
                <div className="grid grid-cols-[140px_220px_220px_160px_160px_1fr_140px] px-10 py-2  text-[11px] tracking-[0.35em] uppercase text-gray-400 hover:bg-neutral-50">
                    <span>Channel</span>
                    <span>Identity</span>
                    <span>Contact</span>
                    <span>Date</span>
                    <span>Timestamp</span>
                    <span>Engagement Brief</span>
                    <span className="text-right">Status</span>
                </div>

                {/* ================= ROWS ================= */}
                <div className="max-h-[65vh] overflow-y-auto ">
                    {engagementLedger.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[140px_220px_220px_160px_160px_1fr_140px] px-10 py-8  items-center hover:bg-[#FDFDFD]"
                        >
                            <span
                                className={`px-4 py-1 text-xs uppercase tracking-widest w-fit ${CHANNEL_STYLES[item.channel]}`}
                            >
                                {item.channel}
                            </span>

                            <span className="font-medium text-gray-900">
                                {item.identity}
                            </span>

                            <span className="text-gray-500 text-sm">
                                {item.contact}
                            </span>

                            <span className="text-gray-400 text-sm">
                                {item.date}
                            </span>

                            <span className="text-gray-400 text-sm">
                                {item.timestamp}
                            </span>

                            <span className="text-gray-500 text-sm">
                                {item.engagementBrief}
                            </span>

                            <span
                                className={`ml-auto px-4 py-1 text-xs uppercase tracking-widest ${STATUS_STYLES[item.status]}`}
                            >
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ================= FOOTER ================= */}
                <div className="px-10 py-6 border-t text-xs text-gray-400 tracking-wide">
                    Vault Integrity — All registry interactions are encrypted and verified
                    via platform intelligence protocols.
                </div>
            </div>
        </div>
    );
};

export default EngagementLedgerModal;
