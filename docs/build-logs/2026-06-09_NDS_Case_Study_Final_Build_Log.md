# 2026-06-09 NDS Case Study Final Build Log

## Project

New World Design System case study page for the HENEX portfolio website.

Main page file:

`works/new-world-design-system.html`

Main system case CSS file:

`assets/css/ux-system-case.css`

Shared UX case CSS file, unchanged in this phase:

`assets/css/ux-case-study.css`

## Phase Goal

The goal of this phase was to turn the New World Design System page from a working case study draft into a cleaner, evidence-rich, portfolio-ready system case. The work focused on integrating useful ideas from the Claude-generated HTML reference without replacing the HENEX website structure, global navigation, footer, shared UX case template or CSS architecture.

The final direction was not to create a live component sandbox. The page now uses original design system evidence images, structured narrative sections and controlled visual hierarchy.

## Starting Point

The page already had a basic HENEX UX case study structure, including hero, overview, screencast, problem, solution, outcome, feedback, process, audit, principles, foundations, components, documentation, retrospective, HENEX method recipe and related projects.

However, the earlier version had several issues:

1. The design system evidence was too thin in some areas.
2. Audit findings and insights were not clearly separated.
3. Foundations and component sections either repeated too much long-form image content or used simplified live HTML/CSS demos that could drift from the original design system work.
4. The hero image implementation caused layout instability.
5. Some section colour logic was inconsistent.
6. Principle icons were temporary placeholders with weak semantic fit.
7. Multiple quick CSS patches had accumulated and needed to be integrated cleanly.

## Key Source Inputs

The work used the current HENEX site files and the Claude-generated HTML reference as a design reference only. The Claude version was not adopted directly because it used its own page structure, navigation, footer, font logic, inline CSS, dark mode system and independent class naming.

The following user-provided NDS assets were used or referenced:

`assets/img/projects/nds/hero-bg.webp`
`assets/img/projects/nds/colour.png`
`assets/img/projects/nds/typography.png`
`assets/img/projects/nds/iconography.png`
`assets/img/projects/nds/icon-grid.png`
`assets/img/projects/nds/typography-desktop.png`
`assets/img/projects/nds/typography-mobile.png`
`assets/img/projects/nds/search-anatomy.png`
`assets/img/projects/nds/search-view.png`
`assets/img/projects/nds/card-container.png`
`assets/img/projects/nds/card-action.png`
`assets/img/projects/nds/button-state.png`
`assets/img/projects/nds/button-hierarchy.png`
`assets/img/projects/nds/solution.png`
`assets/img/projects/nds/outcome.png`
`assets/img/projects/nds/variables.png`

## Major Design Decisions

### 1. Keep HENEX structure, do not import Claude page structure

Claude's HTML was treated as a reference for evidence display and content structure. The final page keeps the HENEX header, footer, global CSS, UX case study base CSS and the system case CSS layer.

Rejected from Claude version:

1. Independent navigation.
2. Independent footer.
3. Inline CSS.
4. Independent typography system.
5. Independent dark mode logic.
6. Full page class structure.

Adopted from Claude version:

1. Stronger evidence display.
2. Findings and insights structure.
3. Microsite preview idea.
4. Component detail evidence structure.
5. Clearer component selection rationale.

### 2. Hero background image moved to CSS background

The first attempt used `hero.png` as a separate right-side hero figure. That created unstable layout behaviour and caused text to appear too close to the top or visually compressed.

Final decision:

Use `hero-bg.webp` as a CSS background image on the hero section.

The old HTML hero figure was removed:

`<figure class="system-hero-art">...</figure>`

The final CSS uses a controlled background stack with a left-side readability gradient and `hero-bg.webp` positioned to the right.

### 3. Red narrative layer, purple system artefact layer, grey labels

The final colour logic is:

1. Narrative headings use red.
2. Design system artefact headings use purple.
3. Section kickers and small supporting labels use muted grey.
4. Meta labels use red, except the HENEX Lens link uses purple.
5. HENEX recipe links use purple.
6. Problem HMW highlighted terms are red again after testing purple.

This decision should guide future HENEX case pages.

### 4. Findings and insights separated

System Audit now has two levels:

1. Findings, concrete observations from audit.
2. Insights, synthesis of deeper system-level issues.

Findings labels use purple. Insight labels use muted grey. Insight titles remain red.

### 5. Course feedback simplified but kept credible

Course feedback was simplified into quote cards. The cards use a red-tint style and a light icon treatment.

Final feedback styling:

1. Red-tint card background.
2. Red-tint border.
3. Light red icon background.
4. Red icon stroke.
5. Quote text remains clear and readable.

This avoids the earlier heavy red icon style while keeping the feedback section aligned with the NDS narrative tone.

### 6. Principles use semantic inline SVG icons

The first icon set was only a placeholder and several icons did not match the principle meaning well.

Final icon meanings:

