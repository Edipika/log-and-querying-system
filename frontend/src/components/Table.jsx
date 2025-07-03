

function LogsTable({ logs }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 text-left">Sender</th>
                        <th className="p-2 text-left">Number</th>
                        <th className="p-2 text-left">Message</th>
                        <th className="p-2 text-left">Credit</th>
                        <th className="p-2 text-left">Response</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="p-2">
                            <div className="font-medium">sender</div>
                            <div className="text-xs text-gray-500">Gateway: gateway</div>
                            <div className="text-xs text-gray-500">Template Id: templateId</div>
                            <div className="text-xs text-gray-500">Sent At: sentAt</div>
                            <div className="text-xs text-gray-500 break-all">Message Id: id</div>
                        </td>
                        <td className="p-2">number</td>
                        <td className="p-2 max-w-xs break-words">message</td>
                        <td className="p-2">credit</td>
                        <td className="p-2">
                            <span className="text-green-600 font-medium">Status: status</span>
                            <div className="text-xs text-gray-500">Response At: responseTime</div>
                            <div className="text-xs text-gray-500">Error: errorDesc</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LogsTable;
