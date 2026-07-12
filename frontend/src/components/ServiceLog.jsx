import { serviceLogs } from "../data/maintenance";
import StatusBadge from "./StatusBadge";

export default function ServiceLog() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="font-semibold text-lg mb-6">
        Service Log
      </h2>

      <table className="w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="text-left p-3">Vehicle</th>
            <th>Service</th>
            <th>Cost</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {serviceLogs.map((item, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50"
            >

              <td className="p-3">
                {item.vehicle}
              </td>

              <td>{item.service}</td>

              <td>{item.cost}</td>

              <td>
                <StatusBadge status={item.status} />
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
