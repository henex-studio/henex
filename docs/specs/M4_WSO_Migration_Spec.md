# M-4 Migration Spec — WSO onto the VTH v2 Baseline

**Version:** 1.0 (spec-complete; implementation deferred to the unified build phase)
**Date:** 2026-07-12
**Palette:** approved by Cafe 2026-07-12 — inverted pair, ink-green candidate A leading, orange accenting. Master Spec 2.2 updated. Derivation formulas per M1 spec section 1.

## 1. Approved palette

### WSO — primary #16402E (ink green, candidate A), secondary #FF7701 (orange)
soft #4B8A6A · pale/L #EDF5F0 · tone-S #D6EAE0→#E9F4EE · tone-P #F1F9F5→#CDE7DA · emphasis #1C4A36/#25593F/#1F4E38 · alert-ink #FF9A4D (from the vivid secondary — the old olive-secondary desaturation problem no longer exists) · hero light base #ECF4F0→#F7FBF9, green @0.40 / orange @0.30 · hero dark base #020805, **green-soft @0.68 / orange-bright @0.50, enlarged ellipses (strengthened)**.

## 2. Target structure and tone ladder

WSO (has Feedback; no Contribution — individual; Background promoted from inside Discover; Validation extracted; no HMW)
| # | Section | Tone | Content notes (mapping §8) |
|---|---------|------|---------------------------|
| 1 | Hero | bloom | Replaces wso-hero cover; fix anomalous h1 id `wso-hero-title` → `case-title` |
| 2 | Overview | S | |
| 3 | Background | P | PROMOTED from the nested h3 inside Discover (existing biographical copy, restructure not re-author) |
| 4 | Problem | L | |
| 5 | Solution | S | Already has .ux-section base |
| 6 | Outcome | D | Absorbs video placeholder (rule 5) |
| 7 | Feedback | L | 3 quotes; tier now consistent with WST |
| 8 | Process | D (gateway) | 4 nav cards |
| 9 | Research | S | Discover minus the promoted Background content |
| 10 | Design | L | Define's design half + Develop (typography, colour, iconography, interaction, accessibility) |
| 11 | Validation | S | Extracted comparative usability test (currently only prose inside Define) |
| 12 | Delivery | D | Final Design scene walkthrough; remove duplicate id="final-design" |
| 13 | Reflection | P | |
| 14 | Recipe | L | R16 primary; add Secondary label (R10 R13 R12) |
| 15 | Related | neutral | |

Adjacency: S P L S D L D S L S D P L ✓

## 3. Build work items

Standard 7-step checklist applies, plus WSO-specific load:
1. **S1 cleanup (audit-2):** wso-case.css rebuilt from scratch on the token pattern; the 21 dead classes (private ux-button system, wso-hmw, wso-ds-grid, wso-feedback-wall, wso-final-grid, wso-meta and the rest) die with the rebuild. Target size: the 300-500 line band of its peers.
2. Remove draft artifacts: developer comments `<!-- Fix 1 -->` … `<!-- Fix 11 -->` (some referencing VSK as copy source).
3. E21 legacy-class sweep across all wso-* classes retained by the rebuild.
4. New primary means every current #30352E/#FF7701 usage in the page CSS is re-derived, not carried over.
