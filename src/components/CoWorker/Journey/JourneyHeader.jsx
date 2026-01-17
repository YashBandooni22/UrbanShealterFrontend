import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

const JourneyHeader = () => {

  const [linkCopied, setLinkCopied] = useState(false);
  const referralLink = "https://urbanshelter.com/ref/USER123ABC";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000); // reset after 2s
  };

  return (
    <section className="max-w-5xl mx-auto  pt-10 ">
      {/* ===================== TITLE ===================== */}

      <h3 className="text-4xl  text-gray-900 mb-2">The Journey</h3>
      <p className="text-sm tracking-widest text-gray-400 mb-8 uppercase">
        Watch how people move from clicking your link to becoming paid members.
      </p>

      {/* ===================== LINK CARD ===================== */}
      <div className="bg-white border border-gray-200 shadow p-12 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-4 hover:border hover:border-gray-700">
        {/* Label and Link */}
        <div className="flex-1 w-full">
          <p className="text-xs font-semibold text-gray-700 mb-6 uppercase">
            My Special Link
          </p>
          <div className="bg-gray-100 border border-gray-200 rounded px-4 py-2 text-gray-600 break-all mb-6">
            {referralLink}
          </div>
          <p className="mt-2 text-xs font-semibold text-green-600 uppercase">
            Share this to start earning
          </p>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="mt-4 md:mt-0 px-6 py-3 bg-gray-900 text-white font-semibold rounded flex items-center gap-2 hover:bg-black transition"
        >
          <FiCopy className="text-lg" />
          {linkCopied ? "Copied!" : "Copy Link"}
        </button>
      </div>

    </section>
  )
}

export default JourneyHeader