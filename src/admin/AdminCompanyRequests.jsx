import React, { useState } from "react";

const AdminCompanyRequests = () => {
  // Dummy data
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "TechSoft Pvt Ltd",
      email: "hr@techsoft.com",
      description: "We are an IT solutions provider focusing on AI and ML projects.",
      status: "pending",
    },
    {
      id: 2,
      name: "GreenWorld Solutions",
      email: "contact@greenworld.in",
      description: "A startup working on eco-friendly products and sustainability.",
      status: "pending",
    },
    {
      id: 3,
      name: "FinNext Corp",
      email: "careers@finnext.com",
      description: "Fintech company building next-gen banking platforms.",
      status: "pending",
    },
  ]);

  // Handle Approve / Reject
  const handleAction = (id, newStatus) => {
    setCompanies(
      companies.map((c) =>
        c.id === id ? { ...c, status: newStatus } : c
      )
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Pending Company Requests
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                {company.name}
              </h2>
              <p className="text-sm text-gray-600">{company.email}</p>
              <p className="text-gray-700 mt-2 text-sm">
                {company.description}
              </p>
              <span
                className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
                  company.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : company.status === "approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {company.status}
              </span>
            </div>

            {company.status === "pending" && (
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleAction(company.id, "approved")}
                  className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(company.id, "rejected")}
                  className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCompanyRequests;
