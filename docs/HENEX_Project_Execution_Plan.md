# HENEX Website — Project Execution Plan

**Version:** 1.0
**Created:** 2026-07-06
**Last updated:** 2026-07-06
**Owner:** Cafe Yi
**Role:** This is the single source of truth for project progress. Consult this document at the start of every session. Update it when any task passes verification.

---

## How to Use This Document

This plan covers the entire HENEX portfolio website lifecycle, from initial build through design system convergence and future enhancements. Every task has a status marker. At the start of each session, read the "Current Focus" section to know what to work on next. When a task is verified and approved, mark it DONE with a completion date. Do not skip ahead.

**Status markers:** DONE, IN PROGRESS, BLOCKED, PENDING, DEFERRED

---

## Current Focus

**Active workstream:** Phase 2 R4 complete. Next candidate: Phase 3 gate review (VTH Content Mapping), or resolve the related-heading font-size report on production before proceeding.

**Next action:**
1. Confirm with Cafe whether the "oversized related heading on RKT" report was seen on production (main branch) or the ds-convergence Vercel preview. Source code on ds-convergence is already consistent; this may simply require merging/deploying, not a further CSS fix.
2. Once resolved, move to Phase 3 formal review (VTH Content Mapping) to unblock Phases 4 and 5.

---

## 1. Foundation Build (2026-05 to 2026-06)

All items in this section are complete. They are recorded here for historical context.

### 1.1 Infrastructure Setup — DONE (2026-05-29)

1. Repository created on GitHub (`cafeyee/henex`). DONE.
2. Vercel Hobby deployment configured (auto-deploy on push to `main`). DONE.
3. Password gate (`password.html` + `middleware.js`) for production. DONE.
4. Cloudflare R2 configured for large media storage. DONE.
5. Technology decision confirmed: static HTML, CSS, vanilla JS. No frameworks. DONE.

### 1.2 Global Pages — DONE (2026-05-29 to 2026-06-03)

1. Home page (`index.html`): hero, capability strip, HENEX section, about preview, footer. DONE.
2. About page (`about.html`): evidence strip, profile, practice foundations, how I work, capability clusters. DONE.
3. Philosophy page (`philosophy.html`): dimension cards, method recipe cards, text-stage interaction. DONE (2026-06-03).
4. Works page (`works.html`): project grid with category filters. DONE.
5. Works Chronology page (`works-chronology.html`): timeline view. DONE.
6. Lab page (`lab.html`): placeholder. DONE (placeholder only).

### 1.3 Design System v1 — DONE (2026-06-06)

1. Global tokens defined in `global.css` (colours, typography, spacing, radius). DONE.
2. Dark mode support across all pages. DONE.
3. Icon system: local SVG + Tabler Icons CDN. DONE.
4. Footer: always dark graphite, consistent across all pages. DONE.
5. Theme toggle: sun/moon SVG, responsive sizing. DONE.

### 1.4 UX Case Study Template — DONE (2026-06-06)

1. Template CSS created (`ux-case-study.css`), extracted from ASH rebuild. DONE.
2. Template spec documented (`HENEX_Case_Study_Template_Spec_v1.md`). DONE.
3. Three-layer CSS architecture established: `global.css` → `ux-case-study.css` → per-project CSS. DONE.

### 1.5 UX Case Studies (8 pages) — DONE (2026-06-06 to 2026-06-15)

1. Accessibility Support Hub (ASH) — `works/accessibility-support-hub.html`. DONE.
2. New World Design System (NDS) — `works/new-world-design-system.html`. DONE.
3. Voting Starter Kit (VSK) — `works/voting-starter-kit.html`. DONE.
4. Victim Hub (VTH) — `works/victim-hub.html`. DONE (rebuild target in Phase 4/5).
5. Studier (STD) — `works/studier.html`. DONE.
6. ReKraft (RKT) — `works/rekraft.html`. DONE.
7. Welnest (WST) — `works/welnest.html`. DONE.
8. Who's Singing OuTuiside (WSO) — `works/whos-singing-outuiside.html`. DONE.

