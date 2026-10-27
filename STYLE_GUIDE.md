# Soma Katiba KE: Visual Style Guide (Light Redesign)

This document defines the new visual language for Soma Katiba KE. It changes appearance only. Every feature in `PROJECT_OVERVIEW.md` stays: the landing page, the historical timeline, the chapter grid, the dynamic chapter pages with the article accordion, the Article 35 ATI generator, and the social carousel feed. Data, routing, and content files are untouched.

The existing copywriting rules still apply to every file touched: no em dashes, no en dashes, no emojis, and none of the banned cliche words.

---

## 1. Design Intent

The site should look like a well-made civic document, not an app template. Three ideas drive every decision:

1. **White paper, black ink.** The whole site sits on white and off-white. Black is used for text and thin rules only, never for large filled areas. There are no black headers, footers, hero panels, or cards.
2. **The flag as a quiet system.** Black, red, and green appear in small, repeated, predictable places so the page reads as Kenyan without any single area being loud. The same three colors always do the same jobs (section 3).
3. **Real content over decoration.** The promulgation photograph, the text of the Constitution, and the chapter structure are the visual interest. Nothing decorative is added on top of them.

### What is removed

| Remove | Replace with |
|---|---|
| Reflective oval blobs, glows, radial gradient washes | Flat white surfaces and the promulgation photograph |
| Black hero, black footer, black cards | White and off-white surfaces with flag-colored edges |
| Glass effects, backdrop blur, soft grey drop shadows | 1px ink borders and one hard offset shadow (section 8) |
| Pill buttons and large rounded corners (`rounded-3xl`, `rounded-full`) | 4px radius on controls, 2px on cards |
| Fade-and-slide-up reveal on every section | A single reveal on first load only (section 11) |
| Faded or half-transparent timeline items | Fully opaque content at all times |
| Uppercase tracked eyebrow labels above every heading | Headings stand alone |
| One word of a headline in a different color | Headlines set in one color |

---

## 2. Color System

All colors are exact values from the project brief. Do not introduce other hues.

### Core tokens

| Token | Hex | Role |
|---|---|---|
| `ink` | `#111111` | Body text, headings, thin rules, icon strokes |
| `flag-red` | `#be1111` | Markers, hover accents, key history points, the "in plain language" callout rule |
| `flag-green` | `#0a5c27` | Primary buttons, active states, chapter numbers, clause numbers, links |
| `white` | `#ffffff` | Page background and card surfaces |
| `paper` | `#f8f9fa` | Alternate sections, reading containers, callouts, form fields |

### Supporting neutrals (derived, used only for text and borders)

| Token | Hex | Role |
|---|---|---|
| `ink-muted` | `#4a4f55` | Secondary text, captions, metadata |
| `rule` | `#d9dcdf` | Hairline dividers inside cards and tables |

### Contrast checks (on white)

* `ink` on white: 18.9:1
* `flag-green` on white: 8.1:1 (passes AA and AAA for body text)
* `flag-red` on white: 6.0:1 (passes AA for body text)
* `ink-muted` on white: 8.0:1

White text on `flag-green` buttons passes AAA. White text on `flag-red` passes AA and is used only for large text or badges.

### Light mode only

The site ships in light mode. Do not add a dark theme in this pass. Remove any `dark:` classes and `prefers-color-scheme: dark` blocks that exist.

---

## 3. The Flag System

The flag appears in three reusable forms. Use these forms instead of ad hoc stripes.

### 3.1 The Ribbon (page top, 20px)

The existing five-band flag ribbon stays at the very top of every page, unchanged: black, white, red, white, green. It sits above the white header.

### 3.2 The Edge (card accent, 6px)

Every card has a flag edge on its **top** border (horizontal cards) or **left** border (list rows). The edge is a three-segment bar: black, red, green. The segment matching the card's category is wider; the other two are narrow.

| Category | Dominant segment | Proportions (black / red / green) |
|---|---|---|
| Foundations | black | 60 / 20 / 20 |
| Rights and Freedoms | red | 20 / 60 / 20 |
| Governance | green | 20 / 20 / 60 |
| Accountability | red | 30 / 50 / 20 |
| State Organs | green | 30 / 20 / 50 |

Non-category cards (carousel slides, ATI form, callouts) use an even 34 / 33 / 33 edge.

