import { FiArrowLeft, FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router";

const LeftSection = () => {

    const navigate = useNavigate()
    return (
        <section className="flex flex-col h-full px-8 mb-2 py-10">
            {/* Top Row */}
            <div className="flex items-center justify-between">
                {/* Back */}
                <button onClick={() => { navigate(-1) }} className="flex items-center gap-2 px-4 py-2 shadow-2xl text-[11px] tracking-[0.25em] uppercase text-gray-900 hover:opacity-70 mt-5">
                    <FiArrowLeft className="text-sm" />
                    <span>The Journey</span>
                </button>

            </div>

            {/* Content */}
            <div className="mt-20">
                {/* Exclusive Portfolio */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500">
                        Exclusive Portfolio
                    </p>
                </div>

                {/* Price */}
                <h3 className=" text-[90px] leading-none text-gray-900 mb-6">
                    ₹2.85 Cr
                </h3>

                {/* Title */}
                <h2 className="text-md tracking-[0.2em] font-semibold uppercase text-gray-900">
                    Kandla Silicon Valley
                </h2>

                {/* Address */}
                <p className="mt-2 text-sm tracking-widest uppercase text-gray-400">
                    Andheri East • Mumbai 400069
                </p>

                {/* Property Meta */}
                <div className="mt-10 grid grid-cols-2 gap-y-8 gap-x-12">
                    <MetaItem label="Configuration" value="3 BHK Suite" />
                    <MetaItem label="Total Area" value="1,250 SQ.FT" />
                    <MetaItem label="Orientation" value="North Facing" />
                    <MetaItem label="Availability" value="Immediate" highlight />
                </div>

            </div>
        </section>
    );
};

const MetaItem = ({ label, value, highlight }) => {
    return (
        <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-1">
                {label}
            </p>
            <p
                className={`text-sm font-semibold ${highlight ? "text-green-500" : "text-gray-900"
                    }`}
            >
                {value}
            </p>
        </div>
    );
};

export default LeftSection;
