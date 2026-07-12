import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import TripLifecycle from "../components/TripLifecycle.jsx";
import TripForm from "../components/TripForm.jsx";
import LiveBoard from "../components/LiveBoard.jsx";

export default function Trips() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6 grid lg:grid-cols-2 gap-8">

          <div>

            <TripLifecycle />

            <TripForm />

          </div>

          <LiveBoard />

        </div>

      </div>

    </div>
  );
}
