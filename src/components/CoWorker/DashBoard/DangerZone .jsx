import React, { useState } from 'react'
import DeactivateConfirmationModal from './DeactivateConfirmationModal';

const DangerZone = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-gray-50 border-2 border-black p-10 w-full max-w-4xl">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center">
                    {/* Warning Icon (inline SVG for exact look) */}
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 9V13"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <circle cx="12" cy="17" r="1" fill="white" />
                        <path
                            d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </svg>
                </div>

                <div>
                    <p className="text-xs font-bold text-gray-900 uppercase">
                        Vault Access
                    </p>
                    <p className="text-sm text-gray-500">Danger Zone</p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 max-w-2xl leading-relaxed mb-10">
                Once you deactivate your co-worker account, you will lose access to all
                referral links, pending earnings, and insights. This action is permanent
                and cinematic progress cannot be recovered.
            </p>

            {/* Action */}
            <button className="bg-gray-900  text-white px-10 py-4 text-xs tracking-[0.25em] uppercase shadow-lg hover:bg-red-600"
                onClick={() => setShowModal(true)}>

                Deactivate Partner Account
            </button>

            <DeactivateConfirmationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={() => {
                    // deactivate logic here
                    setShowModal(false);
                }}
            />
        </div>


    );
};

export default DangerZone 