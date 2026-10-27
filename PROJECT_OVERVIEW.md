# Soma Katiba KE: Project Overview and Codebase Documentation

## 1. Executive Summary

Soma Katiba KE is a civic education web platform dedicated to educating the Kenyan public on the Constitution of Kenya (2010). The platform demystifies complex constitutional law into structured, accessible, and high-readability digital formats. It provides citizens across all 47 counties with the legal knowledge required to understand their rights, participate in governance, and hold public officials accountable.

The project is built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. It operates under a strict non-partisan educational mandate.

---

## 2. Core Mission and Non-Partisan Pledge

### The Non-Partisan Pledge
"Important Disclaimer and Non-Partisan Pledge. The SOMA KATIBA KE initiative, its social media platforms, and organization are purely for educational purposes. We are not affiliated with any political person, political party, or movement whatsoever. We serve only knowledge."

### Core Operating Principles
* Civic Empowerment: Focus on Article 1 ("All sovereign power belongs to the people of Kenya").
* Objective Legal Grounding: Rely strictly on the text of the Constitution of Kenya (2010) and statutory law such as the Access to Information Act (No. 31 of 2016).
* Political Neutrality: Strictly educational and non-profit. The initiative does not endorse candidates, political parties, or partisan initiatives.

---

## 3. Strict Development, Copywriting, and Style Constraints

Any human developer or AI agent modifying or extending this codebase must comply with the following mandatory rules:

1. Standard Punctuation Only:
   * Do not use em dashes or en dashes anywhere in code, markdown, comments, UI text, or data files. Use standard hyphens, colons, commas, or parentheses.
   * Do not use emojis anywhere in the codebase, UI text, metadata, alt attributes, or documentation.
2. Direct and Concrete Language:
   * Completely exclude artificial writing cliches (such as "delve", "tapestry", "seamless", "elevate", "realm", "cutting-edge").
   * Keep explanations factual, direct, and legally grounded.
