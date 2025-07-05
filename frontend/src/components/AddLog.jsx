import { useState } from "react";

function AddLog({ onSuccess, onCancel }) {
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");
  const [resourceId, setResourceId] = useState("");
  const [traceId, setTraceId] = useState("");
  const [spanId, setSpanId] = useState("");
  const [commit, setCommit] = useState("");
  const [metadata, setMetadata] = useState("");
  const [errorMsg, setErrorMsg] = useState("");  // To hold server error message

  const handleSubmit = () => {
    setErrorMsg(""); // Clear previous error

    // if (!level || !message || !resourceId || !traceId || !spanId || !commit) {
    //   setErrorMsg("Please fill all required fields.");
    //   return;
    // }

    let metaObj = {};
    try {
      metaObj = metadata ? JSON.parse(metadata) : {};
    } catch (err) {
      setErrorMsg("Metadata must be valid JSON.");
      return;
    }

    const payload = {
      level,
      message,
      resourceId,
      traceId,
      spanId,
      commit,
      metadata: metaObj
    };

    fetch("http://localhost:5000/log/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to add log");
        }
        return res.json();
      })
      .then(() => {
        alert("Log added successfully!");
        onSuccess();
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg(err.message || "Error adding log");
      });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6 border p-4 rounded shadow">
      {errorMsg && (
        <div className="w-full text-red-500 text-sm mb-2">{errorMsg}</div>
      )}

      <select className="border p-2 rounded w-full sm:w-auto" value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="">Level</option>
        <option value="info">Info</option>
        <option value="warn">Warning</option>
        <option value="debug">Debug</option>
        <option value="error">Error</option>
      </select>

      <input placeholder="Message" className="border p-2 rounded w-full sm:w-auto" value={message} onChange={(e) => setMessage(e.target.value)} />
      <input placeholder="Resource Id" className="border p-2 rounded w-full sm:w-auto" value={resourceId} onChange={(e) => setResourceId(e.target.value)} />
      <input placeholder="Trace Id" className="border p-2 rounded w-full sm:w-auto" value={traceId} onChange={(e) => setTraceId(e.target.value)} />
      <input placeholder="Span Id" className="border p-2 rounded w-full sm:w-auto" value={spanId} onChange={(e) => setSpanId(e.target.value)} />
      <input placeholder="Commit" className="border p-2 rounded w-full sm:w-auto" value={commit} onChange={(e) => setCommit(e.target.value)} />
      <input placeholder="Metadata (JSON format)" className="border p-2 rounded w-full sm:w-auto" value={metadata} onChange={(e) => setMetadata(e.target.value)} />

      <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500" onClick={handleSubmit}>
        Submit
      </button>
      <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}

export default AddLog;
