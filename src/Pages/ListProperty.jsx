import React from 'react';
import { Link } from 'react-router';

const ListProperty = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12" style={{ fontFamily: "Montserrat, sans-serif" }}>
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-[35px]  text-gray-900 mb-3">Share Your Home</h3>
        <p className="text-gray-700 text-lg">
          How would you like to introduce your home?
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Fast Track Card */}
        <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:border-black transition duration-300">
          <div className="flex items-center mb-4">
            <img src="" alt="" className="w-12 h-12 mr-6" />
            <h3 className="text-2xl text-gray-900 ">The Fast Track</h3>
          </div>

          <div className="flex items-center space-x-6 text-gray-400 text-sm mb-4">
            <p>⏱ 5 Mins</p>
            <p>🗂 2 Parts</p>
          </div>

          <p className="text-gray-500 mb-6 text-sm ">
            Essentials only. Perfect for seeing interest fast.
          </p>

          <ul className="list-disc list-inside text-gray-500 mb-2 space-y-1 p-4">
            <ol className='text-gray-400 text-sm mb-3'>Vital home details</ol>
            <ol className='text-gray-400 text-sm mb-3'>Videos & Photos</ol>
            <ol className='text-gray-400 text-sm mb-3'>Pricing & Value</ol>
            <ol className='text-gray-400 text-sm mb-3'>How to contact you</ol>
          </ul>

          <Link to={"/fast-track"} className="w-full flex border border-gray-900 text-gray-900 py-5 rounded-lg hover:bg-gray-900 hover:text-white transition text-xs items-center justify-center gap-2  uppercase">
            Start The Fast Track
          </Link>
        </div>

        {/* Complete Story Card */}
        <div className="border rounded-xl p-5 transition duration-300 relative
                shadow-[0_8px_16px_rgba(0,0,0,0.12)] 
                hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]">

          {/* Recommended Tag */}
          <span className="absolute top-1 right-1 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
            RECOMMENDED
          </span>

          <div className="flex items-center mb-4">
            <img src="" alt="" className="w-12 h-12 mr-6" />
            <h3 className="text-2xl  text-gray-900">The Complete Story</h3>
          </div>

          <div className="flex items-center space-x-6 text-gray-400 text-sm mb-4">
            <p>⏱ 15 Mins</p>
            <p>🗂 3 Parts</p>
          </div>

          <p className="text-gray-500 mb-4 text-sm">
            Every detail and luxury amenity for maximum impact.
          </p>

          <ul className="list-disc list-inside text-gray-500 mb-4 space-y-1 p-4">
            <ol className="font-semibold text-sm mb-3">Everything in Fast Track</ol>
            <ol className='text-gray-400 text-sm mb-3'>Detailed specifications</ol>
            <ol className='text-gray-400 text-sm mb-3'>Amenities & Extras</ol>
            <ol className='text-gray-400 text-sm mb-3'>Local secrets & Places</ol>
          </ul>

          <Link to={"/complete-story"} className="w-full bg-gray-900 text-white py-5 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 text-xs uppercase mt-2">
            Start The Story
          </Link>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <p className="text-gray-400 uppercase text-xs">
          You can always add more to your story later.
        </p>
      </div>
    </div>
  );
};

export default ListProperty;
