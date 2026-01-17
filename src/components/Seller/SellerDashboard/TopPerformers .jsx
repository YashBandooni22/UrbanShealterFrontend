import React from "react";

const topPerformersData = [
    {
        title: "LUXURY PENTHOUSE, JUHU",
        image: "/images/penthouse.jpg",
        percentage: 45,
        views: 5234,
        leads: 67,
        interest: 42,
    },
    {
        title: "SEA VIEW RESIDENCY, WORLI",
        image: "/images/seaview.jpg",
        percentage: 32,
        views: 3847,
        leads: 52,
        interest: 31,
    },
    {
        title: "CHAVAN SKY HEIGHTS, ANDHERI",
        image: "/images/chavan.jpg",
        percentage: 28,
        views: 2156,
        leads: 34,
        interest: 22,
    },
    {
        title: "MODERN STUDIO, BANDRA",
        image: "/images/studio.jpg",
        percentage: 38,
        views: 3421,
        leads: 45,
        interest: 31,
    },
];

const TopPerformers = () => {
    return (
        <section className="p-12 bg-neutral-50" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-2xl mb-1">Top Performers</h3>
                    <p className="text-sm text-gray-400 tracking-widest">
                        THE HIGHEST ENGAGEMENT RESIDENCIES
                    </p>
                </div>
                <a href="#" className="text-sm text-gray-400 tracking-widest hover:underline">
                    ACCESS FULL COLLECTION →
                </a>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topPerformersData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-sm border border-gray-100 group cursor-pointer "
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-4 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                                ↑ + {item.percentage}%
                            </div>
                        </div>
                        <div className="py-4 px-4">
                            <h3 className="font-semibold mb-10 text-xs truncate">
                                {item.title}
                            </h3>
                            <div className="grid grid-cols-2 text-xs text-gray-400 gap-x-1">
                                {/* Labels column */}
                                <div className="flex flex-col gap-4 uppercase tracking-widest">
                                    <span>Views</span>
                                    <span>Leads</span>
                                    <span>Interest</span>
                                </div>

                                {/* Numbers column */}
                                <div className="flex flex-col gap-4 font-medium text-gray-900">
                                    <span className="flex justify-end">{item.views.toLocaleString()}</span>
                                    <span className="flex justify-end">{item.leads}</span>
                                    <span className="flex justify-end text-green-600">{item.interest}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopPerformers;
