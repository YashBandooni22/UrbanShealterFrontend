import React from "react";

const recentPostsData = [
    {
        title: "3 BHK PREMIUM FLAT, POWAI",
        image: "/images/powai.jpg",
        time: "2 DAYS AGO",
        views: 234,
        status: "LIVE",
    },
    {
        title: "LUXURY VILLA, LONAVALA",
        image: "/images/lonavala.jpg",
        time: "5 DAYS AGO",
        views: 567,
        status: "LIVE",
    },
    {
        title: "2 BHK APARTMENT, THANE",
        image: "/images/thane.jpg",
        time: "1 WEEK AGO",
        views: 892,
        status: "LIVE",
    },
    {
        title: "PENTHOUSE, LOWER PAREL",
        image: "/images/lower-parel.jpg",
        time: "1 WEEK AGO",
        views: 1234,
        status: "LIVE",
    },
];

const RecentPosts = () => {
    return (
        <section className="p-12 bg-neutral-50" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-2xl mb-1">Recent Posts</h3>
                    <p className="text-sm text-gray-400 tracking-widest">
                        LATEST ADDITIONS TO THE JOURNEY
                    </p>
                </div>
                <a
                    href="#"
                    className="text-sm text-gray-400 tracking-widest hover:underline"
                >
                    VIEW FEED →
                </a>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentPostsData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white border border-gray-100 shadow-sm cursor-pointer group hover:border-gray-200"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Time Badge */}
                            <div className="absolute top-4 right-3 bg-white text-gray-900 text-xs px-3 py-1 tracking-widest">
                                {item.time}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-4 py-5">
                            <h3 className="text-xs font-semibold tracking-wide mt-2 truncate">
                                {item.title}
                            </h3>


                            {/* Footer */}
                            <div className="flex items-center justify-between mt-6 text-xs">
                                <span className="flex items-center gap-2 text-gray-400 tracking-widest">
                                    <span className="w-1 h-1 bg-green-500 rounded-full" />
                                    {item.views} VIEWS
                                </span>

                                <span className="border border-green-200 text-green-600 px-3 py-1 text-[10px] tracking-widest">
                                    {item.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentPosts;