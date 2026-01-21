import React from "react";
import { FiHeart, FiEye } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const properties = [
  {
    id: 1,
    badge: "MOST VIEWED",
    badgeColor:
      "bg-black/40 backdrop-blur-md border border-white/10 shadow-sm",
    price: "₹1.5L",
    title: "3BHK Luxury...",
    location: "Worli, Mumbai",
    beds: 3,
    baths: 3,
    area: 2100,
    views: "12.5K",
    duration: "2:45",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    badge: "TRENDING",
    badgeColor:
      "bg-black/40 backdrop-blur-md border border-white/10 shadow-sm",
    price: "₹2.5L",
    title: "Premium Sea-...",
    location: "Marine Drive",
    beds: 3,
    baths: 3,
    area: 2400,
    views: "18.9K",
    duration: "3:20",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    id: 3,
    badge: "MOST POPULAR",
    badgeColor:
      "bg-black/40 backdrop-blur-md border border-white/10 shadow-sm",
    price: "₹2.2L",
    title: "Executive 4BHK...",
    location: "BKC, Mumbai",
    beds: 4,
    baths: 4,
    area: 3000,
    views: "15.2K",
    duration: "4:10",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  },
  {
    id: 4,
    badge: "HOT",
    badgeColor:
      "bg-black/40 backdrop-blur-md border border-white/10 shadow-sm",
    price: "₹95K",
    title: "Modern Residence",
    location: "Dadar West",
    beds: 2,
    baths: 2,
    area: 1600,
    views: "11.3K",
    duration: "3:15",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 5,
    badge: "HOT",
    badgeColor:
      "bg-black/40 backdrop-blur-md border border-white/10 shadow-sm",
    price: "₹1.8L",
    title: "Harbor View...",
    location: "Colaba",
    beds: 3,
    baths: 3,
    area: 2500,
    views: "8.2K",
    duration: "4:15",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  },
  {
    id: 6,
    badge: "HOT",
    badgeColor:
      "bg-black/40 backdrop-blur-md border border-white/10 shadow-sm",
    price: "₹2.1L",
    title: "Elite Skyline Suite",
    location: "Tardeo",
    beds: 4,
    baths: 4,
    area: 2800,
    views: "10.5K",
    duration: "3:40",
    image:
      "https://images.unsplash.com/photo-1600585154154-712a0c9fdc6b",
  },
];

const PropertyCardList = () => {

  const navigate = useNavigate()
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {properties.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/rent/${item.id}`)}
          className="bg-white rounded-xl border border-slate-200 shadow-sm "
        >
          {/* Image */}
          <div className="relative h-68 overflow-hidden rounded-t-xl  hover:shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Badge */}
            <span
              className={`absolute top-3 left-3 text-xs text-white px-3 py-3 rounded ${item.badgeColor}`}
            >
              {item.badge}
            </span>

            {/* Wishlist */}
            <button
              aria-label="Add to wishlist"
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white shadow flex items-center justify-center"
            >
              <FiHeart className="text-slate-600" />
            </button>

            {/* Time + Views */}
            <div className="absolute bottom-3 right-3 flex flex-col gap-1">
              <div className="flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                <BsPlayFill />
                {item.duration}
              </div>

              <div className="flex items-center gap-1 bg-white/90 text-xs text-slate-700 px-2 py-1 rounded">
                <FiEye />
                {item.views}
              </div>
            </div>

            {/* Price */}
            <div className="absolute bottom-3 left-3">
              <div className="text-xl font-semibold text-white leading-none">
                {item.price}
              </div>
              <span className="text-xs text-white/80">per month</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="mt-2 text-lg font-semibold text-slate-900 truncate">
              {item.title}
            </p>

            <p className="text-sm text-slate-500 mb-8">
              {item.location}
            </p>

            {/* Meta */}
            <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
              <span>{item.beds} 🛏</span>
              <span>{item.baths} 🛁</span>
              <span>{item.area}</span>
            </div>

            {/* Furnishing */}
            <span className="inline-block mt-3 text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded">
              Fully Furnished
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default PropertyCardList;
