import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add login API call here
    console.log("Student login:", { email, password });
    // Navigate to student dashboard or home page
    navigate("/student-dashboard"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Student Login</h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Login
          </Button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500 cursor-pointer hover:underline"
           onClick={() => navigate("/signup")}
        >
          New here? Sign Up
        </p>

        <p className="text-center mt-1 text-sm text-gray-500 cursor-pointer hover:underline"
           onClick={() => navigate("/")}
        >
          ← Back to Landing Page
        </p>
      </div>
    </div>
  );
}
