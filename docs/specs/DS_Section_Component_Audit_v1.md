# DS Section Component Audit v1

Date: 2026-07-05
Branch: ds-convergence
Scope: Inventory of section-level components across all 8 UX case study pages, identifying shared vs project-specific patterns and unification candidates.

---

## 1. Section Inventory by Project

Each UX case study page is built from a sequence of `<section>` elements. The kicker label identifies the semantic section type. Below is the full mapping.

### Common sections across projects

| Section type | VTH | ASH | STD | VSK | RKT | WEL | WSO | NDS | Count |
|-------------|-----|-----|-----|-----|-----|-----|-----|-----|-------|
| Hero | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Meta/Overview | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Screencast/Preview | Y | Y | - | - | - | Y | Y | Y | 5/8 |
| Problem | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Solution | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Outcome | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Course Feedback | - | - | - | Y | Y | Y | Y | Y | 5/8 |
| Research sections | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Design/Process sections | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Final Design/Features | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Design System | - | Y | - | Y | Y | Y | Y | Y | 6/8 |
| Retrospective | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| HENEX Recipe | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |
| Related Projects | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 |

### Project-specific sections

VTH: Insights and principles, Testing, Key decisions and trade-offs.
ASH: Background, Impacts, Key Feature (x4).
STD: My Role, Core Features (5 sub-sections), Product Evolution, Research Use Case, Impact.
VSK: Solution Strategy, Scope and Findings, Research Synthesis and Principles, Concept Exploration and Testing, Final Design Decisions, Visual System (Typography, Icon System, Illustration and Accessibility).
RKT: Concept, Design System (Colour, Typography, Illustration, Icons, Brand Identity), Final Design (Onboarding, Market, Community, Ako).
WEL: Preview, Comparison View, Contact and Inspection.
WSO: Observation, Field Survey, Information, Visualisation, Develop, Typography, Colour, Iconography, Illustration, Interaction, Accessibility, Final Design (Cover, Morning Call, Life Circle, 6 chapter sub-sections).
NDS: System Audit, Principles and Scope, Token Ready Foundations, Core Components (Search, Card, Button Systems).

---

## 2. Current Section-Level CSS Classes

### Shared classes in ux-case-study.css

| Class | Purpose | Background | Used by |
|-------|---------|------------|---------|
| `.ux-section` | Base section wrapper | None (transparent) | All 8 |
| `.ux-section--tint` | Alternating tinted section | Light theme-color gradient (5% theme) | All 8 |
| `.ux-problem` | Problem statement section | Light theme gradient (7% theme) | 7/8 (WSO uses generic) |
| `.ux-solution` | Solution showcase (dark bg) | Dark gradient from `--ux-dark` | 6/8 |
| `.ux-retro` | Retrospective section | Medium theme gradient (16% theme) | 8/8 |
| `.ux-related` | Related projects section | `--theme-surface` | 8/8 |

### Shared inner layout classes

| Class | Purpose | Layout | Used by |
|-------|---------|--------|---------|
| `.ux-section-head` | L1 editorial header (new) | 2-col grid: kicker+title / description | Not yet adopted |
| `.ux-wide-head` | L1 header (older pattern) | Single col, max-width 900px | Several pages |
| `.ux-two-col` | L2 aside+content | 2-col grid: .34fr / 1fr | Most common layout |
| `.ux-intro` | L2 left aside (within .ux-two-col) | Sticky aside with kicker+h2 | Most pages |
| `.ux-copy` | L2 right content (within .ux-two-col) | Main content column | Most pages |
| `.ux-problem__grid` | L3 for problem section | .67fr / .33fr | 7/8 |
| `.ux-solution__grid` | L3 for solution section | .78fr / 1fr | 6/8 |
| `.ux-feature` | L3 for feature showcase | .38fr / .62fr | Several |
| `.ux-ds-module` | L3 for DS module showcase | .64fr / .36fr | Several |
| `.ux-evaluative` | 3-col legacy layout | .27fr / .36fr / .37fr | ASH only |
| `.ux-ia` | 3-col legacy layout | .32fr / .34fr / .34fr | ASH only |
| `.ux-usability` | 2-col legacy layout | .32fr / .68fr | ASH/WEL |
| `.ux-video-grid` | L3 for screencast | .32fr / 1fr | VTH, ASH, NDS |
| `.ux-media-row` | L3 for media showcase | .66fr / .34fr | Several |

