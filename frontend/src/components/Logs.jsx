import React from "react";
import Filters from "./Filters";
import Table from "./Table";
import Search from "./Search";
import { useEffect, useState } from "react";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    console.log("Fetching logs..."); // Debug: Initial fetch trigger

    fetch("http://localhost:5000/log/show")
      .then((res) => {
        console.log("Fetch response status:", res.status); // Debug: Check response status
        if (!res.ok) {
          throw new Error("Failed to fetch logs");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched logs data:", data); // Debug: View entire response data
        setLogs(data); // Assuming your API returns { data: [...] }
      })
      .catch((err) => {
        console.error("Error fetching logs:", err);
      });
  }, []);

  const handleSearch = (searchResults) => {
    setLogs(searchResults); // Update table with search results
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 text-sm text-gray-800 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b pb-4">
        <div className="flex items-center gap-6 text-blue-600 font-semibold">
          <span className="cursor-pointer">📄 Log Message</span>
        </div>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500 text-sm">
          Add Log
        </button>
      </div>

      {/* search */}
      <Search onSearch={handleSearch} />

      {/* Filters */}
      <Filters />

      {/* Log Data Table */}
      <Table logs={logs} />
    </div>
  );
}
