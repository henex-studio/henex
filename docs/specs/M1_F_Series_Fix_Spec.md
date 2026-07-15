# M-1 F-Series Fix Spec — ASH + STD Walkthrough Corrections

**Version:** 1.0
**Date:** 2026-07-14
**Status:** APPROVED for execution (Cafe confirmed the analysis and the STD Develop-chapter plan, 2026-07-14). No code has been changed yet; this document is the complete execution guide.
**Source:** Cafe's Bug.docx (2026-07-14) plus light/dark PDF walkthroughs of both pages, root-caused against the code.
**Files in scope:** `assets/css/ux-case-study.css`, `assets/css/ash.css`, `assets/css/std.css`, `works/accessibility-support-hub.html`, `works/studier.html`, and the two spec documents listed in Part E.

**Execution rules.** Tag every change `[MODIFIED Fx]`. No inline CSS anywhere (existing inline `style=""` attributes introduced in the M-1 build are themselves a defect, see F13). Do not touch vth-v2.css, victim-hub-v2.html, or any other page. After coding, run the standard static validation (brace/tag balance, duplicate ids, tier adjacency, legacy-class sweep) plus the new Section 13.8 self-audit checklist before handing to Cafe.

---

## Part A — Shared layer fixes (`ux-case-study.css`)

### F1. Five-tone block: relocate to end of file and raise text-rule specificity

**Root cause (bug class E2/E21, fourth occurrence).** The tier block added in M-1 sits mid-file at specificity (0,1,1). Later rules in the same file win cascade ties against it:

1. `.ux-video-grid h2 { color: var(--ux-dark) }` (line ~310) defeats `.ux-tier-d h2 { color:#fff }` — this is the unreadable dark-on-dark ASH Outcome heading.
2. `.ux-retro { background: 16% accent gradient }` (line ~1178) defeats `.ux-tier-p` on the Reflection sections, so Reflection never actually showed tone P.

**Fix.** Move the entire five-tone block (the `.ux-tier-s` comment banner through `.ux-hmw-statement strong`) to the very end of `ux-case-study.css`, after the 520px media query. Additionally raise every tier-d text rule by prefixing `.ux-section`:

```css
.ux-section.ux-tier-d { background: var(--ux-emphasis, var(--theme-text)); color: #fff; }

.ux-section.ux-tier-d h2,
.ux-section.ux-tier-d h3,
.ux-section.ux-tier-d p {
  color: #fff;
}

.ux-section.ux-tier-d .ux-chapter-head p,
.ux-section.ux-tier-d .ux-section-head__desc,
.ux-section.ux-tier-d figcaption {
  color: rgba(255, 255, 255, .8);
}

.ux-section.ux-tier-d .ux-kicker {
  color: var(--ux-alert-ink, #fff);
}
```

Keep the card rules (`.ux-tier-d .ux-card` etc.) unchanged in content but move them with the block. `.ux-tier-s/l/p` background rules keep their current selectors; relocation alone fixes the `.ux-retro` tie. `figcaption` is added because tier-d sections now host figures (F7, STD Outcome) whose captions read `--theme-muted` otherwise.

### F2. Shared Process navigation card and four-column grid

**Root cause.** `.ux-card-grid--four` and the arrow nav-card style exist only in vth-v2.css (page-scoped). ASH markup referenced `--four` against a class that does not exist in its loaded stylesheets, so the nav cards fell back to a single-column stack, and no page had the arrow affordance.

**Fix.** Add to `ux-case-study.css` (generalised verbatim from `.vth2-nav-card`; VTH renames onto these in M-5):

