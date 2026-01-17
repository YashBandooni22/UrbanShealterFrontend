import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";

const PaymentModal = ({ onClose }) => {
    return (
        // Overlay
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 "
            style={{ fontFamily: "Montserrat, sans-serif" }}
             onClick={onClose}
            >


            {/* Modal Container */}
            <div className="bg-white h-full min-h-screen shadow-lg max-w-md w-full p-6 relative border-t-5 border-green-700">

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-xs text-green-600 tracking-widest mb-1 uppercase">
                            PAYMENT VERIFICATION
                        </p>
                        <h2 className="text-3xl  font-normal">
                            Verify Account
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 p-2 rounded-full transition"
                    >
                        <AiOutlineClose size={20} />
                    </button>
                </div>

                {/* Icon Section */}
                <div className="flex justify-center mb-8">
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-100">
                        <MdErrorOutline className="text-gray-600 text-2xl " />
                    </div>
                </div>

                {/* Status Text */}
                <div className="text-center mb-6">
                    <h3 className="text-xl mb-4">Under Review</h3>
                    <p className="text-gray-400 text-xs uppercase">
                        Your trial listing is being reviewed. Custom plans will be unlocked as soon as your account is verified.
                    </p>
                </div>

                {/* Status Details Box */}
                <div className="bg-gray-50 p-5 mb-6 space-y-4">
                    {/* Trial Status */}
                    <div className="flex flex-col my-5">
                        <span className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                            Trial Status
                        </span>
                        <div className="flex items-center text-sm gap-2 text-green-600 ">
                            <AiOutlineCheck className="text-xs" />
                            <span>Completed</span>
                        </div>
                    </div>

                    {/* Verification Status */}
                    <div className="flex flex-col my-5">
                        <span className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                            Verification Status
                        </span>
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                            <BiTimeFive className="text-lg animate-pulse" />
                            <span className="">In Progress</span>
                        </div>
                    </div>

                    {/* Estimated Time */}
                    <div className="flex flex-col my-5">
                        <span className="text-gray-400 text-sm uppercase tracking-widest mb-1">
                            Estimated Time
                        </span>
                        <span className="text-gray-900 ">24 - 48 Hours</span>
                    </div>
                </div>


                {/* Action Button */}
                <button
                    onClick={onClose}
                    className="w-full border border-black  py-2 mt-4 uppercase  hover:bg-black hover:text-white transition"
                >
                    OK
                </button>

            </div>
        </div>
    );
};

export default PaymentModal;
