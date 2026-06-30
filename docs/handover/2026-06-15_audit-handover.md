# HENEX Website Audit — Handover Document

Date: 2026-06-15
Prepared by: Perplexity (Henex Space)
Purpose: Hand off audit context to a new conversation to continue work.

---

## 1. Project Overview

HENEX is a portfolio website for Cafe Yi, deployed on Vercel via GitHub.
No local dev environment. All edits are made directly in VS Code and pushed
to GitHub. Vercel auto-deploys on push.

Tech stack: Plain HTML, CSS, JavaScript. No frameworks. No build tools.
CSS variables for theming. Dark mode supported. Content width 1280px.
Responsive breakpoints at 768px and 520px.

---

## 2. File Structure (Current)

HENEX/
├── index.html
├── about.html
├── philosophy.html
├── works.html
├── lab.html (have page but placeholder)
├── projects/
│ ├── accessibility-support-hub.html (ash)
│ ├── new-world-design-system.html (nds)
│ ├── guangzhou-baiyun-t2.html (bt2)
│ ├── voting-starter-kit.html (vsk)
│ └── victim-hub.html (vth) — status unknown
├── assets/
│ ├── css/
│ │ ├── global.css
│ │ ├── ux-case-study.css
│ │ ├── architecture-case.css
│ │ └── (others)
│ └── js/
│ ├── main.js
│ └── case-interactions.js (merged on 2026-06-15)
└── docs/
├── fix-log/
│ └── 2026-06-15-modal-caption-selector-bug.md
└── handover/
└── 2026-06-15_audit-handover.md
---

## 3. JS Architecture Decision (Confirmed 2026-06-15)

Two JS files only.

| File | Scope |
|---|---|
| main.js | Global: nav, theme toggle, back to top |
| case-interactions.js | All case study pages: popover and image modal |

Files deleted: ux-case-study.js, architecture-case.js.
All case study pages (UX and arch) now reference case-interactions.js only.

---

## 4. Bugs Fixed (2026-06-15)

### Bug 1: Modal image disappears after closing (roadmap.png)

Root cause: `querySelector('[data-modal-caption]')` matched the trigger
`<button data-modal-caption="...">` instead of the modal's inner `<p>`.
Setting textContent on the button destroyed its inner `<img>`.

Fix: Scope the selector to inside the modal container.

```javascript
// Wrong
const modalCaption = document.querySelector('[data-modal-caption]');

// Correct
const modalCaption = modal ? modal.querySelector('[data-modal-caption]') : null;
```

Rule: Never use document.querySelector() for modal internal elements.
Always use modal.querySelector() to avoid matching trigger attributes.

### Bug 2: Arch popover covers the pill buttons

Root cause: Popover position calculation forced it into a fixed viewport
range, which pushed it over the trigger buttons on arch pages where the
pill row is closer to the bottom of the screen.

Fix: Calculate available space below, flip to above if space is insufficient.

```javascript
const spaceBelow = window.innerHeight - rect.bottom;
const topPos = spaceBelow >= popoverHeight + 16
  ? rect.bottom + 10
  : rect.top - popoverHeight - 10;
```

---

## 5. Audit Status

### Completed before this session
- index.html
- about.html
- philosophy.html
- works.html
- JS architecture review and merge

### Completed in this session
- case-interactions.js restructure and bug fixes
- accessibility-support-hub.html HTML formatting cleanup

### Not yet audited
- new-world-design-system.html (nds)
- guangzhou-baiyun-t2.html (bt2)
- voting-starter-kit.html (vsk)
- victim-hub.html (vth) — confirm if file exists
- lab.html
- All CSS files: global.css, ux-case-study.css, architecture-case.css
- Cross-page consistency check (nav, footer, dark mode, breakpoints)
- Image and asset path verification across all pages

---

## 6. Planned Audit Scope (Next Session)

Work through remaining pages in this order:

1. **nds, vsk** — both use ux-case-study.css, audit together as a pair.
   Check: modal triggers use correct data attributes, no old JS references,
   case-interactions.js is referenced, not ux-case-study.js.

2. **bt2** — uses architecture-case.css, arch popover present.
   Check: case-interactions.js referenced, popover data attributes correct,
   data-arch-recipe-popover on container.

3. **vth** — confirm file exists and which CSS it uses.

4. **CSS audit** — global.css, ux-case-study.css, architecture-case.css.
   Check: unused rules, duplicate variables, dark mode gaps, breakpoint
   consistency.

5. **Cross-page audit** — nav, footer, theme toggle, back-to-top across
   all pages.

6. **lab.html** — confirm placeholder is clean and consistent.

---

## 7. Known Issues To Investigate

- victim-hub.html existence and status not confirmed.
- Some pages may still reference old ux-case-study.js or architecture-case.js.
  Do a global search in VS Code for both filenames to confirm all references
  are updated.
- Image lazy loading behaviour: pages with images near the top of the
  viewport should use loading="eager". Audit each page hero image.

---

## 8. Rules Established in This Project

1. data- attribute names used on trigger elements must not be reused as
   selector hooks for modal internal elements. Always scope modal selectors
   to modal.querySelector().

2. All case study pages use case-interactions.js. No page-specific JS files.

3. modal.querySelector() not document.querySelector() for all modal internals.

4. Popover position must calculate space above and below before placing.

5. fitImage() must only run after the modal canvas has rendered.
   Use setTimeout(50ms) as the safe fallback.

---

## 9. Files To Upload in New Conversation

Upload all of these to the new Space or conversation before starting:

| File | Location | Purpose |
|---|---|---|
| HENEX_Master_2026-06-06_v1.2.md | Space RAG | Project master context |
| HENEX_Design_System_v1_3.md | Space RAG | Design system reference |
| HENEX_Design_System_Visual_Reference_v1_1.md | Space RAG | Visual reference |
| HENEX_IA_Content_Workbook_v1.xlsx | Space RAG | IA and content workbook |
| AI_Dev_Workflow_v1.2_EN.md | Space RAG | Working rules and workflow |
| 2026-06-15_audit-handover.md | Thread attachment | This document, for context |
| case-interactions.js | Thread attachment | Current JS for reference |
| Any HTML file being audited | Thread attachment | Page under review |

---

## 10. How To Start The New Conversation

Paste this as your opening message:

"We are continuing the HENEX website audit. The handover document is
attached. Please read it and confirm the current status, then tell me
what you need to start auditing the next batch of pages."

Then attach this handover document and the relevant HTML files for the
next batch.

---

## 11. Reminder

When the audit is complete, update HENEX_Master_2026-06-06_v1.2.md with:
- Final JS file structure
- Any new CSS rules added
- Completed audit checklist results
- Any new decisions made

Then replace the old master file in RAG.