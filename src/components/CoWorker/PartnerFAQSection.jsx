import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Can I join?",
    answer:
      "Yes! Anyone who knows people selling homes can join. You can be an agent, a broker, or just someone with a lot of friends.",
  },
  {
    question: "What is my job?",
    answer:
      "Your job is easy. Just show people our site and give them your special link. We do all the hard work like talking to them and setting up their account.",
  },
  {
    question: "Do I have to pay anything?",
    answer:
      "No. It is free to join. There are no fees or hidden costs. You only make money when people you help start paying us.",
  },
];

const PartnerFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-15 ">

        {/* Heading */}
        <h3 className="text-center  text-3xl lg:text-4xl text-gray-900 mb-16">
          Questions You Might Have
        </h3>

        {/* FAQ Container */}
        <div className="border border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg text-gray-900">
                  {faq.question}
                </span>

                <FiChevronDown
                  className={`text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-500 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnerFAQSection;
