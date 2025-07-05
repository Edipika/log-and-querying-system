import React, { useEffect, useState, useCallback } from "react";
import Filters from "./Filters";
import Table from "./Table";
import Search from "./Search";
import AddLog from "./AddLog";

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [showAddLog, setShowAddLog] = useState(false);

  const fetchAllLogs = useCallback(() => {
    fetch("http://localhost:5000/log/show")
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.error("Error fetching logs:", err));
  }, []);

  useEffect(() => {
    fetchAllLogs();
  }, [fetchAllLogs]);

  const handleKeywordChange = useCallback((keyword) => {
    if (keyword === "") {
      fetchAllLogs();
    } else {
      fetch(`http://localhost:5000/log/search?keyword=${encodeURIComponent(keyword)}`)
        .then((res) => res.json())
        .then((data) => setLogs(data))
        .catch((err) => console.error("Error during search:", err));
    }
  }, [fetchAllLogs]);

  const handleFilter = useCallback((filteredData) => {
    setLogs(filteredData);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 text-sm text-gray-800 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b pb-4">
        <div className="flex items-center gap-6 text-blue-600 font-semibold">
          <span className="cursor-pointer">📄 Log Message</span>
        </div>
        <button className="px-4 py-2 bg-[#556ee6] text-white rounded hover:bg-indigo-600 text-sm" onClick={() => setShowAddLog(true)}>
          Add Log
        </button> 
      </div>

      {showAddLog && (
        <AddLog
          onSuccess={() => {
            setShowAddLog(false);
            fetchAllLogs();
          }}
          onCancel={() => setShowAddLog(false)}
        />
      )}

      <Search onKeywordChange={handleKeywordChange} />
      <Filters onFilter={handleFilter} />
      <Table logs={logs} />
    </div>
  );
}

