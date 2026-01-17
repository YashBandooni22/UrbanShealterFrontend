import React from "react";
import { FiZap } from "react-icons/fi";

const STEPS = [
  {
    step: "01",
    title: "People Clicked",
    subtitle: "Visits to our site",
    value: "1,247",
  },
  {
    step: "02",
    title: "People Joined",
    subtitle: "Created an account",
    value: "156",
    note: "12.5% success rate",
    noteColor: "text-green-600",
  },
  {
    step: "03",
    title: "People Testing",
    subtitle: "Started free test run",
    value: "38",
    note: "24.4% of signups",
    noteColor: "text-neutral-400",
  },
  {
    step: "04",
    title: "People Paying",
    subtitle: "Earning you money now",
    value: "12",
    note: "31.6% became members",
    noteColor: "text-green-600",
  },
];

const JourneyConversionPath = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 border border-gray-300 mb-10">
      {/* ================= HEADER ================= */}
      <div className="mb-12 px-4">
        <div className="flex items-center gap-3 mb-4">
          <FiZap className="text-neutral-900" />
          <p className="text-xs tracking-[0.3em] uppercase font-semibold text-neutral-900">
            Conversion Path
          </p>
        </div>

        <p className="text-sm text-neutral-400 max-w-xl">
          Watch how people move from clicking your link to becoming paid members.
        </p>
      </div>

      {/* ================= STEPS ================= */}
      <div className="space-y-10 px-4">
        {STEPS.map((item, index) => (
          <div key={item.step}>
            <div className="flex items-center justify-between">
              {/* LEFT */}
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center text-xs text-neutral-400">
                  {item.step}
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wide uppercase text-neutral-900">
                    {item.title}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-neutral-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="text-4xl font-serif text-neutral-900">
                  {item.value}
                </p>
                {item.note && (
                  <p
                    className={`text-xs tracking-widest uppercase mt-2 ${item.noteColor}`}
                  >
                    {item.note}
                  </p>
                )}
              </div>
            </div>

            {/* Divider */}
            {index !== STEPS.length - 1 && (
              <div className="mt-8 border-b border-neutral-200" />
            )}
          </div>
        ))}
      </div>

      {/* ================= FOOTER METRICS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 px-4">
        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
            Total Success
          </p>
          <p className="text-5xl font-serif text-neutral-900 mb-2">0.96%</p>
          <p className="text-xs tracking-widest uppercase text-neutral-400">
            From first click to paid member
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
            Test to Join
          </p>
          <p className="text-5xl font-serif text-neutral-900 mb-2">31.6%</p>
          <p className="text-xs tracking-widest uppercase text-neutral-400">
            From test run to paid member
          </p>
        </div>
      </div>
    </section>
  );
};

export default JourneyConversionPath;