```css
.ux-card-grid--four {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.ux-nav-card {
  display: block;
  padding: var(--space-md);
  border: 1px solid var(--card-border, color-mix(in srgb, var(--ux-primary, var(--ux-theme)) 30%, var(--theme-border)));
  border-radius: var(--ux-radius);
  background: color-mix(in srgb, var(--ux-primary, var(--ux-theme)) 6%, var(--theme-surface));
  text-decoration: none;
  transition: transform .18s ease, box-shadow .18s ease;
}

.ux-nav-card:hover,
.ux-nav-card:focus-visible {
  transform: translateY(-3px);
  box-shadow: var(--theme-shadow-card-hover, 0 12px 28px rgba(0, 0, 0, .12));
}

.ux-nav-card h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  color: var(--ux-primary, var(--ux-theme));
}

.ux-nav-card h3 .ti-arrow-down {
  font-size: 1.05rem;
  color: color-mix(in srgb, var(--ux-primary, var(--ux-theme)) 60%, var(--theme-text-soft));
}

.ux-section.ux-tier-d .ux-nav-card h3 .ti-arrow-down {
  color: rgba(255, 255, 255, .72);
}
```

Responsive: add `.ux-card-grid--four` to the existing 1180px rule that collapses `--three` to two columns, and to the 640px rule that collapses to one column.

Markup pattern for every Process gateway (mirrors VTH exactly):

```html
<div class="ux-card-grid ux-card-grid--four">
  <a class="ux-card ux-nav-card" href="#research"><h3>Research <i class="ti ti-arrow-down" aria-hidden="true"></i></h3><p>…</p></a>
  …
</div>
```

### F3. Recipe section: VTH layout, theme-coloured node tags

**Root cause.** M-1 shipped the pre-VTH Recipe arrangement: node tags placed after the description, plus a `<small>` triad line under the recipe link, and the Secondary Recipe label relied on an inline style.

**Clarified by Cafe 2026-07-14:** the node tags do NOT use the three dimension colours. They keep the existing theme-coloured `.ux-recipe-tags span` styling (which both pages already render correctly). Only the layout aligns to VTH.

**Fix.** Add one shared utility to `ux-case-study.css`:

```css
.ux-secondary-recipe {
  margin-top: 28px;
}
```

Markup template for every Recipe section (layout per VTH, colours per existing theme tags):

```html
<p class="ux-recipe-primary"><span>Primary recipe</span><a href="…">R15 · …</a></p>
<div class="ux-recipe-tags">
  <span>Perception</span>
  <span>Empathy</span>
  <span>Interface</span>
</div>
<p>Description paragraph…</p>
<p class="ux-recipe-primary ux-secondary-recipe"><span>Secondary Recipe</span></p>
<div class="ux-recipe-popovers">…</div>
```

Changes from the current build: tags move directly under the recipe name (before the description), the `<small>` triad line is removed from the primary block, and the Secondary Recipe label's inline margin style becomes the `.ux-secondary-recipe` class.

### F4. Kicker hierarchy sizing

**Root cause.** Chapter-level and sub-block kickers both render 0.8125rem; the two-tier heading rule had no typographic difference, and Cafe read this as inconsistency (ASH Overview vs Background).

**Fix.** Add to `ux-case-study.css` and codify in Master Spec 6.1 (Part E):

```css
/* Kicker hierarchy: chapter-level kickers keep the base 0.8125rem;
   sub-block (Tier B) kickers step down. */
.ux-section-head .ux-kicker {
  font-size: .72rem;
}
```

### F5. Aligned-figure utility and sub-block spacing utilities

Two shared utilities the layout fixes below need, which also remove all inline styles:

```css
/* Figure aligned under a .ux-section-head's right (description) column. */
.ux-desc-aligned {
  display: grid;
  grid-template-columns: minmax(260px, .34fr) minmax(0, .66fr);
  gap: 0 var(--space-xl);
}

.ux-desc-aligned > figure,
.ux-desc-aligned > div {
  grid-column: 2;
}

@media (max-width: 1180px) {
  .ux-desc-aligned {
    grid-template-columns: 1fr;
  }
  .ux-desc-aligned > figure,
  .ux-desc-aligned > div {
    grid-column: auto;
  }
}

/* Sub-block rhythm (Master Spec 6.5): 96px between Tier B blocks,
   56px before first content element, 32px between stacked media. */
.ux-subsection { margin-top: 96px; }
.ux-content-gap { margin-top: 56px; }
.ux-media-gap { margin-top: 32px; }
```

