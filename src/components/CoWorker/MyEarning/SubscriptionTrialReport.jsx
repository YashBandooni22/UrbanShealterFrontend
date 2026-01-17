import React, { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const DATA = [
  {
    start: "2025-01-12",
    end: "2025-02-12",
    name: "Amit Deshmukh",
    id: "SUB-001",
    type: "PAID",
    plan: "LUXURY PRO",
    revenue: "₹45,000",
    status: "COMPLETED",
  },
  {
    start: "2025-01-15",
    end: "2025-01-22",
    name: "Priya Sharma",
    id: "TRL-092",
    type: "TRIAL",
    plan: "TRIAL PERIOD",
    revenue: "₹49",
    status: "CONVERTED",
  },
  {
    start: "2025-02-02",
    end: "2025-03-02",
    name: "Vikram Patil",
    id: "SUB-003",
    type: "PAID",
    plan: "LUXURY PRO",
    revenue: "₹45,000",
    status: "COMPLETED",
  },
  {
    start: "2025-02-10",
    end: "2025-02-17",
    name: "Sneha Reddy",
    id: "TRL-104",
    alert: "ACTION NEEDED",
    type: "TRIAL ONLY",
    plan: "TRIAL PERIOD",
    revenue: "₹49",
    status: "NO_SUB",
  },
  {
    start: "2025-03-05",
    end: "2025-03-12",
    name: "Rahul Khanna",
    id: "TRL-115",
    type: "TRIAL ONLY",
    plan: "TRIAL PERIOD",
    revenue: "₹49",
    status: "EXPIRED",
  },
  {
    start: "2025-03-12",
    end: "2025-04-12",
    name: "Ananya Iyer",
    id: "SUB-006",
    type: "PAID",
    plan: "ESTATE PLUS",
    revenue: "₹28,000",
    status: "COMPLETED",
  },
];

const SubscriptionTrialReport = () => {
  const [conversionFilter, setConversionFilter] = useState("ALL RECORDS");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredData = DATA.filter((row) => {
    if (conversionFilter === "ALL RECORDS") return true;
    if (conversionFilter === "PAID ONLY") return row.type === "PAID";
    if (conversionFilter === "ALL TRIALS") return row.type.includes("TRIAL");
    if (conversionFilter === "ACTION NEEDED") return row.alert;
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto py-18">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl ">
          Subscription Trial Report
        </h3>

        <button className="border px-4 py-2 text-sm flex items-center gap-2">
          Q1 2025 <FiChevronDown />
        </button>
      </div>

      {/* ================= FILTERS ================= */}
      <div className="bg-white rounded-lg p-6 mb-10 shadow-sm">
        <div className="grid grid-cols-4 gap-6">
          {/* Search */}
          <div>
            <p className="text-[11px] tracking-widest text-gray-400 mb-2">
              SEARCH SELLER / ID
            </p>
            <div className="flex items-center bg-gray-50 px-3 py-2">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                className="bg-transparent outline-none text-sm w-full"
                placeholder="Filter by name..."
              />
            </div>
          </div>

          {/* Conversion Dropdown */}
          <div>
            <p className="text-[11px] tracking-widest text-gray-400 mb-2">
              CONVERSION
            </p>

            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex justify-between items-center bg-gray-50 px-3 py-2 text-xs"
              >
                {conversionFilter}
                <FiChevronDown />
              </button>

              {dropdownOpen && (
                <div className="absolute z-20 mt-1 w-full bg-white border shadow-sm">
                  {[
                    "ALL RECORDS",
                    "PAID ONLY",
                    "ALL TRIALS",
                    "ACTION NEEDED",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setConversionFilter(option);
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* From Date */}
          <div>
            <p className="text-[11px] tracking-widest text-gray-400 mb-2">
              FROM
            </p>
            <input
              type="date"
              className="bg-gray-50 px-3 py-2 w-full text-sm"
              defaultValue="2025-01-01"
            />
          </div>

          {/* To Date */}
          <div>
            <p className="text-[11px] tracking-widest text-gray-400 mb-2">
              TO
            </p>
            <input
              type="date"
              className="bg-gray-50 px-3 py-2 w-full text-sm"
              defaultValue="2025-03-31"
            />
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-lg">
        {/* Headers */}
        <div className="grid grid-cols-5 px-6 py-4 text-xs tracking-widest text-gray-400">
          <div>VALIDITY PERIOD</div>
          <div>SELLER & ALERT</div>
          <div>PLAN DETAILS</div>
          <div>REVENUE</div>
          <div>CONVERSION STATUS</div>
        </div>

        {/* Rows */}
        {filteredData.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 px-6 py-6 items-center border-t text-xs"
          >
            {/* Validity Period */}
            <div className="text-xs">
              <p className="font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                {row.start}
              </p>
              <p className="text-gray-400 flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-red-400 rounded-full" />
                {row.end}
              </p>
            </div>

            {/* Seller */}
            <div>
              <p className="font-semibold">{row.name}</p>
              <p className="text-xs text-gray-400">{row.id}</p>
              {row.alert && (
                <span className="inline-block mt-2 text-xs px-1 py-1 bg-blue-500 text-white rounded-full">
                  {row.alert}
                </span>
              )}
            </div>

            {/* Plan */}
            <div className="text-sm">
              <p className="font-semibold">{row.type}</p>
              <p className="flex items-center gap-2 text-gray-400 mt-1">
                <span
                  className={`w-2 h-2 rounded-full ${
                    row.type === "PAID"
                      ? "bg-black"
                      : "bg-blue-500"
                  }`}
                />
                {row.plan}
              </p>
            </div>

            {/* Revenue */}
            <div className="font-semibold">{row.revenue}</div>

            {/* Conversion Status */}
            <div>
              {row.status === "NO_SUB" ? (
                <div>
                  <div className="bg-blue-600 text-white text-xs px-1 py-1 inline-block">
                    TRIAL: NO SUB
                  </div>
                  <p className="text-xs text-blue-600 mt-1">
                    CONVERSION POTENTIAL
                  </p>
                </div>
              ) : (
                <span
                  className={`text-xs px-3 py-2 inline-block ${
                    row.status === "EXPIRED"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {row.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionTrialReport;
