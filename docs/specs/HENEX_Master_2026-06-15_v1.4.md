# HENEX Website Master File

**Version:** 1.4
**Last updated:** 2026-06-15 (audit-02 completed, CSS inventory confirmed, orphan file removed)
**Replaces:** HENEX_Master_2026-06-15_v1.3.md

---

## 1. Project Identity

**Brand name:** HENEX
**Owner:** Cafe Yi (Tian Yi)
**Tagline:** Creating intuitive experiences across services, digital systems and built environments.
**Core concept:** HENEX describes the intersection of Human, Emotion and Nature. It is a practical framework for connecting service logic, emotional context and the digital or physical environments where people act.
**Contact:** cafeyee@gmail.com
**LinkedIn:** https://www.linkedin.com/in/cafeyi
**Instagram:** https://www.instagram.com/cafe.yi_photo/

---

## 2. Technology Stack and Deployment

**Phase 1 approach:** Static HTML, CSS, minimal vanilla JavaScript. No frameworks.
**Repository:** GitHub public repo, name `henex-website`
**Deployment:** Vercel Hobby (free). Auto-deploys on push to main branch.
**Large media storage:** Cloudflare R2 (free 10 GB tier, credit card required to activate)
**Future path:** See phase roadmap below.

### Phase roadmap

**Phase 1 — Static build (current)**
Static HTML, CSS, vanilla JS. Goal: all confirmed pages live on custom domain, passing basic accessibility check, no broken links.

**Phase 2 — CMS integration (planned)**
Trigger: content (case studies, Lab items) grows beyond comfortable manual editing, or you want to update content without touching code.
Options: Tina CMS (visual editing, writes to GitHub) or Decap CMS (simpler config, Vercel-compatible).
Exit criteria: able to add or edit a case study entirely through CMS UI without touching code files.

**Phase 3 — Database (conditional)**
Trigger: only if content scale, user interaction features, or dynamic data requirements exceed what a static CMS can handle.
Option: Supabase (PostgreSQL, free tier).
Possible use cases: contact form submissions, dynamic filtering across large content sets.
Decision: revisit after Phase 2. Do not initiate unless a specific need justifies it.

**Vercel settings:**
```
Framework Preset: Other
Root Directory: ./
Build Command: empty
Output Directory: empty or .
Install Command: empty
```

**Deployment status:** GitHub to Vercel static link confirmed working. Global shell preview passed all checks.

---

## 3. File Structure

```
/index.html
/about.html
/philosophy.html
/works.html
/lab.html
/projects/
    accessibility-support-hub.html     (ash) — complete, audited
    new-world-design-system.html       (nds) — complete, audited
    guangzhou-baiyun-t2.html           (bt2) — complete, audited
    voting-starter-kit.html            (vsk) — complete, audited
/assets/css/
    global.css                         (global: design tokens, reset, shared components)
    pages.css                          (shared: page hero, project cards, home/works/lab/about/philosophy sections)
    about.css                          (about page: hero, portrait, evidence, capability sections)
    philosophy.css                     (philosophy page: all sections and components)
    ux-case-study.css                  (UX case study template: shared across ash, nds, vsk)
    architecture-case.css              (architecture case study template: used by bt2)
    nds.css                            (NDS page: theme overrides and page-specific components)
    vsk.css                            (VSK page: theme overrides and page-specific components)
/assets/js/
    main.js                            (global: nav, theme toggle, back to top)
    case-interactions.js               (all case study pages: popover and image modal)
/assets/icons/ui/
    icon-sun.svg
    icon-moon.svg
    icon-arrow-up.svg
    icon-close.svg
/assets/icons/about/                   (9 confirmed icons)
/assets/icons/henex/                   (dimension and node icons)
/assets/img/about/
    cafe-yi-portrait.png
    cafe-yi-portrait-dark.png
/assets/img/projects/ash/
/assets/img/projects/nds/
/assets/img/projects/vsk/
/assets/img/projects/bt2/
/docs/
    specs/
    build-logs/
    fix-log/
        2026-06-15-modal-caption-selector-bug.md
    handover/
        2026-06-15_audit-handover.md
```

**Files confirmed deleted (2026-06-15):**
```
assets/js/ux-case-study.js
assets/js/architecture-case.js
assets/css/ux-system-case.css
```

