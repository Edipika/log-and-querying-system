import { useState, useEffect } from "react";

function Search({ onKeywordChange }) {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onKeywordChange(keyword.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword, onKeywordChange]);

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        placeholder="Search by Message..."
        className="border p-2 rounded w-full sm:w-auto"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default Search;
