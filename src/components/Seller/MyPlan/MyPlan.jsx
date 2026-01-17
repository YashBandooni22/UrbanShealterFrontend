import React from 'react';
import PlanBuilder from './PlanBuilder';

const MyPlan = () => {
  return (
    <div className="bg-white px-8 py-8"
          style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-green-600 mb-4">
          Pricing Plans
        </p>

        <h1 className="text-4xl font-serif mb-4">
          Choose Your Plan
        </h1>

        <p className="text-gray-400 uppercase tracking-widest text-sm max-w-3xl">
          Start with our introductory trial, then build a custom plan that fits your property portfolio.
        </p>
      </div>

      <div className="my-10 border-t border-gray-200 h-px"></div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr_2fr_1fr] gap-10">

        {/* LEFT — STARTER PLAN */}
        <div className="bg-white p-8 rounded-xl ">
          {/* Badge */}
          <div className="inline-flex mb-8">
            <span className="bg-[#131B2B] text-white text-xs px-8 py-2 uppercase tracking-widest">
              Starter Plan
            </span>
            <span className="bg-green-600 text-white text-xs px-8 py-2 uppercase tracking-widest">
              Start Here
            </span>
          </div>

          {/* Price */}
          <div className='flex items-end gap-2 '>
            <h2 className="text-5xl font-serif mb-2">₹49</h2>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              One-Time Fee
            </p>
          </div>


          <p className="text-sm text-gray-600 mb-6 mt-6">
            Try with a single listing.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-sm mb-10">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              1 Property Video
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              60s Duration
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              15 Days Visibility
            </li>
          </ul>

          {/* Status */}
          <div className="bg-gray-100 text-gray-400 text-xs uppercase tracking-widest py-3 text-center rounded">
            Active ✓
          </div>
        </div>

        <PlanBuilder />
      </div>
    </div>
  );
};

export default MyPlan;
