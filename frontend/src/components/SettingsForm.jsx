import { useState } from "react";

export default function SettingsForm() {
  const [settings, setSettings] = useState({
    depot: "Gandhinagar Depot",
    currency: "INR (₹)",
    distance: "Kilometers",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        General Settings
      </h2>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 text-gray-600">
            Depot Name
          </label>

          <input
            name="depot"
            value={settings.depot}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600">
            Currency
          </label>

          <input
            name="currency"
            value={settings.currency}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600">
            Distance Unit
          </label>

          <select
            name="distance"
            value={settings.distance}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Kilometers</option>
            <option>Miles</option>
          </select>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Save Changes
        </button>

      </div>

    </div>
  );
}
