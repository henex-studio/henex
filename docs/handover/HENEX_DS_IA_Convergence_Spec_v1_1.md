# HENEX DS and IA Convergence — Execution Spec and Cowork Handover

> Version 1.1. Replaces v1.0. This document serves as both the decision record and the Cowork execution brief. It contains all tasks, gate conditions, separation points, and rollback paths.

---

## 0. How to Use This Document

This spec covers a multi-phase convergence of the HENEX design system and UX case study information architecture. It is structured as a linear task chain with gate conditions. Each phase produces a deliverable that must be reviewed and approved before the next phase begins.

**Execution environment:** Cowork (Claude Desktop with local repo access).

**Key references in RAG:**
- `HENEX_IA_Content_Workbook_v2.md` (IA framework v4 definition, audit findings)
- `HENEX_Design_System_Visual_Reference_v1_1.html` (current DS visual reference, use as structural template for v2)
- `HENEX_Design_System_v1_3_About_Global_Update.md` (current DS documentation)
- `HENEX_Case_Study_Voice_and_Narrative_Rules.md` (writing rules for case study content)
- `HENEX_Master_2026-06-15_v1_4.md` (project status and file inventory)
- `HENEX_Framework_Theory_v1_0.md` (HENEX framework reference)
- `2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.md` (recipe card content)

**Key reference file (not in RAG, uploaded separately):**
- `10-Project_introduction_portfolio-case-study_refined_visualfix_no-glow.html` (VTH reference page with target visual direction)

**Repo location:** Local `henex` folder mounted as Cowork context. GitHub remote: `cafeyee/henex`.

---

## 1. Task Chain Overview

| Phase | Task | Deliverable | Gate | Model |
|-------|------|-------------|------|-------|
| 1 | DS Visual Reference v2 | Self-contained HTML mood board | User previews and approves all components | Sonnet |
| 2 | DS Implementation | CSS changes on Git branch `ds-convergence` | User reviews via local preview or Vercel Preview URL | Sonnet |
| 3 | VTH Content Mapping | Markdown document mapping VTH content to IA v4 sections | User confirms content allocation | Opus |
| 4 | VTH v2 Preview | Self-contained HTML page | User previews and approves | Sonnet |
| 5 | VTH v2 Integration | HTML + CSS files on Git branch | User reviews via Vercel Preview URL | Sonnet |
| 6 | ASH Retrofit | HTML changes on Git branch | User reviews via Vercel Preview URL | Sonnet |
| 7 | STD Retrofit | HTML changes on Git branch | User reviews via Vercel Preview URL | Sonnet |

**Gate logic:** If any phase output has issues, iterate within that phase until approved. Do not proceed to the next phase. At each gate pass, prompt the user with the next task description and model recommendation.

**Separation point:** Phases 1-2 (DS convergence) and Phases 3-5 (VTH rebuild) are independent workstreams that share a dependency. Phase 2 must complete before Phase 4. Phase 3 can run in parallel with Phases 1-2.

---

## 2. Phase 1 — DS Visual Reference v2

### 2.1 Goal

Generate a single self-contained HTML file that visualises all converged DS components. User opens this file locally in a browser to review the new design system before any production files are touched.

### 2.2 Task

Build on the structure of `HENEX_Design_System_Visual_Reference_v1_1.html` (in RAG). Create a v2 that demonstrates every component defined in this spec.

### 2.3 Content to include

**Section A: Card System**

Show all 5 card types with all variants. For each card, show default state and hover state side by side.

C1 Standard Card variants:
- Base (title + description)
- Numbered (number + title + description)
- Icon (icon container + title + description)
- Dimension (colour block + icon + label + title + chips)
- Compact (ID + triad tags + title + description, for recipe cards)

C2 Media Card:
- Image left / text right
- Text left / image right

C3 Quote Card:
- With SVG person icon
- Without icon

C4 Nav Card variants:
- Project (cover image + metadata + title)
- Related (cover image + project title + tags)
- Category (icon + title + arrow)

C5 Callout Block:
- With left accent bar

**Section B: Hover Behaviour**

Interactive demonstration. User can hover cards to see the unified hover effects.

Navigable cards: pointer cursor, translateY(-4px), shadow upgrade, border darken, image scale(1.03).
Display cards: default cursor, translateY(-3px), shadow upgrade, border darken.

**Section C: Shadow and Radius**

Side-by-side comparison: shadow-card default, shadow-card-hover.
Radius: 18px standard card, 30px large card.

**Section D: Hero Variants**

Visual preview of each hero type at reduced scale.

Global: Home (gradient), Standard (single colour), With Image (right-side visual).
UX Case: Dark gradient, Background image.
Architecture: Project image.

**Section E: Layout Modes**

