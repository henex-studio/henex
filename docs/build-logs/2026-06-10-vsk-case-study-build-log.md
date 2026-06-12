# Build Log 2026-06-10, Voting Starter Kit Case Study

Project: HENEX Website
Page: works/voting-starter-kit.html
Related CSS: assets/css/ux-case-study.css
Phase: VSK case study page build, refinement and CSS merge

## 1. Work Completed

Built and refined the Voting Starter Kit case study page as a new HENEX UX case page.

The page was first created as a separate HTML page with a dedicated CSS file:

```text
works/voting-starter-kit.html
assets/css/vsk-case.css
```

After the page structure and visual treatment stabilised, the VSK-specific CSS was merged into:

```text
assets/css/ux-case-study.css
```

The final VSK page no longer loads:

```text
assets/css/vsk-case.css
```

The final VSK page now follows the same CSS loading pattern as ASH:

```text
assets/css/global.css
assets/css/ux-case-study.css
```

## 2. Content Structure Decisions

The VSK page was reorganised to match the case study logic used by ASH and NDS.

The final order is:

1. Hero
2. Overview
3. Problem
4. Solution Strategy
5. Outcome
6. Course Feedback
7. Design Process
8. Scope and Findings
9. Research Synthesis and Principles
10. Concept Exploration and Testing
11. Final Design Decisions
12. Visual System
13. Retrospective
14. HENEX Method Recipe
15. Related Projects

A key decision was to place Problem, Solution and Outcome before the detailed process. This allows readers to understand the case quickly before reading how the work developed.

Outcome and Feedback were kept as separate sections. Feedback supports credibility but should not be merged into the outcome section.

## 3. Content Depth Improvements

The first version was too thin and looked like a visual result page. The final version adds the missing reasoning layer.

The following content areas were expanded:

1. Scope decision.
2. Research findings.
3. Findings and implications.
4. Design principles.
5. Concept exploration logic.
6. Usability and testing influence.
7. Final touchpoint decisions.
8. Visual system reasoning.

The page now explains why the project focused on new immigrants, why education was chosen as the practical lever, and why the final solution uses three touchpoints.

## 4. Design Process Decisions

The Design Process section keeps the four broad phases:

1. Discover
2. Define
3. Develop
4. Deliver

However, the detailed sections do not repeat these names. They use concrete process names instead:

1. Scope and Findings
2. Research Synthesis and Principles
3. Concept Exploration and Testing
4. Final Design Decisions

This avoids a mechanical process-template feeling.

## 5. Principle Card Decision

The principle cards originally used numeric labels. These were replaced with four semantic icons.

The final principles are:

1. Fit the medium.
2. Use plain visual language.
3. Build trust through evidence.
4. Make policies tangible.

The icons follow the visual logic used in NDS principle cards, using circular icon containers and line-based SVGs.

## 6. Concept Section Decision

The concept exploration section was changed from a small horizontal image row to a vertical stacked layout.

Each concept row now explains:

1. The style tested.
2. Its strength.
3. Its limitation.
4. Its influence on the final direction.

The three concept directions are:

1. Comic style, approachable but too light.
2. News style, credible but distant.
3. Neighbour style, relatable but needed clearer proof.

The transparent PNG images are not placed on white backgrounds.

## 7. Visual System Decisions

The visual system section was expanded from a simple image display into an evidence section covering:

1. Colour.
2. Typography.
3. Icon system.
4. Illustration.
5. Accessibility.

The following assets were added:

```text
assets/img/projects/vsk/typography.png
assets/img/projects/vsk/icon.png
```

Transparent illustration and accessibility PNG images were kept transparent instead of being placed on white card backgrounds.

## 8. Colour Decisions

The source theme colour is:

```text
#FF6000
```

Earlier darker colour attempts made the page look muddy. These colours were rejected:

```text
#C94600
#7E2D00
#642400
```

The final principle is that VSK orange should not be darkened by changing hue. Use opacity, tint and layering instead.

Meta labels, process labels and recipe labels were adjusted back to pure theme orange because the previous `color-mix` result looked dirty.

Concept row kickers remain grey because those labels are supporting content rather than theme labels.

## 9. Hero Decisions

The hero uses a background image pattern and a soft orange gradient.

The visual direction is:

1. Left side stronger.
2. Right side lighter.
3. Background image visible on the right.
4. More like ASH case study atmosphere, less like a campaign landing page.

The orange was softened using opacity rather than darkening the hue.

## 10. CSS Architecture Decision

The VSK CSS started as an independent file to protect existing ASH and NDS pages during experimentation.

Once stable, the VSK CSS was merged into:

```text
assets/css/ux-case-study.css
```

VSK-specific rules remain scoped with:

```css
.ux-case-page--voting-starter-kit
```

The NDS system case CSS remains separate:

```text
assets/css/ux-system-case.css
```

This preserves the current layering model:

1. global.css for site-wide layout and tokens.
2. ux-case-study.css for standard UX cases.
3. ux-system-case.css for system-oriented cases.

## 11. Files Generated or Updated

Final replacement files generated:

```text
works/voting-starter-kit.html
assets/css/ux-case-study.css
```

Temporary or intermediate files produced during the process:

```text
assets/css/vsk-case.css
ux-case-study-vsk-append.css
voting-starter-kit-remove-vsk-css.patch
vsk-css-merge-readme.md
```

After deployment is confirmed, `assets/css/vsk-case.css` can be removed from the repository if no longer referenced.

## 12. Regression Check Required

After replacing files in GitHub, check these pages in Vercel preview:

1. Voting Starter Kit
2. Accessibility Support Hub
3. New World Design System

VSK checks:

1. Hero background and left-to-right gradient.
2. Problem chart size.
3. Solution touchpoint cards.
4. Feedback cards.
5. Principle icons.
6. Concept vertical stack.
7. Visual system image treatment.
8. Recipe labels and tags.

ASH checks:

1. Hero cabbage tree image.
2. Problem section.
3. Solution section.
4. Feature rows.
5. Design system section.
6. Recipe and related projects.

NDS checks:

1. Hero background.
2. System feedback cards.
3. System principle icons.
4. Foundation cards.
5. Component rows.
6. `ux-system-case.css` override behaviour.

## 13. Risks and Notes

1. The shared CSS file is now larger because it includes VSK styles.
2. VSK rules are scoped, but regression checks are still required.
3. `ux-system-case.css` must remain separate for NDS.
4. Do not delete `vsk-case.css` until Vercel preview confirms the merged version works.
5. Future case pages should begin with content structure and logic before visual styling.

## 14. Next Steps

1. Replace the two final files in GitHub.
2. Preview the deployed VSK page.
3. Check ASH and NDS for regression.
4. If everything is stable, remove `assets/css/vsk-case.css` in a separate cleanup commit.
5. Upload the execution guide to the HENEX website RAG knowledge base.

## 15. RAG Reminder

Add this build log and the execution guide to:

```text
HENEX Website Space / Build Logs / 2026
HENEX Website Space / Build Guidance / UX Case Study Generation
```
