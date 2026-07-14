# Case Unification Audit — Migrating All Case Pages to the VTH v2 Baseline

**Version:** 1.0
**Date:** 2026-07-12
**Scope:** The 7 other UX case pages (ASH, NDS, RKT, STD, VSK, WST, WSO) and the 7 Architecture case pages, audited against the VTH v2 baseline (all E-series standards through E21).
**Inputs:** Structural scans of all 14 pages and their CSS; the Phase 3B Content Mapping Table (section-by-section content gaps, already approved); the Master Template Spec; audit 1 and audit 2 findings.
**Constraint:** Report only. No code was changed. Cafe has already decided (D-2) that the "no neutral content sections" rule graduates to the sitewide UX-case standard, and that UX and Architecture remain two distinct type standards.

---

## 1. Current state

### UX cases: zero baseline adoption
The scan is unambiguous: none of the 7 UX pages use any part of the VTH v2 system. Zero `ux-tier-*` classes, zero two-tier headings (`ux-chapter-head`/`ux-section-head`), no `--ux-secondary`, no ink tokens. All 7 still run the old binary rhythm (neutral sections alternating with 2-6 `ux-section--tint` sections). Every page defines a primary `--ux-theme` (ASH teal #13838A, NDS purple, RKT red, STD green #187A62, VSK blue #315CF6, WST orange #FF6000, WSO neutral dark #30352E) but no page has a secondary. Migration is therefore a per-page retrofit, not a tweak: markup restructure (tiers + heading hierarchy) plus a palette derivation plus content moves from the Phase 3B mapping.

Two further facts shape sequencing. First, hero styles split the group: ASH and STD use gradient heroes, the other five use cover images (`ux-hero--cover`). Second, per-case CSS debt varies widely: ash.css is 10 lines (cleanest start), wso-case.css is 863 lines with 31% dead code (heaviest, already tagged S1 in audit 2).

### Architecture cases: internally consistent, different language
All 7 Architecture pages share one CSS file, one section system (`arch-section` with soft/henex variants), consistent heroes, recipes present, and their own token accents (award gold). They are already what the UX side is trying to become: converged on one template. Nothing in the scan justifies forcing the UX tone ladder onto them; their neutral-with-soft-alternation rhythm is a deliberate type identity.

---

## 2. The unification standard

### 2.1 What graduates to every UX case (U series)

U1 — Tone ladder. Four tones from the project's primary family: S soft gradient, L pale solid, P primary gradient, D emphasis. Implemented as a real `.ux-tier-s` class in `ux-case-study.css` (audit-1 C3), retiring VTH's pilot trick of redefining `tier-n`. VTH v2 migrates to the new class name as part of the rollout. Content sections are never neutral; neutral belongs to chrome, Related and footer only. Adjacent sections always differ; D is reserved for emphasis moments (Outcome, Delivery, HMW, Process-style gateways).

U2 — Palette derivation recipe. Each project derives from its primary and secondary: `--ux-primary-soft` (mid-tone for dark-mode mixing), `--ux-primary-pale` (tone L), tone S/P stops built the "clean" way (whiter base, clear hue, no desaturated color-mix into grey — the E16 lesson), `--ux-emphasis` light and dark, `--ux-alert-ink` (brightened secondary passing ~4.5:1 on the emphasis navy-equivalent), and the two B1 ink tokens with dark-mode redefinitions. The recipe goes into the Master Spec so every page derives values the same way instead of copying VTH's navy numbers.

U3 — Two-tier headings. `ux-chapter-head` for chapter openers, `ux-section-head` for sub-blocks, with the E15 rule that any page-level column override must be wrapped in a min-width query.

U4 — E19 border contract. Card families assign `--card-border`/`--card-border-hover`; border-color is declared only in global.css. Per-case CSS must not declare border-color on contract-family cards.

U5 — Interaction inks. Influence-only red hover (secondary), bright hover inks on dark surfaces (E20 lesson: desaturated inks are invisible at 1px), tier-d card treatment (translucent white cards, white text, alert-ink labels).

U6 — Structure and spacing. Section rhythm 144/56/96px family, Recipe on tone L, optional standalone removable HMW section (E14 pattern), Delivery-style unified emphasis chapters where the content warrants it.

U7 — Content moves. Each page applies its already-approved Phase 3B mapping (contribution gaps on RKT/VSK, validation handling, fold-in rules) during the same migration, so structure and content land together.

### 2.2 What Architecture adopts (A series) — and what it keeps
Adopt: chrome consistency rules (index.html canonical), the E19 contract for its card families (already wired through global.css lists; per-case border-color declarations to be swept), token hygiene and the sitewide breakpoint ladder (done in G-1), and the E21 legacy-class sweep during any future edit.
Keep: the `arch-section` language, neutral/soft alternation, its own hero system, award-gold accents, single shared CSS file. No tone ladder, no two-tier heading retrofit. The type distinction is the point.

---

## 3. Per-page migration checklist (template)

Each UX page migration runs this sequence, one page per batch, spec-first as with VTH:

1. Palette derivation proposal (primary + secondary + derived tokens per U2) — needs Cafe sign-off per project, since 6 of 7 pages have no secondary colour today.
2. Section-by-section tier plan (tone sequence table like VTH's, adjacent-distinct verified) + content moves from the Phase 3B mapping.
3. Markup restructure: tiers, heading hierarchy, HMW section if the case has one.
4. CSS rebuild on the shared system; per-case file shrinks to derivations and genuinely bespoke components.
5. Legacy-class sweep (E21): no production-era classes left on migrated markup; no per-case border-color on contract families.
6. Dead-class cleanup for that page's CSS file (audit-2 S2 leftovers ride along; WSO's S1 rides here).
7. Static validation + Cafe light/dark PDF walkthrough, same gate as VTH rounds.

Estimated relative effort (VTH retrofit = 100): ASH 55, STD 60, NDS 70, RKT 70, VSK 75, WST 75, WSO 95.

---

## 4. Proposed sequencing

Batch order: ASH first (smallest CSS debt, gradient hero closest to baseline, validates the U2 derivation recipe on a non-navy palette), then STD, then NDS/RKT as a pair, then VSK/WST, WSO last (heaviest cleanup, benefits from a mature process). Architecture's A-series items are a single light pass, schedulable anytime.

VTH v2 itself gets a small closing batch: rename onto `.ux-tier-s`, then the already-scheduled Phase 5 cutover items (C4/C6, shim removal).

---

## 5. Decisions — all resolved by Cafe, 2026-07-12

1. **Secondary colours:** already defined — Master Template Spec section 2.2 carries the confirmed primary+secondary pairs for all 8 projects (including WST's and WSO's planned primary changes, not yet applied in their CSS). That table is the authority; each migration derives its token set from it per the U2 recipe, with a visual comparison round before landing.
2. **Hero treatment:** all UX cases convert to the frosted dual-bloom gradient hero during this rebuild phase, including the five cover-image pages. (Reverses this report's initial keep-covers recommendation, per Cafe.)
3. **HMW sections:** include where the case has HMW material, omit otherwise — the E14 standalone section already provides this flexibility.
4. **Batch cadence:** paired batches, 5 gates — M-1 ASH+STD, M-2 NDS+RKT, M-3 VSK+WST, M-4 WSO solo, M-5 VTH closing (tier-s rename + cutover items).
5. **Architecture A-series:** runs after all UX migrations complete.