### Per-project section overrides

| Project | Custom classes | What they override |
|---------|--------------|-------------------|
| VTH | `.vth-problem`, `.vth-centered-section`, `.vth-subsection` | Problem background gradient, centered layout, sub-section spacing |
| ASH | (none for sections) | Uses shared classes only |
| STD | `.studier-problem`, `.studier-solution` | Problem and solution backgrounds |
| NDS | `.system-hmw`, `.system-solution`, `.system-showcase`, `.system-audit-section`, `.system-principles-section`, `.system-process-section`, `.system-theme-ds`, `.system-video` | Extensive custom section backgrounds and layouts |
| RKT | section:has() selectors for final design dark bg | Dark background for final design section |
| VSK | (none for sections) | Uses shared classes directly |
| WSO | `.wso-solution-section` | Custom dark solution background |
| WEL | (none for sections) | Uses shared classes only |

---

## 3. Section Background System: Current vs Target

### Current state

Three background patterns exist in `ux-case-study.css`:
1. **Transparent** — `.ux-section` (default)
2. **Light tint** — `.ux-section--tint` (5% theme gradient)
3. **Problem tint** — `.ux-problem` (7% theme gradient, slightly stronger)
4. **Dark emphasis** — `.ux-solution` (dark gradient from --ux-dark)
5. **Medium accent** — `.ux-retro` (16% theme gradient)
6. **Surface** — `.ux-related` (flat surface color)

Plus per-project custom backgrounds on specific sections (VTH problem, STD solution, NDS audit/showcase, RKT final design, WSO solution).

### Target state (per Template Spec B3)

Three tiers:
1. **Tier 1 — Emphasis** (hero, outcome, delivery): theme color gradient, text adapts for contrast.
2. **Tier 2 — Accent** (reflection/retro): light-tinted gradient.
3. **Tier 3 — Neutral with variation**: light/neutral with subtle gradient shifts between adjacent sections.

### Gap analysis

| Target tier | Current implementation | Gap |
|------------|----------------------|-----|
| Tier 1 (Emphasis) | `.ux-solution` covers dark emphasis. No shared class for medium-emphasis sections. | Need a shared emphasis modifier that can be used beyond just solution sections. |
| Tier 2 (Accent) | `.ux-retro` at 16% theme. | Already close. Could rename/generalize as `.ux-section--accent`. |
| Tier 3 (Neutral) | `.ux-section` + `.ux-section--tint` alternating. | Current alternation is manual (added per-section in HTML). The "subtle gradient shift" from B3 is not yet implemented — all tinted sections use the same gradient. |

---

## 4. Section Layout Patterns: Current vs Target

### Current dominant pattern

Most sections use L2 layout: `.ux-two-col > .ux-intro + .ux-copy`. The aside (`.ux-intro`) holds the kicker and h2. The content column (`.ux-copy`) holds paragraphs, cards, images.

Some sections use L1 (`.ux-wide-head` or `.ux-section-head`): full-width header then content below.

Problem and solution sections have their own L3 grids: `.ux-problem__grid` and `.ux-solution__grid`.

### Target pattern (per Template Spec B2)

Editorial layout with `.ux-section-head`: two-column header (kicker+title left, description right), full-width content below. This was added to ux-case-study.css in Phase 2 but no HTML page has adopted it yet.

### Migration implication

Adopting `.ux-section-head` would mean refactoring every section's HTML from the current L2 `.ux-two-col` pattern to the new L1 editorial pattern. This is a significant HTML change per page.

**Recommendation:** Do NOT change the HTML layout pattern during Phase 2 section component audit. The current L2 pattern works and is consistent across pages. The editorial `.ux-section-head` pattern should be piloted in Phase 4 (VTH v2 Preview) first. If successful, roll to other pages during their individual retrofit phases (6, 7, and future).

---

## 5. Component Inventory Within Sections

### Shared components (defined in ux-case-study.css)

