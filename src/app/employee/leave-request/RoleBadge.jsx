export  default function RoleBadge({ role }) {
    let roleColor = "bg-gray-200 text-gray-600";
    if (role === "Urgent") roleColor = 'bg-green-100 text-green-700'
    else if (role === "Sick leave") roleColor = 'bg-blue-100 text-blue-700'
    else if (role === "Emergency") roleColor = 'bg-yellow-100 text-yellow-700'
  
    return (
      <span className={`px-2 py-1 rounded-lg text-sm font-medium ${roleColor}`}>
        {role}
      </span>
    );
  }