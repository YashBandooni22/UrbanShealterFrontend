import React, { useState } from 'react'

const AccountSettings = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState("Rajesh Kumar");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [company, setCompany] = useState("Kumar Properties");
  const [location, setLocation] = useState("Mumbai, Maharashtra");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-gray-50"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >

      {/* Profile Section */}
      <div className="bg-white mb-12">
        <div className="flex items-start gap-8 shadow-sm p-10">

          {/* Avatar */}
          <div className="relative">
            <div className="w-36 h-36 bg-neutral-900 text-white flex items-center justify-center text-5xl rounded shadow-xl">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                "R"
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] text-green-600 mb-3">
              REGISTRY PHOTO
            </p>

            <h3 className="text-2xl  text-neutral-900 mb-1">
              Profile Image
            </h3>

            <p className="text-sm text-neutral-400 max-w-xl mb-4 leading-relaxed">
              Upload a professional portrait to verify your identity across the platform.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <label className="cursor-pointer bg-neutral-900 hover:bg-green-700 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase transition shadow-xl " style={{ fontFamily: "Montserrat, sans-serif" }}
>
                Update Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              <button className="px-8 py-4 border border-neutral-200 text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-700 transition hover:border-2 hover:border-gray-400 tracking-[0.2em]">
                Remove
              </button>
            </div>
          </div>

        </div>


        {/* Personal Information */}
        <div className="bg-white  shadow-md p-6 mt-10">
          <h2 className="text-green-600 text-xs uppercase tracking-wider mb-6">
            Account Profile
          </h2>
          <p className="text-lg font-medium mb-8">Personal Information</p>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="text-xs text-gray-400 uppercase mb-1 block">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-200 text-gray-500 rounded p-2 focus:outline-none focus:ring-1 focus:border-gray-100"
              />
            </div>

            {/* Email (read-only) */}
            <div>
              <label className="text-xs text-gray-400 uppercase mb-1 block">Email Address</label>
              <input
                type="email"
                value="rajesh.kumar@email.com"
                readOnly
                className="w-full border block bg-gray-50 border-gray-200 text-gray-400 rounded p-2 focus:outline-none focus:ring-1 focus:border-gray-100"
              />
              <p className="text-xs text-green-600 mt-1">Verified residency email cannot be changed</p>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-xs text-gray-400 uppercase mb-1 block">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-200 text-gray-500 rounded p-2 focus:outline-none focus:ring-1 focus:border-gray-100" />
            </div>

            {/* Company */}
            <div>
              <label className="text-xs text-gray-400 uppercase mb-1 block">Agency / Company Name</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border border-gray-200 text-gray-500 rounded p-2 focus:outline-none focus:ring-1 focus:border-gray-100" />
            </div>

            {/* Location */}
            <div>
              <label className="text-xs text-gray-400 uppercase mb-1 block">Primary Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-200 text-gray-500 rounded p-2 focus:outline-none focus:ring-1 focus:border-gray-100" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4 text-xs tracking-[0.3em] font-semibold ">
            <button className="px-10 py-4 bg-black hover:bg-green-700 text-white rounded uppercase transition">
              Save Profile Changes
            </button>
            <button className="px-10 py-4 hover:border rounded text-gray-500 uppercase">Discard</button>
          </div>
        </div>
      </div>
    </div >
  );
};
export default AccountSettings