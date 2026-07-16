# A1 — Architecture Pages Consistency Fix Spec

**Status:** Diagnosis complete, pending Cafe's confirmation before any code changes.
**Scope:** The 7 architecture case study pages (`guangzhou-baiyun-t2.html`, `shantou-ayg.html`, `oppein-headquarters.html`, `nanning-wuxu-t3.html`, `guangzhou-football-park.html`, `great-bay-area-science-hall.html`, `poly-yuzhu.html`) and `assets/css/architecture-case.css`.
**Not in scope:** No tone/tier migration, no content reordering beyond what is specified below, no colour changes. Architecture pages keep their own neutral colour system throughout — the only alignment target is structure and non-colour styling, per Cafe's explicit instruction.
**Method:** Static audit (grep + read across all 7 pages, `architecture-case.css`, `global.css`, `ux-case-study.css`), cross-checked against the current UX standard (post-F15 rebuild, e.g. `accessibility-support-hub.html`).

---

## Summary of findings

| # | Area | Verdict | Severity |
|---|------|---------|----------|
| 1 | Chrome (header/nav/footer) | Clean, byte-identical to canonical `index.html` chrome except required `../` path prefixes | No action |
| 2 | Related Projects section | Clean, `.arch-related-card` already shares the same C3 rule group as `.ux-related-card` in `global.css` (identical radius, border, hover) | No action |
| 3 | Card corner radius | `.arch-finding-card` / `.arch-award-card` render at 30px radius (C1 base default), while `.ux-card` and siblings override to 18px. Same shared base class family, diverging radius. | **Decision needed** |
| 4 | E19 border-color contract | Two latent violations: `.arch-award-card:hover` and `.arch-popover` declare `border-color` directly instead of through `--card-border`/`--card-border-hover`. Not currently causing a visible bug, but the exact defect pattern that broke VTH/VSK three times before. | Fix recommended |
| 5 | HENEX Method Recipe structure | Confirmed identical on all 7 pages: old "triad line" pattern retired on UX pages during the F15 rebuild is still present here (and duplicates the pill tags below it), tag pills sit after the description instead of before, the primary recipe name uses a separate `<h3>` instead of the UX inline label+link pattern, and there is no "Secondary recipe" label at all before the popover trigger row. | Fix required |

---

## Finding 3: Card corner radius — decision needed

`architecture-case.css` never overrides the radius for `.arch-finding-card`, `.arch-award-card`, `.arch-callout`, or `.arch-publication-block`, so they inherit the C1 shared base in `global.css`:

```css
/* global.css, C1 base */
border-radius: var(--radius-lg);   /* 30px */
```

UX case pages explicitly override the same shared base to a smaller radius for their card family:

```css
/* global.css, "C1 cards using --ux-radius inside case study template" */
.ux-card, .ux-influence, .ux-popover, .ux-feedback-card, .ux-test-card, .vth-metrics article {
  border-radius: var(--ux-radius);   /* = --radius-md = 18px */
}
```

This is a real, visible difference: architecture display cards read noticeably rounder than UX cards, despite both extending the same C1 base. I could not determine from the code or history whether this is intentional differentiation (architecture keeping "its own converged language," which is the explicitly sanctioned design direction per Audit 3) or an oversight from when the C1 base was unified.

**Options:**

- **A — Leave it.** Treat the larger radius as one of architecture's intentional identity markers, same spirit as its own neutral colour system. No code change.
- **B — Align to 18px.** Add `.arch-finding-card, .arch-award-card` (and optionally `.arch-callout`, `.arch-publication-block`) to the existing `--ux-radius` override rule in `global.css`, or add an equivalent architecture-scoped override in `architecture-case.css`.

**This spec does not pick one** — needs Cafe's call before either path is coded.

---

## Finding 4: E19 border-color contract violations

### 4a. `.arch-award-card` hover

**Current (`architecture-case.css`, line ~647):**

```css
.arch-award-card:hover,
.arch-award-card:focus-within {
  border-color: color-mix(in srgb, var(--arch-award-gold-strong) 58%, var(--theme-border));
  background: color-mix(in srgb, var(--arch-award-gold-tint) 88%, var(--theme-surface));
}
```

`.arch-award-card` is a C1 family member; `global.css` already carries a shared hover rule for it that reads `var(--card-border-hover, ...)`. This page-scoped rule has equal specificity and loads after `global.css`, so it wins the cascade tie and hard-overrides the shared mechanism — currently invisible only because nothing has ever tried to set `--card-border-hover` for this element from elsewhere (e.g. a future dark-mode or accent-border tweak would be silently defeated, same as the VTH/VSK/M-5 incidents).

