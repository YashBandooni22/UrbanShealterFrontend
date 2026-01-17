import React, { useState } from "react";

const Foundation = () => {

    const [ishover, setIshover] = useState(false)

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-4">


                {/* Heading */}
                <div className="mb-16">
                    <h1 className="text-4xl font-serif mb-4 text-gray-900">
                        The Foundation
                    </h1>
                    <p className="text-gray-500 max-w-lg">
                        Set the intent, value, and identity of your home.
                    </p>
                </div>

                {/* Form Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    {/* Property Identity */}
                    <div>
                        <label className="block text-xs tracking-widest uppercase text-gray-400 mb-4">
                            Property Identity
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. The Sapphire Penthouse, Bandra"
                            className="w-full border-b border-gray-200 pb-3 focus:outline-none focus:border-gray-900 placeholder-gray-300"
                        />
                    </div>

                    {/* Legal Identity */}
                    <div>
                        <label className="block text-xs tracking-widest uppercase text-gray-400 mb-4">
                            Legal Identity (RERA ID)
                        </label>
                        <input
                            type="text"
                            placeholder="PRM/KA/RERA/..."
                            className="w-full border-b border-gray-200 pb-3 focus:outline-none focus:border-gray-900 placeholder-gray-300"
                        />
                    </div>
                </div>

                {/* Intent & Home Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">

                    {/* My Intent */}
                    <div>
                        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
                            My Intent
                        </p>

                        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                            <button className="flex-1 py-4 text-xs tracking-widest uppercase bg-white text-gray-900 border-r border-gray-200">
                                For Sale
                            </button>
                            <button className="flex-1 py-4 text-xs tracking-widest uppercase text-gray-400">
                                For Rent
                            </button>
                        </div>
                    </div>

                    {/* Home Type */}
                    <div>
                        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
                            Home Type
                        </p>

                        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                            <span className="text-gray-900">
                                Modern Apartment
                            </span>
                            <span className="text-gray-400">⌄</span>
                        </div>
                    </div>
                </div>

                {/* Price & Living Spaces */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">

                    {/* Base Price */}
                    <div>
                        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
                            Base Price (₹)
                        </p>

                        <input
                            type="text"
                            placeholder="e.g. 2,50,00,000"
                            className="w-full border-b border-gray-200 pb-4 text-2xl placeholder-gray-300 focus:outline-none focus:border-gray-900"
                        />

                        <p className="text-xs text-gray-400 mt-4">
                            * Prices for specific layouts can be set in the next step
                        </p>
                    </div>

                    {/* Living Spaces */}
                    <div>
                        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
                            Living Spaces (Select all that apply)
                        </p>

                        <div className="flex gap-3">
                            {["1", "2", "3", "4", "5+"].map((item) => (
                                <button
                                    key={item}
                                    className="w-16 py-4 border border-gray-200 text-xs text-gray-400 hover:border-gray-900 hover:text-gray-900 transition"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visuals */}
                <div className="mb-24">
                    {/* Header */}
                    <div className="flex justify-between mb-3">
                        <p className="text-xs tracking-widest uppercase text-gray-400">
                            The Visuals
                        </p>
                        <span className="text-xs tracking-widest uppercase text-green-600">
                            Compulsory
                        </span>
                    </div>

                    {/* Upload Box */}
                    <div
                        onMouseEnter={() => setIshover(true)}
                        onMouseLeave={() => setIshover(false)}
                        className={`border-2 border-dashed rounded-xl min-h-[320px]
      flex items-center justify-center transition
      ${ishover ? "border-green-600 bg-green-50" : "border-gray-400"}`}
                    >

                        <div className="text-center max-w-md p-20 ">

                            {/* Camera Icon */}
                            <div
                                className={`w-16 h-16 mx-auto mb-8 flex items-center justify-center
                                    rounded-full transition
                                    ${ishover ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                            >

                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-serif text-gray-900 mb-3">
                                The Visual Identity
                            </h3>

                            {/* Subtitle */}
                            <p
                                className={`text-xs tracking-widest uppercase mb-10 transition
                                    ${ishover ? "text-green-600" : "text-gray-400"}`}
                            >
                                Upload your 1 cinematic video and photos
                            </p>

                            {/* Button */}
                            <button
                                className={`px-10 py-3 text-xs tracking-widest uppercase mb-10 font-semibold
                                    text-white transition
                                    ${ishover ? "bg-green-600" : "bg-gray-900"}`}
                            >
                                Select My Media
                            </button>

                            {/* Footer Icons */}
                            <div
                                className={`flex items-center justify-center gap-12
                                    text-xs tracking-widest uppercase transition
                                    ${ishover ? "text-green-600" : "text-gray-400"}`}
                            >
                                <span>Cinematic</span>

                                <div
                                    className={`w-px h-4 transition
                                        ${ishover ? "bg-green-300" : "bg-gray-300"}`}
                                />
                                <span>Architectural</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Foundation;