---

## Part B — Per-page token fixes (`ash.css` and `std.css`, identical pattern)

### F6. Dark-mode token completeness and emphasis depth

**Root cause 1 (tier-l too bright in dark mode: Design, Recipe).** The M1 spec requires a dark redefinition of `--ux-primary-pale` (soft 46% into theme-bg); the build omitted it, so dark tier-l rendered the light near-white value.

**Root cause 2 (tier-d too bright in dark mode: HMW, Outcome, Process, Delivery).** The dark `--ux-emphasis` formula mixes soft into `--ux-primary`. VTH's primary (#00164B) is near-black so this works there; ASH teal and STD blue are mid-tone primaries, producing a bright emphasis. The spec formula says "into the deep primary".

**Fix, both files.** In the light token block add:

```css
--ux-primary-dark: color-mix(in srgb, var(--ux-primary) 55%, black);
```

(The 55%-black formula reproduces VTH's hand-picked deep value almost exactly, so it becomes the standard derivation.)

In the `[data-theme=dark]` block add the missing pale override and repoint the emphasis mixes:

```css
--ux-primary-pale: color-mix(in srgb, var(--ux-primary-soft) 46%, var(--theme-bg));
--ux-emphasis: linear-gradient(135deg,
  color-mix(in srgb, var(--ux-primary-soft) 22%, var(--ux-primary-dark)),
  color-mix(in srgb, var(--ux-primary-soft) 34%, var(--ux-primary-dark)) 60%,
  color-mix(in srgb, var(--ux-primary-soft) 20%, var(--ux-primary-dark)));
```

Light-mode `--ux-primary-pale`, `--ux-tone-s`, `--ux-tone-p`, `--ux-emphasis` values stay as approved. Dark `--ux-tone-s`/`--ux-tone-p` stay as coded (not flagged in the walkthrough), but eyeball them during the self-audit since ASH/STD softs are brighter than VTH's.

---

## Part C — ASH fixes (`works/accessibility-support-hub.html` + minor `ash.css`)

### F7. Background and Solution: side-by-side layout

These images upscale badly at full container width. Convert both sections from chapter-head-plus-full-width-figure back to a side-by-side arrangement: keep the kicker + H2 + paragraphs in a left `.ux-copy` column, figure in the right column, using the existing `.ux-media-row` grid (copy `.66fr` / figure `.34fr` — for these two sections use text-wide, image-narrow: `<div class="container ux-media-row">` with copy first, figure second). Tier classes unchanged (Background `ux-tier-p`, Solution `ux-tier-s`).

### F8. Research: evaluative workshop figures aligned to description width

Wrap the two evaluative figures (evaluative-table, evaluation-pathway) each in `<div class="ux-desc-aligned">…</div>` so they render at the width of the description column above, not full container width. The second figure keeps a `.ux-media-gap` wrapper spacing instead of its current inline style.

### F9. Roadmap figure: move to Process

Remove the roadmap `.ux-scope-block` figure from the end of Research. Insert it in the Process section, directly below the nav-card grid, inside `<div class="ux-content-gap">`. It describes the whole process, so it belongs with the gateway. The chart is a static white-background image (B6 precedent applies, no dark variant needed); its figcaption is covered by the F1 tier-d figcaption rule.

### F10. Design: IA concept sketch right-aligned

The hand-drawn IA concept sketch moves out of full-width flow into `<div class="ux-desc-aligned">` under the Information Architecture sub-block heading, so it sits right-side at description width. The large ia.png diagram below it stays full width (it is enlarge-suitable and modal-linked).

### F11. Design: Colour module reversed

Apply `ux-ds-module--reverse` to the Colour module so the swatch grid sits left (wide column) and the text right, matching Cafe's note. Iconset and Accessibility modules keep their current orientation (they already alternate).

### F12. Validation: stacked test blocks

Add a page rule to `ash.css`:

```css
.ux-case-page--support-hub .ux-test-grid {
  grid-template-columns: 1fr;
}
```

Each test block already stacks text above figure, so at one column the image automatically matches the text container width.

### F13. Remove all inline styles

Replace every `style="margin-top: …"` introduced in M-1 with the utilities from F5 (`ux-subsection` for the 96px sub-block seams, `ux-media-gap` for the 32px figure gaps, `ux-content-gap` for the Contribution 32px grid gap — use `ux-media-gap` there, 32px). This applies to both ASH and STD.

### F14. Reflection: naming and prose

Card titles become **Value / Learned / Next** (sitewide standard, matching VTH). The Next card's `<ul>` list is rewritten as one prose paragraph: "Conduct testing on the high-fidelity prototypes, run cognitive testing on the new icon set, and document the methodology into a knowledge base for the Ministry team."

### F15. Recipe: VTH layout

Rebuild the Recipe right column per the F3 template (theme-coloured tags Perception/Empathy/Interface moved under the recipe name, no `<small>` triad, Secondary Recipe label present). Remove the `vth2-recipe` class from the section element — it references another page's stylesheet (an E21-class contamination); tier-l plus the F6 dark pale override now covers the background in both modes. Same removal in STD.

### F16. Process: nav cards to shared pattern

Rebuild the four nav cards per the F2 markup pattern (`ux-card ux-nav-card`, `ti-arrow-down` in each h3), inside `ux-card-grid--four`. Card descriptions stay as written.

---

## Part D — STD fixes (`works/studier.html` + minor `std.css`)

### F17. Problem: remove product image

Delete the dashboard figure from Problem; the section becomes text-only (keep `.ux-problem__grid` collapse to a single text column, or drop the grid wrapper and keep the text block; remove the now-unused `.studier-problem__grid` column override from std.css if the grid wrapper goes).

### F18. Outcome: product showcase and CTA

Add to Outcome, below the three outcome cards: the dashboard figure (modal-linked, as the finished-product display) inside `<div class="ux-content-gap">`, then the platform CTA:

```html
<div class="studier-platform-cta">
  <a class="button button--primary" href="https://uxstudier.vercel.app" target="_blank" rel="noopener noreferrer">Open Studier Platform</a>
  <p>Public access starts from a registration screen.</p>
</div>
```

On tier-d the CTA note needs white-soft text: add `.ux-section.ux-tier-d .studier-platform-cta p { color: rgba(255,255,255,.78); }` to std.css (assigning colour only; no border-color).

### F19. Solution: icons instead of numbers

Replace `<span>01/02/03</span>` with VTH-style unframed glyph icons. Promote the VTH icon-card pattern to shared classes in `ux-case-study.css` (values verbatim from `.vth2-icon-card`/`.vth2-icon`; VTH renames in M-5):

```css
.ux-glyph-card { text-align: center; }

.ux-glyph {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-md);
  color: var(--ux-primary, var(--ux-theme));
  font-size: 2.75rem;
  line-height: 1;
}

.ux-glyph-card h3 { text-align: center; font-size: 1.22rem; margin-bottom: var(--space-sm); }
.ux-glyph-card p { text-align: center; }
```

STD Solution cards become `ux-card ux-glyph-card` with `<i class="ti ti-… ux-glyph">`. Suggested icons (executor may adjust within Tabler, keep line style consistent): create and publish = `ti-list-details`, participant flows = `ti-route`, export and analyse = `ti-chart-bar`. Dark-mode glyph tint: on tier-s the page's dark card rules already lift the card; add to std.css if the glyph reads too dark: `[data-theme=dark] .ux-case-page--studier .ux-glyph { color: color-mix(in srgb, var(--ux-primary) 40%, #DDE7FF); }` (VTH's E-series glyph fix pattern).

