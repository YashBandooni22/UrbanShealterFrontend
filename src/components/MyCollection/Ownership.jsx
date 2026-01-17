// MyCollection/Ownership.js
import React from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "../../assets/assest.js";

const Ownership = () => (
  <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {properties.filter(p => p.type === "ownership").map(p => (
      <PropertyCard key={p.id} property={p} />
    ))}
  </div>
);

export default Ownership;
