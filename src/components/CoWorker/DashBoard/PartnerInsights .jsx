import React from "react";

const insightsData = [
  {
    title: "Timing is Everything",
    description:
      'Monthly reports go live on the 1st. Use the first week of the month to follow up with "In Progress" partners.',
  },
  {
    title: "The Conversion Trap",
    description:
      'If your "Interested" numbers are high but "Testing" is low, try reaching out personally to explain the process.',
  },
  {
    title: "Vault-Ready Records",
    description:
      "Save your PDF reports quarterly. These are cinematic proof of your growth within the ecosystem.",
  },
  {
    title: "Closing the Loop",
    description:
      "Use these stats to identify exactly where potential partners drop off. Every drop-off is a conversation.",
  },
];

const PartnerInsights = () => {
  return (
    <div className="border-2 border-gray-900 bg-white p-10 shadow-2xl max-w-5xl mx-auto mb-10  ">
      <h2 className="text-xs tracking-widest text-gray-900 font-semibold mb-6 uppercase">
        Partner Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {insightsData.map((item, index) => (
          <div key={index}>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerInsights;
