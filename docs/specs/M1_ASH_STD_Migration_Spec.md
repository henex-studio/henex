# M-1 Migration Spec — ASH + STD onto the VTH v2 Baseline

**Version:** 1.0 (awaiting Cafe approval before any code)
**Date:** 2026-07-12
**Batch:** M-1 of 5 (paired cadence per Audit-3 decisions)
**Inputs:** Master Template Spec 2.2 colour pairs, U1-U7 standard (Case_Unification_Audit.md), Phase 3B Content Mapping Table sections 2 and 5, VTH v2 final tier ladder (E-series through E21).

---

## 1. Approved palettes

Both palettes were confirmed by Cafe via visual comparison on 2026-07-12 (ASH as proposed; STD with the richer dark-hero blooms, option A).

### ASH — primary #13838A (teal), secondary #A5205F (berry)
| Token | Light | Dark |
|---|---|---|
| --ux-primary / --ux-secondary | #13838A / #A5205F | same |
| --ux-primary-soft | #45AEB5 | same |
| --ux-primary-pale (tone L) | #EBF6F7 | color-mix(soft 46%, theme-bg) |
| --ux-tone-s | linear-gradient(150deg, #D4ECEE, #DFF1F3 58%, #E9F6F7) | soft 28%→16% into theme-bg |
| --ux-tone-p | linear-gradient(145deg, #F1FAFB, #CDE8EA 82%) | theme-bg → soft 30% |
| --ux-emphasis | linear-gradient(135deg, #10484C, #17595E 60%, #124F51) | soft 22/34/20% into primary-deep |
| --ux-alert-ink | #FF5C9E | same |
| Ink tokens | accent-ink = secondary; strong-ink = primary | secondary 55% white; primary 62% white |
| Hero | base #E7F3F6→#F4FAFB; teal bloom 14% 16% @0.46, berry bloom 90% 18% @0.30, blur 34px | base #020808; teal-soft @0.55, berry-bright @0.32, blur 36px |

### STD — primary #315CF6 (blue), secondary #7A3CEC (purple)
| Token | Light | Dark |
|---|---|---|
| --ux-primary / --ux-secondary | #315CF6 / #7A3CEC | same |
| --ux-primary-soft | #7392F9 | same |
| --ux-primary-pale (tone L) | #EEF2FE | color-mix(soft 46%, theme-bg) |
| --ux-tone-s | linear-gradient(150deg, #D9E3FE, #E3EAFE 58%, #EDF2FE) | soft 28%→16% into theme-bg |
| --ux-tone-p | linear-gradient(145deg, #F3F6FF, #CFDCFC 82%) | theme-bg → soft 30% |
| --ux-emphasis | linear-gradient(135deg, #1E38A8, #2848C7 60%, #2039AE) | soft 22/34/20% into primary-deep |
| --ux-alert-ink | #A97CFF | same |
| Ink tokens | as ASH pattern | as ASH pattern |
| Hero | base #EAF0FD→#F5F8FF; blue bloom @0.42, purple bloom @0.30 | base #02040A; **blue @0.74, purple @0.52, enlarged ellipses (approved option A)** |

Exact color-mix formulas follow VTH's E19 token block verbatim, with per-project values substituted.

## 2. Target structure and tone ladders

Tone assignments replicate the VTH final ladder. `.ux-tier-s` is introduced as a real class in `ux-case-study.css` in this batch (U1); VTH itself renames in M-5.

### ASH (full ladder, 1:1 with VTH)
| # | Section | Tone | Content notes (Phase 3B) |
|---|---------|------|--------------------------|
| 1 | Hero | bloom | Converts from gradient-tint hero; the support-hub-specific hero override block in ux-case-study.css (lines ~201-218) is deleted |
| 2 | Overview | S | |
| 3 | Background | P | |
| 4 | Problem | L | |
| 5 | HMW | D (standalone, E14) | Problem currently carries HMW framing; statement copy drafted at build for Cafe sign-off |
| 6 | Solution | S | Add missing .ux-section base |
| 7 | Outcome | D | Absorbs Screencast walkthrough video (universal rule 5) |
| 8 | Contribution | S | Merges Impacts' 6 cards (rule 9); reference pattern for other pages |
| 9 | Process | D (gateway, E18) | Static block converts to 4 nav cards |
| 10 | Research | S | Service Blueprint + Evaluative workshops |
| 11 | Design | L | IA + Design System folded in (rule 8) |
| 12 | Validation | S | Usability Test |
| 13 | Delivery | D | Final Design content (rule 7) |
| 14 | Reflection | P | ux-retro gains .ux-section base |
| 15 | Recipe | L | R15 primary; add Secondary Recipe label (R14 R06 R18 R05) |
| 16 | Related | neutral | unchanged |

Adjacency check: S P L D S D S D S L S D P L — no adjacent repeats. ✓

### STD (no Research chapter, no HMW)
| # | Section | Tone | Content notes (Phase 3B) |
|---|---------|------|--------------------------|
| 1 | Hero | bloom | Replaces studier-hero |
| 2 | Overview | S | |
| 3 | Background | P | NEW section, confirmed draft text in mapping table §5 |
| 4 | Problem | L | |
| 5 | Solution | S | Add .ux-section base |
| 6 | Outcome | D | From current Impact section |
| 7 | Contribution | S | From My Role (4 ready-made cards); kicker relabel decision below |
| 8 | Process | D (gateway) | 3 nav cards (Design/Validation/Delivery); Product Evolution rides here as supporting content, enriched from the dev log |
| 9 | Design | L | Core Features' design half (split per mapping) |
| 10 | Validation | S | Research Use Case, relabelled; iteration narrative from dev log |
| 11 | Delivery | D | Core Features' final feature set half |
| 12 | Reflection | P | |
| 13 | Recipe | L | R27 primary; add Secondary label (R18 R15 R24 R21) |
| 14 | Related | neutral | unchanged |

Adjacency check: S P L S D S D L S D P L — no adjacent repeats. ✓

## 3. Build work items

1. `ux-case-study.css`: add `.ux-tier-s` (structure only; values come from page tokens); delete the ASH-specific hero override block.
2. `ash.css` and `std.css`: rebuilt as token-definition files following vth-v2.css's E19 pattern (palette block, dark redefinitions, tier backgrounds via tokens, hero blooms). Bespoke leftovers (studier-hero etc.) removed; anything still needed migrates to the shared system.
3. Markup: restructure both pages to the section tables above; two-tier headings throughout; E21 legacy-class sweep (no old bespoke classes left on migrated markup); no border-color declarations outside the E19 contract.
4. Copy work needing Cafe sign-off at build time: ASH HMW statement; STD Background (draft already confirmed in mapping table); split/merge copy edits (Core Features split, Impacts merge).
5. Validation per page: brace/tag balance, tier adjacency, dead-class scan of the rebuilt per-case file, then Cafe light+dark PDF walkthrough (one gate for the batch).

## 4. Open points — resolved by Cafe, 2026-07-12

1. **STD Contribution kicker:** "Contribution", standardised across pages.
2. **ASH Feedback section:** omitted.
3. **ASH HMW copy:** the existing HMW text already on the ASH page is used directly.

**Status:** Spec approved in substance; implementation DEFERRED by Cafe's decision — all remaining UX page specs (M-2 NDS+RKT, M-3 VSK+WST, M-4 WSO) are to be defined first, then all migrations implemented together as one build phase.
