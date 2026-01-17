import { FaWallet, FaLink, FaChartBar } from "react-icons/fa";

const DashboardCards = () => {
  const cards = [
    {
      icon: <FaWallet className="w-6 h-6 text-gray-400" />,
      title: "My Money",
      description: "See how much you made and collect your pay.",
      action: "OPEN WALLET",
    },
    {
      icon: <FaLink className="w-6 h-6 text-gray-400" />,
      title: "My Links",
      description: "Get and manage your special sharing links.",
      action: "GET LINKS",
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-gray-400" />,
      title: "How I'm Doing",
      description: "See how many people click and join from your links.",
      action: "SEE MY STATS",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-12 rounded-lg shadow-sm flex flex-col hover:border hover:border-gray-500"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded mb-4">
              {card.icon}
            </div>
            <p className="text-lg text-gray-400 mb-2">{card.title}</p>
            <p className="text-sm text-gray-500 mb-4">{card.description}</p>
            <button className="text-xs font-semibold uppercase text-black flex items-center gap-1 hover:underline">
              {card.action} <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
