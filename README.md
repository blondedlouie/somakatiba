# Soma Katiba KE

A civic education web platform dedicated to educating every Kenyan on the Constitution of Kenya (2010). The platform provides structured, accessible, and non-partisan constitutional literacy across all 47 counties.

For full architectural, design system, and component specifications, refer to [PROJECT_OVERVIEW.md](file:///c:/Users/Luis/Desktop/Projects/soma-katiba-ke/PROJECT_OVERVIEW.md).

---

## Core Mission and Non-Partisan Pledge

Important Disclaimer and Non-Partisan Pledge. The SOMA KATIBA KE initiative, its social media platforms, and organization are purely for educational purposes. We are not affiliated with any political person, political party, or movement whatsoever. We serve only knowledge.

---

## Features

1. Constitutional Repository:
   * Structured directory of all 18 chapters and 264 articles of the Constitution of Kenya (2010).
   * Interactive search and category filtering (Foundations, Rights and Freedoms, Governance, Accountability, State Organs).
   * Detailed breakdown of articles into individual clauses with plain language legal takeaways.

2. Historical Timeline:
   * Comprehensive vertical timeline tracing Kenya's constitutional journey from the colonial era and the 1963 Lancaster House compromise to the 2010 Promulgation at Uhuru Park.

3. Article 35 Citizen Action Toolkit:
   * Automated generator for formal Access to Information (ATI) requests under Article 35 of the Constitution and the Access to Information Act (No. 31 of 2016).
   * Supports all 47 County Governments of Kenya and key departments.

4. Civic Education Infographics Feed:
   * Social carousel viewer presenting visual civic breakdowns for grassroots learning.

---

## Technology Stack

* Framework: Next.js (App Router) with TypeScript
* Styling: Tailwind CSS (Kenyan flag color palette: Black `#111111`, Red `#be1111`, Green `#0a5c27`, White `#ffffff`)
* Motion: Framer Motion for scroll reveals and page transitions
* Icons: Lucide React

---

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
