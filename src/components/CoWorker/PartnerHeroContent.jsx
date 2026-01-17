import React from "react";

const PartnerHeroContent = () => {
  return (
    <div>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md mb-10"
      
      >
        <span className="text-xs tracking-widest text-gray-500 uppercase">
          ✦ Network Strategy
        </span>
      </div>

      {/* Heading */}
      <h3 className="text-[42px] leading-[1.15] lg:text-[56px] text-gray-900 mb-8">
        You guide.
        <br />
        Sellers list.
        <br />
        Market evolves.
      </h3>

      {/* Description */}
      <p className="text-gray-500 max-w-xl leading-relaxed mb-14">
        As an Urban Shelter Strategic Partner, you are the catalyst for
        transition. Educate your elite network of developers and brokers
        on the power of video-first discovery—unlocking unparalleled
        engagement while scaling your professional influence.
      </p>

      {/* Feature Cards */}
      <div className="flex gap-8 mb-16">
        <div className="border border-gray-200 p-8 w-72 hover:border hover:border-gray-600">
          <h3 className=" text-xl mb-2 text-gray-900">
            Strategic Influence
          </h3>
          <p className="text-xs tracking-widest text-gray-400 uppercase">
            Redefine Property Presentation
          </p>
        </div>

        <div className="border border-gray-200 p-8 w-72 hover:border hover:border-gray-600">
          <h3 className=" text-xl mb-2 text-gray-900">
            Network Integrity
          </h3>
          <p className="text-xs tracking-widest text-gray-400 uppercase">
            High-Intent Professional Circle
          </p>
        </div>
      </div>

      {/* Footer Line */}
      <p className="text-xs tracking-widest text-gray-400 uppercase">
        Educate once. Impact 50+. Scale infinitely.
      </p>
    </div>
  );
};

export default PartnerHeroContent;
