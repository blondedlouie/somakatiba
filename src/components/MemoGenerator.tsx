"use client";

import { useState, type FormEvent } from "react";
import jsPDF from "jspdf";
import { ChevronDown, Download, FilePlus2, Trash2 } from "lucide-react";
import { KENYA_COUNTY_BUDGET_CYCLE } from "../data/budgetCycle";

interface MemoItem {
  clause: string;
  issue: string;
  proposal: string;
}

interface MemoFormData {
  fullName: string;
  nationalId: string;
  county: string;
  ward: string;
  targetBody: "County Assembly" | "National Assembly" | "Senate";
  targetDocument: string;
  objections: MemoItem[];
}

const fieldClassName =
  "mt-1 w-full rounded-control border-2 border-ink bg-white px-3 py-2.5 font-sans text-sm text-ink focus:border-flag-green focus:outline-none";

const emptyMemoItem = (): MemoItem => ({
  clause: "",
  issue: "",
  proposal: "",
});

function safePdfText(value: string) {
  return value
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u00a0/g, " ");
}

export default function MemoGenerator() {
  const [formData, setFormData] = useState<MemoFormData>({
    fullName: "",
    nationalId: "",
    county: "",
    ward: "",
    targetBody: "County Assembly",
    targetDocument: "",
    objections: [emptyMemoItem()],
  });
  const [selectedBudgetStage, setSelectedBudgetStage] = useState("");
  const [pdfError, setPdfError] = useState("");

  const updateField = <K extends keyof MemoFormData>(
    field: K,
    value: MemoFormData[K],
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const updateMemoItem = (
    index: number,
    field: keyof MemoItem,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      objections: current.objections.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addMemoItem = () => {
    setFormData((current) => ({
      ...current,
      objections: [...current.objections, emptyMemoItem()],
    }));
  };

  const removeMemoItem = (index: number) => {
    setFormData((current) => ({
      ...current,
      objections: current.objections.filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
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
      const lineHeight = 5;
      let y = margin;

      const ensureSpace = (height: number) => {
        if (y + height > pageHeight - margin) {
          doc.addPage();
          y = margin;
        }
      };

      const addParagraph = (
        text: string,
        options: {
          bold?: boolean;
          fontSize?: number;
          indent?: number;
          after?: number;
        } = {},
      ) => {
        const { bold = false, fontSize = 10, indent = 0, after = 3 } = options;
        doc.setFont("helvetica", bold ? "bold" : "normal");
        doc.setFontSize(fontSize);

        const lines = doc.splitTextToSize(
          safePdfText(text),
          contentWidth - indent,
        ) as string[];

        lines.forEach((line) => {
          ensureSpace(lineHeight);
          doc.text(line, margin + indent, y);
          y += lineHeight;
        });
        y += after;
      };

      doc.setFillColor(10, 92, 39);
      doc.roundedRect(margin, y, contentWidth, 20, 2, 2, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("PUBLIC PARTICIPATION MEMORANDUM", margin + 6, y + 8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.text(
        "CONSTITUTION OF KENYA, 2010 - ARTICLES 10, 118 AND 201",
        margin + 6,
        y + 15,
      );
      doc.setTextColor(17, 17, 17);
      y += 28;

      addParagraph(`TO: THE CLERK OF THE ${formData.targetBody.toUpperCase()}`, {
        bold: true,
        after: 1,
      });
      if (formData.targetBody === "County Assembly") {
        addParagraph(`COUNTY ASSEMBLY OF ${formData.county.toUpperCase()}`, {
          bold: true,
          after: 1,
        });
      }
      addParagraph(`RE: PUBLIC COMMENTS ON ${formData.targetDocument}`, {
        bold: true,
        after: 6,
      });

      addParagraph("PETITIONER DETAILS", { bold: true, fontSize: 11, after: 2 });
      addParagraph(`Name: ${formData.fullName}`, { after: 1 });
      addParagraph(`National ID number: ${formData.nationalId}`, { after: 1 });
      addParagraph(`County: ${formData.county}`, { after: 1 });
      addParagraph(`Ward: ${formData.ward}`, { after: 6 });

      addParagraph("SUBMISSION", { bold: true, fontSize: 11, after: 2 });
      addParagraph(
        `I submit the following comments and proposals on ${formData.targetDocument} for consideration by the ${formData.targetBody}. Please consider these views as part of the public participation process.`,
        { after: 6 },
      );

      formData.objections.forEach((item, index) => {
        addParagraph(`ITEM ${index + 1}: ${item.clause}`, {
          bold: true,
          fontSize: 11,
          after: 2,
        });
        addParagraph(`Concern or objection: ${item.issue}`, {
          indent: 4,
          after: 2,
        });
        addParagraph(`        Proposed replacement amendment or action: ${item.proposal}`, {
          indent: 4,
          after: 6,
        });
      });

      addParagraph(
        "I confirm that these comments reflect my views and are submitted for consideration in the public interest.",
        { after: 8 },
      );
      addParagraph(
        `DATED at ${formData.ward}, ${formData.county}, this ${new Date().toLocaleDateString("en-GB")}.`,
        { after: 12 },
      );
      addParagraph("Petitioner's signature: __________________________________", {
        bold: true,
        after: 12,
      });
      addParagraph("FOR OFFICIAL USE", { bold: true, fontSize: 9, after: 2 });
      addParagraph(
        "Received by: __________________________    Date: ______________",
        { after: 2 },
      );
      addParagraph(
        "Office / reference number: _____________________________________",
        { after: 2 },
      );

      const pageCount = doc.getNumberOfPages();
      for (let page = 1; page <= pageCount; page += 1) {
        doc.setPage(page);
        doc.setDrawColor(217, 220, 223);
        doc.line(margin, pageHeight - 13, pageWidth - margin, pageHeight - 13);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text("Soma Katiba KE | Public participation memorandum", margin, pageHeight - 8);
        doc.text(`${page} / ${pageCount}`, pageWidth - margin, pageHeight - 8, {
          align: "right",
        });
      }

      const fileName = formData.fullName
        .trim()
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");
      doc.save(
        `Public_Participation_Memo_${fileName || "Citizen"}.pdf`,
      );
    } catch (error) {
      console.error("Failed to generate public participation memorandum PDF.", error);
      setPdfError(
        "The PDF could not be generated. Please try again or print this page instead.",
      );
    }
  };

  return (
    <details className="group rounded-card border border-rule bg-white open:border-flag-green">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card p-4 transition-colors hover:bg-paper focus-visible:bg-paper [&::-webkit-details-marker]:hidden sm:p-5">
        <span className="min-w-0">
          <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-flag-green">
            Articles 10, 118 and 201
          </span>
          <span className="mt-1 block font-sans text-base font-black text-ink sm:text-lg">
            Official Citizen Petition Letter
          </span>
          <span className="mt-1 block font-serif text-xs leading-relaxed text-ink-muted sm:text-sm">
            Open the form to draft and download a public participation memo.
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2 rounded-control bg-flag-green px-3 py-2 font-sans text-xs font-bold text-white">
          <span className="hidden sm:inline">Open form</span>
          <ChevronDown
            className="h-4 w-4 transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </span>
      </summary>

      <div
        role="region"
        aria-label="Public participation memorandum form"
        className="border-t border-rule p-4 sm:p-6"
      >
        <p className="mb-6 max-w-3xl font-serif text-sm leading-relaxed text-ink-muted">
          Prepare a printable submission with your details, clause references,
          concerns, and specific proposals. Your information stays in this
          browser and is only included in the PDF you download.
        </p>

        <form onSubmit={generatePDF} className="space-y-8">
        <fieldset className="space-y-4">
          <legend className="font-sans text-sm font-bold text-ink">
            Petitioner and submission details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="font-sans text-xs font-bold text-ink">
              Petitioner name
              <input
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className={fieldClassName}
              />
            </label>
            <label className="font-sans text-xs font-bold text-ink">
              National ID number
              <input
                autoComplete="off"
                required
                value={formData.nationalId}
                onChange={(event) => updateField("nationalId", event.target.value)}
                className={fieldClassName}
              />
            </label>
            <label className="font-sans text-xs font-bold text-ink">
              County
              <input
                autoComplete="address-level1"
                required
                value={formData.county}
                onChange={(event) => updateField("county", event.target.value)}
                className={fieldClassName}
              />
            </label>
            <label className="font-sans text-xs font-bold text-ink">
              Ward
              <input
                required
                value={formData.ward}
                onChange={(event) => updateField("ward", event.target.value)}
                className={fieldClassName}
              />
            </label>
            <label className="font-sans text-xs font-bold text-ink">
              Target assembly body
              <select
                value={formData.targetBody}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  if (
                    value === "County Assembly" ||
                    value === "National Assembly" ||
                    value === "Senate"
                  ) {
                    updateField("targetBody", value);
                  }
                }}
                className={fieldClassName}
              >
                <option>County Assembly</option>
                <option>National Assembly</option>
                <option>Senate</option>
              </select>
            </label>
            <label className="font-sans text-xs font-bold text-ink">
              Target Bill or document name
              <input
                required
                placeholder="Enter the Bill, plan, budget, or document name"
                value={formData.targetDocument}
                onChange={(event) => {
                  setSelectedBudgetStage("");
                  updateField("targetDocument", event.target.value);
                }}
                className={fieldClassName}
              />
            </label>
            <label className="font-sans text-xs font-bold text-ink">
              Budget stage, if applicable
              <select
                value={selectedBudgetStage}
                onChange={(event) => {
                  const stageName = event.currentTarget.value;
                  setSelectedBudgetStage(stageName);
                  if (stageName) updateField("targetDocument", stageName);
                }}
                className={fieldClassName}
              >
                <option value="">Select a county budget stage</option>
                {KENYA_COUNTY_BUDGET_CYCLE.map((stage) => (
                  <option key={stage.id} value={stage.stageName}>
                    {stage.stageName}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset className="space-y-4 border-t border-rule pt-6">
          <legend className="font-sans text-sm font-bold text-ink">
            Clause objections and citizen proposals
          </legend>
          {formData.objections.map((item, index) => (
            <div
              key={index}
              className="space-y-4 rounded-card border border-rule bg-paper p-4 sm:p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-sans text-sm font-bold text-ink">
                  Submission item {index + 1}
                </h3>
                {formData.objections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeMemoItem(index)}
                    aria-label={`Remove submission item ${index + 1}`}
                    className="inline-flex items-center gap-1 rounded-control px-2 py-1 font-sans text-xs font-bold text-flag-red hover:bg-white"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                )}
              </div>
              <label className="block font-sans text-xs font-bold text-ink">
                Clause, programme, or line-item reference
                <input
                  required
                  placeholder="For example, Article 201 or the ward health allocation"
                  value={item.clause}
                  onChange={(event) =>
                    updateMemoItem(index, "clause", event.target.value)
                  }
                  className={fieldClassName}
                />
              </label>
              <label className="block font-sans text-xs font-bold text-ink">
                Concern or objection
                <textarea
                  required
                  rows={3}
                  value={item.issue}
                  onChange={(event) =>
                    updateMemoItem(index, "issue", event.target.value)
                  }
                  className={fieldClassName}
                />
              </label>
              <label className="block font-sans text-xs font-bold text-ink">
                Proposed replacement amendment or action
                <textarea
                  required
                  rows={3}
                  value={item.proposal}
                  onChange={(event) =>
                    updateMemoItem(index, "proposal", event.target.value)
                  }
                  className={fieldClassName}
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={addMemoItem}
            className="inline-flex items-center gap-2 rounded-control border-2 border-ink px-4 py-2.5 font-sans text-xs font-bold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <FilePlus2 className="h-4 w-4" />
            Add another item
          </button>
        </fieldset>

        {pdfError && (
          <p role="alert" className="rounded-control bg-red-50 p-3 font-sans text-sm text-flag-red">
            {pdfError}
          </p>
        )}

        <div className="border-t border-rule pt-6">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-control bg-flag-green px-5 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-flag-green-hover sm:w-auto"
          >
            <Download className="h-5 w-5" />
            Download printable memo PDF
          </button>
          <p className="mt-3 font-serif text-xs leading-relaxed text-ink-muted">
            This tool creates a draft for you to review and sign. Confirm the
            correct clerk, submission method, and deadline in the relevant
            Assembly notice before filing.
          </p>
        </div>
        </form>
      </div>
    </details>
  );
}