**Fix — convert the border assignment to the contract variable, keep the background override as a genuine hover-only addition:**

```css
.arch-award-card {
  --card-border-hover: color-mix(in srgb, var(--arch-award-gold-strong) 58%, var(--theme-border));
}

.arch-award-card:hover,
.arch-award-card:focus-within {
  background: color-mix(in srgb, var(--arch-award-gold-tint) 88%, var(--theme-surface));
}
```

### 4b. `.arch-popover`

**Current (`architecture-case.css`, line ~776):**

```css
/* C1 base (border, radius, shadow) is in global.css. */
.arch-popover {
  position: fixed;
  z-index: 120;
  width: min(360px, calc(100vw - 32px));
  padding: 18px;
  border-color: var(--theme-border);
  background: var(--theme-surface);
  display: none;
}
```

Same pattern — `.arch-popover` is also a C1 member. Direct `border-color` here silently pre-empts the contract variable. No behavioural difference today (the computed value happens to match the fallback), but it's a latent landmine and an inconsistency with how `.ux-popover` is styled (which does not set `border-color` at all, relying purely on the C1 base).

**Fix:**

```css
.arch-popover {
  position: fixed;
  z-index: 120;
  width: min(360px, calc(100vw - 32px));
  padding: 18px;
  --card-border: var(--theme-border);
  background: var(--theme-surface);
  display: none;
}
```

Both fixes are mechanical, low-risk, and preserve the exact current visual output.

---

## Finding 5: HENEX Method Recipe — structural realignment

### Current architecture pattern (identical on all 7 pages)

```html
<div class="arch-henex__body">
  <p class="arch-henex__label">Primary recipe</p>
  <h3><a href="../philosophy.html#r17">R17 · Tangible Meaning Model</a></h3>
  <p class="arch-henex__triad">Perception × Meaning × Matter</p>
  <p>[description paragraph]</p>
  <div class="arch-pill-row arch-pill-row--nodes" aria-label="Recipe nodes">
    <span>Perception</span>
    <span>Meaning</span>
    <span>Matter</span>
  </div>
  <div class="arch-pill-row arch-pill-row--secondary" aria-label="Related recipes">
    <button type="button" class="arch-recipe-trigger" data-recipe-title="..." data-recipe-body="..." data-recipe-link="...">R11</button>
    ...
  </div>
</div>
```

### Target pattern (mirrors the current UX standard, e.g. `accessibility-support-hub.html`)

```html
<div class="arch-henex__body">
  <p class="arch-recipe-primary"><span>Primary recipe</span><a href="../philosophy.html#r17">R17 · Tangible Meaning Model</a></p>
  <div class="arch-pill-row arch-pill-row--nodes" aria-label="Recipe nodes">
    <span>Perception</span>
    <span>Meaning</span>
    <span>Matter</span>
  </div>
  <p>[description paragraph, unchanged]</p>
  <p class="arch-recipe-primary arch-secondary-recipe"><span>Secondary recipe</span></p>
  <div class="arch-pill-row arch-pill-row--secondary" aria-label="Related recipes">
    <button type="button" class="arch-recipe-trigger" data-recipe-title="..." data-recipe-body="..." data-recipe-link="...">R11</button>
    ...
  </div>
</div>
```

**Changes, mechanical and identical across all 7 pages:**

1. Delete the `<p class="arch-henex__label">Primary recipe</p>` line and the `<h3><a>...</a></h3>` line. Replace both with one `<p class="arch-recipe-primary"><span>Primary recipe</span><a>...</a></p>`, carrying the exact same link `href` and link text already on the page.
2. Delete the `<p class="arch-henex__triad">...</p>` line entirely — its content duplicates the `.arch-pill-row--nodes` spans immediately following it, and this triad-line pattern was already retired sitewide on UX pages during the F15 rebuild.
3. Move the `.arch-pill-row.arch-pill-row--nodes` block to sit immediately after the new `.arch-recipe-primary` paragraph, before the description `<p>`. Content (the 3 dimension spans) is unchanged, only position moves.
4. Insert a new `<p class="arch-recipe-primary arch-secondary-recipe"><span>Secondary recipe</span></p>` immediately before the existing `.arch-pill-row.arch-pill-row--secondary` block. No page currently has this label at all.
5. The `.arch-pill-row--secondary` block itself (the 4 `.arch-recipe-trigger` buttons with their `data-recipe-*` attributes) is untouched — same buttons, same data, same order.
6. `<p class="arch-kicker">HENEX Method Recipe</p>` and the `<h2 id="recipe-title">` above `.arch-henex__body` are untouched.

