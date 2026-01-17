import React from "react";

const activities = [
  {
    name: "Amit Deshmukh",
    description: "Started paying for Premium",
    earning: "+₹1,500/MO",
    earningType: "positive",
    time: "2H AGO",
    dot: "bg-black",
  },
  {
    name: "Rahul Kapoor",
    description: "Started 14-day test",
    earning: "POTENTIAL +₹1,000/MO",
    earningType: "potential",
    time: "5H AGO",
    dot: "bg-gray-400",
  },
  {
    name: "Meera Iyer",
    description: "Joined the platform",
    earning: "NOT YET EARNING",
    earningType: "neutral",
    time: "8H AGO",
    dot: "bg-gray-300",
  },
  {
    name: "Deepak Sharma",
    description: "Test ended without joining",
    earning: "MISSED",
    earningType: "missed",
    time: "12H AGO",
    dot: "bg-red-400",
  },
  {
    name: "Kavita Singh",
    description: "Clicked your link",
    earning: "NOT YET EARNING",
    earningType: "neutral",
    time: "1D AGO",
    dot: "bg-gray-200",
  },
];

const RecentActivity = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto px-6 py-12">
      <div className="px-10 py-8 border border-gray-200 shadow-sm  ">
        {/* Header */}
        <p className="text-[11px] tracking-widest uppercase text-gray-400 mb-10">
          What happened recently
        </p>

        {/* Activity List */}
        <div className="space-y-10">
          {activities.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                {/* Left */}
                <div className="flex gap-4">
                  <span
                    className={`w-2 h-2 rounded-full mt-2 ${item.dot}`}
                  ></span>

                  <div>
                    <p className="text-base text-gray-900 mb-1">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.description}
                    </p>

                    {/* Earning Status */}
                    <p
                      className={`text-xs tracking-widest uppercase ${
                        item.earningType === "positive"
                          ? "text-green-600"
                          : item.earningType === "potential"
                          ? "text-gray-900"
                          : item.earningType === "missed"
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {item.earning}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <p className="text-xs tracking-widest text-gray-300 uppercase">
                  {item.time}
                </p>
              </div>

              {/* Divider */}
              {index !== activities.length - 1 && (
                <div className="border-b border-gray-100 mt-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <button className="text-xs tracking-widest uppercase text-gray-400 hover:text-gray-700 transition">
            See all activity →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
