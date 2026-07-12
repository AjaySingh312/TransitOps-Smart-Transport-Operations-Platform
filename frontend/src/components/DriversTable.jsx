import { drivers } from "../data/drivers";
import StatusBadge from "./StatusBadge";

export default function DriversTable() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50">

          <tr className="text-gray-600">

            <th className="p-4 text-left">Driver</th>
            <th>License No.</th>
            <th>Category</th>
            <th>Expiry</th>
            <th>Contact</th>
            <th>Trip Completion</th>
            <th>Safety</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {drivers.map((driver) => (
            <tr
              key={driver.license}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{driver.name}</td>
              <td>{driver.license}</td>
              <td>{driver.category}</td>
              <td>{driver.expiry}</td>
              <td>{driver.contact}</td>
              <td>{driver.completion}</td>

              <td>
                <StatusBadge status={driver.safety} />
              </td>

              <td>
                <StatusBadge status={driver.status} />
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
