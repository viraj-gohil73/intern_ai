import { useEffect, useState } from 'react';

export default function ProfileCompletion({ userData }) {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const totalFields = 6; // number of fields to fill
    const filledFields = Object.values(userData).filter(Boolean).length;
    setCompletion((filledFields / totalFields) * 100);
  }, [userData]);

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-1 text-gray-700">Profile Completion</h3>
      <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${completion}%`, background: "linear-gradient(to right, red, yellow, green)" }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{Math.round(completion)}% Complete</p>
    </div>
  );
}
