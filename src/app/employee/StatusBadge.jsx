export default  function StatusBadge({ status }) {
    let statusColor = "bg-gray-200 text-gray-600";
    if (status === "Present") statusColor = "bg-green-100 text-green-700";
    else if (status === "Absent") statusColor = "bg-red-100 text-red-700";
    else if (status === "Late") statusColor = "bg-yellow-100 text-yellow-700";
    else if (status === "On Trip") statusColor = "bg-green-100 text-green-700";
    else if (status === "Faulted") statusColor = "bg-red-100 text-red-700";
    else if (status === "Delivered") statusColor = "bg-yellow-100 text-yellow-700";
  
    return (
      <span className={`px-2 py-1 rounded-lg text-sm font-medium ${statusColor}`}>
        {status}
      </span>
    );
  }
