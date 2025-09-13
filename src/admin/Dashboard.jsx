// src/admin/Dashboard.jsx
import { Briefcase, Users, Building2, FileText , ClockAlert} from "lucide-react";

export default function Dashboard() {
  // Dummy Data with Icons
  const stats = [
    { title: "Total Internships", value: 124, color: "bg-blue-500", icon: <Briefcase size={28} /> },
    { title: "Total Students", value: 450, color: "bg-green-500", icon: <Users size={28} /> },
    { title: "Total Companies", value: 48, color: "bg-purple-500", icon: <Building2 size={28} /> },
    { title: "Applications", value: 320, color: "bg-orange-500", icon: <FileText size={28} /> },
    { title: "Compnay Requests", value: 13, color: "bg-red-500", icon: <ClockAlert size={28} /> },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📊 Dashboard Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl text-white shadow-md flex items-center justify-between transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer ${item.color}`}
          >
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-3xl font-bold mt-2">{item.value}</p>
            </div>
            <div className="opacity-80">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
