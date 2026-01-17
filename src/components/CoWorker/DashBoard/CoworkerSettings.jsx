import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import DangerZone from "./DangerZone ";
import ConciergePayouts from "./ConciergePayouts ";
import PartnerIdentitySection from "./PartnerIdentitySection";

/* ------------------ Reusable Input Field ------------------ */
const Field = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="text-[10px] tracking-widest text-gray-400 uppercase mb-2 block">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none"
    />
  </div>
);

/* ------------------ Read-only Display Field ------------------ */


/* ------------------ Main Component ------------------ */
const CoworkerSettings = () => {
  const [form, setForm] = useState({
    fullName: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
  });

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white min-h-screen p-15 flex flex-col items-center gap-12 max-w-7xl">
      {/* ================= SETTINGS CARD ================= */}
      <div className="bg-white w-full ">
        {/* Header */}
        <div className="mb-15">
          <h3 className="text-4xl font-serif text-gray-900">Settings</h3>
          <p className="text-sm text-gray-400 uppercase mt-2">
            Manage your co-worker account preferences
          </p>
        </div>

        {/* Identity */}
        <PartnerIdentitySection
          form={form}
          onChange={handleChange}
          Field={Field}
        />

        <ConciergePayouts />

        <DangerZone />

      </div>
    </div>
  );
};

export default CoworkerSettings;
