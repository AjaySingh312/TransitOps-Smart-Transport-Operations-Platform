import { Plus } from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import VehicleTable from "../components/VehicleTable";

export default function VehicleRegistry() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          {/* Filters */}

          <div className="flex flex-wrap justify-between gap-4 mb-6">

            <div className="flex gap-4 flex-wrap">

              <select className="border rounded-lg px-4 py-2">
                <option>Type : All</option>
                <option>Van</option>
                <option>Truck</option>
                <option>Mini</option>
              </select>

              <select className="border rounded-lg px-4 py-2">
                <option>Status : All</option>
                <option>Available</option>
                <option>On Trip</option>
                <option>In Shop</option>
                <option>Retired</option>
              </select>

              <input
                placeholder="Search Reg. No..."
                className="border rounded-lg px-4 py-2 w-64"
              />

            </div>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg flex items-center gap-2">
              <Plus size={18} />
              Add Vehicle
            </button>

          </div>

          <VehicleTable />

          <p className="mt-4 text-sm text-red-500">
            Rule: Registration number must be unique. Retired and In Shop
            vehicles are hidden from Trip Dispatch.
          </p>

        </div>

      </div>

    </div>
  );
}
