// src/pages/Privacy.tsx
import React from "react";
import { ShieldCheck, User, CreditCard, Activity, Globe, Lock } from "lucide-react"; // Optional: npm install lucide-react

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl shadow-slate-200/50 border border-slate-200 rounded-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-[#0f172a] p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
              At EESA, we value your privacy. This policy details how we handle your personal data with transparency and high-level security.
            </p>
            <div className="mt-6 flex items-center text-sm text-slate-300">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                Last Updated: December 19, 2025
              </span>
            </div>
          </div>
          {/* Subtle Decorative Element */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 space-y-12">
          
          {/* 1. Information Collection */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard 
                icon={<User size={18}/>} 
                title="Personal Identity" 
                desc="Name, email, phone, mailing address, date of birth, and professional affiliation."
              />
              <InfoCard 
                icon={<CreditCard size={18}/>} 
                title="Payment Details" 
                desc="Transaction data processed via third parties. We do not store full credit card details."
              />
              <InfoCard 
                icon={<Globe size={18}/>} 
                title="Technical Data" 
                desc="IP address, browser type, operating system, and usage data via cookies."
              />
              <InfoCard 
                icon={<Activity size={18}/>} 
                title="Membership Data" 
                desc="Status, event registrations, and specific activities within the EESA platform."
              />
            </div>
          </section>

          {/* 2. Usage */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">2. How We Use Your Information</h2>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-slate-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">●</span> Provide and maintain membership services.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">●</span> Communicate updates and newsletters.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">●</span> Process transactions and billing.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">●</span> Personalize user experience and trends.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">●</span> Fraud detection and security monitoring.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">●</span> Compliance with legal obligations.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Sharing */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Sharing Your Information</h2>
            <p className="text-slate-600 leading-relaxed text-sm mb-4">
              We may share your personal information in the following situations:
            </p>
            <div className="space-y-3">
              <p className="text-sm bg-white border border-slate-200 p-3 rounded-lg"><strong className="text-slate-800">Service Providers:</strong> For hosting, payments, and delivery.</p>
              <p className="text-sm bg-white border border-slate-200 p-3 rounded-lg"><strong className="text-slate-800">Affiliates:</strong> For co-hosted events and collaborative EESA purposes.</p>
              <p className="text-sm bg-white border border-slate-200 p-3 rounded-lg"><strong className="text-slate-800">Legal:</strong> To comply with laws or protect the safety of our users.</p>
            </div>
          </section>

          {/* 4 & 5 Security and Rights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-xl bg-slate-900 text-white">
              <h3 className="flex items-center gap-2 font-bold mb-3 text-lg">
                <Lock size={20} className="text-blue-400" /> 4. Security
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We take industry-standard steps to protect your data. However, please remember that no method of transmission over the Internet is 100% secure.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-blue-100 bg-blue-50/30">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">5. Your Rights</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You have the right to access, update, or request the deletion of your personal data. Please contact us to exercise these rights.
              </p>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* 6. Changes */}
          <footer className="text-center">
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Changes to This Policy</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              We may update this policy periodically. Changes will be effective upon posting the updated date.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

// Sub-component for clean code
const InfoCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-200">
    <div className="flex items-center gap-2 mb-2 text-blue-600">
      {icon}
      <h3 className="font-semibold text-slate-800 text-sm">{title}</h3>
    </div>
    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default Privacy;