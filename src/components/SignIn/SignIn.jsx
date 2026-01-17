import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import OTPPage from "./OTPPage";

const SignIn = () => {
    const [phone, setPhone] = useState("");
    const [step, setStep] = useState("PHONE"); // PHONE | OTP

    return (
        <section className="min-h-screen max-w-8xl bg-white flex">
            <div className="w-full flex shadow-sm">
                <LeftPanel />

                {step === "PHONE" && (
                    <RightPanel
                        setPhone={setPhone}
                        goToOtp={() => setStep("OTP")}
                    />
                )}

                {step === "OTP" && (
                    <OTPPage
                        phone={phone}
                        goBack={() => setStep("PHONE")}
                    />
                )}
            </div>
        </section>
    );
};

export default SignIn;
