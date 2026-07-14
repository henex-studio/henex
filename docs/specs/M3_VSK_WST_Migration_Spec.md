# M-3 Migration Spec — VSK + WST onto the VTH v2 Baseline

**Version:** 1.0 (spec-complete; implementation deferred to the unified build phase)
**Date:** 2026-07-12
**Palettes:** approved by Cafe 2026-07-12 (VSK with strengthened dark-hero blooms; WST is the purified v3 pair, Master Spec 2.2 updated accordingly). Derivation formulas per M1 spec section 1.

## 1. Approved palettes

### VSK — primary #FF6000 (orange), secondary #207DC6 (blue)
soft #FF8E4D · pale/L #FFF2EA · tone-S #FFE3D1→#FFF1E8 · tone-P #FFF6F0→#FFD9BF · emphasis #A33E00/#C24A00/#AC4100 · alert-ink #4FA8F0 · hero light base #FFF1E8→#FFF9F5, orange @0.34 / blue @0.30 · hero dark base #0A0502, **orange-soft @0.70 / blue-bright @0.54, enlarged ellipses (strengthened round 2)**.

### WST v3 — primary #FF8C00 (pure amber), secondary #FFB200 (pure gold)
soft #FFAE4D · pale/L #FFF6E9 · tone-S #FFE9CC→#FFF4E4 · tone-P #FFF8ED→#FFE2B8 · emphasis #A85B00/#C46B00/#B06000 · alert-ink #FFCB4D · hero light base #FFF4E2→#FFFAF1, amber @0.38 / gold @0.36 · hero dark base #0A0601, **amber-soft @0.72 / gold @0.52 (strengthened)**. Same-family pair by Cafe's deliberate choice — harmony over contrast.

## 2. Target structure and tone ladders

### VSK (has Feedback; Contribution NEW; no Background section exists; no HMW)
| # | Section | Tone | Content notes (mapping §4) |
|---|---------|------|---------------------------|
| 1 | Hero | bloom | Replaces cover-image hero |
| 2 | Overview | S | |
| 3 | Problem | L | No Background slot on this page |
| 4 | Solution | S | Add .ux-section base |
| 5 | Outcome | D | |
| 6 | Feedback | L | 3 quotes |
| 7 | Contribution | S | NEW — build plan in mapping §4 (role cards from vsk.pdf: Research and Analysis Lead / UX-UI Designer) |
| 8 | Process | D (gateway) | 4 nav cards |
| 9 | Research | S | Scope and Findings + Research Synthesis |
| 10 | Design | L | Visual System, moved BEFORE Delivery (fixes reversed order) |
| 11 | Validation | S | Concept Exploration and Testing, relabelled |
| 12 | Delivery | D | Final Design Decisions |
| 13 | Reflection | P | |
| 14 | Recipe | L | R19 primary; add Secondary label (R21 R16 R25 R06) |
| 15 | Related | neutral | Add .ux-section base |

Adjacency: S L S D L S D S L S D P L ✓

### WST (has Feedback; no Contribution — individual; Background new; Validation extracted; no HMW)
| # | Section | Tone | Content notes (mapping §7) |
|---|---------|------|---------------------------|
| 1 | Hero | bloom | Replaces cover-image hero |
| 2 | Overview | S | |
| 3 | Background | P | NEW — confirmed draft in mapping §7 |
| 4 | Problem | L | |
| 5 | Solution | S | Add .ux-section base |
| 6 | Outcome | D | Absorbs Preview (rule 5) |
| 7 | Feedback | L | 3 quotes |
| 8 | Process | D (gateway) | 4 nav cards |
| 9 | Research | S | Discover incl. findings grid |
| 10 | Design | L | Define + Design System (Deliver) folded in |
| 11 | Validation | S | Extracted 6-test-card sub-block from Develop |
| 12 | Delivery | D | Final Design (Comparison View, Contact, Inspection) |
| 13 | Reflection | P | |
| 14 | Recipe | L | **R06 primary (changed from R24 per resolved conflict)**; Secondary label R24 R18 R21 R12; also update the recipe mapping doc |
| 15 | Related | neutral | |

Adjacency: S P L S D L D S L S D P L ✓

## 3. Build work items
Standard 7-step checklist applies. Page-specific: VSK Contribution copy authored from vsk.pdf plan, presented with the walkthrough; WST recipe change also edits `docs/content/2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.md`; both get the E21 sweep and token-pattern CSS rebuilds. WST's per-case CSS must also apply the new primary sitewide on that page (old #FB8A02/#202124 references die).
