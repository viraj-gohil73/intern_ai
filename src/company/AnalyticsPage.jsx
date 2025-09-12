import React from "react";

const categories = [
  { name: "Software Development", count: 8, percent: 42 },
  { name: "Data Science", count: 5, percent: 26 },
  { name: "UI/UX Design", count: 3, percent: 16 },
  { name: "Digital Marketing", count: 2, percent: 11 },
  { name: "Others", count: 1, percent: 5 },
];

const applications = [
  { month: "Jan 2024", total: 145, filled: 23, rate: 16 },
  { month: "Feb 2024", total: 167, filled: 28, rate: 17 },
  { month: "Mar 2024", total: 189, filled: 31, rate: 16 },
  { month: "Apr 2024", total: 203, filled: 35, rate: 17 },
];

const insights = [
  { label: "Student Satisfaction", value: "85%", note: "Excellent", color: "#6366f1" },
  { label: "Company Retention", value: "92%", note: "High", color: "#16a34a" },
  { label: "Platform Rating", value: "4.6/5", note: "Excellent", color: "#facc15" },
];

export default function AnalyticsPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
      {/* Top Section */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
        {/* Internships by Category */}
        <div style={{ background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>Internships by Category</h2>
          {categories.map((c, i) => (
            <div key={i} style={{ marginBottom: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span>{c.name}</span>
                <span style={{ fontSize: "14px", color: "#555" }}>{c.count} ({c.percent}%)</span>
              </div>
              <div style={{ background: "#e5e7eb", borderRadius: "8px", height: "8px" }}>
                <div
                  style={{
                    width: `${c.percent}%`,
                    background: "#6366f1",
                    height: "8px",
                    borderRadius: "8px",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Trends */}
        <div style={{ background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>Application Trends</h2>
          {applications.map((a, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", background: "#f9fafb", padding: "12px 16px", borderRadius: "8px" }}>
              <div>
                <div style={{ fontWeight: "500" }}>{a.month}</div>
                <div style={{ fontSize: "14px", color: "#555" }}>{a.total} applications</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#16a34a", fontWeight: "600" }}>{a.filled} filled</div>
                <div style={{ fontSize: "14px", color: "#555" }}>{a.rate}% rate</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div style={{ background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", textAlign: "center" }}>
        {insights.map((ins, i) => (
          <div key={i}>
            <div style={{ fontSize: "32px", fontWeight: "700", color: ins.color }}>{ins.value}</div>
            <div style={{ fontSize: "14px", margin: "6px 0", color: "#444" }}>{ins.label}</div>
            <span style={{ fontSize: "12px", padding: "4px 12px", border: "1px solid #ddd", borderRadius: "12px", background: "#f9fafb" }}>{ins.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}