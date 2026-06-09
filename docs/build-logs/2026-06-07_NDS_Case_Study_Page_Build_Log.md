# 2026-06-07 NDS Case Study Page Build Log

Project: HENEX Website  
Page: New World Design System  
File target: `works/new-world-design-system.html`  
CSS targets: `assets/css/ux-case-study.css`, `assets/css/ux-system-case.css`  
Phase status: In progress, content direction and page structure largely established, visual refinement still ongoing

## 1. Phase Summary

This phase focused on building and refining the New World Design System case study page. The page began as an adaptation of the ASH UX case study template, but the first implementation did not express the depth and character of the NDS project clearly enough. The work then shifted from a simple template-based case page into a more system-oriented case study with stronger design system evidence.

The main direction was confirmed as a case study that explains the project through problem, solution, outcome, then detailed process and system evidence. The page now keeps the original NDS narrative order close to the PDF: problem first, then solution, then outcome, followed by audit, principles, foundations, components, documentation and reflection.

A key decision was to separate case narrative content from design system artefact content. Narrative sections use New World red as the page-level theme. Design system sections, from Token Ready Foundations through Documentation and Variables, use the original NDS purple for artefact-level headings and component rules. Retrospective and HENEX Method Recipe then return to the red case narrative theme.

## 2. Key Decisions Confirmed

### 2.1 Narrative order

The NDS page should follow the original PDF logic rather than placing the outcome at the very front. The confirmed order is:

1. Hero
2. Overview and meta
3. Screencast
4. Problem
5. Solution
6. Outcome
7. Course Feedback
8. Design Process
9. System Audit
10. Principles and Scope
11. Token Ready Foundations
12. Core Components
13. Documentation and Variables
14. Retrospective
15. HENEX Method Recipe
16. Related Projects

### 2.2 Voice and writing style

The final case study voice should balance professional case study language with a visible first-person design voice. The page should not sound like a third-party project report, but it should also not overuse “I”. First person should appear mainly around design decisions, framing, scope decisions and reflection.

A reusable writing guideline file was created during this phase:

`HENEX_Case_Study_Voice_and_Narrative_Rules.md`

That file should be uploaded to:

`HENEX Website Space / Writing Guidelines / HENEX_Case_Study_Voice_and_Narrative_Rules.md`

### 2.3 Critical thinking focus

The page should not only show what was made. It should show why decisions were made, what tradeoffs shaped the work and how each decision affected the system. This was especially important for NDS because a design system case study can easily become a catalogue of UI parts.

Critical thinking points added or reinforced include:

1. NDS was treated as a system reconstruction task, not a visual redesign.
2. The audit reframed the issue from visual inconsistency to missing decision rules.
3. Search, Cards and Buttons were selected because they support the core online grocery journey.
4. The token work is described as token ready, not as a complete production token library.
5. Variables were an important learning direction, but not fully applied in the original assignment.

### 2.4 CSS architecture

The CSS architecture was changed from a single UX case study stylesheet into a three-layer approach:

1. `global.css`, full-site global styles.
2. `ux-case-study.css`, reusable UX case study core template.
3. `ux-system-case.css`, reusable system-oriented case pattern layer.

The purpose of `ux-system-case.css` is to support design system, dashboard, component library and product system cases without turning `ux-case-study.css` into a project-specific file.

ASH should continue to use only:

```html
<link rel="stylesheet" href="../assets/css/global.css">
<link rel="stylesheet" href="../assets/css/ux-case-study.css">
```

NDS should use:

```html
<link rel="stylesheet" href="../assets/css/global.css">
<link rel="stylesheet" href="../assets/css/ux-case-study.css">
<link rel="stylesheet" href="../assets/css/ux-system-case.css">
```

## 3. Colour and Theming Decisions

### 3.1 Final colour logic

The page uses three colour layers:

1. Case narrative layer, red.
2. Design system artefact layer, purple.
3. Section kicker and auxiliary labels, muted grey.

### 3.2 Red narrative layer

Red is used for the case study narrative layer from Hero through Principles and Scope. It is also used again from Retrospective onward.

Red applies to:

1. Hero title.
2. Narrative section headings.
3. HMW problem emphasis.
4. Solution heading.
5. Outcome heading.
6. Feedback heading.
7. Design Process heading.
8. System Audit heading.
9. Principles and Scope heading.
10. Retrospective heading.
11. HENEX Method Recipe heading.
12. Related Projects heading.
13. Process step titles, Discover, Define, Develop and Deliver.
14. Problem, Audit and Principles card numbers, using a muted red.
15. Problem, Audit and Principles card titles, using a stronger red.

### 3.3 Purple DS artefact layer

Purple applies from Token Ready Foundations through Documentation and Variables. This section represents the original NDS design system artefacts, not the portfolio page narrative.

Purple applies to:

