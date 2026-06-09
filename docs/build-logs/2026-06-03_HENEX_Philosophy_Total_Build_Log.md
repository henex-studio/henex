# HENEX Philosophy Page Build Log

Date: 2026-06-03
Page: `philosophy.html`
Stylesheet: `assets/css/philosophy.css`
Phase: Philosophy page refinement, recipe system completion and Selected Work update

## Phase Summary

This build phase focused on turning the Philosophy page into a coherent, usable and visually consistent explanation of the HENEX framework. The work covered the hero area, Core idea section, Method logic, the 27 recipe cards, the Selected Work project cards and several supporting interaction states.

The final direction keeps the page clean at the top, systematic in the middle and lighter at the end. The page now introduces the framework, explains its dimensions and nodes, demonstrates how nodes form recipes, presents all 27 recipes in a compact card system, and ends with three selected projects that show how primary recipes return to practice.

## Files Modified During This Phase

1. `philosophy.html`
2. `assets/css/philosophy.css`

## Major Decisions Confirmed

1. The Philosophy hero should stay clean and should not include the HENEX formula under the logo.
2. The HENEX logo in the hero should be larger and use the confirmed triple-colour SVG asset.
3. The formula `(Human + Emotion + Nature) × Nexus = Experience` should move from the hero into the Core idea section as a lightweight formula strip.
4. The 27 recipe cards should use the confirmed v8 compact card size and interaction model.
5. The Method logic result card should keep its original content and pale grey default state, with the HENEX three-colour gradient appearing only on hover or focus.
6. The Selected Work section should use three projects only: one Service project, one Digital project and one Built project.
7. Selected Work project cards should use the confirmed Project Card Mood v6 Option E1 treatment, with the recipe number and title on one inline black-text line.
8. No broad rewrite should affect confirmed sections outside the current work scope.

## Hero Section Changes

1. Removed the formula from the hero visual area to keep the hero clean.
2. Kept the hero right side focused on the HENEX logo only.
3. Replaced earlier temporary logo treatments with the confirmed external SVG asset:
   `assets/icons/henex/henex-logo-triple.svg?v=20260603b`
4. Enlarged the logo to improve visual presence.
5. Moved the hero logo further left on desktop to reduce empty space in the centre.
6. Removed the earlier circular aura experiment after review.
7. Reset the hero background to a broader page-level gradient logic instead of a local circular glow behind the logo.
8. Preserved responsive behaviour by disabling the desktop logo shift at smaller breakpoints.

## Core Idea Section Changes

1. Kept the confirmed Core idea card system.
2. Added the HENEX formula as a lightweight formula strip under the Core idea paragraph:
   `(Human + Emotion + Nature) × Nexus = Experience`
3. Preserved the existing three Core idea cards and their confirmed hover behaviour.

## Dimension and Node Sections

1. Preserved the confirmed Dimension card system.
2. Preserved the confirmed nine Node card system.
3. Kept the existing node icon assets and card layout.
4. Did not revise content or interaction in these sections during the final project-card update.

## Method Logic Section Changes

1. Preserved the original Method logic content:
   - `Agency`
   - `Empathy`
   - `Interface`
   - `Example recipe · R24`
   - `Trust & Cooperation Rules`
   - `Agency + Empathy + Interface`
   - `Build trust mechanisms for safe participation and exchange.`
2. Updated the final result card so its default state stays as the original pale grey gradient.
3. Updated the result card hover and focus state so it changes to the HENEX three-colour gradient.
4. Ensured result card text and icons turn white on hover or focus.
5. Kept the result card content unchanged after the content mismatch was identified.

## 27 Recipe Card System Changes

1. Explored several recipe card mood versions before confirming v8.
2. Reverted from the weaker v5 hover direction to the denser v3-style visual language.
3. Confirmed the v8 compact card size:
   - Smaller card height.
   - Reduced copy area.
   - Reduced padding and spacing.
   - More cards visible per scroll.
4. Rebuilt the production recipe cards to match the confirmed v8 structure.
5. Removed old marker dots from the live recipe cards.
6. Added top-right node labels to each recipe card.
7. Kept the R-number capsule on each recipe card.
8. Rebuilt the copy system so default description and `When to use` text share the same fixed copy stage.
9. Fixed the hover state so all text, including the `When to use` body text, turns white on the gradient background.
10. Preserved all 27 recipe IDs, titles, node combinations, descriptions and `When to use` copy.
11. Confirmed the 27 recipe cards should not use node icons in the top-right area.
12. Confirmed the 27 recipe cards should use node text labels instead.