Schematic demonstration of L1 through L4 with placeholder content.

L1 Section Header + Content.
L2 Aside + Content.
L3 Content + Media.
L4 Card Grid (2, 3, 4 column variants).

**Section F: Dark Mode**

The entire page should support dark mode toggle. All components must render correctly in both modes.

### 2.4 Technical constraints

- Single HTML file, all CSS embedded in `<style>` tags.
- No external dependencies except Google Fonts (IBM Plex Sans + Inter).
- Use CSS custom properties matching the token names in global.css.
- Images: use placeholder boxes with labels, not actual images.
- Icons: use simple inline SVG shapes as placeholders.
- Include a dark mode toggle button.

### 2.5 What NOT to include

- VTH-specific content or colours. This is a DS-level reference, not a project page.
- Philosophy-specific text-stage hover. That is a page-level feature, not a DS component.
- Recipe equation layout. That is a Philosophy-specific component.

### 2.6 Gate

User opens the HTML file in browser, reviews all components, provides feedback. Iterate until approved. Then prompt: "Phase 1 approved. Next: Phase 2 (DS Implementation). Recommended model: Sonnet."

---

## 3. Phase 2 — DS Implementation

### 3.1 Goal

Write the converged DS rules into the production CSS files on a new Git branch.

### 3.2 Pre-task

Create Git branch: `git checkout -b ds-convergence`

### 3.3 Files to modify

| File | Changes |
|------|---------|
| `assets/css/global.css` | Remove `--radius-xl`. Add spacing token scale: `--space-xs:8px`, `--space-sm:16px`, `--space-md:24px`, `--space-lg:32px`, `--space-xl:48px` (D16). |
| `assets/css/ux-case-study.css` | Add unified card base classes (C1 through C5). Add unified hover rules. Update shadow logic (all cards get default shadow). Update radius references. Add L1 through L4 layout classes. Remove deprecated one-off layouts (ux-evaluative, ux-ia, ux-usability, ux-media-row). Update hero to fixed dark gradient, independent of site light/dark theme (D07 amendment, D17). Remove `--background-hero` body class logic. Extend `.button--hero-primary`/`.button--hero-outline` (already defined in global.css for Home hero) to apply their dark-hero-safe colours inside `.ux-hero` regardless of `[data-theme]`, since the UX case hero no longer varies by theme — reuse, not new classes. Apply spacing scale to sibling-container gaps (`--space-xl`), card-internal title-to-body (`--space-sm`), and card label-to-grid gaps (`--space-md`). Fix mobile hero tag-row-to-title gap (additive to existing padding, not a replacement). |
| `assets/css/pages.css` | Update hero heights to 720px for all global pages. Merge dimension-card into C1 dimension variant. Update project-card to C4. Update hover to unified spec. Apply spacing scale: `.work-group` gap to `--space-md`, `.section-cta` margin-top to `--space-xl`, card-internal label margins to `--space-sm`. |
| `assets/css/philosophy.css` | Rebuild hero to use page-hero base class. Merge philosophy-dimension-card into C1 dimension variant. Retain text-stage and recipe-equation as Philosophy-specific. |
| `assets/css/chronology.css` | Update hero height reference. |
| `assets/css/vth.css`, `assets/css/ash.css`, `assets/css/std.css`, `assets/css/vsk.css`, `assets/css/nds.css`, `assets/css/wso-case.css`, `assets/css/wst.css`, `assets/css/rkt.css` | Apply spacing scale to project-specific compact card components (icon+text rows) per D16. VTH hero gradient becomes project-specific implementation of the fixed-dark-hero pattern, reusing `--ux-theme`/`--vth-blue` (D17). |

### 3.4 What NOT to modify

- Any HTML files. This phase only changes CSS.
- Project-specific CSS files (vth.css, ash.css, etc.). Those change during project retrofit phases.
- Content or structure of any page.

### 3.5 Impact awareness

Changing ux-case-study.css affects all 8 UX case study pages. Changing pages.css affects Home, Works, Chronology, Lab. Changing philosophy.css affects the Philosophy page. Existing pages will temporarily look different (or broken) on the ds-convergence branch because HTML still references old class names. This is expected. Full alignment happens when HTML is updated in later phases.

### 3.6 Gate

User reviews CSS changes via diff or local preview. The DS Visual Reference v2 page (from Phase 1) should still render correctly with the new CSS if referenced. Iterate until approved. Then prompt: "Phase 2 approved. Next: Phase 3 (VTH Content Mapping). Recommended model: Opus with extended thinking."

---

## 4. Phase 3 — VTH Content Mapping

### 4.1 Goal

Map all VTH content (from current page and reference page) to the IA v4 framework sections. Produce a markdown document that specifies what content goes where, what needs to be written, what can be reused, and what should be cut.

