import React from "react";
import MyHistoryHero from "./MyHistoryHero";
import ReportsList from "./ReportsList";
import PartnerInsights from "./PartnerInsights ";

const CoworkerReports = () => {
  return (
    <div
      style={{ fontFamily: "Montserrat, sans-serif" }}>
      <MyHistoryHero />
      <ReportsList />
      <PartnerInsights/>
    </div>
  );
};

export default CoworkerReports;