### 1.6 Architecture Case Study Template — DONE (2026-06-06)

1. Template CSS created (`architecture-case.css`). DONE.
2. Separate from UX template by design (different content structure). DONE.

### 1.7 Architecture Case Studies (7 pages) — DONE (2026-06-06 to 2026-06-15)

1. Guangzhou Baiyun T2 (BT2). DONE.
2. East Campus of Shantou University and AYG Venue. DONE.
3. Oppein Headquarters Building. DONE.
4. Nanning Wuxu International Airport T3. DONE.
5. Guangzhou Football Park. DONE.
6. Great Bay Area Science Hall. DONE.
7. Poly Yuzhu High-Rise Apartment and Commercial Street. DONE.

### 1.8 JS Consolidation — DONE (2026-06-15)

1. All page-specific JS deleted. Two files remain: `main.js` (global) and `case-interactions.js` (all case studies). DONE.
2. Popover supports both UX and architecture triggers. DONE.
3. Image modal bug fixed (scoped querySelector). DONE.

### 1.9 Audit Round 1 and 2 — DONE (2026-06-15)

1. All root-level pages passed audit. DONE.
2. First 3 UX case studies + 1 architecture case study passed audit. DONE.
3. Master document updated to v1.4 (`HENEX_Master_2026-06-15_v1.4.md`). DONE.

---

## 2. DS Convergence Project (2026-07 to present)

Branch: `ds-convergence`. Master spec: `docs/handover/HENEX_DS_IA_Convergence_Spec_v1_1.md`.

This project unifies the design system across all case study pages, then rebuilds VTH as the reference implementation of the converged template.

### Phase 1: DS Visual Reference v2 — DONE (2026-07-03)

**Deliverable:** Self-contained HTML mood board showing all converged DS components.
**File:** `docs/visual-reference/HENEX_Design_System_Visual_Reference_v2.html`
**Gate:** User previewed and approved.

### Phase 2: DS Implementation — IN PROGRESS (~85% complete)

**Branch:** `ds-convergence` (45 files changed, +4091 / -709 vs main)

**R1: Section Component Audit — DONE (2026-07-05)**
Deliverables:
1. `docs/specs/DS_Section_Component_Audit_v1.md` — audit findings + shared pattern catalog. DONE.
2. 18 shared component classes added to `ux-case-study.css` (feedback grid, icon card, gallery, swatch, card stack, component row/stack, scroll viewport, scope block, chip flow, showcase figure). DONE.
3. Section background tier system established (base, tint, accent, emphasis). DONE.

**R2: Per-Project CSS Cleanup — DONE (2026-07-06)**
1. NDS: 741 → 449 lines. 19 system-* classes migrated to shared ux-* equivalents. DONE.
2. VSK: duplicate feedback/swatch definitions removed, principle card migrated to ux-icon-card. DONE.
3. RKT: duplicate feedback definitions removed, 2-col grid override kept. DONE.
4. WSO: duplicate feedback definitions removed, brand-accent override added. DONE.
5. WST: duplicate feedback definitions removed, accent colour override kept. DONE.
6. STD and ASH: already at target state, no changes needed. DONE.
7. NDS HTML class migration (19 renames in `works/new-world-design-system.html`). DONE.
8. VSK HTML class migration (principle card renames). DONE.

**R3: Master Doc Update — DONE (2026-07-06)**
1. Master document updated to v1.5 (`docs/specs/HENEX_Master_2026-07-06_v1.5.md`). DONE.
2. Section 4a shared pattern catalog added. DONE.
3. R1/R2 cleanup log, bug fixes, gotchas documented. DONE.

