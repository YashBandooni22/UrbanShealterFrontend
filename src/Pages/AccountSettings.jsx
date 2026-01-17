import React, { useState } from "react";

const Toggle = ({ enabled }) => {
  return (
    <div
      className={`w-10 h-5 flex items-center rounded-full transition ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
};

const SettingRow = ({ title, description, enabled, onToggle, icon }) => {
  return (
    <div
      onClick={onToggle}
      className="flex items-center justify-between 
        border border-gray-200 rounded-lg px-6 py-5 bg-white 
        cursor-pointer hover:border-gray-900 transition"
    >
      <div className="flex items-start gap-4">
        {/* Left icon */}
        <img
          src={icon}
          alt=""
          className="w-5 h-5 mt-1 opacity-70"
        />

        <div>
          <h4 className="text-sm font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
      </div>

      <div className="pointer-events-none">
        <Toggle enabled={enabled} />
      </div>
    </div>
  );
};

const AccountSettings = () => {
  const [emailPulse, setEmailPulse] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [publicIdentity, setPublicIdentity] = useState(true);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-25 py-30">

        {/* Header */}
        <div className="mb-20">
          <h3 className="text-[42px] text-gray-900">
            Account Settings
          </h3>
          <p className="text-xs tracking-widest uppercase text-gray-400 mt-4">
            Privacy, security, and notification preferences.
          </p>
        </div>

        {/* Vault Security */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/icons/shield.svg"
              alt=""
              className="w-5 h-5"
            />
            <h3
              className="text-xs font-semibold tracking-widest text-gray-900"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              VAULT SECURITY
            </h3>
          </div>

          <div className="space-y-6">
            <SettingRow
              title="Email Pulse"
              description="Receive real-time updates via email"
              enabled={emailPulse}
              onToggle={() => setEmailPulse(!emailPulse)}
              icon="/icons/email.svg"
            />

            <SettingRow
              title="Biometric Access"
              description="Secure the vault with fingerprint or face ID"
              enabled={biometric}
              onToggle={() => setBiometric(!biometric)}
              icon="/icons/fingerprint.svg"
            />

            <SettingRow
              title="Public Identity"
              description="Allow sellers to view your profile narrative"
              enabled={publicIdentity}
              onToggle={() => setPublicIdentity(!publicIdentity)}
              icon="/icons/user.svg"
            />
          </div>
        </section>

        {/* Passkey & Access History */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-30">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/icons/key.svg" alt="" className="w-5 h-5" />
              <h4
                className="text-sm font-semibold tracking-widest"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                PASSKEY MANAGEMENT
              </h4>
            </div>

            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Rotate your vault access keys or update your cinematic encryption parameters.
            </p>

            <button className="border border-gray-900 px-8 py-3 text-xs font-medium hover:bg-gray-900 hover:text-white transition">
              UPDATE KEYS
            </button>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/icons/history.svg" alt="" className="w-5 h-5" />
              <h4
                className="text-sm font-semibold tracking-widest"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                ACCESS HISTORY
              </h4>
            </div>

            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Review the narrative of your recent interactions and vault entries across devices.
            </p>

            <button className="border border-gray-200 px-8 py-3 text-xs font-medium text-gray-300 hover:text-gray-800 hover:border-gray-800">
              VIEW LOGS
            </button>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-900 mb-15" />

        {/* Delete Account */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <h4 className="text-sm font-semibold tracking-widest text-red-500">
              THE EXIT
            </h4>
          </div>

          <p className="text-sm text-gray-400 max-w-md mb-8">
            Permanently remove your identity from the Urban Shelter ecosystem.
            This action is cinematic and irreversible.
          </p>

          <button className="bg-gray-900 text-white px-10 py-4 text-xs font-semibold tracking-wide hover:bg-black transition">
            DELETE ACCOUNT
          </button>
        </section>

      </div>
    </div>
  );
};

export default AccountSettings;
