import {
  expenses,
  totalOperationalCost,
} from "../data/fuelExpenses";

import StatusBadge from "./StatusBadge";

export default function ExpenseTable() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">

      <h2 className="text-lg font-semibold mb-5">
        Other Expenses (Toll / Misc)
      </h2>

      <table className="w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-3">Trip</th>
            <th>Vehicle</th>
            <th>Toll</th>
            <th>Other</th>
            <th>Maintenance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {expenses.map((expense, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">

              <td className="p-3">{expense.trip}</td>
              <td>{expense.vehicle}</td>
              <td>{expense.toll}</td>
              <td>{expense.other}</td>
              <td>{expense.maintenance}</td>

              <td>
                <StatusBadge status={expense.status} />
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <div className="flex justify-between mt-6 border-t pt-4">

        <span className="font-semibold">
          Total Operational Cost
        </span>

        <span className="text-xl font-bold text-orange-500">
          {totalOperationalCost}
        </span>

      </div>

    </div>
  );
}
