// MyCollection/TheFullList.js
import React from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "../../assets/assest.js"; 

const TheFullList = () => (
  <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
    {properties.map((p) => (
      <PropertyCard key={p.id} property={p} />
    ))}
  </div>
);

export default TheFullList;
