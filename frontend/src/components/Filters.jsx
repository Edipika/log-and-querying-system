function Filters() {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <input type="text" placeholder="Sender Name" className="border p-2 rounded w-40" />
      <input type="text" placeholder="Mobile Number" className="border p-2 rounded w-40" />
      <input type="datetime-local" className="border p-2 rounded" />
      <input type="datetime-local" className="border p-2 rounded" />
      <select className="border p-2 rounded w-40">
        <option>Gateway...</option>
      </select>
      <select className="border p-2 rounded w-40">
        <option>Status...</option>
      </select>
      <input type="text" placeholder="Template Id" className="border p-2 rounded w-40" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go</button>
    </div>
  );
}

export default Filters;
