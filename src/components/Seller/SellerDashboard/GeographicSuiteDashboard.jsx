import React from "react";

// ================= STATIC DATA (API READY) =================
const geographicData = {
  total: 12800,
  breakdown: [
    { id: 1, label: "MUMBAI", value: 75, color: "bg-slate-900", stroke: "#0f172a" },
    { id: 2, label: "PUNE", value: 15, color: "bg-gray-500", stroke: "#6b7280" },
    { id: 3, label: "OTHERS", value: 10, color: "bg-gray-300", stroke: "#d1d5db" },
  ],
};

const suiteControls = [
  { id: 1, label: "POST NEW RESIDENCY" },
  { id: 2, label: "CINEMATIC ANALYTICS" },
  { id: 3, label: "LEAD REGISTRY" },
];

// ================= COMPONENT =================
export default function GeographicSuiteDashboard() {
  return (
    <div className="mx-auto px-12 pb-10 bg-neutral-50" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ================= LEFT CARD ================= */}
        <div className="bg-white rounded-2xl shadow-sm p-10">
          <h2 className="text-xs tracking-widest text-gray-500 mb-10">
            THE GEOGRAPHIC SUITE
          </h2>

          <div className="flex items-center gap-14">
            {/* Donut Chart */}
            <div className="relative w-44 h-44">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#0f172a"
                  strokeWidth="4"
                  strokeDasharray="75, 25"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="4"
                  strokeDasharray="15, 85"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="4"
                  strokeDasharray="10, 90"
                />
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold">
                  {(geographicData.total / 1000).toFixed(1)}k
                </span>
                <span className="text-[10px] tracking-widest text-gray-400">
                  TOTAL
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-5 text-sm">
              {geographicData.breakdown.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-16"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 ${item.color} rounded-sm`} />
                    <span className="tracking-widest text-gray-400">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="bg-white rounded-2xl shadow-sm p-10">
          <h2 className="text-xs tracking-widest text-gray-500 mb-10">
            THE SUITE CONTROLS
          </h2>

          <div className="space-y-6">
            {suiteControls.map((item) => (
              <div
                key={item.id}
                className="border border-gray-100 rounded-xl px-6 py-2 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="tracking-widest text-xs text-gray-400">
                  {item.label}
                </span>
                <span className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
