# HENEX Home v2 — IA and Build Spec

**Version:** 1.0
**Date:** 2026-08-21
**Branch:** `home-v2` (cut from `main`, already created locally)
**Repository:** `henex-studio/henex`
**Scope:** `index.html` only. About, Works, Philosophy and Lab are out of scope for this round.
**Status:** Awaiting Cafe's sign-off. No code written yet.

---

## 1. Why this change

The current Home page opens with an abstract statement about project types and puts personal identity in fifth position, inside an About preview. A hiring reader cannot answer "who is this person and can I use them" without leaving the page. Cafe's near-term goal is finding work, so identity and capability must come before framework.

The second problem is positioning. Cafe's practice spans UX, architecture and project delivery. Four role types are in scope: UX Designer, Service Designer, Project Manager and Design Manager. The page must let each of those readers recognise a connection without diluting into a generalist claim.

---

## 2. Confirmed decisions

| ID | Decision | Rationale |
| --- | --- | --- |
| H1 | Work comes before theory | Evidence establishes credibility. A framework read before trust is a cost, not a differentiator. |
| H2 | Positioning label is Experience Designer, carried in the kicker, not the H1 | Keeps the umbrella identity while leaving the H1 free to carry concrete capability and searchable terms. |
| H3 | UX and Service Design are the primary line. PM and Design Manager are carried by delivery evidence, not by equal-weight labels | Four parallel labels weaken every one of them. |
| H4 | Hero is first person, opening with a greeting | Matches the waving illustration. Removes the distance of third-person portfolio voice. |
| H5 | Hero follows the theme, light hero with dark line art, dark hero with light line art | Already supported. The existing hero is not fixed dark, contrary to Master v1.4. |
| H6 | Portrait colour is controlled in CSS through `mask-image`, not baked into the asset | One asset, any colour, changeable without re-exporting. |
| H7 | About preview section is removed from Home | The hero now carries identity. The section duplicated it and added a scroll. |
| H8 | Capability cards are statements, never navigation | Works has three category cards. If capability cards look navigable, readers expect a matching Works category and card two becomes a dead end. |
| H9 | Capability card one is titled Product and service design | Broader and more senior than UX Designer, and closer to how the work is actually scoped. UX is retained in the hero lead so the term still appears on the page. |
| H10 | Card order is product, delivery, spatial | Delivery is more transferable across the four target roles than spatial. Spatial closes as the differentiator. |

### Open items, not blocking this build

1. The HENEX section keeps its current content in this round. Whether to shorten it is a judgement call best made on the preview.
2. Architecture case studies should surface scale, stakeholders, duration and coordination scope, so the delivery leadership claim has somewhere to be verified. Next round.
3. `home-portrait-white.png` stays in the folder as a fallback until the mask renders correctly in the preview, then Cafe deletes it.

---

## 3. Section structure

**Before**

```
Hero (abstract statement)
Capability strip (3 cards)
HENEX framework (3 dimension cards)
Featured Works
About preview
Lab entry
Footer
```

**After**

```
Hero (identity, positioning, portrait)
Capability (3 cards, rewritten, non-navigable)
Featured Works
HENEX framework (unchanged, moved down)
Lab entry
Footer
```

Two moves and one deletion. Featured Works and HENEX swap places. The About preview section is deleted.

---

## 4. Hero

### 4.1 Copy

| Slot | Text |
| --- | --- |
| Greeting | Hi, I'm Cafe. |
| Kicker | Experience Designer |
| H1 | I turn complex services, digital products and built environments into experiences people can actually use. |
| Lead | I've spent eighteen years across architecture, UX and service design, on projects from public service redesign to large terminals and campuses. I connect research, design and delivery so complex systems get built and used. |
| Primary CTA | View Works → `works.html` |
| Secondary CTA | Contact → `mailto:cafeyee@gmail.com` |

Copy notes. Use **built environments**, not building environments, matching every other page. Use **digital products**, not products, matching the site and matching how the target roles are advertised. The lead carries UX, service design, research and delivery, so the terms a recruiter searches for are all present even though the kicker says Experience Designer.

The greeting stays on its own line above the kicker rather than opening the lead, so the reader is greeted at the same height as the waving figure. The lead deliberately avoids repeating the H1's triad of services, digital products and built environments. The H1 states capability, the lead names concrete work, and the two lines do different jobs.

### 4.2 Markup

Text comes before the portrait in the DOM so reading order and tab order stay correct.

