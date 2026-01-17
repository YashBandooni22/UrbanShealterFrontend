import React, { useRef, useEffect } from "react";
import { Link } from "react-router";

import {
    FiUser,
    FiSettings,
    FiHeart,
    FiGrid,
    FiUsers,
    FiLogOut,
} from "react-icons/fi";

const NavbarModal = ({ onClose }) => {
    const modalRef = useRef(null);

    // Click outside to close
    useEffect(() => {
        const handler = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [onClose]);

    

    return (
        <div className="absolute top-20 right-15 z-50" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <div
                ref={modalRef}
                className="w-[250px] bg-white shadow-2xl "
            >
                {/* Header */}
                <div className="px-6 py-5 ">
                    <div className="flex  text-xs tracking-widest text-gray-400 font-medium">
                        <span>NAVIGATION</span>
                        <span className="text-green-600 font-semibold cursor-pointer ml-4">
                            SAVE
                        </span>
                    </div>
                    <h3 className="mt-1 text-xl font-serif text-gray-900">
                        The Suite
                    </h3>
                </div>

                {/* Identity */}
                <div className="px-6 py-6  flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
                        US
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                            My Identity
                        </p>
                        <p className="text-base font-medium text-gray-900">
                            Urban Resident
                        </p>
                    </div>
                </div>

                {/* Menu */}
                <div className="px-6 py-6 space-y-4 text-sm font-medium text-gray-700">
                    <Link
                        to="/profile"
                        className="flex items-center gap-3 cursor-pointer hover:text-black px-4 py-1"
                    >
                        <FiUser className="text-gray-400" />
                        <span>Profile</span>
                    </Link>

                    <Link
                        to="/account-settings"
                        className="flex items-center gap-3 cursor-pointer hover:text-black px-4 py-1"
                    >
                        <FiSettings className="text-gray-400" />
                        <span>Account Settings</span>
                    </Link>

                    <Link
                        to="/my-collection"
                        className="flex items-center gap-3 cursor-pointer hover:text-black px-4 py-1"
                    >
                        <FiHeart className="text-gray-400" />
                        <span>Saved Homes</span>
                    </Link>

                    <Link
                        to="/seller-dashboard"
                        className="flex items-center gap-3 cursor-pointer hover:text-black px-4 py-1"
                    >
                        <FiGrid className="text-gray-400" />
                        <span>Seller Dashboard</span>
                    </Link>

                    <Link
                        to="/co-worker"
                        className="flex items-center gap-3 cursor-pointer hover:text-black px-4 py-1"
                    >
                        <FiUsers className="text-gray-400" />
                        <span>Coworker</span>
                    </Link>

                </div>
                {/* Footer */}
                <div className="px-8 py-5 ">
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg border border-gray-200 hover:text-red-700 hover:border-gray-300 hover:shadow-sm transition-all">
                        <FiLogOut />
                        Exit My Space
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarModal;
