export default function StatusBadge({ status }) {
  const colors = {
    Available: "bg-green-500",
    "On Trip": "bg-blue-500",
    "Off Duty": "bg-gray-500",
    Suspended: "bg-orange-500",
  };

  return (
    <span
      className={`px-3 py-1 rounded-md text-white text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}