**Execution note:** although all 7 pages currently share the identical broken structure (verified by grep across all 7 before writing this spec), each page must still be edited by locating its own actual markup rather than assuming the pattern holds — per the standing project lesson that a shared-structure assumption must be verified per file, not applied blind.

### New CSS required in `architecture-case.css`

Ported from `ux-case-study.css`'s `.ux-recipe-primary` / `.ux-recipe-tags` pattern, keeping architecture's neutral colour tokens (`--theme-text`, `--theme-muted`) in place of UX's per-project `--ux-theme`/`--ux-dark`. Also ports the F25 margin-collapse fix (the `:has()` rule) so the same collapsed-margin bug that had to be fixed twice on UX pages does not get reintroduced here on day one.

```css
/* Recipe — restructured to match the UX .ux-recipe-primary/.ux-recipe-tags
   content pattern (see A1 spec). Retires the old .arch-henex__label +
   <h3> + .arch-henex__triad markup. Colour stays on the neutral system
   (--theme-text/--theme-muted), no --ux-theme dependency. */
.arch-recipe-primary {
  display: grid;
  gap: 5px;
  margin: 0 0 var(--space-lg);
}

.arch-recipe-primary span {
  display: block;
  margin: 0;
  color: var(--theme-muted);
  font-size: 0.8125rem;
  font-weight: 850;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.arch-recipe-primary a {
  width: fit-content;
  color: var(--theme-text);
  font-family: var(--font-heading);
  font-size: 1.16rem;
  font-weight: 750;
}

/* [PORTED F25/Bug2-A2 fix] .arch-recipe-primary carries its own --space-lg
   (32px) bottom margin. Without this pair of rules, adjacent margins
   collapse to the larger value and the tags row would sit 32px away
   regardless of its own margin-top — the exact bug already fixed once on
   UX pages. Only fires for the primary-recipe-name -> nodes-tags pairing,
   not for the secondary-recipe-label -> trigger-buttons pairing (matches
   UX behaviour, where that second gap is intentionally left at the
   collapsed 32px). */
.arch-recipe-primary:has(+ .arch-pill-row--nodes) {
  margin-bottom: 8px;
}

.arch-recipe-primary + .arch-pill-row--nodes {
  margin-top: 0;
}

.arch-pill-row--nodes + p {
  margin-top: 22px;
}

/* Secondary Recipe label — reuses .arch-recipe-primary's layout, only adds
   the separating top margin (same pattern as .ux-secondary-recipe). */
.arch-secondary-recipe {
  margin-top: 28px;
}
```

**Old CSS to remove after the markup change lands** (both are dead once no page references them):

```css
/* architecture-case.css, part of the line-16/108 shared kicker-typography
   list and the line-674 triad rule — remove .arch-henex__label from the
   two shared selector lists it's part of, and delete .arch-henex__triad
   entirely once no HTML references it. Do not delete until markup on all
   7 pages is confirmed changed, else this leaves the label unstyled. */
```

Concretely: remove `.arch-henex__label` from the two shared selector lists at (current) lines 18 and 113, and delete the `.arch-henex__triad` rule at (current) line ~674 outright.

---

## Not in scope, confirmed clean

**Chrome (header/nav/footer):** byte-for-byte identical content to `index.html`'s canonical chrome on all 7 pages (compared via normalised-whitespace hash on the footer, and a direct diff on the header), differing only in the `../` relative path prefix required for files one directory deeper. No action.

**Related Projects:** `.arch-related-card` is already a member of the same C3 shared rule group as `.ux-related-card` in `global.css` (identical border, radius, shadow, hover behaviour). Card content structure (image, category span, title strong, description small) and the "Back to Works" actions block are present and consistent on all 7 pages. No action.

---

## Execution checklist

1. Get Cafe's decision on Finding 3 (card radius: leave at 30px, or align to 18px).
2. Apply the Finding 4 E19 fixes to `architecture-case.css` (2 rules).
3. Apply the Finding 5 markup change to all 7 architecture pages (mechanical, verify each page's actual current content before editing).
4. Apply the Finding 5 CSS changes to `architecture-case.css` (add new rules, remove the two retired ones).
5. Static validation: tag balance, CSS brace balance, duplicate-id check, `aria-controls` pairing unaffected, on all 8 touched files (7 HTML + 1 CSS).
6. Visual walkthrough by Cafe (light + dark mode) before sign-off.
7. Update `docs/HENEX_Project_Execution_Plan.md` — mark A-series in progress/done, log this spec's execution.