```css
.edge {
  height: 6px;
  background: linear-gradient(
    to right,
    #111111 0 var(--b, 34%),
    #be1111 var(--b, 34%) calc(var(--b, 34%) + var(--r, 33%)),
    #0a5c27 calc(var(--b, 34%) + var(--r, 33%)) 100%
  );
}
```

Hard color stops only. This is the one place a gradient function is used, and it produces flat bands, not a blend.

### 3.3 The Rule (divider, 2px to 4px)

Section dividers use a short flag rule instead of a plain line: a 4px bar, 96px wide, split into three equal black, red, and green segments, placed above major section headings. Use it once per major section, not per subsection.

### 3.4 Color jobs (never mixed)

| Color | Always means | Never used for |
|---|---|---|
| Green | Do something, you are here, positive | Warnings, errors, decoration |
| Red | Pay attention, turning point, hover | Primary buttons, large fills |
| Black | Read this, structure | Backgrounds larger than a thin rule |

---

## 4. Typography

Two families, clearly different.

| Role | Family | Weight | Notes |
|---|---|---|---|
| Headings, navigation, buttons, labels, numbers | Inter | 900 for headings, 700 for UI, 500 for nav | Matches the existing `font-black` rule |
| Body copy, the constitutional text, ledes, quotes | Source Serif 4 | 400 body, 600 emphasis | Reads like printed statute |

Load both with `next/font/google` in `src/app/layout.tsx` and expose them as CSS variables `--font-sans` and `--font-serif`.

### Scale

| Level | Size | Line height | Tracking | Use |
|---|---|---|---|---|
| Display | `clamp(40px, 6.4vw, 92px)` | 0.96 | -0.035em | Landing hero headline only |
| H1 | `clamp(32px, 4.4vw, 56px)` | 1.02 | -0.03em | Chapter page titles |
| H2 | `clamp(28px, 3.6vw, 44px)` | 1.05 | -0.025em | Section headings |
| H3 | 20px to 24px | 1.25 | -0.01em | Card titles, article titles |
| Lede | `clamp(19px, 1.7vw, 23px)` | 1.5 | 0 | Serif, under headlines |
| Body | 17px | 1.6 | 0 | Serif, all reading text |
| Small | 14px to 15px | 1.5 | 0 | Sans, metadata and captions |

### Rules

* Line length stays under 75 characters for body text (`max-width: 34em` to `40em`).
* Headings use sentence case.
* Labels use sentence case. Do not set labels in all caps.
* Quotes of the Constitution are always set in the serif face.
* Numbers that act as navigation (chapter numbers, article numbers) use Inter 900 in `flag-green`.

---

## 5. Layout and Spacing

* Page container: `max-width: 1180px`, horizontal padding `clamp(16px, 4vw, 48px)`.
* Vertical rhythm: sections separated by `clamp(48px, 8vw, 104px)`.
* Alternate sections between `white` and `paper` so the page has structure without borders everywhere.
* Alignment: all text is left aligned. Do not center body text or card content. Only the footer pledge line may be centered on very narrow screens.
* Grid: two-column layouts collapse to one column at 860px.

### Radius, borders, shadow

| Element | Radius | Border |
|---|---|---|
| Buttons, inputs | 4px | 2px solid `ink` (outline) or none (filled) |
| Cards | 2px | 1px solid `rule`, plus the flag edge |
| Photograph | 0px | none |
| Badges | 2px | none |

No pills. No `rounded-full` anywhere except the carousel progress dots if kept (replaced in section 9.5).

---

## 6. Global Components

### 6.1 Header (`src/app/page.tsx`, shared nav)

* White background, sticky, with a 1px `rule` bottom border.
* Flag ribbon sits directly above it.
* Logo (`logo-kt.jpg`) on the left at 36px height, wordmark "Soma Katiba KE" in Inter 900.
* Anchors (`#chapters`, `#timeline`, `#graphics`, `#toolkit`, `#pledge`) in Inter 500, 15px, `ink`.
* Hover and active link: 3px underline in `flag-red`, offset 6px. The current section anchor is underlined in `flag-green` instead.
* Instagram link `@somakatibake` is a bordered text button (2px `ink` border), not a filled black pill.
* Header shows a 3px segment of the flag Rule under the wordmark on scroll, to signal the flag identity without color fills.

