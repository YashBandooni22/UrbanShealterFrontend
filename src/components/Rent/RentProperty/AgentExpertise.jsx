import React from "react";
import FeaturedPortfolioSlider from "./AgentExpertise/FeaturedPortfolioSlider";
import AgentProfileCard from "./AgentExpertise/AgentProfileCard";

const AgentExpertise = () => {
  return (
    <section className="px-8  py-14 grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-12">
      <AgentProfileCard />
      <FeaturedPortfolioSlider />
    </section>
  );
};

export default AgentExpertise;
