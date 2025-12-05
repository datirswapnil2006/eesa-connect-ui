// src/pages/Terms.tsx
import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p>
        By using EESA-CONNECT-UI, you agree to abide by the following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6">User Responsibilities</h2>
      <p>Alumni must provide accurate details (name, batch, DOB) during login.</p>

      <h2 className="text-xl font-semibold mt-6">Event Participation</h2>
      <p>Registered alumni can access and participate in EESA events through the dashboard.</p>

      <h2 className="text-xl font-semibold mt-6">Prohibited Activities</h2>
      <p>Misuse of the platform, sharing false information, or unauthorized access is strictly prohibited.</p>
    </div>
  );
};

export default Terms;
