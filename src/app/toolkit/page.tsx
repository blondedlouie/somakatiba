import type { Metadata } from "next";
import Link from "next/link";
import BudgetTracker from "@/components/BudgetTracker";
import MemoGenerator from "@/components/MemoGenerator";
import AtiLetterGenerator from "@/components/toolkit/AtiLetterGenerator";
import FlagRibbon from "@/components/ui/FlagRibbon";
import SocialLinks from "@/components/ui/SocialLinks";

export const metadata: Metadata = {
  title: "Citizen Action Toolkit - Soma Katiba KE",
  description:
    "Track county budget deadlines and prepare a public participation memorandum for submission to an Assembly.",
};

export default function ToolkitPage() {
  return (
    <main className="min-h-screen bg-white font-serif text-ink">
      <FlagRibbon height={14} />
      <header className="border-b border-rule bg-white">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-sans text-sm font-bold text-flag-green underline decoration-flag-green underline-offset-4 transition-colors hover:decoration-flag-red"
          >
            Soma Katiba KE
          </Link>
          <nav
            aria-label="Toolkit sections"
            className="hidden items-center gap-5 font-sans text-xs font-bold md:flex"
          >
            <a href="#ati-request" className="hover:text-flag-green">
              Information request
            </a>
            <a href="#budget-cycle" className="hover:text-flag-green">
              Budget cycle
            </a>
            <a href="#memo-generator" className="hover:text-flag-green">
              Memo generator
            </a>
          </nav>
          <SocialLinks className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-white [&_svg]:h-4 [&_svg]:w-4" />
        </div>
      </header>

      <section className="border-b border-rule bg-paper py-12 sm:py-16">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8 lg:px-12">
          <p className="font-sans text-xs font-black uppercase tracking-[0.16em] text-flag-red">
            Citizen action toolkit
          </p>
          <h1 className="mt-3 max-w-3xl font-sans text-[clamp(34px,5vw,58px)] font-black leading-[1.05] tracking-tight text-ink">
            Follow the budget. Make your voice count.
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-ink-muted sm:text-lg">
            Request public records, follow county budget stages, and prepare
            public participation submissions for review and filing.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1180px] space-y-16 px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <section id="ati-request" className="scroll-mt-8 space-y-6">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-flag-green">
              Article 35 | Access to Information Act, No. 31 of 2016
            </p>
            <h2 className="mt-2 font-sans text-3xl font-black text-ink">
              Request public information
            </h2>
            <p className="mt-2 font-serif text-sm leading-relaxed text-ink-muted">
              Prepare a formal request addressed to a county, ministry, or
              public department. The generated document includes the statutory
              21-day response period.
            </p>
          </div>
          <AtiLetterGenerator />
        </section>

        <section id="budget-cycle" className="scroll-mt-8 space-y-6">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-flag-green">
              Article 201 | Public Finance Management Act, 2012
            </p>
            <h2 className="mt-2 font-sans text-3xl font-black text-ink">
              County Budget Cycle Tracker
            </h2>
            <p className="mt-2 font-serif text-sm leading-relaxed text-ink-muted">
              Expand a stage to see its statutory deadline, process, and
              suggested citizen actions. Public hearing dates and submission
              windows are announced separately by each county.
            </p>
          </div>
          <BudgetTracker />
        </section>

        <section
          id="memo-generator"
          className="scroll-mt-8 space-y-6 border-t border-rule pt-12"
        >
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-flag-green">
              Articles 10, 118 and 201
            </p>
            <h2 className="mt-2 font-sans text-3xl font-black text-ink">
              Turn your views into a submission
            </h2>
            <p className="mt-2 font-serif text-sm leading-relaxed text-ink-muted">
              Add one or more clause or budget-item references, state your
              concerns, and propose replacement amendments or actions. The
              generator creates a PDF locally in your browser.
            </p>
          </div>
          <MemoGenerator />
        </section>
      </div>

      <footer className="border-t border-rule bg-paper">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-4 py-6 font-sans text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>Constitution of Kenya (2010). Non-commercial civic education project.</p>
          <Link
            href="/"
            className="font-bold text-flag-green underline underline-offset-4 hover:text-ink"
          >
            Back to the Constitution
          </Link>
        </div>
      </footer>
    </main>
  );
}
