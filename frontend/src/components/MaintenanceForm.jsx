export default function MaintenanceForm() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="font-semibold text-lg mb-6">
        Log Service Record
      </h2>

      <div className="space-y-4">

        <select className="w-full border rounded-lg p-3">
          <option>VAN-05</option>
          <option>TRUCK-11</option>
          <option>MINI-03</option>
        </select>

        <input
          placeholder="Service Type"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Cost"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="date"
          className="w-full border rounded-lg p-3"
        />

        <select className="w-full border rounded-lg p-3">
          <option>Active</option>
          <option>Completed</option>
        </select>

      </div>

      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg mt-6">
        Save
      </button>

      <div className="mt-8 text-sm space-y-3">

        <div className="flex justify-between">

          <span className="text-green-600">
            Available
          </span>

          <span>
            → Creating Active Record →
          </span>

          <span className="text-orange-500">
            In Shop
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-orange-500">
            In Shop
          </span>

          <span>
            → Closing Record →
          </span>

          <span className="text-green-600">
            Available
          </span>

        </div>

        <p className="text-red-500 mt-4">
          Note: In Shop vehicles are removed from the dispatch pool.
        </p>

      </div>

    </div>
  );
}
