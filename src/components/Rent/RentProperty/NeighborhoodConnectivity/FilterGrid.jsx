import React from 'react'

const FilterGrid = ({ filters, activeFilter, onChange }) => {
  return (
    <div className="pr-4 py-2 grid grid-cols-3 gap-4">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.key;

        return (
          <button
            key={filter.key}
            onClick={() => onChange(filter.key)}
            className={`relative  px-4 py-2 text-center transition
              ${
                isActive
                  ? "bg-slate-900 text-white  "
                  : "bg-white text-neutral-600 hover:border"
              }
            `}
          >
            <div className="text-lg mb-1">{filter.icon}</div>
            <span className="text-xs tracking-widest uppercase">
              {filter.label}
            </span>

            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500" />
            )}
          </button>
        );
      })}
    </div>
  );
};


export default FilterGrid;