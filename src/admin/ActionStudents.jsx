import { useState } from "react";
import { Eye, UserX, CheckCircle } from "lucide-react";

export default function ActionStudents() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav@example.com",
      appliedInternships: 4,
      accepted: 2,
      status: "active",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@example.com",
      appliedInternships: 6,
      accepted: 3,
      status: "blocked",
    },
  ]);

  const toggleBlock = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "active" ? "blocked" : "active",
            }
          : student
      )
    );
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Students Management</h1>

      {/* Table for md+ screens */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Student</th>
              <th className="p-3">Email</th>
              <th className="p-3">Applied</th>
              <th className="p-3">Accepted</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{s.name}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3">{s.appliedInternships}</td>
                <td className="p-3">{s.accepted}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      s.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2 justify-center">
                  <button
                    onClick={() => toggleBlock(s.id)}
                    className={`p-2 rounded-lg text-white ${
                      s.status === "active" ? "bg-red-500" : "bg-green-500"
                    } hover:opacity-90`}
                  >
                    {s.status === "active" ? (
                      <UserX size={16} />
                    ) : (
                      <CheckCircle size={16} />
                    )}
                  </button>
                  <button className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile screens */}
      <div className="md:hidden space-y-4">
        {students.map((s) => (
          <div
            key={s.id}
            className="bg-white shadow-md rounded-xl p-4 space-y-2"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{s.name}</h2>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  s.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {s.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{s.email}</p>
            <div className="flex justify-between text-sm text-gray-700">
              <p>
                <span className="font-semibold">Applied:</span>{" "}
                {s.appliedInternships}
              </p>
              <p>
                <span className="font-semibold">Accepted:</span> {s.accepted}
              </p>
            </div>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => toggleBlock(s.id)}
                className={`flex-1 p-2 rounded-lg text-white ${
                  s.status === "active" ? "bg-red-500" : "bg-green-500"
                } hover:opacity-90`}
              >
                {s.status === "active" ? "Block" : "Unblock"}
              </button>
              <button className="flex-1 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
