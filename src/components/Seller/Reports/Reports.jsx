import React, { useState } from "react";
import { FiDownload, FiCalendar, FiFilter, FiTrendingUp } from "react-icons/fi";
import EngagementLedgerModal from "./EngagementLedgerModal ";
import MessageRegistry from "./MessageRegistry";
import CallRegistry from "./CallRegistry";


const Reports = () => {

  const [openLedger, setOpenLedger] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openCall, setOpenCall] = useState(false);



  const portfolioData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      name: "Luxury Penthouse, Juhu",
      tag: "TOP PERFORMER",
      status: "ACTIVE",
      registeredOn: "20 DEC 2024",
      pulse: "5,234",
      voice: 67,
      connect: 42,
      total: 109,
      index: "2.1%",
    },
    {
      id: 2,
      image:
        "data:image/jpeg;base64,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",
      name: "Modern Studio, Bandra",
      tag: "TOP PERFORMER",
      status: "ACTIVE",
      registeredOn: "28 DEC 2024",
      pulse: "3,421",
      voice: 45,
      connect: 31,
      total: 76,
      index: "2.2%",
    },
    {
      id: 2,
      image:
        "data:image/jpeg;base64,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",
      name: "Modern Studio, Bandra",
      tag: "TOP PERFORMER",
      status: "ACTIVE",
      registeredOn: "28 DEC 2024",
      pulse: "3,421",
      voice: 45,
      connect: 31,
      total: 76,
      index: "2.2%",
    },
    {
      id: 2,
      image:
        "data:image/jpeg;base64,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",
      name: "Modern Studio, Bandra",
      tag: "TOP PERFORMER",
      status: "ACTIVE",
      registeredOn: "28 DEC 2024",
      pulse: "3,421",
      voice: 45,
      connect: 31,
      total: 76,
      index: "2.2%",
    },
  ];



  return (
    <div className="min-h-screen bg-white px-16 py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >

      {/* ===== Header Section ===== */}
      <header className="flex items-start justify-between mb-16" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div>
          <p className="text-xs tracking-[0.3em] text-emerald-600 mb-2">
            INTELLIGENCE SUITE
          </p>
          <h3 className="text-4xl  text-neutral-900 mb-2">
            Performance Registry
          </h3>
          <p className="text-sm tracking-widest text-neutral-400">
            REAL-TIME RESIDENCY ENGAGEMENT & MOMENTUM TRACKING
          </p>
        </div>

        <button className="flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 text-xs font-semibold tracking-widest shadow-xl hover:bg-neutral-800 transition mt-4">
          <FiDownload size={16} />
          DOWNLOAD LEADS INDEX
        </button>
      </header>

      {/* ===== Control Bar ===== */}
      <section className="flex items-center justify-between border border-neutral-100 px-8 py-6 mb-10 bg-gray-50"
        style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest text-neutral-400">
              REGISTRY PERIOD:
            </span>
            <select
              className="
    text-xs tracking-widest font-medium
    px-8
    text-neutral-900
    bg-transparent
    border-none
    outline-none
    cursor-pointer
    focus:ring-0
    appearance-none
  "
            >
              <option>LAST 7 DAYS</option>
              <option>LAST 30 DAYS</option>
              <option>LAST 3 MONTHS</option>
              <option selected>LAST 6 MONTHS</option>
              <option>LAST 12 MONTHS</option>
            </select>

            <FiCalendar size={14} className="text-neutral-400" />
          </div>

          <div className="flex items-center gap-3 text-neutral-400 text-xs tracking-widest cursor-pointer hover:text-neutral-700 transition">
            <FiFilter size={14} />
            REFINE SEARCH
          </div>
        </div>

        <span className="text-xs tracking-widest text-neutral-400">
          DATA SYNCHRONIZED: TODAY, 09:42 AM
        </span>
      </section>

      {/* ===== KPI Grid ===== */}
      <section className="grid grid-cols-4 gap-5" style={{ fontFamily: "Montserrat, sans-serif" }}>

        {/* Card 1 */}
        <div className="border border-neutral-50 shadow-md p-10 hover:border hover:border-gray-300">
          <p className="text-xs tracking-widest text-neutral-400 mb-4">
            PORTFOLIO VOLUME
          </p>
          <h3 className="text-4xl  text-neutral-900 mb-3">3</h3>
          <p className="text-xs tracking-widest text-neutral-400">
            ACTIVE RESIDENCIES
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-neutral-50 shadow-md p-10 hover:border hover:border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs tracking-widest text-neutral-400">
              AUDIENCE PULSE
            </p>
            <FiTrendingUp className="text-emerald-500" size={14} />
          </div>
          <h3 className="text-4xl  text-neutral-900 mb-3">
            16,816
          </h3>
          <p className="text-xs tracking-widest text-neutral-400">
            2.2% MOMENTUM
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-neutral-50 shadow-md p-10 hover:border hover:border-gray-300">
          <p className="text-xs tracking-widest text-neutral-400 mb-4">
            INQUIRY VOLUME
          </p>
          <h3 className="text-4xl  text-neutral-900 mb-3">
            232
          </h3>
          <p className="text-xs tracking-widest text-neutral-400">
            DIRECT VOICE LEADS
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-neutral-50 shadow-md p-10 hover:border hover:border-gray-300">
          <p className="text-xs tracking-widest text-neutral-400 mb-4">
            INSTANT ENGAGEMENT
          </p>
          <h3 className="text-4xl  text-neutral-900 mb-3">
            144
          </h3>
          <p className="text-xs tracking-widest text-neutral-400">
            PULSE MESSAGE LEADS
          </p>
        </div>
      </section>


      {/* ===== Portfolio Overview ===== */}
      <section className="mt-32" style={{ fontFamily: "Montserrat, sans-serif" }}>

        {/* ===== Header ===== */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h3 className="text-3xl text-neutral-900 mb-3">
              Portfolio Overview
            </h3>
            <p className="text-xs tracking-widest text-neutral-400">
              COMPREHENSIVE ENGAGEMENT MATRIX
            </p>
          </div>

          <button className="flex items-center gap-3 border border-neutral-200 px-6 py-4 text-xs tracking-widest hover:bg-neutral-50 transition">
            <FiDownload size={14} />
            EXPORT MATRIX
          </button>
        </div>

        {/* ===== Table Container ===== */}
        <div className="border border-neutral-100 bg-white">

          {/* ===== Table Header ===== */}
          <div className="
      grid grid-cols-[4fr_1.2fr_1.4fr_1fr_0.8fr_0.8fr_0.8fr_0.5fr]
      px-6 py-6
      text-xs tracking-widest text-neutral-400
      bg-neutral-100
      border-b
    ">
            <span>RESIDENCY DETAIL</span>
            <span>STATUS</span>
            <span>REGISTERED</span>
            <span>PULSE</span>
            <span>VOICE</span>
            <span>CONNECT</span>
            <span>TOTAL</span>
            <span className="text-right">ACTION</span>
          </div>

          {/* ===== Table Rows ===== */}
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="
          grid grid-cols-[4fr_1.2fr_1.4fr_1fr_0.8fr_0.8fr_0.8fr_0.5fr]
          px-6 py-10 items-center
          border-l-2 border-transparent
          hover:bg-neutral-50 hover:border-green-600
          transition
        "
            >
              {/* Residency Detail */}
              <div className="flex items-center gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-24 object-cover rounded-sm"
                />
                <div>
                  <p className="text-lg font-semibold text-neutral-900 hover:text-green-600 transition">
                    {item.name}
                  </p>
                  <p className="text-xs tracking-widest text-neutral-400 mt-1">
                    {item.tag}
                  </p>
                </div>
              </div>

              {/* Status */}
              <span className="inline-block bg-green-600 text-white text-xs px-4 py-1 w-fit">
                {item.status}
              </span>

              {/* Registered */}
              <span className="text-sm text-neutral-600">
                {item.registeredOn}
              </span>

              {/* Pulse */}
              <span className="text-sm text-neutral-900">
                {item.pulse}
              </span>

              {/* Voice */}
              <span
                onClick={() => setOpenCall(true)}
                className="cursor-pointer text-neutral-900 hover:underline"
              >
                {item.voice}
              </span>

              {/* Connect */}
              <span
                onClick={() => setOpenMessage(true)}
                className="text-sm text-neutral-900 cursor-pointer"
              >
                {item.connect}
              </span>

              {/* Total + Index */}
              <span
                onClick={() => setOpenLedger(true)}
                className="text-sm font-semibold text-neutral-900 flex flex-col cursor-pointer select-none hover:opacity-80 transition"
              >
                {item.total}
                <span className="text-xs text-emerald-600 font-medium">
                  {item.index}
                </span>
              </span>


              {/* Action */}
              <div className="flex justify-end">
                <button className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
                  <FiDownload size={14} className="text-neutral-600" />
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ===== Portfolio Intelligence Summary ===== */}
      <section className="grid grid-cols-3 border border-neutral-100 mt-24 gap-10"
        style={{ fontFamily: "Montserrat, sans-serif" }}>

        <div className="p-5 border-r border-neutral-200 relative bg-gray-100">
          <span className="absolute left-0 top-0 h-full w-[2px] bg-emerald-500" />
          <p className="text-xs tracking-widest text-neutral-400 mb-4">
            RESIDENCY MOMENTUM
          </p>
          <h3 className="text-2xl  text-neutral-900 mb-3">
            8 / 10 LIVE
          </h3>
          <p className="text-xs tracking-widest text-emerald-600 font-medium">
            80% MARKET PRESENCE
          </p>
        </div>

        <div className="p-5 border-r border-neutral-200 bg-gray-100">
          <p className="text-xs tracking-widest text-neutral-400 mb-4">
            REGISTRY STASIS
          </p>
          <h3 className="text-2xl  text-neutral-900 mb-3">
            2 ARCHIVED
          </h3>
          <p className="text-xs tracking-widest text-neutral-400">
            REQUIRING REACTIVATION
          </p>
        </div>

        <div className="p-5 relative bg-gray-100">
          <span className="absolute left-0 top-0 h-full w-[2px] bg-neutral-900" />
          <p className="text-xs tracking-widest text-neutral-400 mb-4">
            PEAK INTELLIGENCE
          </p>
          <h3 className="text-2xl  text-neutral-900 mb-3">
            Elite Performer
          </h3>
          <p className="text-xs tracking-widest text-neutral-400">
            88 AVG ENGAGEMENT
          </p>
        </div>

      </section>

      {/* ===== Intelligence Brief ===== */}
      <section className="mt-24 bg-gradient-to-br from-slate-900 to-slate-950 text-white px-16 py-10 shadow-xl"
        style={{ fontFamily: "Montserrat, sans-serif" }}>

        <div className="flex items-center gap-6 mb-14">
          <h2 className="text-3xl  text-white whitespace-nowrap">
            Intelligence Brief
          </h2>

          {/* DIVIDER */}
          <div className="flex-1 h-px bg-white/20" />

          <span className="text-xs tracking-widest text-neutral-400 whitespace-nowrap">
            CONFIDENTIAL ANALYSIS
          </span>
        </div>

        <div className="grid grid-cols-3 gap-16">

          <div className="flex gap-4">
            <span className="mt-2 h-2 w-2 bg-emerald-500 rounded-full" />
            <p className="text-sm leading-relaxed text-neutral-300">
              <span className="text-white font-medium">
                Luxury Penthouse, Juhu
              </span>{" "}
              represents your peak momentum with{" "}
              <span className="text-emerald-400 font-medium">
                109 leads
              </span>{" "}
              — exceeding platform benchmark by 2.1%.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="mt-2 h-2 w-2 bg-emerald-500 rounded-full" />
            <p className="text-sm leading-relaxed text-neutral-300">
              Instant engagement (144) accounts for{" "}
              <span className="text-white font-medium">
                38% of momentum
              </span>
              , suggesting urgent buyer acquisition patterns.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="mt-2 h-2 w-2 bg-neutral-500 rounded-full" />
            <p className="text-sm leading-relaxed text-neutral-300">
              <span className="text-white font-medium">
                2 residences
              </span>{" "}
              currently underperform. We recommend cinematic content refresh to
              regain registry prominence.
            </p>
          </div>

        </div>

      </section>

      {openLedger && (
        <EngagementLedgerModal onClose={() => setOpenLedger(false)} />
      )}

      <MessageRegistry isOpen={openMessage} onClose={() => setOpenMessage(false)} />

      <CallRegistry
        isOpen={openCall}
        onClose={() => setOpenCall(false)}
      />
    </div>
  );
};

export default Reports;
