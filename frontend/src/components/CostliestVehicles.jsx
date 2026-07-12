import { costliestVehicles } from "../data/analytics";

export default function CostliestVehicles() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="font-semibold mb-6">
        Top Costliest Vehicles
      </h2>

      <div className="space-y-6">

        {costliestVehicles.map((vehicle) => (
          <div key={vehicle.vehicle}>

            <div className="flex justify-between mb-2">
              <span>{vehicle.vehicle}</span>
              <span>{vehicle.percent}%</span>
            </div>

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className={`${vehicle.color} h-4 rounded-full`}
                style={{
                  width: `${vehicle.percent}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
