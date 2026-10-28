import Link from "next/link";
import {
  ArrowRight,
  FileSearch,
  Landmark,
  MessageSquareText,
} from "lucide-react";

const tools = [
  {
    title: "Formal Access to Information Request",
    basis: "Article 35 | Access to Information Act (No. 31 of 2016)",
    description:
      "Draft a request for public records from a government department or public body.",
    icon: FileSearch,
  },
  {
    title: "County Budget Cycle Tracker",
    basis: "Article 201 | Public Finance Management Act, 2012",
    description:
      "Review the five main county budget stages, statutory deadlines, and ways to take part.",
    icon: Landmark,
  },
  {
    title: "Public Participation Memo Generator",
    basis: "Articles 10, 118 and 201",
    description:
      "Prepare a printable memorandum with clause references, objections, and proposed changes.",
    icon: MessageSquareText,
  },
];

export default function ToolkitPreview() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {tools.map(({ title, basis, description, icon: Icon }) => (
        <article
          key={title}
          className="flex h-full flex-col rounded-card border border-rule bg-white p-5 sm:p-6"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-control bg-paper text-flag-green">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="mt-5 font-sans text-[11px] font-bold uppercase tracking-wide text-flag-red">
            {basis}
          </p>
          <h3 className="mt-2 font-sans text-lg font-bold leading-snug text-ink">
            {title}
          </h3>
          <p className="mt-2 flex-1 font-serif text-sm leading-relaxed text-ink-muted">
            {description}
          </p>
          <Link
            href="/toolkit"
            className="mt-5 inline-flex items-center gap-2 self-start rounded-control bg-flag-green px-4 py-2.5 font-sans text-xs font-bold text-white transition-colors hover:bg-flag-green-hover"
          >
            Launch Tool
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  );
}
