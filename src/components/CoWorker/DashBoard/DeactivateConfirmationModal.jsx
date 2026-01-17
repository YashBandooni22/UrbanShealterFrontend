import React, { useEffect } from "react";

const DeactivateConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    // ESC key close
    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/10 backdrop-blur-md z-40"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div
                role="dialog"
                aria-modal="true"
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
                <div className="bg-white w-full max-w-md p-10 text-center shadow-xl">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gray-900 flex items-center justify-center mx-auto mb-6">
                        <svg
                            width="26"
                            height="26"
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

                    {/* Title */}
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">
                        Exit Session?
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-8">
                        Are you sure you want to deactivate your co-worker account? You will
                        lose all access and this cannot be undone.
                    </p>

                    {/* Confirm */}
                    <button
                        onClick={onConfirm}
                        className="w-full bg-red-600 text-white py-4 text-xs tracking-[0.3em] uppercase mb-4"
                    >
                        Confirm Deactivation
                    </button>

                    {/* Cancel */}
                    <button
                        onClick={onClose}
                        className="w-full border border-gray-200 py-4 text-xs tracking-[0.3em] uppercase text-gray-400 hover:text-gray-600 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
};

export default DeactivateConfirmationModal;
