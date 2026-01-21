import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import LeftSection from "./RentProperty/Herosection/LeftSection";
import MiddleSection from "./RentProperty/Herosection/MiddleSection";
import RightSection from "./RentProperty/Herosection/RightSection";
import PropertyOverview from "./RentProperty/PropertyOverview";
import FloorPlanPricing from "./RentProperty/FloorPlanPricing";
import AgentExpertise from "./RentProperty/AgentExpertise";
import LuxuryAmenities from "./RentProperty/LuxuryAmenities";
import NeighborhoodConnectivity from "./RentProperty/NeighborhoodConnectivity";
import UnlockVastuInsights from "./RentProperty/UnlockVastuInsights";
import ScheduleVisitModal from "./Modal/ScheduleVisitModal";
import FinancialAdvisoryModal from "./Modal/FinancialAdvisoryModal";
import PriorityConciergeModal from "./Modal/PriorityConciergeModal";

/* Navbar items */
const navItems = [
  { id: "overview", label: "OVERVIEW" },
  { id: "floor-plan", label: "FLOOR PLAN" },
  { id: "location", label: "LOCATION" },
  { id: "amenities", label: "AMENITIES" },
  { id: "vaastu", label: "VAASTU" },
  { id: "seller", label: "SELLER" },
];

/* Sticky Section Navbar */
const SectionNavbar = ({
  openScheduleModal,
  openEmiModal,
  openConciergeModal,
}) => {
  const [active, setActive] = useState("overview");
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("section-navbar");
    const navbarOffsetTop = navbar?.offsetTop || 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      let currentSection = "overview";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = item.id;
          }
        }
      });

      setActive(currentSection);
      setIsFixed(window.scrollY >= navbarOffsetTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const yOffset = -72;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      id="section-navbar"
      className={`w-full  bg-white border-b  z-50 transition-all ${isFixed ? "fixed top-0 left-0 shadow-md" : "relative"
        }`}
    >
      <div className="flex justify-between h-20 px-8 max-w-8xl mx-auto">
        {/* Left Menu */}
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative h-full flex items-center cursor-pointer"
            >
              <span
                className={`text-xs tracking-[0.15em] transition-colors ${active === item.id
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                  }`}
              >
                {item.label}
              </span>
              {active === item.id && (
                <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-black" />
              )}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={openScheduleModal}
            className="px-8 py-2 text-xs font-medium border border-gray-300 rounded hover:bg-gray-100"
          >
            SCHEDULE
          </button>

          <button
            onClick={openEmiModal}
            className="px-8 py-2 text-xs font-medium border border-gray-300 rounded hover:bg-gray-100"
          >
            EMI
          </button>

          <button
            onClick={openConciergeModal}
            className="px-8 py-2 text-xs font-medium leading-none bg-black text-white rounded hover:bg-gray-800"
          >
            CALLBACK
          </button>
        </div>
      </div>
    </div>
  );
};

/* Main Page */
const RentProperty = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isEmiModalOpen, setIsEmiModalOpen] = useState(false);
  const [isConciergeModalOpen, setIsConciergeModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <Header />

      <main className="max-w-[1480px] mx-auto">
        {/* Hero */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-10px)] mb-30">
            <LeftSection />
            <MiddleSection />
            <RightSection />
          </div>
        </section>

        {/* Sticky Navbar */}
        <SectionNavbar
          openScheduleModal={() => setIsScheduleModalOpen(true)}
          openEmiModal={() => setIsEmiModalOpen(true)}
          openConciergeModal={() => setIsConciergeModalOpen(true)}
        />

        {/* Sections */}
        <section id="overview"><PropertyOverview /></section>
        <section id="floor-plan"><FloorPlanPricing /></section>
        <section id="location"><NeighborhoodConnectivity /></section>
        <section id="amenities"><LuxuryAmenities /></section>
        <section id="vaastu"><UnlockVastuInsights /></section>
        <section id="seller"><AgentExpertise /></section>
      </main>

      {/* Modals */}
      {isScheduleModalOpen && (
        <ScheduleVisitModal onClose={() => setIsScheduleModalOpen(false)} />
      )}

      <FinancialAdvisoryModal
        isOpen={isEmiModalOpen}
        onClose={() => setIsEmiModalOpen(false)}
      />

      {isConciergeModalOpen && (
        <PriorityConciergeModal
          onClose={() => setIsConciergeModalOpen(false)}
        />
      )}
    </div>
  );
};

export default RentProperty;
