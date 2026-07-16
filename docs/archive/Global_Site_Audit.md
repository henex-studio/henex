# Global Site Audit — Consistency and Code Simplification

**Version:** 1.0
**Date:** 2026-07-12
**Scope:** Global pages (index, works, lab, philosophy, about, works-chronology, password), the shared CSS layers (`global.css`, `pages.css`), the two shared JS files, and the site-wide structure of all 17 CSS files (10,093 lines total) and 23 HTML pages.
**Method:** Static analysis (file inventory, loading-pattern mapping, markup hashing, automated dead-class scan, breakpoint and selector-overlap scans). No visual walkthrough was performed for this audit; findings that would benefit from one are marked.
**Constraint:** Report only. No code was changed.

---

## 1. Overall assessment

The site's architecture is healthier than its size suggests. The layer model is consistently applied: every page loads `global.css`; global pages add `pages.css` plus at most one page file; UX cases add `ux-case-study.css` plus one case file; all 7 Architecture cases share a single `architecture-case.css` with no per-case files at all. Header and footer content is identical across all sampled pages, differing only in `aria-current` and source formatting. The token system (`--theme-*`) carries both modes, and raw hex usage in the shared layers is modest.

The real findings are concentrated in four places: one oversized and heavily dead per-case file (`wso-case.css`), a scatter of unused selectors left behind by past design iterations (71 site-wide), small breakpoint drift in three files, and the structural fact that the header/footer markup is copy-pasted into 23 files, which is the single biggest source of future inconsistency risk.

---

## 2. Findings — Consistency (G series)

### G1 (M) — Chrome markup is duplicated 23 times
Header and footer content is currently identical everywhere (verified by normalised hashing), but only by discipline: every page carries its own copy, some minified to one line, some pretty-printed. Any future chrome change requires 23 coordinated edits, and the works.html footer already shows an independent formatting lineage. Phase 1 rules exclude frameworks and build steps, so this cannot be fully fixed now.
**Direction:** short term, normalise formatting so the blocks are byte-identical and diffable; the real fix arrives with Phase 2 (Tina CMS or a tiny include step at build time). Record chrome as "edit in one reference file, propagate by copy" until then.

### G2 (M) — Breakpoint drift in three files
The de-facto sitewide ladder is 1180 / 900 / 640 / 520. Three files deviate: `philosophy.css` uses 1100 and 720 (five media blocks), `wso-case.css` uses 1100 once, and `vth-v2.css` has the deliberate 1181 min-width (E15, correct usage). The 1100/720 values predate the ladder and create slightly different collapse moments on adjacent pages.
**Direction:** migrate 1100→1180 and 720→640 (or 900, judged per layout) in philosophy and WSO during their next touch. Low risk, verify each layout at the new widths.

### G3 (L) — Formatting split between minified and readable source
Roughly half the CSS files (and several HTML bodies) are single-line minified, the rest pretty-printed, reflecting different creation eras. This slows diffs and review, and it is why the footer hashes differed while content matched.
**Direction:** adopt one convention (readable source, since there is no build pipeline) and normalise files opportunistically when they are next edited. Not worth a dedicated pass.

### G4 (L) — Global pages' own consistency is good
about/chronology/password page files are small, fully used (zero dead classes), and sit correctly on the `pages.css` hero/section system. Philosophy is the largest global page file (575 lines) but its size reflects genuinely bespoke components (recipe equation, dimension cards), not drift. No action beyond G2.

---

## 3. Findings — Code simplification (S series)

### S1 (H) — wso-case.css is the outlier: oversized and one-third dead
At 863 lines it is twice the size of any other per-case file, and 21 of its 67 classes (31%) match nothing in any HTML or JS file — including a private button system (`ux-button--primary/--soft`) duplicating global buttons, and whole orphaned blocks (`wso-hmw`, `wso-ds-grid`, `wso-feedback-wall`, `wso-final-grid`, `wso-meta` and more) from a superseded page structure.
**Direction:** this page is already on the Audit 3 migration list; do the cleanup as part of its VTH-baseline migration rather than as a separate pass. Expected outcome: WSO shrinks to the 300-500 line band of its peers.

### S2 (M) — 71 unused class selectors site-wide
Beyond WSO: `pages.css` 14 (mostly project-card media modifiers and tag-dot variants from an earlier Works design), `architecture-case.css` 11 (arch-diamond-row, arch-tech-cluster families), `philosophy.css` 9 (recipe-card--a/b/c, hero-formula), `global.css` 6, small counts elsewhere. Caveat: the scan is substring-based against all HTML+JS; classes composed dynamically would false-positive, so each deletion needs a quick manual confirm.
**Direction:** one supervised deletion batch per file, cheapest ordered first (global.css and pages.css together, then architecture-case.css, philosophy.css). Skip vth.css (dies at cutover anyway) and wso (handled by S1).

