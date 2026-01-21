import { FiHeart, FiPhone, FiShare2 } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const RightSection = () => {
    return (
        <section className="flex flex-col h-full py-1 px-4">
            {/* Stats */}
            <div className="flex justify-end mb-6">
                <button className="flex items-center gap-2 px-4 py-2 text-[11px] tracking-[0.25em] uppercase text-gray-900 hover:opacity-70 shadow-2xl">
                    <FiHeart className="text-sm" />
                    <span>Save Home</span>
                </button>
            </div>


            <div className="flex gap-12 justify-between">
                {/* Total Views */}
                <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-2">
                        Total Views
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">2,408</p>
                </div>

                {/* Inquiries */}
                <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-2">
                        Inquiries
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">428</p>
                </div>
            </div>


            <div className="flex items-center justify-between">
                {/* Left: Active Now */}
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">
                        Active Now
                    </p>
                </div>

                {/* Right: People Looking */}
                <p className="text-xs tracking-widest uppercase text-gray-500">
                    14 People Looking
                </p>
            </div>


            {/* Actions */}
            <div className="mt-12 space-y-4 border-b mb-4 border-gray-300">
                {/* Save to Collection */}
                <button className="w-full flex items-center justify-center gap-6 py-8 bg-black text-white text-xs tracking-[0.3em] uppercase hover:opacity-90 hover:bg-green-700 hover:text-white">
                    <FiHeart size={20} />
                    Save to Collection
                </button>


                {/* Call Agent */}
                <button className="w-full flex items-center justify-center gap-6 py-8 bg-green-500 text-white text-xs tracking-[0.3em] uppercase hover:opacity-90 hover:bg-green-700">
                    <FiPhone size={20} />
                    Call Agent
                </button>

                {/* WhatsApp */}
                <button className="w-full flex items-center justify-center gap-6 py-8  border border-gray-200 text-gray-500 text-xs tracking-[0.3em] uppercase hover:bg-gray-50 hover:border-gray-400">
                    <BsWhatsapp size={20} />
                    WhatsApp
                </button>

                <button className="flex items-center gap-4 py-8 px-4 mb-4 text-xs tracking-[0.25em] uppercase text-gray-500 border border-transparent hover:border-gray-400 hover:text-gray-900 transition-all">
                    <FiShare2 size={18} />
                    Share
                </button>
            </div>

            {/* Footer */}
            <div className="pt-10 space-y-6">

                {/* Trust Badges */}
                <div className="space-y-2 flex flex-col items-center ">
                    <p className="text-xs tracking-widest font-medium uppercase text-gray-400">
                        Verified <span className="text-black font-semibold underline">Listing</span>
                    </p>
                    <p className="text-xs tracking-widest uppercase text-gray-400">
                        Secure Platform
                    </p>
                </div>
            </div>

        </section>
    );
};

export default RightSection;
