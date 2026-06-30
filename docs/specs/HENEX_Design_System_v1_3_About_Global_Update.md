# HENEX Design System v1.3, About Formalisation and Global Interaction Update

## Purpose

This update records the confirmed design system decisions from the About page formalisation phase. It extends the existing HENEX website design system with global interaction patterns, icon rules, dark mode asset handling and About page patterns.

## Design philosophy

HENEX describes the intersection of Human, Emotion and Nature. The website design system should support that idea through clear structure, restrained visual expression, responsive behaviour and accessible interaction.

The system should feel exploratory, professional and calm. It should not feel decorative, academic or over explained.

## Core dimensions

1. Human uses blue.
2. Emotion uses pink.
3. Nature uses green.

These colours are semantic, not purely decorative. Each page can use a page accent based on its main meaning.

## Confirmed colour tokens

### Brand and semantic colour

1. Human blue: `#3C8CF4`
2. Emotion pink: `#FF5688`
3. Nature green: `#31BB8E`
4. Essay neutral: `#6B7280`

### Light theme surfaces

1. Page background: `#F6F7F8`
2. Main surface: `#FFFFFF`
3. Soft surface: `#F0F3F5`
4. Border: `#DDE3E7`
5. Soft border: `#EEF2F4`
6. Main text: `#202124`
7. Soft text: `#4E5661`
8. Muted text: `#737B86`

### Dark theme surfaces

1. Page background: `#070809`
2. Main surface: `#0B0C0D`
3. Soft surface: `#121314`
4. Main text: `#FFFFFF`
5. Soft text: `rgba(255, 255, 255, 0.74)`
6. Muted text: `rgba(255, 255, 255, 0.58)`
7. Card surface: `#0D0E10`

### Footer

1. Light and default footer graphite: `#151719`
2. Dark mode footer graphite: `#181A1D`

The footer should not be pure black. Graphite gives enough contrast from dark page sections.

## Typography

### Font families

1. Heading font: `IBM Plex Sans`
2. Body font: `Inter`

### Heading scale

1. H1 uses `clamp(3rem, 6vw, 5.75rem)`.
2. H2 uses `clamp(2.25rem, 4.6vw, 4.3rem)`.
3. H3 uses `clamp(1.35rem, 2vw, 2rem)`.

### General rules

1. Headings use tight letter spacing, approximately `-0.026em`.
2. Body text uses a line height near `1.58`.
3. Lead text uses a larger responsive size and a shorter line height for clarity.
4. Kicker labels use uppercase, high weight and wide letter spacing.

## Spacing and layout

### Global layout tokens

1. Container width: `1320px`
2. Desktop gutter: `40px`
3. Tablet gutter: `32px`
4. Mobile gutter: `24px`
5. Section padding: `96px`
6. Mobile section padding: `56px`

### Layout rules

1. Page content should use the `.container` pattern.
2. Page hero content should not touch viewport edges.
3. Full width hero backgrounds can be used, but inner content must remain constrained.
4. Responsive breakpoints remain `900px` and `520px`, with additional page level adjustments where necessary.

## Radius and shadow

### Radius

1. Small radius: `12px`
2. Medium radius: `18px`
3. Large radius: `30px`
4. Extra large radius: `42px`
5. Full radius: `999px`

### Shadow

1. Card shadow light: `0 16px 48px rgba(17, 24, 39, 0.08)`
2. Card hover shadow light: `0 22px 60px rgba(17, 24, 39, 0.13)`
3. Card shadow dark: `0 18px 54px rgba(0, 0, 0, 0.36)`
4. Card hover shadow dark: `0 24px 70px rgba(0, 0, 0, 0.48)`

## Page accent system

Each major page can define `--page-accent`.

Confirmed page accents:

1. About: Human blue.
2. Works: Nature green.
3. Home: mixed HENEX gradient.

The accent can affect hero gradients, evidence numbers, card borders, icon badges and page navigation components.

## Global navigation

### Header

1. Header is sticky.
2. Header uses blurred theme background.
3. Navigation order is About, Philosophy, Works, Lab, Contact, theme toggle.
4. Contact remains a filled CTA.
5. Theme toggle is icon only.
6. Mobile navigation becomes a full screen menu.
7. Mobile theme toggle appears after Contact.

### Theme toggle

1. Uses local SVG images.
2. Light mode displays sun icon.
3. Dark mode displays moon icon.
4. Desktop size is `38px` by `38px`.
5. Mobile size is `52px` by `52px`.
6. External SVG images need filter based dark mode treatment because they do not inherit `currentColor` from the parent element.

## Global Back to Top

### Behaviour

