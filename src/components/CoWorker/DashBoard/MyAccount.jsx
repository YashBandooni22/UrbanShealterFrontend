import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Section = ({ title, children }) => (
    <div className="border border-neutral-200 bg-white p-10">
        <p className="text-[11px] tracking-widest text-neutral-400 uppercase mb-8">
            {title}
        </p>
        {children}
    </div>
);


const Field = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder,
    icon,
}) => {
    return (
        <div>
            <label className="text-[11px] tracking-widest text-neutral-400 uppercase mb-2 block">
                {label}
            </label>

            <div className="flex items-center gap-3 border border-neutral-200 px-5 py-4 bg-gray-50">
                {icon && <span className="text-neutral-400">{icon}</span>}

                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full text-sm text-neutral-900 outline-none bg-transparent"
                />
            </div>
        </div>
    );
};



const MyAccount = () => {
    const [form, setForm] = useState({
        fullName: "Rajesh Kumar",
        email: "rajesh.kumar@email.com",
        phone: "+91 98765 43210",
        city: "Mumbai, Maharashtra",
        accountName: "Rajesh Kumar",
        bankName: "HDFC Bank",
        accountNumber: "4532",
        ifsc: "HDFC0001234",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-neutral-50 min-h-screen">
            <div className="max-w-6xl mx-auto p-8 space-y-12">

                {/* PAGE HEADER */}
                <header>
                    <h3 className="text-[35px] text-neutral-900">My Account</h3>
                    <p className="text-sm text-neutral-500 mt-6">
                        Update your personal info and bank details here.
                    </p>
                </header>

                {/* PROFILE CARD */}
                <div className="border border-neutral-200 bg-white p-8 flex items-start justify-between">
                    <div className="flex items-start gap-8">
                        <div className="w-24 h-24 border border-neutral-200 flex items-center justify-center text-xl bg-gray-50">
                            RK
                        </div>

                        <div>
                            <h3 className="text-2xl text-neutral-900">{form.fullName}</h3>
                            <p className="text-xs tracking-widest text-neutral-400 mt-2">
                                PARTNER ID: CW-123456
                            </p>
                            <p className="text-xs tracking-widest text-neutral-400 mt-1">
                                JOINED: JANUARY 15, 2025
                            </p>
                        </div>
                    </div>

                    <div className="border border-neutral-900 px-6 py-2 text-xs tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        ACTIVE
                    </div>
                </div>

                {/* MY DETAILS */}
                <Section title="My details">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Field label="Full name" name="fullName" value={form.fullName} onChange={handleChange} />
                        <Field label="Email address" name="email" value={form.email} onChange={handleChange} icon={<FiMail />} />
                        <Field label="Phone number" name="phone" value={form.phone} onChange={handleChange} icon={<FiPhone />} />
                        <Field label="City" name="city" value={form.city} onChange={handleChange} icon={<FiMapPin />} />
                    </div>
                </Section>

                {/* WHERE I GET PAID */}
                <Section title="Where I get paid">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Field label="Name on account" name="accountName" value={form.accountName} onChange={handleChange} />
                        <Field label="Bank name" name="bankName" value={form.bankName} onChange={handleChange} />
                        <Field label="Account number" name="accountNumber" value={form.accountNumber} onChange={handleChange} />
                        <Field label="IFSC code" name="ifsc" value={form.ifsc} onChange={handleChange} />
                    </div>
                </Section>

                {/* PASSWORD */}
                <Section title="My password">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Make Current Password full width by spanning 2 columns on md+ screens */}
                        <div className="md:col-span-2">
                            <Field
                                label="Current password"
                                name="currentPassword"
                                type="password"
                                value={form.currentPassword}
                                onChange={handleChange}
                                placeholder="Enter current password"
                            />
                        </div>

                        <Field
                            label="New password"
                            name="newPassword"
                            type="password"
                            value={form.newPassword}
                            onChange={handleChange}
                            placeholder="Enter new password"
                        />
                        <Field
                            label="Confirm new password"
                            name="confirmPassword"
                            type="password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm new password"
                        />
                    </div>

                    <div className="flex justify-end mt-10">
                        <button className="bg-neutral-900 text-white px-10 py-4 text-xs tracking-widest">
                            SAVE PASSWORD
                        </button>
                    </div>
                </Section>

                {/* FOOTER ACTIONS */}
                <div className="flex items-center gap-6">
                    <button className="flex-1 bg-gradient-to-r from-[#0F172A] to-[#020617] text-white py-5 text-xs tracking-widest font-semibold">
                        SAVE MY INFO
                    </button>

                    <button className="border border-neutral-200 px-10 py-5 text-xs tracking-widest text-neutral-400">
                        CANCEL
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MyAccount;
