import React from "react";
import { FaStar } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

/* ----------------------------------------
   TIER DATA OBJECT (Single Source of Truth)
-----------------------------------------*/
const registryTiers = [
  {
    tierId: 2,
    label: "Explorer",
    status: "ACTIVE", // ACTIVE | LOCKED | ACHIEVED

    momentum: {
      current: 7500,
      required: 15000,
    },

    tenure: "1 MONTH ACTIVE",
    threshold: "₹15,000",

    intelligenceAccess: {
      title: "Location Insights",
      description: "Intelligence Access",
    },

    residencyPerks: [
      "+20% Listing Visibility Boost",
      "Priority in Location Searches",
      "Email & Chat Support",
    ],

    pulseModules: [
      "Top Search Locations Data",
      "Geographic Distribution Maps",
      "City-wise Interest Analytics",
      "Regional Trends Insights",
      "2.4x More Targeted Reach",
    ],

    ui: {
      showStar: true,
      locked: false,
    },
  },

  {
    tierId: 3,
    label: "Professional",
    status: "LOCKED",

    tenure: "3 MONTHS ACTIVE",
    threshold: "₹35,000",

    intelligenceAccess: {
      title: "Category & Property Intelligence",
      description: "Intelligence Access",
    },

    residencyPerks: [
      "+35% Accuracy in Buyer Matching",
      "Featured in Category Searches",
      "Priority Email & Chat Support",
      "Property Comparison Advantage",
    ],

    pulseModules: [
      "Property Type Preferences",
      "Price Range Analysis",
      "Bedroom Configuration Trends",
      "Amenity Popularity Insights",
      "56% Faster Listing Sales",
    ],

    ui: {
      showStar: false,
      locked: true,
    },
  },

  {
    tierId: 4,
    label: "Expert",
    status: "LOCKED",

    tenure: "6 MONTHS ACTIVE",
    threshold: "₹60,000",

    intelligenceAccess: {
      title: "Buyer Demographics Intelligence",
      description: "Intelligence Access",
    },

    residencyPerks: [
      "+50% Qualified Inquiry Calls",
      "VIP Badge on All Listings",
      "Priority Customer Support 24/7",
      "Verified Seller Status",
    ],

    pulseModules: [
      "Age Distribution Analytics",
      "Income Brackets Insights",
      "Family Size Patterns",
      "Profession Insights",
      "4.1x Inquiry Quality Boost",
    ],

    ui: {
      showStar: false,
      locked: true,
    },
  },
];

/* ----------------------------------------
   TIER CARD COMPONENT
-----------------------------------------*/
const TierCard = ({ tier }) => {
  const progress =
    tier.momentum &&
    Math.min((tier.momentum.current / tier.momentum.required) * 100, 100);

  return (
    <div
      className={`relative bg-white flex gap-10 transition-shadow duration-300
    ${tier.ui.showStar ? "shadow-2xl border" : "shadow-sm"}
    ${tier.ui.locked ? "opacity-90" : ""} group`}
    >
      {/* LEFT STATUS RAIL */}
      <div
        className={`w-20 rounded-lg flex items-center justify-center transition 
      ${tier.ui.showStar ? "bg-gray-800" : ""}
      ${tier.ui.locked ? "bg-white" : ""}
    `}
      >
        {tier.ui.showStar && (
          <FaStar className="text-green-500 text-xl" />
        )}

        {tier.ui.locked && (
          <FiLock className="text-white text-xl transition-colors group-hover:text-gray-700 " />
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        {/* HEADER */}
        <div className="flex justify-between mb-8 items-start text-right">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest text-green-600 text-left">
              Tier {tier.tierId}
            </p>
            <h2 className="text-3xl font-serif">{tier.label}</h2>
          </div>

          {/* Right */}
          <div className="flex gap-8 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Tenure
              </p>
              <p className="font-medium">{tier.tenure}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Threshold
              </p>
              <p className="font-medium">{tier.threshold}</p>
            </div>
          </div>
        </div>

        {/* INTELLIGENCE ACCESS */}
        <div className="grid grid-cols-3 gap-12 ">
          <div className="border-l-2 border-green-600 pl-6 mb-10 bg-gray-100 py-4">
            <p className="text-xs uppercase tracking-widest text-green-600 mb-2">
              {tier.intelligenceAccess.description}
            </p>
            <p className="text-lg font-medium">
              {tier.intelligenceAccess.title}
            </p>
          </div>

          {/* PERKS + MODULES */}
          <div className="">
            {/* RESIDENCY PERKS */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Residency Perks
              </p>
              <ul className="space-y-3">
                {tier.residencyPerks.map((perk, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-green-600">•</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PULSE MODULES */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Pulse Modules
            </p>

            <ul className="space-y-3 text-sm text-gray-400">
              {tier.pulseModules.map((module, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 leading-none">•</span>
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------
   PAGE COMPONENT
-----------------------------------------*/
const MilestoneCollection = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-5 space-y-20 bg-gray-50">

      {/* PAGE HEADER */}
      <div className=" space-y-1">
        <h3 className="text-3xl ">The Milestone Collection</h3>
        <p className="text-gray-500 tracking-[0.2em]">Evolution of residency intelligence access</p>
      </div>

      {/* TIERS */}
      <div className="space-y-10">
        {registryTiers.map((tier) => (
          <TierCard key={tier.tierId} tier={tier} />
        ))}
      </div>
    </div>
  );
}

  export default MilestoneCollection;
