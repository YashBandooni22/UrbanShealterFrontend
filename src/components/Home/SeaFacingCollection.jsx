import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import VideoModal from "./VideoModal";

const properties = [
  {
    id: 1,
    title: "3BHK Sea View Apartment",
    location: "Worli, Mumbai",
    price: "₹4.2 Cr",
    views: "12.5K",
    tag: "MOST VIEWED",
    duration: "2:45",
    engagement: { count: 32, label: "CALLS TODAY" },
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

    stats: {
      likes: 3,
      shares: 3,
      views: 2100,
    }
  },
  {
    id: 2,
    title: "Sky Residency Tower",
    location: "Lower Parel",
    price: "₹5.5 Cr",
    views: "18.9K",
    tag: "MOST DIALED",
    duration: "3:20",
    engagement: { count: 45, label: "INQUIRIES" },
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    stats: {
      likes: 3,
      shares: 3,
      views: 2100,
    }
  },
  {
    id: 3,
    title: "Premium 4BHK Residence",
    location: "BKC, Mumbai",
    price: "₹6.8 Cr",
    views: "15.2K",
    tag: "MOST POPULAR",
    duration: "4:10",
    engagement: { count: 18, label: "CALLS TODAY" },
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    stats: {
      likes: 3,
      shares: 3,
      views: 2100,
    }
  },
  {
    id: 4,
    title: "Tower Heights Apartment",
    location: "Prabhadevi",
    price: "₹3.9 Cr",
    views: "9.7K",
    tag: "TRENDING",
    duration: "2:55",
    engagement: { count: 28, label: "INTERESTED" },
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    stats: {
      likes: 3,
      shares: 3,
      views: 2100,
    }
  },
  {
    id: 4,
    title: "Tower Heights Apartment",
    location: "Prabhadevi",
    price: "₹3.9 Cr",
    views: "9.7K",
    tag: "TRENDING",
    duration: "2:55",
    engagement: { count: 28, label: "INTERESTED" },
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    stats: {
      likes: 3,
      shares: 3,
      views: 2100,
    }
  },
  {
    id: 4,
    title: "Tower Heights Apartment",
    location: "Prabhadevi",
    price: "₹3.9 Cr",
    views: "9.7K",
    tag: "TRENDING",
    duration: "2:55",
    engagement: { count: 28, label: "INTERESTED" },
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    stats: {
      likes: 3,
      shares: 3,
      views: 2100,
    }
  },
  {
    id: 4,
    title: "Tower Heights Apartment",
    location: "Prabhadevi",
    price: "₹3.9 Cr",
    views: "9.7K",
    tag: "TRENDING",
    duration: "2:55",
    engagement: { count: 28, label: "INTERESTED" },
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    stats: {
      likes: 3,
      shares: 3,
      views: 2100,
    }
  },
];

const Property = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="max-w-8xl mx-auto py-6 px-10 mt-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-10 ">
        <div>
          <h3 className="text-4xl ">Sea-Facing Collection</h3>
          <p className="text-gray-400 text-md mt-4 max-w-2xl ">
            Exclusive high-rise apartments and coastal villas offering panoramic views of the Arabian Sea.  Curated for the ultimate luxury experience.</p>

          <p className="text-green-700 text-sm mt-2 uppercase tracking-wide mx-auto">
            15 Properties <span className="text-gray-700">• ₹4.5Cr – ₹25Cr </span>
          </p>
        </div>

        <button className="border border-gray-500 px-6 py-2 text-sm hover:border-white transition">
          EXPLORE ALL &gt;
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white">
        {properties.map((property, index) => (
          <PropertyCard
            key={property.id}
            data={property}
            onPlay={() => setActiveIndex(index)}
          />
        ))}
      </div>



      {/* Modal with Carousel */}
      {activeIndex !== null && (
        <VideoModal
          properties={properties}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
};

export default Property;