### 6.2 Buttons

| Variant | Style |
|---|---|
| Primary | `flag-green` fill, white text, 4px radius, Inter 700, 14px 22px padding. Hover: `#0d7131`. |
| Secondary | White fill, 2px `ink` border, `ink` text. Hover: `ink` fill, white text. |
| Text link | `flag-green`, underlined; hover underline turns `flag-red` |

Do not append arrows or symbols to button text.

### 6.3 Cards (all types)

* White surface (or `paper` on white sections), 1px `rule` border, 2px radius.
* Flag Edge on top (section 3.2).
* Padding 20px to 28px.
* No shadow. On hover, the border becomes `ink` and the title underline appears in `flag-red`. No lift, no scale.

### 6.4 Footer

* White background with the flag Ribbon at the top edge and a `paper` band beneath it.
* The non-partisan pledge appears verbatim in Source Serif 4, 18px, `ink`.
* Navigation columns in Inter 500, links underline in `flag-red` on hover.
* Closing line: project attribution in `ink-muted`.
* No black container. Contrast comes from the ribbon and a 4px `flag-red` rule above the pledge heading.

---

## 7. Landing Page Sections

### 7.1 Hero

Two columns on desktop, photograph first on mobile.

* **Left (white):** headline "The Constitution, in plain language." in Display size, `ink`, one color throughout. Lede in serif. Two buttons: primary "Read the chapters", secondary "Write an information request". Beneath, a single line of facts: "18 chapters, 264 articles, 47 counties." with a 4px `flag-red` rule above it.
* **Right:** the promulgation photograph (Kibaki holding the Constitution at Uhuru Park), full height of the hero, `object-fit: cover`, `object-position: 50% 20%`. Square corners.
* **Flag integration:** a 12px vertical Edge runs along the left side of the photograph (black, red, green stacked, in the 20 / 40 / 40 proportion). The red wax seal in the photograph is the visual match for the red accent.
* **Caption:** under the photograph on white, `ink-muted`, 14px: "President Mwai Kibaki displays the new Constitution at Uhuru Park, Nairobi, 27 August 2010." with a 3px `flag-green` rule on its left.
* Alt text must describe the photograph with no emoji and no dashes.

### 7.2 Article 1 statement

One serif sentence, "All sovereign power belongs to the people of Kenya.", at `clamp(30px, 4.6vw, 60px)`, weight 600, on a `paper` band. Citation "Constitution of Kenya, Article 1(1)" below in `ink-muted`. A flag Rule sits above the band.

### 7.3 Preamble spotlight

Replace the existing preamble card with a `paper` container, serif text, and a `flag-red` 4px left rule. Attribution line: "Promulgated 27 August 2010".

### 7.4 Chapter grid (Legal Repository)

* Keep search, the five category filters, and the link to `/chapters/[chapterId]`.
* Filter buttons: secondary button style; the active filter uses the primary green fill.
* Each chapter is a ruled row card: chapter number in Inter 900, 34px, `flag-green`; title in Inter 700, 20px; article range as metadata on the right; the one-line summary below in serif `ink-muted`. The left edge carries the category Edge (vertical, 6px).
* Hover: title underline in `flag-red`, row background `paper`.
* Remove the bulleted "key provisions" snippets from the grid. They remain on the chapter page.

### 7.5 Citizen Action Toolkit (Article 35 generator)

* Section on `paper`. Form fields on white with 2px `ink` borders and a `flag-green` focus ring.
* Letter preview rendered as a sheet of paper: white, serif text, a 6px `flag-green` top border, and the single permitted hard offset shadow `8px 8px 0 #be1111`. No rotation on mobile.
* Copy and Download buttons follow button styles (primary and secondary).

### 7.6 Non-partisan pledge section

White, with the Rule above the heading. Pledge text in serif 20px. No dark container.

---

## 8. Elevation and Depth

Depth comes from borders and edges, not shadows.

* Default: no shadow.
* One exception: the ATI letter preview uses `box-shadow: 8px 8px 0 #be1111`. This is the only shadow in the system.
* Never use blur radius above 0 in any `box-shadow`.

---

## 9. Retained Features, Restyled

### 9.1 Historical Timeline (`HistoricalTimeline.tsx`)

All eight milestones stay exactly as written. Only the presentation changes.

