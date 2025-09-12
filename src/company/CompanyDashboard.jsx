import React, { useState } from "react";
import {
  LayoutDashboard,
  Briefcase,
  BarChart2,
  Settings,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";

export default function CompanyDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (responsive) */}
      <aside
        className={`fixed md:static z-20 bg-gray-900 text-white w-64 min-h-screen p-6 transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">InternAI</h2>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-3">
          <a href="#" className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-lg">
            <Briefcase className="w-5 h-5" /> Internships
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-lg">
            <BarChart2 className="w-5 h-5" /> Analytics
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-lg">
            <Settings className="w-5 h-5" /> Settings
          </a>
        </nav>

        <div className="mt-10 border-t border-gray-700 pt-4">
          <p className="text-sm font-semibold">Admin User</p>
          <p className="text-xs text-gray-400">admin@internai.com</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-0 ml-0 w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl md:text-2xl font-bold">Dashboard Overview</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-40 sm:w-64">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 w-full rounded-lg border border-gray-300"
              />
              <Search className="w-4 h-4 absolute left-2 top-3 text-gray-400" />
            </div>
            <Bell className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-sm text-gray-600">Total Internships</p>
            <h2 className="text-xl font-bold">6</h2>
            <p className="text-green-500 text-xs">+12% from last month</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-sm text-gray-600">Active Positions</p>
            <h2 className="text-xl font-bold">4</h2>
            <p className="text-green-500 text-xs">+8% from last month</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-sm text-gray-600">Partner Companies</p>
            <h2 className="text-xl font-bold">6</h2>
            <p className="text-green-500 text-xs">+2 new this month</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-sm text-gray-600">Avg. Stipend</p>
            <h2 className="text-xl font-bold">₹17,000</h2>
            <p className="text-green-500 text-xs">+5% from last month</p>
          </div>
        </div>

        {/* Recent Internships + Quick Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Internships */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Internships</h3>
            <ul className="space-y-4">
              {[
                { title: "Frontend Developer Intern", company: "TechCorp", status: "active" },
                { title: "AI/ML Research Intern", company: "DataMind", status: "active" },
                { title: "Mobile App Developer Intern", company: "AppCraft", status: "filled" },
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      item.status === "active"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Insights */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Insights</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Remote Positions</span>
                <span className="font-medium">3/6</span>
              </li>
              <li className="flex justify-between">
                <span>Fill Rate</span>
                <span className="font-medium text-green-600">17%</span>
              </li>
              <li className="flex justify-between">
                <span>Avg. Duration</span>
                <span className="font-medium">3.8 months</span>
              </li>
              <li className="flex justify-between">
                <span>Top Category</span>
                <span className="font-medium">Software Development</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