### CSS layer notes
- `global.css` and `pages.css` are loaded by all root-level pages (index, about, philosophy, works, lab).
- Case study pages load `global.css` + their template CSS (`ux-case-study.css` or `architecture-case.css`) + any page-specific CSS.
- `about.css` and `philosophy.css` are page-specific and loaded only by their respective pages.
- `nds.css` and `vsk.css` are page-specific overrides loaded after `ux-case-study.css`.

---

## 4. Design System Summary

Full design system is in: `HENEX_Design_System_v1_3_About_Global_Update.md`
Visual reference (HTML viewer) is in: `HENEX_Design_System_Visual_Reference_v1_1.md`

### Fonts
- Heading: IBM Plex Sans
- Body: Inter

### Heading scale
- H1: `clamp(3rem, 6vw, 5.75rem)`
- H2: `clamp(2.25rem, 4.6vw, 4.3rem)`
- H3: `clamp(1.35rem, 2vw, 2rem)`
- Headings: letter-spacing `-0.026em`, tight line height

### HENEX semantic colours
- Human blue: `#3C8CF4`
- Emotion pink: `#FF5688`
- Nature green: `#31BB8E`
- Essay neutral: `#6B7280`

### Brand colours
- Brand primary: `#111827`
- Brand secondary: `#374151`

### Light theme surfaces
- Page background: `#F6F7F8`
- Main surface: `#FFFFFF`
- Soft surface: `#F0F3F5`
- Border: `#DDE3E7`
- Main text: `#202124`
- Soft text: `#4E5661`
- Muted text: `#737B86`

### Dark theme surfaces
- Page background: `#070809`
- Main surface: `#0B0C0D`
- Soft surface: `#121314`
- Main text: `#FFFFFF`
- Soft text: `rgba(255,255,255,0.74)`
- Card surface: `#0D0E10`

### Footer
- Light/default: `#151719`
- Dark mode: `#181A1D`
- Footer is always dark regardless of theme.

### Layout tokens
- Container: `1320px`
- Desktop gutter: `40px`
- Tablet gutter: `32px`
- Mobile gutter: `24px`
- Section padding: `96px` desktop, `56px` mobile
- Breakpoints: `900px` and `520px`

### Radius tokens
- Small: `12px`, Medium: `18px`, Large: `30px`, XL: `42px`, Full: `999px`

### Page accents
- Home: HENEX gradient
- About: Human blue
- Works: Nature green

### Accessibility rule
- Use dark text `#202124` on Human, Emotion, Nature accent backgrounds.
- White text is not safe on any of the three accent colours. Nature is especially unsafe.

---

## 5. Site Architecture and Page Inventory

### Navigation order
About, Philosophy, Works, Lab, Contact, theme toggle

### Page inventory

| Page | File | Status |
|---|---|---|
| Home | index.html | Complete, deployed, audited |
| About | about.html | Complete, deployed, audited |
| Philosophy | philosophy.html | Complete, deployed, audited |
| Works | works.html | Complete, deployed, audited |
| Lab | lab.html | Complete, placeholder, audited |
| Accessibility Support Hub | projects/accessibility-support-hub.html | Complete, audited |
| New World Design System | projects/new-world-design-system.html | Complete, audited |
| Voting Starter Kit | projects/voting-starter-kit.html | Complete, audited |
| Guangzhou Baiyun T2 | projects/guangzhou-baiyun-t2.html | Complete, audited |

### Featured Works layout on Home (confirmed)
```
Featured Work
[NZ Police Victim Hub — lead card]

Service Systems
[Accessibility Support Hub] [New World Design System] [Who's Singing OuTūīside?]

Built Systems
[Guangzhou Baiyun T2] [Shantou University and AYG Venue]
```

Note: NZ Police Victim Hub page does not exist. The lead card on Home links to a page that is not yet built.

---

## 6. JS Architecture (Confirmed 2026-06-15)

Two JS files only. All previous page-specific JS files have been deleted.

| File | Scope |
|---|---|
| main.js | Global: nav toggle, theme toggle, back to top |
| case-interactions.js | All case study pages: popover (UX and arch) and image modal |

### case-interactions.js rules
- Popover supports both `.ux-recipe-trigger` and `.arch-recipe-trigger`.
- Popover supports both `[data-recipe-popover]` and `[data-arch-recipe-popover]`.
- Modal activates only when `[data-ux-modal]` exists on the page.
- `modalCaption` must use `modal.querySelector('[data-modal-caption]')`, not
  `document.querySelector('[data-modal-caption]')`, to avoid matching trigger buttons.
