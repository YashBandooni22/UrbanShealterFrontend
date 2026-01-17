import React, { useState } from "react";
import MoneyReportCard from "./MoneyReportCard";
import { REPORTS } from "../../../assets/assest";

const FILTERS = [
  { label: "All Reports", value: "all" },
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
];

const ReportsList = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredReports =
    activeFilter === "all"
      ? REPORTS
      : REPORTS.filter((report) => report.type === activeFilter);

  return (
    <section className="px-14 pb-24">
      {/* Filters */}
      <div className="flex gap-16 border-b border-neutral-200 mb-16">
        {FILTERS.map(({ label, value }) => {
          const isActive = activeFilter === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => setActiveFilter(value)}
              className={`relative pb-4 text-[12px] tracking-[0.25em] uppercase font-semibold ${
                isActive ? "text-neutral-900" : "text-neutral-400"
              }`}
            >
              {label}
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-neutral-900" />
              )}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="space-y-14">
        {filteredReports.map((report) => (
          <MoneyReportCard key={report.id} report={report} />
        ))}
      </div>
    </section>
  );
};

export default ReportsList;
