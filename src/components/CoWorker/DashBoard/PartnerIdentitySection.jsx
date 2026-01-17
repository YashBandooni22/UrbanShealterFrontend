import React from "react";
import { FiUser } from "react-icons/fi";

const PartnerIdentitySection = ({ form, onChange, Field }) => {
  return (
    <div className="group bg-white border border-gray-300 p-10 w-full max-w-4xl mt-12 transition-colors duration-200 hover:border-gray-900">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded bg-gray-300 text-white transition-colors duration-200 group-hover:bg-green-500">
          <FiUser size={20} />
        </div>

        <div>
          <p className="text-xs font-bold text-gray-900 uppercase">
            Partner Identity
          </p>
          <p className="text-sm text-gray-500">Personal Details</p>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field
          label="Full Name"
          value={form.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          placeholder="Enter full name"
        />
        <Field
          label="Email Address"
          value={form.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="Enter email"
        />
        <Field
          label="Phone Number"
          value={form.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Enter phone number"
        />
        <Field
          label="Location"
          value={form.location}
          onChange={(e) => onChange("location", e.target.value)}
          placeholder="Enter city/state"
        />
      </div>

      {/* Save */}
      <div className="flex justify-end mt-10">
        <button className="bg-gray-900 text-white px-8 py-3 text-xs tracking-widest uppercase">
          Save Updates
        </button>
      </div>
    </div>
  );
};

export default PartnerIdentitySection;
