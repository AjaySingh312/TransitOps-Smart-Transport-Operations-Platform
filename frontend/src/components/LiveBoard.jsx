import { liveTrips } from "../data/trips";
import StatusBadge from "./StatusBadge";

export default function LiveBoard() {
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="font-semibold text-lg mb-6">
        Live Board
      </h2>

      {liveTrips.map((trip) => (
        <div
          key={trip.id}
          className="border-b py-4"
        >

          <div className="flex justify-between">

            <div>

              <h3 className="font-semibold">
                {trip.id}
              </h3>

              <p className="text-gray-600">
                {trip.route}
              </p>

              <div className="mt-2">

                <StatusBadge status={trip.status} />

              </div>

            </div>

            <div className="text-right text-sm text-gray-500">

              <p>
                {trip.vehicle}
              </p>

              <p>
                {trip.driver}
              </p>

              <p className="mt-4">
                {trip.eta}
              </p>

            </div>

          </div>

        </div>
      ))}

      <p className="text-xs text-gray-500 mt-5">
        On Complete → Odometer → Fuel Log → Expenses →
        Vehicle & Driver become Available
      </p>

    </div>
  );
}
