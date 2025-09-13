// src/components/Sidebar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    LogOut,
  LayoutDashboard,
  Briefcase,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Internships", path: "/admin/internships" },
    { name: "Students", path: "/admin/students" },
         { name: "ActionStudents", path: "/admin/ActionStudents" },
         { name: "CompanyRequests", path: "/admin/admincompanyrequests" },
    { name: "Companies", path: "/admin/companies" },
     { name: "Actioncompany", path: "/admin/Actioncompany" },
    { name: "Applications", path: "/admin/applications" },
    { name: "Reports", path: "/admin/reports" },
    { name: "AdminProfile", path: "/admin/AdminProfile" },
  
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="p-3 md:hidden fixed top-4 right-4 z-50 bg-blue-700 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static h-screen top-0 left-0 h-full w-64 bg-blue-700 text-white p-5 transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-3">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded transition ${
                    isActive
                      ? "bg-white text-blue-700 font-semibold"
                      : "hover:bg-blue-600"
                  }`
                }
                onClick={() => setOpen(false)} // auto-close on mobile
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto  fixed bottom-2 border-t pt-4">
  {/* Profile */}
  <div className="flex w-full mr-16 items-center gap-3 px-4 mb-6">
    <img
      src="https://i.pravatar.cc/40"
      alt="Profile"
      className="w-10 h-10 rounded-full border"
    />
    <div>
      <p className="font-medium text-white-800">John Doe</p>
      <p className="text-sm text-white-500">Admin</p>
    </div>
  </div>

  {/* Logout */}
  <button className="flex items-center gap-2 px-4 mb-2 py-2 w-full text-red-600 bg-red-100 hover:bg-red-200 rounded-lg">
    <LogOut className="w-4 h-4" />
    Logout
  </button>
</div>

      </div>
    </>
  );
}
