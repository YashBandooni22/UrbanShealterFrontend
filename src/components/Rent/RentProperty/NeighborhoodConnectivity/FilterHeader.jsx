import React from 'react'

const FilterHeader = () => {
  return (
    <div className="py-8 pb-6">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">
        Urban Intelligence
      </p>

      <h2 className="text-4xl font-serif leading-tight text-neutral-900 mb-4">
        Neighborhood <br /> & Connectivity
      </h2>

      <p className="text-sm text-neutral-600 leading-relaxed">
        A curated map of essential landmarks and lifestyle destinations
        surrounding your future residence.
      </p>
    </div>
  );
};


export default FilterHeader;