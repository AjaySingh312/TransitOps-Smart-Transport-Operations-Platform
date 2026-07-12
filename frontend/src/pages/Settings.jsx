import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SettingsForm from "../components/SettingsForm";
import RBAC from "../components/RBAC";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <div className="grid lg:grid-cols-2 gap-6">

            <SettingsForm />

            <RBAC />

          </div>

        </div>

      </div>

    </div>
  );
}
