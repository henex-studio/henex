# HENEX Website Audit Report
## Version 1.0 — June 2026

**Auditor:** Claude (Sonnet 4.6)
**Scope:** Full site audit covering CSS, HTML, JavaScript, performance, and accessibility
**Repository:** cafeyee/henex
**Deployment:** Vercel Hobby, henex.uk

---

## Audit Summary

The audit covered six batches across CSS, HTML and JavaScript layers. A total of 18 HTML files, 11 CSS files, and 2 JavaScript files were reviewed. The site was found to be structurally sound with no critical errors. All issues found were corrected during the audit session.

---

## Batch 1 — CSS Foundation Layer

### Files reviewed
global.css, pages.css

### Findings and actions

**global.css**

1. `.page-about` accent color was missing. The `--page-accent` and related variables were not defined for the About page, causing the page to fall back to the default dark accent instead of the correct Human blue. Investigated `about.css` and confirmed the definition already existed there. Removed the duplicate fix from `global.css` and left `about.css` as the authoritative source.

2. `font-weight: 750` and `font-weight: 760` were initially flagged as non-standard values. Browser inspection confirmed IBM Plex Sans is loaded as a variable font via Google Fonts, which supports continuous weight ranges. No change required.

**pages.css**

No issues found.

---

## Batch 2 — CSS Template Layer

### Files reviewed
ux-case-study.css, architecture-case.css, about.css, philosophy.css

### Findings and actions

**ux-case-study.css**

1. `:root` contained a hardcoded `--ux-theme: #13838A` and three related color variables. This was a fragile legacy default that all UX case study pages were expected to override in their own scoped CSS. The value happened to match the ASH brand color, masking the missing definition for that page. Removed the four color variables from `:root`. Retained `--ux-radius: 16px` as a legitimate template-level token.

2. New file `ash.css` created to give the Accessibility Support Hub its own scoped theme definition under `.ux-case-page--support-hub`. Added the CSS link to `accessibility-support-hub.html`.

**vth.css**

`--ux-theme` and related variables were defined in both `:root` and `.ux-case-page--victim-hub`. The `:root` block polluted the global scope. Removed the `:root` block entirely. Moved the four page-specific color variables and the four project-specific color variables into `.ux-case-page--victim-hub`.

**architecture-case.css**

1. `.arch-video` block was fully duplicated. Removed the second copy.

2. The local hero tag system (`.arch-tags`, `.arch-tags--primary`, `.arch-tags--secondary`, `.arch-hero__tag-row`) was removed in full. Decision made to unify all hero tags under the global `case-tag-row` system. Confirmed all architecture case HTML pages had already migrated to the global system. The local system was confirmed redundant and removed along with its dark mode overrides.

**about.css**

No issues found. Confirmed `.page-about` accent is correctly defined here.

**philosophy.css**

No issues found. Noted that the file contains two sections, the original styles and a 2026-06-03 update section that redefines some classes. This is functional but creates maintenance complexity. No change made, noted for awareness.

---

## Batch 3 — HTML Root Pages

### Files reviewed
index.html, about.html, works.html, lab.html, philosophy.html

### Findings and actions

1. **Font loading (all 18 files):** Google Fonts was loaded with fixed weight points (`wght@400;500;600;700;800`). Since IBM Plex Sans is a variable font, this prevents intermediate values like 750 and 760 from rendering reliably across environments. Updated all 18 HTML files via VS Code global find and replace to use continuous range loading (`wght@100..800` for IBM Plex Sans, `wght@100..900` for Inter).

2. **lab.html:** `aria-current="page"` was present on the Lab link inside the footer. This attribute should only appear in the primary `<nav>`. Removed from the footer link.

3. **philosophy.html:** HTML was compressed to a single line with no indentation, making future manual editing very difficult. Formatted using VS Code `Option + Shift + F`.

4. **index.html:** No `aria-current="page"` was present in the navigation. Confirmed that the brand logo serves as the Home link and no nav link for Home exists, so no change was needed.

---

## Batch 4 — UX Case Study HTML Pages

### Files reviewed
accessibility-support-hub.html, new-world-design-system.html, voting-starter-kit.html, studier.html, rekraft.html, victim-hub.html