1. Token Ready Foundations main heading.
2. Foundation module headings.
3. Grid and icon specification numbers.
4. Core Components heading.
5. Button, Search and Card section headings.
6. Documentation and Variables heading.
7. Button state matrix styles.
8. Grid and spacing demo.
9. Component-related DS evidence sections.

### 3.4 Muted grey labels

A major correction from this phase is that section kickers and small labels should use muted grey, not red or purple.

Labels that must remain grey:

1. Overview
2. Screencast
3. Problem
4. Solution
5. Outcome
6. Course Feedback
7. Design Process
8. System Audit
9. Principles and Scope
10. Token Ready Foundations
11. Core Components
12. Documentation and Variables
13. Retrospective
14. HENEX Method Recipe
15. Related Projects
16. Client, Role, Team, Timeline, Tools, HENEX Lens and Skills
17. Colour System, Typography, Icon System and Grid and Spacing
18. Button System, Search System and Card System
19. Live CSS demo and Anatomy evidence
20. Primary recipe
21. Related project category labels

This rule must be preserved in future edits.

## 4. Page Structure Updates Completed

### 4.1 Hero

The hero logo was removed. The hero should be clean and text-led. The New World logo should not appear in the hero because it makes the page feel like a brand page rather than a case study.

Hero content includes:

1. Project tags.
2. Page title.
3. Short subtitle.
4. View Prototype CTA.
5. Back to Works CTA.

### 4.2 Overview and meta

The overview section keeps the ASH-style meta structure. The HENEX Lens is included and should not be removed.

Confirmed meta content:

1. Client: MUXD Course Work
2. Role: UX Researcher, Design System Designer, Microsite Designer
3. Team: Individual
4. Timeline: 4 weeks
5. Tools: Figma, Miro, Office 365
6. HENEX Lens: R17 · Make It Tangible Model
7. Skills: Design system, Atomic Design, reverse engineering, component documentation, accessibility compliance

### 4.3 Screencast

A screencast section was added before Problem, using the video URL:

`https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/nds.mp4`

The screencast allows readers to see the Figma microsite before reading the problem framing.

### 4.4 Problem

The Problem section was changed back to a HMW question. This better matches the original PDF and gives the page stronger design framing.

The HMW framing is:

“How might we create a unified, scalable design system that helps teams work efficiently, while improving clarity, accessibility and brand consistency across digital platforms?”

### 4.5 Solution

The Solution section was changed from a two-column image layout to a full-width image layout. The issue was that the original `ux-media-row` layout constrained the image width, making the solution diagram too small. The current solution should place text first and show the image as a large full-width visual below.

### 4.6 Outcome

Outcome remains near the front of the page after Solution. The outcome image should be immersive and should not have an external border frame. The image is part of the work evidence and should be shown clearly.

### 4.7 Course Feedback

Course Feedback was added as credibility evidence. Feedback cards were redesigned to include a red-background white-line user icon. The icon should be simple and should not include the two small side dots from the About page human icon.

Current feedback content:

1. “Your UX writing is clear and succinct, making complex ideas easy to understand.”
2. “The Foundations section is detailed and well-considered.”
3. “Tackling complex components like cards and search is impressive.”

### 4.8 Design Process

The four process step titles should be red:

1. Discover
2. Define
3. Develop
4. Deliver

This is an exception to the muted grey label rule because these are not section kickers. They are process step headings.

### 4.9 System Audit

Audit cards include:

1. Inconsistency
2. Redundancy
3. Divergence

The card numbers should use muted red. The card titles should use stronger red. This creates hierarchy when two red elements appear in one card.

### 4.10 Principles and Scope

Principle cards include:

1. Consistency
2. Clarity
3. Accessibility
4. Inclusivity
5. Simplicity
6. Visibility

The principle numbers should use muted red. The principle titles should use stronger red. The scope note below the cards should be spaced clearly away from the cards.

### 4.11 Token Ready Foundations

This section begins the DS artefact layer. From this section until Documentation and Variables, main headings should use purple.

Foundations include:

1. Colour System
2. Typography
3. Icon System
4. Grid and Spacing

Colour System must preserve the original NDS colour logic:

1. Primary red
2. Secondary purple
3. Neutral colours

It must not be rewritten as all red.

### 4.12 Typography

Typography samples must display the actual size stated in the label.

Desktop samples:

1. H1, 60px / 72px
2. H2, 48px / 56px
3. Body large, 20px / 24px

Mobile samples:

1. H1, 32px / 40px
2. H2, 28px / 32px
3. Body, 16px / 20px

The display size should not be reduced just to fit the card. If the sample is too large, adjust the layout rather than shrinking the type size.

### 4.13 Grid and Spacing

The mobile grid must visually show mobile width. It should not stretch to the same width as the desktop grid.

Confirmed rule:

```css
.system-grid-frame--mobile {
  width: min(375px, 100%);
}
```

