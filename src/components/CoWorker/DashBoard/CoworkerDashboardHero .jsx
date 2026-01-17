import React from "react";
import { FiArrowUpRight, FiCreditCard } from "react-icons/fi";

const CoworkerDashboardHero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* GREETING */}
        <div className="mb-12">
          <h3 className=" text-[35px] leading-tight text-gray-900 mb-2 font-bold">
            Good to see you, Rajesh
          </h3>
          <p className="text-sm text-gray-500">
            Helping us since Jan 2025
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Sellers Paid */}
          <div className="border border-gray-200 bg-white p-8 shadow-sm hover:border hover:border-gray-500">
            <div className="flex justify-between items-start mb-8">
              <p className="text-xs tracking-widest uppercase text-gray-400">
                Sellers Paid
              </p>
              <span className="w-2 h-2 bg-gray-900 rounded-full" />
            </div>

            <h2 className="text-5xl text-gray-400 mb-2">4</h2>
            <p className="text-xs tracking-widest uppercase text-gray-400">
              Earning you money
            </p>
          </div>

          {/* My Money */}
          <div className="border border-gray-200 bg-white p-8 shadow-sm hover:border hover:border-gray-500">
            <div className="flex justify-between items-start mb-8">
              <p className="text-xs tracking-widest uppercase text-gray-400">
                My Money
              </p>
              <FiArrowUpRight className="text-gray-400" size={16} />
            </div>

            <h2 className="text-4xl text-gray-400 mb-2">₹1,364</h2>
            <p className="text-xs tracking-widest uppercase text-gray-400">
              This quarter
            </p>
          </div>

          {/* Sellers Testing */}
          <div className="border border-gray-200 bg-white p-8 shadow-sm hover:border hover:border-gray-500">
            <div className="flex justify-between items-start mb-8">
              <p className="text-xs tracking-widest uppercase text-gray-400">
                Sellers Testing
              </p>
              <span className="w-2 h-2 bg-gray-300 rounded-full" />
            </div>

            <h2 className="text-5xl text-gray-400 mb-2">1</h2>
            <p className="text-xs tracking-widest uppercase text-gray-400">
              In free test
            </p>
          </div>

          {/* Ready to Collect */}
          <div className="border-2 border-gray-900 bg-white p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <p className="text-xs tracking-widest uppercase text-gray-900">
                Ready to collect
              </p>
              <FiCreditCard className="text-gray-900" size={16} />
            </div>

            <h2 className="text-5xl text-gray-900 mb-6">₹45,000</h2>

            <button className="w-full bg-green-600 text-white py-3 text-xs tracking-widest uppercase hover:bg-green-700 transition">
              Take now
            </button>
          </div>
        </div>

        {/* HOW AM I DOING */}
        <div className="border border-gray-200 bg-white shadow-sm p-10">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-10">
            How am I doing?
          </p>

          <div className="grid grid-cols-3">
            {/* Clicks to Test */}
            <div className="pl-10 border-l-2 border-green-600">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                Clicks to test
              </p>
              <p className="text-4xl text-gray-500 mb-2">3.05%</p>
              <p className="text-xs text-gray-400">
                38 tests from 1,247 clicks
              </p>
            </div>

            {/* Test to Paid */}
            <div className="pl-10 border-l-2 border-green-600">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                Test to paid
              </p>
              <p className="text-4xl text-gray-500 mb-2">31.6%</p>
              <p className="text-xs text-gray-400">
                12 paid from 38 tests
              </p>
            </div>

            {/* Success Score */}
            <div className="pl-10 border-l-2 border-green-600">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                Success score
              </p>
              <p className="text-4xl text-gray-500 mb-2">0.96%</p>
              <p className="text-xs text-gray-400">
                12 joined from 1,247 clicks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoworkerDashboardHero;
