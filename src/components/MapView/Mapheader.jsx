import React, { useState } from 'react';
import { FiMenu, FiBookmark } from 'react-icons/fi';
import SavedModal from './SavedModal';
import FilterModal from './FilterModal';

const Mapheader = ({ activeMenu, setActiveMenu }) => {
  const [activeTab, setActiveTab] = useState('buy');
  const [savedOpen, setSavedOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      <div
        className="max-w-7xl mx-auto px-12 py-3 flex items-center justify-between mt-4"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {/* Left section */}
        <div className="flex items-center gap-4">
          {/* Buy / View Toggle */}
          <div className="flex bg-gray-100 rounded p-1">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-5 py-1 rounded text-sm font-medium transition ${
                activeTab === 'buy'
                  ? 'bg-white text-gray-400 shadow'
                  : 'bg-transparent text-gray-300'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab('view')}
              className={`px-5 py-1 rounded text-sm font-medium transition ${
                activeTab === 'view'
                  ? 'bg-white text-gray-400 shadow'
                  : 'bg-transparent text-gray-300'
              }`}
            >
              View
            </button>
          </div>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setActiveMenu('menu1')}
            className={`p-2 rounded border transition ${
              activeMenu === 'menu1'
                ? 'bg-black text-gray-200 border-black'
                : 'bg-white text-gray-200 border-gray-300'
            }`}
          >
            <FiMenu size={16} />
          </button>

          <button
            onClick={() => setActiveMenu('menu2')}
            className={`p-2 rounded border transition ${
              activeMenu === 'menu2'
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300'
            }`}
          >
            <FiMenu size={16} />
          </button>
        </div>

        {/* Center section */}
        <div className="flex items-center gap-10 text-xs tracking-wide uppercase text-gray-300">
          <div>
            <p className="font-semibold ml-1">Listings</p>
            <p className="text-gray-400 font-semibold ml-1 text-center text-m mt-1">
              247
            </p>
          </div>
          <div>
            <p className="font-semibold ml-1">New</p>
            <p className="text-gray-400 font-semibold ml-1 text-center text-md mt-1">
              12
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search area..."
              className="shadow px-10 py-2 rounded text-sm border-none text-black"
            />
          </div>
          <button className="px-6 py-3 bg-black font-bold text-[10px] leading-[15px] text-white tracking-widest">
            SEARCH
          </button>

          {/* Save button */}
          <button
            className="px-4 py-2 font-normal text-xs leading-[24px] text-gray-700 flex items-center gap-2 shadow"
            onClick={() => setSavedOpen(true)}
          >
            <FiBookmark size={14} className="font-light" />
            SAVE
          </button>

          {/* Last hamburger button triggers FilterModal */}
          <button
            className="p-2 shadow"
            onClick={() => setFilterOpen(true)}
          >
            <FiMenu size={18} />
          </button>
        </div>
      </div>

      <hr className="text-gray-300 mt-2" />

      {/* Modals */}
      <SavedModal isOpen={savedOpen} onClose={() => setSavedOpen(false)} />
      <FilterModal isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
    </div>
  );
};

export default Mapheader;