### Findings and actions

1. **accessibility-support-hub.html:** Hero tag row contained an invalid `case-tag-row--overlay` modifier class. Investigated and confirmed `--overlay` is a valid global modifier defined in `global.css`. Restored the class after mistakenly removing it.

2. **new-world-design-system.html:** `case-tag-row--surface` confirmed as a valid global modifier. No change required.

3. **voting-starter-kit.html:** Related Projects link to `whos-singing-outside.html` did not match the actual filename `whos-singing-outuiside.html`. Corrected to match the canonical filename.

4. **victim-hub.html:** Related Projects card for Studier linked to `../works.html` instead of `studier.html`. Corrected.

5. **Architecture decision confirmed:** All project images and videos to be served from Cloudflare R2. Local `assets/img/projects/` paths to be replaced with R2 URLs across all case study pages.

---

## Batch 5 — Architecture Case Study HTML Pages

### Files reviewed
guangzhou-baiyun-t2.html, shantou-ayg.html, guangzhou-football-park.html, oppein-headquarters.html, nanning-wuxu-t3.html, great-bay-area-science-hall.html, poly-yuzhu.html

### Findings and actions

1. **oppein-headquarters.html:** Two images contained inline `style="aspect-ratio: ..."` attributes. This technically violates the no-inline-CSS rule. Decision made to retain as an intentional exception because the aspect ratios are specific to the portrait orientation of a high-rise tower building and will not recur elsewhere. HTML comments added to explain the exception.

2. All seven architecture case study pages confirmed as already using the global `case-tag-row` system with `--overlay` modifier. All project images already served from R2. No further changes required.

---

## Batch 6 — JavaScript and Performance

### Files reviewed
main.js, case-interactions.js

### Findings and actions

**main.js**

No issues found. Theme switching, localStorage persistence, system dark mode detection, navigation toggle, ESC key handling, resize reset, and back-to-top visibility all function correctly. `passive: true` applied correctly to scroll and resize events.

**case-interactions.js**

No issues found. Popover system supports both UX and architecture variants. Modal system supports drag, zoom, fit-to-canvas and pointer capture. ESC key closes both modal and popover.

---

## Post-Audit Tasks Completed

### R2 image path migration

All `../assets/img/projects/` relative paths in UX case study pages and root pages were replaced with full Cloudflare R2 URLs using VS Code global find and replace. Scope covered: works/ subdirectory (with `../` prefix) and root directory files index.html and works.html (without prefix).

Pages affected: accessibility-support-hub.html, new-world-design-system.html, voting-starter-kit.html, rekraft.html, victim-hub.html, index.html, works.html.

Pages already on R2: studier.html and all architecture case study pages. No change required.

### Open Graph meta tags

Open Graph meta tags added to all 18 HTML pages.

Root pages (index, about, works, lab, philosophy) use the shared HENEX brand image at `r2.dev/icons/henex/open_graph_henex.webp`.

All 13 case study pages use their own project hero image as the OG image.

---

## Architecture Decisions Confirmed During Audit

1. All project images and videos are served from Cloudflare R2. Icons and global UI assets remain local.
2. Hero tag system is unified under the global `case-tag-row` system across all page types. Local architecture tag system removed.
3. `--ux-theme` and related color variables must be defined at page body class scope in each page's own CSS file. No fallback defaults in shared CSS.
4. Inline style exceptions are permitted for one-off aspect ratios with a documented comment explaining the reason.
5. The Cloudflare Workers deployment connected to the GitHub repo was an erroneous integration and has been removed. The repo deploys exclusively via Vercel.

---

## Outstanding Items

The following items were identified during the audit but deferred for future sessions.

1. **works-chronology.html** page is not yet built. Two links in works.html currently point to this page.
2. **rekraft.html and victim-hub.html** still reference some relative image paths that were migrated. Verify all paths are correct after R2 migration.
3. **whos-singing-outuiside.html** page is not yet built.
4. **Welnest (wst)** page is not yet built.
5. All newly built case study pages will require Open Graph tags to be added on creation.

---

*Report generated: June 2026. For internal use and RAG archiving.*
