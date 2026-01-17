import { NavLink, useNavigate } from "react-router";
import {
  FiGrid,
  FiTrendingUp,
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiBell,
  FiX,
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import { useState } from "react";
import NotificationsModal from "./NotificationsModa";
import EditProfileModal from "./EditProfileModal";


const CoworkerSidebar = ({ isOpen, setIsOpen }) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()

  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-5 text-xs transition mx-2
     ${
       isActive
         ? "text-gray-600 font-semibold border-l-4  border-green-600 bg-gray-50"
         : "text-gray-500 hover:text-gray-800"
     }`;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 w-64 bg-white
        border-r border-gray-300 h-screen flex flex-col pl-5
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Mobile Close */}
        <div className="md:hidden flex justify-end p-4">
          <FiX size={20} onClick={() => setIsOpen(false)} />
        </div>

        {/* Brand */}
        <div className="px-6 py-6 border-b border-gray-300 flex items-center gap-3">
          <img src="/Icon.png" className="h-7" />
          <div>
            <p className="text-md tracking-widest text-gray-400">URBANSHELTER</p>
            <p className="text-[10px] text-gray-400">PARTNER PORTAL</p>
          </div>
        </div>

        {/* Profile */}
        <div className="px-6 py-6 cursor-pointer" >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center text-sm"
            onClick={() => navigate("/coworker/my-account")}
            >
              RK
            </div>
            <div>
              <h3 className="text-sm text-gray-800">Rajesh Kumar</h3>
              <p className="text-xs tracking-widest text-green-600 mt-1">
                VERIFIED PARTNER
              </p>
            </div>
          </div>

          {/* Notifications */}
          <div
            onClick={() => setOpen(true)}
            className="group mt-6 flex items-center justify-between px-4 py-2
            bg-gray-50 shadow-sm cursor-pointer hover:border-green-500 border-t-4
            border-transparent transition"
          >
            <div className="flex items-center gap-6 text-xs tracking-widest">
              <FiBell size={14} /> Partner Inbox
            </div>
            <span className="bg-slate-900 text-white text-xs px-2">3</span>
          </div>
        </div>

        {/* MAIN MENU */}
        <nav className="uppercase tracking-[0.1em]">
          <p className="px-6 mb-3 text-[10px] text-gray-300">MAIN MENU</p>

          <NavLink to="/coworker/dashboard" className={linkClass}>
            <FiGrid size={16} /> Dashboard
          </NavLink>

          <NavLink to="/coworker/journey" className={linkClass}>
            <FiTrendingUp size={16} /> The Journey
          </NavLink>

          <NavLink to="/coworker/earnings" className={linkClass}>
            <FiBarChart2 size={16} /> My Earnings
          </NavLink>

          <NavLink to="/coworker/reports" className={linkClass}>
            <FiFileText size={16} /> Reports
          </NavLink>

          <NavLink to="/coworker/live-board" className={linkClass}>
            <FiGrid size={16} /> Live Board
          </NavLink>

          <NavLink to="/coworker/settings" className={linkClass}>
            <FiSettings size={16} /> Settings
          </NavLink>
        </nav>

        {/* LANGUAGE */}
        <div className="px-6 mt-8">
          <p className="text-[10px] text-gray-300 mb-3">LANGUAGE</p>
          <button className="w-full px-4 py-3 text-xs bg-gray-50 tracking-widest">
            ENGLISH
          </button>
        </div>

        {/* CONCIERGE */}
        <div className="px-6 mt-8 tracking-[0.1em]">
          <p className="text-[10px] text-gray-300 mb-3">CONCIERGE</p>

          <NavLink to="/coworker/help" className="flex gap-3 px-4 py-3 text-xs">
            <FiFileText size={14} /> Help Center
          </NavLink>

          <NavLink to="/coworker/chat" className="flex gap-3 px-4 py-3 text-xs">
            <FiTrendingUp size={14} /> Partner Chat
          </NavLink>
        </div>

        {/* FOOTER */}
        <div className="mt-auto px-6 py-6 border-t border-gray-200 tracking-[0.1em]">
          <NavLink to="/" className="flex gap-3 px-4 py-3 text-xs">
            <FiHome size={14} /> Main Portal
          </NavLink>

          <button className="flex gap-3 px-4 py-3 text-xs hover:text-red-600 w-full">
            <FiLogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {open && <NotificationsModal onClose={() => setOpen(false)} />}
      <EditProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CoworkerSidebar;
