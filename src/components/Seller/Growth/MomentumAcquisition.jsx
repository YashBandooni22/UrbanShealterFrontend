import React from 'react';

const cards = [
  { title: "Complete your seller profile", points: 500 },
  { title: "Upload high-quality property photos", points: 300 },
  { title: "Add property video tour", points: 500 },
  { title: "Respond to inquiries within 2 hours", points: 200 },
  { title: "Maintain 95%+ response rate", points: 400, highlight: true },
  { title: "Successfully close a property deal", points: 2000 },
  { title: "Receive 5-star buyer review", points: 600 },
  { title: "Monthly subscription renewal", points: 1000 },
  { title: "Refer another seller (when they subscribe)", points: 1500 },
  { title: "Update listings weekly", points: 150 },
];


const Card = ({ title, points }) => {
  return (
    <div
      className={`
        group flex justify-between items-center py-8 rounded-lg border
        bg-gray-800 transition-all duration-300
        hover:border-green-500
      `}
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Title */}
      <p
        className={`
          uppercase text-xs tracking-[0.15em] font-bold px-4 text-white
          group-hover:text-green-500 transition-colors
        `}
      >
        {title}
      </p>

      {/* Points */}
      <p className="text-green-500 font-medium text-xs">
        {points.toLocaleString()} points INDEX
      </p>

      {/* Green Dot */}
      <p className="w-1 h-1 bg-green-500 rounded-full"></p>
    </div>
  );
};


const MomentumAcquisition = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5"
    >
      {/* Header */}
      <div className='bg-[#131B2B] py-8'>

        <div className="max-w-4xl mx-auto mb-10"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <h3 className="text-3xl  text-white mb-2">Momentum Acquisition</h3>
          <p className="text-gray-400 text-xs uppercase tracking-widest">
            Scale your registry visibility and access
          </p>
          <div className="border-b border-gray-700 mt-4"></div>
        </div>

        {/* Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              points={card.points}
              highlight={card.highlight || false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentumAcquisition;
