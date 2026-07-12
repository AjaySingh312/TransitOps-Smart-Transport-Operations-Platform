import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FuelLogs from "../components/FuelLogs";
import ExpenseTable from "../components/ExpenseTable";

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
