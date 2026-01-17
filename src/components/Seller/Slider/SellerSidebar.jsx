import { NavLink } from "react-router";
import {
  FiGrid,
  FiEdit3,
  FiTrendingUp,
  FiBarChart2,
  FiFileText,
  FiCreditCard,
  FiShield,
  FiBell,
  FiX,
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import NotificationsModal from "./NotificationsModal ";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

const SellerSidebar = ({ isOpen, setIsOpen }) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-3 text-xs transition
     ${isActive
      ? "text-gray-600 font-semibold border-l-4 ml-4 border-green-600"
      : "text-gray-500 hover:text-gray-800"
    }`;

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50 
          w-72 bg-white border-r border-gray-300
          h-screen flex flex-col pl-5
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0 " : "-translate-x-full md:translate-x-0"}
        `}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {/* Mobile Close */}
        <div className="md:hidden flex justify-end p-4">
          <FiX size={20} className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        {/* Brand */}
        <div className="px-6 py-6 border-b border-gray-300 flex items-center gap-3">
          <img src="/Icon.png" alt="Urban Shelter" className="h-7 w-auto" />
          <div>
            <p className="text-md tracking-widest text-gray-400">URBANSHELTER</p>
            <p className="text-[10px] text-gray-400">SELLER PORTAL</p>
          </div>
        </div>

        {/* Profile */}
        <div className="px-6 py-6" 
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center text-sm" onClick={() => setIsModalOpen(true)}>
              RK
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800">Rajesh Kumar</h3>
              <p className="text-xs tracking-widest text-green-600 mt-1">VERIFIED SELLER</p>
            </div>
          </div>

          {/* Notifications */}
          <div
            onClick={() => setOpen(true)}
            className="group mt-6 flex items-center gap-1 px-4 py-2
                       bg-gray-50 shadow-sm cursor-pointer
                       border border-transparent
                       hover:border-green-500 hover:border-t-4
                       transition-all duration-200"
          >
            <div className="flex items-center gap-4 text-xs text-gray-800 tracking-widest py-2 justify-between">
              <FiBell size={14} />
              NOTIFICATIONS
            </div>
            <span
              className="bg-slate-900 text-white text-xs px-2 py-0.5
                         group-hover:bg-green-500
                         transition-colors duration-200"
            >
              3
            </span>
          </div>
        </div>

        {/* Main Menu */}
        <nav className="uppercase tracking-[0.1em]">
          <p className="px-6 mb-3 text-[10px] tracking-widest text-gray-300">
            MAIN MENU
          </p>

          <NavLink to="/seller/dashboard" className={linkClass}>
            <FiGrid size={16} /> Dashboard
          </NavLink>
          <NavLink to="/seller/my-listings" className={linkClass}>
            <FiEdit3 size={16} /> My Listings
          </NavLink>
          <NavLink to="/seller/performance" className={linkClass}>
            <FiTrendingUp size={16} /> Performance
          </NavLink>
          <NavLink to="/seller/my-growth" className={linkClass}>
            <FiBarChart2 size={16} /> My Growth
          </NavLink>
          <NavLink to="/seller/reports" className={linkClass}>
            <FiFileText size={16} /> Reports
          </NavLink>
          <NavLink to="/seller/my-plan" className={linkClass}>
            <FiCreditCard size={16} /> My Plan
          </NavLink>
          <NavLink to="/seller/my-wallet" className={linkClass}>
            <FiCreditCard size={16} /> My Wallet
          </NavLink>
          <NavLink to="/seller/verification" className={linkClass}>
            <FiShield size={16} /> Verification
          </NavLink>
          <NavLink to="/seller/settings" className={linkClass}>
            <FiShield size={16} /> Settings
          </NavLink>
        </nav>

        {/* Language */}
        <div className="px-6 mt-8">
          <p className="text-[10px] tracking-widest text-gray-300 mb-3">LANGUAGE</p>
          <button className="w-full px-4 py-3 text-xs tracking-widest text-left bg-gray-50">
            ENGLISH
          </button>
        </div>

        {/* Support */}
        <div className="px-6 mt-8 tracking-[0.1em]">
          <p className="text-[10px] tracking-widest text-gray-300 mb-3">SUPPORT</p>
          <NavLink
            to="/seller/help"
            className="flex items-center gap-3 px-4 py-3 text-xs text-gray-500 hover:text-gray-800"
          >
            <FiFileText size={14} /> Help Center
          </NavLink>
          <NavLink
            to="/seller/chat"
            className="flex items-center gap-3 px-4 py-3 text-xs text-gray-500 hover:text-gray-800"
          >
            <FiEdit3 size={14} /> Live Chat
          </NavLink>
        </div>

        {/* Footer */}
        <div className="mt-auto px-6 py-6 border-t border-gray-200 tracking-[0.1em]">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-xs text-gray-500 hover:text-gray-800"
          >
            <FiHome size={14} /> Go Home
          </NavLink>
          <button className="flex items-center gap-3 px-4 py-3 text-xs text-gray-700 hover:text-red-600 w-full">
            <FiLogOut size={14} /> Log Out
          </button>
        </div>
      </aside>

      {/* Notifications Modal */}
      {open && <NotificationsModal onClose={() => setOpen(false)} />}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default SellerSidebar;
