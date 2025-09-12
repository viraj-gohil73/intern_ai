import { useState } from "react";
import { Search, Filter, Eye, Trash2, Building2, Users, Briefcase } from "lucide-react";

export default function Companies() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Tech Solutions Pvt Ltd",
      email: "hr@techsolutions.com",
      location: "Bangalore",
      industry: "Software Development",
      totalInternships: 5,
      totalStudents: 120,
      status: "Active",
    },
    {
      id: 2,
      name: "Creative Designs Inc",
      email: "jobs@creativedesigns.com",
      location: "Delhi",
      industry: "UI/UX & Graphics",
      totalInternships: 3,
      totalStudents: 80,
      status: "Active",
    },
    {
      id: 3,
      name: "EduSmart Academy",
      email: "contact@edusmart.com",
      location: "Remote",
      industry: "EdTech",
      totalInternships: 7,
      totalStudents: 200,
      status: "Blocked",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      setCompanies(companies.filter((c) => c.id !== id));
    }
  };

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(search.toLowerCase()) ||
      company.email.toLowerCase().includes(search.toLowerCase()) ||
      company.location.toLowerCase().includes(search.toLowerCase()) ||
      company.industry.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      company.status.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">🏢 Manage Companies</h2>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search companies by name, email, location..."
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
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Industry</th>
              <th className="px-6 py-3">Total Internships</th>
              <th className="px-6 py-3">Total Students</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <tr
                  key={company.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{company.name}</td>
                  <td className="px-6 py-4">{company.email}</td>
                  <td className="px-6 py-4">{company.location}</td>
                  <td className="px-6 py-4">{company.industry}</td>
                  <td className="px-6 py-4">{company.totalInternships}</td>
                  <td className="px-6 py-4">{company.totalStudents}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        company.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {company.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      onClick={() =>
                        alert(
                          `${company.name} - Internships Posted: ${company.totalInternships}, Students Hired: ${company.totalStudents}`
                        )
                      }
                    >
                      <Eye size={16} /> View
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 flex items-center gap-1"
                      onClick={() => handleDelete(company.id)}
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No companies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Tablet & Mobile (below lg) → Card/Grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white p-4 rounded-lg shadow-md border"
            >
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Building2 size={18} className="text-blue-600" /> {company.name}
              </h3>
              <p className="text-gray-600">{company.email}</p>
              <p className="text-sm mt-1">📍 {company.location}</p>
              <p className="text-sm">🏷️ {company.industry}</p>

              <div className="flex justify-between mt-3 text-sm">
                <p className="flex items-center gap-1 text-blue-600">
                  <Briefcase size={16} /> {company.totalInternships} Internships
                </p>
                <p className="flex items-center gap-1 text-green-600">
                  <Users size={16} /> {company.totalStudents} Students
                </p>
              </div>

              <span
                className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${
                  company.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {company.status}
              </span>

              {/* Actions */}
              <div className="flex justify-between items-center mt-3">
                <button
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  onClick={() =>
                    alert(
                      `${company.name} - Internships Posted: ${company.totalInternships}, Students Hired: ${company.totalStudents}`
                    )
                  }
                >
                  <Eye size={16} /> View
                </button>
                <button
                  className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  onClick={() => handleDelete(company.id)}
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">No companies found.</p>
        )}
      </div>
    </div>
  );
}
