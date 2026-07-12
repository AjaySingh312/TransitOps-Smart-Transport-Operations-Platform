export default function StatusBadge({ status }) {
  const colors = {
    Available: "bg-green-500",
    "On Trip": "bg-blue-500",
    "In Shop": "bg-orange-500",
    Retired: "bg-red-500",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}
