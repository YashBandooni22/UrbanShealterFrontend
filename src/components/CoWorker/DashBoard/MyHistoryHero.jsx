import React from "react";
import { FiTrendingUp, FiUsers, FiFileText } from "react-icons/fi";

const stats = [
  {
    label: "SELLERS PAID",
    value: "12",
    footer: "THIS MONTH",
    icon: <FiTrendingUp className="text-neutral-300" size={18} />,
    valueClass: "text-neutral-900",
  },
  {
    label: "TOTAL CLICKS",
    value: "324",
    footer: "PEOPLE REACHED",
    icon: <FiUsers className="text-neutral-300" size={18} />,
    valueClass: "text-neutral-900",
  },
  {
    label: "WIN RATE",
    value: "3.7%",
    footer: "AVERAGE SCORE",
    icon: <FiTrendingUp className="text-emerald-500" size={18} />,
    valueClass: "text-emerald-600",
  },
  {
    label: "MONEY REPORTS",
    value: "4",
    footer: "READY TO SAVE",
    icon: <FiFileText className="text-neutral-300" size={18} />,
    valueClass: "text-neutral-900",
  },
];

const StatCard = ({ label, value, footer, icon, valueClass }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm px-4 py-4">
      <div className="flex items-center justify-between mb-10">
        <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 font-medium">
          {label}
        </p>
        {icon}
      </div>

      <h3 className={`text-[50px] leading-none ${valueClass}`}>
        {value}
      </h3>

      <p className="mt-6 text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
        {footer}
      </p>
    </div>
  );
};

const MyHistoryHero = () => {
  return (
    <section className="w-full bg-white px-8 pt-12 pb-14">
      {/* Heading */}
      <div className="mb-20">
        <h3 className="text-[28px]  text-neutral-900 mb-4">
          My History
        </h3>
        <p className="text-[12px] tracking-[0.35em] uppercase text-neutral-400">
          A record of your partnerships and growth.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-12">
        {stats.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MyHistoryHero;
