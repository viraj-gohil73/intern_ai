import { useState } from "react";
import { Search, Filter, Eye, Trash2 } from "lucide-react";

export default function Students() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rohan Sharma",
      email: "rohan@example.com",
      course: "MCA",
      year: "2nd",
      applied: ["Frontend Developer Intern", "UI/UX Intern"],
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@example.com",
      course: "B.Tech CSE",
      year: "3rd",
      applied: ["Backend Developer Intern"],
      status: "Blocked",
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@example.com",
      course: "MBA",
      year: "1st",
      applied: ["HR Intern", "Marketing Intern"],
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.course.toLowerCase().includes(search.toLowerCase()) ||
      student.applied.some((app) =>
        app.toLowerCase().includes(search.toLowerCase())
      );

    const matchesFilter =
      filter === "All" ||
      student.status.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">👩‍🎓 Manage Students</h2>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search students by name, email, or applied internship..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-gray-500" size={18} />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Blocked">Blocked</option>
          </select>
        </div>
      </div>

      {/* Desktop (lg+) Table */}
      <div className="hidden lg:block overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Course</th>
              <th className="px-6 py-3">Year</th>
              <th className="px-6 py-3">Applied Internships</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">{student.course}</td>
                  <td className="px-6 py-4">{student.year}</td>
                  <td className="px-6 py-4">
                    {student.applied.map((app, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 px-2 py-0.5 rounded text-xs mr-1"
                      >
                        {app}
                      </span>
                    ))}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      onClick={() =>
                        alert(
                          `${student.name} applied for: ${student.applied.join(
                            ", "
                          )}`
                        )
                      }
                    >
                      <Eye size={16} /> View
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 flex items-center gap-1"
                      onClick={() => handleDelete(student.id)}
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Tablet & Mobile (below lg) → Card/Grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white p-4 rounded-lg shadow-md border"
            >
              <h3 className="font-semibold text-lg">{student.name}</h3>
              <p className="text-gray-600">{student.email}</p>
              <p className="text-sm mt-1">🎓 {student.course}</p>
              <p className="text-sm">📅 {student.year}</p>

              <div className="mt-2">
                <p className="font-medium text-sm">Applied Internships:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {student.applied.map((app, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-xs px-2 py-1 rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <span
                className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${
                  student.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {student.status}
              </span>

              {/* Actions */}
              <div className="flex justify-between items-center mt-3">
                <button
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  onClick={() =>
                    alert(
                      `${student.name} applied for: ${student.applied.join(", ")}`
                    )
                  }
                >
                  <Eye size={16} /> View
                </button>
                <button
                  className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  onClick={() => handleDelete(student.id)}
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">
            No students found.
          </p>
        )}
      </div>
    </div>
  );
}
