export default function FilterBar() {
  return (
    <div className="flex gap-4 flex-wrap">

      <select className="border rounded-lg px-4 py-2">
        <option>Vehicle Type</option>
      </select>

      <select className="border rounded-lg px-4 py-2">
        <option>Status</option>
      </select>

      <select className="border rounded-lg px-4 py-2">
        <option>Region</option>
      </select>

    </div>
  );
}
