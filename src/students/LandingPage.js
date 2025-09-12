import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { GraduationCap, Building2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700">AI Internships</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
          <a href="#how" className="text-gray-700 hover:text-blue-600">How it Works</a>
          <button
            onClick={() => navigate("/login")}
            className="text-gray-700 hover:text-blue-600"
          >
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Find Your <span className="text-blue-600">Perfect Internship</span> with AI
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Smart recommendations tailored for Students, Companies, and Admins.
            Save time, connect faster, and grow your career.
          </p>
          <div className="mt-6 flex gap-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                const section = document.getElementById("features");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                const section = document.getElementById("about");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.img
          src="https://illustrations.popsy.co/gray/student-graduation.svg"
          alt="AI Internship Illustration"
          className="w-96 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-blue-50">
        <h3 className="text-center text-3xl font-semibold text-gray-800 mb-10">
          Who Are You?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          {/* Student Card */}
          <div onClick={() => navigate("/login")}>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
              <CardContent className="flex flex-col items-center text-center p-8">
                <GraduationCap size={50} className="text-blue-600 mb-4" />
                <h4 className="font-semibold text-lg mb-2">Student</h4>
                <p className="text-gray-600">Discover internships tailored to your skills and career goals.</p>
              </CardContent>
            </Card>
          </div>

          {/* Company Card */}
          <div onClick={() => navigate("/company-login")}>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Building2 size={50} className="text-green-600 mb-4" />
                <h4 className="font-semibold text-lg mb-2">Company</h4>
                <p className="text-gray-600">Find the right candidates quickly with AI-matched profiles.</p>
              </CardContent>
            </Card>
          </div>

          {/* Admin Card */}
          <div onClick={() => navigate("/admin-login")}>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
              <CardContent className="flex flex-col items-center text-center p-8">
                <ShieldCheck size={50} className="text-purple-600 mb-4" />
                <h4 className="font-semibold text-lg mb-2">Admin</h4>
                <p className="text-gray-600">Manage the platform, oversee internships, and monitor analytics.</p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 max-w-5xl mx-auto text-center px-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">How It Works</h3>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Our AI-powered engine analyzes skills, preferences, and opportunities to recommend the best internship matches.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">1. Sign Up</h4>
            <p className="text-gray-600">Choose your role: Student, Company, or Admin.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">2. Profile Setup</h4>
            <p className="text-gray-600">Fill in your skills, goals, or company requirements.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">3. Get Matches</h4>
            <p className="text-gray-600">Receive AI-based recommendations instantly.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          About Us
        </h3>
        <div className="max-w-4xl mx-auto text-center text-gray-600 px-6 space-y-6">
          <p>
            AI Internships is a platform dedicated to connecting students with the perfect internships using the power of AI. 
            We help students discover opportunities tailored to their skills and career goals while assisting companies to find 
            the best candidates efficiently.
          </p>
          <p>
            Our mission is to make internship discovery smart, simple, and fast, empowering students and companies to grow together. 
            Admins have the tools to manage and monitor the entire platform seamlessly.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© 2025 AI Internships. All rights reserved.</p>
      </footer>
    </div>
  );
}
