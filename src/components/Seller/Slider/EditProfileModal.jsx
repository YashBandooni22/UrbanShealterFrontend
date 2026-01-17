import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const EditProfileModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        sellerId: "URSH-2024-7823",
        fullName: "Rajesh Kumar",
        email: "rajesh.kumar@example.com",
        phone: "+91 98765 43210",
        businessName: "RK Properties",
        gstNumber: "27AABCU9603R1ZM",
        address: "Andheri West, Mumbai, Maharashtra",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400058",
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Add your save logic here (API call)
        console.log("Saved Data:", formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm ">
            <div className="bg-white w-full max-w-2xl h-[90vh] rounded-lg shadow-lg px-6 relative overflow-auto">
                {/* Sticky Header */}
                <div className="sticky top-0 bg-white w-full z-10 p-4 mt-2 border-b border-gray-100 mb-4 ">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                    <h3 className="text-2xl mb-1">Edit Profile</h3>
                    <p className="text-gray-400">Update your account information</p>
                </div>

                {/* Profile Photo */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                        Profile Photo
                    </p>

                    <div className="flex items-center gap-6 border-b border-gray-200 pb-6">
                        {/* Avatar */}
                        <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white text-3xl font-light">
                            RK
                        </div>

                        {/* Change Photo Button */}
                        <button
                            type="button"
                            className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition"
                        >
                            <span>📷</span>
                            Change Photo
                        </button>
                    </div>
                </div>


                {/* Form */}
                <div className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Seller ID *</label>
                        <div className="flex items-center border border-gray-300  rounded px-3 py-2 bg-gray-100 ">
                            <FaPhone className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="seller"
                                value={formData.sellerId}
                                onChange={handleChange}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>


                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Full Name *</label>
                        <div className="flex items-center  border border-gray-300  rounded px-3 py-2">
                            <FaUser className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email Address *</label>
                        <div className="flex items-center border border-gray-300  rounded ed px-3 py-2">
                            <FaEnvelope className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-600">Phone Number *</label>
                        <div className="flex items-center border border-gray-300  rounded px-3 py-2">
                            <FaPhone className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>

                    {/* Business Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Business Name</label>
                        <div className="flex items-center  border border-gray-300  rounded px-3 py-2">
                            <FaBuilding className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>

                    {/* GST Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">GST Number</label>
                        <input
                            type="text"
                            name="gstNumber"
                            value={formData.gstNumber}
                            onChange={handleChange}
                            className="w-full  border border-gray-300  rounded  px-3 py-2 outline-none"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Address</label>
                        <div className="flex items-start  border border-gray-300  rounded px-3 py-2">
                            <FaMapMarkerAlt className="text-gray-400 mr-2 mt-2" />
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full outline-none resize-none"
                                rows={2}
                            />
                        </div>
                    </div>

                    {/* City, State, Pincode */}
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full  border border-gray-300  rounded px-3 py-2 outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full  border border-gray-300  rounded px-3 py-2 outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className="w-full  border border-gray-300  rounded px-3 py-2 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Sticky Footer */}
                <div className="sticky bottom-0 z-10 bg-white border-t border-gray-300 mt-6">
                    <div className="flex items-center justify-between py-4">
                        <p className="text-sm text-gray-500">
                            * Required fields
                        </p>

                        <div className="flex items-center space-x-3">
                            <button
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition"
                                onClick={onClose}
                            >
                                Cancel
                            </button>

                            <button
                                className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;
