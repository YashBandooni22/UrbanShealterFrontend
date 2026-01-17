import React from "react";

const ProtocolCard = ({ index, title, description, status }) => {
    const isCompleted = status === "authenticated";
    const isUnderReview = status === "under_review";
    const isPending = status === "pending";

    return (
        <div className="border border-gray-200 rounded-md mb-12 overflow-hidden shadow-xl">
            <div className="flex">
                {/* LEFT PROTOCOL STRIP */}
                <div className="w-16 bg-[#F9FAFB] flex items-center justify-center">
                    <span className="block transform -rotate-90 text-xs tracking-[0.3em] text-green-800 whitespace-nowrap">
                        PROTO {index}
                    </span>
                </div>


                {/* MAIN CONTENT */}
                <div className="flex-1 px-12 py-6 w-full">
                    <div className="flex items-start justify-between">
                        <div className="w-full">
                            {/* TOP ROW: ICON + TITLE */}
                            <div className="flex items-center gap-6">
                                <div
                                    className={`w-14 h-14 flex items-center justify-center shadow-xl
          ${isCompleted && "bg-green-600 text-white"}
          ${isUnderReview && "bg-slate-900 text-white"}
          ${isPending && "bg-white border border-gray-300 text-gray-400"}
        `}
                                >
                                    {isCompleted && "✓"}
                                    {isUnderReview && "!"}
                                    {isPending && "○"}
                                </div>

                                <h3 className="font-serif text-2xl text-black">
                                    {title}
                                </h3>
                            </div>

                            {/* DESCRIPTION */}
                            <p className="mt-14 text-sm text-gray-400">
                                {description}
                            </p>
                        </div>

                        {/* STATUS BADGE */}
                        {isCompleted && (
                            <span className="mt-1 px-6 py-1.5 bg-green-600 text-white text-xs uppercase tracking-widest shadow-xl">
                                Authenticated
                            </span>
                        )}

                        {isUnderReview && (
                            <span className="w-52 mt-1 px-10 py-1.5 bg-slate-900 text-white text-xs uppercase tracking-widest shadow-xl">
                                Under Review
                            </span>
                        )}
                    </div>

                    {/* FOOTER ACTION */}
                    <div className="mt-10 flex justify-end">
                        {isCompleted && (
                            <button className="text-xs uppercase tracking-widest text-green-600 hover:underline">
                                Review Documentation →
                            </button>
                        )}

                        {isUnderReview && (
                            <button className="px-8 py-3 bg-slate-900 text-white text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-green-700">
                                Append Document Ledger
                            </button>
                        )}

                        {isPending && (
                            <button className="px-10 py-3 border border-slate-900 text-slate-900 text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition">
                                Initialize Protocol
                            </button>
                        )}
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ProtocolCard;
