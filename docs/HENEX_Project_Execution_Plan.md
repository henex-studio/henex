# HENEX Website — Project Execution Plan

**Version:** 2.2
**Created:** 2026-07-06
**Last updated:** 2026-07-12
**Owner:** Cafe Yi
**Role:** This is the single source of truth for project progress. Consult this document at the start of every session. Update it when any task passes verification.

---

## How to Use This Document

This plan covers the entire HENEX portfolio website lifecycle, from initial build through design system convergence and future enhancements. Every task has a status marker. At the start of each session, read the "Current Focus" section to know what to work on next. When a task is verified and approved, mark it DONE with a completion date. Do not skip ahead.

**Status markers:** DONE, IN PROGRESS, BLOCKED, PENDING, DEFERRED

---

## Current Focus

**Active workstream:** Phase 4, VTH v2 Preview. Full page built (v1 build, 2026-07-10 morning), then four bug-fix passes applied against Cafe's own review: v4 Addendum (27-item bug report from an exported Word doc, resolved as A1-A19), v5 Addendum (light+dark PDF walkthrough, resolved as B1-B6), v6 Addendum (12-item bug report from a second Word doc against the v5-patched build, resolved as C1-C12), and v7 Addendum (8-item bug report with 7 annotated screenshots from a direct visual walkthrough of the v6-patched build, resolved as D1-D6). All four addenda are in `docs/specs/VTH_v2_Section_Detail_Spec.md`. v7 is a defect-fix pass (hover scope, dark-mode hover specificity, icon sizing, spacing, `--ux-dark` dark-mode token, image background consistency, Go-live/DS column alignment) fully coded into `assets/css/vth-v2.css` and `assets/css/global.css`; `victim-hub-v2.html` was not touched this round.

A further v8 Background System Addendum (E4-E7) then reworked the hero and the whole-page background palette: the hero moved to a two-colour primary+secondary frosted-bloom gradient (matching the Home/Philosophy hero language), and every content section from Overview to Recipe was moved onto the navy primary family (four tones: S soft gradient / L pale solid / P primary gradient / D deep emphasis), with neutral reserved for global chrome only. Emphasis tier D was split by mode (lighter mid-navy in light, lifted deep-navy in dark) and the Delivery chapter was unified into one deep background. VTH-only pilot; Master four-tier standard untouched.

The audit programme then started (2026-07-12): three audits agreed with Cafe — (1) VTH v2 design audit, (2) global site audit, (3) case unification audit — reports only, execution in confirmed batches. Audit 1 is complete (`docs/audits/VTH_v2_Design_Audit.md`) and its Batch 1 plus a run of Cafe-driven refinements landed as E11-E18: dark/light tone S corrections, clean-blue light ladder (方案二), tone P explicit stops, HMW promoted to a standalone removable tier-d section, hero red bloom lifted to top-right, mobile section-head collapse fix, and Process converted to a tier-d gateway. **VTH v2 page visually signed off by Cafe (2026-07-12).** Key decisions recorded: tone values confirmed via visual comparison; "no neutral content sections" graduates to the sitewide UX-case standard (D-2, gates Audit 3); no separators inside Delivery (D-3); Batch 2 refactor runs before case unification (D-4).

Batch 2 (E19) then landed: v8 palette tokenised (`--ux-tone-s/p`, `--ux-emphasis`, `--ux-alert-ink`, dark variants via scope redefinition, one background rule per tier) and the border custom-property contract (border-color declared only in global.css base + shared hover; every override is a `--card-border(-hover)` assignment; D2/E9 workaround blocks deleted). Cafe's regression surfaced one two-layer defect, closed as E20+E21: the dark Influence hover ink was too desaturated to see (accent-ink → alert-ink), and — the true root cause, proven via Cafe's DevTools captures — the v2 markup still carried the production `vth-inline-influence` class, whose vth.css dark rule declared border-color directly and beat the shared hover rule on a cascade tie. Legacy class removed from v2 markup (5 places, vth.css untouched); its spacing/label-ink/padding duties re-covered inside v2 via the contract and ink tokens; the same vth.css line also suppressed `.vth-metrics article` dark hover, patched with a commented INTEROP SHIM to be deleted at cutover with C4/C6. **Cafe confirmed the full regression clean (2026-07-12). VTH v2 page and Batch 2 both closed.**

Audit 2 is complete (`docs/audits/Global_Site_Audit.md`, 2026-07-12). Headlines: the layer architecture and chrome content are consistent; main issues are wso-case.css (863 lines, 31% dead, cleanup rides with its Audit 3 migration), 71 unused selectors site-wide (supervised deletion batch G-1 proposed), breakpoint drift in philosophy/wso (1100/720 vs the 1180/900/640/520 ladder), and chrome markup copy-pasted across 23 files (structural fix waits for Phase 2 Tina CMS; interim copy-propagation rule proposed). Four decisions pending with Cafe (G-1 timing, breakpoint mapping, canonical chrome file, formatting convention).

Audit 2's four decisions were resolved by Cafe the same day: Batch G-1 executed immediately (40 dead selectors removed across global/pages/architecture-case/philosophy with word-boundary verification, breakpoints unified 1100→1180 and 720→640, ~6.4KB removed, `[MODIFIED G1]` file headers added, backups kept in the session workspace); canonical chrome file is index.html; source convention is readable pretty-printed going forward. The auto-resume scheduled task was cancelled at Cafe's request. Cafe still to eyeball philosophy's card layouts between 640-720px after the breakpoint change.

Audit 3 is complete (`docs/audits/Case_Unification_Audit.md`, 2026-07-12) — the audit programme's final report. Headline: none of the 7 other UX cases use any part of the VTH baseline (zero tiers, zero two-tier headings, no secondary colours, no ink tokens; all still on the old neutral/tint alternation), so migration is a per-page retrofit combining the U-series standard (tone ladder via a real `.ux-tier-s`, palette derivation recipe, headings, E19 contract, interaction inks, spacing, Phase 3B content moves) with a 7-step per-page checklist. Architecture stays on its own converged language and takes only the light A-series pass. Proposed order: ASH → STD → NDS/RKT → VSK/WST → WSO last. Five decisions pending with Cafe (per-project secondary colours; cover-hero vs bloom-hero for the 5 cover pages, recommendation keep covers; HMW presence per case; batch cadence; Architecture pass timing).

All five Audit-3 decisions were resolved the same day: (1) secondary colours already exist in Master Template Spec 2.2 for all 8 projects — that table is the authority, per-page derivation via the U2 recipe with a visual round before landing; (2) all UX heroes convert to the frosted dual-bloom gradient this phase, including the five cover-image pages; (3) HMW included per material, E14 flexibility as designed; (4) paired batch cadence, 5 gates: M-1 ASH+STD, M-2 NDS+RKT, M-3 VSK+WST, M-4 WSO, M-5 VTH closing; (5) Architecture A-series after all UX migrations.

