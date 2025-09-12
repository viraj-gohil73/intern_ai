// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <div className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">Admin Dashboard</h1>
      <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
        Logout
      </button>
    </div>
  );
}
