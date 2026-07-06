# HENEX Website Master File

**Version:** 1.5
**Last updated:** 2026-07-06 (DS Convergence Phase 2 R1+R2 completed — section component audit, shared layout patterns, per-project CSS cleanup)
**Replaces:** HENEX_Master_2026-06-15_v1.4.md

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
**Repository:** GitHub public repo, `cafeyee/henex`
**Deployment:** Vercel Hobby (free). Auto-deploys on push to `main`. Preview deploys on push to any branch, including `ds-convergence`.
**Large media storage:** Cloudflare R2 (free 10 GB tier). CDN base URL: `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/`
**Password protection:** `password.html` + `middleware.js` gate production; preview environment bypasses via `VERCEL_ENV === 'preview'` check in `middleware.js`.
**Future path:** See phase roadmap below (unchanged from v1.4).

### Phase roadmap

**Phase 1 — Static build (current)**
Static HTML, CSS, vanilla JS. Goal: all confirmed pages live on custom domain, passing basic accessibility check, no broken links.

**Phase 2 — CMS integration (planned)**
Trigger: content grows beyond comfortable manual editing.
Option: Tina CMS (visual editing, writes to GitHub).
Exit criteria: able to add or edit a case study entirely through CMS UI without touching code files.

**Phase 3 — Database (conditional)**
Trigger: only if content scale or dynamic features exceed static CMS capability.
Option: Supabase (PostgreSQL, free tier).
Decision: revisit after Phase 2.

**Vercel settings:** unchanged from v1.4 (Framework Preset: Other, no build command).

---

## 3. File Structure (current, 2026-07-06)

```
/index.html
/about.html
/philosophy.html
/works.html
/works-chronology.html
/lab.html
/password.html
/middleware.js

/works/
    UX case studies (8):
    accessibility-support-hub.html     (ASH)
    new-world-design-system.html       (NDS)
    voting-starter-kit.html            (VSK)
    victim-hub.html                    (VTH)
    studier.html                       (STD)
    rekraft.html                       (RKT)
    welnest.html                       (WST)
    whos-singing-outuiside.html        (WSO)

    Architecture case studies (7):
    guangzhou-baiyun-t2.html           (BT2)
    great-bay-area-science-hall.html
    guangzhou-football-park.html
    nanning-wuxu-t3.html
    oppein-headquarters.html
    poly-yuzhu.html
    shantou-ayg.html

/assets/css/
    global.css              (design tokens, reset, nav, buttons, footer, card base classes C1-C5, spacing scale)
    pages.css               (Home, Works, Lab, About, Philosophy shared page components)
    about.css               (About page specific)
    philosophy.css          (Philosophy page specific)
    chronology.css          (Works Chronology page specific)
    password.css            (password gate page)
    ux-case-study.css       (UX case study template — shared across all 8 UX pages; contains shared
                             layout patterns: feedback grid/card, icon card, gallery, swatch grid,
                             card stack, component row/stack, scroll viewport, scope block, chip flow,
                             showcase figure, section background tiers --tint/--accent/--emphasis)
    architecture-case.css   (Architecture case study template — shared across all 7 arch pages)
    vth.css, ash.css, std.css, nds.css, rkt.css, vsk.css, wso-case.css, wst.css
                             (per-project theme tokens + genuinely unique content layouts only —
                             see Section 4a for the DS Convergence cleanup applied 2026-07-06)

/assets/js/
    main.js                 (global: nav, theme toggle, back to top)
    case-interactions.js    (all case study pages: popover and image modal)

/assets/icons/ui/, /assets/icons/about/, /assets/icons/henex/
/assets/img/about/, /assets/img/projects/<project-code>/
    (most project images now served from Cloudflare R2, not local assets — see CDN base URL above)

/docs/
    specs/          (master file, template specs, section audit)
    handover/        (execution tracker, phase handover docs)
    ia/              (content mapping documents)
    visual-reference/ (DS Visual Reference v2 HTML mood board)
    build-logs/
    fix-log/
```

### CSS layer notes (updated)

- `global.css` and `pages.css` are loaded by all root-level pages.
- Case study pages load `global.css` + their template CSS (`ux-case-study.css` or `architecture-case.css`) + page-specific CSS.
- Per-project CSS files (`vth.css`, `ash.css`, etc.) now follow the DS Convergence contract: they define **theme colour tokens** (`--ux-theme`, `--ux-dark`, `--ux-soft`, `--ux-pale`, plus any secondary accent), **hero overrides** where needed, and **genuinely unique content layouts** only. Any layout pattern that repeats across 2+ projects has been migrated to a shared class in `ux-case-study.css` — see Section 4a.
- `ash.css` and `std.css` are the target-state examples: near-zero custom layout classes, theme tokens only.

