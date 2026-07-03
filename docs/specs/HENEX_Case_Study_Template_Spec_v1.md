# HENEX Case Study Template Spec v1

Date: 2026-07-03
Project: HENEX Website
Status: Confirmed
Branch: ds-convergence
Scope: Defines the mixed DS direction for all 8 UX case study pages, plus global DS decisions that affect the entire site.

## Purpose

This document specifies the Case Study Template: a mixed design system approach where global DS tokens govern typography and shared components, while case study pages adopt an editorial layout style with per-project theme colors. It also records global DS decisions that must be applied site-wide. It serves as the execution reference for Phase 4 (VTH v2 Preview) and subsequent case study convergence work.

## Design Direction: Mixed DS

The template follows a mixed approach across three layers.

**Global DS layer** (shared across all pages, defined in `global.css`):
Font family, font sizes, line heights, font weights at all levels (hero, section headings, body, tags, labels). Navigation. Card border-radius. Shadow system. Spacing tokens. Text colors for main copy (section titles, descriptions, influence text). Button styles. Read More component. Link interaction states. Modal/popover tokens. Motion timing.

**Case Study Template layer** (defined in `ux-case-study.css`, applied to all case pages):
Editorial layout mode (section header structure, content column width, section spacing). Section background rhythm and gradient logic. Component layout patterns within sections. Influence component styling. Container component rules.

