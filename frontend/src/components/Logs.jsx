import React, { useEffect, useState, useCallback } from "react";
import Filters from "./Filters";
import Table from "./Table";
import Search from "./Search";
import AddLog from "./AddLog";
import { useLogContext } from "../context/LogContext";

export default function Logs() {
   const {
    logs, setShowAddLog, showAddLog,
    fetchAllLogs, handleKeywordChange, handleFilter
  } = useLogContext();
 
  useEffect(() => {
    fetchAllLogs();
  }, [fetchAllLogs]);


  return (
    <div className="min-h-screen bg-white p-4 md:p-8 text-sm text-gray-800 font-sans">

      {/* Header with Enhanced Styling */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-[#e0e7ff] border border-[#d0d7f7] p-2 rounded-xl shadow-sm">

        <div className="flex items-center gap-3 text-[#556ee6] font-semibold text-lg">

          {/* Icon inside Light Grey Circle */}
          <span className="cursor-pointer flex items-center gap-2 hover:text-indigo-700 transition">
            <span className="bg-gray-100 text-gray-700 p-2 rounded-full text-xl">
              📄
            </span>
            <span>Logs</span>

          </span>

        </div>



        <div className="flex items-center gap-4">
            <Search/>

          <button
            className="px-4 py-2 bg-[#556ee6] text-white rounded-lg hover:bg-indigo-600 text-sm shadow-md transition"
            onClick={() => setShowAddLog(true)}
          >
            + Add Log
          </button>
        </div>


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

      <Filters />
      <Table />
    </div>
  );
}

