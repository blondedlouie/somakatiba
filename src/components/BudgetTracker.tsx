"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronDown } from "lucide-react";
import { KENYA_COUNTY_BUDGET_CYCLE } from "../data/budgetCycle";

export default function BudgetTracker() {
  const [expandedStageId, setExpandedStageId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {KENYA_COUNTY_BUDGET_CYCLE.map((stage, index) => {
        const isExpanded = expandedStageId === stage.id;
        const panelId = `budget-stage-${stage.id}`;
        const triggerId = `budget-stage-trigger-${stage.id}`;

        return (
          <section
            key={stage.id}
            className={`overflow-hidden rounded-card border-2 transition-colors ${
              isExpanded
                ? "border-flag-green bg-white"
                : "border-rule bg-white"
            }`}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() =>
                  setExpandedStageId(isExpanded ? null : stage.id)
                }
                className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-paper focus-visible:bg-paper sm:p-5"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-sans text-sm font-black ${
                    isExpanded
                      ? "bg-flag-green text-white"
                      : "bg-paper text-ink"
                  }`}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-sans text-[11px] font-black uppercase tracking-wide text-flag-red">
                    {stage.deadline}
                  </span>
                  <span className="mt-1 block font-sans text-base font-bold text-ink sm:text-lg">
                    {stage.stageName}
                  </span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-rule px-5 py-5 sm:px-8 sm:py-6">
                    <p className="font-sans text-xs font-bold uppercase tracking-wide text-flag-green">
                      {stage.legalFramework}
                    </p>
                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                      <div>
                        <div className="flex items-center gap-2 font-sans text-xs font-black uppercase tracking-wide text-ink-muted">
                          <CalendarDays
                            className="h-4 w-4 text-flag-red"
                            aria-hidden="true"
                          />
                          Statutory deadline
                        </div>
                        <p className="mt-2 font-serif text-base leading-relaxed text-ink">
                          {stage.deadline}
                        </p>
                        <h4 className="mt-5 font-sans text-xs font-black uppercase tracking-wide text-ink-muted">
                          Process summary
                        </h4>
                        <p className="mt-2 font-serif text-sm leading-relaxed text-ink">
                          {stage.description}
                        </p>
                      </div>
                      <div className="rounded-card border-l-4 border-flag-green bg-paper p-5">
                        <h4 className="font-sans text-xs font-black uppercase tracking-wide text-flag-green">
                          Required citizen action
                        </h4>
                        <ol className="mt-3 space-y-3">
                          {stage.citizenAction.map((action) => (
                            <li
                              key={action}
                              className="flex items-start gap-3 font-serif text-sm leading-relaxed text-ink"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-flag-green"
                              />
                              {action}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    <p className="mt-5 border-t border-rule pt-4 font-serif text-xs leading-relaxed text-ink-muted">
                      Deadlines are statutory latest dates. Check current
                      notices from your County Treasury and County Assembly
                      for hearing dates and submission instructions.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        );
      })}
    </div>
  );
}
