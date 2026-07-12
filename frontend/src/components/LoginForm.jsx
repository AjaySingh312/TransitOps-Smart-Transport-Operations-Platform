import { useState } from "react";

export default function LoginForm() {
  const [role, setRole] = useState("Dispatcher");

  return (
    <div className="w-full max-w-md">

      <h1 className="text-4xl font-bold">
        Sign in to your account
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Enter your credentials to continue
      </p>

      {/* Email */}

      <div className="mb-5">
        <label className="text-sm text-gray-600">
          Email
        </label>

        <input
          type="email"
          placeholder="raven.k@transitops.in"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
        />
      </div>

      {/* Password */}

      <div className="mb-5">
        <label className="text-sm text-gray-600">
          Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
        />
      </div>

      {/* Role */}

      <div className="mb-5">
        <label className="text-sm text-gray-600">
          Role (RBAC)
        </label>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
        >
          <option>Fleet Manager</option>
          <option>Dispatcher</option>
          <option>Safety Officer</option>
          <option>Financial Analyst</option>
        </select>
      </div>

      {/* Remember */}

      <div className="flex justify-between items-center mb-6">

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Remember me
        </label>

        <button className="text-blue-500 text-sm hover:underline">
          Forgot password?
        </button>

      </div>

      {/* Button */}

      <button className="w-full rounded-lg bg-yellow-500 hover:bg-yellow-600 py-3 font-semibold transition">
        Sign In
      </button>

      <hr className="my-8" />

      <div className="text-sm text-gray-600">
        <p className="mb-3">
          Access is scoped by role after login:
        </p>

        <ul className="space-y-2 list-disc ml-5">
          <li>Fleet Manager → Fleet, Maintenance</li>
          <li>Dispatcher → Dashboard, Trips</li>
          <li>Safety Officer → Drivers, Compliance</li>
          <li>Financial Analyst → Fuel & Expenses, Analytics</li>
        </ul>
      </div>

      {/* Error Example */}

      <div className="mt-8 rounded-xl border-2 border-red-400 border-dashed bg-red-50 p-4">
        <h3 className="font-semibold text-red-600">
          Error
        </h3>

        <p className="text-sm text-red-500 mt-2">
          Invalid credentials.
          <br />
          Account locked after 5 failed attempts.
        </p>
      </div>

    </div>
  );
}
