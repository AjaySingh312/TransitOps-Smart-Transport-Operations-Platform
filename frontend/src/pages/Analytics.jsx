import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import AnalyticsCards from "../components/AnalyticsCards.jsx";
import RevenueChart from "../components/RevenueChart.jsx";
import CostliestVehicles from "../components/CostliestVehicles.jsx";

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <AnalyticsCards />

          <p className="text-gray-500 mb-6">
            ROI = (Revenue − Maintenance − Fuel) ÷ Acquisition Cost
          </p>

          <div className="grid lg:grid-cols-2 gap-6">

            <RevenueChart />

            <CostliestVehicles />

          </div>

        </div>

      </div>

    </div>
  );
}
