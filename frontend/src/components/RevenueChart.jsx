import { revenue } from "../data/analytics";

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="font-semibold mb-4">
        Monthly Revenue
      </h2>

      <div className="flex items-end gap-3 h-60">

        {revenue.map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-blue-500 rounded-t-md"
            style={{
              height: `${value * 8}px`,
            }}
          />
        ))}

      </div>

    </div>
  );
}
