import { analytics } from "../data/analytics";

export default function AnalyticsCards() {
  const cards = [
    {
      title: "Fuel Efficiency",
      value: analytics.fuelEfficiency,
      border: "border-blue-500",
    },
    {
      title: "Fleet Utilization",
      value: analytics.fleetUtilization,
      border: "border-green-500",
    },
    {
      title: "Operational Cost",
      value: analytics.operationalCost,
      border: "border-orange-500",
    },
    {
      title: "Vehicle ROI",
      value: analytics.roi,
      border: "border-green-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-5 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-white shadow rounded-xl p-5 border-l-4 ${card.border}`}
        >
          <p className="text-gray-500 text-sm">{card.title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
