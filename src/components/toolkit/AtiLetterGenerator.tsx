"use client";

import React, { useState } from "react";
import { Download, Copy, Check, FileText } from "lucide-react";

export default function AtiLetterGenerator() {
  const [formData, setFormData] = useState({
    applicantName: "",
    nationalId: "",
    email: "",
    phone: "",
    county: "Nairobi City County",
    department: "Department of Finance and Economic Planning",
    requestedInfo:
      "Detailed breakdown of the FY 2023/2024 County Ward Development Fund expenditures and procurement tenders awarded for local health centers.",
    date: new Date().toISOString().split("T")[0],
  });

  const [copied, setCopied] = useState(false);

  const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa",
    "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi",
    "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu",
    "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa",
    "Murang'a", "Nairobi City County", "Nakuru", "Nandi", "Narok", "Nyamira",
    "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita Taveta", "Tana River",
    "Tharaka Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

  const letterText = `FORMAL REQUEST FOR ACCESS TO INFORMATION
PURSUANT TO ARTICLE 35 OF THE CONSTITUTION OF KENYA, 2010
AND THE ACCESS TO INFORMATION ACT (NO. 31 OF 2016)

Date: ${formData.date}

TO:
The County Chief Officer / Designated Information Officer,
${formData.department},
County Government of ${formData.county},
Republic of Kenya.

FROM:
Name of Applicant: ${formData.applicantName || "[Your Full Name]"}
National ID Number: ${formData.nationalId || "[Your ID Number]"}
Email: ${formData.email || "[Your Email Address]"}
Telephone: ${formData.phone || "[Your Phone Number]"}

RE: FORMAL REQUEST FOR PUBLIC INFORMATION UNDER ARTICLE 35

Dear Sir/Madam,

1. Pursuant to Article 35(1)(a) of the Constitution of Kenya, which guarantees that "Every citizen has the right of access to information held by the State", read together with Sections 4 and 8 of the Access to Information Act (No. 31 of 2016), I hereby respectfully request copies of the following information:

REQUEST DETAILS:
${formData.requestedInfo || "[Specify details of information requested]"}

2. In accordance with Section 9 of the Access to Information Act, 2016, a public entity is mandated to respond to an application within twenty-one (21) days of receipt.

3. I look forward to your timely response in the public interest and in defense of good governance and accountability as enshrined under Article 10 of our Constitution.

Yours faithfully,

${formData.applicantName || "[Your Signature & Full Name]"}
Citizen of the Republic of Kenya`;

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([letterText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `ATI_Request_${formData.county.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Form Input Column */}
      <div className="lg:col-span-5 bg-white border border-rule rounded-card p-6 sm:p-7 space-y-4">
        <div>
          <h3 className="font-sans font-bold text-lg text-ink">
            Request parameters
          </h3>
          <p className="font-serif text-xs text-ink-muted mt-0.5">
            Fill in your details to populate your formal Article 35 letter.
          </p>
        </div>

        <div className="space-y-3 font-sans text-xs">
          <div>
            <label className="font-bold text-ink block mb-1">
              Full legal name
            </label>
            <input
              type="text"
              placeholder="e.g. John Kimani"
              value={formData.applicantName}
              onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
              className="w-full px-3 py-2 text-sm border-2 border-ink rounded-control focus:outline-none focus:border-flag-green font-sans"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-ink block mb-1">
                National ID number
              </label>
              <input
                type="text"
                placeholder="e.g. 12345678"
                value={formData.nationalId}
                onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                className="w-full px-3 py-2 text-sm border-2 border-ink rounded-control focus:outline-none focus:border-flag-green font-sans"
              />
            </div>
            <div>
              <label className="font-bold text-ink block mb-1">
                Phone number
              </label>
              <input
                type="text"
                placeholder="e.g. 0712 345 678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 text-sm border-2 border-ink rounded-control focus:outline-none focus:border-flag-green font-sans"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-ink block mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="e.g. citizen@kenya.co.ke"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 text-sm border-2 border-ink rounded-control focus:outline-none focus:border-flag-green font-sans"
            />
          </div>

          <div>
            <label className="font-bold text-ink block mb-1">
              Target County Government
            </label>
            <select
              value={formData.county}
              onChange={(e) => setFormData({ ...formData, county: e.target.value })}
              className="w-full px-3 py-2 text-sm border-2 border-ink rounded-control focus:outline-none focus:border-flag-green bg-white font-sans"
            >
              {counties.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-ink block mb-1">
              Target Department or Ministry
            </label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full px-3 py-2 text-sm border-2 border-ink rounded-control focus:outline-none focus:border-flag-green font-sans"
            />
          </div>

          <div>
            <label className="font-bold text-ink block mb-1">
              Information or records requested
            </label>
            <textarea
              rows={4}
              value={formData.requestedInfo}
              onChange={(e) => setFormData({ ...formData, requestedInfo: e.target.value })}
              className="w-full px-3 py-2 text-sm border-2 border-ink rounded-control focus:outline-none focus:border-flag-green font-sans leading-relaxed"
            />
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:flex-1 font-sans font-bold text-xs bg-flag-green hover:bg-flag-green-hover text-white rounded-control px-4 py-3 flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied to clipboard
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy letter text
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="w-full sm:flex-1 font-sans font-bold text-xs bg-white hover:bg-ink hover:text-white border-2 border-ink text-ink rounded-control px-4 py-3 flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Download className="w-4 h-4" />
            Download text file
          </button>
        </div>
      </div>

      {/* Letter Preview Sheet Column */}
      <div className="lg:col-span-7">
        <div
          style={{
            boxShadow: "8px 8px 0 #be1111",
          }}
          className="bg-white border border-rule border-t-[6px] border-t-flag-green rounded-card p-6 sm:p-10 font-serif text-[15px] sm:text-[16px] text-ink leading-relaxed"
        >
          <div className="border-b border-rule pb-4 mb-5 flex items-center justify-between">
            <div>
              <span className="font-sans font-bold text-xs uppercase tracking-wider text-flag-green block">
                Official citizen petition
              </span>
              <span className="font-sans font-black text-sm text-ink">
                Access to Information Act, 2016
              </span>
            </div>
            <span className="font-sans text-xs text-ink-muted">
              {formData.date}
            </span>
          </div>

          <pre className="font-serif whitespace-pre-wrap leading-relaxed text-ink text-[14px] sm:text-[15px] selection:bg-paper">
            {letterText}
          </pre>

          <div className="mt-8 pt-4 border-t border-rule text-xs font-serif text-ink-muted italic">
            Statutory notice: Section 9 of the Access to Information Act mandates a response within 21 calendar days.
          </div>
        </div>
      </div>
    </div>
  );
}
