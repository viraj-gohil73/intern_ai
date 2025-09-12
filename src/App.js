import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./company/Sidebar";
import DashboardPage from "./company/DashboardPage";
import InternshipsPage from "./company/InternshipsPage";
import AnalyticsPage from "./company/AnalyticsPage";
import SettingsPage from "./company/SettingsPage";
import ApplicationsView from "./company/ApplicationsView";

import Sidebar2 from "./admin/components/Sidebar";
import Dashboard from "./admin/Dashboard";
import Internships from "./admin/Internships"
import Students from "./admin/Students";
import Companies from "./admin/Companies"
import ApplicationsPage from "./admin/ApplicationsPage"
import Actioncompany from "./admin/Actioncompany"
import ActionStudents from "./admin/ActionStudents"
import AdminReports from "./admin/AdminReports";
import AdminProfile from "./admin/AdminProfile"

import LandingPage from "./students/LandingPage"
import LoginPage from "./students/LoginPage"
import SignupPage from "./students/SignUpPage"
import StudentDashboard from "./students/StudentDashboard"
import InternshipPage2 from "./students/InternshipPage"
import RecommendedPage  from "./students/Recommendedpage"
import SettingsPage2 from "./students/SettingsPage"
import ProfilePage from "./students/ProfilePage"

export default function App() {
  return (
     <Router>
      <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/internships" element={<InternshipPage2 />} />
              <Route path="/recommended" element={<RecommendedPage />} />
              <Route path="/settings" element={<SettingsPage2 />} />
              <Route path="/profile" element={<ProfilePage />} />
      
            </Routes>

      <Routes>
        {/* Company Layout */}
        <Route
          path="/company/*"
          element={
            <div className="flex min-h-screen bg-gray-50">
              {/* <CompanySidebar /> */}
              <Sidebar/>
              <div className="flex-1 p-6">
                <Routes>
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="internships" element={<InternshipsPage />} />
                  <Route path="analytics" element={<AnalyticsPage />} />
                  <Route path="applicationsview" element={<ApplicationsView />} />
                  <Route path="settings" element={<SettingsPage />} />
                </Routes>
              </div>
            </div>
          }
        />

        {/* Admin Layout */}
        <Route
          path="/admin/*"
          element={
            <div className="flex min-h-screen bg-gray-50">
               <Sidebar2 />
              <div className="flex-1 p-6">
                
                 <Routes>
                  
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="internships" element={<Internships />} />
              <Route path="students" element={<Students />} />
              <Route path="actionstudents" element={<ActionStudents />} />
              <Route path="companies" element={<Companies />} />
              <Route path="actioncompany" element={<Actioncompany />} />
              { <Route path="applications" element={<ApplicationsPage />} /> }
              { <Route path="reports" element={<AdminReports />} />}
              { <Route path="AdminProfile" element={<AdminProfile />} />  }
            </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
