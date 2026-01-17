import React from "react";
import ProtocolCard from "./ProtocolCard ";

const Verification = () => {
  return (
    <div className="min-h-screen bg-white px-20 py-16">
      {/* PAGE HEADER */}
      <section className="max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-green-600 mb-4">
          Partner Validation
        </p>

        <h1 className="font-serif text-5xl text-black mb-6">
          Identity Registry
        </h1>

        <p className="max-w-3xl text-sm uppercase tracking-widest text-gray-400 leading-relaxed">
          Execute the mandatory validation protocols to authenticate your
          residency partner status and unlock the intelligence suite.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="my-16 h-px bg-gray-100" />

      {/* VALIDATION MOMENTUM CARD */}
      <section className="max-w-6xl bg-emerald-50/40 rounded-lg px-14 py-12">
        {/* HEADER ROW */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl text-black mb-2">
              Validation Momentum
            </h2>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Registry Completion Index
            </p>
          </div>

          <p className="text-xs uppercase tracking-widest text-gray-700">
            2 / 5 Protocols Executed
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full  bg-gray-200 rounded-full overflow-hidden mb-6">
          <div
            className="h-[5px] bg-green-600 "
            style={{ width: "40%" }}
          />
        </div>

        {/* FOOTER NOTE */}
        <p className="text-xs uppercase tracking-widest text-gray-400">
          60% Momentum Required to Finalize Registry Status
        </p>
      </section>

      {/* NEXT SECTION PLACEHOLDER */}
      <section className="max-w-6xl mt-24">
        <h3 className="text-lg text-black uppercase tracking-wider">
          Validation Protocol Sequence
        </h3>
      </section>

      <section className="max-w-6xl mt-14">

        <ProtocolCard
          index="1"
          title="Phone Verification"
          description="Verify your mobile number via OTP"
          status="authenticated"
        />

        <ProtocolCard
          index="2"
          title="Email Verification"
          description="Confirm your email address"
          status="authenticated"
        />

        <ProtocolCard
          index="3"
          title="ID Document Upload"
          description="Upload Aadhaar, PAN, or Driving License"
          status="under_review"
        />

        <ProtocolCard
          index="4"
          title="Bank Details"
          description="Add bank account for transactions"
          status="pending"
        />

        <ProtocolCard
          index="5"
          title="Business Information"
          description="Provide business type and registration"
          status="pending"
        />

      </section>

      {/* REGISTRY PRIVILEGES */}
      <section className="max-w-6xl mt-12 ">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg px-16 py-14 shadow-xl">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-serif text-2xl text-white">
              Registry Privileges
            </h3>
            <div className="flex-1 h-px bg-white/10" />

            <span className="text-xs uppercase tracking-widest text-gray-400">
              Partner Advantages
            </span>
          </div>

          <div className="h-px bg-white/10 mb-6" />

          {/* PRIVILEGES GRID */}
          <div className="grid grid-cols-2 gap-x-20 gap-y-8">
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <p className="text-sm uppercase tracking-widest text-gray-300 leading-relaxed">
                Unlock unlimited residency portfolio postings
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <p className="text-sm uppercase tracking-widest text-gray-300 leading-relaxed">
                Access premium cinematic analytics & intelligence
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <p className="text-sm uppercase tracking-widest text-gray-300 leading-relaxed">
                Enhanced trust index and ascent visibility
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <p className="text-sm uppercase tracking-widest text-gray-300 leading-relaxed">
                Seamless investment vault interactions
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Verification;
