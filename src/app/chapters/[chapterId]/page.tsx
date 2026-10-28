import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import constitutionData from "@/data/constitution.json";
import ArticleAccordion from "@/components/chapter/ArticleAccordion";
import FlagRibbon from "@/components/ui/FlagRibbon";
import FlagEdge, { FlagCategory } from "@/components/ui/FlagEdge";
import SocialLinks from "@/components/ui/SocialLinks";
import { ConstitutionChapter } from "@/types";

interface PageProps {
  params: Promise<{ chapterId: string }> | { chapterId: string };
}

function findChapter(identifier: string): ConstitutionChapter | undefined {
  const normalized = identifier.toLowerCase().trim().replace(/^chapter-/, "");
  return constitutionData.chapters.find((ch) => {
    return (
      ch.number.toString() === normalized ||
      ch.slug.toLowerCase() === normalized ||
      `chapter-${ch.number}` === normalized
    );
  }) as ConstitutionChapter | undefined;
}

export async function generateStaticParams() {
  const params: { chapterId: string }[] = [];
  constitutionData.chapters.forEach((ch) => {
    params.push({ chapterId: ch.number.toString() });
    params.push({ chapterId: ch.slug });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const chapter = findChapter(resolvedParams.chapterId);

  if (!chapter) {
    return {
      title: "Chapter Not Found - Soma Katiba KE",
    };
  }

  return {
    title: `Chapter ${chapter.number}: ${chapter.title} - Soma Katiba KE`,
    description: chapter.summary,
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const chapter = findChapter(resolvedParams.chapterId);

  if (!chapter) {
    notFound();
  }

  const allChapters = constitutionData.chapters as ConstitutionChapter[];
  const currentIndex = allChapters.findIndex((c) => c.number === chapter.number);
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col font-serif">
      {/* 20px Top Flag Ribbon */}
      <FlagRibbon height={20} />

      {/* Header bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-rule">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          <Link
            href="/#chapters"
            className="font-sans font-bold text-sm text-flag-green underline decoration-flag-green hover:decoration-flag-red underline-offset-4 transition-colors"
          >
            Back to Legal Repository
          </Link>

          <span className="font-sans text-xs font-bold text-ink-muted">
            Chapter {chapter.number} of 18
          </span>

          <SocialLinks className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-white [&_svg]:h-4 [&_svg]:w-4" />
        </div>
      </header>

      {/* Main Chapter Content */}
      <main className="flex-1 max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 w-full space-y-12">
        {/* Chapter Header Block */}
        <section className="bg-white border border-rule rounded-card overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
              <span className="font-sans font-black text-6xl sm:text-[72px] text-flag-green leading-none">
                {chapter.number}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold text-ink px-2.5 py-1 border border-ink rounded-card">
                  {chapter.category}
                </span>
                <span className="font-sans text-xs font-bold text-ink px-2.5 py-1 border border-ink rounded-card">
                  {chapter.articleRange}
                </span>
              </div>
            </div>

            <h1 className="text-[clamp(32px,4.4vw,56px)] font-black text-ink tracking-[-0.03em] leading-[1.02] font-sans">
              {chapter.title}
            </h1>

            {chapter.swahiliTitle && (
              <p className="font-serif italic text-base sm:text-lg text-ink-muted mt-2">
                Kiswahili: {chapter.swahiliTitle}
              </p>
            )}

            <p className="font-serif text-[17px] sm:text-[19px] text-ink mt-4 leading-relaxed max-w-3xl">
              {chapter.summary}
            </p>
          </div>

          {/* Full-width Flag Edge beneath header block */}
          <FlagEdge category={chapter.category as FlagCategory} orientation="top" thickness={6} />
        </section>

        {/* Key Takeaways Section */}
        {chapter.keyProvisions && chapter.keyProvisions.length > 0 && (
          <section className="p-6 sm:p-8 bg-paper border border-rule border-l-[6px] border-l-flag-green rounded-card">
            <h2 className="font-sans font-bold text-base sm:text-lg text-ink mb-3">
              Key constitutional takeaways
            </h2>
            <ul className="space-y-2.5">
              {chapter.keyProvisions.map((provision, idx) => (
                <li key={idx} className="font-serif text-[17px] text-ink leading-relaxed flex items-start gap-2.5">
                  <span className="font-sans font-black text-flag-green text-sm flex-shrink-0 mt-0.5">•</span>
                  <span>{provision}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Articles Accordion */}
        <section className="space-y-6">
          <div>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-black text-ink tracking-[-0.025em] leading-[1.05] font-sans">
              Articles in Chapter {chapter.number}
            </h2>
            <p className="font-serif text-ink-muted text-base mt-1">
              Select an article to read its legal clauses and plain language meaning.
            </p>
          </div>

          <ArticleAccordion articles={chapter.articles} chapterNumber={chapter.number} />
        </section>

        {/* Chapter Navigation Pagination */}
        <nav
          className="pt-10 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-4"
          aria-label="Chapter Navigation"
        >
          {prevChapter ? (
            <Link
              href={`/chapters/${prevChapter.number}`}
              className="p-5 rounded-card border border-rule hover:border-ink bg-white transition-colors group flex flex-col"
            >
              <span className="font-sans text-xs font-bold text-ink-muted mb-1">
                Previous chapter
              </span>
              <span className="font-sans font-bold text-base text-ink group-hover:underline group-hover:decoration-flag-red underline-offset-4">
                <span className="text-flag-green font-black mr-2">{prevChapter.number}.</span>
                {prevChapter.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextChapter && (
            <Link
              href={`/chapters/${nextChapter.number}`}
              className="p-5 rounded-card border border-rule hover:border-ink bg-white transition-colors group flex flex-col text-left sm:text-right sm:col-start-2"
            >
              <span className="font-sans text-xs font-bold text-ink-muted mb-1">
                Next chapter
              </span>
              <span className="font-sans font-bold text-base text-ink group-hover:underline group-hover:decoration-flag-red underline-offset-4">
                <span className="text-flag-green font-black mr-2">{nextChapter.number}.</span>
                {nextChapter.title}
              </span>
            </Link>
          )}
        </nav>
      </main>

      {/* Light Footer */}
      <footer className="bg-white border-t border-rule mt-20">
        <FlagRibbon height={12} />
        <div className="bg-paper py-12 border-b border-rule">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="w-16 h-1 bg-flag-red mb-3" />
              <h3 className="font-sans font-bold text-lg text-ink mb-2">
                Non-partisan educational mission
              </h3>
              <p className="font-serif text-[18px] text-ink leading-relaxed">
                Important Disclaimer and Non-Partisan Pledge. The SOMA KATIBA KE initiative, its social media platforms, and organization are purely for educational purposes. We are not affiliated with any political person, political party, or movement whatsoever. We serve only knowledge.
              </p>
              <p className="font-sans text-xs font-bold text-ink-muted mt-3">
                Project by ctrlHUB.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-ink-muted gap-4">
          <p>Soma Katiba KE. Promoting Constitutional Literacy across all 47 Counties of Kenya.</p>
          <Link href="/" className="font-bold text-flag-green underline decoration-flag-green hover:decoration-flag-red underline-offset-4">
            Return to landing page
          </Link>
        </div>
      </footer>
    </div>
  );
}