### F20. Develop chapter (approved structure change)

1. Process nav becomes four cards with arrows (F2 pattern): Design / Develop / Validation / Delivery, each `href` to its section id.
2. The four evolution-timeline cards move out of Process into a new **Develop** section (`id="develop"`, `ux-tier-s`) inserted between Design and Validation, with a Tier A chapter head. Suggested chapter copy: kicker "Develop", H2 "From a three day MVP to a reusable research tool.", description reusing the current Product Evolution paragraph.
3. Add 2-3 additional simple cards summarising the build approach from `docs/reference/Studier_development_log.md` (feedback-driven iteration highlights: task navigation, locked review, data cleaning, republish workflow). Draft the card copy at build; flag for Cafe sign-off in the walkthrough.
4. Validation moves from tone S to tone L to keep adjacency. Final STD ladder: S P L S D S **D L S L D** P L (Process D, Design L, Develop S, Validation L, Delivery D) — verified, no adjacent repeats.
5. Update the M1 spec's STD table with this ladder (Part E).

### F21. Reflection naming

"Limitation" → "Learned" (title only, content unchanged). Value / Learned / Next then matches the sitewide standard.

---

## Part E — Documentation updates (part of this execution round)

1. **Master Spec** (`docs/specs/UX_Case_Master_Template_Spec_v1.md`):
   - Section 2.4: add `--ux-primary-dark` derivation row (`color-mix(in srgb, var(--ux-primary) 55%, black)`) and mark the dark `--ux-primary-pale` override (soft 46% into theme-bg) as MANDATORY.
   - Section 6.1: add the kicker hierarchy rule (chapter 0.8125rem / sub-block 0.72rem).
   - Section 13.8: new self-audit checklist (text provided below).
