import React from "react";
import { FaRupeeSign, FaBuilding, FaBed, FaBath, FaRulerCombined, FaArrowUp, FaLayerGroup, FaCar, FaCouch, FaCalendarAlt, FaClipboardCheck, FaHome } from "react-icons/fa";

const propertyInfo = [
  { icon: <FaRupeeSign className="text-gray-300 w-5 h-5" />, label: "ASKING PRICE", value: "₹2.85 Cr" },
  { icon: <FaBuilding className="text-gray-300 w-5 h-5" />, label: "PER SQ.FT", value: "₹33,500" },
  { icon: <FaBed className="text-gray-300 w-5 h-5" />, label: "CONFIGURATION", value: "3 BHK" },
  { icon: <FaBath className="text-gray-300 w-5 h-5" />, label: "BATHROOMS", value: "2 Units" },
  { icon: <FaRulerCombined className="text-gray-300 w-5 h-5" />, label: "CARPET AREA", value: "850 sq.ft" },
  { icon: <FaArrowUp className="text-gray-300 w-5 h-5" />, label: "DIRECTION", value: "North" },
  { icon: <FaLayerGroup className="text-gray-300 w-5 h-5" />, label: "LEVEL", value: "12th of 25" },
  { icon: <FaCar className="text-gray-300 w-5 h-5" />, label: "PARKING", value: "2 Covered" },
  { icon: <FaCouch className="text-gray-300 w-5 h-5" />, label: "CONDITION", value: "Semi-Furnished" },
  { icon: <FaCalendarAlt className="text-gray-300 w-5 h-5" />, label: "PROPERTY AGE", value: "3 Years" },
  { icon: <FaClipboardCheck className="text-gray-300 w-5 h-5" />, label: "STATUS", value: "Ready to Move" },
  { icon: <FaHome className="text-gray-300 w-5 h-5" />, label: "CATEGORY", value: "Apartment" },
];

const PropertyOverviewHeader = () => (
  <div className="my-8">
    <h3 className="text-4xl font-large mb-4">Property Overview</h3>
    <p className="text-xs text-gray-900 tracking-wide uppercase">
      Andheri East, Mumbai &bull; Maharashtra
    </p>
  </div>
);

const PropertyInfoGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-8 mb-16 ">
    {propertyInfo.map((item, idx) => (
      <div
        key={idx}
        className="
          flex flex-col gap-1
          p-5
          border border-transparent
          transition
          hover:border-neutral-200
          hover:bg-neutral-50
        "
      >
        <div className="mb-2">{item.icon}</div>

        <p className="text-[10px] tracking-widest text-neutral-400 uppercase">
          {item.label}
        </p>

        <p className="text-sm font-semibold text-neutral-900">
          {item.value}
        </p>
      </div>
    ))}
  </div>
);


const PropertyDescription = () => (
  <div className="space-y-4 max-w-4xl">
    <h3 className="text-xl font-large">Sophisticated Urban Living</h3>
    <p className="text-gray-700 leading-relaxed">
      Discover an unparalleled living experience at Kandla Silicon Valley, a premier residential
      landmark situated in the highly coveted district of Andheri East. This meticulously designed
      3 BHK residence combines modern architectural finesse with functional luxury, offering
      expansive living spaces that invite natural light and provide panoramic urban vistas.
    </p>
    <p className="text-gray-700 leading-relaxed">
      The property is characterized by its superior build quality and high-end finishes throughout.
      Residents benefit from a strategic location that ensures seamless connectivity to Mumbai's
      primary business hubs, international airports, and elite educational institutions. Every
      detail has been considered to offer a sanctuary of comfort and prestige in one of the city's
      most dynamic neighborhoods.
    </p>
  </div>
);

const PropertyOverview = () => (
  <div className="max-w-8xl py-8 px-8">
    <PropertyOverviewHeader />
    <PropertyInfoGrid />
    <PropertyDescription />
  </div>
);

export default PropertyOverview;