- `modalImage` must use `modal.querySelector('.ux-modal__canvas img')`.
- fitImage() uses setTimeout(50ms) to ensure canvas has rendered before calculating scale.
- Do not clear `src` on modal close. Only clear style and alt.

### Adding image modal to arch pages
Add the modal HTML container and `[data-ux-modal]` attribute to the arch page.
Add trigger buttons with `data-modal-src`, `data-modal-title`, `data-modal-caption`.
No JS changes needed. case-interactions.js handles it automatically.

---

## 7. Page-Specific Confirmed Decisions

### Home
- Hero: Night full-bleed, left-aligned editorial, two CTA buttons
- Hero title: "Creating intuitive experiences across services, digital systems and built environments."
- Hero CTA: "View Works" and "Explore HENEX"
- Capability strip: three cards — Public-facing design, Research-led decisions, Complex delivery
- HENEX section: Option B, icon cards with node chips, soft CTA "Explore the framework" to philosophy.html
- About preview title: "From built environments to public services."
- Footer: always dark, graphite `#151719`

### About
- Sections: Hero, Evidence strip, Profile statement, Practice foundations, How I Work, Capability clusters, Experience thread, Markers of practice, Final CTA
- Evidence strip: 18+ years, 3.4M sqm, 10+ awards, 88.9% task success
- Portrait: light mode `cafe-yi-portrait.png`, dark mode `cafe-yi-portrait-dark.png`
- Practice foundations: no numeric labels (parallel concepts)
- How I Work: numeric labels (sequential process)
- Page accent: Human blue

### Philosophy
- Page is complete and deployed.
- Content and IA documented in: `2026-06-01_HENEX_Philosophy_Page_IA_Content_Structure_v1.md`
- Method Recipe card copy in: `2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.xlsx`

### UX Case Study Template (confirmed with ASH, NDS, VSK)
- CSS: `ux-case-study.css` + optional page-specific CSS (e.g. `nds.css`, `vsk.css`)
- JS: `case-interactions.js`
- Full spec: `2026-06-06_UX_Case_Study_Template_Spec.md`
- Public text must not use internal abbreviations (e.g. "ASH", "NDS", "VSK")
- Hero: large one-line title on desktop, identity image as overlay
- Meta: six compact blocks — Client, Role, Team, Timeline, Tools, HENEX Lens
- Modal: reads from `data-modal-src` only, never modifies original page images
- Internal project cards: theme colour hover behaviour
- Related Projects: neutral grey hover behaviour
- Trigger buttons must contain `<img>` tags, not bare text

### Architecture Case Study Template (confirmed with BT2)
- CSS: `architecture-case.css`
- JS: `case-interactions.js`
- Popover container uses `data-arch-recipe-popover`
- Triggers use `.arch-recipe-trigger`
- Modal: same HTML structure as UX pages, add `[data-ux-modal]` to enable

---

## 8. Global Component Rules

### Header
- Sticky, blurred theme background
- Mobile: full-screen menu, theme toggle after Contact

### Theme toggle
- Local SVG: `icon-sun.svg` (light) and `icon-moon.svg` (dark)
- Desktop: `38px × 38px`, Mobile: `52px × 52px`
- SVG images need `filter: invert(1)` for dark mode (does not inherit currentColor)

### Back to Top
- Fixed, lower right viewport
- Appears after scroll
- `46px × 46px` circular button, local SVG icon
- Respects reduced motion preference

### Icon system
- Storage: `assets/icons/ui/` and `assets/icons/about/`
- Style: simple linear, `2px` stroke weight
- Inline SVG for CSS colour control; `<img>` for stable display without colour needs

### Footer content
```
Cafe Yi
Creating evidence-informed design work across public services,
digital products and built environments.

Social: LinkedIn, Instagram
Explore: About, Philosophy, Works, Lab
Copyright © 2026 Cafe Yi. All rights reserved.
```

---

## 9. Audit Status (as of 2026-06-15)

### Completed — audit-01 (2026-06-15)
- index.html
- about.html
- philosophy.html
- works.html
- JS architecture review and consolidation
- accessibility-support-hub.html — HTML formatted, bugs fixed, case-interactions.js referenced

### Completed — audit-02 (2026-06-15)
- new-world-design-system.html — passed, no changes required
- voting-starter-kit.html — passed, no changes required
- guangzhou-baiyun-t2.html — passed, no changes required
- lab.html — passed, no changes required
- CSS audit — all files reviewed, ux-system-case.css deleted
- Cross-page consistency — nav, footer, theme toggle, pages.css coverage all confirmed

