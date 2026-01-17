import React from "react";
import { FiTrendingUp, FiUser, FiShield } from "react-icons/fi";

const PartnerStepsSection = () => {
  return (
    <section className="bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {/* SECTION TITLE */}
        <h2 className="text-center font-serif text-3xl lg:text-4xl text-gray-900 mb-20">
          4 Simple Steps to Start
        </h2>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-28 text-center">
          
          {/* Step 1 */}
          <div>
            <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center border border-gray-200 text-xl ">
              1
            </div>
            <p className="text-sm tracking-widest text-gray-700 mb-3">
              SAY HELLO
            </p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Fill in a quick form with your name and city
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center border border-gray-200 text-xl ">
              2
            </div>
            <p className="text-sm tracking-widest text-gray-700 mb-3">
              QUICK CHECK
            </p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Our team will verify your profile within 24 hours
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center border border-gray-200 text-xl ">
              3
            </div>
            <p className="text-sm tracking-widest text-gray-700 mb-3">
              SHARE MAGIC
            </p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Help people understand how video sells homes faster
            </p>
          </div>

          {/* Step 4 – Active */}
          <div>
            <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center bg-green-600 text-white text-xl ">
              4
            </div>
            <p className="text-sm tracking-widest text-gray-700 mb-3">
              GET PAID
            </p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Earn money every 3 months for every person you help
            </p>
          </div>
        </div>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="border border-gray-200 p-10">
            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6">
              <FiTrendingUp className="text-gray-700" />
            </div>

            <h3 className="font-serif text-xl mb-6 text-gray-900">
              What you do
            </h3>

            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <span>—</span>
                <span>Help sellers find our platform</span>
              </li>
              <li className="flex gap-3">
                <span>—</span>
                <span>Send them your special link</span>
              </li>
              <li className="flex gap-3">
                <span>—</span>
                <span>Make money when they join</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 p-10">
            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6">
              <FiUser className="text-gray-700" />
            </div>

            <h3 className="font-serif text-xl mb-6 text-gray-900">
              Who can join
            </h3>

            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <span>—</span>
                <span>Agents & Brokers</span>
              </li>
              <li className="flex gap-3">
                <span>—</span>
                <span>Property Experts</span>
              </li>
              <li className="flex gap-3">
                <span>—</span>
                <span>Anyone who knows sellers</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 p-10">
            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6">
              <FiShield className="text-gray-700" />
            </div>

            <h3 className="font-serif text-xl mb-6 text-gray-900">
              Why work with us
            </h3>

            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <span>—</span>
                <span>Beautiful video tours</span>
              </li>
              <li className="flex gap-3">
                <span>—</span>
                <span>Real buyers, no fake calls</span>
              </li>
              <li className="flex gap-3">
                <span>—</span>
                <span>Track your pay instantly</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerStepsSection;
