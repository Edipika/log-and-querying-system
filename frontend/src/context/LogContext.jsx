import { createContext, useContext, useState, useCallback } from "react";

const LogContext = createContext();

export function LogProvider({ children }) {
  const [logs, setLogs] = useState([]);
  const [showAddLog, setShowAddLog] = useState(false);

  const fetchAllLogs = useCallback(() => {
    fetch("http://localhost:5000/log/show")
      .then(res => res.json())
      .then(data => setLogs(data))
      .catch(err => console.error("Error fetching logs:", err));
  }, []);

  const handleKeywordChange = useCallback((keyword) => {
    if (keyword === "") {
      fetchAllLogs();
    } else {
      fetch(`http://localhost:5000/log/search?keyword=${encodeURIComponent(keyword)}`)
        .then(res => res.json())
        .then(data => setLogs(data))
        .catch(err => console.error("Search error:", err));
    }
  }, [fetchAllLogs]);

  const handleFilter = useCallback((filteredData) => {
    setLogs(filteredData);
  }, []);

  return (
    <LogContext.Provider value={{
      logs, setLogs,
      showAddLog, setShowAddLog,
      fetchAllLogs, handleKeywordChange, handleFilter
    }}>
      {children}
    </LogContext.Provider>
  );
}

export const useLogContext = () => useContext(LogContext);
