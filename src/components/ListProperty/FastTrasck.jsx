import React, { useState } from "react";
import Foundation from "./Foundation";
import Essence from "./Essence";

const FastTrasck = () => {
    const [activeTab, setActiveTab] = useState("foundation");

    return (
        <div className="min-h-screen bg-white">

            {/* STEP INDICATOR — LIVES HERE */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center justify-between mb-5">

                    <button
                        onClick={() => setActiveTab("foundation")}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className={`w-2 h-2 rounded-full  ${activeTab === "foundation" ? "bg-green-600" : "bg-gray-300"}`} />
                        <span className={`text-xs tracking-widest uppercase ${activeTab === "foundation" ? "text-gray-900" : "text-gray-400"}`}>
                            Foundation
                        </span>
                    </button>

                    <button
                        onClick={() => setActiveTab("essence")}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className={`w-2 h-2 rounded-full ${activeTab === "essence" ? "bg-green-600" : "bg-gray-300"}`} />
                        <span className={`text-xs tracking-widest uppercase ${activeTab === "essence" ? "text-gray-900" : "text-gray-400"}`}>
                            Essence
                        </span>
                    </button>

                </div>

                <div className="w-full h-px bg-green-600 " />

                <div className="flex justify-end text-xs text-green-800 mt-1">
                    Auto-save Active
                </div>
            </div>

            {/* STEP CONTENT */}
            {activeTab === "foundation" && <Foundation />}
            {activeTab === "essence" && <Essence />}

            <div className="sticky bottom-0 z-50 bg-white border-t border-gray-200">
                <div className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">

                    <button className="text-xs tracking-widest uppercase text-gray-400 flex items-center gap-2 hover:text-gray-700 transition">
                        ← Change Method
                    </button>

                    <div className="flex items-center gap-4">
                        <button className="border px-8 py-4 text-xs tracking-widest uppercase text-gray-400 hover:text-gray-700 transition">
                            Preview
                        </button>

                        <button className="border px-8 py-4 text-xs tracking-widest uppercase text-gray-400 hover:text-gray-700 transition">
                            Save Draft
                        </button>

                        <button className="bg-gray-900 text-white px-10 py-4 text-xs tracking-widest uppercase flex items-center gap-3 hover:bg-black transition">
                            The Next Step →
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FastTrasck;
