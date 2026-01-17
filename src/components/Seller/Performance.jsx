import React, { useState } from "react";

const Performance = () => {

  const kpis = [
    { label: "Residency Reach", value: "2,259", meta: "+12% Momentum" },
    { label: "Buyer Engagement", value: "8.9%", meta: "Peak Performance" },
    { label: "Registry Impressions", value: "7,812", meta: "Last 30 Days" },
    { label: "Active Retention", value: "79%", meta: "Stable" },
  ];

  const cities = [
    "All Properties",
    "Luxury Villa, Bandra West",
    "Penthouse, Lower Parel",
    "3 BHK Apartment, Powai",
    "2 BHK Flat, Andheri East",
    "Independent House, Juhu",
  ]

  const lockedCards = [
    {
      title: "Location Insights",
      subtitle: "UNDERSTAND WHERE YOUR POTENTIAL BUYERS ARE SEARCHING FROM",
      tier: 2,
      bullets: [
        "Top Search Locations",
        "Geographic Distribution",
        "City-wise Interest",
        "Regional Trends",
      ],
    },
    {
      title: "Category Analytics",
      subtitle: "DISCOVER WHICH PROPERTY TYPES ARE MOST IN DEMAND",
      tier: 3,
      bullets: [
        "Property Type Preferences",
        "Price Range Analysis",
        "Bedroom Configuration Trends",
        "Amenity Popularity",
      ],
    },
    {
      title: "Time-based Patterns",
      subtitle: "IDENTIFY PEAK ENGAGEMENT TIMES AND SEASONAL TRENDS",
      tier: 5,
      bullets: [
        "Peak Search Hours",
        "Day-wise Activity",
        "Seasonal Trends",
        "Monthly Patterns",
      ],
    },
    {
      title: "Competitive Analysis",
      subtitle: "COMPARE YOUR LISTINGS WITH MARKET COMPETITION",
      tier: 6,
      bullets: [
        "Market Positioning",
        "Price Competitiveness",
        "Feature Comparison",
        "Listing Quality Score",
      ],
    },
    {
      title: "Price Sensitivity",
      subtitle: "COMPARE YOUR LISTINGS WITH MARKET COMPETITION",
      tier: 6,
      bullets: [
        "Market Positioning",
        "Price Competitiveness",
        "Feature Comparison",
        "Listing Quality Score",
      ],
    },
    {
      title: "Conversion Funnels",
      subtitle: "COMPARE YOUR LISTINGS WITH MARKET COMPETITION",
      tier: 6,
      bullets: [
        "Market Positioning",
        "Price Competitiveness",
        "Feature Comparison",
        "Listing Quality Score",
      ],
    },
    {
      title: "Predictive Analytics",
      subtitle: "COMPARE YOUR LISTINGS WITH MARKET COMPETITION",
      tier: 6,
      bullets: [
        "Market Positioning",
        "Price Competitiveness",
        "Feature Comparison",
        "Listing Quality Score",
      ],
    },
    {
      title: "Advanced AI Insights",
      subtitle: "COMPARE YOUR LISTINGS WITH MARKET COMPETITION",
      tier: 6,
      bullets: [
        "Market Positioning",
        "Price Competitiveness",
        "Feature Comparison",
        "Listing Quality Score",
      ],
    },
  ];

  const [activeCity, setActiveCity] = useState(null);


  return (
    <section className="p-12 pb-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
      {/* Header */}
      <div className="flex items-start justify-between mb-16">
        <div>
          <p className="text-xs tracking-widest text-green-600 mb-2">
            THE JOURNEY
          </p>
          <h3 className="text-3xl mb-4">Intelligence Dashboard</h3>
          <p className="text-sm text-gray-400 tracking-widest max-w-xl">
            LEVEL-BASED INSIGHTS CALIBRATED FOR YOUR HIGH-RESIDENCY PORTFOLIO.
          </p>
        </div>

        <div className="text-left">
          <p className="text-xs tracking-widest text-gray-400 mb-1">
            RESIDENCY TIER
          </p>

          <div className="flex items-end gap-8">
            <h3 className="text-4xl leading-none">
              1
            </h3>

            <p className="text-[10px] leading-tight text-gray-500 mb-1">
              OF 10
              <br />
              UNLOCKED
            </p>
          </div>
        </div>

      </div>

      {/* Access Progress */}
      <div className="border border-gray-100 bg-white p-8 mb-16 shadow-sm">
        <div className="flex justify-between mb-6">
          <p className="text-xs tracking-widest">ACCESS PROGRESS</p>
          <p className="text-xs tracking-widest text-gray-400">
            1 MODULE ACTIVE
          </p>
        </div>

        <div className="grid grid-cols-10 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`h-14 flex items-center justify-center text-xs tracking-widest
                ${i === 0
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 text-gray-300"
                }`}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>

      {/* Registry Selection */}
      <div className="border border-gray-300 bg-white p-8 mb-16 shadow-lg">
        <p className="text-xs tracking-widest mb-2">REGISTRY SELECTION</p>
        <p className="text-xs tracking-widest text-gray-400 mb-8">
          SELECT A RESIDENCY TO BEGIN ANALYSIS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          {cities.map((label, idx) => {
            const isActive = activeCity === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveCity(idx)}
                className={`
            px-4 py-4 w-[150px] min-h-[80px] text-left cursor-pointer
            transition-all duration-200 relative
            ${isActive
                    ? "bg-gray-900 text-white shadow-xl absolute -top-2 transition-all duration-200 delay-200"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                  }
          `}
              >
                <p className="text-[10px] tracking-widest uppercase ">
                  {label}
                </p>

                <p
                  className={`
              text-[8px] tracking-widest
              ${isActive ? "text-green-400" : "text-gray-400"}
            `}
                >
                  ● INDEXED
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Level 01 Banner */}
      <div className="bg-gray-900 text-white p-8 mb-16 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-6">
          <p className="w-14 h-14 bg-gray-800 text-2xl text-gray-300 border-green-500 flex items-center justify-center ">
            01
          </p>
          <div>
            <h3 className="text-2xl  mb-1">
              Basic Analytics
            </h3>
            <p className="text-xs tracking-widest text-green-400">
              ESSENTIAL METRICS OVERVIEW
            </p>
          </div>
        </div>

        <button className="bg-white text-black px-8 py-3 text-xs tracking-widest">
          ACTIVE ACCESS
        </button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-gray-50 p-8 min-h-[120px] flex flex-col justify-between  hover:border hover:border-gray-900"
          >
            <span className="text-xs tracking-widest text-gray-400">
              {kpi.label.toUpperCase()}
            </span>
            <h3 className="text-4xl ">{kpi.value}</h3>
            <span className="text-xs tracking-widest text-green-600">
              {kpi.meta.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      {/* Locked Intelligence Cards */}
      <div className="space-y-16">
        {lockedCards.map((card, idx) => (
          <div key={idx} className="border border-gray-300 bg-white shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 bg-neutral-50">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 border flex items-center justify-center text-gray-400">
                  🔒
                </div>
                <div>
                  <h3 className="text-2xl ">{card.title}</h3>
                  <p className="text-xs tracking-widest text-gray-400 mt-1">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              <span className="border px-6 py-2 text-xs tracking-widest text-gray-400">
                TIER {card.tier} RESTRICTED
              </span>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 px-8 py-12">
              <div>
                <p className="text-xs tracking-widest text-green-600 mb-4">
                  INTELLIGENCE PREVIEW
                </p>

                <h3 className="text-4xl  mb-6">
                  Calibrate Your Collection
                </h3>

                <p className="text-sm text-gray-400 tracking-widest max-w-xl mb-10">
                  DEEP ANALYSIS OF GEOGRAPHIC INTEREST AND DEMOGRAPHIC
                  RESIDENCY DEMAND AWAITS YOUR PORTFOLIO TIER UPGRADE.
                </p>

                <ul className="space-y-4">
                  {card.bullets.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs tracking-widest text-gray-500 uppercase"
                    >
                      ☐ {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 flex flex-col justify-between">
                <div>
                  <p className="text-xs tracking-widest text-gray-400 mb-10 text-center">
                    YIELD PROJECTION
                  </p>

                  <div className="grid grid-cols-3 gap-6 text-center mb-12">
                    <div>
                      <h3 className="text-4xl ">2.4x</h3>
                      <p className="text-xs tracking-widest text-green-400 mt-2">
                        REACH BOOST
                      </p>
                    </div>
                    <div>
                      <h3 className="text-4xl ">38%</h3>
                      <p className="text-xs tracking-widest text-green-400 mt-2">
                        EFFICIENCY
                      </p>
                    </div>
                    <div>
                      <h3 className="text-4xl ">₹42K</h3>
                      <p className="text-xs tracking-widest text-green-400 mt-2">
                        YIELD INC.
                      </p>
                    </div>
                  </div>
                </div>

                <button className="bg-white text-black py-4 text-xs tracking-widest">
                  INDEX TIER {card.tier} INTELLIGENCE
                </button>

                <p className="text-[10px] tracking-widest text-gray-500 text-center mt-6">
                  ELEVATE YOUR RESIDENCY COLLECTION REGISTRY
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Performance;