The grid demo belongs to the DS artefact layer and should use purple.

### 4.14 Core Components

Button remains a live CSS demo because button states can be represented clearly and safely in the page.

Search and Card do not use live demos. They use anatomy images because simplified live demos risk misrepresenting the original components.

Current component approach:

1. Button System, text plus anatomy image plus live button state matrix.
2. Search System, text plus anatomy image.
3. Card System, text plus anatomy image.

### 4.15 Documentation and Variables

Variables should be shown as evidence, but the image should not sit inside a decorative frame. It should align with the content width and appear as a direct evidence image.

The wording must remain honest:

1. The original assignment did not produce a complete production token library.
2. Variables were explored as a future direction.
3. The case should describe the work as token ready, not production token complete.

## 5. Image Handling Rules Confirmed

### 5.1 Images that should be shown directly without external frame

These images should not have a decorative outer frame, background fill, padding box or shadow added by CSS:

1. `button-anatomy.png`
2. `search-anatomy.png`
3. `card-anatomy.png`
4. `icon-grid.png`
5. `variables.png`

### 5.2 Images that should be prominent

1. `solution.png`, full-width, text above image.
2. `outcome.png`, immersive, no external frame.

### 5.3 Image width rule

Evidence images should align with the left and right edges of their text container. They should not be artificially narrowed or centred in a small block unless the image itself has that composition.

## 6. Technical Implementation Notes

### 6.1 Current target files

Current target files generated or modified during this phase:

1. `new-world-design-system.html`
2. `ux-system-case.css`
3. `ux-case-study.css`

The latest confirmed state was that `ux-system-case.css` was adjusted so all section kickers and auxiliary labels use muted grey while main headings still carry red or purple theme.

### 6.2 Important CSS rules to preserve

Section kickers and labels must remain grey:

```css
.ux-case-page--new-world .ux-kicker,
.ux-case-page--new-world .ux-intro p,
.ux-case-page--new-world .ux-meta span,
.ux-case-page--new-world .ux-skills > span,
.ux-case-page--new-world .ux-lens span,
.ux-case-page--new-world .ux-recipe-primary span,
.ux-case-page--new-world .ux-related-card span,
.ux-case-page--new-world .system-foundation-card > span,
.ux-case-page--new-world .system-component-demo > span {
  color: var(--theme-muted);
}
```

Do not reintroduce this rule:

```css
.system-theme-ds .ux-kicker {
  color: var(--section-theme);
}
```

This rule is incorrect because DS section kickers should remain grey.

### 6.3 Process steps remain red

```css
.system-process-section .ux-process span {
  color: var(--case-red);
}
```

This should remain, because Discover, Define, Develop and Deliver are step headings, not section kickers.

### 6.4 Typography must not be downscaled

Do not add responsive rules that reduce the labelled typography samples. The earlier issue was caused by reducing the visible type size while keeping the label unchanged.

## 7. Known Issues and Next Review Points

The page still needs visual review after uploading to GitHub and Vercel.

Check these items first:

1. All section kickers are grey, especially Screencast.
2. DS section kickers are grey, not purple.
3. Main headings are red before Token Ready Foundations.
4. Main headings are purple from Token Ready Foundations through Documentation and Variables.
5. Retrospective and HENEX Method Recipe return to red.
6. Solution image is full-width and not constrained by a two-column layout.
7. Outcome image does not have an external frame.
8. Feedback icon is red background with white line drawing and no side dots.
9. Button, Search, Card and Variables images align with the text width and do not sit inside decorative frames.
10. Typography samples visually match their labelled sizes.
11. Mobile grid appears as a 375px style frame, not full desktop width.
12. Search and Card are anatomy-image based, not live demos.
13. Colour System still shows Primary red and Secondary purple.

## 8. Files to Upload

Upload or replace:

1. `works/new-world-design-system.html`
2. `assets/css/ux-system-case.css`
3. `assets/css/ux-case-study.css`

Also ensure these assets exist:

1. `assets/img/projects/nds/solution.png`
2. `assets/img/projects/nds/outcome.png`
3. `assets/img/projects/nds/icon-grid.png`
4. `assets/img/projects/nds/button-anatomy.png`
5. `assets/img/projects/nds/search-anatomy.png`
6. `assets/img/projects/nds/card-anatomy.png`
7. `assets/img/projects/nds/variables.png`

## 9. RAG Update Reminder

After the page direction is approved, upload this build log to:

`HENEX Website Space / Build Logs / 2026-06-07_NDS_Case_Study_Page_Build_Log.md`

Also upload the voice and narrative rules document to:

`HENEX Website Space / Writing Guidelines / HENEX_Case_Study_Voice_and_Narrative_Rules.md`

## 10. Next Step

The next working phase should begin with a deployed-page review. Do not continue making isolated CSS patches. The next review should check the live Vercel output section by section, then produce a final targeted refinement pass.
