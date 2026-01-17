import React, { useState } from "react";
import FollowUpModal from "./FollowUpModal";
import PeopleWhoNeedANudgeModal from "./PeopleWhoNeedANudgeModal ";
import NewWinsTodayModal from "./NewWinsTodayModal ";

const ThingsToDoSection = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <section className="bg-white p-8">
        <div className="max-w-7xl mx-auto p-8 border border-gray-300 rounded-lg shadow-sm">
          {/* Section Title */}
          <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-8">
            Things to do
          </p>

          <div className="space-y-6">
            {/* Item 1 */}
            <div className="border border-gray-100 px-8 py-6 hover:border-gray-400">
              <div className="flex gap-4">
                <span className="text-xl leading-none">•</span>
                <div>
                  <p className="text-base text-gray-900 mb-1">
                    5 tests ending in 3 days
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Rahul Kapoor, Meera Iyer, and 3 others need a friendly nudge.
                  </p>

                  <button
                    onClick={() => setOpenModal("followup")}
                    className="text-xs tracking-widest uppercase text-gray-900 border-b border-gray-900 pb-1"
                  >
                    Say hello →
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="border border-gray-100 px-8 py-6 hover:border-gray-400">
              <div className="flex gap-4">
                <span className="text-xl leading-none text-gray-300">•</span>
                <div>
                  <p className="text-base text-gray-900 mb-1">
                    118 people signed up but haven't tested
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Remind them why video is better.
                  </p>

                  <button
                    onClick={() => setOpenModal("nudge")}
                    className="text-xs tracking-widest uppercase text-gray-900 border-b border-gray-900 pb-1"
                  >
                    Show list →
                  </button>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="border border-gray-100 px-8 py-6 bg-gray-50 hover:border-gray-400">
              <div className="flex gap-4">
                <span className="text-xl leading-none text-green-600">•</span>
                <div>
                  <p className="text-base text-gray-900 mb-1">
                    2 new sellers joined today! 🎉
                  </p>
                  <p className="text-sm text-gray-500">
                    Amit Deshmukh and Priya Sharma started their journey.
                  </p>

                  <p className="text-xs tracking-widest text-green-600 uppercase mt-3 mb-4">
                    +₹2,500 every month for you
                  </p>

                  <button
                    onClick={() => setOpenModal("wins")}
                    className="text-xs tracking-widest uppercase text-gray-900 border-b border-gray-900 pb-1"
                  >
                    View details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <FollowUpModal
        isOpen={openModal === "followup"}
        onClose={() => setOpenModal(null)}
      />

      <PeopleWhoNeedANudgeModal
        isOpen={openModal === "nudge"}
        onClose={() => setOpenModal(null)}
      />

      <NewWinsTodayModal
        isOpen={openModal === "wins"}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
};

export default ThingsToDoSection;
