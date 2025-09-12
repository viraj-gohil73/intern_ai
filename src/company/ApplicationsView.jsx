import React, { useState } from "react";

const students = [
  { id: 1, name: "John Doe", course: "Computer Science", year: "3rd Year", status: "Active", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", course: "Data Science", year: "2nd Year", status: "Inactive", email: "jane@example.com", phone: "234-567-8901" },
  { id: 3, name: "Mike Johnson", course: "UI/UX Design", year: "1st Year", status: "Active", email: "mike@example.com", phone: "345-678-9012" },
  { id: 4, name: "Sara Williams", course: "Digital Marketing", year: "4th Year", status: "Active", email: "sara@example.com", phone: "456-789-0123" },
];

export default function ApplicationsView() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleAccept = (student) => {
    alert(`${student.name}'s application has been accepted.`);
    setSelectedStudent(null);
  };

  const handleReject = (student) => {
    alert(`${student.name}'s application has been rejected.`);
    setSelectedStudent(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
      <div style={{ background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>Student Applications</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f9fafb", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>Name</th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>Course</th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>Year</th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>Status</th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <td style={{ padding: "12px" }}>{student.name}</td>
                <td style={{ padding: "12px" }}>{student.course}</td>
                <td style={{ padding: "12px" }}>{student.year}</td>
                <td style={{ padding: "12px" }}>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "12px",
                      background: student.status === "Active" ? "#dcfce7" : "#fee2e2",
                      color: student.status === "Active" ? "#16a34a" : "#dc2626",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {student.status}
                  </span>
                </td>
                <td style={{ padding: "12px" }}>
                  <button
                    onClick={() => setSelectedStudent(student)}
                    style={{
                      padding: "6px 12px",
                      background: "#3b82f6",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Student Details Popup Modal */}
      {selectedStudent && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}>
          <div style={{ background: "#fff", borderRadius: "12px", padding: "20px", width: "400px", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}>Student Details</h3>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Course:</strong> {selectedStudent.course}</p>
            <p><strong>Year:</strong> {selectedStudent.year}</p>
            <p><strong>Status:</strong> {selectedStudent.status}</p>
            <p><strong>Email:</strong> {selectedStudent.email}</p>
            <p><strong>Phone:</strong> {selectedStudent.phone}</p>

            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={() => handleAccept(selectedStudent)}
                style={{
                  padding: "6px 12px",
                  background: "#22c55e",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(selectedStudent)}
                style={{
                  padding: "6px 12px",
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Reject
              </button>
              <button
                onClick={() => setSelectedStudent(null)}
                style={{
                  padding: "6px 12px",
                  background: "#6b7280",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
