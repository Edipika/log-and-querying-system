import { useState, useEffect } from "react";
import { useLogContext } from "../context/LogContext";


function Search() {
   const { handleKeywordChange } = useLogContext();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      handleKeywordChange(keyword.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword, handleKeywordChange]);

  return (
    <div className="">
      <input
        placeholder="🔍Search by Message..."
        className="px-3 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#556ee6] text-sm shadow-sm"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default Search;
