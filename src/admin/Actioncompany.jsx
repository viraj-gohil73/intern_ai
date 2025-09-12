import { useState } from "react";
import { Ban, CheckCircle, Eye } from "lucide-react";

export default function Actioncompany() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "TechSoft Pvt Ltd",
      email: "hr@techsoft.com",
      internships: 8,
      students: 120,
      status: "active",
    },
    {
      id: 2,
      name: "CodeWorks Solutions",
      email: "contact@codeworks.com",
      internships: 5,
      students: 90,
      status: "blocked",
    },
  ]);

  const toggleBlock = (id) => {
    setCompanies((prev) =>
      prev.map((company) =>
        company.id === id
          ? {
              ...company,
              status: company.status === "active" ? "blocked" : "active",
            }
          : company
      )
    );
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Company Management</h1>

      {/* Table for md+ screens */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Company</th>
              <th className="p-3">Email</th>
              <th className="p-3">Internships</th>
              <th className="p-3">Students</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.internships}</td>
                <td className="p-3">{c.students}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      c.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2 justify-center">
                  <button
                    onClick={() => toggleBlock(c.id)}
                    className={`p-2 rounded-lg text-white ${
                      c.status === "active" ? "bg-red-500" : "bg-green-500"
                    } hover:opacity-90`}
                  >
                    {c.status === "active" ? (
                      <Ban size={16} />
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
        {companies.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow-md rounded-xl p-4 space-y-2"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{c.name}</h2>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  c.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {c.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{c.email}</p>
            <div className="flex justify-between text-sm text-gray-700">
              <p>
                <span className="font-semibold">Internships:</span>{" "}
                {c.internships}
              </p>
              <p>
                <span className="font-semibold">Students:</span> {c.students}
              </p>
            </div>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => toggleBlock(c.id)}
                className={`flex-1 p-2 rounded-lg text-white ${
                  c.status === "active" ? "bg-red-500" : "bg-green-500"
                } hover:opacity-90`}
              >
                {c.status === "active" ? "Block" : "Unblock"}
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
