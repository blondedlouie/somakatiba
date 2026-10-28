"use client";

import { useState, type FormEvent } from "react";
import jsPDF from "jspdf";
import { Download, FileSearch } from "lucide-react";

interface AtiFormData {
  fullName: string;
  nationalId: string;
  target: string;
  department: string;
  requestedInfo: string;
}

const fieldClassName =
  "mt-1 w-full rounded-control border-2 border-ink bg-white px-3 py-2.5 font-sans text-sm text-ink focus:border-flag-green focus:outline-none";

function printableText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[^\x20-\x7e]/g, "?");
}

export default function AtiLetterGenerator() {
  const [formData, setFormData] = useState<AtiFormData>({
    fullName: "",
    nationalId: "",
    target: "",
    department: "",
    requestedInfo: "",
  });
  const [pdfError, setPdfError] = useState("");

  const updateField = (field: keyof AtiFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const generatePDF = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPdfError("");

    try {
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;
      let y = margin;

      const ensureSpace = (height: number) => {
        if (y + height > pageHeight - margin) {
          doc.addPage();
          y = margin;
        }
      };

      const addText = (
        text: string,
        options: { bold?: boolean; fontSize?: number; after?: number } = {},
      ) => {
        const { bold = false, fontSize = 10, after = 3 } = options;
        doc.setFont("helvetica", bold ? "bold" : "normal");
        doc.setFontSize(fontSize);
        const lines = doc.splitTextToSize(
          printableText(text),
          contentWidth,
        ) as string[];
        const lineHeight = fontSize * 0.48;

        for (const line of lines) {
          ensureSpace(lineHeight);
          doc.text(line, margin, y);
          y += lineHeight;
        }
        y += after;
      };

      doc.setFillColor(17, 17, 17);
      doc.rect(margin, y, contentWidth, 25, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.text("ACCESS TO INFORMATION REQUEST", margin + 6, y + 9);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.text(
        "ARTICLE 35, CONSTITUTION OF KENYA, 2010 | ACT NO. 31 OF 2016",
        margin + 6,
        y + 17,
      );
      y += 31;

      doc.setFillColor(190, 17, 17);
      doc.roundedRect(margin, y, contentWidth, 12, 1, 1, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text(
        "STATUTORY RESPONSE PERIOD: 21 DAYS FROM RECEIPT",
        margin + 4,
        y + 7.5,
      );
      doc.setTextColor(17, 17, 17);
      y += 19;

      const date = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      addText(`Date: ${date}`, { after: 7 });
      addText("TO:", { bold: true, after: 1 });
      addText(formData.department, { bold: true, after: 1 });
      addText(formData.target, { after: 7 });
      addText("FROM:", { bold: true, after: 1 });
      addText(formData.fullName, { after: 1 });
      addText(`National ID number: ${formData.nationalId}`, { after: 7 });
      addText("RE: REQUEST FOR ACCESS TO PUBLIC INFORMATION", {
        bold: true,
        fontSize: 11,
        after: 7,
      });
      addText("Dear Sir/Madam,", { after: 5 });
      addText(
        "Pursuant to Article 35 of the Constitution of Kenya, 2010 and the Access to Information Act, No. 31 of 2016, I request access to the following information held by your office:",
        { after: 4 },
      );
      addText("INFORMATION REQUESTED", { bold: true, after: 2 });
      addText(formData.requestedInfo, { after: 7 });
      addText(
        "Please provide the information in an accessible form. If any part of this request is declined, kindly identify the specific legal basis and explain the applicable review or appeal process.",
        { after: 5 },
      );
      addText(
        "Under section 9 of the Access to Information Act, the public entity is required to respond to an application as soon as possible and not later than 21 days after receipt, subject to the Act.",
        { after: 8 },
      );
      addText("Yours faithfully,", { after: 13 });
      addText("Signature: __________________________________", {
        bold: true,
        after: 4,
      });
      addText(`Name: ${formData.fullName}`, { after: 2 });
      addText(`National ID number: ${formData.nationalId}`, { after: 9 });
      addText("OFFICE RECEIPT", { bold: true, after: 3 });
      addText("Received by: _______________________  Date: ______________", {
        after: 3,
      });
      addText("Reference number: ______________________________________");

      const pageCount = doc.getNumberOfPages();
      for (let page = 1; page <= pageCount; page += 1) {
        doc.setPage(page);
        doc.setDrawColor(217, 220, 223);
        doc.line(margin, pageHeight - 13, pageWidth - margin, pageHeight - 13);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text("Soma Katiba KE | Access to information request", margin, pageHeight - 8);
        doc.text(`${page} / ${pageCount}`, pageWidth - margin, pageHeight - 8, {
          align: "right",
        });
      }

      const fileName = formData.fullName
        .trim()
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");
      doc.save(`ATI_Request_${fileName || "Citizen"}.pdf`);
    } catch (error) {
      console.error("Failed to generate access to information request PDF.", error);
      setPdfError(
        "The PDF could not be generated. Please try again or print this page instead.",
      );
    }
  };

  return (
    <div className="rounded-card border border-rule bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-start gap-4 border-b border-rule pb-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-paper text-flag-green">
          <FileSearch className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-wide text-flag-green">
            Article 35 | Access to Information Act, No. 31 of 2016
          </p>
          <h2 className="mt-1 font-sans text-2xl font-black text-ink">
            Formal Access to Information Request
          </h2>
          <p className="mt-2 font-serif text-sm leading-relaxed text-ink-muted">
            Complete the fields to prepare a request for a public entity. The
            PDF is generated in your browser and is not sent to this website.
          </p>
        </div>
      </div>

      <form onSubmit={generatePDF} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="font-sans text-xs font-bold text-ink">
            Full name
            <input
              required
              autoComplete="name"
              value={formData.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              className={fieldClassName}
            />
          </label>
          <label className="font-sans text-xs font-bold text-ink">
            ID number
            <input
              required
              autoComplete="off"
              value={formData.nationalId}
              onChange={(event) => updateField("nationalId", event.target.value)}
              className={fieldClassName}
            />
          </label>
          <label className="font-sans text-xs font-bold text-ink">
            Target county or ministry
            <input
              required
              placeholder="For example, County Government of Kiambu"
              value={formData.target}
              onChange={(event) => updateField("target", event.target.value)}
              className={fieldClassName}
            />
          </label>
          <label className="font-sans text-xs font-bold text-ink">
            Department
            <input
              required
              placeholder="For example, Department of Health"
              value={formData.department}
              onChange={(event) =>
                updateField("department", event.target.value)
              }
              className={fieldClassName}
            />
          </label>
        </div>
        <label className="block font-sans text-xs font-bold text-ink">
          Specific public information requested
          <textarea
            required
            rows={5}
            placeholder="Describe the records, dates, locations, and format you are requesting."
            value={formData.requestedInfo}
            onChange={(event) =>
              updateField("requestedInfo", event.target.value)
            }
            className={fieldClassName}
          />
        </label>

        {pdfError && (
          <p
            role="alert"
            className="rounded-control bg-red-50 p-3 font-sans text-sm text-flag-red"
          >
            {pdfError}
          </p>
        )}

        <div className="border-t border-rule pt-5">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-control bg-flag-green px-5 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-flag-green-hover sm:w-auto"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download request PDF
          </button>
          <p className="mt-3 font-serif text-xs leading-relaxed text-ink-muted">
            The 21-day response period is subject to the Access to Information
            Act. Check the relevant public entity's submission requirements.
          </p>
        </div>
      </form>
    </div>
  );
}
