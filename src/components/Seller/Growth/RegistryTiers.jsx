import React from 'react';

const RegistryTiers = () => {
  const currentIndex = 7500;
  const maxIndex = 15000;
  const progress = (currentIndex / maxIndex) * 100;

  return (
    <div className="px-8 py-10 bg-gray-50">
      {/* Section Header */}
      <p className="text-xs uppercase tracking-[0.35em] text-green-600 mb-4">
        The Ascent
      </p>

      <h1 className="text-5xl font-serif mb-4">Registry Tiers</h1>

      <p className="text-gray-400 uppercase tracking-widest text-sm max-w-2xl mb-14">
        Elevate your residency collection through platform momentum and
        unlock cinematic intelligence modules.
      </p>

      {/* Tier Card */}
      <div className="bg-white rounded-xl shadow-sm p-10 max-w-6xl">
        {/* Top Row */}
        <div className="flex justify-between items-center">
          {/* Left */}
          <div className="flex items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 bg-[#131B2B] flex items-center justify-center rounded">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#22c55e"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M8 21h8M12 17v4M7 4h10v3a5 5 0 0 1-10 0V4z" />
              </svg>
            </div>

            {/* Text */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-green-600 mb-1">
                Active Tier
              </p>
              <h2 className="text-4xl font-serif mb-1">Tier 2</h2>
              <p className="text-gray-400 uppercase tracking-widest text-xs">
                Established Residency Partner
              </p>
            </div>
          </div>

          {/* Right Metric */}
          <div className="bg-white  px-10 py-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
              Momentum Index
            </p>
            <p className="text-5xl font-serif">
              {currentIndex.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20"></div>

        {/* Progress Section */}
        <div>
          <div className="flex justify-between items-center mb-3 w-[80%]">
            <p className="text-xs uppercase tracking-widest text-gray-900">
              Journey to Tier 3
            </p>
            <p className="text-xs uppercase tracking-widest text-green-600">
              {currentIndex.toLocaleString()} / {maxIndex.toLocaleString()} INDEX
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-[80%] h-1.5 bg-gray-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-green-600"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-xs uppercase tracking-widest text-gray-400">
            {(maxIndex - currentIndex).toLocaleString()} points remaining to reach tier 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistryTiers;