1. Back to Top is a global component.
2. It is fixed to the lower right of the viewport.
3. It appears after the user scrolls down the page.
4. It scrolls the page back to top.
5. It respects reduced motion preference through JavaScript behaviour.

### Visual rules

1. Button size is `46px` by `46px` on desktop.
2. The button is circular.
3. The icon uses local SVG.
4. Dark mode applies an icon filter for visibility.
5. Mobile position is slightly tighter to the viewport edge.

## Icon system

### Source and storage

Icons are stored as local SVG files under:

`assets/icons/ui/`

`assets/icons/about/`

### Confirmed UI icons

1. `icon-sun.svg`
2. `icon-moon.svg`
3. `icon-arrow-up.svg`

### Confirmed About icons

1. `icon-spatial.svg`
2. `icon-system.svg`
3. `icon-human.svg`
4. `icon-research.svg`
5. `icon-structure.svg`
6. `icon-prototype.svg`
7. `icon-delivery.svg`
8. `icon-content.svg`
9. `icon-spatial-service.svg`

### Icon rules

1. Icons use a simple linear style.
2. Stroke should visually match a `2px` line weight.
3. Icons should not become illustrative or decorative beyond their functional role.
4. When SVG is used as an image file, dark mode may require `filter: invert(1)`.
5. Icons inside About icon badges should remain visible in both themes.

## Image theme variants

### About portrait

The About hero portrait uses two assets:

1. Light mode: `assets/img/about/cafe-yi-portrait.png`
2. Dark mode: `assets/img/about/cafe-yi-portrait-dark.png`

The dark mode version should be a light coloured line drawing with transparent background. This is preferred over CSS inversion because it gives better visual control.

### Rules for future image variants

1. Use separate light and dark assets when visual contrast is part of the design.
2. Use CSS filters only for simple monochrome UI icons.
3. Keep transparent backgrounds for drawings and line art.
4. Use meaningful file names with `dark` only when the asset is intended for dark mode.

## Button system

### Primary button

1. Uses theme text as background.
2. Uses theme background as text colour.
3. Used for main page action.

### Soft button

1. Uses soft surface background.
2. Uses theme border.
3. Used for secondary actions.

### Hero buttons

1. Hero primary uses white background and dark text.
2. Hero outline uses transparent surface and hero border.
3. Hero button contrast must be checked in both light and dark hero backgrounds.

## Cards

### Global card rules

1. Cards use theme card surface.
2. Cards use soft border.
3. Cards use the standard card shadow.
4. Hover lift can be used for clickable cards.

### About card variants

1. Evidence item.
2. Profile card.
3. Foundation card.
4. Work process card.
5. Capability card.
6. Marker card.
7. CTA card.

## About page pattern

### Sections

1. Hero with portrait.
2. Evidence strip.
3. Profile statement.
4. Practice foundations.
5. How I Work.
6. Capability clusters.
7. Experience thread.
8. Markers of practice.
9. Final CTA.

### Content decisions

1. Practice foundations are parallel concepts and should not use numeric labels.
2. How I Work is a process and should use numeric labels.
3. The evidence strip should remain short and measurable.
4. Markers of practice should show credibility without sounding like a CV page.
5. CV download remains a light final action.

### Confirmed About evidence

1. `18+` years across architecture, UX, service design and delivery.
2. `3.4M sqm` designed project experience.
3. `10+` recognised design awards.
4. `88.9%` task success after prototype testing, up from `66.7%` baseline.

## Accessibility rules

1. Use semantic HTML landmarks.
2. Keep skip link active.
3. Ensure visible focus state.
4. Maintain colour contrast in light and dark mode.
5. Do not rely on colour alone for meaning.
6. Keep icon images decorative with empty `alt` text when the text label already gives meaning.
7. Keep the light mode portrait meaningful with descriptive `alt` text.
8. Use the dark portrait as decorative when it is the same semantic image.

## Implementation notes

1. `global.css` now contains cleaned global rules without temporary hotfix blocks.
2. `about.css` contains About specific layout and dark mode image switching.
3. `main.js` handles theme toggle, mobile navigation, Escape key menu closing and Back to Top.
4. `pages.css` still manages Home and Works page patterns.
5. About specific styles should not be moved into `pages.css` unless the pattern is reused by another page.

## Current pending decisions

1. CV PDF file is still pending.
2. Philosophy page pattern is not yet defined.
3. Lab page pattern is not yet defined.
4. HTML design system viewer is requested and will be planned next.

## RAG update reminder

Add this design system update back into the HENEX website knowledge base after review.

Suggested RAG location:

`HENEX Website Space / Design System / HENEX_Design_System_v1_3_About_Global_Update.md`
