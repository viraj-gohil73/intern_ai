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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed right-4 top-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg p-5 flex flex-col transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-64`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 mb-10">InternAI</div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          <NavLink
            to="/company/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={() => setIsOpen(false)} // auto close on mobile click
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </NavLink>

          <NavLink
            to="/company/internships"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <Briefcase className="w-5 h-5" />
            Internships
          </NavLink>

          <NavLink
            to="/company/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <BarChart3 className="w-5 h-5" />
            Analytics
          </NavLink>

            <NavLink
            to="/company/applicationsview"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <Briefcase className="w-5 h-5" />
            Applicatios
          </NavLink>

          <NavLink
            to="/company/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>

        
 {/* Bottom Section */}

<div className="mt-auto  fixed bottom-2 border-t pt-4">
  {/* Profile */}
  <div className="flex w-full mr-16 items-center gap-3 px-4 mb-2">
    <img
      src="https://i.pravatar.cc/40"
      alt="Profile"
      className="w-10 h-10 rounded-full border"
    />
    <div>
      <p className="font-medium text-gray-800">John Doe</p>
      <p className="text-sm text-gray-500">Admin</p>
    </div>
  </div>

  {/* Logout */}
  <button className="flex items-center gap-2 px-4 mb-2 py-2 w-full text-red-600 bg-red-100 hover:bg-red-200 rounded-lg">
    <LogOut className="w-4 h-4" />
    Logout
  </button>
</div>

        </nav>
      </div>

      {/* Page Content Wrapper (adds margin when sidebar is open on desktop) */}
      <div className="lg:mr-64  transition-all">
        {/* Here will render the routed pages */}
      </div>
    </>
  );
}
