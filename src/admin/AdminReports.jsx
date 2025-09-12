import { BarChart3, Users, Briefcase, FileText } from "lucide-react";

export default function AdminReports() {
  const reports = [
    {
      id: 1,
      title: "Total Students",
      value: 1250,
      icon: <Users size={28} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Total Companies",
      value: 85,
      icon: <Briefcase size={28} />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      title: "Total Applications",
      value: 3200,
      icon: <FileText size={28} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      title: "Internships Posted",
      value: 560,
      icon: <BarChart3 size={28} />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const activities = [
    {
      id: 1,
      type: "Application Submitted",
      user: "Aarav Sharma",
      internship: "Web Developer Intern",
      date: "2025-09-10",
    },
    {
      id: 2,
      type: "New Company Registered",
      user: "TechSoft Pvt Ltd",
      internship: "-",
      date: "2025-09-08",
    },
    {
      id: 3,
      type: "Internship Posted",
      user: "DataAI Labs",
      internship: "Data Science Intern",
      date: "2025-09-06",
    },
  ];

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Reports & Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white shadow-md rounded-xl p-5 flex items-center justify-between hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-gray-500 text-sm">{report.title}</h2>
              <p className="text-xl font-bold">{report.value}</p>
            </div>
            <div
              className={`p-3 rounded-full ${report.color} flex items-center justify-center`}
            >
              {report.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Activity</th>
              <th className="p-3">User / Company</th>
              <th className="p-3 hidden sm:table-cell">Internship</th>
              <th className="p-3 hidden md:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{activity.type}</td>
                <td className="p-3">{activity.user}</td>
                <td className="p-3 hidden sm:table-cell">
                  {activity.internship}
                </td>
                <td className="p-3 hidden md:table-cell">
                  {new Date(activity.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
