import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
    FiX,
    FiHeart,
    FiShare2,
    FiPhoneCall,
    FiInfo,
    FiSearch,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router";

import "swiper/css";

const VideoModal = ({ properties, initialIndex = 0, onClose }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const escHandler = (e) => e.key === "Escape" && onClose();
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", escHandler);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", escHandler);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative w-[26vw] h-[98vh] bg-black rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Utility Stack */}
                <div className="absolute top-6 left-4 z-30 flex flex-col gap-3">
                    <IconButton icon={<FiHeart />} />
                    <IconButton icon={<FiSearch />} />
                    <IconButton icon={<FiShare2 />} />
                </div>

                {/* Close */}
                <div className="absolute top-4 right-4 z-30">
                    <IconButton icon={<FiX />} onClick={onClose} />
                </div>

                {/* Custom Navigation */}
                <button className="custom-prev absolute left-3 top-1/2 -translate-y-1/2 z-30 nav-btn">
                    <FiChevronLeft size={18} />
                </button>

                <button className="custom-next absolute right-3 top-1/2 -translate-y-1/2 z-30 nav-btn">
                    <FiChevronRight size={18} />
                </button>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    initialSlide={initialIndex}
                    slidesPerView={1}
                    className="h-full"
                >
                    {properties.map((property) => (
                        <SwiperSlide key={property.id}>
                            <div className="relative w-full h-full">
                                <video
                                    src={property.videoUrl}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-10" />

                                {/* Intelligence Overlay */}
                                <div className="absolute bottom-28 left-5 right-5 z-20 text-white">
                                    <div className="flex justify-between items-start">
                                        <div className="max-w-[70%]">
                                            <span className="text-sm text-gray-400">
                                                Intelligence Active
                                            </span>
                                            <h3 className="text-xl font-bold leading-tight mt-1">
                                                {property.title}
                                            </h3>
                                        </div>

                                        <div className="text-xl font-bold whitespace-nowrap mt-2">
                                            ₹{property.price} Cr
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-sm opacity-70">
                                            {property.location} · {property.views} views
                                        </p>

                                        <span className="px-2 py-1  text-green-400 text-[8px] tracking-widest uppercase hover:border hover:border-green-400">
                                            Exclusive Access
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* CTA Dock */}
                <div className="absolute bottom-0 left-0 right-0 z-30 px-4 py-3 grid grid-cols-3 gap-3">
                    <CTA
                        icon={<FiInfo size={12} />}
                        label="DETAILS"
                        onClick={() => navigate("/rent")}
                    />

                    <CTA
                        icon={<FiPhoneCall size={12} />}
                        label="DIRECT LINE"
                    />

                    <CTA
                        icon={<FaWhatsapp size={12} />}
                        label="WHATSAPP"
                        primary
                    />
                </div>
            </div>

            {/* Local styles */}
            <style>{`
        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: rgba(0,0,0,0.5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }
        .nav-btn:hover {
          background: rgba(0,0,0,0.7);
        }
      `}</style>
        </div>
    );
};

/* ---------------- Subcomponents ---------------- */

const IconButton = ({ icon, onClick }) => (
    <button
        onClick={onClick}
        className="w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
    >
        {icon}
    </button>
);

const CTA = ({ icon, label, primary, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center gap-1 py-3  border text-[10px] tracking-wide transition ${primary
                ? "bg-green-500 text-black font-semibold shadow-lg"
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
    >
        {icon}
        {label}
    </button>
);

export default VideoModal;
