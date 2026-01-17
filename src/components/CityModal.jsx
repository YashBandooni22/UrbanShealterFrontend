import { useEffect } from "react";

const CityModal = ({ cities, selectedCity, onSelect, onClose }) => {
    // ESC key handling
    useEffect(() => {
        const handler = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0  z-40"
            />

            {/* Modal */}
            <div className="fixed top-20 right-1/2 -translate-x-1/2 w-[280px] bg-white z-50 rounded-lg shadow-xl overflow-hidden">
                {/* Header */}
                <div className="max-h-[520px] overflow-y-auto">
                    <div className="px-6 py-4 ">
                        <p className="text-xs tracking-widest text-gray-500 uppercase">
                            Select Your City
                        </p>
                    </div>

                    {/* City List */}
                    {cities.map((city) => {
                        const isSelected = city.value === selectedCity;

                        return (
                            <div
                                key={city.value}
                                onClick={() => {
                                    if (city.active) {
                                        onSelect(city.value);
                                        onClose();
                                    }
                                }}
                                className={`flex items-center justify-between px-6 py-3 cursor-pointer
                  ${city.active ? "hover:bg-gray-50" : "hover:bg-gray-50"}
                `}
                            >
                                {/* Left */}
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-normal text-gray-400">
                                            {city.name}
                                        </span>

                                        {city.active && (
                                            <span className="w-2 h-2 rounded-full bg-green-500" />
                                        )}
                                    </div>

                                    <span className="text-xs tracking-wide text-gray-400 uppercase">
                                        {city.country}
                                    </span>
                                </div>

                                {/* Right */}
                                {!city.active && (
                                    <button
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-4 py-1 text-xs tracking-widest border rounded text-gray-500 hover:bg-gray-100"
                                    >
                                        NOTIFY
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CityModal;