**R4: Architecture Pages DS Adapt — DONE (2026-07-06)**
Priority: LOW. Independent of the VTH rebuild track.
1. Audited `architecture-case.css` against the "minimise variation" principle. DONE. Finding: architecture pages never had per-project CSS duplication (all 7 pages load only `global.css` + `architecture-case.css`, no per-project files, no inline styles). The structural cleanup that R1/R2 did for UX pages was not needed here.
2. Deep DS consistency audit comparing architecture patterns against global.css and ux-case-study.css (hero, tags, related cards, recipe/popover, breakpoints). DONE.
3. Fixed dark mode bug: `.arch-recipe-trigger[aria-expanded="true"]` used hardcoded `#151719`/`#FFFFFF` instead of theme tokens, so the active popover trigger did not adapt in dark mode. Now uses `var(--theme-text)`/`var(--theme-bg)`, matching `.ux-recipe-trigger`. DONE.
4. Unified related-card label typography: `.ux-related-card span` used `0.72rem`/`0.12em` letter-spacing while `.arch-related-card span` used `0.8125rem`/`0.15em` for the same UI role. Standardised to the architecture value across both templates. Also aligned `margin-inline`/`padding-inline` on related-card content from 22px (UX) to 18px (architecture baseline). DONE.
5. Added missing 1180px and 640px breakpoints to `architecture-case.css`. Finding: `.arch-two-col`, `.arch-media-row`, `.arch-henex`, `.arch-title-grid`, `.arch-callout-row`, `.arch-interface-grid`, `.arch-related__grid`, and `.arch-findings` had no collapse rule at any breakpoint and stayed multi-column down to mobile widths. Now collapse at 1180px (wide-layout, matching the same breakpoint's role in `ux-case-study.css`) and 640px. DONE.
6. Confirmed architecture pages' neutral tag system (`.case-tag-row`/`.case-tags` from `global.css`) is intentionally separate from UX pages' branded `.ux-tags` (themed via `--ux-theme`). Not a defect — architecture projects have no per-project brand colour. No change needed.
7. Investigated a separate report of oversized related-section heading text (rendering large on RKT and possibly others). Finding: `.ux-related h2` and `.arch-related h2` are byte-identical in source (`clamp(2rem, 3.5vw, 3.5rem)`), and no per-project CSS override exists on any of the 15 case study pages. The discrepancy is not present in the ds-convergence branch source. Needs Cafe to confirm which URL/environment was viewed (production main branch vs Vercel ds-convergence preview) before further action, since production has not yet received the 2026-07-06 related-heading unification fix.

**Visual QA (R1/R2 verification) — DONE (2026-07-06)**
1. Related-card background unified to pure white. DONE.
2. Related h2 size unified with architecture pages. DONE.
3. Feedback card proportions fixed (padding, gap, blockquote margin). DONE.
4. WST/WSO muddy gradient bug fixed. DONE.

**Phase 2 earlier completed items (tokens, hero, cards, spacing):**
1. Global tokens: hardcoded colours replaced, spacing scale added (D16). DONE.
2. Card base classes C1-C5 defined in `global.css`. DONE.
3. Card hover rules unified (navigable vs display). DONE.
4. Shadow and radius unified. DONE.
5. Hero system fully unified (D07, D17): base `.ux-hero` with gradient, cover mode, all 15 pages migrated. DONE.
6. L3 base class and `.ux-section-head` created. DONE.
7. Vercel preview deploy configured for ds-convergence branch. DONE.

### Phase 3: VTH Content Mapping — PENDING (draft exists)

**Deliverable:** Markdown document mapping VTH content to IA v4 sections.
**File:** `docs/ia/VTH_Content_Mapping_v1.md`
**Status:** Draft created. Formal review and approval by Cafe not yet done.
**Gate:** Cafe confirms section allocation, content reuse decisions, media placement.
**Note:** Can run in parallel with Phase 2 R4. Must complete before Phase 4.

### Phase 4: VTH v2 Preview — PENDING

**Blocked by:** Phase 2 completion + Phase 3 approval.
1. Generate self-contained HTML preview of VTH v2 using converged DS and IA v4. PENDING.
2. Embed actual R2 images, Tabler icons, dark mode support. PENDING.
3. User preview and approval. PENDING.

### Phase 5: VTH v2 Integration — PENDING

**Blocked by:** Phase 4 approval.
1. Replace `works/victim-hub.html` with approved v2 on ds-convergence branch. PENDING.
2. Update `vth.css` to follow the per-project CSS contract. PENDING.
3. Visual QA via Vercel preview. PENDING.

### Phase 6: ASH Retrofit — PENDING

**Blocked by:** Phase 5 completion.
**Note:** Hero already migrated in Phase 2. ASH CSS already at target state. Retrofit scope is HTML structure alignment to the converged IA v4 template if needed.
1. Audit ASH HTML against VTH v2 template structure. PENDING.
2. Apply structural changes if needed. PENDING.
3. Visual QA. PENDING.

### Phase 7: STD Retrofit — PENDING

**Blocked by:** Phase 6 completion.
**Note:** Hero already migrated in Phase 2. STD CSS already at target state. Same scope as Phase 6.
1. Audit STD HTML against VTH v2 template structure. PENDING.
2. Apply structural changes if needed. PENDING.
3. Visual QA. PENDING.

---

## 3. Post-Convergence Roadmap

These items are not yet scheduled. They become relevant after the DS Convergence project completes and ds-convergence merges to main.

### 3.1 Merge ds-convergence to main — PENDING

**Blocked by:** All 7 phases complete and verified.
1. Final cross-page regression test on all 22 pages. PENDING.
2. Merge to main, verify production deployment. PENDING.

### 3.2 Remaining UX Page Retrofits — DEFERRED

After VTH, ASH, and STD are retrofitted (Phases 4-7), the remaining 5 UX pages (NDS, VSK, RKT, WSO, WST) may need HTML structure alignment to the finalised IA v4 template. CSS is already clean from Phase 2 R2. Scope to be determined after Phase 7.

### 3.3 Lab Page — DEFERRED

Currently a placeholder. Content and scope not yet defined.

### 3.4 CMS Integration (Phase 2 of site roadmap) — DEFERRED

Trigger: content grows beyond comfortable manual editing. Option: Tina CMS. Not planned until all static pages are final.

### 3.5 Accessibility Audit — DEFERRED

Full WCAG AA audit across all pages. QA checklist exists in Master doc Section 12 but has not been systematically run on every page.

---

## 4. Reference Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Master File v1.5 | `docs/specs/HENEX_Master_2026-07-06_v1.5.md` | Project state, DS spec, decisions, QA checklist |
| Convergence Spec v1.1 | `docs/handover/HENEX_DS_IA_Convergence_Spec_v1_1.md` | 7-phase plan, gate conditions, D01-D17 decisions |
| Template Spec v1 | `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` | Case study DS direction (Part A-C) |
| Execution Tracker | `docs/handover/DS_Convergence_Execution_Tracker.md` | Phase-level status tracking |
| Section Audit v1 | `docs/specs/DS_Section_Component_Audit_v1.md` | Shared pattern catalog |
| VTH Content Mapping v1 | `docs/ia/VTH_Content_Mapping_v1.md` | Phase 3 deliverable (draft) |
| DS Visual Reference v2 | `docs/visual-reference/HENEX_Design_System_Visual_Reference_v2.html` | Approved mood board |

---

## 5. Update Log

| Date | Change |
|------|--------|
| 2026-07-06 | v1.0 created. Consolidated full project history from Master v1.5, Execution Tracker, and Convergence Spec v1.1. |
| 2026-07-06 | Phase 2 R4 marked DONE. Architecture pages audited; found no per-project CSS duplication (unlike UX pages), so cleanup scope shifted to a deep DS consistency check. Fixed dark mode hardcoded colours in recipe trigger, unified related-card label typography, added missing 1180px/640px breakpoints (several layouts had no collapse rule at all). Flagged a possible stale-production issue on the related-heading font-size report, pending Cafe confirmation. |
