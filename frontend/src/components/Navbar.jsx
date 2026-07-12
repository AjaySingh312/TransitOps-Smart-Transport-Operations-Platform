import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white border-b px-6 py-4 flex justify-between items-center">

      <input
        placeholder="Search..."
        className="border rounded-lg px-4 py-2 w-72"
      />

      <div className="flex items-center gap-6">

        <Bell />

        <span>Raven K.</span>

        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          Dispatcher
        </div>

      </div>

    </div>
  );
}
