import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ScheduleVisitModal = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM",
  ];

  const handleTimeSelect = (time) => setSelectedTime(time);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-black/50 backdrop-blur-sm"
      onClick={onClose} // backdrop click closes modal
    >
      <div
        className="bg-white rounded-lg w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg  tracking-wider">SCHEDULE VISIT</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <AiOutlineClose size={20} />
          </button>
        </div>

        {/* Step 01: Select Date */}
        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 tracking-widest mb-2">
            STEP 01. SELECT VIEWING DATE
          </p>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border border-gray-200 rounded p-3 text-sm text-gray-400 placeholder-gray-300"
            placeholder="DD/MM/YYYY"
          />
        </div>

        {/* Step 02: Choose Time Slot */}
        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 tracking-widest mb-2">
            STEP 02. CHOOSE TIME SLOT
          </p>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`text-xs py-2 border rounded ${
                  selectedTime === time
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-400 border-gray-200 hover:border-black"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Finalize Viewing Preferences */}
        <div className="mb-8 mt-8  border-gray-300 rounded p-8 text-center text-gray-400 text-xs tracking-widest cursor-pointer">
          FINALIZE VIEWING PREFERENCES TO PREVIEW BRIEF
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-black text-white text-xs py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-800">
            <span>📞</span> CALL NOW
          </button>
          <button className="flex-1 bg-green-500 text-white text-xs py-3 rounded flex items-center justify-center gap-2 hover:bg-green-600">
            <span>💬</span> WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisitModal;