### Pending
- philosophy.css — media query format inconsistency and duplicate breakpoints. Low priority. Tidy on next edit.

### Audit checklist per page
For each new page, check:
- References `case-interactions.js`, not any deleted JS file
- All modal trigger `<button>` elements contain `<img>` tags, not bare text
- `data-modal-caption` is not used as a selector hook — only trigger buttons carry it
- Popover container has correct attribute (`data-recipe-popover` or `data-arch-recipe-popover`)
- No console errors
- Dark mode renders correctly
- Responsive at 900px and 520px

---

## 10. Key Decisions Log

| Date | Decision |
|---|---|
| 2026-05-29 | Phase 1 is Static First, Astro Ready. No framework in Phase 1. |
| 2026-05-29 | Repository name: henex-website. Vercel preset: Other, no build command. |
| 2026-05-30 | Hero: Night full-bleed, left-aligned, two CTA buttons. |
| 2026-05-30 | Brand colours: Graphite system. Primary `#111827`, Secondary `#374151`. |
| 2026-05-30 | Featured Works: 1 + 3 + 2 layout. Lead project: Victim Hub. |
| 2026-05-31 | About page accent: Human blue. |
| 2026-05-31 | Footer always dark graphite `#151719`, never pure black. |
| 2026-05-31 | Portrait: two assets (light and dark), no CSS inversion. |
| 2026-06-01 | Philosophy page IA and content structure confirmed. |
| 2026-06-03 | Philosophy page built and deployed. |
| 2026-06-06 | ASH page rebuilt as clean UX case template. |
| 2026-06-06 | Template renamed from ash-template to ux-case-study for future reuse. |
| 2026-06-06 | UX Case Study Template Spec documented and added to RAG. |
| 2026-06-06 | Architecture case studies need a separate template. UX template not suitable. |
| 2026-06-06 | Local folder structure confirmed. |
| 2026-06-06 | Working Rules merged into Master File. |
| 2026-06-15 | JS consolidated into two files: main.js and case-interactions.js. |
| 2026-06-15 | ux-case-study.js and architecture-case.js deleted. |
| 2026-06-15 | Bug fixed: modalCaption must use modal.querySelector(), not document.querySelector(). |
| 2026-06-15 | Bug fixed: arch popover position now flips above trigger when space below is insufficient. |
| 2026-06-15 | Rule established: data- attribute names on triggers must not be reused as modal internal selectors. |
| 2026-06-15 | CSS inventory confirmed. pages.css scope: shared cross-page components for root-level pages. |
| 2026-06-15 | ux-system-case.css deleted. Orphan file with no HTML references. |
| 2026-06-15 | NDS and VSK use page-specific CSS files (nds.css, vsk.css) for theme overrides. Pattern confirmed. |
| 2026-06-15 | victim-hub.html confirmed non-existent. Page not yet built. |

---

## 11. Bug Fix Log

### 2026-06-15 — Modal image disappears after closing

File: assets/js/case-interactions.js
Symptom: After closing the image modal, the roadmap image on the page
disappeared and was replaced by alt text.

Root cause: `querySelector('[data-modal-caption]')` matched the trigger
`<button data-modal-caption="...">` instead of the modal inner `<p>`.
Setting textContent on the button destroyed its inner `<img>`.

Fix:
```javascript
// Wrong
const modalCaption = document.querySelector('[data-modal-caption]');

// Correct
const modalCaption = modal ? modal.querySelector('[data-modal-caption]') : null;
```

Rule: Never use document.querySelector() for modal internal elements.
Always use modal.querySelector() to scope the search inside the modal container.

### 2026-06-15 — Arch popover covers pill buttons

File: assets/js/case-interactions.js
Symptom: On arch case study pages, the recipe popover appeared over the
trigger buttons instead of below them.

Root cause: Position calculation forced popover into a fixed viewport range,
which pushed it upward when the pill row was near the bottom of the screen.

Fix: Calculate available space below before deciding direction.
```javascript
const spaceBelow = window.innerHeight - rect.bottom;
const topPos = spaceBelow >= popoverHeight + 16
  ? rect.bottom + 10
  : rect.top - popoverHeight - 10;
```

---

## 12. Page QA Checklist

Run this checklist before every page is committed and pushed to GitHub.

### Responsive layout
1. Desktop 1440px — layout, spacing, typography all correct.
2. Tablet 900px — no broken grid, no overflow.
3. Mobile 520px — readable, no horizontal scroll, touch targets large enough.
4. Mobile 375px — confirm nothing breaks at smaller sizes.

