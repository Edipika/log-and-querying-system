import { useState } from "react";
import { useLogContext } from "../context/LogContext";


function Filters() {

  const { handleFilter } = useLogContext();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [level, setLevel] = useState("");
  const [resourceId, setResourceId] = useState("");
  const [message, setMessage] = useState("");

  const applyFilter = () => {
    const params = new URLSearchParams();

    if (startTime) params.append("startTime", startTime);
    if (endTime) params.append("endTime", endTime);
    if (level) params.append("level", level);
    if (resourceId.trim()) params.append("resourceId", resourceId.trim());
    if (message.trim()) params.append("message", message.trim());

    fetch(`http://localhost:5000/log/filter?${params.toString()}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to apply filter");
        return res.json();
      })
      .then(data => {
        console.log("Filtered data:", data);
        handleFilter(data.data);  // Send filtered logs to parent
      })
      .catch(err => {
        console.error("Error filtering logs:", err);
      });
  };

  const resetFilter = () => {
    setStartTime("");
    setEndTime("");
    setLevel("");
    setResourceId("");
    setMessage("");

    fetch("http://localhost:5000/log/show")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch logs");
        return res.json();
      })
      .then(data => {
        console.log("All logs:", data);
        handleFilter(data);  
      })
      .catch(err => {
        console.error("Error fetching all logs:", err);
      });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6 items-end">

      {/* From Date */}
      <div className="flex flex-col">
        <label className="text-xs text-gray-500 mb-1">From</label>
        <input
          type="datetime-local"
          className="border p-2 rounded w-full sm:w-auto"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      {/* To Date */}
      <div className="flex flex-col">
        <label className="text-xs text-gray-500 mb-1">To</label>
        <input
          type="datetime-local"
          className="border p-2 rounded w-full sm:w-auto"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      {/* Level Dropdown */}
      <select
        className="border p-2 rounded w-full sm:w-auto"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="">Level</option>
        <option value="info">Info</option>
        <option value="warn">Warning</option>
        <option value="debug">Debug</option>
        <option value="error">Error</option>
      </select>

      {/* Resource ID */}
      <input
        placeholder="Resource Id"
        className="border p-2 rounded w-full sm:w-auto"
        value={resourceId}
        onChange={(e) => setResourceId(e.target.value)}
      />

      {/* Message */}
      <input
        placeholder="Message"
        className="border p-2 rounded w-full sm:w-auto"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Go Button */}
      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500"
        onClick={applyFilter}
      >
        Go
      </button>

      {/* Reset Button */}
      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500"
        onClick={resetFilter}
      >
        Reset
      </button>

    </div>

  );
}

export default Filters;
