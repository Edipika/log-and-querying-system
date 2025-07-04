// function LogsTable({logs}) {
export default function Table({ logs }) {
  console.log("Logs received in LogsTable:", logs);
  return (
    <>
      {/* Table Header */}
      <div className="grid grid-cols-5 bg-indigo-50 p-3 font-semibold border border-gray-300">
        <div className="col-span-2">Log Info</div>
        <div>Message</div>
        <div>Response</div>
        <div>Action</div>
      </div>

     
      {logs.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 border-b bg-gray-100 border-gray-200 p-3 text-sm items-start"
        >
        
          <div className="col-span-2 space-y-1 break-all">
            <div className="font-semibold text-black">
              ResourceId: {item.resourceId}
            </div>
            <div className="text-xs text-blue-600">
              Trace Id: <span className="underline">{item.traceId}</span>
            </div>
            <div className="text-xs text-gray-500">
              Span Id: <span className="text-blue-600">{item.spanId}</span>
            </div>
            <div className="text-xs text-gray-500">Commit: {item.commit}</div>
            <div className="text-xs text-gray-500">Log Id: {item.logId}</div>
          </div>

         
          <div className="pt-1 break-words">{item.message}</div>

          
          <div className="space-y-1 pt-1 text-left">
            <div className="text-green-600 font-medium">
              Level: {item.level}
            </div>
            <div className="text-xs text-gray-600">
              Response At: {item.responseAt}
            </div>
          </div>

          <button className="mr-100">👁</button>
        </div>
      ))}
      
    </>
  );
}
