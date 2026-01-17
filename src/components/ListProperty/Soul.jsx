import React, { useState } from "react";

const horizonOptions = [
    "City Skyline",
    "Sea View",
    "Garden / Park",
    "Pool View",
    "Main Road",
    "Clubhouse",
    "Hill View",
    "Open Green",
];

const luxuries = [
    "Pool",
    "Gym",
    "Garden",
    "Security",
    "Parking",
    "Vaastu",
    "Fiber",
    "Club",
    "Backup",
    "24/7 Water",
    "Intercom",
    "Lift",
];

const Soul = () => {
    const [selectedViews, setSelectedViews] = useState([]);
    const [selectedLuxuries, setSelectedLuxuries] = useState([]);

    const toggle = (item, state, setState) => {
        setState((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    return (
        <section className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 ">

                {/* Heading */}
                <div className="mb-24">
                    <h1 className="text-4xl font-serif text-gray-900 mb-4">
                        The Soul
                    </h1>
                    <p className="text-gray-400 max-w-lg">
                        Every detail that makes your home unique.
                    </p>
                </div>

                {/* Story + Horizon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">

                    {/* Story */}
                    <div>
                        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
                            The Story (Description)
                        </p>
                        <textarea
                            rows={10}
                            placeholder="Describe the cinematic views, the morning light, and the lifestyle this home offers..."
                            className="w-full border border-gray-200 p-6 text-sm resize-none focus:outline-none focus:border-gray-900 placeholder-gray-300"
                        />
                    </div>

                    {/* Horizon */}
                    <div>
                        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
                            The Horizon (Views)
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {horizonOptions.map((item) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        toggle(item, selectedViews, setSelectedViews)
                                    }
                                    className={`py-3 border text-xs tracking-widest uppercase transition
                    ${selectedViews.includes(item)
                                            ? "border-gray-900 text-gray-900"
                                            : "border-gray-200 text-gray-400 hover:border-gray-900 hover:text-gray-900"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Luxuries */}
                <div className="mb-32">
                    <div className="flex justify-between mb-10">
                        <p className="text-xs tracking-widest uppercase text-gray-400">
                            The Luxuries & Utilities
                        </p>
                        <span className="text-xs tracking-widest uppercase text-green-600">
                            Select all that apply
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                        {luxuries.map((item) => (
                            <button
                                key={item}
                                onClick={() =>
                                    toggle(item, selectedLuxuries, setSelectedLuxuries)

                                }
                                className={`h-22 border flex items-center justify-center text-xs tracking-widest uppercase transition
                  ${selectedLuxuries.includes(item)
                                        ? "bg-black text-white border-gray-900 text-[8px]"
                                        : " border-gray-200 text-gray-400 hover:border-gray-900 hover:text-gray-900"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Signature */}
                <div className="mb-24">
                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-10">
                        My Signature (Contact)
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                        <input
                            type="text"
                            placeholder="My Full Name"
                            className="w-full border-b border-gray-200 pb-4 focus:outline-none focus:border-gray-900 placeholder-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="My Phone Number"
                            className="w-full border-b border-gray-200 pb-4 focus:outline-none focus:border-gray-900 placeholder-gray-300"
                        />
                    </div>

                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-10">
                        Digital Presence (Optional)
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
                        <input
                            type="text"
                            placeholder="My Website (e.g. www.studio.com)"
                            className="w-full border-b border-gray-200 pb-4 focus:outline-none focus:border-gray-900 placeholder-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Instagram Handle (e.g. @urban.living)"
                            className="w-full border-b border-gray-200 pb-4 focus:outline-none focus:border-gray-900 placeholder-gray-300"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="LinkedIn Profile URL"
                        className="w-full border-b border-gray-200 pb-4 focus:outline-none focus:border-gray-900 placeholder-gray-300 mb-10"
                    />

                    <label className="flex items-center gap-4 text-xs tracking-widest uppercase text-gray-400">
                        <input type="checkbox" className="w-4 h-4" />
                        Remember my signature for later
                    </label>
                </div>
            </div>
        </section>
    );
};

export default Soul;
