# M-2 Migration Spec — NDS + RKT onto the VTH v2 Baseline

**Version:** 1.0 (spec-complete; implementation deferred to the unified build phase per Cafe's decision)
**Date:** 2026-07-12
**Palettes:** approved by Cafe 2026-07-12 (NDS with strengthened dark-hero blooms; RKT as originally proposed). Token derivation formulas follow M1_ASH_STD_Migration_Spec.md section 1 verbatim, with these values substituted.

## 1. Approved palettes

### NDS — primary #E11A2C (red), secondary #571060 (purple)
soft #F0616E · pale/L #FDEFF0 · tone-S #FAD9DC→#FDEEEF · tone-P #FEF4F5→#F6CCD0 · emphasis #8C1220/#A31626/#93131F · alert-ink #D875E8 · hero light base #FBECED→#FEF7F7, red bloom @0.36 / purple @0.30 · hero dark base #0A0304, **red-soft @0.74 / purple-bright @0.55, enlarged ellipses (strengthened round 2)** · dark tones via soft mixes per the standard formulas.
Note: the DS-internal red/purple swatch system inside Foundations is a separate content-level system; do not conflate with page theme tokens (mapping table §3 note 7).

### RKT — primary #187A62 (green), secondary #3CBC9A (mint)
soft #4BAE96 · pale/L #ECF7F4 · tone-S #D5EEE8→#EAF6F3 · tone-P #F2FBF8→#CBEAE1 · emphasis #114E40/#166553/#125445 · alert-ink #6FE9C6 · hero light base #EDF7F4→#F7FCFA, green @0.40 / mint @0.34 · hero dark base #020806, green-soft @0.55 / mint-bright @0.34 (original proposal, confirmed unchanged).

## 2. Target structure and tone ladders

### NDS (no Contribution — individual project; has Feedback; HMW exists in current Problem)
| # | Section | Tone | Content notes (mapping §3) |
|---|---------|------|---------------------------|
| 1 | Hero | bloom | Replaces cover-image system-hero |
| 2 | Overview | S | |
| 3 | Background | P | NEW — confirmed draft in mapping §3 |
| 4 | Problem | L | |
| 5 | HMW | D (standalone, E14) | Extracted from current system-hmw framing |
| 6 | Solution | S | |
| 7 | Outcome | D | Absorbs Screencast (rule 5) |
| 8 | Feedback | L | 3 quotes, well-formed |
| 9 | Process | D (gateway) | 3 nav cards: Research / Design / Validation (no Delivery chapter) |
| 10 | Research | S | System Audit + Principles and Scope folded in |
| 11 | Design | L | Foundations + Core Components + Documentation and Variables |
| 12 | Validation | S | NEW "live verification" format — confirmed draft + Figma microsite embed (link to be supplied by Cafe at build) |
| 13 | Reflection | P | |
| 14 | Recipe | L | R17 primary; add Secondary label (R15 R03 R09 R18) |
| 15 | Related | neutral | |

Adjacency: S P L D S D L D S L S P L ✓

### RKT (has Feedback; Contribution NEW; no HMW)
| # | Section | Tone | Content notes (mapping §6) |
|---|---------|------|---------------------------|
| 1 | Hero | bloom | Replaces cover-image rkt-hero |
| 2 | Overview | S | |
| 3 | Background | P | From current Concept section |
| 4 | Problem | L | |
| 5 | Solution | S | Add .ux-section base |
| 6 | Outcome | D | |
| 7 | Feedback | L | 2 quotes |
| 8 | Contribution | S | NEW — build plan in mapping §6 (two role cards: Project Management / UX Research and Design, ASH pattern) |
| 9 | Process | D (gateway) | 4 nav cards |
| 10 | Research | S | Discover |
| 11 | Design | L | Define + Develop's design half + Design System folded in |
| 12 | Validation | S | NEW — extracted from Develop's testing content + Retrospective references |
| 13 | Delivery | D | Final Design |
| 14 | Reflection | P | |
| 15 | Recipe | L | R07 primary; add Secondary label (R25 R26 R22 R24) |
| 16 | Related | neutral | |

Adjacency: S P L S D L S D S L S D P L ✓ (the old adjacent-tint violation between Process and Discover dissolves with the new ladder)

## 3. Build work items
Standard 7-step checklist (Case_Unification_Audit.md §3) applies. Page-specific: NDS Figma microsite link needed from Cafe at build; RKT Contribution copy authored from rkt.pdf plan and presented with the walkthrough; both pages get the E21 legacy-class sweep (system-*, rkt-* leftovers) and per-case CSS rebuilt to the token pattern.