## Recipe Card QA Notes

The following behaviours should now be present:

1. R01 to R27 use compact v8 sizing.
2. Each card has an R-number capsule.
3. Each card has three node labels at the top-right area.
4. Default copy and hover copy do not appear at the same time.
5. Hover and keyboard focus show the HENEX gradient and white text.
6. Mobile layout stacks the header and aligns node labels left.

## Selected Work Project Card Changes

1. Reduced the Selected Work section from four cards to three cards.
2. Removed `Accessibility Support Hub` from this section only.
3. Kept one representative project for each major area:
   - Service: `NZ Police Victim Hub`
   - Digital: `New World Design System`
   - Built: `Guangzhou Baiyun T2`
4. Preserved the existing image paths for the three retained projects.
5. Added a top-left category capsule for each project card:
   - `Service`
   - `Digital`
   - `Built`
6. Added top-right node labels for each primary recipe:
   - `R24 Trust & Cooperation Rules`: `Agency`, `Empathy`, `Interface`
   - `R12 Calm Clarity Tuning`: `Perception`, `Affect`, `Interface`
   - `R11 Sensory Wayfinding Map`: `Perception`, `Affect`, `Matter`
7. Changed the recipe treatment to inline black text, for example:
   `R24 Trust & Cooperation Rules`
8. Removed the R-number capsule from the project card recipe line.
9. Removed the `Primary recipe` label from the final selected project card direction.
10. Added reason copy under each recipe line to explain why the primary recipe fits the project.
11. Updated CTA text to `View case study`.
12. Updated the CTA to a full-width soft button, with a dark hover state.
13. Added a subtle gradient background to each project card.
14. Kept project card hover interaction clean: slight card lift, stronger shadow and slight image scale only.
15. Avoided whole-card colour-fill hover effects for project cards.

## Selected Work Final Content Model

Each final project card follows this structure:

1. Project image.
2. Category capsule.
3. Node labels.
4. Project type.
5. Project title.
6. Inline recipe line.
7. Reason copy.
8. Case study CTA.

## Accessibility and Interaction Notes

1. Recipe cards and project cards support hover and focus-visible states.
2. CTA links remain visible and keyboard-focusable.
3. Project cards use readable text labels for node composition rather than colour-only dots.
4. Mobile layouts stack cards into a single column.
5. The project card node labels move from right alignment to left alignment on narrow screens.

## Not Changed During Final Selected Work Update

The following parts were intentionally preserved after they were confirmed:

1. Hero section structure and content.
2. Core idea cards.
3. Formula strip.
4. Dimension cards.
5. Node cards.
6. Method logic cards.
7. 27 recipe card system.
8. Practice note block below the project cards.
9. Home page.
10. About page.
11. Works page.
12. Lab page.
13. `global.css`.
14. `pages.css`.
15. JavaScript files.

## Risks and Follow-up Items

1. The `philosophy.css` file now contains several appended refinement blocks from the iterative process. A later cleanup pass should consolidate repeated or superseded CSS rules once the page is visually locked.
2. The Works page should be updated next so the new Selected Work project card CTAs lead into a consistent project index and case study experience.
3. The first case study template should be created after the Works page direction is confirmed.
4. The Selected Work project card copy should be reviewed again once real case study pages are written, to ensure each reason statement matches the final case study narrative.
5. The HENEX page and this build log should be added back into the project RAG after final deployment review.

## Recommended QA Checklist Before Deployment

1. Open the Philosophy page in desktop width and confirm the hero logo position and background gradient.
2. Confirm the HENEX formula appears under the Core idea paragraph, not in the hero.
3. Hover and focus the Method logic result card and confirm only the hover state uses the HENEX three-colour gradient.
4. Hover R01, R12, R24 and R27 recipe cards and confirm all hover text is white.
5. Confirm all 27 recipe cards use the compact v8 layout.
6. Confirm the Selected Work section shows exactly three cards.
7. Confirm the three project categories are Service, Digital and Built.
8. Confirm node labels are visible on project cards.
9. Confirm project recipe lines use inline black text, such as `R24 Trust & Cooperation Rules`.
10. Confirm each project card CTA says `View case study`.
11. Check tablet and mobile layouts.
12. Hard refresh after Vercel deployment to avoid cached CSS.

## Final State

The Philosophy page now communicates HENEX as a structured design framework with a clear visual system. The page explains the framework, shows the node system, demonstrates method logic, presents the complete recipe library and connects the framework back to selected real projects. The final page direction is more systematic, lighter at the ending and more consistent with the confirmed HENEX design language.
