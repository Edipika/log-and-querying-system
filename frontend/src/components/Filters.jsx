function Filters() {
  return (
           <>


            <div className="flex flex-wrap gap-4 mb-6">
                <input type="datetime-local" className="border p-2 rounded w-full sm:w-auto" />
                <input type="datetime-local" className="border p-2 rounded w-full sm:w-auto" />
                <select className="border p-2 rounded w-full sm:w-auto">
                    <option value="">Level</option>
                    <option value="info">Info</option>
                    <option value="warn">Warning</option>
                    <option value="debug">Debug</option>
                    <option value="error">Error</option>
                </select>
                <input placeholder="Resource Id" className="border p-2 rounded w-full sm:w-auto" />
                <input placeholder="Message" className="border p-2 rounded w-full sm:w-auto" />
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500">Go</button>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500">Reset</button>
            </div></>
  );
}

export default Filters;
