# UX Case Study Master Template Spec v1

**Version:** 2.0
**Created:** 2026-07-07
**Last updated:** 2026-07-12
**Owner:** Cafe Yi
**Status:** ACTIVE — v2.0 codifies the standards graduated from the VTH v2 pilot (audit programme U-series and E-series). Sections 3, 6.5 and 7.1 are superseded rewrites; sections 2.4 and 13 are new. This spec is the single authority for the M1-M4 unified build.
**Purpose:** Define the master IA architecture and DS style system for all 8 UX case study pages. This spec is the Phase 3A deliverable. Once approved, it drives Phase 3B (All-Page Content Mapping Table) and all subsequent page builds and retrofits.

---

## 1. Narrative Structure

Every UX case study page follows a three-chapter progressive disclosure model, plus an ending system. The reader experiences the project at three depths: a quick summary, a short story, then a detailed walkthrough.

### Chapter 0: Entry

| Section | ID | Purpose |
|---------|-----|---------|
| Hero | `hero` | One-line title, tags, summary, two CTA buttons. Full-width themed gradient. |
| Overview + Meta | `overview` | One-sentence summary, descriptive paragraph, and project metadata cards (client, timeline, role, tools, team, skills). |

### Chapter 1: Story

A short narrative arc showing what the project solved and achieved. Designed for readers who want the headline, not the process.

| Section | ID | Required | Purpose |
|---------|-----|----------|---------|
| Background | `background` | Yes | Why this project exists. Context and starting conditions. |
| Problem | `problem` | Yes | What needed solving. May include HMW questions. When present, the HMW question is not a separate blockquote, it is the section's H2 itself, styled per the existing `.ux-problem` component: large heading (up to `clamp(2rem, 3.45vw, 3.55rem)`), key phrases wrapped in `<strong>`/`<em>` colored with `var(--ux-theme)`, background using the existing 145deg tint gradient. If the page also has supporting problem cards, place them full width below the heading, each with an icon. Confirmed against ASH's real implementation, 2026-07-08. |
| Solution | `solution` | Yes | Strategic response. Abstract concepts, frameworks, or approach diagrams. |
| Outcome | `outcome` | Yes | Final results. Video, key metrics, or hero-level deliverable images. **Absorbs** any standalone "Screencast", "Video", "Prototype Walkthrough", or "Preview" section, these are not separate slots, they are Outcome's own media (walkthrough video or final-effect imagery), unified under the Outcome kicker and heading. |
| Feedback | `feedback` | Optional | Stakeholder or course feedback quotes validating the project outcome. |
| Contribution | `contribution` | Conditional | Individual role and specific contributions within a team. |

**Feedback applies to:** Most projects have external validation quotes (e.g., NDS and VSK have "Course Feedback"). Projects without relevant feedback may omit this section.

**Screencast/Preview/Video consolidation:** Several current pages carry a standalone section between Overview and Background showing a walkthrough video or a static preview image of the final result (VTH, ASH, WST, WSO). This is not a distinct master slot. Per Cafe's confirmation, all such content moves into Outcome and is presented under a single "Outcome" kicker and heading, regardless of whether the source material called it Screencast, Video, Prototype Walkthrough, or Preview. Outcome may contain both the walkthrough video and final-effect imagery together.

**Contribution applies to:** VTH (merged from My Role + Approach), ASH, STD, RKT (new), VSK (new). Does not apply to NDS, WST, WSO.

### Chapter 2: Process

A detailed walkthrough of the design process. Each sub-section can use read-more buttons to control depth. The chapter opens with a Process overview section containing four navigable cards.

| Section | ID | Required | Purpose |
|---------|-----|----------|---------|
| Process | `process` | Yes | Chapter opening. Title + summary + 4 clickable navigation cards linking to the sub-sections below. |
| Research | `research` | Yes | Discovery and definition. Primary/secondary research, workshops, findings, insights, principles. |
| Design | `design` | Yes | Ideation, wireframes, IA, user flows, content strategy, lo-fi prototypes, design system, interaction design. **Absorbs** any standalone "Design System" content (typography, colour, component library, tokens), this lives inside Design, not as its own top-level section. |
| Validation | `validation` | Yes | Prototype testing, usability testing, critic feedback, test results and metrics. For projects with no formal validation phase (e.g., self-directed design system audits), this slot may hold a lighter "live verification" format: a short note describing the self-testing approach plus a direct link or embed to the working prototype, so visitors can verify usability themselves. |
| Delivery | `delivery` | Yes | Final design deliverables. Hi-fi prototypes, handover strategy, go-live planning. **Absorbs** any standalone "Final Design" walkthrough section (scene-by-scene or screen-by-screen tour of the finished product), this is Delivery's closing content, not a separate slot. |

### Ending

| Section | ID | Required | Purpose |
|---------|-----|----------|---------|
| Reflection | `reflection` | Yes | Three parts: Value (project worth), Learned (improvements), Next (future steps). Kicker and title unified across all pages to "Looking back, looking forward." |
| HENEX Recipe | `recipe` | Yes | Method recipe connection. Primary recipe with philosophy node tags, secondary recipes with title label. |
| Related Projects | `related` | Yes | 4 related project cards. Heading: "More work across service, digital and spatial systems." Back-to-works button in bottom-right. |

---

## 2. Color System

### 2.1 Dual Theme Tokens

