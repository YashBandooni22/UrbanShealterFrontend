import React from "react";

const Profile = () => {
    return (
        <section className="min-h-screen max-w-7xl mx-auto bg-white flex items-start">
            <div
                className="max-w-8xl px-75 py-24"
                style={{ fontFamily: "Montserrat, sans-serif" }}
            >
                {/* Header */}
                <div className="mb-14 ">
                    <h1 className="text-5xl font-serif text-gray-900 mb-4 ">
                        Edit Profile
                    </h1>
                    <p className="text-xs tracking-widest uppercase text-gray-700">
                        Personal details and identity management.
                    </p>
                </div>

                {/* Avatar */}
                <div className="flex gap-20 items-center mb-24">
                    <div className="w-40 h-40 border border-gray-200 flex items-center justify-center text-gray-300">
                        Avatar
                    </div>

                    <div>
                        <p className="text-xs tracking-widest uppercase text-gray-900 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                            Avatar Image
                        </p>
                        <p className="text-sm text-gray-400 mb-6 max-w-md">
                            Your cinematic signature across the Urban Shelter ecosystem.
                        </p>

                        <div className="flex gap-6 font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <button className="px-10 py-3 bg-gray-900 text-white text-xs tracking-widest uppercase">
                                Upload New
                            </button>
                            <button className="px-10 py-3 border border-gray-200 text-gray-400 text-xs tracking-widest uppercase">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>


                {/* Identity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
                    {/* Left */}
                    <div className="space-y-16">
                        <div>
                            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                Full Identity
                            </p>
                            <input
                                defaultValue="Rajesh Kumar"
                                className="w-full border-b border-gray-200 pb-4 focus:outline-none"
                            />
                        </div>

                        <div>
                            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                Digital Address
                            </p>
                            <input
                                defaultValue="rajesh.kumar@email.com"
                                className="w-full border-b border-gray-200 pb-4 focus:outline-none"
                            />
                        </div>

                        <div>
                            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                Current City
                            </p>
                            <input
                                defaultValue="Mumbai"
                                className="w-full border-b border-gray-200 pb-4 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-16">
                        <div>
                            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                Professional Role
                            </p>
                            <input
                                defaultValue="Investment Portfolio Manager"
                                className="w-full border-b border-gray-200 pb-4 focus:outline-none"
                            />
                        </div>

                        <div>
                            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                Mobile Pulse
                            </p>
                            <input
                                defaultValue="+91 98765 43210"
                                className="w-full border-b border-gray-200 pb-4 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Narrative */}
                <div className="mb-32">
                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        The Narrative
                    </p>
                    <textarea
                        rows={6}
                        placeholder="Tell your story within the ecosystem..."
                        className="w-full border border-gray-200 p-6 text-sm focus:outline-none"
                    />
                </div>

                <div className="border-t border-gray-100 mb-20" />

                {/* Actions */}
                <div className="flex gap-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <button className="px-16 py-4 bg-green-600 text-white text-xs tracking-widest uppercase font-semibold shadow-2xl shadow-gray-600/40">
                        Save Identity
                    </button>
                    <button className="px-16 py-4 border border-gray-200 text-gray-400 text-xs tracking-widest uppercase font-semibold">
                        Discard
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Profile;