```html
<section class="home-hero page-hero page-hero--home" aria-labelledby="home-hero-title">
  <div class="container page-hero__content home-hero__content">

    <div class="home-hero__text">
      <p class="home-hero__greeting">Hi, I'm Cafe.</p>
      <p class="section-kicker">Experience Designer</p>
      <h1 id="home-hero-title">I turn complex services, digital products and built environments into experiences people can actually use.</h1>
      <p class="lead home-hero__lead">I've spent eighteen years across architecture, UX and service design, on projects from public service redesign to large terminals and campuses. I connect research, design and delivery so complex systems get built and used.</p>
      <div class="button-row">
        <a class="button button--hero-primary" href="works.html">View Works</a>
        <a class="button button--hero-outline" href="mailto:cafeyee@gmail.com">Contact</a>
      </div>
    </div>

    <div class="home-hero__portrait" aria-hidden="true"></div>

  </div>
</section>
```

The portrait is an empty decorative element. It carries no information the H1 does not already state, so it takes `aria-hidden="true"` and needs no alt text.

### 4.3 Portrait asset

| Property | Value |
| --- | --- |
| File | `assets/img/home/home-portrait.png` |
| Dimensions | 1290 × 1022 |
| Mode | RGBA, alpha carries the line art |
| Content bounds | x 61 to 1215, y 36 to 1021 |
| Transparent area | 89.7 percent |

The asset already touches its own bottom edge, so no re-crop is needed for the bottom bleed. `home-portrait-black.png` has been renamed to `home-portrait.png` on the `home-v2` branch. Only the alpha channel is used, so the original ink colour of the file is irrelevant.

### 4.4 Portrait colour, controlled in CSS

The line art is applied as a mask. The visible colour is the element's own background, so it is a variable, not a baked-in property of the image.

```css
:root {
  --portrait-ink: #1B1B1B;
}

[data-theme="dark"] {
  --portrait-ink: rgba(255, 255, 255, 0.88);
}
```

Dark mode uses 88 percent rather than pure white because the line weight is heavy and pure white on `#02040A` reads as glare. This value is the first thing to tune on the preview.

To move the portrait to a brand colour or a gradient later, change `background` on `.home-hero__portrait` and nothing else. A gradient works as a background image on the same element.

### 4.5 Layout CSS

Added to `assets/css/pages.css`, after the existing `.home-hero__lead` rule.

```css
/* Home v2 hero: two columns, text left, portrait right with bottom bleed. */
.home-hero__content {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: var(--space-2xl);
  align-items: center;
}

.home-hero__greeting {
  margin-bottom: var(--space-sm);
  color: var(--hero-text);
  font-family: var(--font-heading);
  font-size: clamp(1.35rem, 2vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.026em;
}

.home-hero h1 {
  max-width: 100%;   /* was 1120px, no longer correct in a two-column hero */
}

.home-hero__lead {
  max-width: 620px;  /* was 820px */
}

.home-hero__portrait {
  align-self: end;
  width: 100%;
  max-width: 560px;
  justify-self: end;
  aspect-ratio: 1290 / 1022;
  /* Bleed past the content padding and the section padding to the hero edge. */
  margin-bottom: calc(var(--space-2xl) * -2);
  background: var(--portrait-ink);
  -webkit-mask: url(../img/home/home-portrait.png) center bottom / contain no-repeat;
          mask: url(../img/home/home-portrait.png) center bottom / contain no-repeat;
}
```

`.page-hero` already sets `overflow: hidden`, so the bleed is clipped by the hero rather than spilling into the section below. No change needed there.

### 4.6 Responsive

```css
@media (max-width: 900px) {
  .home-hero__content {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
    min-height: 0;              /* release the 700px floor, stacked content sets its own height */
    padding-bottom: 0;
  }

  .home-hero__portrait {
    max-width: 340px;
    justify-self: start;
    margin-bottom: calc(var(--space-2xl) * -1);
  }

  .home-hero__lead {
    max-width: 100%;
  }
}

@media (max-width: 520px) {
  .home-hero__content {
    min-height: 0;
  }

  .home-hero__portrait {
    max-width: 260px;
  }
}
```

The `min-height: 0` overrides must be scoped to `.home-hero__content` only. The existing 700px and 720px rules also apply to `.page-hero`, which Works and Lab share. Changing the shared rule would break those two pages.

Stacking order below 900px is text first, portrait second. If the portrait reads better above the text on mobile, that is a `order` change on the preview, not a markup change.

### 4.7 Fallback

`mask-image` with the `-webkit-` prefix is supported in all current browsers. If the preview shows a solid rectangle instead of the line art on any target browser, the fallback is two `<img>` elements swapped by `[data-theme]`, using `home-portrait.png` and `home-portrait-white.png`. Keep the white file until this is confirmed.

