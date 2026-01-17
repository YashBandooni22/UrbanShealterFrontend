import React from "react";
import { FiClock } from "react-icons/fi";

const transactions = [
    {
        id: "TXN-992",
        date: "2024-12-28",
        amount: "₹15,000",
        destination: "UPI: urban.shelter@okaxis",
    },
    {
        id: "TXN-991",
        date: "2024-12-15",
        amount: "₹8,500",
        destination: "Bank Transfer: *****421",
    },
    {
        id: "TXN-990",
        date: "2024-11-30",
        amount: "₹12,000",
        destination: "UPI: urban.shelter@okaxis",
    },
];

const WithdrawalsHero = () => {
    return (
        <section className="w-full bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-6 space-y-6 ">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl  text-black">
                        Withdrawals
                    </h3>
                    <button className="text-xs text-neutral-500 hover:text-neutral-900">
                        View All
                    </button>
                </div>

                {/* TRANSACTION CARDS */}
                {transactions.map((txn) => (
                    <div
                        key={txn.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm "
                    >
                        {/* Top Row */}
                        <div className="flex items-center justify-between px-6 py-8">
                            <div>
                                <p className="text-sm font-semibold text-gray-500">
                                    {txn.id}
                                </p>
                                <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                                    <FiClock className="text-gray-400" />
                                    <span>{txn.date}</span>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-900">
                                    {txn.amount}
                                </p>
                                <p className="mt-1 text-xs font-bold tracking-widest text-green-600">
                                    DISBURSED
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100" />

                        {/* Destination */}
                        <div className="px-6 py-4">
                            <p className="text-xs tracking-widest text-gray-400 mb-1">
                                DESTINATION
                            </p>
                            <p className="text-sm text-gray-700">
                                {txn.destination}
                            </p>
                        </div>
                    </div>
                ))}

                {/* TOTAL WITHDRAWN HERO */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0B1220] to-[#111827] px-4 py-10">
                    <p className="text-xs tracking-widest text-gray-400 mb-2">
                        TOTAL WITHDRAWN
                    </p>
                    <h3 className="text-4xl  text-white">
                        ₹35,500
                    </h3>

                    {/* Decorative Graph Lines */}
                    <div className="absolute right-6 bottom-6 opacity-10">
                        <svg
                            width="140"
                            height="80"
                            viewBox="0 0 140 80"
                            fill="none"
                        >
                            <path
                                d="M0 60 L30 40 L55 50 L85 20 L120 35"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WithdrawalsHero;
