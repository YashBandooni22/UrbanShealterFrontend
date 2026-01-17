import React, { useEffect } from "react";
import {
  FiX,
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiDownload,
} from "react-icons/fi";

const sellers = [
  {
    name: "Rahul Kapoor",
    phone: "+91 98765 43210",
    email: "rahul.kapoor@email.com",
    plan: "Standard - ₹1,000/mo",
  },
  {
    name: "Meera Iyer",
    phone: "+91 98765 43211",
    email: "meera.iyer@email.com",
    plan: "Basic - ₹800/mo",
    highlighted: true,
  },
  {
    name: "Arjun Singh",
    phone: "+91 98765 43212",
    email: "arjun.singh@email.com",
    plan: "Premium - ₹1,500/mo",
  },
  {
    name: "Kavita Menon",
    phone: "+91 98765 43213",
    email: "kavita.menon@email.com",
    plan: "Standard - ₹1,000/mo",
  },
];

const FollowUpModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="w-[1100px] max-h-[90vh] bg-white shadow-xl flex flex-col">

        {/* Header (Sticky) */}
        <div className="sticky top-0 z-10 bg-white border-b px-8 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-serif text-neutral-900">
            Follow up with these people
          </h2>
          <button onClick={onClose} aria-label="Close">
            <FiX className="text-neutral-400 text-xl" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
          {sellers.map((seller, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[2fr_2fr_3fr_2fr_auto] items-center gap-6 px-6 py-5 border ${
                seller.highlighted
                  ? "border-neutral-900"
                  : "border-neutral-200"
              }`}
            >
              <Info label="SELLER NAME" value={seller.name} />
              <Info label="PHONE" value={seller.phone} />
              <Info label="EMAIL" value={seller.email} />

              <div>
                <p className="text-xs text-neutral-400 tracking-wide">
                  TRIAL ENDS
                </p>
                <p className="text-sm text-neutral-900">Jan 7, 2026</p>
                <p className="text-xs text-neutral-500 mt-1">
                  {seller.plan}
                </p>
              </div>

              <div className="flex gap-3">
                <IconButton icon={<FiPhone />} />
                <IconButton icon={<FiMail />} />
                <IconButton icon={<FiMessageCircle />} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer (Sticky) */}
        <div className="sticky bottom-0 z-10 bg-white border-t px-8 py-6 flex items-center justify-between">
          <p className="text-sm text-neutral-500">5 sellers</p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-neutral-900 text-sm font-medium">
              <FiDownload />
              EXPORT CSV
            </button>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-neutral-900 text-white text-sm font-medium"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs text-neutral-400 tracking-wide">{label}</p>
    <p className="text-sm text-neutral-900 mt-1">{value}</p>
  </div>
);

const IconButton = ({ icon }) => (
  <button className="w-10 h-10 flex items-center justify-center border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
    {icon}
  </button>
);

export default FollowUpModal;
