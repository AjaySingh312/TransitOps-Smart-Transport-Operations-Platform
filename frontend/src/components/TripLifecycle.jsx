import { Circle } from "lucide-react";

const steps = [
  { name: "Draft", color: "text-green-500" },
  { name: "Dispatched", color: "text-blue-500" },
  { name: "Completed", color: "text-gray-400" },
  { name: "Cancelled", color: "text-gray-400" },
];

export default function TripLifecycle() {
  return (
    <div className="mb-8">

      <h3 className="font-semibold mb-4">
        Trip Lifecycle
      </h3>

      <div className="flex items-center justify-between">

        {steps.map((step, index) => (
          <div
            key={step.name}
            className="flex items-center flex-1"
          >
            <div className="flex flex-col items-center">
              <Circle
                size={18}
                fill="currentColor"
                className={step.color}
              />
              <span className="text-xs mt-2">
                {step.name}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div className="flex-1 h-1 bg-gray-300"></div>
            )}
          </div>
        ))}

      </div>

    </div>
  );
}
