import React, { useState } from "react";
import Stays from "./MyCollection/Stays";
import Ownership from "./MyCollection/Ownership";
import TheFullList from "./MyCollection/TheFullList";

const TABS = [
    { key: "full", label: "THE FULL LIST" },
    { key: "ownership", label: "OWNERSHIP" },
    { key: "stays", label: "STAYS" },
];

const MyCollection = () => {
    const [activeTab, setActiveTab] = useState("full");

    return (
        <div className="min-h-screen bg-white">

            {/* Page Header */}
            <div className="max-w-7xl mx-auto  pt-10 pb-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 mb-6">
                    <span className="text-lg leading-none">←</span>
                    <span>Home</span>
                    <span className="opacity-50">/</span>
                    <span className="text-green-700">The Vault</span>
                </div>

                {/* Title + Action */}
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-5xl font-serif text-gray-900 mb-3">
                            My Collection
                        </h1>
                        <p className="text-sm tracking-widest uppercase text-gray-500">
                            A private registry of your luxury real estate journey
                        </p>
                    </div>

                    <button className="flex items-center gap-2 border border-gray-900 px-6 py-3 text-xs tracking-widest uppercase hover:bg-gray-900 hover:text-white transition">
                        Anchor Preference
                    </button>
                </div>
            </div>


            {/* Tabs Header */}
            <div className="max-w-7xl mx-auto  pt-12">
                <div className="flex items-end justify-between border-b border-gray-200">
                    {/* Tabs */}
                    <div className="flex gap-14">
                        {TABS.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className="relative pb-4"
                            >
                                <span
                                    className={`text-xs tracking-widest uppercase transition-colors ${activeTab === tab.key
                                            ? "text-green-700 font-semibold"
                                            : "text-gray-400"
                                        }`}
                                >
                                    {tab.label}
                                </span>

                                {activeTab === tab.key && (
                                    <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-green-700" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Default Indicator */}
                    <div className="pb-4 text-xs tracking-widest uppercase text-green-700">
                        ● Default: Full List
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-10">
                {activeTab === "full" && <TheFullList />}
                {activeTab === "ownership" && <Ownership />}
                {activeTab === "stays" && <Stays />}
            </div>
        </div>
    );
};

export default MyCollection;
