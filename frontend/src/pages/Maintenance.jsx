import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import MaintenanceForm from "../components/MaintenanceForm.jsx";
import ServiceLog from "../components/ServiceLog.jsx";

export default function Maintenance() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="grid lg:grid-cols-2 gap-6 p-6">

          <MaintenanceForm />

          <ServiceLog />

        </div>

      </div>

    </div>
  );
}
