import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TripLifecycle from "../components/TripLifecycle";
import TripForm from "../components/TripForm";
import LiveBoard from "../components/LiveBoard";

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
