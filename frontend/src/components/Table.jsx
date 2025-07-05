import { useLogContext } from "../context/LogContext";

export default function Table() {

    const { logs } = useLogContext();
  console.log("Logs received in LogsTable:", logs);

  return (
    <>
      <>
        {/* Table Header */}
        <div className="grid grid-cols-1 sm:grid-cols-4 bg-indigo-50 p-3 font-semibold border border-gray-300 text-sm">
          <div>Log Info</div>
          <div>Message</div>
          <div>Response</div>
          <div>Meta Data</div>
        </div>

        {logs && logs.length > 0 ? (
          logs.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-4 border-b bg-gray-50 border-gray-200 p-3 text-sm items-start gap-4"
            >
              {/* Log Info */}
              <div className="space-y-1 break-words">
                <div className="font-semibold text-black break-words">
                  ResourceId: {item.resourceId}
                </div>
                <div className="text-xs text-gray-500">
                  Trace Id: <span className="text-blue-600 break-words">{item.traceId}</span>
                </div>
                <div className="text-xs text-gray-500">
                  Span Id: <span className="text-blue-600 break-words">{item.spanId}</span>
                </div>
                <div className="text-xs text-gray-500">Commit: {item.commit}</div>
              </div>

              {/* Message */}
              <div className="pt-1 break-words">{item.message}</div>

              {/* Response */}
              <div className="space-y-1 pt-1 text-left">
                <div
                  className={`inline-block rounded-md font-medium px-2 py-1 mt-1 ${item.level === "info"
                      ? "text-blue-500 bg-blue-100"
                      : item.level === "warn"
                        ? "text-yellow-600 bg-yellow-100"
                        : item.level === "debug"
                          ? "text-gray-500 bg-gray-300"
                          : item.level === "error"
                            ? "text-red-500 bg-red-100"
                            : "text-black bg-gray-100"
                    }`}
                >
                  {item.level}
                </div>
                <div>
                  <div className=" inline-block text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded mt-1 break-words">
                    Response At: {item.timestamp}
                  </div>
                </div>

              </div>

              {/* Metadata */}
              <div className="text-xs text-gray-600 break-words">
                {item.metadata && Object.keys(item.metadata).length > 0
                  ? JSON.stringify(item.metadata)
                  : "No metadata available"}
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500 col-span-4">
            No logs found
          </div>
        )}
      </>

    </>
  );
}
