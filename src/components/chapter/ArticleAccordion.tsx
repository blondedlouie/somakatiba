"use client";

import React, { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { ConstitutionArticle } from "@/types";

interface ArticleAccordionProps {
  articles: ConstitutionArticle[];
  chapterNumber: number;
}

export default function ArticleAccordion({ articles, chapterNumber }: ArticleAccordionProps) {
  const [openArticles, setOpenArticles] = useState<Record<number, boolean>>({
    [articles[0]?.articleNumber ?? 0]: true,
  });
  const [filterQuery, setFilterQuery] = useState("");

  const toggleArticle = (artNum: number) => {
    setOpenArticles((prev) => ({
      ...prev,
      [artNum]: !prev[artNum],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<number, boolean> = {};
    articles.forEach((a) => {
      allOpen[a.articleNumber] = true;
    });
    setOpenArticles(allOpen);
  };

  const collapseAll = () => {
    setOpenArticles({});
  };

  const filteredArticles = articles.filter((art) => {
    const q = filterQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      art.title.toLowerCase().includes(q) ||
      art.summary.toLowerCase().includes(q) ||
      `article ${art.articleNumber}`.includes(q) ||
      (art.clauses && art.clauses.some((c) => c.text.toLowerCase().includes(q))) ||
      (art.plainExplanation && art.plainExplanation.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6">
      {/* Search and Expand/Collapse Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-card bg-paper border border-rule">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" strokeWidth={2} />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder={`Search within Chapter ${chapterNumber} articles...`}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-control border-2 border-ink bg-white text-ink placeholder:text-ink-muted focus:outline-none focus:border-flag-green transition-colors font-sans"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="font-sans font-bold text-xs bg-white hover:bg-ink hover:text-white border-2 border-ink text-ink rounded-control px-4 py-2 transition-colors cursor-pointer"
          >
            Expand all
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="font-sans font-bold text-xs bg-white hover:bg-ink hover:text-white border-2 border-ink text-ink rounded-control px-4 py-2 transition-colors cursor-pointer"
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* Article Accordion Rows */}
      {filteredArticles.length === 0 ? (
        <div className="p-8 text-left bg-paper rounded-card border border-rule">
          <p className="font-serif text-sm text-ink-muted">
            No articles in this chapter match your search.
          </p>
          <button
            type="button"
            onClick={() => setFilterQuery("")}
            className="mt-3 font-sans text-xs font-bold text-flag-green underline decoration-flag-green hover:decoration-flag-red cursor-pointer"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="border-t border-rule divide-y divide-rule">
          {filteredArticles.map((article) => {
            const isOpen = !!openArticles[article.articleNumber];

            return (
              <div
                key={article.articleNumber}
                className={`bg-white transition-colors ${
                  isOpen ? "border-l-4 border-l-flag-green" : "border-l-4 border-l-transparent"
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  type="button"
                  onClick={() => toggleArticle(article.articleNumber)}
                  className="w-full text-left py-4 sm:py-5 px-4 sm:px-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-paper transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-sans font-black text-lg sm:text-xl text-flag-green flex-shrink-0">
                        Article {article.articleNumber}
                      </span>
                      <h3 className="font-sans font-bold text-base sm:text-lg text-ink leading-snug">
                        {article.title}
                      </h3>
                    </div>
                    <p className="font-serif text-sm text-ink-muted mt-1 leading-normal">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 border border-rule rounded-card flex items-center justify-center text-ink hover:border-ink">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" strokeWidth={2} />
                      ) : (
                        <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                      )}
                    </div>
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 space-y-5">
                    {/* Official Clauses */}
                    {article.clauses && article.clauses.length > 0 && (
                      <div className="space-y-3">
                        <p className="font-sans font-bold text-xs uppercase tracking-wider text-ink-muted">
                          Clauses
                        </p>
                        <div className="space-y-2.5">
                          {article.clauses.map((clause, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-3 sm:p-4 rounded-card bg-paper border border-rule flex items-start gap-3"
                            >
                              {/* 1px square green outline badge */}
                              <span className="font-sans font-bold text-xs text-flag-green border border-flag-green rounded-card px-2 py-0.5 flex-shrink-0 mt-0.5 bg-white">
                                {clause.clauseNumber}
                              </span>
                              <span className="font-serif text-[17px] text-ink leading-[1.6]">
                                {clause.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Plain Language Callout (paper background, 6px red left rule) */}
                    {article.plainExplanation && (
                      <div className="p-4 sm:p-5 rounded-card bg-paper border-l-[6px] border-l-flag-red border-t border-r border-b border-rule">
                        <p className="font-sans font-bold text-xs text-flag-red mb-1.5 uppercase tracking-wide">
                          In plain language
                        </p>
                        <p className="font-serif text-[17px] text-ink leading-[1.6]">
                          {article.plainExplanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
