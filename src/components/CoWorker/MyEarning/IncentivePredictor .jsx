import React, { useState } from "react";

const IncentivePredictor = () => {
    const [sales, setSales] = useState(250000); 

    // Slider ranges in INR
    const ranges = [
        { value: 0, label: "₹0" },
        { value: 300000, label: "₹3L (Gold)" },
        { value: 450000, label: "₹4.5L (Platinum)" },
        { value: 600000, label: "₹6L+ (Black)" },
    ];

    const tiers = [
        { label: "₹1.5L", value: 150000 },
        { label: "₹3.0L", value: 300000 },
        { label: "₹4.5L", value: 450000 },
        { label: "₹6.0L", value: 600000 },
    ];

    const currentRate = 20; // %
    const projectedCommission = Math.round((sales * currentRate) / 100);

    return (
        <section className="bg-white border border-neutral-200 shadow-sm px-4 md:px-8 lg:px-14 py-16 max-w-7xl mx-auto">
            {/* Section Header */}


            <div className="flex gap-10">
                {/* Left: Slider & Sales */}
                <div className="flex-1">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-2">
                                Estimated Quarterly Sales
                            </p>
                            <h3 className="text-4xl  text-black">
                                ₹{(sales).toLocaleString()} {/* display in thousands */}
                            </h3>
                        </div>
                        <div className="text-right">
                            <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-2">
                                Current Rate
                            </p>
                            <h2 className="text-xl font-bold text-black">{currentRate}%</h2>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="mb-2 relative">
                        <input
                            type="range"
                            min={0}
                            max={600000}
                            step={10000}
                            value={sales}
                            onChange={(e) => setSales(Number(e.target.value))}
                            className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                        />
                        <div
                            className="absolute top-0 left-0  bg-black rounded-lg"
                            style={{ width: `${(sales / 600000) * 100}%` }}
                        ></div>
                    </div>

                    {/* Slider Labels */}
                    <div className="flex justify-between text-[11px] text-neutral-400 mb-6">
                        {ranges.map((r) => (
                            <span key={r.label}>{r.label}</span>
                        ))}
                    </div>

                    {/* Tier Buttons */}
                    <div className="flex gap-4">
                        {tiers.map((tier) => (
                            <button
                                key={tier.label}
                                onClick={() => setSales(tier.value)}
                                className="flex-1 border border-neutral-200 py-2 text-[11px] text-neutral-500 hover:bg-neutral-100"
                            >
                                {tier.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Projected Commission */}
                <div className="w-72 bg-neutral-50 p-6 flex flex-col justify-between">
                    <div>
                        <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-2">
                            Projected Commission
                        </p>
                        <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-2">
                            Quarterly Payout
                        </p>
                        <h3 className="text-5xl  text-black mb-4">
                            ₹{projectedCommission.toLocaleString()}
                        </h3>
                        <hr className="border-t border-neutral-200 mb-4" />
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
                            <p className="text-[11px] text-neutral-500">
                                Tier: <span className="font-semibold text-black">Gold</span>
                            </p>
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-1">
                            You are ₹{(600000 - sales).toLocaleString()} away from Black Tier
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IncentivePredictor;
