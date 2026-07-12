import { Plus } from "lucide-react.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import DriversTable from "../components/DriversTable.jsx";

export default function Drivers() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          {/* Header */}

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Drivers & Safety Profiles
            </h2>

            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg">
              <Plus size={18} />
              Add Driver
            </button>

          </div>

          <DriversTable />

          {/* Toggle Status */}

          <div className="mt-8">

            <h3 className="font-semibold mb-4">
              Toggle Status
            </h3>

            <div className="flex gap-4 flex-wrap">

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Available
              </button>

              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                On Trip
              </button>

              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                Off Duty
              </button>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                Suspended
              </button>

            </div>

            <p className="text-red-500 text-sm mt-4">
              Rule: Drivers with expired licenses or suspended status
              cannot be assigned to trips.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
