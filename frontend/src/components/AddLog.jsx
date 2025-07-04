function AddLog() {
  return (
    <>
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="border p-2 rounded w-full sm:w-auto">
          <option value="">Level</option>
          <option value="info">Info</option>
          <option value="warn">Warning</option>
          <option value="debug">Debug</option>
          <option value="error">Error</option>
        </select>
        <input
          placeholder="Message"
          className="border p-2 rounded w-full sm:w-auto"
        />
        <input
          placeholder="Resource Id"
          className="border p-2 rounded w-full sm:w-auto"
        />
        <input
          placeholder="Trace Id"
          className="border p-2 rounded w-full sm:w-auto"
        />
        <input
          placeholder="Span Id"
          className="border p-2 rounded w-full sm:w-auto"
        />
        <input
          placeholder="Commit"
          className="border p-2 rounded w-full sm:w-auto"
        />
        <input
          placeholder="metaData"
          className="border p-2 rounded w-full sm:w-auto"
        />
        <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500">
          submit
        </button>
      </div>
    </>
  );
}

export default AddLog;