---

## 5. Capability section

### 5.1 Copy

| Slot | Text |
| --- | --- |
| Kicker | Capability |
| H2 | What I bring to a team. |

| # | Card title | Card text | Accent | Tabler icon |
| --- | --- | --- | --- | --- |
| 1 | Product and service design | Research, journeys and interfaces, end to end. | Emotion pink | `ti-layout-grid` |
| 2 | Delivery and design leadership | Moving agreed design into built, working outcomes. | Human blue | `ti-users-group` |
| 3 | Spatial and physical systems | Experience design extended into places and physical touchpoints. | Nature green | `ti-building-arch` |

Card text drops from roughly eighteen words to nine, so the three cards can be scanned in one pass rather than read.

The accent modifier classes stay in their current order, `--emotion`, `--human`, `--nature`, so no CSS changes are needed for colour. Only the icons and the copy change.

### 5.2 Non-navigable rule

Capability cards must not be wrapped in `<a>`, must not carry an arrow or chevron, and must not adopt `.works-category-card` styling. Works already presents three navigable category cards. If these three look like those three, readers infer a mapping that does not exist, and card two leads nowhere. They remain `<article>` elements with no hover lift beyond the existing `.capability-card` behaviour.

The underlying tension is real and worth stating plainly. Works categories describe kinds of work. Capability cards describe contribution. Delivery leadership has no Works category because it is a way of working, not a type of output. The evidence for it is the spatial body of work, where the Works page already says "complex delivery environments". The fix is not to invent a fourth category, it is to keep the two card sets visually distinct and to strengthen the delivery detail inside the architecture case studies in a later round.

---

## 6. Deletions

Remove the entire `about-preview-section` block from `index.html`.

In `assets/css/pages.css`, remove `.about-preview` from the three shared selector lists it appears in, at roughly lines 393, 398 and the 900px media query. Do not delete the rules themselves, since `.lab-entry` and `.works-archive-card` still use them. Leaving the dead selector in place would contradict the project's own audit rules on dead selectors.

---

## 7. Files changed

| File | Change |
| --- | --- |
| `index.html` | Hero rebuilt, capability copy and icons replaced, section order changed, About preview deleted |
| `assets/css/pages.css` | Hero grid, greeting, portrait rules, responsive overrides, dead selector cleanup |
| `assets/css/global.css` | Two new tokens, `--portrait-ink` in `:root` and in `[data-theme="dark"]` |
| `assets/img/home/home-portrait.png` | New file, added to the repository |
| `assets/img/home/home-portrait-white.png` | Kept as fallback, not committed unless the fallback is needed |

---

## 8. Accessibility checks

Run these before asking for review.

1. One `h1` on the page, still the hero statement.
2. The greeting is a `<p>`, not a heading, so heading order stays h1 then h2.
3. The portrait element is `aria-hidden="true"` and contains no text.
4. Text precedes the portrait in the DOM, so tab order runs greeting, kicker, heading, lead, View Works, Contact.
5. Hero text uses the existing `--hero-text` and `--hero-text-soft` tokens, which already pass contrast in both themes. No new colour pairs are introduced for text.
6. Buttons keep the 46px minimum height from `.button`.
7. Check the page at 1440, 900 and 375 pixels wide, in both themes, with the system theme set to dark and no stored preference.

---

## 9. Build and deploy

The branch already exists locally. Sequence for the build session.

1. Confirm the working branch is `home-v2`.
2. Apply the changes in section 7.
3. Run the checks in section 8.
4. Commit, then push the branch. Vercel produces a preview URL for `home-v2` automatically. `main` and the live site are untouched.
5. Cafe reviews the preview and tunes `--portrait-ink`, portrait scale and mobile stacking order.
6. Merge to `main` only after Cafe confirms.

Rollback is a branch delete. Nothing on `main` changes until merge.

---

## 10. RAG updates required

Two entries in `HENEX_Master_2026-06-15_v1.4.md` are wrong against the live code and will keep misleading future sessions.

1. Section 7, Home: "Hero: Night full-bleed" is incorrect. The hero has had light and dark variants since at least the v1.3 CSS. `.page-hero--home` is `#F9FAFB` in light and `#02040A` in dark.
2. Section 2: the repository is recorded as `henex-website` under `cafeyee`. It is `henex` under `henex-studio`.

Both should be corrected in the same pass that records the Home v2 decisions, and the updated Master file replaced in RAG.
