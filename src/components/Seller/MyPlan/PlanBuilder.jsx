import React, { useState } from "react";
import PaymentModal from "./PaymentModal";

const PlanBuilder = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: "Montserrat, sans-serif" }}
        >
            <div className="max-w-7xl mx-auto px-8 py-8 ">

                {/* ================= HEADER ================= */}
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <h1 className="text-2xl  mb-4">
                            Build Your Custom Plan
                        </h1>
                        <p className="text-xs tracking-widest uppercase text-gray-400">
                            Scale your property portfolio with cinematic reach.
                        </p>
                    </div>

                    <div className="border border-green-600 text-green-600 px-6 py-2 text-xs tracking-widest uppercase bg-green-100">
                        10% Exclusive Savings
                    </div>
                </div>

                {/* ================= MAIN GRID ================= */}
                <div className="grid grid-cols-12 gap-16">

                    {/* ================= LEFT PANEL ================= */}
                    <div className="col-span-7 space-y-10">

                        {/* ===== Commitment Slider ===== */}
                        <div className="grid grid-cols-2 gap-16">

                            {/* ===== Commitment ===== */}
                            <div>
                                {/* ONE HORIZONTAL LINE */}
                                <div className="flex items-center gap-4 mb-6">
                                    <p className="text-xs tracking-widest uppercase text-gray-400">
                                        Commitment
                                    </p>

                                    <span className="text-3xl">6</span>

                                    <span className="text-xs tracking-widest uppercase text-gray-400">
                                        Months
                                    </span>
                                </div>

                                {/* Slider */}
                                <div className="h-[2px] bg-gray-200 relative">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-600 rounded-full" />
                                </div>

                                {/* Labels */}
                                <div className="flex justify-between mt-4 text-xs tracking-widest uppercase text-gray-300">
                                    <span>StarterLegacy (12M+)</span>
                                    <span>Elite (24M)</span>
                                </div>
                            </div>

                            {/* ===== Portfolio Size ===== */}
                            <div>
                                {/* ONE HORIZONTAL LINE */}
                                <div className="flex items-center gap-6 mb-6">
                                    {/* Left label */}
                                    <p className="text-xs tracking-widest uppercase text-gray-400">
                                        Portfolio Size
                                    </p>

                                    {/* Right value (VERTICAL) */}
                                    <div className="flex flex-col leading-none">
                                        <span className="text-3xl ">10</span>
                                        <span className="text-xs tracking-widest uppercase text-gray-400">
                                            Listings
                                        </span>
                                    </div>
                                </div>

                                {/* Slider */}
                                <div className="h-[2px] bg-gray-200 relative">
                                    <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-600 rounded-full" />
                                </div>

                                {/* Labels */}
                                <div className="flex justify-between mt-4 text-xs tracking-widest uppercase text-gray-300">
                                    <span>SoloAgency (30+)</span>
                                    <span>Enterprise (70)</span>
                                </div>
                            </div>
                        </div>


                        {/* ===== Features Card ===== */}
                        <div className="bg-gradient-to-br from-[#0b1f2a] to-[#07131b] p-10 text-white shadow-2xl">
                            <p className="text-xs tracking-widest uppercase text-green-500 mb-8">
                                Guaranteed Performance Features
                            </p>

                            <ol className="grid grid-cols-2 gap-y-6 gap-x-6 text-sm">
                                <li>• Cinematic 4K Home Videos</li>
                                <li>• Global Video CDN</li>
                                <li>• Priority Search Placement</li>
                                <li>• Investor Analytics</li>
                                <li>• Dedicated Relationship Manager</li>
                            </ol>
                        </div>

                        {/* ===== Membership Code ===== */}
                        <div className="flex flex-wrap items-start gap-6">
                            {/* Label */}
                            <p className="w-full text-xs tracking-widest uppercase text-gray-400">
                                Membership Code
                            </p>

                            {/* Input + Button */}
                            <div className="flex items-center gap-6">
                                <input
                                    placeholder="Enter Code"
                                    className="border-b border-gray-300 focus:outline-none py-2 w-30 text-sm"
                                />
                                <button className="text-sm tracking-widest uppercase text-green-600">
                                    Apply
                                </button>

                                {/* Description */}
                                <p className="w-full text-xs text-gray-400">
                                    Use an invite code for an additional 5% loyalty reward.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* ================= RIGHT PANEL ================= */}
                    <div className="col-span-5">

                        {/* ===== Price Summary ===== */}
                        <div className=" mb-8">
                            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 px-2 py-4 bg-neutral-50">
                                Registry Summary
                            </p>

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Platform Access</span>
                                    <span>₹2,500</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                        10 Listings (Premium)
                                    </span>
                                    <span>₹8,500</span>
                                </div>
                                <div className="flex justify-between text-green-600">
                                    <span>6 Mo Partnership Savings</span>
                                    <span>-₹6,600</span>
                                </div>
                            </div>
                        </div>

                        {/* ===== Total Investment ===== */}
                        <div className="bg-gradient-to-br from-[#0b1f2a] to-[#07131b] p-6 text-white mb-8 border-t-4 border-green-600 shadow-2xl
">

                            {/* Title + dot in one line */}
                            <div className="flex items-center gap-2 mb-4 justify-between">
                                <p className="text-xs tracking-widest uppercase text-gray-400">
                                    Total Investment
                                </p>
                                <span className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>

                            {/* Amount */}
                            <div className="flex items-center gap-3">
                                <h3 className="text-5xl f">₹59,400</h3>
                            </div>

                            {/* Subtext */}
                            <p className="text-xs text-gray-400 mt-4 tracking-[0.3em]">
                                Encrypted Transaction Registry
                            </p>
                        </div>


                        {/* ===== Trust Badges ===== */}
                        <div className="flex justify-between text-center text-sm text-gray-400 mb-10">
                            <div className="flex flex-col items-center">
                                <span className="text-lg">🔒</span>
                                <span className="mt-1">Secure</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-lg">↩</span>
                                <span className="mt-1">7D Refund</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-lg">🕓</span>
                                <span className="mt-1">24/7 Concierge</span>
                            </div>
                        </div>


                        {/* ===== Privacy + CTA ===== */}
                        <div className="space-y-6">
                            <label className="flex items-center gap-3 text-sm">
                                <input type="checkbox" />
                                <span className="flex flex-col">
                                    Accept Urban Shelter{" "}
                                    <span className="underline text-xl font-semibold">Privacy Charter</span>
                                </span>
                            </label>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-green-600 text-white py-4 px-4 tracking-[0.2em] uppercase text-xs hover:bg-black transition"
                            >
                                Process Secure Payment
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {isModalOpen && <PaymentModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default PlanBuilder;