### 4.2 Task

Read both sources:
- Current VTH page: `works/victim-hub.html` (via GitHub MCP)
- Reference page: uploaded HTML file

For each IA v4 section, specify:
- Section name and number
- Content source (current page section X, reference page section Y, or new)
- Text content (reuse, edit, or write new)
- Media content (images, video, prototype embed)
- Layout mode (L1, L2, L3, or L4)
- Card types used (if any)
- Read More needed (yes/no)

### 4.3 VTH-specific decisions to document

- Theme colours: primary `#00164B` (navy), secondary `#B30D0D` (red)
- Hero: dark gradient variant
- Contribution section: included (VTH is a team project)
- Background section: included (Police programme context)
- Feedback section: to be determined based on available stakeholder feedback
- Validation section: included (has usability testing data)
- Prototype embed: Figma embed in Outcome or Delivery section

### 4.4 Boundary rule

Any styling decision made during content mapping that applies only to VTH must be flagged with `[VTH-SPECIFIC]`. Any decision that should propagate to all projects must be flagged with `[DS-LEVEL]`. This prevents VTH-specific choices from leaking into the shared system.

### 4.5 Gate

User reviews the content mapping document. Confirms section allocation, content reuse decisions, and media placement. Iterate until approved. Then prompt: "Phase 3 approved. Next: Phase 4 (VTH v2 Preview). Recommended model: Sonnet."

---

## 5. Phase 4 — VTH v2 Preview

### 5.1 Goal

Generate a self-contained HTML page that shows the complete VTH v2 case study using the converged DS and IA v4 framework. User previews this locally before any repo changes.

### 5.2 Technical constraints

- Single HTML file, all CSS embedded.
- Images: use R2 URLs for actual VTH images.
- Icons: use inline SVG (Tabler icons downloaded for VTH).
- Must include dark mode support.
- Must be responsive.
- Filename: output to Cowork outputs directory, not to the repo.

### 5.3 Content

Based on the approved content mapping from Phase 3.

### 5.4 Boundary rule

CSS in this file is split into two clearly commented sections:
```
/* === DS-LEVEL: Shared design system rules === */
...
/* === VTH-SPECIFIC: Project-level overrides === */
...
```

### 5.5 Gate

User opens the file, reviews visual quality, IA structure, content flow, dark mode, and responsiveness. Iterate until approved. Then prompt: "Phase 4 approved. Next: Phase 5 (VTH v2 Integration). Recommended model: Sonnet."

---

## 6. Phase 5 — VTH v2 Integration

### 6.1 Goal

Integrate the approved VTH v2 into the repo on the `ds-convergence` branch. Split the self-contained HTML into proper external CSS references.

### 6.2 Files to create or modify

| File | Action |
|------|--------|
| `works/victim-hub-v2.html` | New file. HTML with external CSS references. |
| `assets/css/vth.css` | Rewrite. VTH-specific styles only. Shared styles come from ux-case-study.css. |
| `assets/icons/vth/` | Add any new Tabler SVG icons for VTH. |
| `assets/icons/shared/` | Add any cross-project Tabler SVG icons. |

### 6.3 Gate

User pushes branch to GitHub. Reviews Vercel Preview URL. Iterate until approved. When ready, user merges to main and replaces victim-hub.html with victim-hub-v2.html content. Then prompt: "Phase 5 approved. Next: Phase 6 (ASH Retrofit). Recommended model: Sonnet."

---

## 7. Phase 6 — ASH Retrofit

### 7.1 Goal

Adapt accessibility-support-hub.html to the IA v4 framework and converged DS. This is a retrofit (modify existing content structure), not a rebuild.

### 7.2 Scope

- Reorganise sections to match IA v4 order.
- Replace project-specific CSS classes with shared DS classes.
- Add Read More toggles where content is long.
- Update hero to dark gradient variant.
- Merge standalone Design Process, Service Blueprint, Evaluative Workshop, IA, Usability Test sections into Research and Design.

### 7.3 Gate

Same as Phase 5 pattern. Preview, iterate, approve. Then prompt: "Phase 6 approved. Next: Phase 7 (STD Retrofit). Recommended model: Sonnet."

---

## 8. Phase 7 — STD Retrofit

### 8.1 Goal

Same as Phase 6, applied to studier.html.

### 8.2 Scope

- Reorganise sections to match IA v4 order.
- Replace studier- prefixed classes with shared DS classes.
- Remove My Role section (personal project).
- Map Core Features and Product Evolution into Design and Delivery sections.

### 8.3 Gate

Same pattern. After approval, prompt: "Phase 7 approved. Priority retrofit complete. Remaining UX pages and global pages can be scheduled as future work."

---

## 9. Decision Record

