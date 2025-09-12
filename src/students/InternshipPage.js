import { useState } from "react";

export default function InternshipPage() {
  const [internships, setInternships] = useState([
    { id: 1, category: "Web Development", skills: "React, Node.js, PostgreSQL", duration: "3 Months", stipend: "8000", status: "Open", post_date: "2025-09-01", deadline: "2025-09-20", location: "Remote" },
    { id: 2, category: "Data Science", skills: "Python, Pandas, Machine Learning", duration: "2 Months", stipend: "10000", status: "Closed", post_date: "2025-08-15", deadline: "2025-09-10", location: "Bangalore" },
    { id: 3, category: "UI/UX Design", skills: "Figma, Adobe XD", duration: "1 Month", stipend: "5000", status: "Open", post_date: "2025-09-05", deadline: "2025-09-25", location: "Delhi" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newInternship, setNewInternship] = useState({ category: "", skills: "", duration: "", stipend: "", status: "Open", post_date: new Date().toISOString().slice(0, 10), deadline: "", location: "" });

  const handleInputChange = (e) => { const { name, value } = e.target; setNewInternship({ ...newInternship, [name]: value }); };
  const handlePostInternship = (e) => {
    e.preventDefault();
    setInternships([...internships, { id: Date.now(), ...newInternship }]);
    setShowForm(false);
    setNewInternship({ category: "", skills: "", duration: "", stipend: "", status: "Open", post_date: new Date().toISOString().slice(0, 10), deadline: "", location: "" });
  };
  const handleDelete = (id) => { if (window.confirm("Are you sure you want to delete this internship?")) { setInternships(internships.filter((intern) => intern.id !== id)); } };
  const handleEdit = (id) => { alert("Edit functionality not implemented yet"); };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Available Internships</h1>
        <button onClick={() => setShowForm(true)} className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-400 shadow-md transition duration-300">Post Internship</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((intern) => (
          <div key={intern.id} className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-blue-400 hover:shadow-2xl transition transform hover:scale-105">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">{intern.category}</span>
              <span className={`text-xs px-3 py-1 rounded-full ${intern.status === "Open" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>{intern.status}</span>
            </div>
            <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Skills:</span> {intern.skills}</p>
            <p className="text-sm text-gray-700"><span className="font-semibold">Duration:</span> {intern.duration}</p>
            <p className="text-sm text-gray-700"><span className="font-semibold">Stipend:</span> ₹{intern.stipend}</p>
            <p className="text-sm text-gray-700"><span className="font-semibold">Location:</span> {intern.location}</p>
            <div className="mt-3 text-xs text-gray-500">
              <p>Posted: {new Date(intern.post_date).toLocaleDateString()}</p>
              <p className="text-red-600 font-semibold">Deadline: {new Date(intern.deadline).toLocaleDateString()}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-gradient-to-r from-blue-400 to-cyan-400 text-white py-2 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition shadow-md">View Details</button>
              <button onClick={() => handleEdit(intern.id)} className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-2 rounded-lg hover:from-orange-400 hover:to-yellow-400 transition shadow-md">Edit</button>
              <button onClick={() => handleDelete(intern.id)} className="flex-1 bg-gradient-to-r from-red-400 to-pink-400 text-white py-2 rounded-lg hover:from-pink-400 hover:to-red-400 transition shadow-md">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-lg relative shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Post New Internship</h2>
            <form onSubmit={handlePostInternship} className="space-y-3">
              <input type="text" name="category" placeholder="Category" value={newInternship.category} onChange={handleInputChange} className="w-full border px-3 py-2 rounded" required />
              <input type="text" name="skills" placeholder="Skills (comma separated)" value={newInternship.skills} onChange={handleInputChange} className="w-full border px-3 py-2 rounded" required />
              <input type="text" name="duration" placeholder="Duration" value={newInternship.duration} onChange={handleInputChange} className="w-full border px-3 py-2 rounded" required />
              <input type="number" name="stipend" placeholder="Stipend" value={newInternship.stipend} onChange={handleInputChange} className="w-full border px-3 py-2 rounded" required />
              <input type="date" name="deadline" placeholder="Deadline" value={newInternship.deadline} onChange={handleInputChange} className="w-full border px-3 py-2 rounded" required />
              <input type="text" name="location" placeholder="Location" value={newInternship.location} onChange={handleInputChange} className="w-full border px-3 py-2 rounded" required />
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:from-cyan-400 hover:to-blue-400 transition shadow-md">Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

