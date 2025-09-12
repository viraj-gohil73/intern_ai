// src/pages/ProfilePage.js
import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8 text-gray-800">👤 My Profile</h1>

        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-md"
          />
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-500">AI Engineering Student</p>
        </div>

        {/* Details Section */}
        <div className="mt-8 text-left space-y-4">
          <p>
            <span className="font-semibold text-gray-700">📧 Email:</span>{" "}
            john.doe@email.com
          </p>
          <p>
            <span className="font-semibold text-gray-700">📱 Phone:</span>{" "}
            +91 9876543210
          </p>
          <p>
            <span className="font-semibold text-gray-700">🏫 College:</span>{" "}
            ABC Institute of Technology
          </p>
          <p>
            <span className="font-semibold text-gray-700">💡 Skills:</span>{" "}
            Python, React, Machine Learning
          </p>
        </div>
      </div>
    </div>
  );
}
