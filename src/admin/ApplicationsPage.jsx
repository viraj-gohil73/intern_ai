import { useState } from "react";
import { Eye, CheckCircle, XCircle } from "lucide-react";

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      student: "Aarav Sharma",
      internship: "Web Developer Intern",
      company: "TechSoft Pvt Ltd",
      date: "2025-09-05",
      status: "pending",
    },
    {
      id: 2,
      student: "Priya Verma",
      internship: "Data Science Intern",
      company: "DataAI Labs",
      date: "2025-09-07",
      status: "accepted",
    },
    {
      id: 3,
      student: "Rohit Singh",
      internship: "UI/UX Intern",
      company: "Creative Studios",
      date: "2025-09-09",
      status: "rejected",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Applications Management</h1>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by student or company..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Student</th>
              <th className="p-3 hidden sm:table-cell">Internship</th>
              <th className="p-3">Company</th>
              <th className="p-3 hidden md:table-cell">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{app.student}</td>
                <td className="p-3 hidden sm:table-cell">{app.internship}</td>
                <td className="p-3">{app.company}</td>
                <td className="p-3 hidden md:table-cell">
                  {new Date(app.date).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      app.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : app.status === "accepted"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