---

## 4. Design System Summary

Full design system reference: `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` (case study layer) and `docs/visual-reference/HENEX_Design_System_Visual_Reference_v2.html` (visual mood board, approved Phase 1).

### Fonts
- Heading: IBM Plex Sans
- Body: Inter

### Heading scale
- H1: `clamp(3rem, 6vw, 5.75rem)`
- H2: `clamp(2.25rem, 4.6vw, 4.3rem)` (global pages/architecture) — UX case study body H2 uses a narrower `clamp(1.55rem, 2.4vw, 2.45rem)` inside `.ux-copy`/`.ux-intro`, but `.ux-related h2` matches the architecture size for cross-template consistency (fixed 2026-07-06)
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
- Section padding: `96px` desktop, less on mobile
- Breakpoints (four official, confirmed D-level): `1180px` (complex content pages, wide-layout collapse), `900px` (tablet, nav collapse), `640px` (small tablet/landscape phone), `520px` (mobile)

### Radius tokens
- Small: `12px`, Medium: `18px`, Large: `30px`, Full: `999px`
- `--radius-xl` (42px) removed per D-level decision in Phase 2; large card variants use `--radius-lg`.

### Spacing token scale (D16, added Phase 2)
`--space-2xs: 4px`, `--space-xs: 8px`, `--space-sm: 16px`, `--space-md: 24px`, `--space-lg: 32px`, `--space-xl: 48px`, `--space-2xl: 72px`

### Card system (C1-C5, confirmed Phase 2)
- C1 Standard Card, C2 Media Card, C3 Quote Card, C4 Nav Card (project/related/category), C5 Callout Block.
- Hover rule (D01/D04): display cards (informational, no navigation) get border-color darken only, no lift. Navigable cards (link to another page) get -4px lift + shadow upgrade. This distinction is enforced globally in `global.css`.

### Page accents
- Home: HENEX gradient
- About: Human blue
- Works: Nature green

### Accessibility rule
- Use dark text `#202124` on Human, Emotion, Nature accent backgrounds. White text is not safe on any of the three accent colours.

---

## 4a. DS Convergence — Shared Layout Pattern Catalog (added 2026-07-06)

Per the Case Study Template Spec (`docs/specs/HENEX_Case_Study_Template_Spec_v1.md`), UX case study pages follow a **mixed DS approach**: global tokens govern typography and components, `ux-case-study.css` governs editorial layout and shared component patterns, and per-project CSS is restricted to theme colours and genuinely unique content.

Cafe's explicit direction (confirmed 2026-07-05): minimise the number of distinct layout patterns across projects. Per-project CSS should describe *theme colour and content differences only*, not structural variation. NDS (59 custom classes) and ASH (0 custom classes) render structurally identical layouts — the difference was never justified layout need, only unmigrated duplicate CSS.

### Section background tiers (Template Spec B3)

| Class | Tier | Use |
|-------|------|-----|
| `.ux-section` | Base | Transparent, any section |
| `.ux-section--tint` | Tier 3 Neutral | Alternating light sections |
| `.ux-section--accent` | Tier 2 Accent | Reflection/retro sections |
| `.ux-section--emphasis` | Tier 1 Emphasis | Solution, outcome, delivery — dark bg via `--ux-dark` |

### Shared layout components (all in `ux-case-study.css`)

| Class | Pattern |
|-------|---------|
| `.ux-feedback-grid` / `.ux-feedback-card` / `.ux-feedback-icon` | 3-col quote card row with circular icon |
| `.ux-icon-card` / `.ux-icon-card__icon` | Icon + title + description card (principles, findings, insights) |
| `.ux-gallery` / `--two` / `--single` | 2/3-col image grid |
| `.ux-swatch-grid` / `--four` / `.ux-swatch` | Colour palette display |
| `.ux-card-stack` | Vertical padded card list |
| `.ux-component-row` / `.ux-component-stack` | L3 variant for component documentation (text left, demo right) |
| `.ux-scroll-viewport` | Scrollable preview container (microsite/prototype) |
| `.ux-scope-block` | Wide padded scope/callout block |
| `.ux-chip-flow` | Horizontal tag chip row |
| `.ux-showcase-figure` | Borderless image with shadow (outcome/mockup) |
| `.ux-related-card` | Related project nav card — background is `--theme-surface` (pure white), matching `.arch-related-card` (unified 2026-07-06, previously used `--theme-surface-soft` which blended into the page background) |

