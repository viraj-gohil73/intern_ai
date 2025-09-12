import { useState, useEffect } from "react";
import { FiUser, FiBook, FiBell, FiSettings, FiLogOut, FiChevronDown } from "react-icons/fi";
import { FaTasks, FaLaptopCode, FaRegSmile } from "react-icons/fa";
import { MdWork, MdRecommend } from "react-icons/md";
import { useLocation } from "react-router-dom";
import ProfileCompletion from "../students/ProfileCompletion";
import ImageUpload from "../students/ImageUpload";
import { useNavigate } from "react-router-dom";


export default function StudentDashboard() {
  const location = useLocation();
  const { user } = location.state || {};
  const [profile, setProfile] = useState({
    fullName: user?.fullName || "Student Name",
    email: user?.email || "student@example.com",
    image: null,
  });
const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState("Profile");
  const [internships, setInternships] = useState([]);
  const [selectedInternship, setSelectedInternship] = useState(null);

  useEffect(() => {
    const mockData = [
      { id: 1, title: "Frontend Developer", company: "Tech Solutions", duration: "3 months", stipend: "$300", description: "Build frontend applications using React and Tailwind CSS." },
      { id: 2, title: "AI/ML Intern", company: "Innovate AI", duration: "6 months", stipend: "$500", description: "Work on AI/ML projects using Python and TensorFlow." },
      { id: 3, title: "Backend Developer", company: "CodeWorks", duration: "4 months", stipend: "$400", description: "Design REST APIs with Node.js and Express." },
      { id: 4, title: "UI/UX Designer", company: "DesignHub", duration: "3 months", stipend: "$350", description: "Create UI/UX designs for web and mobile apps." },
    ];
    setTimeout(() => setInternships(mockData), 500);
  }, []);

  const stats = [
    { title: "Total Internships", value: 12, icon: <FaLaptopCode className="text-blue-500" />, color: "border-blue-500" },
    { title: "Recommended", value: 5, icon: <MdRecommend className="text-green-500" />, color: "border-green-500" },
    { title: "Completed", value: 3, icon: <FiUser className="text-yellow-500" />, color: "border-yellow-500" },
    { title: "Notifications", value: 7, icon: <FiBell className="text-indigo-500" />, color: "border-indigo-500" },
  ];

  const menuOptions = [
    { icon: <FiUser className="text-blue-500" />, label: "Profile" },
    { icon: <FiBook className="text-green-500" />, label: "Internships" },
    { icon: <MdRecommend className="text-yellow-500" />, label: "Recommended" },
    { icon: <FiSettings className="text-red-500" />, label: "Settings" },
    { icon: <FiLogOut className="text-pink-500" />, label: "Logout" },
  ];

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-sky-500/50 shadow-lg border-r">
        <div className="p-6 flex flex-col items-center border-b border-gray-200">
          <ImageUpload onImageUpload={(img) => setProfile({ ...profile, image: img })} />
          {/* <ProfileCompletion userData={profile} /> */}
          <h2 className="font-bold text-lg mt-2">{profile.fullName}</h2>
          <p className="text-sm text-gray-500">{profile.email}</p>
          <span className="mt-1 px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">Student</span>
        </div>

        <nav className="mt-6 flex-1 px-4">
          

<div className="grid gap-4">
  {menuOptions.map((item, idx) => (
    <div
      key={idx}
      onClick={() => {
  if (item.label === "Profile") {
    navigate("/profile");   // ✅ Redirect to Profile Page
  } else if (item.label === "Internships") {
    navigate("/internships");
  } else if (item.label === "Recommended") {
    navigate("/recommended");
  } else if (item.label === "Settings") {
    navigate("/settings");
  } else if (item.label === "Logout") {
    // handle logout here
  } else {
    setActiveOption(item.label);
  }
}}
      className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-100
        ${activeOption === item.label ? "bg-gray-200 font-semibold shadow" : ""}`}
    >
      <div className="text-lg">{item.icon}</div>
      <span className="font-medium">{item.label}</span>
    </div>
  ))}
</div>

        </nav>
      </div>

      {/* Main Content */}
      <div>
        {/* className="flex-1 flex flex-col p-6" */}
  {activeOption === "Profile" && (
    <div>
      {/* <h2 className="text-2xl font-bold">Profile Section</h2> */}
      {/* You can render ProfileCompletion here if needed */}
      
    </div>
  )}

  

  {activeOption === "Recommended" && (
    <div>
      {/* <h2 className="text-2xl font-bold">Recommended Internships</h2> */}
      {/* Your recommended internships code here */}
    </div>
  )}

  {activeOption === "Settings" && (
    <div>
      {/* <h2 className="text-2xl font-bold">Settings</h2> */}
      {/* Add settings UI here */}
    </div>
  )}

  {activeOption === "Logout" && (
    <div>
      {/* <h2 className="text-2xl font-bold">Logging Out...</h2> */}
      {/* You can trigger logout logic here */}
    </div>
  )}
</div>

      <div className="flex-1 flex flex-col p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 bg-white shadow-sm p-4 rounded-lg border">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <FiBell className="text-2xl cursor-pointer text-indigo-500 hover:text-indigo-700 transition duration-300" />
            <input
              type="text"
              placeholder="Search internships..."
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-gray-700"
            />
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="font-semibold">{profile.fullName}</span>
              <FiChevronDown />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-6 overflow-x-auto p-4 mt-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 bg-white p-6 rounded-2xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 border-l-4 ${stat.color}`}
              style={{ minWidth: "250px" }} // ensures all cards have the same width
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{stat.title}</h2>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>


        {/* Recommended Internships */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Recommended Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer border-l-4 border-blue-400"
                onClick={() => setSelectedInternship(internship)}
              >
                <h3 className="text-xl font-bold mb-1 text-gray-800">{internship.title}</h3>
                <p className="text-gray-600 mb-1">Company: {internship.company}</p>
                <p className="text-gray-600 mb-1">Duration: {internship.duration}</p>
                <p className="text-gray-600">Stipend: {internship.stipend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedInternship && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-11/12 max-w-2xl shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-gray-700 text-xl font-bold hover:text-red-500"
              onClick={() => setSelectedInternship("/internships")}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-blue-500">{selectedInternship.title}</h2>
            <p className="text-gray-600 mb-1">Company: {selectedInternship.company}</p>
            <p className="text-gray-600 mb-1">Duration: {selectedInternship.duration}</p>
            <p className="text-gray-600 mb-3">Stipend: {selectedInternship.stipend}</p>
            <p className="text-gray-700">{selectedInternship.description}</p>
            <button className="mt-4 bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
