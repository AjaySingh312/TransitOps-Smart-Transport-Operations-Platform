import { vehicles } from "../data/vehicles";
import StatusBadge from "./StatusBadge";

export default function VehicleTable() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50 text-gray-600">

          <tr>

            <th className="text-left p-4">Reg. No.</th>
            <th>Name / Model</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Odometer</th>
            <th>Acq. Cost</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map((vehicle) => (
            <tr
              key={vehicle.regNo}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{vehicle.regNo}</td>
              <td>{vehicle.name}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.capacity}</td>
              <td>{vehicle.odometer}</td>
              <td>₹ {vehicle.cost}</td>
              <td>
                <StatusBadge status={vehicle.status} />
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