**Per-case layer** (defined in each case's own CSS, e.g. `vth.css`, `vsk.css`):
Primary and secondary theme colors. Theme color derivatives (tints, shades, opacity variants). Image container overrides where default white-fill is not appropriate. Any case-specific structural overrides if necessary.


## Part A: Global DS Decisions [DS-LEVEL]

These decisions apply to the entire site, not just case study pages.

### A1. Card Hover Rules

Display cards (insight, influence, feedback, solution, research, retrospective, and any card without click/navigation function): remove hover lift effect, retain subtle border-color change on hover (border darkens slightly). No transform, no shadow change.

Interactive cards (related projects, nav cards, and any card with click/link function): retain existing -4px lift + shadow enhancement on hover. This creates a clear visual distinction between informational and navigable cards.

### A2. Section Dividers

Remove all section border-bottom dividers across all pages. Sections are separated by background color transitions and vertical spacing only. This applies to global pages (about, works, philosophy) and case study pages equally.

Sub-section dividers within a section: use vertical spacing + sub-headings to separate content blocks. No border-top or border-bottom lines between sub-sections.

### A3. Hardcoded Colors

All hardcoded color values in CSS must be replaced with CSS variable tokens. No exceptions. This includes figcaption colors, modal backgrounds, section tints, and any other instance of a hex or rgba value that should reference a token. Dark mode values must also use tokens.

Audit scope: `global.css`, `ux-case-study.css`, all per-case CSS files, and all page-specific CSS files.

### A4. Icon System

Standardize on Tabler Icons via CDN (webfont method). Add the Tabler CSS link to all pages. Replace all existing custom SVG and image icons with Tabler equivalents.

Exceptions: HENEX-specific icons (dimension, node, HENEX logo and any self-designed brand icons) remain as custom assets.

Execution approach:
1. Global UI icons (sun/moon theme toggle, close button, back-to-top arrow): replace first, affects all pages.
2. Case study page icons: replace per-page during template rollout.
3. Global pages: replace during a separate pass.

Note: icons appear inside cards and data displays, not as section title decorations. Section titles use the kicker + title + description pattern without an accompanying icon.

### A5. Read More Component

Visual form: button style, following global button DS tokens. Includes a chevron icon (Tabler). Toggle between "Read more" and "Show less" states. This is a global reusable component.

### A6. Container Components

All container components (scroll preview, iframe embed, image gallery, prototype embed) share the same structural rules: border-radius, border, and shadow follow global DS tokens. Internal colors (background tints, decorative elements) follow the page's theme color system. Buttons and text within containers follow global DS.

### A7. Image Containers

Default rule: all case study page image containers apply a white background fill to prevent transparent PNG bleed-through in dark mode. This is defined in `ux-case-study.css`.

Per-case overrides: if specific images (e.g. dark-background screenshots) do not need white fill, the case's own CSS overrides the default for those instances.

### A8. Caption and Auxiliary Text

All figcaption and auxiliary text (image labels, small descriptions) use global DS neutral text color tokens. Hardcoded caption colors are prohibited. In dark mode, captions use the dark mode text-soft token.

### A9. Motion and Transitions

Unified across all pages:
- Hover transitions: consistent duration and timing function for all interactive elements (cards, buttons, links).
- Specific values to be defined during implementation, but must be identical for all card types, button types, and link types.

### A10. Link Interaction States

Text links within content follow global DS: hover color change and underline behavior defined in `global.css`. Case study pages do not override link interaction styles.

### A11. Modal and Popover

Use global DS tokens for all modal/popover styling. No hardcoded colors. Dark mode: modal panel uses white (light surface) background. Overlay backdrop uses global token.

### A12. Responsive Breakpoints

Four breakpoints, unified globally:
- 1180px: wide layout collapse (complex content pages)
- 900px: tablet, navigation collapse
- 640px: small tablet and landscape phone
- 520px: mobile

All pages use the same breakpoint values. Case study editorial layout must have responsive behavior defined at each breakpoint.

### A13. Influence Component

Influence blocks retain a decorative top line (accent stripe). The line's visual treatment (color, thickness, style) to be finalized during implementation. The influence block itself is a display component: no hover lift (per A1). Content text follows global DS colors.

### A14. Tags and Chips

Two-tier system:
- Global-context tags (hero tags, recipe tags): follow global DS neutral styling.
- Content-context tags (skills, process chips, component chips): follow the page's theme color system (primary color for borders, tints, text).

### A15. Buttons

All buttons in case study pages follow global DS button tokens. Case study pages do not define custom button styles. Buttons appearing in hero, CTA, and content areas all use the same global rules.


## Part B: Case Study Template Decisions

### B1. Typography

Fully follows global DS. Case study pages and per-case CSS files must not override font-family, font-size, line-height, or font-weight for any element level, including hero headings, section headings, body text, tags, labels, and captions.

### B2. Layout

Editorial layout from reference page.

**Section header structure**: two-column pattern. Left column: kicker label + section title. Right column: a short red decorative line + section description text. Below: section content (cards, media, text blocks). Bottom: influence statement (when applicable).

**Content width**: body content uses a narrower editorial column (~720px). Images and evidence blocks can break out to a wider container when needed.

**Section spacing**: generous vertical spacing consistent with editorial rhythm. Exact values defined during implementation using global spacing tokens (--space-xs through --space-xl).

### B3. Section Background System

Rhythmic variation with three emphasis tiers. [DS-LEVEL structure, per-case color values]

**Tier 1 — Emphasis (theme color gradient)**
Sections: Hero, Outcome, Delivery.
Treatment: primary theme color gradient. Text and components adapt to maintain contrast.

**Tier 2 — Accent (light theme color gradient)**
Sections: Reflection.
Treatment: subtle, light-tinted gradient using primary theme color at low opacity. Similar to the current retro section's treatment.

**Tier 3 — Neutral with variation**
Sections: all remaining (Overview, Meta, Context, Research, Solution, Design, Process, Contribution, HENEX Recipe, CTA).
Treatment: light/neutral background with subtle gradient shifts between adjacent sections to create visual rhythm. No flat single-color backgrounds. Each section has a slightly different neutral tone.

**Special — HENEX Recipe**
Background: neutral/light. Content includes red, green, blue accent colors from HENEX node system as decorative elements. These are fixed HENEX brand colors, not page theme colors.

**Dark mode**: all three tiers have dark mode variants. Emphasis sections use deeper theme color gradients. Neutral sections use dark surface color variations. Theme color tints adjust for dark backgrounds.

### B4. Theme Color System

Dual-color system per case, neutral fallback.

**Primary** (e.g. VTH deep blue, VSK orange): section emphasis backgrounds and gradients, component titles within themed sections, icons in cards and data displays, card elements (borders, fills at reduced opacity, connecting lines), derived tints at various opacity/mix levels.

**Secondary** (e.g. VTH red): highlights and emphasis within content, key callouts and accent markers, sparingly used for visual punctuation.

**Text colors**: main copy text follows global DS colors, not theme colors. This includes section titles, section descriptions, body paragraphs, influence statements, and labels. Theme colors apply to component-level elements only.

**Neutral fallback**: if a page has no theme colors defined, all themed elements fall back to global DS neutral colors.

**CSS variable naming** (per-case CSS file):

```css
/* Primary theme color and derivatives */
--ux-theme: <primary color>;
--ux-theme-soft: <primary at ~20% mix>;
--ux-theme-pale: <primary at ~8% mix>;
--ux-theme-dark: <primary darkened>;

/* Secondary / accent color and derivatives */
--ux-accent: <secondary color>;
--ux-accent-soft: <secondary at ~20% mix>;
--ux-accent-pale: <secondary at ~8% mix>;
```

If `--ux-accent` is not defined, accent-dependent elements fall back to `--ux-theme` or neutral. Dark mode overrides use the same variable names under `[data-theme=dark]`.

### B5. Dark Mode

Full dark mode support required for every visual element:
- Backgrounds: deeper theme gradients for emphasis sections, dark surface variations for neutral sections.
- Cards and components: adjusted border colors, fill colors, shadow values using dark mode tokens.
- Text: global DS dark mode text tokens.
- Icons: adjusted color values to maintain contrast on dark surfaces.
- Image containers: default white fill protects transparent PNGs (see A7).
- Theme color derivatives: may need different opacity/mix values than light mode equivalents.
- Modal/popover: white panel background (see A11).
- Influence decorative line: color adjusted for dark backgrounds.
- Tags and chips: dark mode variants for both global-context and content-context tags.


## Part C: Execution Plan

1. **Global DS cleanup**: replace all hardcoded colors with tokens (A3). Remove all section dividers (A2). Add Tabler CDN link and replace global UI icons (A4).
2. **Update ux-case-study.css**: implement card hover rules (A1), editorial layout (B2), section background system (B3), theme variable references (B4), image container default (A7), influence component (A13), tag two-tier system (A14), Read More component (A5), container rules (A6), motion unification (A9).
3. **Update VTH per-case CSS**: define primary (deep blue) + secondary (red) with all derivatives in `vth.css`.
4. **Build VTH v2 preview**: apply template to VTH page as pilot, validate on Vercel preview branch.
5. **Audit remaining case CSS files**: check each case's CSS for conflicts with the new template, document needed changes.
6. **Roll out to all cases**: apply template adjustments to remaining 7 cases one by one.


## Part D: Reference Files

- Reference page: `docs/reference/10-Project introduction_portfolio-case-study_refined_visualfix_no-glow.html`
- IA framework: `docs/ia/HENEX_IA_Content_Workbook_v2.md`
- VTH content mapping: `docs/ia/VTH_Content_Mapping_v1.md`
- Voice rules: `docs/specs/HENEX_Case_Study_Voice_and_Narrative_Rules.md`
- Convergence spec: `docs/handover/HENEX_DS_IA_Convergence_Spec_v1_1.md`
