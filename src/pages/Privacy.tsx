// src/pages/Privacy.tsx
import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>
        We value your privacy. This policy explains how EESA-CONNECT-UI collects,
        uses, and protects your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
      <p>Name, batch, DOB, and login details are stored securely for alumni authentication.</p>

      <h2 className="text-xl font-semibold mt-6">How We Use Your Data</h2>
      <p>Data is used only for login verification and event participation tracking.</p>

      <h2 className="text-xl font-semibold mt-6">Security</h2>
      <p>We implement strict measures to protect your information from unauthorized access.</p>
    </div>
  );
};

export default Privacy;
