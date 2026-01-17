import React from "react";
import { FiDownload } from "react-icons/fi";
import { REPORTS } from "../../../assets/assest";

/* ===================== METRIC ===================== */
const Metric = ({ title, value, label, accent }) => (
  <div className="flex flex-col ">
    <p className="text-[8px] tracking-[0.28em] uppercase text-neutral-400">
      {title}
    </p>

    <h3
      className={`text-[40px]  leading-[0.95] ${accent ? "text-emerald-600" : "text-neutral-900"
        }`}
    >
      {value}
    </h3>

    <p className="mt-2 text-[11px] tracking-[0.3em] uppercase text-neutral-400">
      {label}
    </p>
  </div>
);

/* ===================== CARD ===================== */
const MoneyReportCard = ({ report }) => {
  const { title, status, period, metrics } = report;

  return (
    <section className="bg-white border border-neutral-200 shadow-sm p-8 hover:border hover:border-gray-600">
      {/* ===================== HEADER ===================== */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-6 mb-2">
            <h3 className="text-[34px]  text-neutral-900">
              {title}
            </h3>

            <span
              className={`px-4 py-0 text-[9px] tracking-[0.3em] uppercase font-semibold
    ${status === "Verified"
                  ? "bg-emerald-800 text-white"
                  : "bg-gray-200 text-gray-900"
                }`}
            >
              {status}
            </span>

          </div>

          <p className="text-[12px] tracking-[0.4em] uppercase text-neutral-400">
            {period}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <button
            type="button"
            className="flex items-center gap-4 bg-neutral-900 text-white px-8 py-2 text-[12px] tracking-[0.32em] uppercase font-semibold shadow-lg"
          >
            <FiDownload size={16} />
            Save PDF
          </button>

          <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-neutral-400 cursor-pointer">
            Full Details
          </span>
        </div>
      </div>

      {/* ===================== METRICS ===================== */}
      <div className="grid grid-cols-4 mt-10 max-w-3xl">
        {Object.entries(metrics).map(([key, item]) => (
          <Metric
            key={key}
            title={key}
            value={item.value}
            label={item.label}
            accent={item.highlight}
          />
        ))}
      </div>
    </section>
  );
};

/* ===================== LIST RENDER ===================== */
const MoneyReports = () => {
  return (
    <div className="space-y-8">
      {REPORTS.map((report) => (
        <MoneyReportCard key={report.id} report={report} />
      ))}
    </div>
  );
};

export default MoneyReports;
