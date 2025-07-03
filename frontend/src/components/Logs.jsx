// import React from "react";

// export default function Logs() {
//     return (
//         <div className="min-h-screen bg-white p-4 md:p-8 text-sm text-gray-800 font-sans">
//             {/* Header */}
//             <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b pb-4">
//                 <div className="flex items-center gap-6 text-blue-600 font-semibold">
//                     <span className="cursor-pointer">📄 Log Message </span>
//                 </div>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">Add Log</button>
//             </div>

//             {/* Filters */}
//             <div className="flex flex-wrap gap-4 mb-6">
//                 <input placeholder="Search by Message..." className="border p-2 rounded w-full sm:w-auto" />
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Search</button>
//             </div>
//             <div className="flex flex-wrap gap-4 mb-6">
//                 <input type="datetime-local" placeholder="From" className="border p-2 rounded w-full sm:w-auto" />
//                 <input type="datetime-local" placeholder="To" className="border p-2 rounded w-full sm:w-auto" />
//                 <select
//                     className="border p-2 rounded w-full sm:w-auto"
//                 >
//                     <option value="">Level</option>
//                     <option value="">Info</option>
//                     <option value="">Warning</option>
//                     <option value="">Debug</option>
//                     <option value="">Error</option>
//                 </select>
//                 <input placeholder="Resource Id" className="border p-2 rounded w-full sm:w-auto" />
//                 <input placeholder="Message" className="border p-2 rounded w-full sm:w-auto" />
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go</button>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Reset</button>
//             </div>


//             {/* <div className="grid grid-cols-5 bg-gray-100 p-3 font-semibold border border-gray-300">
//                 <div>Log Info</div>
//                 <div>Message</div>
//                 <div>Response</div>
//                 <div className="text-right">Meta Data</div>

//             </div>


//             {data.map((item, idx) => (
//                 <div key={idx} className="grid grid-cols-5 border-b border-gray-200 p-3 text-sm">
//                     <div className="col-span-2 space-y-1">
//                         <div className="font-semibold text-black">ResourceId:{item.resourceId}</div>
//                         <div className="text-xs text-blue-600">
//                             Trace Id: <span className="underline">{item.traceId}</span>
//                         </div>
//                         <div className="text-xs text-gray-500">
//                             Span Id: <span className="text-blue-600">{item.spanId}</span>
//                         </div>
//                         <div className="text-xs text-gray-500">commit: {item.commit}</div>
//                         <div className="text-xs text-gray-500">Log Id: {item.logId}</div>
//                     </div>
//                     <div className="pt-1">{item.message}</div>
//                     <div className="pt-1">{item.number}</div>

//                     <div className="text-right pt-1">
//                         <div className="text-green-600 font-medium">Level: {item.level}</div>
//                         <div className="text-xs text-gray-600">Response At: {item.responseAt}</div>
//                     </div>
//                      <div className="pt-1">eye button</div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// const data = [
//     {
//         level: "INFO",
//         logId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//         resourceId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//         traceId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//         spanId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//         message: "Dear User, Your one time password 123456 and its valid for 15 mins. Do not share to anyone. Digimiles.",
//         commit: "Dear User.",
//         responseAt: "Jul 2, 2025, 3:51:17 PM",
//     },
// ]; */}

//  {/* Table Header */}
//       <div className="grid grid-cols-5 bg-gray-100 p-3 font-semibold border border-gray-300">
//         <div className="col-span-2">Log Info</div>
//         <div>Message</div>
//         <div>Response</div>

//         <div>Action</div>
//       </div>

//       {/* Rows */}
//       {data.map((item, idx) => (
//         <div key={idx} className="grid grid-cols-5 border-b border-gray-200 p-3 text-sm items-start">
//           <div className="col-span-2 space-y-1">
//             <div className="font-semibold text-black">ResourceId: {item.resourceId}</div>
//             <div className="text-xs text-blue-600">
//               Trace Id: <span className="underline break-all">{item.traceId}</span>
//             </div>
//             <div className="text-xs text-gray-500">
//               Span Id: <span className="text-blue-600 break-all">{item.spanId}</span>
//             </div>
//             <div className="text-xs text-gray-500 break-all">Commit: {item.commit}</div>
//             <div className="text-xs text-gray-500 break-all">Log Id: {item.logId}</div>
//           </div>
//           <div className="pt-1 break-words">{item.message}</div>
//           <div className="pt-1 break-all">{item.number || "-"}</div>
//           <div className="text-right pt-1 space-y-1">
//             <div className="text-green-600 font-medium">Level: {item.level}</div>
//             <div className="text-xs text-gray-600">Response At: {item.responseAt}</div>
//           </div>
//           <div className="pt-1 text-center  ">
//             <button className="text-blue-500 hover:underline">👁 View</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// const data = [
//   {
//     level: "INFO",
//     logId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//     resourceId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//     traceId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//     spanId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//     message:
//       "Dear User, Your one time password 123456 and its valid for 15 mins. Do not share to anyone. Digimiles.",
//     commit: "Dear User.",
//     responseAt: "Jul 2, 2025, 3:51:17 PM",
//   },
// ];

