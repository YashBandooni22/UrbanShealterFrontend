import React from "react";
import PremiumSectionHeader from "./PremiumSectionHeader";
import PropertyCardList from "./PropertyCardList";

const PremiumFurnishedApartments = () => {
  return (
    <section className="px-4 md:px- lg:px-8 py-12" >
      <PremiumSectionHeader />
      <PropertyCardList />
    </section>
  );
};

export default PremiumFurnishedApartments;