2. **M1 spec** (`M1_ASH_STD_Migration_Spec.md`): append an F-series addendum note (this document's existence, STD ladder change, Develop chapter).
3. **Plan** (`HENEX_Project_Execution_Plan.md`): update log entry for the F-series round.

### Master Spec Section 13.8 text (insert before Section 14, renumber nothing else)

```markdown
### 13.8 Per-page build self-audit checklist (NEW 2026-07-14, graduated M-1 F-series)

Run after building or modifying any UX case page, before handing to Cafe. Every
item failed here shipped as a real defect in the M-1 first build.

1. **Dark token completeness.** The [data-theme=dark] page block redefines ALL
   of: --ux-primary-pale (soft 46% into theme-bg), --ux-tone-s, --ux-tone-p,
   --ux-emphasis. A missing one silently renders its light value on dark.
2. **Emphasis depth.** Dark --ux-emphasis mixes into --ux-primary-dark (55%
   black derivation), never into a raw mid-tone primary. Only near-black
   primaries (VTH) tolerate direct mixing.
3. **Contrast pass, per tier, both modes.** Check headings, body, kickers,
   figcaptions on every tier — especially any heading class that also appears
   in a later shared rule (cascade ties: E2/E21/F1 bug class). New shared
   rules must beat later same-file rules by specificity, not position.
4. **Shared-class existence.** Every class referenced in the markup exists in
   a stylesheet that page actually loads. No vth2-* or other page-scoped
   classes (E21 sweep includes classes borrowed from newer pages, not just
   legacy production classes).
5. **Process gateway format.** ux-card-grid--four + ux-nav-card + ti-arrow-down
   in every h3; cards horizontal on desktop.
6. **Recipe format.** Theme-coloured node tags placed directly under the
   primary recipe name (before the description), no <small> triad line,
   Secondary Recipe label present via .ux-recipe-primary + .ux-secondary-recipe.
7. **Reflection naming.** Cards are exactly Value / Learned / Next, prose only,
   no bullet lists inside cards.
8. **Kicker hierarchy.** Chapter kickers 0.8125rem, sub-block (.ux-section-head)
   kickers 0.72rem. No other sizes.
9. **Image placement by enlargement suitability.** Wide, detail-rich images may
   run full width (modal-linked). Small diagrams, sketches and tall screenshots
   must not upscale: use side-by-side layout or .ux-desc-aligned width.
10. **No inline styles.** Zero style="" attributes; spacing via the shared
    utilities (ux-subsection 96 / ux-content-gap 56 / ux-media-gap 32).
11. **Tier ladder re-verified** after any structural change (adjacency rule),
    and the page's M-spec table updated to match.
```

---

## Part F — Walkthrough round 2 fixes (F22-F30, 2026-07-14, executed live in-session)

These were diagnosed and fixed after Cafe's screenshot walkthrough of the F1-F21 build, not pre-specified. Recorded here after the fact so the checklist stays authoritative. All items touch `ux-case-study.css` unless noted; all confirmed via brace-balance and structural re-validation.

### F22/F29. Chapter-kicker cascade tie — wrong target size, then corrected

**Root cause (bug class E2/E21/F1, sixth occurrence).** `.ux-chapter-head p` (0,1,1) was beating `.ux-kicker`'s own font-size (0,1,0) whenever a kicker `<p>` sits inside `.ux-chapter-head`, rendering chapter kickers at the description paragraph's size (~17px) instead of the intended 0.8125rem (13px). Pre-existing, sitewide, confirmed live on VTH before this build touched anything.

F22 fixed the tie (raised `.ux-chapter-head .ux-kicker` to 0,2,0 specificity) but picked the wrong target — it set the size to 0.8125rem (13px), matching the base `.ux-kicker` rule. Cafe's screenshots showed a 13px vs 17px mismatch across VTH's own sections and directly challenged the "no code difference" claim. F29 corrected the target to 1.0625rem (~17px) — the tie-beaten rendering was the one Cafe wanted, not the base size. Same fix applied to `.ux-wide-head .ux-kicker` (used on NDS Outcome/Course Feedback/System Audit).

### F30. Chapter kickers outside `.ux-chapter-head` never received F22/F29's fix

**Root cause.** F22/F29 only fixed `.ux-chapter-head .ux-kicker` and `.ux-wide-head .ux-kicker`. But on ASH and STD, several chapter-level kickers were never wrapped in `.ux-chapter-head` at all — they sit in older bare containers: `.ux-intro` (Overview, ASH Validation), bare `.ux-copy` (ASH Background/Solution), bare `.ux-problem__grid` (ASH Problem, STD Problem), bare `.ux-video-grid` (ASH Outcome), plain `.container` (Reflection on ASH/STD/VTH v2). These selectors never matched, so the kickers stayed at 13px. Only found because Cafe inspected the rendered page directly ("overview，background那些你都还没改").

**Fix.** Added a container-independent modifier class instead of retrofitting `.ux-chapter-head` onto these containers (rejected — `.ux-chapter-head` carries `max-width: 66%` and `margin-bottom` that would change layout on containers not built for it):

```css
.ux-kicker.ux-kicker--chapter {
  font-size: 1.0625rem;
}
```

Written as a compound selector (0,2,0) specifically to structurally outrank `.ux-intro p` (0,1,1) rather than tie with it. Applied via `class="ux-kicker ux-kicker--chapter"` to: ASH Overview/Background/Problem/Solution/Outcome/Validation/Reflection (7 spots), STD Overview/Problem/Reflection (3 spots), VTH v2 Overview/Reflection (2 spots). Related Projects and the HENEX Method Recipe kicker were explicitly confirmed to stay small (Cafe: "reflection用大的，henex recipe和related都用小尺寸的kicker") — not touched.

**Process lesson (see also memory `feedback_kicker_audit_before_fix`).** A shared-selector CSS fix is not complete until every literal occurrence of the affected element, across every affected page, has been checked against its actual parent container — not assumed to match the "standard" structure. Build the full inventory (grep every occurrence, note its real container class) before declaring a fix done.

### F23. STD Outcome image-to-card spacing cascade tie

`.studier-product-frame { margin: 0 }` (std.css, loads after shared CSS) beat `.ux-content-gap { margin-top: 56px }` (shared utility) on equal specificity. Fixed with a compound selector in std.css: `.studier-product-frame.ux-content-gap { margin-top: 56px }` (0,2,0), which wins regardless of file load order.

### F24. ASH Validation image width — root cause was `object-fit: contain`, not layout

Initial diagnosis (grid stacking via F12) was insufficient. The real cause: `.ux-test-block img` used a fixed `height: 300px` with `object-fit: contain` — since the source chart images aren't a 300px-tall aspect ratio, they shrank to fit inside with side padding, rendering visibly narrower than the text column even though the container itself was full width. Fixed by changing to `height: auto` (image renders at natural aspect ratio, full container width) and changing `.ux-test-block`'s `grid-template-rows` from `auto 330px auto` to `auto auto auto` (the fixed row height would otherwise letterbox the now-auto-height image).

### F25. Recipe tag spacing

`.ux-recipe-tags` inherited `margin-top: 28px` meant for after-paragraph spacing; combined with `.ux-recipe-primary`'s own ~32px bottom margin, total gap was ~60px. Fixed with `.ux-recipe-primary + .ux-recipe-tags { margin-top: 8px }` (adjacent-sibling, 0,2,0).

### F26. ASH Background/Solution — 1/3 text, 2/3 image

Added a page-scoped modifier in `ash.css` rather than changing the shared `.ux-media-row` (used elsewhere, e.g. welnest.html):

```css
.ux-case-page--support-hub .ux-media-row--wide-image {
  grid-template-columns: minmax(0, .34fr) minmax(280px, .66fr);
}
```

Applied via `class="container ux-media-row ux-media-row--wide-image"` to Background and Solution only.

### F27. STD Develop — unified 6 cards, 3+3 layout, no sequence numbers

Previously a mixed format: 4 numbered timeline cards (`.studier-timeline`) + 2 unnumbered kicker-label cards (`.studier-role-grid`) in two separate grids. Cafe confirmed the unify-to-kicker-format, natural-3+3 option. Rebuilt as one `.studier-develop-grid` (3-column) with all 6 cards using the `.ux-card span` kicker-label format (topic label, not a sequence number). Retired the now-orphaned `.studier-timeline` CSS rule; kept `.studier-role-grid` since it's still used elsewhere on the page.

### F28. ASH Colour module direction — actual bug found (F11's "no fix needed" was wrong)

**Root cause.** `.ux-ds-module--reverse > div { order: 2 }` matches **every** `div` child, not just the first. On the Colour module, both children are divs (the text block AND `.ux-colours`, the swatch grid), so both received `order: 2` and kept their original relative order — visually nothing reversed. Modules where the second child is a `<figure>` (Iconset, Accessibility) worked correctly by accident, since `div` never matched the figure. An earlier turn told Cafe "不需要改," which was incorrect and unverified against actual rendered behaviour.

**Fix.** `.ux-ds-module--reverse > div:first-child { order: 2 }` — scopes the reorder to only the text block.

---

## Glossary

**Cascade tie:** two CSS rules with equal specificity; the one appearing later in source order wins.
**Tier / tone:** the five-level background system (S soft, L light, P primary, D deep emphasis, neutral chrome).
**Ink token:** a page-level CSS variable carrying accent text colour, with a dark-mode redefinition.
**Tier A / Tier B heading:** chapter-opening stacked heading vs sub-block side-by-side heading (Master Spec 4.1).
