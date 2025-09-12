// src/pages/SettingsPage.js
import React from "react";

export default function SettingsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">⚙️ Settings</h1>

        <p className="text-gray-600 mb-6">
          Here you can update your profile, preferences, and account settings.
        </p>

        <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
