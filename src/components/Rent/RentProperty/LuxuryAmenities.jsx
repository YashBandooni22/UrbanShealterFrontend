import React from "react";
import { FaSwimmingPool, FaDumbbell, FaWifi, FaHome, FaConciergeBell, FaFilm, FaGamepad, FaChild, FaGlassCheers, FaSpa } from "react-icons/fa";
import { GiSecurityGate, GiRunningShoe, GiBarbecue, GiTreehouse } from "react-icons/gi";

// Amenity data
const amenitiesData = {
  indoor: [
    { name: "Fitness Center", icon: <FaDumbbell /> },
    { name: "High-Speed WiFi", icon: <FaWifi /> },
    { name: "Central AC", icon: <FaHome /> },
    { name: "Power Backup", icon: <FaHome /> },
    { name: "Concierge Service", icon: <FaConciergeBell /> },
    { name: "Home Theatre", icon: <FaFilm /> },
    { name: "Indoor Games", icon: <FaGamepad /> },
    { name: "Kids Play Area", icon: <FaChild /> },
    { name: "Party Hall", icon: <FaGlassCheers /> },
    { name: "Spa & Salon", icon: <FaSpa /> },
  ],
  outdoor: [
    { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    { name: "Landscaped Garden", icon: <GiTreehouse /> },
    { name: "Covered Parking", icon: <FaHome /> },
    { name: "24/7 Security", icon: <GiSecurityGate /> },
    { name: "CCTV Surveillance", icon: <GiSecurityGate /> },
    { name: "Cycling Track", icon: <GiRunningShoe /> },
    { name: "Outdoor Lounge", icon: <FaGlassCheers /> },
    { name: "Amphitheatre", icon: <GiTreehouse /> },
    { name: "BBQ Area", icon: <GiBarbecue /> },
    { name: "Jogging Track", icon: <GiRunningShoe /> },
  ],
};

// Reusable Amenity Card
const AmenityCard = ({ icon, name }) => (
  <div className="flex flex-col items-start justify-center p-4  cursor-pointer">
    <div className="text-gray-100 text-3xl mb-2 p-4 hover:border  hover:border-gray-700">{icon}</div>
    <p className="text-gray-800 font-semibold text-center text-sm">{name}</p>
  </div>
);

const LuxuryAmenities = () => {
  return (
    <section className="px-10 py-16 max-w-full] mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-5xl">Luxury Amenities</h3>
        <div className="w-20 h-0.5 bg-gray-800 mx-auto mt-8"></div>
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        {/* Indoor */}
        <div className="border border-gray-200  p-8">
          <h4 className="text-sm text-gray-400 uppercase mb-6 tracking-wide">Indoor Curations</h4>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {amenitiesData.indoor.map((item, index) => (
              <AmenityCard key={index} icon={item.icon} name={item.name} />
            ))}
          </div>
        </div>

        {/* Outdoor */}
        <div className="border border-gray-200  p-8">
          <h4 className="text-sm text-gray-400 uppercase mb-6 tracking-wide">Outdoor Experiences</h4>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {amenitiesData.outdoor.map((item, index) => (
              <AmenityCard key={index} icon={item.icon} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryAmenities;
