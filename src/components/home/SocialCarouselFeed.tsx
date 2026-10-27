"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FlagRule from "@/components/ui/FlagRule";
import FlagEdge from "@/components/ui/FlagEdge";

export const SAMPLE_POSTS = [
  {
    id: "post-1",
    tag: "Constitutional History",
    title: "The Story of Our Constitution",
    slides: [
      {
        step: "1 of 3",
        headline: "The story of our Constitution",
        badge: "Historical timeline",
        content: [
          "Prior to 2010, the 1963 independence constitution suffered excessive amendments.",
          "Centralized presidential power governed with weak checks and balances.",
          "Widespread human rights violations prompted pro-democracy movements in the 1990s.",
        ],
        callout: "Defining question: How do we build a Kenya where power belongs to the people?",
      },
      {
        step: "2 of 3",
        headline: "The long march to reform",
        badge: "People power",
        content: [
          "Civil society, religious leaders, and courageous citizens demanded a fresh start.",
          "Decades of commissions, public hearings, and constitutional conferences produced the Bomas draft.",
          "A shared covenant that no single leader could ever claim absolute rule again.",
        ],
        callout: "The 2010 Constitution was drafted by Kenyans, for Kenyans.",
      },
      {
        step: "3 of 3",
        headline: "27 August 2010: A new chapter",
        badge: "Promulgation",
        content: [
          "President Mwai Kibaki formally promulgated the Constitution at Uhuru Park.",
          "Devolution established 47 distinct County Governments.",
          "A comprehensive Bill of Rights enforcing clear limits on state authority.",
        ],
        callout: "Sovereign power belongs to the people of Kenya. Understanding it is the first step.",
      },
    ],
  },
  {
    id: "post-2",
    tag: "Ethics and Pledge",
    title: "Our Mission and Neutrality Pledge",
    slides: [
      {
        step: "1 of 3",
        headline: "Soma Katiba KE",
        badge: "Mission",
        content: [
          "Reading, understanding, and explaining the Constitution.",
          "Demystifying legal text into plain language for every citizen.",
          "Empowering grassroots communities across all 47 counties.",
        ],
        callout: "Knowledge is the ultimate safeguard of freedom.",
      },
      {
        step: "2 of 3",
        headline: "Non-partisan pledge",
        badge: "Disclaimer",
        content: [
          "We are strictly educational and non-profit.",
          "We are not affiliated with any political party, person, or partisan movement.",
          "We do not endorse candidates or take partisan stances.",
        ],
        callout: "We serve only knowledge and the Constitution of Kenya.",
      },
      {
        step: "3 of 3",
        headline: "Committed to neutrality",
        badge: "Core ethics",
        content: [
          "We do not endorse. We simply educate.",
          "Our goal is constitutional literacy for all Kenyans.",
          "Follow for regular, verified, unbiased legal insights.",
        ],
        callout: "The primary mandate of every citizen is to defend the Constitution.",
      },
    ],
  },
];

export default function SocialCarouselFeed() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<{ [postId: string]: number }>({
    "post-1": 0,
    "post-2": 0,
  });

  const nextSlide = (postId: string, max: number) => {
    setActiveSlideIndex((prev) => ({
      ...prev,
      [postId]: Math.min((prev[postId] || 0) + 1, max - 1),
    }));
  };

  const prevSlide = (postId: string) => {
    setActiveSlideIndex((prev) => ({
      ...prev,
      [postId]: Math.max((prev[postId] || 0) - 1, 0),
    }));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-paper border-t border-rule" id="graphics">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading with Flag Rule */}
        <div className="mb-12 sm:mb-16">
          <FlagRule className="mb-4" />
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-black text-ink tracking-[-0.025em] leading-[1.05] font-sans">
            Visual civic education
          </h2>
          <p className="font-serif text-ink-muted text-base sm:text-lg mt-2 max-w-2xl leading-normal">
            Bite-sized constitutional breakdowns designed for civic learning and social sharing.
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SAMPLE_POSTS.map((post) => {
            const currentSlide = activeSlideIndex[post.id] || 0;
            const slideData = post.slides[currentSlide];
            const isAlternate = currentSlide % 2 === 1;

            return (
              <div
                key={post.id}
                className="bg-white border border-rule rounded-card overflow-hidden flex flex-col"
              >
                {/* 6px Flag Edge on top (even 34 / 33 / 33) */}
                <FlagEdge category="default" orientation="top" thickness={6} />

                {/* Account Header Strip */}
                <div className="p-4 border-b border-rule flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-card border-2 border-ink bg-paper flex items-center justify-center font-sans font-black text-xs text-ink">
                      SK
                    </div>
                    <div>
                      <span className="font-sans font-bold text-sm text-ink block leading-tight">
                        somakatibake
                      </span>
                      <span className="font-serif text-xs text-ink-muted">
                        Nairobi, Kenya
                      </span>
                    </div>
                  </div>

                  <span className="font-sans text-xs font-bold text-ink-muted border border-rule px-2 py-0.5 rounded-card bg-paper">
                    {post.tag}
                  </span>
                </div>

                {/* 4:5 Aspect Ratio Slide Card */}
                <div
                  className={`p-6 sm:p-8 flex-1 flex flex-col justify-between transition-colors min-h-[380px] sm:min-h-[440px] ${
                    isAlternate ? "bg-paper" : "bg-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-sans text-xs font-bold text-flag-green border border-flag-green rounded-card px-2 py-0.5 bg-white">
                        {slideData.badge}
                      </span>
                      <span className="font-sans text-xs font-bold text-ink-muted">
                        {slideData.step}
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-xl sm:text-2xl text-ink leading-tight mb-5">
                      {slideData.headline}
                    </h3>

                    <ul className="space-y-3">
                      {slideData.content.map((point, idx) => (
                        <li key={idx} className="font-serif text-[17px] text-ink leading-relaxed flex items-start gap-3">
                          <span className="font-sans font-black text-flag-green text-sm flex-shrink-0 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Callout box */}
                  <div className="mt-6 pt-4 border-t border-rule">
                    <p className="font-serif italic text-sm text-ink-muted leading-normal">
                      &ldquo;{slideData.callout}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Segmented Progress Bar & Square Controls */}
                <div className="p-4 border-t border-rule bg-white flex items-center justify-between gap-4">
                  {/* Segmented Bar (Section 9.4) */}
                  <div className="flex-1 flex items-center gap-1.5 h-3">
                    {post.slides.map((_, sIdx) => {
                      const isCompletedOrActive = sIdx <= currentSlide;
                      const isCurrent = sIdx === currentSlide;

                      return (
                        <div
                          key={sIdx}
                          style={{
                            height: isCurrent ? "8px" : "4px",
                          }}
                          className={`flex-1 rounded-card transition-all ${
                            isCompletedOrActive ? "bg-flag-green" : "bg-rule"
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* 40px Square Control Buttons with 2px ink border */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => prevSlide(post.id)}
                      disabled={currentSlide === 0}
                      aria-label="Previous slide"
                      className="w-10 h-10 border-2 border-ink rounded-control flex items-center justify-center text-ink hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-ink transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                    </button>
                    <button
                      type="button"
                      onClick={() => nextSlide(post.id, post.slides.length)}
                      disabled={currentSlide === post.slides.length - 1}
                      aria-label="Next slide"
                      className="w-10 h-10 border-2 border-ink rounded-control flex items-center justify-center text-ink hover:bg-ink hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-ink transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </div>
                </div>

                {/* Footer strip */}
                <div className="px-4 py-2 border-t border-rule bg-paper text-center">
                  <span className="font-serif text-xs text-ink-muted">
                    Purely educational
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
