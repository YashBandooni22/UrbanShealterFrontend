import React from "react";

import HeroSection from "./HeroSection";
import SettledBalanceCard from "./SettledBalanceCard ";
import QuarterStatusCard from "./QuarterStatusCard ";
import AnnualPerformanceCard from "./AnnualPerformanceCard";
import IncentivePredictor from "./IncentivePredictor ";
import WithdrawalsHero from "./WithdrawalsHero ";
import SubscriptionTrialReport from "./SubscriptionTrialReport";

const MyEarnings = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= SUMMARY CARDS ================= */}
      <div className="max-w-7xl mx-auto px-8 mt-8">
        <div className="flex gap-6">
          <SettledBalanceCard />
          <QuarterStatusCard />
          <AnnualPerformanceCard />
        </div>
      </div>

      {/* ================= INCENTIVE ================= */}
      <div className="max-w-7xl mx-auto px-8 mt-10">
        <IncentivePredictor />
      </div>

      {/* ================= REPORT + WITHDRAWALS ================= */}
      <div className="max-w-7xl mx-auto px-8 mt-12">
        <div className="flex gap-8 items-start">
          <div className="flex-1">
            <SubscriptionTrialReport />
          </div>

          <div className="w-[420px]">
            <WithdrawalsHero />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEarnings;
