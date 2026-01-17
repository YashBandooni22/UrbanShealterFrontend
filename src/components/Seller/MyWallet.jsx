import React from "react";

const ledgerData = [
  {
    date: "15 Jan 2025",
    type: "outflow",
    title: "Subscription renewal - 6 months plan",
    amount: -4500,
  },
  {
    date: "10 Jan 2025",
    type: "inflow",
    title: "Added funds via UPI",
    amount: 10000,
  },
  {
    date: "8 Jan 2025",
    type: "outflow",
    title: "Video boost - Luxury Penthouse",
    amount: -2800,
  },
  {
    date: "5 Jan 2025",
    type: "inflow",
    title: "Added funds via Bank Transfer",
    amount: 5000,
  },
  {
    date: "28 Dec 2024",
    type: "outflow",
    title: "Subscription - Custom plan",
    amount: -3200,
  },
  {
    date: "20 Dec 2024",
    type: "inflow",
    title: "Added funds via Credit Card",
    amount: 8000,
  },
];

const MyWallet = () => {
  return (
    <div className="px-20 py-14 bg-white">
      {/* HEADER */}
      <header className="mb-24 ">
        <p className="text-xs tracking-[0.35em] uppercase text-green-600 mb-4">
          Financial Intelligence
        </p>
        <h1 className="font-serif text-5xl mb-4">Investment Vault</h1>
        <p className="max-w-2xl text-sm tracking-widest text-neutral-400 uppercase">
          A chronological ledger of residency acquisitions, registry renewals,
          and platform momentum.
        </p>
      </header>

      {/* LEDGER */}
      <section className="border border-neutral-100 rounded-sm overflow-hidden shadow-lg">
        {/* LEDGER HEADER */}
        <div className="px-16 py-12 border-b border-neutral-100">
          <h2 className="font-serif text-3xl mb-2">The Ledger</h2>
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-400">
            Registry Transaction History
          </p>
        </div>

        {/* COLUMN LABELS */}
        <div className="grid grid-cols-[180px_180px_1fr_200px] px-16 py-6 text-xs tracking-[0.35em] uppercase text-neutral-400 border-b border-neutral-100">
          <span>Registry Date</span>
          <span>Protocol</span>
          <span>Interaction Detail</span>
          <span className="text-right">Momentum Index</span>
        </div>

        {/* LEDGER ROWS */}
        <div className="divide-y divide-neutral-100">
          {ledgerData.map((item, index) => {
            const isInflow = item.type === "inflow";

            return (
              <div
                key={index}
                className="grid grid-cols-[180px_180px_1fr_200px] px-16 py-10 items-center"
              >
                {/* DATE */}
                <span className="text-sm text-neutral-600 uppercase">
                  {item.date}
                </span>

                {/* PROTOCOL */}
                <span
                  className={`inline-flex items-center gap-2 px-6 py-2 text-xs tracking-widest uppercase w-max
                    ${
                      isInflow
                        ? "bg-green-50 text-green-700"
                        : "bg-slate-900 text-white"
                    }`}
                >
                  {isInflow ? "↙ Inflow" : "↗ Outflow"}
                </span>

                {/* DETAIL */}
                <div>
                  <p className="text-base font-medium text-black">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.3em] uppercase text-neutral-400">
                    Verified Protocol
                  </p>
                </div>

                {/* AMOUNT */}
                <div className="text-right">
                  <p
                    className={`text-xl ${
                      isInflow ? "text-green-600" : "text-black"
                    }`}
                  >
                    {item.amount > 0
                      ? `+₹${item.amount.toLocaleString()}`
                      : `-₹${Math.abs(item.amount).toLocaleString()}`}
                  </p>
                  <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mt-2">
                    INR Index
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* VAULT INTEGRITY */}
      <section className="mt-14 bg-gradient-to-r from-slate-900 to-slate-800 px-16 py-8 flex items-center justify-between shadow-2xl">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-2">
            Vault Integrity
          </p>
          <p className="text-sm text-neutral-200 max-w-xl">
            All registry interactions are encrypted and verified via platform
            intelligence protocols.
          </p>
        </div>

        <p className="text-xs tracking-[0.35em] uppercase text-neutral-500">
          Urban Shelter Registry • 2026
        </p>
      </section>
    </div>
  );
};

export default MyWallet;
