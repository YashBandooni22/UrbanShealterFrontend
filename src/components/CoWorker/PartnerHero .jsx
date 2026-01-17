import React from "react";
import PartnerApplyCard from "./PartnerApplyCard ";
import PartnerHeroAuth from "./PartnerHeroAuth";
import PartnerHeroContent from "./PartnerHeroContent";

const PartnerHero = () => {
    return (
        <section className="bg-white border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" style={{ fontFamily: "Montserrat, sans-serif" }}>

                    <PartnerHeroContent />

                    <PartnerHeroAuth />

                </div>
            </div>
        </section>
    );
};

export default PartnerHero;