// import React from "react";

// export default function Logs() {
//   return (
//     <div className="min-h-screen bg-white p-4 md:p-8 text-sm text-gray-800 font-sans">

//       {/* Table Header */}
//       <div className="grid grid-cols-5 bg-gray-100 p-3 font-semibold border border-gray-300">
//         <div className="col-span-2">Log Info</div>
//         <div>Message</div>
//         <div>Response</div>
//         <div>Action</div>
//       </div>

//       {/* Table Rows */}
//       {data.map((item, idx) => (
//         <div
//           key={idx}
//           className="grid grid-cols-5 border-b border-gray-200 p-3 text-sm"
//         >
//           {/* Log Info */}
//           <div className="col-span-2 space-y-1 break-all">
//             <div className="font-semibold text-black">
//               ResourceId: {item.resourceId}
//             </div>
//             <div className="text-xs text-blue-600">
//               Trace Id: <span className="underline">{item.traceId}</span>
//             </div>
//             <div className="text-xs text-gray-500">
//               Span Id: <span className="text-blue-600">{item.spanId}</span>
//             </div>
//             <div className="text-xs text-gray-500">Commit: {item.commit}</div>
//             <div className="text-xs text-gray-500">Log Id: {item.logId}</div>
//           </div>

//           {/* Message */}
//           <div className="break-words mr-10">{item.message}</div>

//           {/* Response */}
//           <div className="space-y-1 mr-40">
//             <div className="text-green-600 font-medium ">Level: {item.level}</div>
//             <div className="text-xs text-gray-600">Response At: {item.responseAt}</div>
//           </div>

//           {/* Action */}
//           <div className="flex items-start justify-center pt-1 mr-55">
//             <button className="text-blue-500 hover:underline">👁 View</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// const data = [
//   {
//     level: "INFO",
//     logId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//     resourceId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//     traceId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//     spanId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
//     message:
//       "Dear User, Your one time password 123456 and its valid for 15 mins. Do not share to anyone. Digimiles.",
//     commit: "Dear User.",
//     responseAt: "Jul 2, 2025, 3:51:17 PM",
//   },
// ];
import React from "react";

export default function Logs() {
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

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
                <input placeholder="Search by Message..." className="border p-2 rounded w-full sm:w-auto" />
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500">
                    Search
                </button>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <input type="datetime-local" className="border p-2 rounded w-full sm:w-auto" />
                <input type="datetime-local" className="border p-2 rounded w-full sm:w-auto" />
                <select className="border p-2 rounded w-full sm:w-auto">
                    <option value="">Level</option>
                    <option value="info">Info</option>
                    <option value="warn">Warning</option>
                    <option value="debug">Debug</option>
                    <option value="error">Error</option>
                </select>
                <input placeholder="Resource Id" className="border p-2 rounded w-full sm:w-auto" />
                <input placeholder="Message" className="border p-2 rounded w-full sm:w-auto" />
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500">Go</button>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-500">Reset</button>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-5 bg-indigo-50 p-3 font-semibold border border-gray-300">
                <div className="col-span-2">Log Info</div>
                <div>Message</div>
                <div>Response</div>
                <div>Action</div>
            </div>

            {/* Table Rows */}
            {data.map((item, idx) => (
                <div key={idx} className="grid grid-cols-5 border-b bg-gray-100 border-gray-200 p-3 text-sm items-start">

                    {/* Log Info */}
                    <div className="col-span-2 space-y-1 break-all">
                        <div className="font-semibold text-black">ResourceId: {item.resourceId}</div>
                        <div className="text-xs text-blue-600">
                            Trace Id: <span className="underline">{item.traceId}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                            Span Id: <span className="text-blue-600">{item.spanId}</span>
                        </div>
                        <div className="text-xs text-gray-500">Commit: {item.commit}</div>
                        <div className="text-xs text-gray-500">Log Id: {item.logId}</div>
                    </div>

                    {/* Message */}
                    <div className="pt-1 break-words">{item.message}</div>

                    {/* Response */}
                    <div className="space-y-1 pt-1 text-left">
                        <div className="text-green-600 font-medium">Level: {item.level}</div>
                        <div className="text-xs text-gray-600">Response At: {item.responseAt}</div>
                    </div>

                    <button className="mr-100">
                        👁 
                    </button>


                </div>
            ))}
        </div>
    );
}

const data = [
    {
        level: "INFO",
        logId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
        resourceId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
        traceId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
        spanId: "9ab42564-3d98-4f49-bc4b-a8d98176f146:1",
        message:
            "Dear User, Your one time password 123456 and its valid for 15 mins. Do not share to anyone. Digimiles.",
        commit: "Dear User.",
        responseAt: "Jul 2, 2025, 3:51:17 PM",
    },
];
