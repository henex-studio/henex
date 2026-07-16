# VTH v2 Design Audit — Report and Improvement Execution Log

**Version:** 1.0
**Date:** 2026-07-12
**Auditor role:** Senior UX/UI Designer + Senior Frontend Developer
**Scope:** `works/victim-hub-v2.html` and its CSS chain (`global.css` → `ux-case-study.css` → `vth.css` → `vth-v2.css`), current build including the v8 Background System Addendum (E4-E10).
**Evidence:** Full-page light-mode and dark-mode PDF exports supplied by Cafe (15 pages each, all Read More panels expanded), plus static code review. Findings that depend on hover, motion or live rendering are marked "verify live".

---

## 1. Overall assessment

The page is in strong shape. The narrative structure (3 chapters + ending), the two-tier heading system, the tone ladder from the v8 background rework, and the emphasis treatment on Outcome and Delivery all read clearly and consistently in both modes. Spacing rhythm is even and generous. Card behaviour, icon sizing and copy hierarchy are consistent across chapters. The remaining issues are concentrated in two areas: tone separation at several light-mode section seams, and dark-mode tone S still reading close to neutral black. On the code side the page works, but three rounds of hover regressions came from the same structural cause, and the v8 values are hard-coded in enough places that future tuning is more expensive than it should be.

No blocking defects. Recommended fixes are grouped into three batches at the end of this document.

---

## 2. Visual findings (V series)

Severity: H = should fix before Phase 5 cutover, M = fix in next batch, L = optional polish.

### V1 (H) — Light mode: tone S and tone L are nearly indistinguishable
Tone S (`#DCE5F5 → #EFF3FA` gradient) and tone L (`--ux-primary-pale` = `#EEF1F8` flat) overlap in perceived lightness. At three seams the "adjacent sections distinct" rule is not visually achieved: Problem (L) → Solution (S), Research (S) → Design (L), Design (L) → Validation (S). In the light PDF these boundaries are only detectable by shadow artefacts, not by colour.
**Fix direction:** widen the gap by roughly 6-8 points of perceived lightness. Either deepen tone S's start colour (e.g. `#D0DCF2`) and keep L as is, or keep S and deepen L (`--ux-primary-pale` is shared with other elements, so deepening S is the safer, page-scoped move). Verify all five S/L adjacencies after the change.

### V2 (H) — Dark mode: tone S still reads as near-black neutral
The dark tone S gradient (primary-soft 18% → 10% into `--theme-bg`) is too subtle. Overview, Solution, Contribution, Research and Validation all read as effectively black sections, which is the same "接近黑色的章节" problem previously reported against Go-live, now affecting five sections. Tone L (46%) and the lifted emphasis D read clearly navy; S does not.
**Fix direction:** raise the dark S mix to roughly 28% → 16%. Keep it clearly below L's 46% so the tier stays the quietest tinted tone, but above the threshold where it reads as a theme colour at all.

### V3 (M) — HMW band depth: verify E10 landed
In the light PDF the HMW band still shows the old near-black palette while Outcome below it shows the new tone B mid navy, which is exactly the mismatch E10 was written to fix. E10 is in the code now; the PDFs may pre-date it.
**Fix direction:** no new code. Hard-refresh and re-check both modes. If the band still mismatches Outcome after refresh, escalate as a bug.

### V4 (M) — Dark hero: navy bloom too faint
In dark mode the red bloom (bottom-right) reads clearly but the navy bloom (top-left) is barely perceptible against `#02040A`, so the hero reads as "black with one red glow" rather than a two-colour brand gradient.
**Fix direction:** raise the dark navy bloom alpha from 0.60 to around 0.72-0.78, or enlarge its ellipse. Light mode needs no change.

### V5 (M) — Light mode: tone P opens as a white band
Tone P's light gradient starts at `--theme-surface` (white), so the top of each P section (Background, Process, Reflection) reads as a neutral white strip before the tint ramps in. At the Contribution (S) → Process (P) seam this briefly re-introduces a "neutral-looking" area, softening the S/P boundary.
**Fix direction:** give the P gradient a small constant tint at 0% (e.g. start from `color-mix(primary-soft 8%, theme-surface)`) so the section is tinted edge to edge.

### V6 (L) — Delivery chapter: sub-block boundaries rely on spacing alone
Unifying the three Delivery sub-blocks onto one deep background is working as intended, but the only remaining boundary signal between hi-fi / Key Decisions / Go-live is vertical spacing. On a long continuous dark surface, a reader scrolling quickly can lose the transition.
**Fix direction (optional):** a hairline separator (`rgba(255,255,255,.12)`) or a slightly larger inter-sub-block gap inside tier-d. Cafe to decide whether the current spacing is enough.