| Component | Class(es) | Purpose | Usage |
|-----------|----------|---------|-------|
| Card grid | `.ux-card-grid`, `--two`, `--three` | Grid of C1 cards | All 8 |
| C1 card | `.ux-card` | Standard content card | All 8 |
| Influence block | `.ux-influence` | Influence statement | All 8 |
| Evidence | `.ux-evidence` | Zoomable image block | Several |
| Feature showcase | `.ux-feature`, `.ux-feature-list` | L3 feature display | Several |
| DS module | `.ux-ds-module`, `.ux-ds-list` | L3 design system display | Several |
| Feedback grid | `.ux-feedback-card`, `.ux-feedback-grid`, `.ux-feedback-icon` | Course feedback cards | 5/8 |
| Test block | `.ux-test-block`, `.ux-test-grid` | Usability test results | ASH, WEL |
| Process bar | `.ux-process` | 4-column process stages | Several |
| Colour swatches | `.ux-colours`, `.ux-colour` | DS colour display | Several |
| Video | `.ux-video` | Screencast embed | VTH, ASH, NDS |
| Recipe | `.ux-recipe-*` | HENEX recipe section | All 8 |
| Modal | `.ux-modal` | Image zoom modal | All 8 |
| Popover | `.ux-popover` | Recipe tag popover | All 8 |

### Per-project components (defined in project CSS)

| Project | Custom components | Count |
|---------|------------------|-------|
| VTH | `.vth-hmw-statement`, `.vth-inline-influence`, `.vth-metrics`, `.vth-scroll-preview`, `.vth-process-chips`, `.vth-image-card`, `.vth-journey-card`, `.vth-handover-card-grid`, `.vth-no-image-grid`, `.vth-principle-image-grid`, `.vth-research-grid` | 11 |
| STD | `.studier-hero`, `.studier-problem`, `.studier-solution`, `.studier-tool-card`, `.studier-tool-grid`, `.studier-metric`, `.studier-metric-grid`, `.studier-evolution`, `.studier-use-case`, `.studier-preview-frame` and more | ~20 |
| NDS | `.system-*` (59 unique classes) | 59 |
| RKT | `.rkt-concept-grid`, `.rkt-finding`, `.rkt-finding-grid`, `.rkt-scope-grid`, `.rkt-ds-stack`, `.rkt-ds-reverse`, `.rkt-modules-expand`, `.rkt-problem-expand` and more | 16 |
| VSK | `.vsk-concept-stack`, `.vsk-finding-grid`, `.vsk-problem-grid`, `.vsk-problem-chart`, `.vsk-ds-gallery`, `.vsk-ds-stack`, `.vsk-principle-card`, `.vsk-social-feature` and more | 10 |
| WSO | `.wso-solution-section`, `.wso-research-card`, `.wso-sketch-grid`, `.wso-lofi-*`, `.wso-illus-pair`, `.wso-info-grid`, `.wso-ds-block`, `.wso-final-scene`, `.wso-sub-heading` and more | 25 |
| WEL | (none; uses shared classes only) | 0 |
| ASH | (none; uses shared classes only) | 0 |

---

## 6. Findings and Recommendations

### F1. Section background system needs one more tier

Current `.ux-section--tint` handles Tier 3 neutral alternation. `.ux-retro` handles Tier 2 accent. But there is no shared class for Tier 1 emphasis beyond `.ux-solution` (which is semantically tied to the solution section).

**Recommendation:** Create `.ux-section--emphasis` as a dark-bg modifier that any section can use, using the same gradient pattern as `.ux-solution` but without the solution-specific styling (padding override, text rules). Keep `.ux-solution` as a semantic shorthand that composes `.ux-section--emphasis` plus solution-specific rules.

### F2. Retro background should be generalized

`.ux-retro` combines background + padding + typography overrides. The background pattern (16% theme gradient) is useful for any accent section.

**Recommendation:** Extract the background to `.ux-section--accent`. Keep `.ux-retro` as a semantic class that applies `.ux-section--accent` behavior plus retro-specific grid and typography.

### F3. The `.ux-section--tint` alternation is manual and uniform

Every instance uses the same 5% gradient. Template Spec B3 calls for "subtle gradient shifts between adjacent sections."

**Recommendation:** This is a nice-to-have refinement. Achievable with CSS nth-child or by defining 2-3 tint variants (e.g. `--tint-a`, `--tint-b` with slightly different gradient angles or intensities). Low priority — current uniform tint is acceptable.

### F4. Editorial section-head layout not yet adopted

`.ux-section-head` is defined in CSS but no page uses it. Current pages use `.ux-two-col` / `.ux-wide-head`.

**Recommendation:** Do not force adoption in Phase 2. Pilot in Phase 4 (VTH v2). The existing L2 pattern is consistent and works.

