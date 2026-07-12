import { roles } from "../data/roles";

export default function RBAC() {
  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        Role-Based Access Control (RBAC)
      </h2>

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="text-left p-3">Role</th>
            <th>Fleet</th>
            <th>Drivers</th>
            <th>Trips</th>
            <th>Fuel/Expenses</th>
            <th>Analytics</th>

          </tr>

        </thead>

        <tbody>

          {roles.map((item) => (
            <tr
              key={item.role}
              className="border-t text-center hover:bg-gray-50"
            >
              <td className="text-left p-3 font-medium">
                {item.role}
              </td>

              <td>{item.fleet}</td>
              <td>{item.drivers}</td>
              <td>{item.trips}</td>
              <td>{item.fuel}</td>
              <td>{item.analytics}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
