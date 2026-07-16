# DS Convergence Handover — 2026-07-04

Branch: `ds-convergence` (45 files changed, +4091 / -709 vs main)

---

## 1. What's Done

### Phase 1 — DS Visual Reference v2: COMPLETE
Self-contained HTML mood board approved. File: `docs/visual-reference/HENEX_Design_System_Visual_Reference_v2.html`

### Phase 2 — DS Implementation: ~75% COMPLETE

Completed work items:

**Global tokens and cleanup**
- Hardcoded colors replaced across all CSS files (global, ux-case-study, pages, about, philosophy, per-project CSS)
- Section divider borders removed globally
- Tabler CDN added, global UI icons replaced
- Footer and button tokens added to global.css
- Spacing token scale added: `--space-2xs` (4px) through `--space-2xl` (72px), applied to global.css, ux-case-study.css, pages.css, about.css, philosophy.css, chronology.css
- Card base classes C1–C5 defined in global.css, redundant card properties cleaned from shared and per-project CSS
- Card hover rules unified (navigable vs display cards)
- Shadow and radius unified

**Layout system**
- L3 base class created (merged 7 two-column layout variants)
- `.ux-section-head` editorial header class added

**Hero system — fully unified**
- Base `.ux-hero` uses `--ux-theme`-driven gradient (light + dark mode)
- `.ux-hero--cover` modifier created for background-image projects
- Uses `background: none` + longhand properties to clear base gradient (CSS shorthand + custom properties don't parse reliably)
- Hero h1/p use global tokens `--hero-text` / `--hero-text-soft`
- Philosophy hero refactored to `page-hero` base class
- Base h1: removed `white-space:nowrap` + 1180px override

**Hero migration — all 15 UX projects done**

Cover mode projects (7): VTH, GBA, BT2, GFP, NWT3, OPP, PYZ
- Each defines `--hero-img` on `.ux-case-page--xxx`
- HTML uses `class="ux-hero ux-hero--cover"`

Gradient mode projects (8): ASH, STD, NDS, RKT, SAG, VSK, WEL, WSO
- Use base `.ux-hero` gradient (driven by per-project `--ux-theme` / `--ux-soft` / `--ux-pale`)

**Per-project hero tuning done**
- ASH: switched from cover mode to gradient mode with stronger tint (radial 36%/54% light, 44%/28% dark). `.ux-hero__mark` hidden. Rule in ux-case-study.css under `.ux-case-page--support-hub .ux-hero`
- STD: custom gradient `linear-gradient(135deg, #D6DEFF, #E0DAFF, #EDE5FF)`, not using base `.ux-hero` gradient. Gradient-clip text effect removed from h1. Rules in std.css under `.studier-hero`

**Infrastructure**
- `middleware.js`: added `VERCEL_ENV === 'preview'` bypass for password protection (Hobby plan can't set Preview env vars)
- Vercel auto-deploys preview on push to `ds-convergence`

### Supporting documents created
- `docs/ia/VTH_Content_Mapping_v1.md` — VTH content mapped to IA v4 framework
- `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` — Template spec with A1–A15 global DS decisions, B1–B5 case study decisions, Part C execution plan

---

## 2. What Remains in Phase 2

1. **Section component audit** — UX case study section components (problem, solution, retro, research, etc.) not yet unified into shared patterns. Each project still uses custom section backgrounds and layouts.

2. **Per-project CSS cleanup** — Many per-project CSS files still have redundant rules that duplicate what's now in ux-case-study.css (e.g., custom kicker styles, section backgrounds). Need audit pass per Template Spec Part C step 5.

3. **Master doc update** — `HENEX_Master_2026-06-15_v1.4.md` needs to reflect all DS convergence changes (new tokens, classes, rules).

4. **Architecture pages** — BT2 and 4 new arch pages untouched by DS convergence.

---

## 3. Phases 3–7 Status: NOT STARTED

Per `docs/handover/HENEX_DS_IA_Convergence_Spec_v1_1.md`:

| Phase | Task | Status | Dependency |
|-------|------|--------|------------|
| 3 | VTH Content Mapping | Document exists (`VTH_Content_Mapping_v1.md`), needs user review | Can parallel Phase 2 tail |
| 4 | VTH v2 Preview | Not started | Phase 2 + 3 |
| 5 | VTH v2 Integration | Not started | Phase 4 |
| 6 | ASH Retrofit | Not started (hero done) | Phase 5 |
| 7 | STD Retrofit | Not started (hero done) | Phase 6 |

---

## 4. Master Technology Roadmap

Per `docs/specs/HENEX_Master_2026-06-15_v1.4.md`:

- Phase 1 (Static build): Complete. 15 pages live, all audited.
- Phase 2 (CMS integration): Not started. Blocked by DS convergence completion + content stability.
- Phase 3 (Database): Conditional. Depends on CMS selection.

---

## 5. Key Technical Patterns to Know

**Hero system architecture**
- Two modes: gradient (default `.ux-hero`) and cover (`.ux-hero--cover` with `--hero-img`)
- Cover mode MUST use `background: none` before longhand properties — `background: var(--hero-img) center / cover no-repeat` fails because browsers can't parse CSS custom properties in background shorthand
- Per-project gradient intensity override pattern: `.ux-case-page--xxx .ux-hero { background: ... }` with stronger radial/linear values (ASH is the first example)

**Theme token pattern**
- Each UX project defines: `--ux-theme`, `--ux-dark`, `--ux-soft`, `--ux-pale` on its `.ux-case-page--xxx` wrapper
- Hero text: `--hero-text: #FFFFFF`, `--hero-text-soft: rgba(255, 255, 255, 0.76)` (dark bg), theme-text / theme-text-soft (light bg)
- Global: `--theme-text: #202124`, `--theme-text-soft: #4E5661`

**R2 CDN**
- Base URL: `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/`
- ASH has separate light/dark images (`hero-light.png` / `hero.png`) but currently uses gradient mode, not loading images

**Breakpoints**: 1180px, 900px, 640px, 520px

**Card system**: C1 (standard, 5 variants), C2 (media), C3 (quote), C4 (nav), C5 (callout). All defined in global.css.

**Layout system**: L1 (section header + content), L2 (aside + content), L3 (content + media, base class merged from 7 variants), L4 (card grid 2/3/4 col).

---

## 6. Files Modified (key ones)

| File | What changed |
|------|-------------|
| `assets/css/global.css` | +263 lines. Spacing tokens, card base C1–C5, hover, shadow, radius |
| `assets/css/ux-case-study.css` | +302/-changes. Hero system, cover mode, ASH gradient override, kicker/section tokens, L3 base |
| `assets/css/pages.css` | Card migration to C4, hover unified, spacing tokens |
| `assets/css/philosophy.css` | Hero refactored to page-hero base |
| `assets/css/std.css` | Hero migrated to gradient, gradient-clip removed |
| `assets/css/nds.css` | Hero image URL fixed to R2 CDN |
| `assets/css/about.css` | Hardcoded colors replaced |
| Per-project CSS (vth, ash, vsk, rkt, wso, wst) | Spacing tokens, card cleanup |
| `middleware.js` | Preview env bypass added |
| All 15 `works/*.html` | Hero class updates (added ux-hero--cover where needed) |
| `docs/specs/HENEX_Case_Study_Template_Spec_v1.md` | New file |
| `docs/ia/VTH_Content_Mapping_v1.md` | New file |

---

## 7. Known Issues and Gotchas

1. ASH hero images exist on R2 but are NOT being loaded (switched to gradient mode). If reverting to cover mode: light = `hero-light.png`, dark = `hero.png` (not `hero-bg.png`).

2. STD `--std-gradient` token still defined but no longer used for hero. Still used by `.studier-solution` section background.

3. Vercel Hobby plan cannot set environment variables for Preview environment. Password protection is bypassed on preview via `VERCEL_ENV === 'preview'` check in middleware.js.

4. VTH Content Mapping doc exists but hasn't been formally reviewed/approved by user — technically Phase 3 gate hasn't passed.