### F5. Problem section background should use the shared tint

`.ux-problem` has its own background (7% theme gradient) which is nearly identical to `.ux-section--tint` (5% theme gradient). Two competing tint levels for functionally the same purpose.

**Recommendation:** Consider removing `.ux-problem`'s custom background and using `.ux-section--tint` on the problem section instead. Or keep it as a marginally-stronger tint for the problem section specifically. Low impact either way — the difference is subtle.

### F6. Per-project section-level overrides are manageable

Only 3 projects have section-level background overrides: VTH (problem), STD (problem, solution), WSO (solution). NDS has extensive custom section styling but is a special case (the project IS a design system). RKT has a dark final-design section via `:has()`.

These overrides are legitimate per-project design choices, not redundant code. They should remain in per-project CSS. The audit for per-project CSS cleanup (Phase 2 R2) should focus on component-level redundancy, not section-level overrides.

### F7. Two projects have zero custom components

ASH and WEL use only shared classes. These are the cleanest implementations and represent the target state. They can serve as reference pages for what a fully-DS-aligned case study looks like.

### F8. NDS is an outlier

59 custom classes, extensive custom section styling. NDS's content (a design system showcase) is structurally unique. It should be treated as an exception rather than forced into shared patterns.

---

## 7. Shared Pattern Catalog (added to ux-case-study.css on 2026-07-05)

### Section background tiers

| Class | Tier | Use for |
|-------|------|---------|
| `.ux-section` | Base | Any section, transparent bg |
| `.ux-section--tint` | Tier 3 Neutral | Alternating light sections |
| `.ux-section--accent` | Tier 2 Accent | Reflection, retro, medium emphasis |
| `.ux-section--emphasis` | Tier 1 Emphasis | Solution, outcome, delivery — dark bg |

### Shared layout components

| Class | Pattern | Replaces per-project |
|-------|---------|---------------------|
| `.ux-feedback-grid` | 3-col quote card grid | `system-feedback-grid` |
| `.ux-feedback-card` | Quote card with icon | `system-feedback-card` |
| `.ux-feedback-icon` | Circular icon in feedback card | `system-feedback-icon` |
| `.ux-icon-card` | Card with icon + title + desc | `system-principle-card`, `vsk-principle-card` |
| `.ux-icon-card__icon` | Circular icon for icon-card | `system-principle-icon`, `vsk-principle-icon` |
| `.ux-gallery` | 2/3-col image grid | `system-detail-gallery`, `system-typography-image-grid` |
| `.ux-gallery--two` | 2-col variant | `system-detail-gallery--two` |
| `.ux-gallery--single` | Single-col variant | `system-detail-gallery--stacked` |
| `.ux-swatch-grid` | 6-col color palette | `system-swatch-grid` |
| `.ux-swatch-grid--four` | 4-col variant | `system-swatch-grid--four` |
| `.ux-swatch` | Individual swatch tile | `system-swatch` |
| `.ux-card-stack` | Vertical card list | `system-foundation-stack` |
| `.ux-component-row` | L3 text+demo layout | `system-component-row` |
| `.ux-component-stack` | Vertical list of component rows | `system-component-stack` |
| `.ux-scroll-viewport` | Scrollable preview container | `system-microsite-viewport`, `vth-scroll-preview__frame` |
| `.ux-scope-block` | Padded scope/callout block | `system-component-scope` |
| `.ux-chip-flow` | Horizontal tag chip row | `system-scope-flow`, `vth-process-chips`, `vth-component-chips` |
| `.ux-showcase-figure` | Borderless image with shadow | `system-showcase__figure` |

### Per-project CSS migration path

When retrofitting each project, replace per-project classes with shared equivalents. Per-project CSS should then only contain:

1. Theme color variables (`--ux-theme`, `--ux-dark`, `--ux-soft`, `--ux-pale`)
2. Hero overrides (if needed)
3. Swatch color values (unique to each project's DS section)
4. Truly unique content presentation (e.g. NDS typography table, WSO chapter illustrations)

### Deferred items

1. `.ux-section-head` adoption — pilot in Phase 4 VTH v2 first.
2. ASH legacy layouts (`.ux-evaluative`, `.ux-ia`, `.ux-usability`) — replace during Phase 6.
3. HTML migration per project — happens during each project's retrofit phase, not now.