3. Kenyan Flag Visual Identity:
   * Black (#111111): Used for solid dark containers, footers, heavy primary text, and dark mode foundations.
   * Red (#be1111): Used for alert markers, milestone badges, key historical indicators, and hover accents.
   * Green (#0a5c27): Used for primary Call-to-Action buttons, active states, and positive badges.
   * White (#ffffff) and Off-White (#f8f9fa): Used for primary surfaces and reading containers to maximize contrast and text legibility.
4. Typography:
   * Heavy sans-serif headers (Inter Extrabold, font-black) with structured hierarchy.

---

## 4. System Architecture and File Structure

The project uses Next.js 16 with the App Router architecture and React 18/19 compatibility.

```
soma-katiba-ke/
├── data/
│   └── constitution.json             # Root copy of constitutional dataset
├── public/
│   └── assets/
│       └── logo/
│           └── logo-kt.jpg           # Official brand logo
├── src/
│   ├── app/
│   │   ├── chapters/
│   │   │   └── [chapterId]/
│   │   │       └── page.tsx          # Dynamic SSG route for each constitutional chapter
│   │   ├── globals.css               # Tailwind CSS directives and color variables
│   │   ├── layout.tsx                # Root layout with font configuration and SEO metadata
│   │   └── page.tsx                  # Main landing page assembling all civic modules
│   ├── components/
│   │   ├── chapter/
│   │   │   └── ArticleAccordion.tsx  # Interactive accordion for constitutional articles and clauses
│   │   ├── home/
│   │   │   ├── ChapterGrid.tsx       # Master 18-chapter grid with category filters and search
│   │   │   ├── HistoricalTimeline.tsx# 8-milestone vertical constitutional history timeline
│   │   │   └── SocialCarouselFeed.tsx# Civic education carousel card viewer
│   │   └── toolkit/
│   │       └── AtiLetterGenerator.tsx# Article 35 Access to Information formal letter generator
│   ├── data/
│   │   ├── chapters.ts               # Chapter data export adapter
│   │   └── constitution.json         # Primary JSON repository containing all 18 chapters
│   └── types/
│       ├── constitution.ts           # TypeScript interfaces for chapters, articles, and clauses
│       └── index.ts                  # Centralized type exports
├── package.json                      # Dependency declarations and build scripts
├── tailwind.config.ts                # Tailwind color palette and design system configuration
└── tsconfig.json                     # TypeScript compiler configuration
```

---

## 5. Data Model and Schema

The complete data model is defined in `src/types/constitution.ts` and populated in `src/data/constitution.json`.

### Data Interfaces
* `ConstitutionClause`: Represents an individual numbered clause (for example, `(1)`, `(2)`) with its exact text.
* `ConstitutionArticle`: An article containing its number, legal title, concise summary, array of clauses, and a plain language explanation of its practical civic meaning.
* `ConstitutionChapter`: Contains the chapter number, URL slug, full legal title, Swahili title, article range, category, key provisions list, and full array of articles.
* `ConstitutionDataset`: Top-level dataset storing preamble, statistics (18 chapters, 264 articles), promulgation date, and all chapter arrays.

### Chapter Categorization
Chapters are classified into 5 core governance domains:
1. Foundations (Chapters 1, 2, 3, 16)
2. Rights and Freedoms (Chapter 4)
3. Governance (Chapters 5, 7, 11, 17, 18)
4. Accountability (Chapters 6, 12, 13, 15)
5. State Organs (Chapters 8, 9, 10, 14)

---

## 6. Detailed Feature Breakdown

### 6.1. The Landing Page (`src/app/page.tsx`)
* Top Flag Ribbon: A Kenyan flag tri-band border (black, white, red, white, green) providing an immediate national aesthetic.
* Sticky Navigation Bar: Sticky header with rapid navigation anchors (`#chapters`, `#timeline`, `#graphics`, `#toolkit`, `#pledge`) and direct link to `@somakatibake` on Instagram.
* Hero Section:
  * Primary Headline: "Reading. Understanding. Explaining The Constitution."
  * Subtext: "Sovereign power belongs to the people of Kenya."
  * Quick metric counters: 18 Chapters, 264 Articles, 47 Counties.
  * Preamble Spotlight Card: Highlights the constitutional covenant promulgated at Uhuru Park on August 27, 2010.

### 6.2. Historical Timeline Component (`src/components/home/HistoricalTimeline.tsx`)
A vertical historical timeline documenting the constitutional trajectory of Kenya through 8 milestones:
1. 1920s to 1963: Colonial Legacy and Independence Compromise (Lancaster House negotiations and regionalism).
2. 1964 to 1989: The Rise of the Imperial Presidency (Abolition of the Senate, 1982 Section 2A one-party state).
3. 1990 to 1997: The Second Liberation (Saba Saba movement, repeal of Section 2A, multi-party restoration).
4. 1998 to 2004: Civil Society Push and the Bomas Draft (Bomas of Kenya assembly, devolution focus).
5. 2005: Political Betrayal and the First Referendum (Rejection of the Wako Draft).
6. 2007 to 2010: The Breaking Point and National Survival (Post-election violence, National Accord, Committee of Experts).
7. The 2010 Referendum Campaigns (Yes Camp 68.6% vs No Camp 31.4% analysis).
8. August 27, 2010: Promulgation (Formal enactment at Uhuru Park by President Mwai Kibaki).

### 6.3. Interactive Chapter Grid / Legal Repository (`src/components/home/ChapterGrid.tsx`)
* Displays interactive cards for all 18 chapters of the Constitution.
* Features:
  * Search bar indexing titles, numbers, Swahili names, summaries, and provisions.
  * Category filter pill buttons (All, Foundations, Rights and Freedoms, Governance, Accountability, State Organs).
  * Green badge indicating chapter number.
  * Bulleted snippet list of key provisions per chapter.
  * Next.js Link routing directly to dynamic chapter pages (`/chapters/[chapterId]`).

### 6.4. Dynamic Chapter Pages (`src/app/chapters/[chapterId]/page.tsx`)
* Supports resolution via numeric ID (for example, `/chapters/1`), slug (for example, `/chapters/sovereignty-of-the-people`), or prefixed format (`/chapters/chapter-1`).
* Static Site Generation (SSG): `generateStaticParams` pre-renders all 18 chapters at build time for instant page loading.
* Prominent "Back to Legal Repository" navigation element.
* Comprehensive chapter header showing chapter overview, Swahili translation, and key constitutional takeaways.
* Sequential chapter navigation controls (Previous Chapter and Next Chapter) at the bottom.

### 6.5. Interactive Article Accordion (`src/components/chapter/ArticleAccordion.tsx`)
* Collapsible drawer system for reviewing articles within any chapter.
* Search filter to search articles by keyword within the active chapter.
* Expand All and Collapse All control toggles.
* Individual clauses formatted with green badges (for example, `(1)`, `(2)`).
* Plain language legal meaning callout container highlighting citizen rights and duties.

### 6.6. Citizen Action Toolkit: Article 35 ATI Generator (`src/components/toolkit/AtiLetterGenerator.tsx`)
* Implements a generator for formal public information requests grounded in Article 35 of the Constitution and Section 4, 8, and 9 of the Access to Information Act (No. 31 of 2016).
* Includes routing for all 47 counties of Kenya and key departments.
* Includes one-click letter text copying and text file downloading.

### 6.7. Visual Infographics Carousel Feed (`src/components/home/SocialCarouselFeed.tsx`)
* Interactive slide deck simulator illustrating civic education carousels for social platforms.
* Features step-by-step educational slides on constitutional history and civic duties.

### 6.8. Footer and Legal Attribution
* Solid black background (#111111) with clear navigation and key article quick references.
* Verbatim inclusion of the non-partisan disclaimer and project attribution.

---

## 7. Build and Execution Instructions

### Prerequisites
* Node.js version 18.17 or higher (Node 20 recommended).
* npm version 9 or higher.

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
The build process compiles TypeScript, optimizes Tailwind CSS, and executes Static Site Generation (SSG) for 39 static routes.

### Run Production Server
```bash
npm run start
```
