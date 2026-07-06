# DS Convergence — Execution Tracker

> Last updated: 2026-07-05
> Branch: `ds-convergence` (45 files changed, +4091 / -709 vs main)

---

## Phase Status Overview

| Phase | Task | Status | Completion | Notes |
|-------|------|--------|------------|-------|
| 1 | DS Visual Reference v2 | COMPLETE | 100% | Approved. File: `docs/visual-reference/HENEX_Design_System_Visual_Reference_v2.html` |
| 2 | DS Implementation | IN PROGRESS | ~75% | Core tokens, hero system, card system done. Section components and per-project cleanup remain. |
| 3 | VTH Content Mapping | DRAFT READY | Document exists | `docs/ia/VTH_Content_Mapping_v1.md` awaiting user review. Can parallel Phase 2 tail. |
| 4 | VTH v2 Preview | NOT STARTED | 0% | Blocked by Phase 2 + 3 |
| 5 | VTH v2 Integration | NOT STARTED | 0% | Blocked by Phase 4 |
| 6 | ASH Retrofit | NOT STARTED | 0% | Hero done in Phase 2. Blocked by Phase 5. |
| 7 | STD Retrofit | NOT STARTED | 0% | Hero done in Phase 2. Blocked by Phase 6. |

---

## Phase 1 — DS Visual Reference v2: COMPLETE

Deliverable: Self-contained HTML mood board.
File: `docs/visual-reference/HENEX_Design_System_Visual_Reference_v2.html`
Gate: User approved.

---

## Phase 2 — DS Implementation: Detailed Status

### Completed Work Items

**1. Global tokens and cleanup (Template Spec A2, A3)**

| Item | Spec Ref | Status |
|------|----------|--------|
| Hardcoded colors replaced across all CSS files | A3 | DONE |
| Section divider borders removed globally | A2 | DONE |
| Tabler CDN added, global UI icons replaced | A4 | DONE |
| Footer and button tokens added to global.css | A15 | DONE |
| Spacing token scale (`--space-2xs` 4px through `--space-2xl` 72px) applied | D16 | DONE |
| Card base classes C1-C5 defined in global.css | D03 | DONE |
| Card hover rules unified (navigable vs display) | A1, D04 | DONE |
| Shadow and radius unified | D05, D06 | DONE |

**2. Layout system**

| Item | Status |
|------|--------|
| L3 base class created (merged 7 two-column layout variants) | DONE |
| `.ux-section-head` editorial header class added | DONE |

**3. Hero system — fully unified (D07, D17)**

| Item | Status |
|------|--------|
| Base `.ux-hero` with `--ux-theme`-driven gradient (light + dark mode) | DONE |
| `.ux-hero--cover` modifier for background-image projects | DONE |
| Hero h1/p use global tokens `--hero-text` / `--hero-text-soft` | DONE |
| Philosophy hero refactored to `page-hero` base class (D12) | DONE |
| All 15 UX projects migrated (7 cover mode, 8 gradient mode) | DONE |
| ASH: switched to gradient mode with custom radial tint | DONE |
| STD: custom gradient, gradient-clip text removed | DONE |

**4. Infrastructure**

| Item | Status |
|------|--------|
| `middleware.js` preview env bypass | DONE |
| Vercel auto-deploys preview on push | DONE |

**5. Supporting documents**

| Document | Status |
|----------|--------|
| `docs/ia/VTH_Content_Mapping_v1.md` | CREATED (awaiting review) |
| `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` | CREATED (confirmed) |

### Remaining Work Items

| # | Item | Spec Ref | Priority | Dependency |
|---|------|----------|----------|------------|
| R1 | Section component audit | Template Spec Part C step 2 | HIGH — blocks R2 | **DONE 2026-07-05** |
| R2 | Per-project CSS cleanup | Template Spec Part C step 5 | HIGH | **DONE 2026-07-06** |
| R3 | Master doc update (`HENEX_Master_v1.4.md`) | — | MEDIUM | R1, R2 |
| R4 | Architecture pages (BT2 + 4 new arch pages) | — | LOW | None (independent track) |

### Execution Order (confirmed 2026-07-05)

1. R1: Section component audit → establish shared section patterns in `ux-case-study.css`
2. R2: Per-project CSS cleanup → remove redundant rules using R1 patterns as reference
3. R3: Master doc update → record all DS convergence changes
4. R4: Architecture pages → DS adapt BT2 and new arch pages

R1 completed 2026-07-05. Deliverables:
- `docs/specs/DS_Section_Component_Audit_v1.md` — audit findings + shared pattern catalog
- `assets/css/ux-case-study.css` — 18 shared component classes added (section tiers, feedback grid, icon card, gallery, swatch, card stack, component row, scroll viewport, scope block, chip flow, showcase figure) with responsive rules at 1180/640/520px
- All additions are additive-only; no existing classes modified

R2 completed 2026-07-06. Per-project CSS cleanup:
- NDS: 741→449 lines. 19 system-* classes migrated to shared ux-* equivalents. system-theme-ds now overrides --ux-theme for purple sections.
- VSK: removed duplicate ux-feedback-*/ux-swatch-* definitions. Migrated vsk-principle-card→ux-icon-card.
- RKT: removed duplicate ux-feedback-* definitions (kept 2-col grid override).
- WSO: removed duplicate ux-feedback-* definitions.
- WEL: removed duplicate ux-feedback-* definitions (kept accent color override).
- STD/ASH: already clean, no changes needed.

R3 (master doc update) is next.

---

## Known Issues and Gotchas

1. ASH hero images exist on R2 but NOT loaded (gradient mode). Light = `hero-light.png`, dark = `hero.png`.
2. STD `--std-gradient` token still defined, used by `.studier-solution` section background only.
3. Vercel Hobby plan: password protection bypassed on preview via `VERCEL_ENV === 'preview'` in middleware.js.
4. VTH Content Mapping doc not yet formally reviewed (Phase 3 gate not passed).

---

## Key Files Modified in Phase 2

| File | Changes |
|------|---------|
| `assets/css/global.css` | +263 lines. Spacing tokens, card base C1-C5, hover, shadow, radius |
| `assets/css/ux-case-study.css` | +302/-changes. Hero system, cover mode, ASH gradient override, kicker/section tokens, L3 base |
| `assets/css/pages.css` | Card migration to C4, hover unified, spacing tokens |
| `assets/css/philosophy.css` | Hero refactored to page-hero base |
| `assets/css/std.css` | Hero migrated to gradient, gradient-clip removed |
| `assets/css/nds.css` | Hero image URL fixed to R2 CDN |
| `assets/css/about.css` | Hardcoded colors replaced |
| Per-project CSS (vth, ash, vsk, rkt, wso, wst) | Spacing tokens, card cleanup |
| `middleware.js` | Preview env bypass added |
| All 15 `works/*.html` | Hero class updates |

---

## Reference Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Convergence Spec v1.1 | `docs/handover/HENEX_DS_IA_Convergence_Spec_v1_1.md` | Master plan, decision record, phase definitions |
| Template Spec v1 | `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` | DS direction, Part A-C execution plan |
| Handover 2026-07-04 | `docs/handover/DS_Convergence_Handover_2026-07-04.md` | Technical handover with patterns and gotchas |
| Master v1.4 | `docs/specs/HENEX_Master_2026-06-15_v1.4.md` | Overall project status and file inventory |
| VTH Content Mapping | `docs/ia/VTH_Content_Mapping_v1.md` | Phase 3 deliverable draft |
