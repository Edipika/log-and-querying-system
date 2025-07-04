import {  useState } from "react";
function Search({ onSearch }) {

  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (!keyword.trim()) return;

    fetch(`http://localhost:5000/log/search?keyword=${encodeURIComponent(keyword)}`)
      .then(res => {
        if (!res.ok) throw new Error("Search failed");
        return res.json();
      })
      .then(data => {
        console.log("Search results:", data);
        onSearch(data);  // Send data back to parent
      })
      .catch(err => {
        console.error("Error during search:", err);
      });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        placeholder="Search by Message..."
        className="border p-2 rounded w-full sm:w-auto"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
