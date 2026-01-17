import React, { useState } from "react";

import AccountSettings from "./Setting/AccountSettings";
import Preferences from "./Setting/Preferences";

const TABS = [
    { key: "account", label: "MY PROFILE" },
    { key: "preferences", label: "PREFERENCES" },
];

const Settings = () => {
    const [activeTab, setActiveTab] = useState("account");

    return (
        <div className="min-h-screen bg-[#FFFFFF]" style={{ fontFamily: "Montserrat, sans-serif" }}>

            {/* Page Header */}
            <div className="max-w-5xl mx-auto pt-12 pb-8">
                <p className="text-green-800 text-xs tracking-[0.3em] uppercase mb-4">
                    IDENTITY REGISTRY
                </p>
                <h3 className="text-4xl  text-gray-900 mb-4">
                    Account Settings
                </h3>
                <p className="text-xs tracking-widest uppercase text-gray-400 w-2xl">
                    Manage your professional identity and platform preferences within the Urban Shelter Registry.
                </p>
            </div>

            {/* Tabs */}
            <div className="max-w-5xl mx-auto px-2 mt-12 border-b border-gray-200">
                <div className="flex gap-12">
                    {TABS.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className="pb-3 relative"
                        >
                            <span
                                className={`text-xs tracking-[0.2em] uppercase ${
                                    activeTab === tab.key
                                        ? "text-gray-900 font-semibold"
                                        : "text-gray-400"
                                }`}
                            >
                                {tab.label}
                            </span>
                            {activeTab === tab.key && (
                                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-green-600" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-5xl mx-auto  mt-10">
                {activeTab === "account" && <AccountSettings />}
                {activeTab === "preferences" && <Preferences />}
            </div>
        </div>
    );
};

export default Settings;
