import React from "react";
import { weeklyData } from "../../../assets/assest";

const WeeklyPulse = () => {
    const maxClicks = Math.max(...weeklyData.map(item => item.clicks));

    return (
        <section className="max-w-5xl  mx-auto  border border-neutral-200 bg-white p-10 ">
            {/* ===================== HEADER ===================== */}
            <div className="mb-10">
                <p className="text-[11px] tracking-widest uppercase text-neutral-400 mb-3">
                    Weekly Pulse
                </p>
                <p className="text-neutral-500 text-sm">
                    See how busy your links were this week.
                </p>
            </div>

            {/* ===================== ROWS ===================== */}
            <div className="space-y-8">
                {weeklyData.map(({ day, clicks, joined }) => {
                    const width = (clicks / maxClicks) * 100;

                    return (
                        <div
                            key={day}
                            className="grid grid-cols-[60px_1fr_100px] items-center gap-6"
                        >
                            {/* Day */}
                            <span className="text-[11px] tracking-widest uppercase text-neutral-400">
                                {day}
                            </span>

                            {/* Bar */}
                            <div className="relative h-10 bg-neutral-100 overflow-hidden">
                                <div
                                    className="
  h-full
  bg-gradient-to-r from-neutral-900 to-neutral-800
  hover:from-green-600 hover:to-green-700
  flex items-center justify-end pr-4
  transition-all duration-300 delay-100
"

                                    style={{ width: `${width}%` }}
                                >
                                    <span className="text-white text-xs font-medium">
                                        {clicks}
                                    </span>
                                </div>
                            </div>


                            {/* Joined */}
                            <span className="text-xs font-semibold tracking-wide text-neutral-900 text-right">
                                {joined} JOINED
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WeeklyPulse;
