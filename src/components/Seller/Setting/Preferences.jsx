import React, { useState } from "react";
import { FiBell, FiShield, FiCreditCard, FiGlobe, FiMoon } from "react-icons/fi";

const Preferences = () => {
    const [state, setState] = useState({
        email: true,
        sms: false,
        lead: true,
        performance: false,
        twoFactor: true,
        autoRenew: false,
        darkMode: false,
        language: "en",

    });

    const toggle = (key) => {
        setState((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const Toggle = ({ enabled, onClick }) => (
        <button
            onClick={onClick}
            className={`flex h-6 w-6 items-center justify-center rounded-sm border transition
        ${enabled
                    ? "border-green-600 bg-green-600"
                    : "border-gray-300 bg-white"
                }`}
        >
            {enabled && <span className="h-2 w-2 rounded-full bg-white" />}
        </button>
    );

    const Card = ({ title, description, right, highlight }) => (
        <div
            className={`flex items-center justify-between rounded-lg border p-6
        ${highlight
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200 bg-white"
                }`}
        >
            <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-800">
                    {title}
                </p>
                <p className="mt-1 text-sm text-gray-400">{description}</p>
            </div>
            {right}
        </div>
    );

    const Switch = ({ enabled, onClick }) => (
        <button
            onClick={onClick}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition
      ${enabled ? "bg-green-600" : "bg-gray-200"}
    `}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition
        ${enabled ? "translate-x-6" : "translate-x-1"}
      `}
            />
        </button>
    );

    const LanguageSelect = ({ value, onChange }) => (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-xs uppercase tracking-widest text-gray-700 focus:border-gray-900 focus:outline-none"
        >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
        </select>
    );


    return (
        <div className="min-h-screen ">
            <div className="mx-auto max-w-5xl space-y-20 rounded-xl bg-white ">
                {/* ================= ALERT PREFERENCES ================= */}
                <section className="shadow-lg p-6">
                    <div className="flex items-center gap-4 ">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
                            <FiBell />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
                                Communications
                            </p>
                            <h1 className="font-serif text-3xl">Alert Preferences</h1>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Card
                            title="Email Notifications"
                            description="Updates delivered to your inbox"
                            right={<Toggle enabled={state.email} onClick={() => toggle("email")} />}
                        />
                        <Card
                            title="SMS Alerts"
                            description="Critical alerts via mobile message"
                            right={<Toggle enabled={state.sms} onClick={() => toggle("sms")} />}
                        />
                        <Card
                            title="Lead Notifications"
                            description="Real-time property inquiry alerts"
                            right={<Toggle enabled={state.lead} onClick={() => toggle("lead")} />}
                        />
                        <Card
                            title="Performance Alerts"
                            description="Updates on video view milestones"
                            right={
                                <Toggle
                                    enabled={state.performance}
                                    onClick={() => toggle("performance")}
                                />
                            }
                        />
                    </div>
                </section>

                {/* ================= ACCOUNT SECURITY ================= */}
                <section className="shadow-lg p-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
                            <FiShield />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
                                Protection
                            </p>
                            <h2 className="font-serif text-3xl">Account Security</h2>
                        </div>
                    </div>

                    <div className="mt-10 space-y-6">
                        <Card
                            title="Two-Factor Authentication"
                            description="Enhanced registry protection enabled"
                            highlight
                            right={
                                <Toggle
                                    enabled={state.twoFactor}
                                    onClick={() => toggle("twoFactor")}
                                />
                            }
                        />

                        <Card
                            title="Security Keyphrase"
                            description="Update your platform access credentials"
                            right={
                                <button className="rounded-md bg-gray-900 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-gray-800">
                                    Update Password
                                </button>
                            }
                        />
                    </div>
                </section>

                {/* ================= PLAN & BILLING ================= */}
                <section className="shadow-lg p-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
                            <FiCreditCard />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
                                Registry Scale
                            </p>
                            <h2 className="font-serif text-3xl">Plan & Billing</h2>
                        </div>
                    </div>

                    <div className="mt-10 space-y-6">
                        {/* Active Plan */}
                        <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 p-8 text-white">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-green-400">
                                    Active Registry Tier
                                </p>
                                <h3 className="mt-2 font-serif text-2xl">
                                    Bespoke Portfolio Plan
                                </h3>
                                <p className="mt-1 text-sm text-gray-300">
                                    20 Residencies · 6 Month Commitment
                                </p>
                            </div>
                            <button className="bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-gray-900">
                                Manage Plan
                            </button>
                        </div>

                        {/* Auto Renew */}
                        <Card
                            title="Auto-Renew Registry"
                            description="Seamless portfolio scaling at term end"
                            right={
                                <Toggle
                                    enabled={state.autoRenew}
                                    onClick={() => toggle("autoRenew")}
                                />
                            }
                        />
                    </div>
                </section>

                {/* ================= PLATFORM SETTINGS ================= */}
                <section className="shadow-lg px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
                            <FiGlobe />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
                                Interface
                            </p>
                            <h2 className="font-serif text-3xl">Platform Settings</h2>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Language */}
                        <Card
                            title="Registry Language"
                            description="Select your interface language"
                            right={
                                <LanguageSelect
                                    value={state.language}
                                    onChange={(lang) =>
                                        setState((prev) => ({ ...prev, language: lang }))
                                    }
                                />
                            }
                        />

                        {/* Display Mode */}
                        <Card
                            title="Display Mode"
                            description={state.darkMode ? "Dusk Mode" : "Dawn Mode"}
                            right={
                                <Switch
                                    enabled={state.darkMode}
                                    onClick={() => toggle("darkMode")}
                                />
                            }
                        />
                    </div>
                </section>

                {/* ================= FOOTER ACTIONS ================= */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pb-8 sm:flex-row">

                    <div className="flex gap-3 w-full">
                        <button className="w-[75%] rounded-md bg-gray-900 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-gray-800">
                            Apply All Preferences
                        </button>

                        <button className="rounded-md border border-gray-300 px-6 py-3 text-xs font-font-semibold uppercase tracking-[0.3em] text-gray-700 transition hover:bg-gray-100">
                            Reset Registry
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Preferences;