Every UX case study page defines a primary and secondary theme color. All other case-level colors derive from these two through adjustments in lightness, saturation, or opacity.

| Token | Role | Usage |
|-------|------|-------|
| `--ux-primary` | Main project identity color | Hero gradient, body kickers (CLIENT, ROLE, skills), skills tag border and text, Tier D background, Tier P gradient, Tier L flat background, process navigation cards border and fill. |
| `--ux-secondary` | Accent and section marker | Section kickers, meta HENEX Lens items, influence border, overview copy border. |
| `--ux-primary-dark` | Darkened primary | Tier D deep background base. Dark mode primary adjustments. |
| `--ux-primary-soft` | Lightened primary | Tier P gradient target. Tier L flat fill. Card hover states. |
| `--ux-primary-pale` | Very light primary | Tier L flat fill alternative. Subtle tinted backgrounds. |

### 2.2 Per-Project Color Values

| Project | Primary | Secondary | Notes |
|---------|---------|-----------|-------|
| VTH | #00164B (navy) | #B30D0D (red) | Confirmed from reference page. |
| ASH | #13838A (teal) | #A5205F (berry) | |
| NDS | #E11A2C (red) | #571060 (purple) | Purple used in DS-specific sections. |
| VSK | #FF6000 (orange) | #207DC6 (blue) | |
| STD | #315CF6 (blue) | #7A3CEC (purple) | |
| RKT | #187A62 (green) | #3CBC9A (mint) | Mint is the existing --ux-accent value. |
| WST | #FF8C00 (pure amber) | #FFB200 (pure gold) | **⚠️ MODIFIED 2026-07-12 (M-3 palette round):** previous #FB8A02/#FFB202 pair read muddy together; both purified per Cafe. |
| WSO | #16402E (ink green) | #FF7701 (orange) | **⚠️ MODIFIED 2026-07-12 (M-4 palette round):** pair inverted per Cafe — ink-green leads, orange accents. Green adjusted from the near-black #30352E to keep a readable hue. |

### 2.3 Global Neutral Colors

Elements outside the case theme system use the existing global neutral tokens from `global.css`. This includes: navigation bar, footer, related projects section background, hero title text, section title text, description body text.

---

### 2.4 Palette Derivation Recipe (NEW 2026-07-12, graduated U2)

Every page derives its full token set from the Section 2.2 pair the same way. Values are proposed per project and confirmed by Cafe through a visual comparison round before landing (as done for all 8 projects on 2026-07-12).

| Token | Derivation |
|-------|-----------|
| `--ux-primary-soft` | A genuine mid-tone of the primary hue, bright enough to tint near-black surfaces (hand-picked, not mixed) |
| `--ux-primary-pale` (tone L) | Clean near-white of the hue |
| `--ux-tone-s` | Light: hand-picked 3-stop clean gradient (start ≈ pale deepened one step). Dark: soft 28%→16% into theme-bg |
| `--ux-tone-p` | Light: near-white tint → clean mid tint, tinted edge to edge. Dark: theme-bg → soft 30% |
| `--ux-emphasis` | Light: mid-deep trio of the primary hue carrying white text comfortably. Dark: soft 22/34/20% mixed into the deep primary |
| `--ux-alert-ink` | Vivid brightened secondary for text/borders on emphasis surfaces. Must stay saturated (E20 rule: desaturated white-mixes are unreadable as 1px borders on dark) and reach ~4.5:1 on the emphasis background |
| `--ux-accent-ink` / `--ux-strong-ink` | Per Section 10.4 (unchanged) |
| `--ux-primary-dark` | `color-mix(in srgb, var(--ux-primary) 55%, black)` — the deep primary used as the dark-mode emphasis base. **[MODIFIED F6 2026-07-14]** Mandatory for every page; the dark `--ux-emphasis` mixes soft into THIS token, never into the raw primary (mid-tone primaries produce a too-bright emphasis, the M-1 dark-mode defect). |

**Mandatory dark overrides (F6 rule, 2026-07-14):** the `[data-theme=dark]` page block must redefine all of `--ux-primary-pale` (`color-mix(in srgb, var(--ux-primary-soft) 46%, var(--theme-bg))`), `--ux-tone-s`, `--ux-tone-p`, and `--ux-emphasis`. A missing override silently renders the light value on dark (M-1 shipped this on tier L).

**Clean-colour rule (E16 lesson):** never build light tones by color-mixing a desaturated primary into grey-whites — the result is muddy grey-violet. Light-tone stops are hand-picked with a whiter base and a clear hue. Dark tones may use color-mix because `--ux-primary-soft` is defined as a genuinely saturated mid-tone.

**Implementation pattern:** all tokens live once at page scope with dark variants redefined under `[data-theme=dark]` scope (VTH E19 pattern); tier rules reference tokens only, one rule per tier serving both modes.

## 3. Background Tone System (v2.0 rewrite)

> **⚠️ MODIFIED 2026-07-12 — whole section superseded.** The four-tier system below replaces v1's tiers. Graduated from the VTH v2 pilot per Cafe's decision D-2: **content sections are never neutral.** Neutral backgrounds belong to global chrome only (nav, Related Projects, footer).

Four tones, all derived from the project's primary family (Section 2.4). Rule: no two adjacent sections share a tone. Tone D is reserved for emphasis moments.