* White section background. A vertical spine, 2px solid `ink`, left aligned on mobile and centered on desktop.
* Milestone marker: a 14px square (not a circle). Fill rules:
  * **Black outline, white fill:** ordinary milestones (1920s to 1963, 1964 to 1989, 1998 to 2004, 2005, 2007 to 2010).
  * **`flag-red` fill:** turning points (1990 to 1997 Second Liberation, The 2010 Referendum Campaigns).
  * **`flag-green` fill:** the final milestone, August 27, 2010: Promulgation.
* Year range in Inter 900, 28px, `ink`. Milestone title in Inter 700, 20px. Description in serif 17px.
* Each milestone is a white card with the Edge on its top, aligned alternately left and right on desktop and stacked on mobile.
* **Fix the half-faded items.** The current build shows some entries at partial opacity. Remove opacity from the scroll reveal entirely. Content is always at full opacity. If a reveal is wanted, animate only a 2px to 0px transform on first intersection, once.
* "The Historical Consensus" closing block: `paper` container, 6px `flag-green` left rule, serif text.
* The Yes 68.6% and No 31.4% referendum figures render as two flat horizontal bars, `flag-green` and `ink` at 100% opacity, with the percentage labels inside the bars in white.

### 9.2 Dynamic Chapter Pages (`/chapters/[chapterId]/page.tsx`)

Routing, `generateStaticParams`, and previous and next navigation are unchanged.

* **Back link:** "Back to Legal Repository" as a text link in `flag-green` with a red hover underline, placed above the header.
* **Chapter header:** white background. Chapter number in Inter 900, 72px, `flag-green`. Title in H1. Swahili title in serif italic, `ink-muted`. Article range as a bordered tag (1px `ink`, 2px radius). A full-width flag Edge sits under the header block.
* **Key takeaways:** `paper` container, 6px `flag-green` left rule, serif list. This replaces the black or dark summary panel.
* **Previous and Next controls:** two bordered cards, each with the destination chapter number in `flag-green` and its title. Hover shows `ink` border.

### 9.3 Article Accordion (`ArticleAccordion.tsx`)

* Search field and Expand all, Collapse all controls use the secondary button style.
* Each article row: article number in Inter 900, `flag-green`, then the article title in Inter 700, then a `+` or `-` marker on the right. Rows separated by 1px `rule`.
* Open state: left border becomes 4px `flag-green`; the row background stays white.
* Clause text in Source Serif 4, 17px. Clause numbers `(1)`, `(2)` appear as bold green numerals with a 1px `flag-green` square outline, 2px radius, not as filled badges.
* **Plain language callout:** `paper` background, 6px `flag-red` left rule, a small Inter 700 label "In plain language" in `flag-red`, text in serif. This is the main place red appears in long reading, so it signals "this is the practical meaning".

### 9.4 Infographics Carousel (`SocialCarouselFeed.tsx`)

Keep the slide deck simulator, the step-by-step slides, and the mock social post frame.

* Slides are white cards with a 1px `rule` border and the even Edge on top. Aspect ratio 4:5, matching an Instagram carousel.
* Slide headline in Inter 900; slide body in serif. Slide background alternates between `white` and `paper`. No full black or green slides.
* Account header strip (avatar, "somakatibake", "Nairobi, Kenya") on white with a 1px `rule` bottom border.
* Controls: square 40px buttons with 2px `ink` border; hover fills `ink`.
* **Progress indicator:** replace round dots with a segmented bar, one segment per slide. Completed and current segments are `flag-green`; upcoming segments are `rule`. The current segment is 4px taller.
* Footer line "Purely educational" in `ink-muted`, 14px.
* No glossy reflections, no gradient overlays, no rounded phone mockup glow.

### 9.5 Reduced decoration summary

If a decorative element is not in this document, do not add it.

---

## 10. Imagery

* The promulgation photograph is the only photograph on the front page. Store it as `public/assets/images/promulgation.jpg`, 1600px wide, JPEG quality 80 or higher, and serve it with `next/image` with `priority`.
* No stock photography, illustrations of people, or abstract shapes.
* Icons: Lucide React, stroke width 2, `ink` by default, `flag-green` when active. Do not place icons inside colored circles.
* The logo keeps its current file and appears at a minimum height of 32px.

---

