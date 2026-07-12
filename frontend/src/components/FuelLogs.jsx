import { fuelLogs } from "../data/fuelExpenses";

export default function FuelLogs() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Fuel Logs</h2>

        <div className="flex gap-3">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg">
            + Log Fuel
          </button>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg">
            + Add Expense
          </button>
        </div>
      </div>

      <table className="w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-3">Vehicle</th>
            <th>Date</th>
            <th>Liters</th>
            <th>Fuel Cost</th>
          </tr>
        </thead>

        <tbody>
          {fuelLogs.map((log, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="p-3">{log.vehicle}</td>
              <td>{log.date}</td>
              <td>{log.liters}</td>
              <td>{log.cost}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