### Accessibility
1. WCAG AA colour contrast on all text elements, checked in light and dark mode.
2. Keyboard navigation: tab order logical, all interactive elements reachable.
3. Visible focus states on all interactive elements.
4. Skip link present and functional.
5. All meaningful images have descriptive alt text.
6. Decorative images use empty alt text and `aria-hidden="true"`.
7. Semantic HTML headings in correct order (h1 → h2 → h3).
8. Modal uses `role="dialog"` and `aria-modal="true"`, focus returns to trigger on close.

### Functionality
1. All internal links resolve correctly.
2. All external links (LinkedIn, Instagram, mailto) work.
3. Theme toggle switches light and dark correctly on this page.
4. Modal opens and closes without affecting original page images.
5. Back to Top button appears and functions.
6. Mobile nav opens, closes, and Escape key closes it.

### Code hygiene
1. Page references `case-interactions.js`, not any deleted JS file.
2. All modal trigger buttons contain `<img>` tags, not bare text.
3. No inline CSS.
4. No console errors in browser dev tools.
5. Vercel deployment succeeds after push.

### Content
1. No internal abbreviations in public-facing text (e.g. no "ASH", "NDS", "VSK", "BT2").
2. Copyright year is correct.
3. No placeholder text or dummy content visible.

---

## 13. Code Rules

### General
1. No inline CSS.
2. No CSS frameworks. No JavaScript frameworks.
3. Responsive at 900px and 520px.
4. Code comments in English.
5. CSS variable names, filenames, and folder names in English.
6. All folder and file names lowercase with hyphens.
7. Use semantic HTML.
8. Avoid unnecessary JavaScript.

### Astro-ready principles
1. Use consistent component-like class names across all pages.
2. Do not create random one-off class names.
3. Keep header and footer structure identical across all pages.
4. Keep project card structure consistent.
5. Keep case study section structure consistent.
6. Keep all global visual rules in shared CSS files.

### JS safety rules
1. Never use `document.querySelector()` for elements inside a modal or popover.
   Always scope with `container.querySelector()`.
2. Never share `data-` attribute names between trigger elements and display targets
   if both are queried by attribute selector.
3. Always check that modal trigger `<button>` elements contain `<img>` tags.
   Bare text inside buttons will display as alt text if JS sets textContent on them.

---

## 14. RAG File Inventory

Keep these files. Remove all others.

| File | Category | Status |
|---|---|---|
| HENEX_Master_2026-06-15_v1.4.md (this file) | A. Master | Current |
| HENEX_Design_System_v1_3_About_Global_Update.md | B. Specialist | Current |
| HENEX_Design_System_Visual_Reference_v1_1.md | B. Specialist | Current |
| 2026-06-06_UX_Case_Study_Template_Spec.md | B. Specialist | Current |
| HENEX_IA_Content_Workbook_v1.xlsx | B. Specialist | Current |
| AI_Dev_Workflow_v1.2_EN.md | B. Specialist | Current |
| HENEX_Framework_Theory_v1.0.md | B. Specialist | Current |
| HENEX_Philosophy_Page_IA_v2.0.md | B. Specialist | Current |

**Remove from RAG:**
- HENEX_Master_2026-06-15_v1.3.md (replaced by this file)

---

## 15. Local Folder Structure

```
HENEX/
│
├── 01_website/                          ← GitHub repo local clone
│   ├── index.html
│   ├── about.html
│   ├── philosophy.html
│   ├── works.html
│   ├── lab.html
│   ├── projects/
│   │   ├── accessibility-support-hub.html
│   │   ├── new-world-design-system.html
│   │   ├── voting-starter-kit.html
│   │   └── guangzhou-baiyun-t2.html
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   ├── icons/
│   │   └── img/
│   └── docs/
│       ├── specs/
│       ├── build-logs/
│       ├── fix-log/
│       └── handover/
│
├── 02_project-docs/                     ← AI working documents, synced to Perplexity RAG
│   ├── HENEX_Master_[YYYY-MM-DD]_v[x].md
│   ├── design-system/
│   ├── templates/
│   ├── content/
│   ├── AI_Dev_Workflow_v1.2_EN.md
│   └── AI_Dev_Workflow_v1.2_CN.md
│
└── 03_assets-source/                    ← Design source files, local only
    ├── figma-exports/
    ├── photos/
    └── icons-source/
```
