import { FiX } from "react-icons/fi";

const notifications = [
    {
        id: 1,
        type: "success",
        title: "NEW INQUIRY!",
        message: "Someone is interested in your Luxury Penthouse, Juhu",
        time: "2 HOURS AGO",
        dot: "bg-green-500",
    },
    {
        id: 2,
        type: "info",
        title: "1,000 VIEWS REACHED!",
        message: "Your Sea View Residency video hit 1K views",
        time: "5 HOURS AGO",
        dot: "bg-blue-500",
    },
    {
        id: 3,
        type: "warning",
        title: "SUBSCRIPTION EXPIRING SOON",
        message: "Your Premium plan expires in 23 days",
        time: "YESTERDAY",
        dot: "bg-yellow-500",
    },
];

const NotificationsModal = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50"
            onClick={onClose} // close on click outside
            style={{ fontFamily: "Montserrat, sans-serif" }}
        >
            {/* Popup Panel */}
            <div
                className="absolute top-60 left-10 w-60 bg-white shadow-xl rounded-lg flex flex-col
                   border border-gray-200 overflow-hidden"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                    <div>
                        <p className="text-xs tracking-widest text-green-600 font-medium">
                            ALERTS
                        </p>
                        <h3 className="text-sm font-normal text-gray-900">
                            Recent Updates
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 transition"
                    >
                        <FiX size={18} />
                    </button>
                </div>

                {/* Notifications List */}
                <div className="max-h-72 overflow-y-auto px-6 py-4 space-y-4">
                    {notifications.map((item) => (
                        <div key={item.id} className="flex gap-2">
                            <span className={`w-2 h-2 mt-3 rounded-full ${item.dot}`} />
                            <div>
                                <h3 className="text-[10px] font-semibold tracking-widest text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-[14px] text-gray-500">{item.message}</p>
                                <p className="text-sm text-gray-400 mt-1 tracking-widest">
                                    {item.time}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className=" py-4 ">
                        <button className="w-full bg-black text-white text-xs tracking-widest py-2  rounded hover:bg-green-700 transition">
                            VIEW ALL
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationsModal;
