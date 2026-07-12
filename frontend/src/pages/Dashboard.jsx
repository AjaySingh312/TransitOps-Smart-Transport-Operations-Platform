import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import FilterBar from "../components/FilterBar.jsx";
import StatCard from "../components/StatCard.jsx";
import TripsTable from "../components/TripsTable.jsx";
import VehicleStatus from "../components/VehicleStatus.jsx";

const stats = [
  {
    title: "Active Vehicles",
    value: 53,
    color: "border-blue-500",
  },
  {
    title: "Available Vehicles",
    value: 42,
    color: "border-green-500",
  },
  {
    title: "Maintenance",
    value: "05",
    color: "border-orange-500",
  },
  {
    title: "Active Trips",
    value: 18,
    color: "border-blue-500",
  },
  {
    title: "Pending Trips",
    value: "09",
    color: "border-blue-500",
  },
  {
    title: "Drivers On Duty",
    value: 26,
    color: "border-blue-500",
  },
  {
    title: "Fleet Utilization",
    value: "81%",
    color: "border-green-600",
  },
];

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <main className="flex-1">

        <Navbar />

        <div className="p-6">

          <FilterBar />

          <div className="grid lg:grid-cols-7 md:grid-cols-3 gap-4 mt-6">

            {stats.map((item) => (
              <StatCard key={item.title} {...item} />
            ))}

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">

            <div className="lg:col-span-2">
              <TripsTable />
            </div>

            <VehicleStatus />

          </div>

        </div>

      </main>

    </div>
  );
}
