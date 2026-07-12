import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-between bg-[#1f252b] text-white p-14">
        <div>
          <div className="w-10 h-10 border-4 border-yellow-500 mb-6"></div>

          <h1 className="text-4xl font-bold">TransitOps</h1>
          <p className="text-gray-400 mt-2">
            Smart Transport Operations Platform
          </p>

          <div className="mt-40">
            <h2 className="text-2xl font-semibold mb-6">
              One login, Four roles:
            </h2>

            <ul className="space-y-4">
              {[
                "Fleet Manager",
                "Dispatcher",
                "Safety Officer",
                "Financial Analyst",
              ].map((role) => (
                <li key={role} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          TRANSITOPS © 2026 • RBAC ENABLED
        </p>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center bg-white px-6">
        <LoginForm />
      </div>
    </div>
  );
}