Cafe then changed the cadence: all UX page specs are defined FIRST, implementation happens together as one unified build phase afterwards. All five migration specs are now complete and palette-approved through iterative visual rounds: M1 (ASH+STD, spec approved incl. STD dark-hero option A; STD Contribution kicker standardised, ASH Feedback omitted, ASH HMW uses existing page text), M2 (NDS+RKT; NDS/VSK-class dark-hero strengthening applied to NDS, RKT unchanged), M3 (VSK+WST; VSK dark hero strengthened; WST re-paired twice, final v3 = purified #FF8C00/#FFB200 after Cafe found both earlier pairs muddy), M4 (WSO; pair inverted to ink-green #16402E candidate A leading + orange #FF7701 accent, resolving the olive alert-ink problem). Master Spec 2.2 colour table updated for WST/WSO with [MODIFIED] notes.

Before the build, the standards were codified into the Master Template Spec, now **v2.0** (2026-07-12): Section 3 rewritten as the five-tone system (S/L/P/D + chrome-neutral, `.ux-tier-s`, VTH-final default ladder incl. Process-as-gateway and unified Delivery, Recipe on tone L, emphasis discipline rule); new Section 2.4 palette derivation recipe (U2, incl. the E16 clean-colour rule and E20 vividness requirement); Section 7.1 rewritten as the frosted dual-bloom hero standard (all UX cases, per-project intensities recorded in M-specs); Section 6.5 spacing floors updated to the VTH-final values; new Section 4.8 HMW interlude pattern; new Section 13 Engineering Contracts codifying E19 border contract, S3 layer ownership, E15 breakpoint scoping, E21 legacy-class sweep, E20 ink vividness, G1 chrome propagation and G3 source convention. Audit-2 Batch G-2 (documentation) is thereby complete.

**Next action:** Unified build phase — implement M1-M4 (7 pages) against their approved specs, then M-5 VTH closing (tier-s rename, cutover items C4/C6, shim removal), then the Architecture A-series pass. Build introduces `.ux-tier-s` in ux-case-study.css as its first shared change. Per-page validation plus Cafe PDF walkthroughs gate each page's sign-off.

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

### Phase 2: DS Implementation — DONE (2026-07-06)

**Branch:** `ds-convergence`

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
7. Investigated a separate report of oversized related-section heading text on RKT. Confirmed via DevTools that the CSS rule and computed font-size were correct and identical to other pages, clamp working as designed. Root cause was not CSS but content: RKT ("...digital and community systems.") and Studier ("...service, research and digital systems.") had non-standard related-heading copy, different from the other 13 pages' standard line ("More work across service, digital and spatial systems."), which reads as visually different due to different text length. Fixed both to the standard copy. All 15 case study pages now share identical related-heading text. DONE.

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

### Phase 3A: UX Case Master Template Spec — DONE (2026-07-07)

**Deliverable:** Markdown spec defining the master IA architecture and DS style system for all UX case study pages.
**Scope expanded from:** Original Phase 3 (VTH Content Mapping review only). After auditing all 8 UX pages and the VTH reference pages, Cafe determined that the work requires a unified master template covering IA structure, color system (primary + secondary per project), background tier system, layout patterns, corner radius tokens, and section-level DS rules. The VTH Content Mapping v1 draft remains valid as input but is superseded by this broader spec.
**Reference inputs:**
1. `docs/ia/thinking about case pages.txt` — Cafe's audit notes defining the master template vision.
2. `docs/reference/10-Project Summary_R2.html` — VTH reference page (color rhythm, content clarity reference).
3. `docs/reference/10-Project introduction_portfolio-case-study_refined_visualfix_no-glow.html` — VTH reference page (closer to current DS, color rhythm reference).
4. `docs/ia/VTH_Content_Mapping_v1.md` — Original content mapping draft (input, not the deliverable).
**Gate:** Cafe confirms the master template spec before Phase 3B proceeds.
**Key decisions confirmed (2026-07-07):**
1. Color system: each project gets primary + secondary theme colors. Values defined for all 8 projects.
2. Contribution section: applies to team projects (VTH, ASH, RKT, VSK) and STD. Not for NDS, WST, WSO.
3. All projects maintain 4 process sub-sections (Research, Design, Validation, Delivery).
4. Background tier system: 4 tiers (Neutral, Light primary flat, Primary gradient, Deep primary). No adjacent same-tier.
5. Corner radius tokens: pill 99px, card 12px, media 8px, button 4px.
6. DS direction: keep current DS visuals (rounded cards, shadows), reference VTH pages for color rhythm and light/dark mode only. Not a full editorial redesign.
7. Related projects ordering: prioritize same project type, then other types. Back-to-works button moves from hero to related section.
8. Feedback section added after Outcome as optional section (most projects have it, e.g., NDS/VSK "Course Feedback").
9. HENEX Recipe background: explicit `var(--theme-surface-soft)` gray, not inherited from body. Distinguishes Recipe from white Related section while reflecting its dual case/philosophy nature.

### Phase 3B: All-Page Content Mapping Table — DONE, approved by Cafe (2026-07-07)

**Deliverable:** `docs/ia/UX_Case_Content_Mapping_Table_v1.md`. Maps all 8 UX pages against the Master Template Spec: current section order, template slot mapping, tier state, Contribution/Feedback coverage, Validation section status, and required structural changes per page.
**Key findings:**
1. 4-tier background system not yet implemented anywhere, only a binary tint modifier exists sitewide.
2. No page has a "Secondary Recipe" label, sitewide fix needed.
3. Contribution missing on RKT and VSK, build plans drafted from `rkt.pdf`/`vsk.pdf` reference PDFs. VTH's "My Role" needs merge/reshape into Contribution.
4. Validation section inconsistent across all 8 pages, status table and per-page fixes documented.
5. RKT has an adjacent-tint rule violation (Design Process + Discover both tinted), flagged for fix.
6. WST and VTH share duplicate recipe ID R24, flagged for resolution.
7. Six open items raised for Cafe in Section 11 of the mapping document (NDS Validation gap, recipe ID conflict, Background section gaps on 4 pages, RKT/VSK Contribution copy approval, STD Product Evolution enrichment, extra-section fold-in decisions).
**Gate:** Cafe confirms the mapping table and resolves the 6 open items. This replaces the original Phase 3 gate and unblocks Phase 4.

**Phase 3B refinement round — DONE (2026-07-07):** All 6 original open items resolved, one new item raised.
1. NDS Validation resolved: no formal validation phase exists (course DS audit project), replaced with a "live verification" format, self-test copy plus a direct link/embed to the working Figma microsite prototype. Background section drafted using Cafe's course reflection PDF (`cafe_yi_UXDN423_2_reflection.pdf`), using the "chef's recipe" and "scattered jigsaw puzzle" framing from Cafe's own reflection.
2. WST/VTH Recipe ID conflict resolved: confirmed via `docs/content/2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.md` that R24 was Primary for both P01 (VTH) and P08 (Welnest) in the source mapping. Welnest's Primary changed to R06 (Inclusive Onboarding Paths), better fits its newcomer-onboarding positioning. R24 demoted to Welnest's secondary. Recipe mapping file updated (Project_Recipe_Map, Project_Recipe_Matrix, Recipe_Coverage sheets).
3. Background section drafts confirmed for NDS, STD (both from new source material), and WST (no changes requested). WSO's existing nested background content will be promoted, not redrafted.
4. RKT/VSK Contribution build plans confirmed, proceed with drafted two-role-card pattern from `rkt.pdf`/`vsk.pdf`.
5. STD Product Evolution enriched using `docs/reference/Studier_development_log.md`, a real v1.00-v3.07 iteration history showing feedback-driven changes (task navigation, locked review, data cleaning, republish workflow).
6. Extra-section fold-in rules finalized: Screencast/Video/Prototype Walkthrough/Preview all fold into Outcome (unified heading). Final Design folds into Delivery. Design System/DS content folds into Design (not Delivery). Impacts: consolidated role sections fold into Contribution, per-section impact notes fold into Influence blocks. Master Template Spec updated to encode these rules directly (Sections on Outcome, Design, Delivery, Influence Block).
7. VTH content mapping fully redone using the reference page (`10-Project Summary_R2.html`) as the primary content source instead of the live page, per Cafe's direction. Introduced a Chapter 1/Chapter 2 content-splitting approach for Solution and Outcome (short teaser in Chapter 1, full detail in Chapter 2), since the reference page's linear research-first structure doesn't natively match the master's 3-depth disclosure model.
8. New open item raised: VTH Glossary section placement (reference page has one, no other page or the master template does), needs Cafe's decision before Phase 4.

**Phase 3B second refinement round — DONE (2026-07-07):** Cafe reviewed the VTH split-teaser proposal and redirected the content assignment, and resolved the Glossary item.
1. VTH Outcome trimmed to the walkthrough video only. The hi-fi prototype tabs and the 4 handover cards (Hi-fi direction, IA and content model, Handover package, Delivery readiness) move to Chapter 2 Delivery instead of staying in Chapter 1 Outcome.
2. VTH Background/Problem/Solution content reassigned: the reference page's Background section (02) keeps only its text and the `current-site.png` image; its 3 cards (Fragmented content, Internal structure, Unclear next steps) move to Problem. Problem gains the live page's actual HMW statement plus those 3 cards. The reference page's Problem section (03) content ("guidance, resonance and confidence", 3 cards) was actually solution content misfiled under Problem, it now becomes Solution's dedicated content, reframed as a strategic-response statement rather than kept as a Chapter 1 teaser copy.
3. Glossary resolved: no case study page will show a glossary section. Cafe wants a sitewide inline term-popover component instead (click a term, see a plain-English "This means..." card), inspired by a similar component visible in the VTH reference page's embedded hi-fi prototype. Logged as new Post-Convergence Roadmap item 3.7 (renumbered 2026-07-10 to make room for item 3.6, the dark-mode migration item), deferred until after the full retrofit (Phases 4-7) completes.
4. Content Mapping Table's Section 11 Open Items now shows zero remaining open items. Phase 3B is fully resolved pending Cafe's final sign-off.

**Phase 3B approved by Cafe (2026-07-07).** One copy-drafting note carried forward to Phase 4: the VTH Solution section's Influence line ("This reframed the work from a page refresh into an information architecture, language and confidence problem.") needs rewording to describe the solution direction's impact rather than the original problem-framing language, since this content moved from Problem to Solution. Exact wording to be finalized during the Phase 4 build, not blocking Phase 3B sign-off.

### Phase 4: VTH v2 Preview — IN PROGRESS, third build stable and iterating (2026-07-10)

**Blocked by:** none, Phase 3B approved.
**Inputs:** `docs/specs/UX_Case_Master_Template_Spec_v1.md` (structure and DS rules), `docs/ia/UX_Case_Content_Mapping_Table_v1.md` Section 1, `docs/specs/VTH_v2_Section_Detail_Spec.md` (VTH-specific build spec, now on its v5 addendum).
**Handover:** `docs/handover/VTH_v2_Phase4_Handover.md` — context document from the rebuild's start.

**Previous attempts (rolled back 2026-07-07):**
Two preview builds were attempted and rejected by Cafe. Both had extensive issues: unauthorized visual changes, wrong icon sources, missing images, layout changes not in spec, incorrect standard hierarchy (treating the reference page as THE standard instead of the spec files). Files deleted: `works/victim-hub-v2-preview.html`, `assets/css/vth-v2.css`.

**Third build (2026-07-10) — DONE, in bug-fix iteration:**
1. `VTH_v2_Section_Detail_Spec.md` finalized to v3: percentage metric fixed (22.2 percentage points, not 33.3% relative), Contribution section reverted from 6 invented role-title cards to the original 6 work-area cards without role badges (Option A, Cafe's choice after a pros/cons discussion). DONE.
2. Full page built from spec: `works/victim-hub-v2.html` (627 lines) + `assets/css/vth-v2.css` (982 lines at that point). DONE.
3. As part of this build, discovered 3 legacy pages (`rekraft.html`, `welnest.html`, `whos-singing-outuiside.html`) had duplicated/drifted Read More JS. Consolidated into one shared Expand/Collapse module in `assets/js/case-interactions.js` (attribute-driven, `data-expand-trigger` + `aria-controls`), migrated all 3 pages to it. Cafe chose Option A: unify JS only, leave each page's CSS class names untouched (a full CSS+JS unification was considered and explicitly deferred). DONE.

**v4 Bug Fix Addendum (2026-07-10) — DONE, approved and coded:**
Cafe supplied "V2 bug.docx", a 27-item bug report with screenshots against the v1 build, plus one independent Chronology page bug. Resolved as spec items A1-A19, written into `VTH_v2_Section_Detail_Spec.md` first and approved before any code changed. Key items: global two-tier heading rule (Tier A chapter-opener / Tier B sub-block, new `.ux-chapter-head` class added to `ux-case-study.css` — this rule is GLOBAL, applies to all future case study pages, not VTH-specific, see Master Spec Section 4.1), Lo-fi prototype made an independent sub-block with an embedded iframe behind Read More, Design System reworked from cards to alternating 1/3-text + 2/3-media feature blocks (ASH-style), IA diagram switched from a blurry PNG export to an inline SVG reproduced verbatim from the reference page, dark-mode Tier D kicker contrast fix, Chronology's "Back to Works" button repositioned bottom-right (was left orphaned by `justify-content: space-between` after an earlier redundant button was removed). All A1-A19 items coded into the HTML/CSS with `[MODIFIED Ax]` comment tags. DONE.

**v5 Bug Fix Addendum (2026-07-10, same day) — DONE, approved and coded:**
Cafe exported light-mode and dark-mode (all Read More expanded) PDFs of the v4-patched build and asked for a full UX/dev review, not just a spec diff. Findings and resolution, written into spec as B1-B6 and approved before coding:
1. **B1 — Dark mode accent-colour failure, systemic.** The v4 pass only fixed Tier D's kicker contrast; Tiers N/L/P still hard-coded kickers, meta labels, HENEX Lens values, Skills pills, and Recipe labels to light-mode brand colours, unreadable once those tiers darkened. Root-caused and fixed with a new **ink-token pattern**: `--ux-accent-ink` / `--ux-strong-ink`, light-mode default = existing brand colour (visually unchanged), dark-mode override brightens once per page and fixes every downstream use. This pattern is now the **mandatory global standard** — Master Template Spec Section 10.4 rewritten accordingly (see Section 2 below). VTH is the first page to adopt it; the other 7 UX case pages have the same latent defect and are queued as a separate all-site task (Roadmap 3.7).
2. **B2 — Spacing too tight.** Section padding, sub-block spacing, and stacked-element spacing raised to a mid-range tier (Master Spec 6.5 also updated with new floors).
3. **B3 — Quick Exit media/text ratio inverted.** Root cause: the `--reverse` feature-block variant swapped visual order via CSS `order` but not the grid column widths, so the image landed in the narrow 1/3 column meant for text. Fixed to swap both together.
4. **B4 — IA diagram enlarge target changed.** Clicking to enlarge now shows the R2 `ia-structure.png` reference image via the standard `.ux-modal` (matching every other case page's image click-to-enlarge pattern), instead of a cloned copy of the inline SVG. The page-specific `.vth2-svg-modal` system built for A13 was removed as no longer needed.
5. **B5 — Design System component images.** The 3 real component screenshots (`ds-accordion.png`, `ds-quick-exit.png`, `ds-glossary-popover.png`) were 404 in the v4 build (placeholder filenames). Cafe has since uploaded them to R2 under the same filenames; page now loads them.
6. **B6 — Decisions logged, not fixed.** Two items reviewed and intentionally left as-is: the white-background PNG charts (ease-score, timeline, priority matrix) stay unchanged in dark mode since they're static images, not themeable; the ~6 repeated "Influence" summary blocks stay, Cafe wants them kept for now.

All B1-B5 coded into `works/victim-hub-v2.html` and `assets/css/vth-v2.css` with `[MODIFIED Bx]` comment tags. Static validation passed (tag balance, no duplicate ids, CSS brace matching, inline JS + case-interactions.js syntax check, modal trigger/target pairing). R2 image URLs could not be verified by automated fetch (sandbox has no outbound network access to the R2 host); Cafe confirmed visually afterward: all 3 DS images and `ia-structure.png` load correctly.

**v6 Bug Fix Addendum (2026-07-12) — DONE, approved and coded:**
Cafe did the light+dark walkthrough of the v5-patched build and supplied a second bug report ("v2-bug2.docx", 12 items with screenshots and annotated arrows). Resolved as spec items C1-C12, written into `VTH_v2_Section_Detail_Spec.md` and approved before coding. Key items: **C1** Problem's H2 was found to literally reuse Solution's answer framing ("guidance, resonance and confidence" are Solution's own 3 card titles), rewritten to describe the problem itself; **C2** the HMW statement promoted from plain text to its own narrow deep-blue gradient band nested inside Problem (Tier L), without disturbing the Problem→Solution tier sequence; **C3** card/influence hover border color changed sitewide (`global.css`) to prefer each project's secondary theme color over its primary, using a fallback chain (`var(--ux-secondary, var(--ux-theme, ...))`) so the 7 other case pages (which don't yet define a secondary color) are unaffected and VTH switches to red immediately — this is a general-purpose global fix, not VTH-scoped; **C4** fixed a dark-mode hover regression introduced by B1/A12, where the resting card border (34% mix) had become darker than the hover border (28% mix), making hover invisible; **C5** `.vth2-method-card`/`.vth2-principle-card` were found never to have been added to the shared hover-border selector list (a gap, not a regression) and their icon size raised from 1.6rem to 1.9rem; **C6** spacing escalated from B2's mid-range tier to the large tier after Cafe found mid-range still too tight in practice; **C7** dark-mode Tier L background root-caused to a low-percentage mix of a pale token into near-black (producing muddy grey) and replaced with a stronger mix of the mid-tone `--ux-primary-soft` for a clean navy; **C8** all 12 user-visible "lo-fi"/"hi-fi" abbreviations spelled out to "low-fidelity"/"high-fidelity" (CSS class names/ids left untouched); **C9** embedded-prototype header padding increased; **C10** the 3 Design System feature blocks (Accordion/Quick Exit/Glossary Popover) restructured from a small kicker + separate headline to a single real title (matching the ASH Key Feature reference pattern) with the two previous sentences merged into one description, new copy drafted by the assistant and confirmed by Cafe; **C11** the same 3 blocks' left/right alternation flipped from left-right-left to right-left-right; **C12** the Go-live/BAU section's 7 diagrams converted from a stacked full-width image gallery into individual 1/3-text + 2/3-image feature blocks reusing the DS module's layout, deliberately scaled down one notch (h5 titles, smaller type) so the section reads as subordinate to the Design System section rather than visually equal to it, per Cafe's explicit instruction; the existing 2-visible/5-hidden-behind-Read-More split was preserved unchanged.

All C1-C12 coded into `works/victim-hub-v2.html`, `assets/css/vth-v2.css`, and `assets/css/global.css` (C3's shared hover fix) with `[MODIFIED Cx]` comment tags. Master Template Spec Section 4 (card hover) updated to document the new secondary-color-preferred hover rule. Static validation re-run and passed (tag balance including new h4/h5 counts, no duplicate ids, CSS brace matching across all 3 touched files, inline JS + case-interactions.js syntax check, no orphaned references to the old `.vth2-golive-gallery` class names, tier sequence re-checked with no adjacent duplicates, HMW band confirmed still nested inside Problem's Tier L section rather than promoted to its own chapter).

**Remaining before Phase 4 sign-off:**
1. Cafe's own light+dark visual walkthrough of the v6-patched build. PENDING.
2. Final approval to move to Phase 5. PENDING.

### Phase 5: VTH v2 Integration — PENDING

**Blocked by:** Phase 4 approval.
1. Replace `works/victim-hub.html` with approved v2 on ds-convergence branch. PENDING.
2. Update `vth.css` to follow the per-project CSS contract (primary + secondary tokens). PENDING.
3. Visual QA via Vercel preview. PENDING.

### Phase 6: ASH Retrofit — PENDING

**Blocked by:** Phase 5 completion.
**Note:** Hero already migrated in Phase 2. ASH CSS already at target state. Retrofit scope is HTML structure alignment to the master template, including adding/verifying Contribution section.
1. Audit ASH HTML against master template structure. PENDING.
2. Apply structural changes. PENDING.
3. Visual QA. PENDING.

### Phase 7: STD Retrofit — PENDING

**Blocked by:** Phase 6 completion.
**Note:** Hero already migrated in Phase 2. STD CSS already at target state. Retrofit scope is HTML structure alignment to the master template.
1. Audit STD HTML against master template structure. PENDING.
2. Apply structural changes. PENDING.
3. Visual QA. PENDING.

---

## 3. Post-Convergence Roadmap

These items are not yet scheduled. They become relevant after the DS Convergence project completes and ds-convergence merges to main.

### 3.1 Merge ds-convergence to main — PENDING

**Blocked by:** All 7 phases complete and verified.
1. Final cross-page regression test on all 22 pages. PENDING.
2. Merge to main, verify production deployment. PENDING.

### 3.2 Remaining UX Page Retrofits — DEFERRED

After VTH, ASH, and STD are retrofitted (Phases 4-7), the remaining 5 UX pages (NDS, VSK, RKT, WSO, WST) will be retrofitted to the master template. Phase 3B content mapping table will define the per-page section plan. RKT and VSK will also need new Contribution sections. CSS is already clean from Phase 2 R2. Scope details available once Phase 3B is approved.

### 3.3 Lab Page — DEFERRED

Currently a placeholder. Content and scope not yet defined.

### 3.4 CMS Integration (Phase 2 of site roadmap) — DEFERRED

Trigger: content grows beyond comfortable manual editing. Option: Tina CMS. Not planned until all static pages are final.

### 3.5 Accessibility Audit — DEFERRED

Full WCAG AA audit across all pages. QA checklist exists in Master doc Section 12 but has not been systematically run on every page.

### 3.6 Sitewide Dark Mode Accent-Colour Migration — DEFERRED

**Trigger:** Raised during VTH v2's v5 bug-fix pass (2026-07-10). Confirmed via CSS audit that 7 of the 9 case-study-template pages (`rekraft.html`, `welnest.html`, `whos-singing-outuiside.html`, `studier.html`, `accessibility-support-hub.html`, `new-world-design-system.html`, `voting-starter-kit.html`) colour their kickers/meta/accent text with a hard-coded per-project brand token and have zero `[data-theme=dark]` rules in their page CSS, the same latent defect VTH had before the v5 fix.
**Scope:** Migrate each page individually to the ink-token pattern now defined as the mandatory standard in Master Template Spec Section 10.4 (`--ux-accent-ink` / `--ux-strong-ink`, light-mode default = existing brand colour, dark-mode override brightens per page). Cafe's explicit direction: do this as one dedicated all-site pass, not folded into other page work, and verify each page's dark-mode contrast individually since each page's accent hue and tier backgrounds differ.
**Not in scope for Phase 4-7:** This is independent of the VTH retrofit and the ASH/STD retrofits. Revisit after Phase 4-7 structural retrofits complete, or sooner if Cafe prioritizes it.

### 3.7 Sitewide Term Popover Component — DEFERRED

**Trigger:** After the full UX case study retrofit (Phases 4-7) completes and ds-convergence is stable.
**Origin:** Raised by Cafe during Phase 3B VTH remapping (2026-07-07), inspired by a component visible in the VTH reference page's embedded hi-fi prototype screenshot: a clickable inline term (e.g., "Victim Impact Statement") that opens a small popover card with a plain-English "This means: ..." explanation.
**Scope:** Design and build a sitewide inline glossary popover, click a defined term in body copy anywhere on the site, a card appears with a plain-language definition. Not scoped to any single case study, this is a global component similar in spirit to the existing recipe popover pattern (`.ux-recipe-trigger`), but for plain-language term definitions in body content.
**Note:** Do not build this during the current retrofit. Revisit after all case study pages are converged on the master template.

---

## 4. Reference Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Master File v1.5 | `docs/specs/HENEX_Master_2026-07-06_v1.5.md` | Project state, DS spec, decisions, QA checklist |
| Convergence Spec v1.1 | `docs/handover/HENEX_DS_IA_Convergence_Spec_v1_1.md` | 7-phase plan, gate conditions, D01-D17 decisions |
| Template Spec v1 | `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` | Case study DS direction (Part A-C) |
| Execution Tracker | `docs/handover/DS_Convergence_Execution_Tracker.md` | Phase-level status tracking |
| Section Audit v1 | `docs/specs/DS_Section_Component_Audit_v1.md` | Shared pattern catalog |
| VTH Content Mapping v1 | `docs/ia/VTH_Content_Mapping_v1.md` | Phase 3 input (superseded by Master Template Spec) |
| Master Template Spec v1 | `docs/specs/UX_Case_Master_Template_Spec_v1.md` | Phase 3A deliverable. Master IA + DS system for all UX case pages. As of 2026-07-10: Section 4.1 (two-tier heading rule) and Section 10.4 (mandatory dark-mode ink-token standard) rewritten |
| Content Mapping Table v1 | `docs/ia/UX_Case_Content_Mapping_Table_v1.md` | Phase 3B deliverable. Per-page section mapping, gaps, and open items |
| VTH v2 Section Detail Spec | `docs/specs/VTH_v2_Section_Detail_Spec.md` | Phase 4 deliverable. VTH-specific section-by-section build spec. Now on v6: v1-v3 (build spec), v4 Addendum (A1-A19, 27-item bug fix pass), v5 Addendum (B1-B6, PDF walkthrough bug fix pass), v6 Addendum (C1-C12, second Word-doc bug fix pass) |
| DS Visual Reference v2 | `docs/visual-reference/HENEX_Design_System_Visual_Reference_v2.html` | Approved mood board |
| Case Page Audit Notes | `docs/ia/thinking about case pages.txt` | Cafe's master template vision and section rules |
| VTH Reference (R2 links) | `docs/reference/10-Project Summary_R2.html` | Color rhythm, content clarity reference |
| VTH Reference (no-glow) | `docs/reference/10-Project introduction_portfolio-case-study_refined_visualfix_no-glow.html` | DS-aligned reference page |
| RKT Figma Overview PDF | `docs/reference/rkt.pdf` | RKT role/contribution source for Phase 3B |
| VSK Figma Overview PDF | `docs/reference/vsk.pdf` | VSK role/contribution source for Phase 3B |
| NDS Figma Overview PDF | `docs/reference/nds.pdf` | NDS problem/solution/process source, used for Background draft |
| WST Figma Overview PDF | `docs/reference/wst.pdf` | WST problem/solution/process source |
| ASH Figma Overview PDF | `docs/reference/ash.pdf` | ASH reference, available for future cross-check |
| WSO Figma Overview PDF | `docs/reference/wso.pdf` | WSO reference, available for future cross-check |
| Studier Development Log | `docs/reference/Studier_development_log.md` | Real v1.00-v3.07 iteration history, source for STD Product Evolution enrichment |
| Studier Project Development Record | `docs/reference/Studier_project_development_record.docx` | Supplementary STD development record |
| NDS Course Reflection PDF | Uploaded by Cafe (`cafe_yi_UXDN423_2_reflection.pdf`) | Source for NDS Background draft's authentic voice and framing |

---

## 5. Update Log

| Date | Change |
|------|--------|
| 2026-07-06 | v1.0 created. Consolidated full project history from Master v1.5, Execution Tracker, and Convergence Spec v1.1. |
| 2026-07-06 | Phase 2 R4 marked DONE. Architecture pages audited; found no per-project CSS duplication (unlike UX pages), so cleanup scope shifted to a deep DS consistency check. Fixed dark mode hardcoded colours in recipe trigger, unified related-card label typography, added missing 1180px/640px breakpoints (several layouts had no collapse rule at all). |
| 2026-07-06 | Sitewide content fix: Studier and ReKraft had non-standard related-section heading copy, differing from the other 13 pages. Unified all 15 case study pages to the standard line "More work across service, digital and spatial systems." |
| 2026-07-07 | Phase 3 scope expanded. Original Phase 3 (VTH Content Mapping review) replaced by Phase 3A (UX Case Master Template Spec) and Phase 3B (All-Page Content Mapping Table). Nine key decisions confirmed: dual theme colors, contribution section scope, 4-tier background system, corner radius tokens, DS direction (evolve not replace), related projects ordering, Feedback section (optional Tier L, post-Outcome), Recipe background token (--theme-surface-soft). |
| 2026-07-07 | Phase 3A marked DONE. Master Template Spec v1 created at `docs/specs/UX_Case_Master_Template_Spec_v1.md`. Covers 13 sections: narrative structure (3 chapters + ending, 15 section slots), dual color system (8 projects), 4-tier background system (N/L/P/D + Recipe special), layout patterns, corner radius tokens, typography, hero, recipe, related, dark mode, responsive, media rules. |
| 2026-07-07 | Phase 3B marked DONE pending Cafe approval. Content Mapping Table v1 created at `docs/ia/UX_Case_Content_Mapping_Table_v1.md`. All 8 UX pages audited section-by-section against the master template. Universal gaps found: no 4-tier system implemented yet, no Secondary Recipe labels anywhere, Contribution missing on RKT/VSK (build plans drafted from PDF references), Validation handling inconsistent across all pages, one adjacent-tint rule violation on RKT, one duplicate recipe ID (R24 shared by VTH/WST). Six open items raised for Cafe confirmation before Phase 4 starts. |
| 2026-07-07 | Phase 3B refinement round 1 complete. All 6 original open items resolved using new reference material (`nds.pdf`, `wst.pdf`, `Studier_development_log.md`, `cafe_yi_UXDN423_2_reflection.pdf`, and others). NDS Validation resolved as self-test + live Figma entry; WST recipe conflict resolved (R24→R06, recipe mapping file updated); Background drafts confirmed for NDS/STD/WST; STD Product Evolution enriched with dev-log history; universal fold-in rules finalized and encoded into the Master Template Spec; VTH mapping redone using the reference page as primary source with an initial Chapter1-teaser/Chapter2-detail split proposal for Solution and Outcome. One new open item raised: VTH Glossary placement. |
| 2026-07-07 | Phase 3B refinement round 2 complete, all open items resolved. Cafe reviewed the VTH split-teaser proposal and redirected content assignment: Outcome trimmed to the walkthrough video only (hi-fi prototype and 4 handover cards move to Delivery); Background keeps text+image only (3 cards move to Problem); Problem gains the live page's HMW statement plus those 3 cards; the reference page's old "Problem" section (guidance/resonance/confidence, misfiled) becomes Solution's dedicated content. Glossary resolved: no page shows one, a sitewide term-popover component is planned instead (new Roadmap item 3.6, deferred until after full retrofit). Content Mapping Table's open items list now empty. |
| 2026-07-07 | **Phase 3B approved by Cafe.** Phase 4 (VTH v2 Preview) started. One copy-drafting note carried into Phase 4: reword the Solution section's Influence line, currently still phrased as problem-framing language since that content moved from Problem to Solution. |
| 2026-07-07 | Phase 3B refinement round complete. All 6 original open items resolved using new reference material Cafe provided (`nds.pdf`, `wst.pdf`, `ash.pdf`, `wso.pdf`, `Studier_development_log.md`, `Studier_project_development_record.docx`, `cafe_yi_UXDN423_2_reflection.pdf`). Key changes: NDS Validation resolved as self-test + live Figma entry point; WST's recipe conflict resolved (R24→R06 primary swap, recipe mapping file updated across 3 sheets); Background drafts confirmed for NDS/STD/WST; STD Product Evolution enriched with real dev-log iteration history; universal fold-in rules finalized (Outcome absorbs Screencast/Video/Preview, Delivery absorbs Final Design, Design absorbs DS content, Impact/Influence disambiguation rule) and encoded directly into the Master Template Spec; VTH mapping fully redone using the reference page as primary source with a Chapter1-teaser/Chapter2-detail content-splitting approach. One new open item: VTH Glossary section placement. |
| 2026-07-10 | VTH v2 Section Detail Spec finalized to v3 and approved. Math error fixed (22.2 percentage points, not a 33.3% relative increase). Contribution section reverted from 6 invented role-title cards back to the original 6 work-area cards without role badges (Option A, chosen after a pros/cons discussion; role titles read as artificially fragmented, e.g. "Stakeholder Liaison" was really part of the PM's job). |
| 2026-07-10 | VTH v2 built in full for the first time from the approved v3 spec: `works/victim-hub-v2.html` + `assets/css/vth-v2.css`. During this build, found 3 legacy pages (rekraft, welnest, whos-singing-outuiside) had duplicated/drifted Read More JS (investigated via subagent after Cafe pushed back on an under-informed initial recommendation). Consolidated into one shared, attribute-driven Expand/Collapse module in `case-interactions.js`; migrated all 3 legacy pages plus the new VTH v2 page. Cafe chose Option A (unify JS binding only, keep each page's existing CSS class names; full CSS+JS unification considered and explicitly deferred). |
| 2026-07-10 | **v4 Bug Fix Addendum resolved and coded (A1-A19).** Cafe supplied a 27-item bug report ("V2 bug.docx") with screenshots against the v1 build, plus one independent Chronology page bug. All items written into `VTH_v2_Section_Detail_Spec.md` as a spec addendum and approved by Cafe before any code changed, per the project's spec-first rule. Headline items: a new global two-tier heading rule (Tier A chapter-opener / Tier B sub-block-inside-chapter) added to Master Template Spec Section 4.1 — this rule applies to ALL future case study pages, not just VTH, and required four rounds of clarifying questions to pin down precisely which sections count as Tier A vs Tier B; Lo-fi prototype made an independent sub-block with a new reference image and an embedded iframe behind Read More; Design System reworked from a card grid to alternating 1/3-text + 2/3-media feature blocks; IA diagram switched from a blurry PNG export to an inline SVG reproduced verbatim from the reference page (root-caused after Cafe's own tip that the reference page generates it inline); Tier D dark-mode kicker contrast fixed; Chronology's "Back to Works" button repositioned bottom-right, fixing a `justify-content: space-between` left orphaned by an earlier button removal. Static validation passed (tag balance, no duplicate ids, aria-controls pairing, tier sequence, CSS brace matching). |
| 2026-07-10 | **v5 Bug Fix Addendum resolved and coded (B1-B6).** Cafe exported light-mode and dark-mode (all Read More panels expanded) PDFs of the v4-patched build and asked for a full UX/dev review, not just a spec-conformance check. Found the v4 dark-mode fix only covered Tier D; Tiers N/L/P still hard-coded accent text (kickers, meta labels, HENEX Lens values, Skills pills, Recipe labels) to light-mode brand colours, unreadable once darkened. Fixed with a new **ink-token pattern** (`--ux-accent-ink` / `--ux-strong-ink`), promoted to a **mandatory global standard** in Master Template Spec Section 10.4 (previously just a soft suggestion). VTH is the first page migrated; the other 7 UX case pages carry the same latent defect and are logged as new Roadmap item 3.6 (all-site migration, deferred, not folded into this build). Also fixed: spacing raised to a mid-range tier sitewide-standard-consistent level (Master Spec 6.5 updated too); Quick Exit's media/text ratio, which had been inverted because the `--reverse` layout variant swapped visual order via CSS `order` but not the underlying grid column widths; IA diagram's enlarge target changed from a cloned SVG to the standard image modal showing the real R2 `ia-structure.png`, removing the page-specific SVG-modal system built for A13; 3 Design System component images (previously 404 placeholder filenames) confirmed uploaded to R2 and wired in. Two items reviewed and intentionally left unchanged, logged as decisions: white-background PNG charts stay non-themeable in dark mode; repeated Influence summary blocks stay, at Cafe's request. All items coded with `[MODIFIED Bx]` tags; static validation re-run and passed. Phase 4 sign-off now pending Cafe's own visual walkthrough of this build. |
| 2026-07-12 | **v6 Bug Fix Addendum resolved and coded (C1-C12).** Cafe did the light+dark walkthrough of the v5-patched build (confirming the 3 DS images and `ia-structure.png` load correctly from R2) and supplied a second 12-item bug report with screenshots and annotated arrows ("v2-bug2.docx"). Root-caused all 12 against the actual code before proposing fixes, used a clarifying-questions round to resolve 4 genuinely open decisions (HMW treatment, hover-color scope, DS copy ownership, Go-live block granularity) before writing the addendum. Headline finding: Problem's H2 literally reused Solution's answer framing (same 3 keywords as Solution's own card titles), rewritten to describe the problem itself. Also found and fixed a real regression from v5: B1's dark-mode card border fix (34% mix) had made resting borders darker than the shared hover rule's border (28% mix), so hovering made cards look *less* highlighted, not more — this is now fixed as part of C4/C3 together. Card/influence hover color changed sitewide (`global.css`) to prefer each project's secondary theme color with a fallback chain, so it's a general fix, not VTH-scoped, but doesn't affect the other 7 pages until they define their own secondary color. Spacing escalated again (mid-range → large tier). Dark-mode Tier L root-caused to a low-percentage mix of a near-white token into near-black (muddy grey), fixed with a mid-tone token mix instead. All "lo-fi"/"hi-fi" abbreviations in visible copy spelled out. The 3 Design System feature blocks restructured to a real-title pattern (ASH reference) with merged copy, and their left/right alternation flipped. The Go-live section's 7 diagrams converted from a stacked image gallery to individual DS-style feature blocks, deliberately scaled down to read as subordinate to the Design System section per Cafe's explicit instruction. All items coded with `[MODIFIED Cx]` tags across `victim-hub-v2.html`, `vth-v2.css`, and `global.css`; Master Template Spec's card-hover documentation updated to match. Static validation re-run and passed, including a check that no stale references to the old Go-live gallery class names remained. Phase 4 sign-off now pending Cafe's visual walkthrough of this v6-patched build. |
| 2026-07-12 | **Master Template Spec upgraded to v2.0 — standards codified (closes audit-2 Batch G-2).** All standards graduated from the VTH pilot now live in the one canonical spec: five-tone background system with `.ux-tier-s` (Section 3 rewrite, supersedes the four-tier draft incl. the old grey Recipe special and the three-tier Delivery split), palette derivation recipe (new 2.4), frosted dual-bloom hero standard (7.1 rewrite), final spacing floors (6.5), HMW interlude pattern (new 4.8), and a new Engineering Contracts section (13) carrying E19/E15/E20/E21 plus the audit-2 layer-ownership, chrome-canonical and source-convention rules. Remaining pre-build verify items: audit-1 V7/V8 (eyeball during next VTH walkthrough, non-blocking). The unified build now has a single authority document. |
| 2026-07-12 | **All migration specs complete (M1-M4); cadence changed to spec-all-first, build-together.** Cafe deferred implementation until every UX page spec was defined. Palette rounds ran iteratively with visual comparisons: ASH approved as proposed; STD dark hero strengthened (option A); NDS and VSK dark heroes strengthened equivalently; RKT approved unchanged; WST went through three versions (original gold pair → #DD3700 trial → final purified v3 #FF8C00/#FFB200, harmony over contrast per Cafe); WSO's pair was inverted at Cafe's direction (ink-green leads, orange accents), with the near-black #30352E adjusted to candidate A #16402E for hue readability — this also dissolved the olive alert-ink desaturation problem. Master Spec 2.2 updated for WST/WSO. Specs M2/M3/M4 written from the Phase 3B mapping table (per-page tone ladders all adjacency-verified; NDS keeps its HMW and gains the live-verification Validation; RKT/VSK gain authored Contribution sections; WST carries the R24→R06 recipe change; WSO carries the S1 CSS rebuild, id fixes and draft-comment cleanup). |
| 2026-07-12 | **Audit-3 decisions resolved; execution phase opened.** Secondary colours confirmed as already authoritative in Master Spec 2.2 (no new colour decisions needed, WST/WSO planned primary changes land with their migrations); all UX heroes to bloom gradients this phase; HMW per material; paired cadence M-1..M-5; Architecture pass last. Batch M-1 (ASH+STD) started with palette derivation proposals. |
| 2026-07-12 | **Audit 3 complete (`docs/audits/Case_Unification_Audit.md`) — audit programme fully delivered.** Structural scans confirmed zero VTH-baseline adoption across all 7 other UX cases (no ux-tier classes, no chapter/section heads, no --ux-secondary, no ink tokens; old ux-section--tint alternation everywhere; heroes split 2 gradient / 5 cover-image; per-case CSS debt from ash.css 10 lines to wso-case.css 863/31% dead) and confirmed the 7 Architecture pages as already internally converged on their own arch-section language. Unification standard defined as U1-U7 for UX (tone ladder with a real .ux-tier-s class retiring the tier-n pilot trick, clean palette derivation recipe, two-tier headings with the E15 breakpoint rule, E19 contract, E20 interaction-ink lessons, spacing/structure patterns, Phase 3B content moves) and a deliberately light A-series for Architecture (chrome, contract sweep, token hygiene — keeps its type identity). 7-step per-page migration checklist includes the E21 legacy-class sweep and per-page dead-class ride-alongs. Proposed order ASH → STD → NDS/RKT → VSK/WST → WSO, relative efforts 55-95 vs VTH=100. Five decisions pending with Cafe. |
| 2026-07-12 | **Batch G-1 executed and closed.** Cafe resolved all four Audit-2 decisions (G-1 now; breakpoints to the sitewide ladder; index.html as canonical chrome file; readable source convention going forward) and cancelled the auto-resume scheduled task. Executed: 40 confirmed-dead selectors deleted across global.css (6, including trims from the shared C1 hover/base lists), pages.css (14), architecture-case.css (11, plus 2 emptied media blocks), philosophy.css (9) — every candidate re-verified by word-boundary search across all HTML+JS before deletion (JS only composes arch-popover__*/is-*/nav-open classes, no overlap); breakpoints aligned (philosophy 1100→1180 and 720→640, wso-case 1100→1180; philosophy's 719px hero min-height literal correctly left alone). ~6.4KB removed, brace balance verified on all five files, dead-class rescan returns zero, `[MODIFIED G1]` header notes added, pre-edit backups kept in the session workspace. Remaining follow-up: Cafe to eyeball philosophy card layouts between 640-720px. |
| 2026-07-12 | **Audit 2 complete (`docs/audits/Global_Site_Audit.md`).** Static analysis of all 23 pages, 17 CSS files (10,093 lines), 2 JS files. Consistency: layer model cleanly applied everywhere (global → pages/ux-case-study/architecture-case → per-page); header/footer content identical across pages (verified by normalised hashing) but copy-pasted into 23 files — biggest future-consistency risk, structural fix deferred to Phase 2 CMS with an interim "canonical file + copy propagation" rule proposed; breakpoint ladder is 1180/900/640/520 with drift only in philosophy.css (1100/720) and wso-case.css (1100). Simplification: wso-case.css is the outlier (863 lines, 21 of 67 classes dead including a private button system) — cleanup rides with its Audit 3 migration; 71 unused class selectors site-wide (supervised deletion batch proposed, substring-scan caveat documented); the intentional global/pages/ux-case-study selector split should be codified in the Master Spec as a layer-ownership contract; vth.css remains scheduled dead weight for cutover (C4/C6); JS layer healthy. Execution grouped as Batch G-1 (safe deletions + breakpoints), G-2 (documentation only), plus items deferred to existing tracks. Four decisions pending with Cafe. One-shot scheduled task `henex-audit-resume` (03:20 NZST) set up to auto-continue the audit queue after the usage window resets. |
| 2026-07-12 | **Batch 2 landed and regression-closed (E19-E21).** E19: v8 palette tokenised and the border custom-property contract implemented — border-color for the display-card family is declared only in global.css (base + shared hover), all tier/mode overrides became variable assignments, and the D2/E9 specificity workarounds were deleted; other case pages unaffected (fallbacks preserve old values). Cafe's regression then caught a dark Influence hover that still didn't paint. Two-layer fix: E20 swapped the dark hover ink from the desaturated accent-ink to alert-ink; E21 found the true root cause via Cafe's DevTools captures — the v2 markup still carried production's `vth-inline-influence` class, whose vth.css:74 dark rule declares border-color directly and beats the shared hover rule on a cascade tie (loads after global.css), bypassing the contract entirely. Fixed by removing the legacy class from v2 markup (5 places; vth.css untouched, production unaffected) and re-covering its spacing (30→56px rhythm alignment), label ink (--ux-strong-ink), and padding duties inside v2. Proactive sweep found the same vth.css line suppressing `.vth-metrics article` dark hover — patched with a commented INTEROP SHIM, scheduled for deletion at Phase 5 cutover together with audit items C4/C6. Full validation passed; Cafe confirmed the regression clean. Lesson recorded: legacy production classes left on v2 markup are contract bypass vectors; Audit 3's migration checklist must include a legacy-class sweep per page. |
| 2026-07-12 | **Audit programme started; Audit 1 complete; E11-E18 landed; VTH v2 visually signed off.** Three audits agreed (VTH design / global site / case unification), reports-first with batched execution. Audit 1 produced `docs/audits/VTH_v2_Design_Audit.md` (9 visual + 8 code findings, 3 execution batches). Its Batch 1 landed together with a run of Cafe-driven refinements, all documented as spec items E11-E18: dark tone S lifted 18→28%, light tone S deepened then replaced (with L and P) by the clean-blue ladder 方案二 after Cafe flagged the grey-lavender family as "显脏" (root cause: color-mix of desaturated navy into grey-whites), tone P moved to explicit clean stops, HMW promoted from an in-Problem card to a standalone removable full-width tier-d section (also removing the page's only large dark-card outlier), hero red bloom lifted from bottom-right to top-right to resolve a warm/cool clash with Overview at the seam (Option A of three), a mobile regression fixed where D6's unconditioned column-width override defeated the global ≤1180px section-head collapse (E15), and Process converted from tone P to a tier-d "second-act gateway" (Option A, arrow icon contrast patched after Cafe caught it). Decisions: D-2 "no neutral content sections" graduates to the sitewide UX-case standard; D-3 no Delivery separators; D-4 Batch 2 before case unification. Cafe signed off the page visually. Next: Batch 2 refactor (C1/C5 hover contract + C2 tokens), then Audits 2 and 3. |
| 2026-07-12 | **v8 Background System Addendum resolved and coded (E4-E7).** Two direction changes, both confirmed through visual comparison rounds before coding. (1) Hero rebuilt as Option C "frosted dual bloom": a navy (primary) and red (secondary) soft bloom on a blurred `::before` layer, matching the Home/Philosophy hero technique; light blooms deepened per Cafe's "richer colour" note, dark kept deep. (2) Whole-page background palette reworked so no content section is neutral — Overview→Recipe all sit on the navy primary family in four tones (S soft gradient new / L pale solid / P primary gradient / D deep emphasis), neutral reserved for nav/Related/footer only, adjacent sections always distinct, emphasis (Outcome, Delivery) deep. Implemented by re-tinting VTH-scoped `.ux-tier-n` to tone S (auto-converting all neutral content sections with no markup churn), splitting tier D by mode (light = mid-navy tone B so the large Delivery block isn't a heavy near-black area; dark = lifted deep-navy after Cafe found the near-black too dark), unifying the Delivery chapter's three sub-blocks to one deep background (Key Decisions tier-l→tier-d, Go-live tier-n→tier-d in markup), and moving Recipe off neutral onto tone L. VTH-only pilot; `vth.css`, `ux-case-study.css` and the Master four-tier standard untouched — if approved, the "content sections carry theme colour" rule can later graduate to a Master standard and roll out to the other 7 pages. Coded with `[MODIFIED E4-E7]` tags across `vth-v2.css` and `victim-hub-v2.html`; documented as the v8 Addendum in `VTH_v2_Section_Detail_Spec.md`. Static validation passed (tag balance, CSS brace matching, adjacent-tone sequence check). |
| 2026-07-12 | **v7 Bug Fix Addendum resolved and coded (D1-D6).** Cafe did a direct visual walkthrough of the v6-patched build and reported 8 issues across 7 annotated screenshots: C3's hover-color change had been too broad (non-Influence cards were also going red on hover); dark-mode hover was completely non-functional across all card types; Design Principles icons (a separate 9-up grid from the already-fixed Mixed Method Research grid) were never enlarged; spacing/padding appeared unchanged despite C6/C9; DS and Recipe section text was unreadable in dark mode, and DS/Go-live reference images showed inconsistent black/white backgrounds; the Go-live section's chapter header did not align with its content blocks below. All root-caused against the actual code before any fix was written, all defect-fix (not design-decision) items so no clarifying-questions round was used. Key findings: dark-mode hover failure was a **CSS specificity bug** (dark resting-state selectors outranked the shared `:hover` rule regardless of actual hover state, not a missing rule); the DS/Recipe dark-mode contrast issue traced to `vth.css` defining `--ux-dark: #00164B` unconditionally with no dark-mode override anywhere, breaking both the `var(--ux-dark, fallback)` pattern (fallback never triggers) and bare `var(--ux-dark)` references (no fallback at all) — fixed with a single page-scoped override cascading through both `ux-case-study.css` and `vth-v2.css`; the Go-live alignment issue traced to `.ux-section-head` and `.vth2-ds-feature` using different grid-template-columns values, fixed with a page-scoped override rather than touching the shared `ux-case-study.css` class. Spacing was escalated a second time as a defensive measure pending Cafe's confirmation after a hard refresh, since the C6 values were verified present in the file with no override conflicts found — genuine root cause vs. stale preview cache remains unconfirmed. All items coded with `[MODIFIED Dx]` tags across `vth-v2.css` and `global.css`; `victim-hub-v2.html` was not touched (CSS-only round). Static validation re-run and passed (HTML tag balance, duplicate ids, CSS brace matching across `vth-v2.css`/`global.css`/`ux-case-study.css`). Documented as v7 Addendum in `VTH_v2_Section_Detail_Spec.md`. Phase 4 sign-off now pending Cafe's hard-refreshed visual walkthrough of this v7-patched build. |
