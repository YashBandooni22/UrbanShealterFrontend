import React from "react";
import { FiBarChart2, FiStar } from "react-icons/fi";

const OverView = () => {
  return (
    <div className="w-full p-12 bg-gray-50 min-h-screen" style={{ fontFamily: "Montserrat, sans-serif" }}>

      {/* HEADER */}
      <div className="flex items-start justify-between mb-25">
        <div className="font-normal">
          <p className="text-xs tracking-widest text-green-600 mb-2">
            THE OVERVIEW
          </p>
          <h3 className="text-4xl  mb-3">
            Welcome back, Rajesh Kumar
          </h3>
          <p className="text-xs tracking-widest text-gray-400 max-w-xl">
            YOUR LUXURY RESIDENCY PORTFOLIO IS MAINTAINED WITH CINEMATIC PRECISION.
          </p>
        </div>

        {/* PROFILE */}
        <div className="relative w-14 h-14 bg-slate-900 text-white flex items-center justify-center text-lg">
          R
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        </div>
      </div>


      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10" >

        {/* PERFORMANCE CARD */}
        <div className="xl:col-span-2 bg-white p-10 shadow-sm border border-gray-100 group">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-xs tracking-widest text-gray-700 mb-2">
                THE PULSE
              </p>
              <h2 className="text-2xl text-gray-500 font-normal">
                Performance Index
              </h2>
            </div>

            <div className="w-10 h-10 bg-gray-100 text-gray-400 flex items-center justify-center 
                    group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <FiBarChart2 size={18} />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Metric 1 */}
            <div>
              <p className="text-xs tracking-widest text-gray-400 mb-2">
                TOTAL VIEWS
              </p>
              <h3 className="text-5xl mb-2">1,234</h3>
              <p className="text-xs text-green-600 tracking-widest">
                ↑ +24% REACH
              </p>
            </div>

            {/* Metric 2 */}
            <div>
              <p className="text-xs tracking-widest text-gray-400 mb-2">
                ENGAGED TIME
              </p>
              <h3 className="text-5xl mb-2">847</h3>
              <p className="text-xs text-gray-400 tracking-widest">
                MINUTES LIVE
              </p>
            </div>

            {/* Metric 3 */}
            <div>
              <p className="text-xs tracking-widest text-gray-400 mb-2">
                DIRECT LEADS
              </p>
              <h3 className="text-5xl  mb-2">47</h3>
              <p className="text-xs text-green-600 tracking-widest">
                ↑ +18% MOMENTUM
              </p>
            </div>
          </div>
        </div>

        {/* STATUS CARD */}
        <div className="bg-slate-900 text-white p-10 relative overflow-hidden shadow-2xl">
          <p className="text-xs tracking-widest text-green-500 mb-4">
            THE STATUS
          </p>

          <div className="flex items-start justify-between mb-6">
            <h3 className="text-3xl ">
              Professional
            </h3>
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center bg-gray-800">
              <FiStar className="text-green-500 " />
            </div>
          </div>

          <span className="inline-block px-4 py-1 text-xs tracking-widest border bg-gray-800 border-white/20 text-gray-300 mb-8">
            PREMIUM RESIDENCY
          </span>

          <div className="space-y-6 text-sm text-gray-300">
            <div className="flex justify-between">
              <span className="tracking-widest  text-xs">CINEMATIC SLOTS</span>
              <span>17 / 25</span>
            </div>
            <div className="flex justify-between">
              <span className="tracking-widest  text-xs">VAULT ACCESS</span>
              <span>143 DAYS</span>
            </div>
          </div>

          <button className="mt-10 w-full bg-white text-slate-900 py-3 text-xs tracking-widest hover:bg-gray-100 transition">
            UPGRADE ACCESS
          </button>
        </div>
      </div>
      {/* SECONDARY STATS */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

        {/* Card 1 */}
        <div className="bg-white p-8 shadow-sm border border-gray-100 group cursor-pointer transition-transform duration-200 hover:scale-105">
          <div className="w-10 h-10 mb-6 bg-gray-200 flex 
                  group-hover:bg-slate-900 transition-colors duration-200" />
          <h3 className="text-4xl  mb-3">24</h3>
          <p className="text-xs tracking-widest text-gray-400">
            TOTAL POSTS
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 shadow-sm border border-gray-100 group cursor-pointer transition-transform duration-200 hover:scale-105">
          <div className="w-10 h-10 mb-6 bg-gray-200 flex 
                  group-hover:bg-slate-900 transition-colors duration-200" />
          <h3 className="text-4xl mb-3">12,847</h3>
          <p className="text-xs tracking-widest text-gray-400">
            TOTAL VIEWS
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 shadow-sm border border-gray-100 group cursor-pointer transition-transform duration-200 hover:scale-105">
          <div className="w-10 h-10 mb-6 bg-gray-200 flex 
                  group-hover:bg-slate-900 transition-colors duration-200" />
          <h3 className="text-4xl mb-3">156</h3>
          <p className="text-xs tracking-widest text-gray-400">
            TOTAL INCOMING CALLS
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 shadow-sm border border-gray-100 group cursor-pointer transition-transform duration-200 hover:scale-105">
          <div className="w-10 h-10 mb-6 bg-gray-200 flex 
                  group-hover:bg-slate-900 transition-colors duration-200" />
          <h3 className="text-4xl mb-3">89</h3>
          <p className="text-xs tracking-widest text-gray-400">
            TOTAL WHATSAPP LEADS
          </p>
        </div>

      </div>

    </div >
  );
};

export default OverView;
