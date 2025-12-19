// src/pages/Terms.tsx
import React from "react";
import { Scale, ShieldAlert, UserCheck, Copyright, Mail, Gavel } from "lucide-react"; // npm install lucide-react

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto bg-white shadow-xl shadow-slate-200/60 border border-slate-200 rounded-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-[#0f172a] p-8 sm:p-12 text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
            These Terms govern your use of the website, products, and services provided by EESA.
          </p>
          <div className="mt-6 flex items-center">
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30 text-xs font-medium uppercase tracking-wider">
              Effective: December 2025
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 space-y-12">
          
          {/* Section 1: Agreement */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg items-center justify-center font-bold border border-blue-100">
              1
            </div>
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Gavel className="sm:hidden text-blue-600" size={20} />
                Agreement to Terms
              </h2>
              <p className="leading-relaxed text-slate-600">
                By accessing or using the Services, you agree to be bound by these Terms and all applicable laws and regulations. 
                If you do not agree with any of these Terms, you are prohibited from using or accessing the Services.
              </p>
            </section>
          </div>

          {/* Section 2: User Obligations */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg items-center justify-center font-bold border border-blue-100">
              2
            </div>
            <section className="w-full">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <UserCheck className="sm:hidden text-blue-600" size={20} />
                User Obligations
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-800 text-sm mb-2 uppercase tracking-wide">Account Security</h3>
                  <p className="text-sm text-slate-600">You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account.</p>
                </div>
                <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                  <h3 className="font-bold text-red-800 text-sm mb-2 uppercase tracking-wide">Prohibited Conduct</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                    <li>Posting abusive, defamatory, or infringing content.</li>
                    <li>Attempting unauthorized access to the Services.</li>
                    <li>Using automated means (bots/scraping) without permission.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Section 3: Intellectual Property */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg items-center justify-center font-bold border border-blue-100">
              3
            </div>
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Copyright className="sm:hidden text-blue-600" size={20} />
                Intellectual Property
              </h2>
              <p className="leading-relaxed text-slate-600 text-sm italic border-l-4 border-slate-200 pl-4 py-1">
                The content, features, and functionality of the Services, including text, graphics, logos, and software, 
                are the exclusive property of EESA. Reproduction without prior written permission is prohibited.
              </p>
            </section>
          </div>

          {/* Section 4: Membership */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg items-center justify-center font-bold border border-blue-100">
              4
            </div>
            <section className="w-full">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Membership and Fees</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-xs text-blue-600 uppercase mb-1">Dues</h4>
                  <p className="text-sm">Membership fees are non-refundable unless stated in writing.</p>
                </div>
                <div className="flex-1 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-xs text-red-600 uppercase mb-1">Termination</h4>
                  <p className="text-sm">We reserve the right to suspend access for conduct violating these Terms.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Section 5: Disclaimer */}
          <section className="bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow-inner">
            <h2 className="text-lg font-bold text-amber-900 flex items-center gap-2 mb-3">
              <ShieldAlert size={20} /> 5. Disclaimer & Limitation of Liability
            </h2>
            <div className="space-y-4 text-xs font-semibold text-amber-800 leading-relaxed uppercase tracking-tight">
              <p>The Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind.</p>
              <p>In no event shall EESA be liable for any indirect, incidental, or consequential damages resulting from your access to or inability to use the services.</p>
            </div>
          </section>

          {/* Section 6: Law */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg items-center justify-center font-bold border border-blue-100">
              6
            </div>
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Scale className="sm:hidden text-blue-600" size={20} />
                Governing Law
              </h2>
              <p className="text-sm text-slate-600">
                These Terms shall be governed by the laws of <strong>The State of Maharashtra, India</strong>. 
                Any dispute shall be subject to the exclusive jurisdiction of the courts located in <strong>Amravati</strong>.
              </p>
            </section>
          </div>

          <hr className="border-slate-200" />

          {/* Section 7: Contact */}
          <footer className="text-center bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Questions about these Terms?</h2>
            <div className="flex justify-center">
              <a 
                href="mailto:eesa.prmitr@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                <Mail size={18} />
                eesa.prmitr@gmail.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Terms;