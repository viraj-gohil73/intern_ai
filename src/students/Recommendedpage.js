import { useState } from "react";

export default function RecommendedPage() {
  const [selectedInternship, setSelectedInternship] = useState(null);

  const recommendedInternships = [
    { id: 1, title: "AI Engineer", company: "DeepMind", duration: "6 months", stipend: "$700", description: "Work on advanced AI models and deep learning systems." },
    { id: 2, title: "UI/UX Designer", company: "Figma", duration: "4 months", stipend: "$500", description: "Design clean, modern UI and improve UX flows for apps." },
    { id: 3, title: "Backend Developer", company: "Google", duration: "5 months", stipend: "$800", description: "Develop scalable backend services with Node.js and Go." },
  ];

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">⭐ Recommended Internships</h1>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedInternships.map((rec) => (
          <div
            key={rec.id}
            onClick={() => setSelectedInternship(rec)}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer border-l-4 border-yellow-400"
          >
            <h3 className="text-xl font-bold mb-1 text-gray-800">{rec.title}</h3>
            <p className="text-gray-600 mb-1">Company: {rec.company}</p>
            <p className="text-gray-600 mb-1">Duration: {rec.duration}</p>
            <p className="text-gray-600">Stipend: {rec.stipend}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedInternship && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-11/12 max-w-2xl shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-gray-700 text-xl font-bold hover:text-red-500"
              onClick={() => setSelectedInternship(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-yellow-500">{selectedInternship.title}</h2>
            <p className="text-gray-600 mb-1">Company: {selectedInternship.company}</p>
            <p className="text-gray-600 mb-1">Duration: {selectedInternship.duration}</p>
            <p className="text-gray-600 mb-3">Stipend: {selectedInternship.stipend}</p>
            <p className="text-gray-700">{selectedInternship.description}</p>
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg transition duration-300 shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