### S3 (M) — The intentional two-layer selector overlap should be documented, not removed
`global.css` and `pages.css`/`ux-case-study.css` intentionally split the same selectors (C1/C2/C3 card base vs page-specific skin), which the scan surfaces as overlap (.project-card, .ux-card and others defined in two files). This is the working design, and the E19 border contract now formalises the card family's half of it.
**Direction:** no code change. Write the layer contract into the Master Template Spec (which layer owns border/shadow/radius vs padding/background/typography), so future files follow it deliberately rather than by imitation.

### S4 (M) — vth.css is scheduled dead weight
82 lines, 2 unused classes, one known contract-hostile rule (line 74, shimmed by E21), and every rule either superseded by vth-v2.css or due to merge at Phase 5 cutover. Already covered by audit-1 items C4/C6; listed here only so the global picture is complete.

### S5 (L) — Raw hex in shared layers is acceptable but drifting
28 distinct hex values in `global.css` (40 occurrences) is workable, but several belong to the brand gradient family that Home/Works/Lab heroes repeat inline (rgba(60,140,244), rgba(255,86,136), rgba(49,187,142) clusters in pages.css).
**Direction:** when heroes are next touched, lift the three brand bloom colours into tokens (--brand-blue/pink/green already exist or near-exist as philosophy vars); do not do a dedicated pass.

### S6 (L) — JS layer is healthy
Two files, 367 lines total, no duplication since the 2026-07-10 Read More consolidation into `case-interactions.js`. No action.

---

## 4. Improvement execution log

Ordered for later batching. Every batch is report-gated on Cafe's confirmation, per the audit programme's working agreement.

### Batch G-1 — Safe deletions (supervised)
| ID | Action | Files | Status |
|----|--------|-------|--------|
| S2a | Delete confirmed-unused selectors in global.css + pages.css | global.css, pages.css | DONE 2026-07-12. All 40 candidates re-verified with word-boundary search across HTML+JS (JS composes only arch-popover__*/is-* classes, no overlap) before deletion; mixed comma lists trimmed rather than removed |
| S2b | Same for architecture-case.css (11) and philosophy.css (9) | architecture-case.css, philosophy.css | DONE 2026-07-12, including 2 emptied media blocks in architecture-case.css |
| G2 | Align philosophy/wso breakpoints to the 1180/900/640/520 ladder | philosophy.css, wso-case.css | DONE 2026-07-12 (1100→1180 both files, 720→640 philosophy). Cafe to eyeball philosophy card layouts between 640-720px |

Decisions recorded (2026-07-12): G-1 executed immediately; breakpoints unified to the sitewide ladder; canonical chrome file is index.html; source convention is readable pretty-printed (forward-looking, no mass reformat). Brace balance verified on all five touched files; dead-class rescan returns zero on the four cleaned files; ~6.4KB removed.

### Batch G-2 — Documentation, no code
| ID | Action | Where |
|----|--------|-------|
| S3 | Write the two-layer CSS ownership contract into Master Template Spec | UX_Case_Master_Template_Spec_v1.md |
| G1 | Record the chrome copy-propagation rule and designate the reference file | Master Template Spec or Plan |

### Deferred to existing tracks
| ID | Rides with |
|----|-----------|
| S1 (WSO cleanup) | Audit 3 migration of WSO to the VTH baseline |
| S4 (vth.css) | Phase 5 cutover (audit-1 C4/C6) |
| G1 structural fix | Phase 2 (Tina CMS) |
| S5 (hero colour tokens) | Next hero-touching change |

---

## 5. Decisions needed from Cafe

1. **G-1 timing:** run the safe-deletion batch now (before Audit 3), or fold each file's deletions into whenever that file is next touched? Running it now shrinks the surface Audit 3 works against; folding it in avoids a dedicated review round.
2. **G2 breakpoint alignment:** confirm 1100→1180 and 720→640/900 as the target mapping, or keep philosophy's bespoke values (its layouts are unusual enough that the drift may be intentional).
3. **G1 chrome reference:** which page should be the canonical chrome source that all copies follow (recommend index.html)?
4. **Formatting convention (G3):** confirm "readable, pretty-printed source" as the standard for files touched from now on.
