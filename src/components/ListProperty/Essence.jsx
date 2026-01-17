import React, { useState } from "react";

const Essence = () => {
  const [bathrooms, setBathrooms] = useState(null);
  const [balconies, setBalconies] = useState(null);
  const [interiorTone, setInteriorTone] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 ">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-serif mb-2 text-gray-900">
            The Essence
          </h1>
          <p className="text-gray-400 text-sm">
            The facts that ground your home in reality.
          </p>
        </div>

        {/* Area Metrics & Living Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">

          {/* Area Metrics */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              Area Metrics (sq.ft)
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-xs mb-2 uppercase">
                  Carpet Area
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1,250"
                  className="w-full border-b border-gray-200 pb-2 text-gray-900 focus:outline-none focus:border-gray-900"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-2 uppercase">
                  Super Built-up
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1,600"
                  className="w-full border-b border-gray-200 pb-2 text-gray-900 focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Living Stats */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              Living Stats
            </p>

            <div className="flex items-start gap-8">

              {/* Bathrooms */}
              <div>
                <label className="block text-gray-400 text-xs mb-2 uppercase">
                  Bathrooms
                </label>

                <div className="flex gap-3">
                  {["1", "2", "3", "4+"].map((num) => (
                    <button
                      key={num}
                      onClick={() => setBathrooms(num)}
                      className={`w-10 py-2 border text-xs uppercase transition
          ${bathrooms === num
                          ? "bg-black text-white border-black"
                          : "border-gray-200 text-gray-400"
                        }
          hover:border-black`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>


              {/* Balconies */}
              <div>
                <label className="block text-gray-400 text-xs mb-2 uppercase">
                  Balconies
                </label>

                <div className="flex gap-3">
                  {["0", "1", "2", "3+"].map((num) => (
                    <button
                      key={num}
                      onClick={() => setBalconies(num)}
                      className={`w-10 py-2 border text-xs uppercase transition
          ${balconies === num
                          ? "bg-black text-white border-black"
                          : "border-gray-200 text-gray-400"
                        }
          hover:border-black`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Elevation / Parking / Maintenance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {/* Elevation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              The Elevation
            </p>

            <div className="flex items-center gap-4">
              <input
                placeholder="Floor"
                className="w-14 border-b border-gray-200 pb-2 focus:outline-none"
              />
              <span className="text-gray-300 text-sm">of</span>
              <input
                placeholder="Total"
                className="w-16 border-b border-gray-200 pb-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Parking & Age */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              Parking & Age
            </p>

            <div className="flex gap-6">
              <select className="border-b border-gray-200 pb-2 text-gray-600 focus:outline-none">
                <option>0 Parking</option>
                <option>1 Parking</option>
                <option>2 Parking</option>
              </select>

              <select className="border-b border-gray-200 pb-2 text-gray-600 focus:outline-none">
                <option>New</option>
                <option>1–5 Years</option>
                <option>5–10 Years</option>
              </select>
            </div>
          </div>

          {/* Monthly Maintenance */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              Monthly Maintenance
            </p>

            <input
              placeholder="₹ Amount"
              className="w-full border-b border-gray-200 pb-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Interior Tone & Orientation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          {/* Interior Tone */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              Interior Tone
            </p>

            <div className="flex gap-4">
              {["RAW", "CURATED", "COMPLETE"].map((tone) => (
                <button
                  key={tone}
                  onClick={() => setInteriorTone(tone)}
                  className={`px-6 py-3 border text-xs tracking-widest uppercase transition
                    ${interiorTone === tone
                      ? "bg-black text-white border-black"
                      : "border-gray-200 text-gray-400"}
                    hover:border-gray-900 hover:text-gray-900`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          {/* Orientation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              The Orientation
            </p>

            <select className="w-full border-b border-gray-200 pb-2 focus:outline-none">
              <option>East (Vaastu Compliant)</option>
              <option>West</option>
              <option>North</option>
              <option>South</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="mb-32">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
            The Anchor (Location)
          </p>

          <input
            placeholder="Search for your address..."
            className="w-full border border-gray-200 px-4 py-4 focus:outline-none"
          />
        </div>
        {/* Map Preview */}
        <div className="mb-20">
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Mumbai&zoom=13&size=800x400&scale=2&maptype=roadmap"
            alt="Google Map Preview"
            className="w-full h-64 object-cover rounded-md border border-gray-200"
          />
        </div>

      </div>
    </div>
  );
};

export default Essence;