## 11. Motion

* Respect `prefers-reduced-motion` everywhere.
* One orchestrated moment on first load: the hero headline and photograph appear together with a 200ms opacity fade. Nothing else animates on load.
* Responsive interaction motion only: accordion open and close (200ms height), carousel slide change (250ms translate), hover underlines (150ms).
* Remove `whileInView` fade-and-slide on cards, sections, and the timeline.
* No parallax, no floating elements, no looping animation.

---

## 12. Accessibility Baseline

* All text meets WCAG AA contrast on its background (section 2).
* Visible keyboard focus: 3px solid `flag-green` outline with 3px offset on every interactive element.
* Minimum tap target 44px on mobile.
* Color is never the only signal: timeline turning points also carry a text label in the card, and category filters show text.
* Landmarks: `header`, `nav`, `main`, `footer`; one `h1` per page.
* Images have descriptive alt text without emojis or dashes.

---

## 13. Implementation Guide

### 13.1 `tailwind.config.ts` colors

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        "ink-muted": "#4a4f55",
        rule: "#d9dcdf",
        paper: "#f8f9fa",
        flag: {
          red: "#be1111",
          green: "#0a5c27",
          "green-hover": "#0d7131",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "2px",
        control: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
```

### 13.2 `globals.css` additions

```css
:root {
  --ink: #111111;
  --flag-red: #be1111;
  --flag-green: #0a5c27;
  --paper: #f8f9fa;
  --rule: #d9dcdf;
}

body {
  background: #ffffff;
  color: var(--ink);
  font-family: var(--font-serif), Georgia, serif;
  font-size: 17px;
  line-height: 1.6;
}

h1, h2, h3, nav, button, .label {
  font-family: var(--font-sans), system-ui, sans-serif;
}

:focus-visible {
  outline: 3px solid var(--flag-green);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
```

### 13.3 Fonts in `layout.tsx`

```tsx
import { Inter, Source_Serif_4 } from "next/font/google";

const sans = Inter({ subsets: ["latin"], weight: ["500", "700", "900"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], style: ["normal", "italic"], variable: "--font-serif" });

// <html lang="en" className={`${sans.variable} ${serif.variable}`}>
```

### 13.4 Shared components to create

| Component | Path | Purpose |
|---|---|---|
| `FlagRibbon` | `src/components/ui/FlagRibbon.tsx` | The five-band top ribbon |
| `FlagEdge` | `src/components/ui/FlagEdge.tsx` | Card edge, props: `category`, `orientation` |
| `FlagRule` | `src/components/ui/FlagRule.tsx` | 96px tri-color section divider |
| `Card` | `src/components/ui/Card.tsx` | White card with border and optional Edge |
| `Button` | `src/components/ui/Button.tsx` | `primary`, `secondary`, `link` variants |

### 13.5 Order of work

1. Tokens: `tailwind.config.ts`, `globals.css`, fonts in `layout.tsx`.
2. Shared flag components and `Button`, `Card`.
3. Header, footer, hero with the photograph.
4. Chapter grid rows and category Edge mapping.
5. Chapter page header, takeaways, and `ArticleAccordion`.
6. `HistoricalTimeline` markers, cards, and opacity fix.
7. `SocialCarouselFeed` slides and segmented progress.
8. `AtiLetterGenerator` form and letter preview.
9. Remove blobs, gradients, blur, `dark:` classes, `whileInView` reveals.
10. Run `npm run build` and confirm all 39 static routes still generate.

---

## 14. Review Checklist

Before merging any page, confirm:

- [ ] No black filled container larger than a thin rule.
- [ ] Page background is white; alternate sections use `#f8f9fa`.
- [ ] Red, green, and black each appear on the page, in their assigned jobs.
- [ ] Every card has a flag Edge and no shadow.
- [ ] No gradients except the hard-stop Edge, no blur, no glow, no blobs.
- [ ] Headlines are one color, sentence case, with no uppercase eyebrow labels.
- [ ] Constitutional text is in the serif face.
- [ ] Timeline items are fully opaque; carousel and chapter pages render in the new style.
- [ ] No em dashes, en dashes, emojis, or banned cliche words anywhere.
- [ ] Keyboard focus is visible and `prefers-reduced-motion` is respected.
- [ ] `npm run build` completes with all static routes generated.