### Per-project CSS contract (post-cleanup)

Per-project CSS files should contain only:
1. Theme colour variables (`--ux-theme`, `--ux-dark`, `--ux-soft`, `--ux-pale`, any secondary accent)
2. Hero overrides (background position, custom gradient)
3. Swatch colour values (unique per project's own DS/colour section)
4. Genuinely unique content presentation that does not repeat elsewhere (e.g. NDS typography table, WSO chapter illustrations)

### Known gotcha: `--ux-theme` used for both headings and shared component tinting

Some projects (WST, WSO) set `--ux-theme` to a neutral dark colour (for heading text) rather than their brand accent colour. Shared components like `.ux-feedback-card` derive their gradient tint from `--ux-theme`, so on these projects the card rendered a muddy grey tint instead of the brand colour. Fixed 2026-07-06 by adding project-specific overrides that source the feedback card's background/icon/hover from the actual brand accent variable (`--ux-accent` for WST, `--wso-orange` for WSO) instead of `--ux-theme`. If a new project defines `--ux-theme` as a neutral colour, apply the same override pattern.

### Known gotcha: `<blockquote>` default margin

`.ux-feedback-card` is a `<blockquote>` element. Browsers apply a default `margin: 1em 40px`, which — if not reset — visually shrinks the card inside its grid cell and makes the whole feedback row look narrower/more gapped than sibling grids using `<article>` (e.g. `.vsk-finding-grid`). `ux-case-study.css` now explicitly sets `margin: 0` on `.ux-feedback-card`. Any new blockquote-based card pattern must do the same.

### R1/R2 cleanup log (Phase 2, 2026-07-05 to 2026-07-06)

- **NDS**: 741 → 449 lines. 19 `system-*` classes migrated to shared `ux-*` equivalents (feedback, gallery, swatch, component row/stack, scroll viewport, card stack, showcase figure, scope block, chip flow). `.system-theme-ds` now overrides `--ux-theme`/`--ux-dark`/`--ux-soft` locally so purple DS sections inherit correctly through the shared classes instead of needing separate purple-specific rules.
- **VSK**: removed duplicate `ux-feedback-*`/`ux-swatch-*` definitions (now inherited from shared classes). `vsk-principle-card`/`vsk-principle-icon` migrated to `ux-icon-card`/`ux-icon-card__icon`.
- **RKT**: removed duplicate `ux-feedback-*` definitions; kept a 2-column grid override (`.ux-feedback-grid` in RKT context uses `repeat(2, ...)` instead of the shared 3-column default).
- **WSO**: removed duplicate `ux-feedback-*` definitions; added brand-accent override for the muddy-tint gotcha above.
- **WST**: removed duplicate `ux-feedback-*` definitions; added brand-accent override for the same gotcha.
- **STD, ASH**: already at target state, zero changes needed.

---

## 5. Site Architecture and Page Inventory

### Navigation order
About, Philosophy, Works, Lab, Contact, theme toggle

### Page inventory (current, 2026-07-06)

| Page | File | Status |
|---|---|---|
| Home | index.html | Complete, deployed |
| About | about.html | Complete, deployed |
| Philosophy | philosophy.html | Complete, deployed |
| Works | works.html | Complete, deployed |
| Works Chronology | works-chronology.html | Complete, deployed |
| Lab | lab.html | Placeholder |
| Password gate | password.html | Complete, gates production only |

### UX Case Studies (8, all live)

| Project | File | Theme colour(s) |
|---|---|---|
| Victim Hub (VTH) | works/victim-hub.html | Navy `#00164B` + red `#B30D0D` |
| Accessibility Support Hub (ASH) | works/accessibility-support-hub.html | Teal `#13838A` |
| Studier (STD) | works/studier.html | Blue `#315CF6` |
| New World Design System (NDS) | works/new-world-design-system.html | Red `#E11A2C` + purple `#571060` (DS section) |
| ReKraft (RKT) | works/rekraft.html | Deep teal green `#187A62` |
| Voting Starter Kit (VSK) | works/voting-starter-kit.html | Orange `#FF6000` |
| Welnest (WST) | works/welnest.html | Neutral dark `#202124` + accent orange `#FB8A00` |
| Who's Singing OuTūīside? (WSO) | works/whos-singing-outuiside.html | Neutral dark `#30352E` + accent orange `#FF7701` |

### Architecture Case Studies (7, all live)

| Project | File |
|---|---|
| Guangzhou Baiyun T2 (BT2) | works/guangzhou-baiyun-t2.html |
| East Campus of Shantou University and AYG Venue | works/shantou-ayg.html |
| Oppein Headquarters Building | works/oppein-headquarters.html |
| Nanning Wuxu International Airport Planning and Terminal 3 | works/nanning-wuxu-t3.html |
| Guangzhou Football Park | works/guangzhou-football-park.html |
| Great Bay Area Science Hall | works/great-bay-area-science-hall.html |
| Poly Yuzhu High-Rise Apartment and Commercial Street | works/poly-yuzhu.html |

Note: v1.4 recorded "victim-hub.html confirmed non-existent." This is now stale — VTH is live but is the designated Phase 4/5 rebuild target once DS Convergence Phase 2 and Phase 3 (VTH Content Mapping) both complete. See `docs/handover/HENEX_DS_IA_Convergence_Spec_v1_1.md`.

---

## 6. JS Architecture

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

## 7. DS Convergence Project — Status and References

A multi-phase design system and IA convergence project is in progress on branch `ds-convergence`. This supersedes ad hoc per-project styling with a unified case study template.

**Master spec:** `docs/handover/HENEX_DS_IA_Convergence_Spec_v1_1.md` — full phase chain, gate conditions, decision record (D01-D17).
**Template spec:** `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` — the mixed DS direction (Part A: global decisions, Part B: case study template decisions, Part C: execution plan).
**Execution tracker:** `docs/handover/DS_Convergence_Execution_Tracker.md` — live status of every phase and sub-task.
**Section audit:** `docs/specs/DS_Section_Component_Audit_v1.md` — shared pattern catalog referenced in Section 4a above.

### Phase status (as of 2026-07-06)

| Phase | Task | Status |
|-------|------|--------|
| 1 | DS Visual Reference v2 | Complete, approved |
| 2 | DS Implementation | R1 (section audit), R2 (per-project cleanup), R3 (this document) complete. R4 (architecture pages DS adapt) not started. |
| 3 | VTH Content Mapping | Draft exists (`docs/ia/VTH_Content_Mapping_v1.md`), not yet formally reviewed/approved |
| 4 | VTH v2 Preview | Not started, blocked by Phase 2 + 3 |
| 5 | VTH v2 Integration | Not started |
| 6 | ASH Retrofit | Not started |
| 7 | STD Retrofit | Not started |

### Key decisions since v1.4 (see full record in Convergence Spec Section 9, D01-D17)

- D07/D17: UX case hero uses a fixed dark gradient, independent of site light/dark theme toggle. VTH's hero gradient became the model implementation.
- D16: Global spacing token scale added (see Section 4 above).
- Cafe's 2026-07-05 direction (not yet a numbered D-decision, should be added to the record): minimise per-project layout variation aggressively. Per-project CSS = theme colour + content differences only, never structural layout differences. This directly produced the Section 4a shared pattern catalog and R1/R2 cleanup.

---

## 7a. Page-Specific Confirmed Decisions (carried forward from v1.4, still authoritative)

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

### UX Case Study Template
- CSS: `ux-case-study.css` + optional page-specific CSS (e.g. `nds.css`, `vsk.css`)
- JS: `case-interactions.js`
- Full spec: `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` (supersedes the v1.4-era `2026-06-06_UX_Case_Study_Template_Spec.md`)
- Public text must not use internal abbreviations (e.g. "ASH", "NDS", "VSK", "WST", "WSO", "VTH", "STD", "RKT")
- Hero: fixed dark gradient (independent of site theme toggle, D07/D17), large one-line title on desktop
- Meta: six compact blocks — Client, Role, Team, Timeline, Tools, HENEX Lens
- Modal: reads from `data-modal-src` only, never modifies original page images
- Internal project cards: theme colour hover behaviour
- Related Projects: neutral grey hover behaviour on the border only (background is pure white, see Section 4a)
- Trigger buttons must contain `<img>` tags, not bare text

### Architecture Case Study Template
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
- Tabler Icons via CDN webfont also in use across case study pages (D-level decision, Phase 2) — see Case Study Template Spec Part A4. HENEX-specific icons (dimension, node, logo) remain custom assets, not replaced by Tabler.

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

## 9. Audit Status

### Completed — audit-01, audit-02 (2026-06-15)
See v1.4 for full detail. All root-level pages and the first 3 UX/1 arch case study passed.

### Completed — DS Convergence Phase 2 R1+R2 (2026-07-05 to 2026-07-06)
- Section component audit across all 8 UX case studies — see Section 4a.
- Per-project CSS cleanup — NDS, VSK, RKT, WSO, WST. STD and ASH confirmed already clean.
- Visual QA round: related-card background/heading unification, feedback card proportion fix, blockquote margin bug fix — all confirmed resolved by Cafe.

### Pending
- Phase 2 R4: architecture pages DS adapt (BT2 + new arch pages use `architecture-case.css`, not yet audited against the same "minimise variation" principle applied to UX pages in R1/R2).
- Phase 3: VTH Content Mapping formal review.
- philosophy.css media query format inconsistency (carried over from v1.4, still low priority).

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
| 2026-06-15 | ux-case-study.js and architecture-case.js deleted (orphan files, no HTML references). |
| 2026-06-15 | Bug fixed: modalCaption must use modal.querySelector(), not document.querySelector(). |
| 2026-06-15 | Bug fixed: arch popover position now flips above trigger when space below is insufficient. |
| 2026-06-15 | Rule established: data- attribute names on triggers must not be reused as modal internal selectors. |
| 2026-06-15 | CSS inventory confirmed. pages.css scope: shared cross-page components for root-level pages. |
| 2026-06-15 | ux-system-case.css deleted. Orphan file with no HTML references. |
| 2026-06-15 | NDS and VSK use page-specific CSS files (nds.css, vsk.css) for theme overrides. Pattern confirmed. |
| 2026-06-15 | victim-hub.html confirmed non-existent at that time. Page not yet built. (Superseded — see Section 5 note: VTH is now live and is the Phase 4/5 rebuild target.) |
| 2026-07-03 | Case Study Template Spec confirmed: mixed DS approach (global/template/per-case three-layer model). |
| 2026-07-04 | DS Convergence Handover documented: Phase 2 ~75% complete at that point (tokens, hero, cards, spacing done; section audit and per-project cleanup remained). |
| 2026-07-05 | Section component audit completed. Cafe's direction confirmed: aggressively unify layout patterns; per-project CSS should only vary theme colour and content, not structure. |
| 2026-07-05 | Shared pattern catalog implemented in `ux-case-study.css` (additive only, no existing classes broken). |
| 2026-07-06 | Per-project CSS cleanup (R2) completed for NDS, VSK, RKT, WSO, WST. |
| 2026-07-06 | Visual QA: unified `.ux-related-card`/`.arch-related-card` background to pure white; unified `.ux-related h2` size to match architecture pages; fixed feedback card proportions (removed forced min-height, tightened padding/gap); fixed WST/WSO muddy gradient bug (`--ux-theme` vs brand accent); fixed blockquote default margin bug on feedback cards. |
| 2026-07-06 | Naming correction: the Welnest project is abbreviated **WST**, not "WEL". Use WST consistently in all documentation and discussion. |

---

## 11. Bug Fix Log (continued from v1.4)

### 2026-07-06 — Feedback card grid appears narrower than sibling grids

File: `assets/css/ux-case-study.css`
Symptom: `.ux-feedback-grid` cards looked visually narrower and more gapped than `.vsk-finding-grid` cards in the same container, despite identical `grid-template-columns` and container width.

Root cause: `.ux-feedback-card` is a `<blockquote>` element. Browser default user-agent stylesheet applies `margin: 1em 40px` to blockquote, which was never reset. This silently indented every card ~40px on each side inside its grid cell. `.vsk-finding-grid` uses `<article>`, which has no default margin, so it did not show the bug.

Fix:
```css
.ux-feedback-card {
  margin: 0; /* reset blockquote default */
  ...
}
```

Rule: Any new shared card pattern using a semantic element with a non-zero UA default margin (`blockquote`, `figure`, `dl`, etc.) must explicitly reset margin in the shared class definition.

### 2026-07-06 — Feedback card gradient reads as muddy grey on WST/WSO

File: `assets/css/wst.css`, `assets/css/wso-case.css`
Symptom: the shared `.ux-feedback-card` gradient/icon tint, which derives its colour from `--ux-theme`, rendered as a dull grey wash on Welnest and Who's Singing OuTūīside pages instead of a warm brand-colour tint.

Root cause: both projects set `--ux-theme` to a neutral dark colour (used correctly for heading text) rather than their actual brand accent colour. The shared feedback card assumes `--ux-theme` is the brand accent.

Fix: added project-scoped overrides sourcing the feedback card's background/icon/hover colour from the real accent variable (`--ux-accent` for WST, `--wso-orange` for WSO) instead of `--ux-theme`.

Rule: when a project's `--ux-theme` is a neutral/dark colour rather than a saturated brand colour, any shared component that assumes `--ux-theme` is the accent needs a project-scoped colour override.

---

## 12. Page QA Checklist

Run this checklist before every page is committed and pushed to GitHub.

### Responsive layout
1. Desktop 1440px — layout, spacing, typography all correct.
2. Complex content pages (case study, architecture case) 1180px — wide-layout collapse, no broken grid.
3. Tablet 900px — no broken grid, no overflow.
4. Mobile 640px — no broken grid, readable.
5. Mobile 520px — readable, no horizontal scroll, touch targets large enough.

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
6. Per-project CSS contains only theme tokens, hero overrides, and genuinely unique content layout — no duplicated shared-pattern definitions (see Section 4a contract).

### Content
1. No internal abbreviations in public-facing text (e.g. no "ASH", "NDS", "VSK", "BT2", "WST", "WSO", "VTH", "STD", "RKT").
2. Copyright year is correct.
3. No placeholder text or dummy content visible.

---

## 13. Code Rules

### General
1. No inline CSS.
2. No CSS frameworks. No JavaScript frameworks.
3. Responsive at 1180px, 900px, 640px, and 520px (four official breakpoints).
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
7. Any layout pattern used by 2+ projects belongs in `ux-case-study.css` or `architecture-case.css`, not duplicated per-project (DS Convergence contract, Section 4a).

### JS safety rules
1. Never use `document.querySelector()` for elements inside a modal or popover.
   Always scope with `container.querySelector()`.
2. Never share `data-` attribute names between trigger elements and display targets
   if both are queried by attribute selector.
3. Always check that modal trigger `<button>` elements contain `<img>` tags.
   Bare text inside buttons will display as alt text if JS sets textContent on them.

---

## 14. RAG File Inventory (updated 2026-07-06)

Keep these files. Remove all others.

| File | Category | Status |
|---|---|---|
| HENEX_Master_2026-07-06_v1.5.md (this file) | A. Master | Current |
| HENEX_DS_IA_Convergence_Spec_v1_1.md | B. Specialist | Current |
| HENEX_Case_Study_Template_Spec_v1.md | B. Specialist | Current |
| DS_Convergence_Execution_Tracker.md | B. Specialist | Current |
| DS_Section_Component_Audit_v1.md | B. Specialist | Current |
| HENEX_Design_System_Visual_Reference_v2.html | B. Specialist | Current |
| HENEX_IA_Content_Workbook_v2.md | B. Specialist | Current |
| HENEX_Case_Study_Voice_and_Narrative_Rules.md | B. Specialist | Current |
| HENEX_Framework_Theory_v1.0.md | B. Specialist | Current |
| VTH_Content_Mapping_v1.md | B. Specialist | Draft, pending review |

**Remove from RAG:**
- HENEX_Master_2026-06-15_v1.4.md (replaced by this file)
- HENEX_Design_System_Visual_Reference_v1_1.md (replaced by v2)
- 2026-06-06_UX_Case_Study_Template_Spec.md (replaced by HENEX_Case_Study_Template_Spec_v1.md)
- HENEX_IA_Content_Workbook_v1.xlsx (replaced by v2)

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
│   ├── works-chronology.html
│   ├── lab.html
│   ├── password.html
│   ├── middleware.js
│   ├── works/
│   │   ├── (8 UX case studies)
│   │   └── (7 architecture case studies)
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   ├── icons/
│   │   └── img/
│   └── docs/
│       ├── specs/
│       ├── handover/
│       ├── ia/
│       ├── visual-reference/
│       ├── build-logs/
│       └── fix-log/
│
├── 02_project-docs/                     ← AI working documents, synced to RAG
│   ├── HENEX_Master_[YYYY-MM-DD]_v[x].md
│   ├── design-system/
│   ├── templates/
│   ├── content/
│   └── AI_Dev_Workflow docs
│
└── 03_assets-source/                    ← Design source files, local only
    ├── figma-exports/
    ├── photos/
    └── icons-source/
```