### V7 (L) — Problem chapter H2 ink looks darker than sibling chapters
In the light PDF the Problem H2 appears closer to black than the navy `--ux-dark` used by Overview, Design and Validation H2s. This may be rendering perception (the navy #00164B is close to black) or an inherited color on the `.vth2-problem` path.
**Fix direction:** verify live with devtools. If a different ink is actually applied, align it to the chapter-head standard.

### V8 (L) — Dark mode: HENEX Lens link contrast borderline
The R24 link in Overview uses `--ux-strong-ink` (primary lightened 62%) on the dark tone S background. It is readable but visibly weaker than surrounding text. After V2 lifts the S background, re-check this pairing; if still weak, raise the dark `--ux-strong-ink` mix toward white.

### V9 (L) — Theme-to-neutral jump at Related Projects
Recipe (tone L navy) drops directly to the neutral near-black Related section. This is per the agreed rule (neutral reserved for global chrome) and it reads as a clean "end of case" break. Flagged only so the decision is recorded as intentional; no change recommended.

---

## 3. Code findings (C series)

### C1 (H) — Structural cause of repeated hover regressions
Three separate bug rounds (C4, D2, E9) were all the same failure: a high-specificity resting rule (`[data-theme=dark] .page .tier .card` or `.page .ux-tier-d .card`) silently outranking the shared lower-specificity `:hover` rule. Every future tier or mode override risks re-introducing it.
**Fix direction:** move card border colour to a custom-property contract. Resting rules set `--card-border` (wrapped in `:where()` to zero their specificity), the component reads `border-color: var(--card-border)`, and hover only overrides the variable. One structural pass over `global.css` + `ux-case-study.css` + `vth-v2.css` removes the entire failure class.

### C2 (H) — v8 palette values are hard-coded and duplicated
The emphasis palette appears as raw hex in two places (`#16224A/#223160/#19264A` in tier-d light and HMW light), the lifted dark emphasis gradient is duplicated verbatim (tier-d dark and HMW dark), `#FF5C5C` appears 6 times, and the tone S light hexes are inline. Tuning any of these now requires multi-site edits, which is how the V3/HMW drift happened in the first place.
**Fix direction:** define page-scope tokens once (`--ux-tone-s-light`, `--ux-tone-s-dark`, `--ux-emphasis-light`, `--ux-emphasis-dark`, `--ux-alert-ink`) and reference them everywhere. Pure refactor, no visual change, verified by before/after screenshot diff.

### C3 (M) — tier-n semantic override is a pilot-only pattern
VTH redefines `.ux-tier-n` (neutral by Master definition) as tone S inside the page scope. Acceptable for the pilot, but if the "content sections carry theme colour" rule graduates to the Master standard, introduce a real `.ux-tier-s` class instead, so `tier-n` keeps one sitewide meaning and other pages opt in explicitly.

### C4 (M) — `--ux-dark` root cause still lives in vth.css
The unconditional `--ux-dark: #00164B` in production `vth.css` (no dark override) is only worked around by the v2 page-scope override. At Phase 5 cutover, fix it at source and delete the workaround, otherwise the same class of bug returns on any page that loads vth.css without the v2 file.

### C5 (M) — Shared hover selector list in global.css is a maintenance hazard
The ~30-selector comma list has already needed two corrective rounds (C3 overreach, D1 revert). Any colour change to it risks all case pages at once. The C1 custom-property refactor largely dissolves this list; treat them as one work item.

### C6 (L) — Superseded vth.css rules on the v2 page
Rules like `.vth-problem`'s own gradient are dead on v2 (outranked by the v8 tier system) but still load. Harmless during the preview period; prune at Phase 5 cutover when vth.css and vth-v2.css merge.

### C7 (L) — vth-v2.css history layering
The file is 1262 lines with several rules edited two or three times across addenda (tier backgrounds especially). After Cafe signs off the design, do a consolidation pass: collapse superseded declarations, keep one `[MODIFIED]` tag per rule pointing at the final addendum, and re-verify braces/selectors.

### C8 — Positives worth keeping (no action)
Every interactive rule pairs `:hover` with `:focus-within`; iframes carry titles and sandbox attributes; images carry alt text and lazy loading; the modal has proper aria wiring; the two-tier heading system is applied consistently; `[MODIFIED]` tagging made this audit materially faster.

---

## 4. Improvement execution log

Ordered batches. Each batch is a separate confirmation gate: Cafe approves the batch, the batch is coded, statically validated, then visually verified by Cafe before the next batch starts.

### Batch 1 — Visual correctness (CSS-only, low risk)
| ID | Action | Files | Status |
|----|--------|-------|--------|
| V2 | Lift dark tone S to 28%→16% primary-soft mix | vth-v2.css | DONE 2026-07-12 (E11) |
| V1 | Deepen light tone S start to #CFDCF2, re-check all S/L seams | vth-v2.css | DONE 2026-07-12 (E12), seams pending Cafe visual check |
| V5 | Light tone P starts from 8% tint | vth-v2.css | DONE 2026-07-12 (E13) |
| V4 | Raise dark hero navy bloom alpha | vth-v2.css | DECLINED — Cafe confirmed current dark hero is right; no change |
| V3 | Verify HMW band matches Outcome after hard refresh | — | SUPERSEDED by E14: HMW is now a standalone tier-d section sharing the emphasis background directly |
| V7/V8 | Verify live; fix only if confirmed | vth-v2.css | PENDING verify |
| E14 | (Added by Cafe during Batch 1) HMW promoted to standalone full-width tier-d section, removable per case | victim-hub-v2.html, vth-v2.css | DONE 2026-07-12 |

Decision D-3 outcome: no separators inside Delivery. Fallback if sub-block boundaries still feel weak after Batch 1: raise intra-chapter sub-block spacing one step (96→128px), spacing-only, no new visual elements.

### Batch 2 — Code health (refactor, no intended visual change)
| ID | Action | Files | Status |
|----|--------|-------|--------|
| C2 | Tokenise v8 palette (`--ux-tone-s/p`, `--ux-emphasis`, `--ux-alert-ink`); tier rules merged to one per tier | vth-v2.css | DONE 2026-07-12 (E19) |
| C1+C5 | Border custom-property contract: border-color declared only in global.css (base + shared hover); all overrides became `--card-border(-hover)` assignments; D2/E9 workaround blocks deleted. Implemented via variable assignments rather than `:where()` — same outcome, simpler mechanics | global.css, ux-case-study.css, vth-v2.css | DONE 2026-07-12 (E19) |
| — | Static validation passed (braces, no stale classes, no family hover rules outside contract). Cafe light/dark screenshot regression | — | PASSED 2026-07-12, after E20+E21 fixes below |
| E20 | Regression finding: dark Influence hover ink (accent-ink #d57a7a) indistinguishable from resting border at 1px on navy → switched to alert-ink (#FF5C5C), matching tier-d Influence | vth-v2.css | DONE 2026-07-12 |
| E21 | Regression root cause (new instance of C4/C6): legacy `vth-inline-influence` class on v2 markup let vth.css:74 declare dark border-color directly, beating the shared hover rule on a cascade tie and bypassing the contract. Legacy class removed (5 places), duties re-covered in v2; same vth.css line also suppressed `.vth-metrics article` dark hover — INTEROP SHIM added, delete at cutover with C4/C6. **New rule for Audit 3's migration checklist: sweep each migrated page for legacy production classes left on v2 markup — they are contract bypass vectors.** | victim-hub-v2.html, vth-v2.css | DONE 2026-07-12 |

### Batch 3 — Cutover-linked (do at Phase 5 / Master graduation)
| ID | Action | Files |
|----|--------|-------|
| C3 | Introduce `.ux-tier-s` properly if the rule graduates to Master | ux-case-study.css, Master Spec |
| C4 | Fix `--ux-dark` at source in vth.css, remove v2 workaround | vth.css, vth-v2.css |
| C6 | Prune superseded vth.css rules when merging into production | vth.css |
| C7 | Consolidate vth-v2.css history layers after design sign-off | vth-v2.css |
| V6 | Optional Delivery sub-block separators, if Cafe wants them | vth-v2.css |

---

## 5. Decisions needed from Cafe

1. **D-1 Tone depth targets (V1/V2):** the proposed values are starting points; both need a visual confirmation round after coding, same flow as the hero comparison.
2. **D-2 Master graduation (C3):** does the "no neutral content sections" rule become the sitewide standard? This decision gates part of Audit 3's unification proposal, so deciding it before Audit 3 executes is preferable.
3. **D-3 Delivery separators (V6):** keep spacing-only, or add hairline separators between the three Delivery sub-blocks?
4. **D-4 Batch 2 timing:** the C1/C2 refactor can run before or after the other-case unification work. Before is cleaner (other pages inherit the fixed pattern); after is faster to first visible progress. Recommend before.
