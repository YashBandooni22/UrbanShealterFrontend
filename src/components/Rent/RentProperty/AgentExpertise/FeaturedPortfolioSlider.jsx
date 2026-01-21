import React from "react";

const DATA = [
  {
    id: 1,
    location: "Bandra West",
    title: "Sky View Residence",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
  },
  {
    id: 2,
    location: "Bandra West",
    title: "Sky View Residence",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
  },
  {
    id: 3,
    location: "Bandra West",
    title: "Sky View Residence",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
  },
];

const FeaturedPortfolioSlider = () => {
  return (
    <section className="w-full">
      {/* COPY */}
      <h3 className="text-[25px] mb-6">Agent Expertise</h3>

      <div className="max-w-3xl text-neutral-600 leading-relaxed mb-16 text-[16px]">
        <p className="mb-6">
          With over a decade of experience in Mumbai&apos;s luxury corridor, Priya
          Malhotra specializes in curated high-value assets that offer both
          architectural significance and robust investment potential.
        </p>
        <p>
          Her approach is defined by data-driven insights and a commitment to
          absolute transparency, ensuring that every transaction is as
          sophisticated as the properties she represents.
        </p>
      </div>

      {/* SLIDER LABEL */}
      <p className="text-xs tracking-widest uppercase text-neutral-400 mb-8">
        Featured Portfolio
      </p>

      {/* SLIDER CONTAINER (LAYOUT SAFE) */}
      <div className="w-full max-w-full overflow-hidden">
        {/* SLIDER TRACK */}
        <div
          className="
            flex gap-10 overflow-x-auto pb-4
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {DATA.map((item) => (
            <article
              key={item.id}
              className="man-w-[280px] flex-shrink-0 cursor-pointer"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[250px] h-[150px] object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>

              <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">
                {item.location}
              </p>

              <h3 className="text-sm text-neutral-900">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolioSlider;