1. Consistency, repeated matching blocks with red filled blocks.
2. Clarity, target icon.
3. Accessibility, simplified universal access person.
4. Inclusivity, connected group.
5. Simplicity, direct path.
6. Visibility, eye.

These are now written directly as inline SVG in `new-world-design-system.html`. The temporary CSS data SVG patches were removed.

### 7. Foundations use microsite preview plus compact summaries

The foundations section now uses a two-layer approach.

Layer one, microsite preview:

1. `colour.png`
2. `typography.png`
3. `iconography.png`

Layer two, compact detail summaries:

1. Colour system as extracted web swatches.
2. Typography as desktop and mobile evidence images.
3. Icon system as a single `icon-grid.png` evidence image.

Long repeated images were removed from the main page body to reduce page length and repetition.

### 8. Icon System only keeps icon-grid detail

Earlier versions showed both `icon-grid.png` and `icon-library.png`. This created duplicate content because the full icon library is already visible in the microsite preview.

Final decision:

Only use `icon-grid.png` in the Icon System detail section.

Final heading:

`Grid rules for consistent icon drawing.`

Final support text:

`The detail focuses on grid, padding and stroke rules. The full icon library remains visible in the microsite preview above.`

### 9. Component selection rationale added

The Core Components section now explains why the case focuses on Search, Cards and Buttons.

Final title:

`Why Search, Cards and Buttons?`

Final logic:

1. Search supports finding products.
2. Cards support comparing product information.
3. Buttons support taking action.

The component order follows this logic:

1. Search System
2. Card System
3. Button System

### 10. Component details use original evidence images, not live demos

Live component demos were removed. Original exported documentation images are used instead.

Final component evidence:

Search:

1. `search-anatomy.png`
2. `search-view.png`

Card:

1. `card-container.png`
2. `card-action.png`

Button:

1. `button-state.png`
2. `button-hierarchy.png`

The third images were removed from each component group to improve readability and reduce page length.

## Final File State

### `works/new-world-design-system.html`

Contains:

1. Clean HENEX header and footer.
2. Hero with no separate hero figure.
3. Full case narrative.
4. Inline SVG principle icons.
5. Updated component order and component rationale.
6. Clean Icon System section with only `icon-grid.png`.
7. No temporary patch markup.

### `assets/css/ux-system-case.css`

Contains:

1. NDS colour variables.
2. Hero background image using `hero-bg.webp`.
3. Red narrative rules.
4. Purple design system artefact rules.
5. Muted grey label rules.
6. System Audit findings and insights styling.
7. Feedback card and icon styling.
8. Foundation and component evidence layout.
9. Responsive layout at 1100px, 768px and 520px.
10. No CSS data SVG patches.
11. No temporary principle icon patch blocks.

## Final Known Dependencies

Required image files in `assets/img/projects/nds/`:

`hero-bg.webp`
`colour.png`
`typography.png`
`iconography.png`
`icon-grid.png`
`typography-desktop.png`
`typography-mobile.png`
`search-anatomy.png`
`search-view.png`
`card-container.png`
`card-action.png`
`button-state.png`
`button-hierarchy.png`
`solution.png`
`outcome.png`
`variables.png`

Required shared files:

`assets/css/global.css`
`assets/css/ux-case-study.css`
`assets/css/ux-system-case.css`
`assets/js/main.js`
`assets/js/ux-case-study.js`

Required video:

`https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/nds.mp4`

## QA Checks Completed

The final cleaned files were checked for:

1. No old hero figure in HTML.
2. CSS references `hero-bg.webp`.
3. No old principle icon CSS patch comments.
4. No CSS data SVG icon patches.
5. Principle icons are inline SVG in HTML.
6. Icon System uses only `icon-grid.png`.
7. Insight labels are grey.
8. Problem HMW emphasis is red.
9. Screencast title is red.
10. Feedback cards are red-tint style.
11. Feedback icons use light background with red line.
12. HENEX Lens and Recipe R17 links are purple.
13. Component order is Search, Card, Button.
14. Section kickers remain muted grey.

## Risks and Watch Points

1. `hero-bg.webp` must stay in `assets/img/projects/nds/`.
2. If the hero background appears too busy on a smaller device, use stronger left-side gradient rather than adding a separate hero image element.
3. Avoid adding further CSS patches at the file bottom. Integrate future changes into the relevant section of `ux-system-case.css`.
4. Do not reintroduce live component demos unless there is a strong reason. Evidence images are more stable for this case.
5. Keep the NDS page aligned with HENEX-wide typography and header/footer, not with the Claude-generated standalone page.

## Current Completion Status

The NDS case study page is ready for replacement in the repository and review on Vercel.

After deployment, review:

1. Desktop hero background readability.
2. Mobile hero crop.
3. Microsite preview scroll behaviour.
4. Icon System single image readability.
5. Component detail image readability.
6. Feedback card spacing and colour.
7. Dark mode contrast.

## RAG Reminder

This build log should be uploaded back into the HENEX website project knowledge base under:

`HENEX Website Space / Build Logs / NDS Case Study`
