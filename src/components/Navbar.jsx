import React, { useState } from "react";
import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import NavbarModal from "./NavbarModal";
import CityModal from "./CityModal";
import { cities } from "../assets/assest";


const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState("mumbai");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cityModalOpen, setCityModalOpen] = useState(false);

  const activeCity = cities.find(c => c.value === selectedCity)?.name;

  return (
    <>
      <nav
        className="w-full bg-white px-4 sm:px-8 py-6"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {/* MAIN BAR */}
        <div className="flex items-center justify-between">
          {/* LEFT: LOGO + CITY */}
          <div className="flex items-center gap-3">
            <img src="/Icon.png" className="w-7 h-7" alt="" />

            <Link to={"/"} className="text-xl font-normal">
              URBAN <span className="font-semibold">SHELTER</span>
            </Link>

            {/* CITY TRIGGER (DESKTOP + MOBILE) */}
            <div
              onClick={() => setCityModalOpen(true)}
              className="ml-3 flex items-center gap-2 cursor-pointer"
            >
              <img src="/Icon (2).png" alt="" className="w-4 h-4" />
              <span className="text-sm tracking-widest uppercase">
                {activeCity}
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-12">
            <Link to="/buy" className="text-gray-400 hover:text-black text-sm">
              BUY
            </Link>

            <Link to="/map-view">
              <img src="/Button.png" alt="" className="h-5 w-5" />
            </Link>

            <Link to="/rent" className="text-gray-400 hover:text-black text-sm">
              RENT
            </Link>
          </div>

          {/* DESKTOP RIGHT */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/co-worker" className="text-gray-900 text-xs">
              CO-WORKER
            </Link>

            <Link
              to="/list-property"
              className="bg-black text-white px-6 py-3 rounded text-xs"
            >
              SELL-PROPERTY
            </Link>

            <button
              onClick={() => setProfileOpen(true)}
              className="text-2xl"
            >
              <FiMenu />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-4 border-t pt-4">
            <button
              onClick={() => setCityModalOpen(true)}
              className="px-4 py-2 rounded border text-sm text-left"
            >
              {activeCity}
            </button>

            <Link to="/buy" className="text-gray-700 font-medium">
              Buy
            </Link>

            <Link to="/rent" className="text-gray-700 font-medium">
              Rent
            </Link>

            <Link to="/co-worker" className="text-gray-700 font-medium">
              Co-Worker
            </Link>

            <button className="bg-black text-white py-3 rounded text-sm">
              Sell Property
            </button>
          </div>
        )}
      </nav>

      {/* MODALS */}
      {profileOpen && (
        <NavbarModal onClose={() => setProfileOpen(false)} />
      )}

      {cityModalOpen && (
        <CityModal
          cities={cities}
          selectedCity={selectedCity}
          onSelect={setSelectedCity}
          onClose={() => setCityModalOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
