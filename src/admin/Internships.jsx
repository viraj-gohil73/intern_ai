// src/admin/Internships.jsx
import { useState } from "react";
import { Search, Filter, Eye, Trash2 } from "lucide-react";

export default function Internships() {
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Solutions",
      location: "Remote",
      stipend: "₹8,000 /month",
      duration: "3 Months",
      skills: ["React", "Tailwind", "JavaScript"],
      status: "Active",
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      company: "CodeBase Pvt Ltd",
      location: "Bangalore",
      stipend: "₹10,000 /month",
      duration: "6 Months",
      skills: ["Node.js", "PostgreSQL", "Express"],
      status: "Closed",
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "Design Studio",
      location: "Delhi",
      stipend: "₹5,000 /month",
      duration: "2 Months",
      skills: ["Figma", "Adobe XD"],
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this internship?")) {
      setInternships(internships.filter((item) => item.id !== id));
    }
  };

  const filteredInternships = internships.filter((intern) => {
    const matchesSearch =
      intern.title.toLowerCase().includes(search.toLowerCase()) ||
      intern.company.toLowerCase().includes(search.toLowerCase()) ||
      intern.location.toLowerCase().includes(search.toLowerCase()) ||
      intern.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesFilter =
      filter === "All" || intern.status.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">🎓 Manage Internships</h2>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by title, company, location..."
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
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Desktop (lg+) Table */}
      <div className="hidden lg:block overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Stipend</th>
              <th className="px-6 py-3">Duration</th>
              <th className="px-6 py-3">Skills</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInternships.length > 0 ? (
              filteredInternships.map((intern) => (
                <tr
                  key={intern.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{intern.title}</td>
                  <td className="px-6 py-4">{intern.company}</td>
                  <td className="px-6 py-4">{intern.location}</td>
                  <td className="px-6 py-4">{intern.stipend}</td>
                  <td className="px-6 py-4">{intern.duration}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {intern.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 px-2 py-0.5 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        intern.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {intern.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      onClick={() =>
                        alert(`Showing details for ${intern.title}`)
                      }
                    >
                      <Eye size={16} /> View
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 flex items-center gap-1"
                      onClick={() => handleDelete(intern.id)}
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500 italic">
                  No internships found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Tablet & Mobile (below lg) → Card/Grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((intern) => (
            <div
              key={intern.id}
              className="bg-white p-4 rounded-lg shadow-md border"
            >
              <h3 className="font-semibold text-lg">{intern.title}</h3>
              <p className="text-gray-600">{intern.company}</p>
              <p className="text-sm mt-1">📍 {intern.location}</p>
              <p className="text-sm">💰 {intern.stipend}</p>
              <p className="text-sm">⏳ {intern.duration}</p>

              <div className="flex flex-wrap gap-2 my-2">
                {intern.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  intern.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {intern.status}
              </span>

              {/* Actions */}
              <div className="flex justify-between items-center mt-3">
                <button
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  onClick={() => alert(`Showing details for ${intern.title}`)}
                >
                  <Eye size={16} /> View
                </button>
                <button
                  className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  onClick={() => handleDelete(intern.id)}
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">
            No internships found.
          </p>
        )}
      </div>
    </div>
  );
}
