import React, { useState } from "react";
import { useNavigate } from "react-router";

const PartnerApplyCard = () => {
  const [activeTab, setActiveTab] = useState("apply");
  const navigate = useNavigate()

  return (
    <div className="border border-gray-400 bg-white p-8 w-full max-w-xl ml-auto">
      
      {/* Title */}
      <h2 className="font-serif text-2xl mb-10 text-gray-900">
        Get started
      </h2>

      {/* Tabs */}
      <div className="flex mb-12 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("apply")}
          className={`w-1/2 text-sm pb-3 ${
            activeTab === "apply"
              ? "text-gray-900 border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Apply
        </button>

        <button
          onClick={() => setActiveTab("login")}
          className={`w-1/2 text-sm pb-3 ${
            activeTab === "login"
              ? "text-gray-900 border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Login
        </button>
      </div>

      {/* APPLY FORM */}
      {activeTab === "apply" && (
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="City, State"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 text-sm  mt-4 hover:bg-green-700 "
            onClick={()=>navigate("/coworker/dashboard")}
          >
            Apply Now
          </button>

          <p className="text-xs text-gray-400 text-center mt-6">
            Minimum 50+ network connections required
          </p>
        </form>
      )}

      {/* LOGIN FORM */}
      {activeTab === "login" && (
        <form className="space-y-8">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Partner ID
            </label>
            <input
              type="text"
              placeholder="Enter your ID"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Passcode
            </label>
            <input
              type="password"
              placeholder="Enter passcode"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 text-sm font-medium mt-12"
          >
            Sign In
          </button>

          <div className="text-center">
            <button
              type="button"
              className="text-sm text-gray-500 underline"
            >
              Forgot credentials?
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PartnerApplyCard;
