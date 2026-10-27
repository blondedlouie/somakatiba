"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, BookOpen } from "lucide-react";
import { ConstitutionChapter } from "@/types";
import FlagRule from "@/components/ui/FlagRule";
import FlagEdge, { FlagCategory } from "@/components/ui/FlagEdge";

interface ChapterGridProps {
  chapters: ConstitutionChapter[];
}

const CATEGORIES = [
  "All",
  "Foundations",
  "Rights and Freedoms",
  "Governance",
  "Accountability",
  "State Organs",
] as const;

export default function ChapterGrid({ chapters }: ChapterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredChapters = useMemo(() => {
    return chapters.filter((ch) => {
      const matchesCategory =
        selectedCategory === "All" || ch.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        ch.title.toLowerCase().includes(q) ||
        (ch.swahiliTitle && ch.swahiliTitle.toLowerCase().includes(q)) ||
        ch.summary.toLowerCase().includes(q) ||
        `chapter ${ch.number}`.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [chapters, selectedCategory, searchQuery]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-rule" id="chapters">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Rule & Heading */}
        <div className="mb-10 sm:mb-12">
          <FlagRule className="mb-4" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-[clamp(28px,3.6vw,44px)] font-black text-ink tracking-[-0.025em] leading-[1.05] font-sans">
                Constitutional chapters
              </h2>
              <p className="font-serif text-ink-muted text-base sm:text-lg mt-2 max-w-2xl leading-normal">
                Structured summaries and article directories for all 18 chapters of the Constitution of Kenya (2010).
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" strokeWidth={2} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chapters or articles..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-control border-2 border-ink bg-white text-ink placeholder:text-ink-muted focus:outline-none focus:ring-0 focus:border-flag-green transition-colors font-sans"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 border-b border-rule">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans font-bold text-xs px-4 py-2 rounded-control transition-colors cursor-pointer ${
                  isActive
                    ? "bg-flag-green text-white border-2 border-flag-green"
                    : "bg-white text-ink border-2 border-ink hover:bg-ink hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Ruled Row Cards List */}
        {filteredChapters.length === 0 ? (
          <div className="text-left py-12 px-6 bg-paper rounded-card border border-rule">
            <BookOpen className="w-8 h-8 text-ink-muted mb-3" strokeWidth={2} />
            <h3 className="text-xl font-bold font-sans text-ink">No chapters match your query</h3>
            <p className="font-serif text-ink-muted text-sm mt-1">
              Try searching with a different constitutional topic or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 font-sans font-bold text-xs bg-flag-green hover:bg-flag-green-hover text-white rounded-control px-4 py-2 transition-colors cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredChapters.map((chapter) => (
              <Link
                key={chapter.number}
                href={`/chapters/${chapter.number}`}
                className="group relative block bg-white hover:bg-paper border border-rule hover:border-ink rounded-card transition-colors overflow-hidden"
              >
                {/* 6px Category Flag Edge on the left */}
                <FlagEdge
                  category={chapter.category as FlagCategory}
                  orientation="left"
                  thickness={6}
                  className="absolute left-0 top-0 bottom-0"
                />

                <div className="pl-6 sm:pl-8 pr-5 sm:pr-8 py-5 sm:py-6">
                  {/* Top line: Number, Title, Article Range */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-sans font-black text-2xl sm:text-[34px] text-flag-green leading-none flex-shrink-0">
                        {chapter.number}
                      </span>
                      <h3 className="font-sans font-bold text-lg sm:text-[20px] text-ink group-hover:underline group-hover:decoration-flag-red underline-offset-4 transition-colors leading-snug">
                        {chapter.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-baseline">
                      {chapter.swahiliTitle && (
                        <span className="font-serif italic text-xs sm:text-sm text-ink-muted hidden md:inline">
                          {chapter.swahiliTitle}
                        </span>
                      )}
                      <span className="font-sans text-xs font-bold text-ink-muted px-2 py-0.5 border border-rule rounded-card bg-paper flex-shrink-0">
                        {chapter.articleRange}
                      </span>
                    </div>
                  </div>

                  {/* Summary below */}
                  <p className="font-serif text-sm sm:text-[16px] text-ink-muted mt-2 sm:mt-2.5 max-w-3xl leading-relaxed">
                    {chapter.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
