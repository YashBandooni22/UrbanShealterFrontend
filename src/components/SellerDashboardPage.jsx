import React from "react";
import { FiShield, FiGlobe, FiGrid, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router";


const SellerDashboardPage = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen w-full mx-auto bg-black text-white flex flex-col items-center justify-center ">

            {/* Top Icon */}
            <div className="mb-6">
                <div className="w-14 h-14 rounded-full border border-green-500 bg-[#042718] flex items-center justify-center">
                    <FiGrid className="text-green-500 text-xl" />
                </div>
            </div>

            {/* Heading */}
            <h3 className="text-5xl lg:text-5xl font-medium text-center" >
                Entering the Suite
            </h3>

            <p className="mt-4 text-sm tracking-widest text-gray-400 text-center">
                TRANSITIONING TO YOUR PROFESSIONAL SELLER REGISTRY
            </p>

            {/* Feature Cards */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full">

                {/* Card 1 */}
                <div
                    className="
    backdrop-blur-xl
    bg-white/[0.06]
    border border-white/[0.12]
    py-8  px-8
    shadow-[0_0_30px_rgba(255,255,255,0.04)]
    transition
    hover:bg-white/[0.08]
    hover:border-white/[0.18]
  "
                >

                    <FiShield className="text-green-500 text-xl mb-4" />
                    <p className="text-sm font-bold tracking-widest mb-3">
                        SECURE REGISTRY
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Your professional documents and financial records are protected by
                        global encryption standards.
                    </p>
                </div>

                {/* Card 2 */}
                <div
                    className="
    backdrop-blur-xl
    bg-white/[0.06]
    border border-white/[0.12]
    py-8 px-8
    shadow-[0_0_30px_rgba(255,255,255,0.04)]
    transition
    hover:bg-white/[0.08]
    hover:border-white/[0.18]
  ">
                    <FiGlobe className="text-green-500 text-xl mb-4" />
                    <p className="text-sm font-bold tracking-widest mb-3">
                        GLOBAL EXPOSURE
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Syncing your listings across the luxury Urban Shelter network for
                        maximum high-net-worth visibility.
                    </p>
                </div>

            </div>

            {/* Actions */}
            <div className="mt-14 flex gap-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <button onClick={()=>navigate("/seller/dashboard")} className="
          bg-green-600 hover:bg-green-700
          px-8 py-4
          font-semibold
          text-xs tracking-[0.35em]
          flex items-center gap-3
          transition
        ">
                    CONTINUE TO DASHBOARD
                    <FiArrowRight />
                </button>

                <button
                    onClick={() => navigate(-1)}
                    className="
    border border-white/20
    px-8 py-4
    font-semibold
    text-xs tracking-[0.35em]
    hover:bg-white/5
    transition
  "
                >
                    GO BACK
                </button>

            </div>

            {/* Footer */}
            <p className="mt-16 text-xs text-gray-600 tracking-widest">
                URBAN SHELTER · PROFESSIONAL SERVICES
            </p>

        </div>
    );
};

export default SellerDashboardPage;
