import React, { useState } from "react";

const RightPanel = ({ setPhone, goToOtp }) => {
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (number.length !== 10) {
            alert("Enter valid 10 digit number");
            return;
        }

        setPhone(number);
        goToOtp();
    };

    return (
        <div className="w-full lg:w-1/2 flex justify-center px-4 sm:px-6 lg:px-12 mt-6 sm:mt-10 lg:mt-6">
            <div className="w-full max-w-lg flex flex-col items-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full border border-gray-400 rounded-sm py-2 sm:py-4 lg:py-8 px-2 sm:px-10 lg:px-15"
                >
                    <h3 className="font-normal text-xl sm:text-xl lg:text-2xl mb-2 sm:mb-2">
                        Welcome Back
                    </h3>

                    <p className="text-base sm:text-lg lg:text-md text-gray-500 mb-10 sm:mb-10">
                        Enter your mobile number to continue
                    </p>

                    <label className="block text-sm sm:text-md tracking-widest text-gray-900 mb-4 sm:mb-6">
                        Mobile Number
                    </label>

                    <div className="flex gap-2 sm:gap-4 lg:gap-2 mb-8 sm:mb-10">
                        <div className="
                            w-12 h-8
                            sm:w-20 sm:h-14 
                            md:w-22 md:h-16 
                            lg:w-18 lg:h-12
                            bg-gray-100
                            border border-gray-300 
                            flex items-center justify-center 
                            text-sm sm:text-lg
                        ">
                            +91
                        </div>

                        <input
                            type="tel"
                            placeholder="9876543210"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="
                                flex-1 border border-gray-300 
                                px-3 sm:px-4 
                                text-base sm:text-lg 
                                focus:outline-none
                            "
                        />
                    </div>

                    <button
                        type="submit"
                        className="
                            w-full bg-green-600 text-white 
                            py-4 sm:py-5 lg:py-4 
                            text-base sm:text-sm tracking-wider 
                            hover:bg-green-700 transition
                        "
                    >
                        CONTINUE WITH OTP
                    </button>

                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-200"></div>
                        <span className="px-4 text-xs text-gray-400 tracking-widest">OR</span>
                        <div className="flex-1 border-t border-gray-200"></div>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <button
                            type="button"
                            className="
      w-full border border-gray-300
      py-4
      flex items-center justify-center gap-3
      text-sm tracking-wider
      hover:bg-gray-50 transition
    "
                        >
                            <span className="text-gray-700">CONTINUE WITH GOOGLE</span>
                        </button>

                        <button
                            type="button"
                            className="
      w-full border border-gray-300
      py-4
      flex items-center justify-center gap-3
      text-sm tracking-wider
      hover:bg-gray-50 transition
    "
                        >
                            <span className="text-gray-700">CONTINUE WITH APPLE</span>
                        </button>
                    </div>

                    <p className="mt-10 text-xs text-gray-400 text-center tracking-wide">
                        By continuing, you agree to our terms
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RightPanel;
