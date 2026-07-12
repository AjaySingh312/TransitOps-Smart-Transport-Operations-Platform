export default function TripForm() {
  return (
    <div>

      <h3 className="font-semibold mb-4">
        Create Trip
      </h3>

      <div className="space-y-3">

        <input placeholder="Source" className="w-full border rounded-lg p-3"/>

        <input placeholder="Destination" className="w-full border rounded-lg p-3"/>

        <select className="w-full border rounded-lg p-3">
          <option>Vehicle (Available Only)</option>
        </select>

        <select className="w-full border rounded-lg p-3">
          <option>Driver (Available Only)</option>
        </select>

        <input
          type="number"
          placeholder="Cargo Weight (kg)"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Planned Distance (km)"
          className="w-full border rounded-lg p-3"
        />

      </div>

      <div className="border border-red-500 bg-red-50 rounded-xl p-4 mt-5">

        <p className="text-red-600 text-sm">
          Vehicle Capacity: 500 kg
        </p>

        <p className="text-red-600 text-sm">
          Cargo Weight: 700 kg
        </p>

        <p className="text-red-700 font-semibold mt-2">
          Capacity exceeded by 200 kg
        </p>

      </div>

      <div className="flex gap-4 mt-6">

        <button
          disabled
          className="flex-1 bg-gray-300 rounded-lg py-3 cursor-not-allowed"
        >
          Dispatch Disabled
        </button>

        <button className="flex-1 bg-red-500 text-white rounded-lg py-3">
          Cancel
        </button>

      </div>

    </div>
  );
}
