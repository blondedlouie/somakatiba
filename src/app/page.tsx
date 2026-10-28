import React from "react";
import Image from "next/image";
import Link from "next/link";
import constitutionData from "@/data/constitution.json";
import FlagRibbon from "@/components/ui/FlagRibbon";
import FlagRule from "@/components/ui/FlagRule";
import HistoricalTimeline from "@/components/home/HistoricalTimeline";
import ChapterGrid from "@/components/home/ChapterGrid";
import SocialCarouselFeed from "@/components/home/SocialCarouselFeed";
import ToolkitPreview from "@/components/ToolkitPreview";
import SocialLinks from "@/components/ui/SocialLinks";
import { ConstitutionChapter } from "@/types";

export default function HomePage() {
  const chapters = constitutionData.chapters as ConstitutionChapter[];

  return (
    <main className="min-h-screen bg-white text-ink selection:bg-flag-green selection:text-white font-serif">
      {/* 1. The Flag Ribbon at page top */}
      <FlagRibbon height={20} />

      {/* 2. Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-rule shadow-sm">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/logo/logo-kt.jpg"
                alt="Soma Katiba KE Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-baseline leading-none">
                <span className="text-xl font-black font-sans tracking-tight text-ink">
                  SOMA KATIBA&nbsp;
                </span>
                <span className="text-xl font-black font-sans tracking-tight text-flag-green">
                  KE
                </span>
              </div>
              <span className="text-[10px] font-sans font-bold tracking-widest text-flag-red block uppercase mt-1 leading-none">
                READING. UNDERSTANDING. EXPLAINING.
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-7 text-xs font-sans font-bold tracking-wider text-ink uppercase">
            <Link
              href="#chapters"
              className="hover:text-flag-green transition-colors"
            >
              Constitution
            </Link>
            <Link
              href="#timeline"
              className="hover:text-flag-green transition-colors"
            >
              Historical Timeline
            </Link>
            <Link
              href="#graphics"
              className="hover:text-flag-green transition-colors"
            >
              Infographics
            </Link>
            <Link
              href="/toolkit"
              className="hover:text-flag-green transition-colors"
            >
              Citizen Toolkit
            </Link>
            <Link
              href="#pledge"
              className="hover:text-flag-green transition-colors"
            >
              Non-Partisan Pledge
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <SocialLinks className="hidden h-10 w-10 items-center justify-center rounded-full bg-flag-green text-white shadow-sm transition-colors hover:bg-flag-green-hover sm:inline-flex [&_svg]:h-5 [&_svg]:w-5" />
          </div>
        </div>
      </header>

      {/* 3. Hero Section (Previous format + Constitution picture fitted with Preamble) */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black text-ink tracking-tight leading-[1.02] font-sans">
                  Reading.
                  <br />
                  Understanding.
                  <br />
                  <span className="text-flag-green">Explaining The</span>
                  <br />
                  <span className="text-flag-green">Constitution.</span>
                </h1>

                {/* Bold Quote */}
                <p className="text-xl sm:text-2xl font-bold font-sans text-ink leading-snug">
                  &ldquo;Sovereign power belongs to the people of Kenya.&rdquo;
                </p>

                {/* Subtext Paragraph */}
                <p className="text-base sm:text-lg text-ink-muted font-sans leading-relaxed max-w-xl">
                  The Constitution of Kenya is the supreme covenant of our
                  Republic. We translate legal provisions into systematic,
                  unbiased civic education to ensure every citizen knows their
                  rights and holds authority accountable.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="#chapters"
                    className="inline-flex items-center gap-2.5 bg-flag-green text-white font-sans font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-flag-green-hover transition-all shadow-sm uppercase tracking-wider"
                  >
                    <span>Explore The 18 Chapters</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="#timeline"
                    className="inline-flex items-center gap-2 bg-white border border-gray-300 text-ink font-sans font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-all shadow-sm uppercase tracking-wider"
                  >
                    <svg
                      className="w-4 h-4 text-ink-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Historical Timeline</span>
                  </Link>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 max-w-md border-t border-gray-100">
                <div>
                  <span className="block font-sans font-black text-3xl sm:text-4xl text-ink leading-none">
                    18
                  </span>
                  <span className="block font-sans font-bold text-xs uppercase tracking-wider text-ink-muted mt-2">
                    Chapters
                  </span>
                </div>
                <div>
                  <span className="block font-sans font-black text-3xl sm:text-4xl text-ink leading-none">
                    264
                  </span>
                  <span className="block font-sans font-bold text-xs uppercase tracking-wider text-ink-muted mt-2">
                    Articles
                  </span>
                </div>
                <div>
                  <span className="block font-sans font-black text-3xl sm:text-4xl text-flag-green leading-none">
                    47
                  </span>
                  <span className="block font-sans font-bold text-xs uppercase tracking-wider text-ink-muted mt-2">
                    Counties
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Constitution Promulgation Picture + Preamble Card */}
            <div className="lg:col-span-5 relative w-full pt-4">
              {/* Floating Red Pill Badge */}
              <div className="absolute -top-1 right-6 sm:right-8 z-30">
                <div className="bg-flag-red text-white text-[11px] font-sans font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md border-2 border-white">
                  The Supreme Covenant
                </div>
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl">
                {/* Promulgation Photograph */}
                <div className="relative w-full h-56 sm:h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src="/assets/images/promulgation.jpg"
                    alt="President Mwai Kibaki holding up the promulgated 2010 Constitution of Kenya at Uhuru Park, Nairobi"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[50%_18%] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Photo Caption Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white drop-shadow-md">
                    <span className="font-sans font-bold text-xs tracking-wide">
                      Promulgation at Uhuru Park
                    </span>
                    <span className="font-sans font-medium text-[11px] bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                      27 August 2010
                    </span>
                  </div>
                </div>

                {/* Micro Kenyan Flag Ribbon */}
                <div className="h-1.5 w-full flex" aria-hidden="true">
                  <div className="flex-1 bg-ink" />
                  <div className="w-1 bg-white" />
                  <div className="flex-1 bg-flag-red" />
                  <div className="w-1 bg-white" />
                  <div className="flex-1 bg-flag-green" />
                </div>

                {/* Preamble Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-white">
                  <div className="flex items-center gap-2 text-flag-green">
                    <svg
                      className="w-4 h-4 text-flag-green flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l9-4 9 4m-9-4v20m0 0l-4-4m4 4l4-4M5 19l4-7M19 19l-4-7"
                      />
                    </svg>
                    <span className="font-sans font-black text-xs uppercase tracking-wider">
                      Preamble of Kenya
                    </span>
                  </div>

                  <blockquote className="border-l-4 border-flag-green pl-4 font-serif italic text-ink text-sm sm:text-[15px] leading-relaxed">
                    &ldquo;We, the people of Kenya, ACKNOWLEDGING the supremacy
                    of the Almighty God of all creation; HONOURING those who
                    heroically struggled to bring freedom and justice to our
                    land... EXERCISING our sovereign and inalienable right to
                    determine the form of governance of our country... ADOPT,
                    ENACT and give this Constitution to ourselves and to our
                    future generations.&rdquo;
                  </blockquote>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-sans font-bold tracking-wider">
                    <span className="text-ink-muted uppercase">
                      Uhuru Park, Nairobi
                    </span>
                    <span className="text-flag-green uppercase">
                      Promulgated August 27, 2010
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full-width Flag Ribbon separating Hero and Timeline (as shown in screenshot) */}
      <FlagRibbon height={12} className="my-0" />

      {/* 5. Historical Timeline */}
      <HistoricalTimeline />

      {/* 6. Chapter Grid (Legal Repository) */}
      <ChapterGrid chapters={chapters} />

      {/* 7. Infographics Carousel */}
      <SocialCarouselFeed />

      {/* 8. Citizen Action Toolkit (Article 35 Generator) */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-paper border-t border-rule"
        id="toolkit"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-12">
            <FlagRule className="mb-4" />
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-black text-ink tracking-[-0.025em] leading-[1.05] font-sans">
              Citizen Action Toolkit
            </h2>
            <p className="font-serif text-ink-muted text-base sm:text-lg mt-2 max-w-2xl leading-normal">
              Access practical tools for information requests, county budgets,
              and public participation submissions.
            </p>
          </div>

          <ToolkitPreview />
        </div>
      </section>

      {/* 9. Non-Partisan Pledge Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-white border-t border-rule"
        id="pledge"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <FlagRule className="mb-4" />
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-black text-ink tracking-[-0.025em] leading-[1.05] font-sans mb-6">
              Non-Partisan Pledge
            </h2>
            <div className="p-6 sm:p-8 bg-paper border border-rule border-l-[4px] border-l-flag-red rounded-card">
              <p className="font-serif text-[18px] sm:text-[20px] text-ink leading-relaxed">
                Important Disclaimer and Non-Partisan Pledge. The SOMA KATIBA KE
                initiative, its social media platforms, and organization are
                purely for educational purposes. We are not affiliated with any
                political person, political party, or movement whatsoever. We
                serve only knowledge.
              </p>
              <p className="font-sans text-xs font-bold text-ink-muted mt-4">
                Project by ctrlHUB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-white border-t border-rule">
        <FlagRibbon height={14} />

        <div className="bg-paper py-14 sm:py-16 border-b border-rule">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Col 1 */}
              <div className="space-y-3">
                <span className="font-sans font-black text-xl text-ink block">
                  Soma Katiba KE
                </span>
                <p className="font-serif text-sm text-ink-muted leading-relaxed">
                  Reading, understanding, and explaining the Constitution of
                  Kenya (2010). A non-partisan civic initiative dedicated to
                  grassroots legal literacy.
                </p>
                <p className="font-sans text-xs font-bold text-ink-muted">
                  Project by ctrlHUB.
                </p>
              </div>

              {/* Col 2 */}
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-ink mb-3">
                  Quick Navigation
                </h4>
                <ul className="space-y-2 text-sm font-sans font-medium text-ink-muted">
                  <li>
                    <Link
                      href="#chapters"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      The 18 Chapters
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#timeline"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Historical Timeline
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#graphics"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Visual Infographics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#toolkit"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Article 35 Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pledge"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Non-Partisan Pledge
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-ink mb-3">
                  Key Articles
                </h4>
                <ul className="space-y-2 text-sm font-sans font-medium text-ink-muted">
                  <li>
                    <Link
                      href="/chapters/1"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Article 1: Sovereignty of the People
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chapters/4"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Article 35: Access to Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chapters/4"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Article 37: Assembly and Demonstration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chapters/6"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Article 73: Leadership and Integrity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chapters/11"
                      className="hover:text-ink hover:underline hover:decoration-flag-red transition-colors"
                    >
                      Article 174: Objects of Devolution
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 4 */}
              <div className="space-y-3">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-ink mb-3">
                  Connect
                </h4>
                <p className="font-serif text-sm text-ink-muted leading-relaxed">
                  Follow us on Instagram and X for regular constitutional
                  updates and explanations.
                </p>
                <SocialLinks className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-white [&_svg]:h-5 [&_svg]:w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-ink-muted gap-4">
          <p>
            Constitution of Kenya (2010). Non-commercial civic education
            project.
          </p>
          <p className="text-center sm:text-right">
            Project by ctrlHUB. Promoting Constitutional Literacy across all 47
            Counties of Kenya.
          </p>
        </div>
      </footer>
    </main>
  );
}
