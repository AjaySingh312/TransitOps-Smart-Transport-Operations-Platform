import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import FuelLogs from "../components/FuelLogs.jsx";
import ExpenseTable from "../components/ExpenseTable.jsx";

export default function FuelExpenses() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <FuelLogs />

          <ExpenseTable />

        </div>

      </div>

    </div>
  );
}