All decisions trace to audit findings documented in HENEX_IA_Content_Workbook_v2.md and the audit conducted in this Chat session.

| ID | Decision | Audit basis | Rollback path |
|----|----------|-------------|---------------|
| D01 | Three-layer IA (Glance, Story, Process) | F1, F2: later pages already evolved this pattern naturally | Flatten to single sequence, keep section names |
| D02 | "Final Design" renamed to "Delivery" | Not all projects produce design artifacts | Rename back |
| D03 | 5 card types with variants | 28 card classes found, most functionally identical | Add variant before creating new type |
| D04 | Unified hover with navigable/display distinction | 4 inconsistent hover behaviours found | Adjust lift distance first |
| D05 | All cards default shadow | Two contradictory shadow logics found | Reduce opacity from .08 to .05 |
| D06 | 18px standard radius, 30px large | 3 radius values for cards, xl used once | Increase to 20px globally |
| D07 | UX hero: fixed dark gradient default, independent of site light/dark theme | Light tint gradient not satisfactory after multiple attempts; Cafe confirmed (Phase 1 preview round) that hero should not flip with the site theme toggle — one dark treatment always, so per-project colour identity stays legible in both modes without doubling the design/maintenance work | Add --ux-hero-intensity variable; or switch to per-theme hero variants if theme-linked hero consistency becomes a stronger priority than the maintenance saving |
| D08 | Global hero height 720px | User preference for visual consistency | Reduce to 560px for non-Home |
| D09 | L1 as primary layout for case study sections | Reference page pattern is more flexible than ux-two-col | Alternate L1/L2 if monotonous |
| D10 | Tabler Icons SVG per-icon download | Reference page used Tabler webfont, SVG gives more control | Switch to webfont if management is burdensome |
| D11 | text-stage hover: Philosophy only | Unique interaction pattern, 4 components use it | Remove if Philosophy is redesigned |
| D12 | Philosophy hero rebuilt on page-hero base | Currently independent, inconsistent with other global pages | Revert to independent if constraints are limiting |
| D13 | Contribution in Layer 2 before Feedback | Team role is part of the story layer | Move to Layer 3 if it disrupts flow |
| D14 | DS content inside Design section | 5/8 pages had standalone DS section | Extract back if Design becomes too long |
| D15 | Read More at section level in Layer 3 | 3/8 pages already use this | Remove if analytics show low engagement |
| D16 | Global spacing token scale: `--space-xs:8px`, `--space-sm:16px`, `--space-md:24px`, `--space-lg:32px`, `--space-xl:48px` | Full-site audit (Phase 1) found 7 recurring gap categories ranging 0-40px with no shared rule, e.g. `.work-group` gap 14px, `.section-cta` margin-top 12px, sibling `.container` blocks with 0px margin between them | Revert individual selectors to prior ad hoc values; the scale is additive and does not remove any existing token |
| D17 | VTH hero uses a fixed navy-to-blue gradient with radial accent glows, reusing VTH's own `--ux-theme`/`--vth-blue` tokens, applied identically in light and dark site theme (see D07 amendment) | Cafe reviewed a plain DS dark-gradient preview against the reference case study page (`10-Project introduction_portfolio-case-study_refined_visualfix_no-glow.html`, line 617) and preferred that page's richer gradient treatment over both the original `hero-bg.png` image and the plain DS default. This became the model for D07: hero stays fixed regardless of site theme | Fall back to the plain DS dark-gradient default (D07) if the custom gradient proves hard to maintain across projects |

---

## 10. Git Workflow

### 10.1 Branch strategy

All DS and page changes happen on a single branch: `ds-convergence`.

Commands for Cowork to execute:
```
git checkout -b ds-convergence    # Create branch (Phase 2)
git add .                         # Stage changes
git commit -m "description"       # Commit with clear message
```

User manually pushes when ready:
```
git push origin ds-convergence    # Triggers Vercel Preview
```

User manually merges when approved:
```
git checkout main
git merge ds-convergence
git push origin main              # Triggers production deploy
```

### 10.2 Commit conventions

Each phase gets its own commit(s) with a prefix:
- `[DS]` for Phase 2 CSS changes
- `[VTH]` for Phase 5 VTH integration
- `[ASH]` for Phase 6 ASH retrofit
- `[STD]` for Phase 7 STD retrofit

---

## 11. Cowork Session Setup

When starting a Cowork session for any phase:

1. Confirm the phase number and goal.
2. Read this spec document first.
3. Read the relevant RAG documents listed in Section 0.
4. For Phase 4 (VTH preview), also read the uploaded VTH reference page.
5. Follow the gate logic. Do not skip ahead.
6. At each gate, produce a clear summary of what was done, then prompt the user with the next phase and model recommendation.
