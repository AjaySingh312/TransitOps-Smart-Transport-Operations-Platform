import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Truck,
  Users,
  Route,
  Wrench,
  Fuel,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Fleet",
    path: "/vehicles",
    icon: Truck,
  },
  {
    name: "Drivers",
    path: "/drivers",
    icon: Users,
  },
  {
    name: "Trips",
    path: "/trips",
    icon: Route,
  },
  {
    name: "Maintenance",
    path: "/maintenance",
    icon: Wrench,
  },
  {
    name: "Fuel & Expenses",
    path: "/fuel-expenses",
    icon: Fuel,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm">
      {/* Logo */}
      <div className="px-6 py-6 border-b">
        <h1 className="text-2xl font-bold text-gray-800">
          TransitOps
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Smart Transport Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-5 px-3">
        {menu.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-yellow-100 text-yellow-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            <Icon size={18} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
