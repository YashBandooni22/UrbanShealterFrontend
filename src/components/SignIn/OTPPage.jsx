import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const OTPPage = ({ phone, goBack }) => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const val = e.target.value;

        if (/^\d?$/.test(val)) {
            const newOtp = [...otp];
            newOtp[index] = val;
            setOtp(newOtp);

            if (val && index < 5) {
                document.getElementById(`otp-${index + 1}`)?.focus();
            }
        }
    };

    useEffect(() => {
        const enteredOtp = otp.join("");

        if (enteredOtp.length === 6) {
            if (enteredOtp === "123456") {
                navigate("/");
            } else {
                alert("Invalid OTP ❌");
            }
        }
    }, [otp, navigate]);

    return (
        <div className="w-full lg:w-1/2 flex justify-center items-center px-8 sm:px-8">
            <div className="w-full max-w-lg py-6 sm:py-8 lg:py-9 ">
                <div className="p-6 sm:p-8 border border-gray-200">
                    <h3 className="font-normal text-xl sm:text-3xl lg:text-2xl mb-2 sm:mb-2 text-center sm:text-left">
                        Enter OTP
                    </h3>

                    <p className="text-base sm:text-lg lg:text-md text-gray-500 mb-8 sm:mb-12 ">
                        We've sent a 6-digit code to +91 {phone}
                    </p>

                    <div className="flex gap-2 sm:gap-3 lg:gap-4 mb-6 justify-center">
                        {otp.map((val, idx) => (
                            <input
                                key={idx}
                                id={`otp-${idx}`}
                                type="text"
                                maxLength={1}
                                value={val}
                                onChange={(e) => handleChange(e, idx)}
                                className="
                                    w-8 h-8 
                                    sm:w-14 sm:h-14 
                                    md:w-16 md:h-16 
                                    lg:w-14 lg:h-14
                                    border border-gray-300 
                                    text-center text-lg sm:text-xl 
                                    focus:outline-none
                                "
                            />
                        ))}
                    </div>

                    <button
                        onClick={goBack}
                        className="w-full text-black py-4 sm:py-5 lg:py-3  sm:text-sm border border-gray-300 mt-4"
                    >
                        CHANGE NUMBER
                    </button>

                    <p className="text-center mt-8 sm:mt-10 lg:mt-12 text-gray-500 text-sm sm:text-base lg:text-md">
                        Didn’t receive the code?{" "}
                        <span className="cursor-pointer">Resend OTP</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OTPPage;