| Tone | Class | Light Mode | Dark Mode | Usage |
|------|-------|------------|-----------|-------|
| S (Soft) | `.ux-tier-s` | Soft 3-stop clean gradient of the primary hue | primary-soft 28%→16% mixed into theme-bg, gradient | The quietest tinted tone. Replaces v1's neutral for content sections. |
| L (Light) | `.ux-tier-l` | Flat `--ux-primary-pale` (clean near-white of the hue) | primary-soft 46% flat mix | Light flat emphasis. Also the Recipe section background (supersedes v1's grey Recipe special). |
| P (Primary) | `.ux-tier-p` | Clean tint gradient, tinted edge to edge (never starts at bare white) | theme-bg → primary-soft 30% gradient | Context/transition chapters. |
| D (Emphasis) | `.ux-tier-d` | Mid-deep trio gradient carrying white text (`--ux-emphasis`) | Lifted deep variant (soft 22/34/20% into deep primary) | Emphasis punctuation: Outcome, Delivery, HMW interlude, Process gateway. |
| neutral | (none) | global surface | global surface | Chrome only: nav, Related, footer. Never for case content. |

Note: `.ux-tier-n` remains in the codebase during migration as the legacy neutral class; migrated pages use `.ux-tier-s`. VTH v2 renames from its pilot tier-n override to `.ux-tier-s` in batch M-5.

### 3.1 Default Tone Ladder (VTH-final pattern)

Baseline ladder; optional slots simply drop out (adjacency must be re-verified per page — every M-spec carries its verified sequence).

| Section | Tone | Notes |
|---------|------|-------|
| Hero | bloom (own system, Section 7.1) | |
| Overview + Meta | S | |
| Background | P | optional slot |
| Problem | L | |
| HMW | D | optional standalone interlude (Section 4.8): full-width `.ux-tier-d`, tighter padding (96px/64px), removable per case |
| Solution | S | |
| Outcome | D | |
| Feedback | L | optional, post-Outcome |
| Contribution | S | optional |
| Process | D | chapter-2 gateway with nav cards (graduated from VTH E18): the section is in-page navigation and second-act opener, so it joins the emphasis language |
| Research | S | optional chapter |
| Design | L | |
| Validation | S | |
| Delivery | D | one unified emphasis chapter across all its sub-blocks (supersedes v1 §3.3's three-tier internal split, per VTH E7) |
| Reflection | P | |
| HENEX Recipe | L | supersedes the v1 grey `--theme-surface-soft` special |
| Related Projects | neutral | global chrome |

### 3.2 Rhythm Rule

Check the sequence top to bottom after dropping optional slots. Adjacent duplicates are resolved by swapping the quieter section between S and L, never by re-introducing neutral.

### 3.3 Emphasis Discipline

D appears only at narrative punctuation points (question, climax, gateway, finale). If a page accumulates more than four D moments, demote the weakest to P.

---

## 4. Layout Patterns

> **⚠️ MODIFIED 2026-07-10 — Section 4.1 and 4.2 rewritten.** The previous rule (vertical stack with a single split-or-full-width header, applied uniformly) is superseded by a two-tier heading rule below. This changes how every section in Chapter 1, Chapter 2, and Ending is built. Read this whole section before touching any page.

### 4.1 Two-Tier Heading Rule

Every case study page has two distinct levels of heading, and each level uses a different layout. Do not mix them up.

**Tier A — Chapter-opening headings (stacked, left 2/3).**

Applies to the top-level kicker + H2 + description that opens each major section: Background, Problem, Solution, Outcome, Contribution, Process, Research, Design, Validation, Delivery, Reflection. (Overview keeps its own existing two-col treatment, see 4.2.)

Structure: kicker, H2, and description each sit in their own full-width row, stacked vertically in that order. The whole block occupies the left 2/3 of the container; the right 1/3 is empty space, not a second column.

CSS class: `.ux-chapter-head` (stacked variant of the old `.ux-wide-head`, capped at roughly 2/3 container width rather than a fixed max-width).

This is what content directly under a chapter's own kicker looks like — it is the section introducing itself, before any sub-block content begins.

**Tier B — Sub-block headings (side-by-side, 1/3 + 2/3).**

Applies to the kicker + title + description that opens an individual sub-block *inside* a chapter. Example: inside the Research chapter, the "Mixed method research" sub-block, the "Findings" sub-block, and the "Design Principles" sub-block each get their own Tier B heading. Inside Design, the "Design System" sub-block gets one too.

Structure: kicker + title sit in the left 1/3 column. Description text sits in the right 2/3 column, running alongside. This is the original `.ux-section-head` layout.

CSS class: `.ux-section-head` (unchanged), grid-template-columns `minmax(260px, .34fr) minmax(0, .66fr)`.

**Why two tiers:** the chapter-opening heading is the section announcing itself — it deserves visual weight and reads better stacked, like a headline. Sub-block headings are functional wayfinding within an already-open chapter — they read better as a compact label-plus-description row so the reader can scan past them quickly to the content.

### 4.2 Content Layouts

| Type | CSS Class | Structure | Typical Use |
|------|-----------|-----------|-------------|
| Chapter-opening stack | `.ux-chapter-head` | Kicker, H2, description stacked, left 2/3 width. | **Tier A. Every chapter-level section opener**: Background, Problem, Solution, Outcome, Contribution, Process, Research, Design, Validation, Delivery, Reflection. |
| Sub-block header | `.ux-section-head` | Left 1/3: kicker + title. Right 2/3: description. | **Tier B. Every sub-block heading inside a chapter.** Research → Mixed method research / Findings / Design Principles. Design → Design System. Applies to any future case's equivalent sub-blocks. |
| Side-by-side (legacy) | `.ux-two-col` | Left 1/3: kicker + title. Right 2/3: description + content. Right column content does not invade left. | **Exception, Overview only.** Background previously used this — see correction below. Not used elsewhere. |
| Equal split | `.ux-two-col--half` | Left 1/2: text content. Right 1/2: image or chart. | Abstract diagrams, concept illustrations, used as a variant within content area. |
| Asymmetric media | `.ux-two-col--media` | Left 1/3: title + text. Right 2/3: image. Or reversed. Alternating left-right creates page rhythm. | Design system colors, fonts, component showcases, used as a variant within content area. |

**Correction, confirmed 2026-07-10:** Background was previously an exception using `.ux-two-col` alongside Overview. This is now corrected — Background follows the same Tier A chapter-opening stack as every other Chapter 1/2/Ending section. Only Overview keeps `.ux-two-col`.

**Superseded correction (2026-07-08):** the earlier note said vertical stack applied uniformly to every non-Overview/Background section with a single header treatment. This is now split into Tier A (chapter opener) and Tier B (sub-block header) as defined above — both are still "vertical stack" sections in the sense that content flows top to bottom, but their heading rows differ.

### 4.3 Card Grids

| Grid | CSS Class | Columns |
|------|-----------|---------|
| Two-column | `.ux-card-grid--two` | `repeat(2, 1fr)` |
| Three-column | `.ux-card-grid--three` | `repeat(3, 1fr)` |
| Four-column | `.ux-card-grid--four` | `repeat(4, 1fr)` |

All grids collapse to 2 columns at 1180px, then 1 column at 640px.

### 4.4 Card Content Standard

Cards follow the global card system (C1-C5 from `global.css`). Within a case study:

**Standard card:** Title + description text. Optional kicker or sequence number above the title.
**Icon card:** Icon (Tabler) + title + description text. Used for principles, key findings.
**Navigable card:** Has hover lift + shadow change. Used for process navigation cards, related project cards.
**Display card:** Has hover border change only. Used for findings, insights, problem statements.

Card border accent uses the case primary theme color. Display-card hover border color prefers the case's secondary theme color (`--ux-secondary`) and falls back to the primary theme color (`--ux-theme`) if a page has not defined a secondary color yet.

> **⚠️ MODIFIED 2026-07-12 — hover color source changed.** Previously hover border color always used `--ux-theme` (primary). The shared hover rule in `global.css` now reads `color-mix(in srgb, var(--ux-secondary, var(--ux-theme, ...)) 28%, var(--theme-border))`, so any page that defines `--ux-secondary` gets a secondary-colored hover automatically, with no rule change needed elsewhere. Pages without a defined `--ux-secondary` are unaffected and keep the previous primary-colored hover. As of the M1-M4 specs every project has an approved secondary, so this becomes universal at migration. Hover implementation now runs through the border custom-property contract — see Section 13.1.

The distinction between navigable and display cards follows global rules.

### 4.5 Process Navigation Cards

The Process section contains 4 clickable cards that navigate to Research, Design, Validation, and Delivery. Each card shows:
1. The sub-section title (Research / Design / Validation / Delivery).
2. Key topic titles from that sub-section's content.

Card styling: border and background tint use `var(--ux-primary)`. Hover follows navigable card rules (lift + shadow).

### 4.6 Influence Block

A callout block that appears at the bottom of select sections. Shows how the section's content shaped the project direction.

Styling: left border using `var(--ux-secondary)`, tinted background using `var(--ux-primary-pale)` at low opacity. Full content width. Not indented.

**Impact vs. Influence, disambiguation rule:** Some current pages use an "Impact" or "Impacts" label two different ways, and these route to two different places in the master template.

1. If "Impact"/"Impacts" is a single, consolidated top-level section describing the author's role and contribution across the whole project (e.g., ASH's "Impacts" section, which lists the same six contributions as its Contribution section), it belongs in **Contribution**. Merge it there rather than keeping it as a separate section, since Contribution is about the person's impact on the project.
2. If "impact" appears as a small recurring note attached to individual sections (e.g., a one-line callout at the end of Research or Design explaining how that section's findings shaped a decision), it belongs in the **Influence Block** pattern described above. Influence is about what a section's content changed, not about a person's role.

Rule of thumb: Contribution = impact of the person. Influence = impact of the content/findings.

### 4.7 Read More Button

Sections with extensive content use a centered "Read more" button to show/hide additional items. The button appears before any closing element (e.g., before the influence block). Collapsed by default.

Button styling: filled with `var(--ux-primary)`, white text. On hover: inverted.

---

### 4.8 HMW Interlude Section (NEW 2026-07-12, graduated E14)

Cases with a How-Might-We statement present it as a standalone full-width section between Problem and Solution: `<section class="ux-section ux-tier-d [page]-hmw-section">`, tighter padding per Section 6.5. The statement uses the page heading font at clamp(1.7rem, 3.6vw, 3.2rem), white text, with key phrases wrapped in `<strong>` coloured `--ux-alert-ink`. No card wrapper, no rounded box — the section background IS the emphasis (VTH's earlier nested-card form was retired as a one-off style). Cases without HMW material omit the whole section; every M-spec records the choice.

## 5. Corner Radius Tokens

Four levels create a visual hierarchy from most rounded (tags) to least rounded (buttons).

| Element | Token | Value | Rationale |
|---------|-------|-------|-----------|
| Tag / Chip | `--radius-pill` | 99px | Full pill shape. Maximum visual distinction. |
| Card | `--radius-card` | 12px | Clearly rounded. Larger surface area warrants visible softening. |
| Media (image, video, prototype) | `--radius-media` | 8px | Moderate rounding. Distinct from cards and buttons. |
| Button | `--radius-button` | 4px | Subtle rounding. Consistent with existing DS. Smallest interactive element. |

**Additional rules:**
1. Media elements (images, videos, embedded prototypes) have no box-shadow. Only border if needed for contrast.
2. Cards and buttons may retain the existing DS shadow system.
3. All UX project images and videos use `--radius-media` site-wide for consistency.

**Rollout note, confirmed 2026-07-08:** These four tokens are the long-term target once every UX case page is retrofitted. During VTH's build (Phase 4/5), keep using the site's current radius values (`--ux-radius`, presently `var(--radius-md)` = 18px for cards, and existing border/shadow treatments from `global.css`/`ux-case-study.css`), so VTH does not visually diverge from the other 7 not-yet-retrofitted pages. Introduce the new pill/card/media/button tokens sitewide together, in a later dedicated pass, not page by page.

---

## 6. Typography and Spacing

### 6.1 Section Kicker

All in-case section kickers (Background, Problem, Solution, Outcome, Feedback, Contribution, Process, Research, Design, Validation, Delivery, Reflection) use `var(--ux-secondary)` color, uppercase, letter-spacing 0.1em, font-size 13px, font-weight 700.

**Kicker hierarchy sizing (F4 2026-07-14, corrected F22/F29/F30 2026-07-14):** two sizes exist, and only two.

- **Chapter-level kickers** (Overview, Background, Problem, Solution, Outcome, Contribution, Process, Research, Design, Develop, Validation, Delivery, Reflection): **1.0625rem (~17px)**. Applies regardless of which container the kicker physically sits in — `.ux-chapter-head .ux-kicker`, `.ux-wide-head .ux-kicker`, and the container-independent `.ux-kicker.ux-kicker--chapter` modifier (added F30, for kickers in `.ux-intro` or other bare containers not wrapped in `.ux-chapter-head`) all resolve to this size.
- **Sub-block kickers** (`.ux-section-head .ux-kicker`, e.g. Evaluative Workshop, Service Blueprint Workshop, Mixed Method Research, IA Categories): **0.72rem**.
- **Exception, small regardless of position:** Related Projects and the HENEX Method Recipe kicker stay at the base 0.8125rem (13px) — confirmed by Cafe as intentionally small, not chapter-level (2026-07-14).

**Build rule (graduated from F30):** do not assume a chapter kicker's container is `.ux-chapter-head`. Several pages have chapter kickers sitting in `.ux-intro`, bare `.ux-copy`, bare `.ux-problem__grid`, or plain `.container` — historical drift, not a documented exception. When building or auditing a page, check the actual container of every chapter kicker and apply `class="ux-kicker ux-kicker--chapter"` explicitly wherever `.ux-chapter-head`/`.ux-wide-head` isn't already the ancestor. Do not retrofit `.ux-chapter-head` onto a container that doesn't already have it — it carries `max-width: 66%` and `margin-bottom` that will change layout.

**Exceptions, confirmed 2026-07-08:**

1. **HENEX Method Recipe kicker** uses the case's theme color, but the choice between `var(--ux-primary)` and `var(--ux-secondary)` is decided per project during the build, not fixed globally. VTH uses secondary (red). See Section 8.1.
2. **Related Projects kicker** always uses the global neutral text color, never a case theme color. Related Projects is a global system section (same content structure and behavior across all 15 case study pages), so it stays visually neutral regardless of which project's page it appears on. See Section 9.1.

### 6.2 Body Kickers

Inline kickers within content (CLIENT, ROLE, SKILLS, etc.) use `var(--ux-primary)` color. Skills tags use `var(--ux-primary)` for text and border.

### 6.3 Meta HENEX Lens Items

Items under the HENEX Lens in the meta section (e.g., "R24 · Trust & Cooperation Rules") use `var(--ux-secondary)` color.

### 6.4 Section Titles and Body Text

Section titles and description text use global neutral colors (`var(--color-text)`, `var(--color-muted)`). They do not inherit case theme colors. This ensures readability and cross-page consistency.

### 6.5 Spacing

All content follows the global spacing scale defined in `global.css`. Section padding uses the existing `--section-space` token. Card gaps, grid gaps, and element margins follow the established spacing values. No ad-hoc spacing values.

> **⚠️ MODIFIED 2026-07-10 — vertical rhythm floor raised.** Review of the VTH v2 build found the default vertical rhythm too tight, sub-blocks and adjacent sections crowded together. The rhythm now uses the upper end of the scale. Recommended floors, applied through the spacing tokens, not ad-hoc pixels:
>
> 1. Section vertical padding: `--section-pad`, 144px desktop / 80px mobile (final VTH values, raised twice from 96px).
> 2. Sub-block separation inside a chapter (Tier B block to the next): 96px.
> 3. First content element below a chapter or sub-block heading, and consecutive stacked media/feature rows: 56px.
> 4. Embedded-frame containers (prototype/DS shells): 32px head padding with a 24px gap before the frame.
> 5. HMW standalone interlude: 96px / 64px section padding (deliberately tighter than --section-pad; it is punctuation, not a chapter).
>
> **⚠️ MODIFIED 2026-07-12:** values above are the VTH-final numbers (E-series), superseding the 2026-07-10 floors.
>
> These are minimums for breathing room, not fixed values. Responsive breakpoints still reduce them per Section 11.

---

## 7. Hero Section

### 7.1 Visual — Frosted Dual-Bloom Standard

> **⚠️ MODIFIED 2026-07-12 — supersedes the v1 linear-gradient hero.** Per Cafe's decision, ALL UX cases use this hero during the unified rebuild, including previous cover-image pages.

Structure: a flat base colour on the hero element plus a `::before` layer carrying two radial blooms with `filter: blur(34px)` (36px dark) — the same technique as the Home/Philosophy heroes. Primary bloom sits top-left (≈14% 16%), secondary bloom top-right (≈90% 18%). Blooms never touch the hero's bottom edge, so the seam into Overview reads tone-on-tone (E17 lesson). The copy layer sits above the blooms (z-index 2); `overflow: hidden` clips the blur spill.

Light mode: near-white hue-tinted base, bloom alphas ≈0.30-0.52. Dark mode: near-black hue-tinted base (e.g. VTH #02040A), bloom alphas ≈0.50-0.75 — per-project intensity confirmed visually (STD/NDS/VSK/WST/WSO run the strengthened values recorded in their M-specs; VTH/ASH/RKT run the base values).

Title: one line unless responsive wrap is needed. Global neutral text (dark text on light base, white on dark). No forced line breaks.

Tags: pill-shaped (`--radius-pill`), semi-transparent border and background.

### 7.2 CTA Buttons

Two buttons:

| Button | Label | Target |
|--------|-------|--------|
| Primary (filled white) | "View outcome" or equivalent | Scrolls to Outcome section (Chapter 1 climax). |
| Secondary (outlined white) | "View prototype" or "View final design" | Scrolls to Delivery section or embedded prototype. If no prototype exists, links to Delivery. |

**Removed:** "Back to works" button is no longer in the hero. It moves to the Related Projects section.

---

## 8. HENEX Method Recipe Section

### 8.1 Structure

Background: `var(--theme-surface-soft)` (#F0F3F5 light / #121314 dark). This is a global token, not a case theme color. The subtle gray distinguishes Recipe from both the white Related section (`--theme-surface`) and from themed case sections, reflecting its dual nature: it belongs to the case page content but connects to the global philosophy system. This background is applied explicitly on the Recipe section element, not inherited from body.

**Left column (1/3):** Kicker + section title. Kicker color: case theme color, `var(--ux-primary)` or `var(--ux-secondary)`, decided per project during the build (see Section 6.1 exception 1). VTH uses secondary (red). Title color: global text.

**Right column (2/3):**

1. **Primary Recipe** heading (text "Primary Recipe" as a label).
2. Recipe ID and name in `var(--ux-primary)` color (e.g., "R24 · Trust & Cooperation Rules").
3. ~~Three philosophy node tags below the recipe name~~ — **removed 2026-07-08.** The reference pages do not have this component, and it added no value once the recipe ID and name are already shown. Do not add colored node/triad pills or a spelled-out triad label (e.g., "Agency × Empathy × Interface") beneath the recipe name.
4. Recipe description text in neutral color.
5. **Secondary Recipe** heading (text "Secondary Recipe" as a label). This label is mandatory; without it users do not understand the hierarchy.
6. Secondary recipe IDs listed (e.g., "R15 R03 R09 R18").

### 8.2 Cleanup Rules

1. Remove duplicate node entries within a recipe.
2. Every recipe section must have both "Primary Recipe" and "Secondary Recipe" labels.
3. Secondary recipes that currently lack a heading label must have one added.

---

## 9. Related Projects Section

### 9.1 Content

Heading: "More work across service, digital and spatial systems." (unified across all 15 case study pages).

Kicker: always global neutral text color, never a case theme color. Confirmed 2026-07-08, this is a global system section and stays visually neutral on every page. See Section 6.1 exception 2.

Four project cards. Each card shows: project thumbnail, project type label, project title.

### 9.2 Ordering Logic

Projects are categorized into three types: Service System, Digital System, Spatial System.

Card order priority:
1. Same type as the current project (most relevant).
2. Other UX project types.
3. Spatial (architecture) projects, only if no other UX options.

Within each priority level, feature-rich or flagship projects rank first.

### 9.3 Back-to-Works Button

A "Back to works" text button in the bottom-right of the Related section. Replaces the removed hero button. Links to `/works.html`.

---

## 10. Dark Mode Rules

### 10.1 Hero

Dark mode hero uses `var(--ux-primary-dark)` to `var(--ux-primary)` gradient. Tags, title, summary, and buttons retain white/light treatment.

### 10.2 Background Tiers in Dark Mode

| Tier | Dark Mode Treatment |
|------|-------------------|
| N | `var(--color-surface)` dark mode value. |
| L | Flat darkened `var(--ux-primary-pale)`. Subtle, not overpowering. |
| P | Linear gradient from dark surface to darkened `var(--ux-primary-soft)`. |
| D | `var(--ux-primary-dark)` solid or deep gradient. White text. |

### 10.3 Cards and Components

Cards use `var(--color-surface-alt)` background in dark mode. Borders use `var(--color-border)` dark mode value. Card title text shifts to light neutral. Body text shifts to muted light.

### 10.4 Kickers and Themed Text

> **⚠️ MODIFIED 2026-07-10 — soft guidance replaced by a mandatory standard.** The previous wording ("may need lightened variants ... if the base color lacks sufficient contrast") was too soft. Under it the VTH v2 build only fixed Tier D and left Tiers N, L, and P with dark-mode contrast failures: red kickers, meta labels, HENEX Lens values, outline pills, and recipe labels all kept their light-mode brand colors and became nearly invisible on the darkened backgrounds. The rule below makes the fix systematic and required on every tier.

**The problem this solves.** A case page colors its accent elements with a fixed brand token, for example `.ux-case-page--X .ux-kicker { color: var(--ux-secondary) }`. Body text survives dark mode because it inherits the global `--theme-text`, which flips light. Anything hard-coded to a brand token does not flip, so on a darkened N, L, or P background a dark accent color fails contrast. Tier D already handles this because its white-text override covers the whole tier.

**Canonical ink tokens.** Accent text must resolve through two page-level "ink" tokens, not a raw brand token:

| Token | Light default | Used by |
|-------|---------------|---------|
| `--ux-accent-ink` | equals the page accent, usually `var(--ux-secondary)` | kickers, meta labels (CLIENT/ROLE/etc.), HENEX Lens values, recipe labels |
| `--ux-strong-ink` | equals `var(--ux-primary)` | outline pills (Skills chips), navy sub-block titles, recipe link text |

In light mode these default to the current brand colors, so light mode is visually unchanged. Every page then defines a dark override once, at the page-scope variable block:

```css
[data-theme=dark] .ux-case-page--X {
  --ux-accent-ink: color-mix(in srgb, var(--ux-secondary) 55%, white);
  --ux-strong-ink: color-mix(in srgb, var(--ux-primary) 62%, white);
}
```

Because kickers, meta, lens, pills, and recipe labels all read the ink token, one override fixes every downstream use across all four tiers at once. Do not re-lighten the raw `--ux-primary` or `--ux-primary-dark` tokens directly, they still drive the Tier D and Tier P backgrounds and must stay dark.

**Requirements.**

1. Accent text (kickers, meta, lens, recipe labels) must reach at least 4.5:1 against the darkened tier it sits on, in dark mode, on Tiers N, L, and P. Tier D keeps its existing brightened-red override.
2. Outline pills and navy sub-block titles use `--ux-strong-ink` and must reach at least 4.5:1 on their tier.
3. The exact lightening mix is tuned per page, since each page's accent hue differs. The `55%`/`62%` mixes above are the VTH starting point, verify with a contrast check on the page's own darkened tier values.
4. Verification is per page and per tier. A page is only compliant after a dark-mode screenshot pass confirms every accent element on N, L, and P is legible.

**Rollout.** This standard is global. VTH v2 adopts it first (see VTH spec Addendum B1). The other case pages that color accents with a brand token and have no dark override (rekraft, welnest, wso, and any built the same way) carry the same latent defect and must be migrated to the ink-token pattern as separate, individually verified tasks. Do not batch-edit all pages blind, each page's accent hue and tier backgrounds differ and each needs its own contrast check.

---

## 11. Responsive Behavior

Four breakpoints, consistent with the global system:

| Breakpoint | Behavior |
|-----------|----------|
| 1180px | Section headers collapse to single column. Card grids reduce to 2 columns. Process cards to 2 columns. |
| 900px | Hero padding reduces. Container width tightens. All multi-column layouts collapse to single column. |
| 640px | Card grids collapse to 1 column. Media pairs stack. |
| 520px | CTA buttons stack vertically. Tags reduce font size. |

---

## 12. Image and Media Rules

1. All images and videos use `--radius-media` (8px) border-radius.
2. No box-shadow on media elements.
3. Detailed deliverable images (e.g., roadmaps, flow diagrams) support click-to-enlarge (modal). Abstract concept sketches, DS component samples, and outcome hero images do not.
4. Prototypes that cannot be embedded may use a scrollable long-image format.
5. All media uses lazy loading (`loading="lazy"` and `decoding="async"`).

---

## 13. Engineering Contracts (NEW 2026-07-12)

Codified from the audit programme. These are build rules, not suggestions; every migration checklist verifies them.

### 13.1 Border custom-property contract (E19)
For the display-card family (`.ux-card`, `.ux-influence`, method/principle/nav card classes and future additions), `border-color` is declared in exactly two places, both in `global.css`: the C1 base rule (reads `var(--card-border, fallback)`) and the shared hover rule (reads `var(--card-border-hover, fallback)`). Every tier, mode, or page override assigns the variables and never declares `border-color` directly — custom properties inherit, so assignments may sit on section wrappers. Rationale: direct declarations at higher specificity silently defeat `:hover` (this bug shipped three times: C4, D2, E9). Temporary violations required by legacy files must be comment-tagged `INTEROP SHIM` with a scheduled removal.

### 13.2 CSS layer ownership (audit-2 S3)
`global.css` owns card chrome (border mechanics, radius, shadow, transition, hover triggers) and global tokens. `ux-case-study.css` owns the shared case template: layout patterns, typography, section systems, resting variable values. Per-case files own page tokens (Section 2.4 set) and genuinely bespoke components only. A rule that restyles a shared class outside its owning layer is a defect.

### 13.3 Breakpoint scoping (E15)
The sitewide ladder is 1180 / 900 / 640 / 520 only. Any page-level override of a shared responsive component (e.g. section-head column widths) must be wrapped in a `min-width` query so the global collapse rules survive on narrow screens.

### 13.4 Legacy-class sweep (E21)
Migrated markup must not retain previous-generation classes. A leftover class lets old CSS (often production files) re-enter the cascade and bypass the contracts — VTH's dead dark-mode hover came from exactly this. Every migration ends with a sweep; classes that must stay for shared styling get the shim treatment of 13.1.

### 13.5 Interaction-ink vividness (E20)
State-change colours on dark surfaces (hover borders, active indicators) must remain saturated. Desaturated white-mixes (the text ink formulas) are reserved for text, where weight and area carry them; at 1px they are invisible.

### 13.6 Chrome propagation (audit-2 G1)
`index.html` is the canonical header/footer source. Chrome edits are made there and propagated by copy to all pages; copies stay content-identical except `aria-current` and relative paths. The structural fix (single include) arrives with Phase 2 CMS.

### 13.7 Source convention (audit-2 G3)
Readable, pretty-printed source for any file touched from 2026-07-12 onward. No new minified single-line files.

### 13.8 Per-page build self-audit checklist (NEW 2026-07-14, graduated M-1 F-series)

Run after building or modifying any UX case page, before handing to Cafe. Every item failed here shipped as a real defect in the M-1 first build.

1. **Dark token completeness.** The `[data-theme=dark]` page block redefines ALL of: `--ux-primary-pale` (soft 46% into theme-bg), `--ux-tone-s`, `--ux-tone-p`, `--ux-emphasis`. A missing one silently renders its light value on dark.
2. **Emphasis depth.** Dark `--ux-emphasis` mixes into `--ux-primary-dark` (55% black derivation, Section 2.4), never into a raw mid-tone primary. Only near-black primaries (VTH) tolerate direct mixing.
3. **Contrast pass, per tier, both modes.** Check headings, body, kickers, figcaptions on every tier — especially any heading class that also appears in a later shared rule (cascade ties: the E2/E21/F1 bug class). New shared rules must beat later same-file rules by specificity, not position.
4. **Shared-class existence.** Every class referenced in the markup exists in a stylesheet that page actually loads. No vth2-* or other page-scoped classes (the E21 sweep includes classes borrowed from newer pages, not just legacy production classes).
5. **Process gateway format.** `ux-card-grid--four` + `ux-nav-card` + `ti-arrow-down` in every h3; cards horizontal on desktop.
6. **Recipe format.** Theme-coloured node tags placed directly under the primary recipe name (before the description), no `<small>` triad line, Secondary Recipe label present via `.ux-recipe-primary` + `.ux-secondary-recipe`.
7. **Reflection naming.** Cards are exactly Value / Learned / Next, prose only, no bullet lists inside cards.
8. **Kicker hierarchy.** Chapter kickers 1.0625rem (~17px), sub-block (`.ux-section-head`) kickers 0.72rem, Related Projects / HENEX Method Recipe kickers 0.8125rem (Section 6.1). For every chapter kicker on the page, confirm its actual parent container — do not assume `.ux-chapter-head`. If the container is `.ux-intro`, bare `.ux-copy`, bare `.ux-problem__grid`, bare `.ux-video-grid`, or plain `.container`, the kicker needs `class="ux-kicker ux-kicker--chapter"` explicitly, or it silently renders at the wrong size (F30).
9. **Image placement by enlargement suitability.** Wide, detail-rich images may run full width (modal-linked). Small diagrams, sketches and tall screenshots must not upscale: use side-by-side layout or `.ux-desc-aligned` width.
10. **No inline styles.** Zero `style=""` attributes; spacing via the shared utilities (`ux-subsection` 96 / `ux-content-gap` 56 / `ux-media-gap` 32).
11. **Tier ladder re-verified** after any structural change (adjacency rule), and the page's M-spec table updated to match.
12. **Shared-selector fix verified against every instance, not just the reported one.** When fixing a "should be consistent" bug via a shared CSS selector, grep every literal occurrence of the affected element across every affected page first, and note each one's actual parent container. Do not declare the fix complete until every instance in that inventory renders correctly — a selector that looks structurally correct can still miss instances sitting in a different container than assumed (F30).

---

## 14. Glossary

**IA:** Information architecture. How content is grouped, named, and connected.
**DS:** Design system. The collection of reusable styles, tokens, and components.
**Tier:** A background color level applied to a section for visual rhythm.
**Kicker:** A small uppercase label above a section title, indicating the section category.
**Primary color:** The main brand color for a case study project.
**Secondary color:** The accent color used for kickers and markers.
**Influence block:** A callout summarizing how a section's findings shaped the project.
**Read more:** A toggle button that reveals additional content within a section.
**Process navigation cards:** Four clickable cards in the Process section that link to Research, Design, Validation, and Delivery.
**Pill:** A fully rounded shape (99px border-radius) used for tags and chips.
