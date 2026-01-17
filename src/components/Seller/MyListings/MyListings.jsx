import React from "react";

const MyListings = () => {
  const residenciesData = [
    {
      status: "active",
      featured: true,
      title: "Luxury Villa with Ocean View",
      location: "Malibu, California",
      price: "₹4,50,00,000",
      type: "Villa",
      beds: "5 Master",
      baths: "6 Bath",
      area: "5,500 SQ FT",
      reach: 2847,
      leads: 34,
      indexed: "1/15/2024",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      status: "active",
      featured: false,
      title: "Modern Downtown Apartment",
      location: "Manhattan, New York",
      price: "₹1,25,00,000",
      type: "Apartment",
      beds: "3 Master",
      baths: "2 Bath",
      area: "1,800 SQ FT",
      reach: 1523,
      leads: 18,
      indexed: "2/1/2024",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
      status: "sold",
      featured: false,
      title: "Suburban Family Home",
      location: "Austin, Texas",
      price: "₹85,00,000",
      type: "House",
      beds: "4 Master",
      baths: "3 Bath",
      area: "3,200 SQ FT",
      reach: 892,
      leads: 12,
      indexed: "12/10/2023",
      image:
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
    },
  ];

  /* KPI CALCULATIONS */
  const totalItems = residenciesData.length;
  const activeNow = residenciesData.filter(
    (item) => item.status === "active"
  ).length;
  const totalReach = residenciesData.reduce(
    (sum, item) => sum + item.reach,
    0
  );
  const totalLeads = residenciesData.reduce(
    (sum, item) => sum + item.leads,
    0
  );

  return (
    <section
      className="p-12 pb-5 bg-neutral-50"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-16">
        <div>
          <p className="text-xs tracking-widest text-green-600 mb-2">
            THE COLLECTION
          </p>
          <h3 className="text-3xl mb-4">My Residencies</h3>
          <p className="text-sm text-gray-400 tracking-widest max-w-xl">
            MANAGEMENT OF YOUR HIGH-ENGAGEMENT CINEMATIC PROPERTY LISTINGS.
          </p>
        </div>

        <button className="bg-gray-900 text-white px-6 py-3 text-xs tracking-widest flex items-center gap-2 shadow-2xl">
          <span className="text-lg leading-none">+</span>
          NEW RESIDENCY
        </button>
      </div>

      {/* KPI SUMMARY STRIP */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <KpiCard label="Total Items" value={totalItems} />
        <KpiCard label="Active Now" value={activeNow} />
        <KpiCard
          label="Total Reach"
          value={totalReach.toLocaleString()}
          highlight
        />
        <KpiCard label="Direct Leads" value={totalLeads} />
      </div>

      {/* Cards */}
      <div className="space-y-10">
        {residenciesData.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-[420px_1fr] border border-gray-100 bg-white"
          >
            {/* Image Section */}
            <div className="relative h-[200px] md:h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-6 left-6 flex flex-col items-start gap-3">
                <span className="bg-white px-6 py-1 text-xs tracking-widest uppercase">
                  {item.status}
                </span>

                {item.featured && (
                  <span className="bg-white border px-3 py-1 text-xs tracking-widest">
                    FEATURED
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-serif mb-3 ">
                      {item.title}
                    </h3>
                    <p className="text-xs tracking-widest text-gray-400 uppercase">
                      {item.location}
                    </p>
                  </div>

                  <h3 className="text-3xl font-normal tracking-tight">
                    {item.price}
                  </h3>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  <Detail label="Residency Type" value={item.type} />
                  <Detail label="Beds" value={item.beds} />
                  <Detail label="Baths" value={item.baths} />
                  <Detail label="Registry Area" value={item.area} />
                </div>

                <div className="my-6" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-12">
                  <Stat
                    label="Reach"
                    value={item.reach.toLocaleString()}
                  />
                  <Stat label="Leads" value={item.leads} />
                  <Stat label="Indexed" value={item.indexed} />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6 mt-4">
                <button className="bg-gray-900 text-white px-10 py-4 text-xs tracking-widest flex items-center gap-3">
                  ✎ EDIT SUITE
                </button>

                <button className="border px-10 py-4 text-xs tracking-widest text-gray-400">
                  SHADOW MODE
                </button>

                <button className="ml-auto text-xs tracking-widest text-gray-400 hover:text-black transition">
                  RELEASE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const KpiCard = ({ label, value }) => (
  <div
    className={` bg-white p-8 min-h-[120px] flex flex-col justify-between hover:border hover:border-gray-900`}
  >
    <span className="inline-block  text-black tracking-widest py-1 w-fit">
      {label.toUpperCase()}
    </span>

    <h3 className="text-4xl font-serif ">
      {value}
    </h3>
  </div>
);

const Detail = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">
      {label}
    </p>
    <p className="font-medium">{value}</p>
  </div>
);

const Stat = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">
      {label}
    </p>
    <p className="text-lg font-medium">{value}</p>
  </div>
);

export default MyListings;
