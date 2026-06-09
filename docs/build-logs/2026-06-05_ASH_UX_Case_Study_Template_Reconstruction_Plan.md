# ASH UX Case Study Template Reconstruction Plan

Date: 2026-06-05
Project: HENEX Website, Accessibility Support Hub case study
Owner: Tian Yi
Status: Template planning document for review

## 1. Purpose

This document records the revised working method, content strategy and implementation plan for rebuilding the HENEX UX case study template through the real Accessibility Support Hub project.

The current goal is not to keep patching the existing ASH production page. The goal is to use the full ASH project content as the source for a stronger UX case study template, then apply the approved template back to the production ASH page.

ASH will become the first UX case study template. Architecture projects will use a separate image-led template later.

## 2. Working Method

### 2.1 Build the template from a real project

The previous mood template was useful for visual exploration, but it became too abstract when applied to a real case. ASH has many asset types, including overview text, hand-drawn diagrams, service blueprints, roadmaps, information architecture diagrams, usability testing evidence, final UI screens, design system assets and retrospective content.

The new method is to use ASH as the full template stress test. The template should grow from the real project structure, not from an idealised layout.

### 2.2 Use source hierarchy

The content and design decisions should follow this hierarchy:

1. The original ASH case page text is the primary content source.
2. The latest user instructions override earlier handoff files when there is a conflict.
3. The confirmed HENEX global design system controls typography, spacing, surface treatment, accessibility and global components.
4. The confirmed case study template decisions remain useful, but they can be adjusted when the real ASH project requires a stronger solution.
5. Other AI generated ASH pages are used only as references for layout ideas, component patterns and visual rhythm. Their rewritten content, changed data and different project facts should not replace the original ASH content.

### 2.3 Keep the case study case-first

The case study should stay focused on the project. HENEX can appear as a lens and as a recipe mapping, but the case page should not explain the full HENEX framework. Recipe tags should connect back to the Philosophy page.

### 2.4 Protect the global site system

The ASH template must reuse the global header and footer structure from the main site. The case study CSS should only style case study content. It should not override global header, navigation, brand, footer or footer grid classes.

## 3. Confirmed Direction

### 3.1 Hero direction

Use a pale ASH theme background with a subtle teal gradient. Do not use a red visual direction. Do not use a hero image as the main visual. The hero should feel clean and consistent with the HENEX site.

Hero content:

1. Tags, UX, Service Design, Course Work.
2. Title, Accessibility Support Hub.
3. Summary, Make court assistance easy to find, understand and intuitive to access for inclusive users.
4. CTA, View Prototype.
5. No project metadata in the hero.
6. No main visual image in the hero for the first review version.

### 3.2 Overview direction

Use pure text first. The overview may later support a right-side image, but the first ASH template review should keep the overview clean and text-led.

The overview text should use the original ASH overview copy, not a rewrite.

### 3.3 Screencast direction

Every UX case study should reserve a screencast area after the overview area. For Phase 1, use a placeholder only.

Recommended Phase 1 pattern:

1. 16:9 video placeholder.
2. Static poster or neutral placeholder surface.
3. Play CTA shown visually but not connected to real media yet.
4. No autoplay.
5. Future MP4 can use native video controls.

### 3.4 HENEX Lens direction

The overview area should include a small HENEX Lens module, but it should not be overloaded with tags.

The early HENEX Lens should explain the relationship between ASH and the HENEX framework in a short paragraph. It can mention the primary recipe, but detailed recipe tags and popover behaviour should be kept near the end of the page.

Primary lens:

1. R15, Clarity & Accessibility Audit.
2. Perception × Empathy × Interface.
3. Relationship focus, accessibility, support pathways and interface clarity.

### 3.5 Project theme colour direction

Each case can have its own theme colour. ASH should use a teal theme. The global design system remains the base system for typography, layout, surfaces, accessibility and global components.

## 4. Template Structure

### 4.1 Hero

Purpose: Establish project identity and entry point.

Content:

1. Tags.
2. Title.
3. One-line summary.
4. Prototype CTA.

Layout:

1. Pale teal gradient background.
2. No main visual image.
3. No metadata.
4. Clean vertical rhythm.

Reusable component:

1. case-hero-light.

### 4.2 Overview

Purpose: Explain the project context, goal and value.

Content:

Use the original ASH overview text.

Layout:

1. Text-led editorial layout.
2. No small image in the first review version.
3. Enough line length control for readability.

Reusable component:

1. case-overview.

### 4.3 Project Facts and Skills

Purpose: Present the project facts and skill evidence without turning the section into a heavy metadata card.

Content:

1. Client.
2. Role.
3. Team.
4. Timeline.
5. Tools.
6. Skills.

Layout:

1. Facts integrated into the section flow.
2. Subtle top rule.
3. Skills placed below facts.
4. Skills use neutral hairline capsules.

Reusable components:

1. project-facts.
2. skill-list.

### 4.4 Screencast Placeholder

Purpose: Reserve a standard UX case study area for future project walkthrough videos.

Content:

1. Placeholder label.
2. Short note that a walkthrough video can be added.
3. Optional future poster image.

Layout:

1. 16:9 media frame.
2. Soft surface.
3. Clear but quiet CTA.

Reusable component:

1. case-screencast.

### 4.5 HENEX Lens

Purpose: Explain how this case connects to HENEX without making the case study a framework page.

Content:

Suggested copy:

Through HENEX, ASH can be read as a clarity and accessibility case. It connects how people perceive support information, how the service recognises access needs, and how the interface turns repeated barriers into clearer pathways.

Primary lens:

1. R15, Clarity & Accessibility Audit.
2. Perception × Empathy × Interface.

Reusable component:

1. case-henex-lens.

### 4.6 Background

Purpose: Explain the NZ Disabilities Strategy, MoJ, court users and ASH context.

Content:

Use the original ASH Background text.

Media:

1. Use background.png or a future hand-drawn PNG.
2. The image should be supporting media, not a full-width hero image.
3. No modal needed unless the image becomes diagram-heavy.

Reusable component:

1. case-text-illustration.

### 4.7 Problem and Solution

Purpose: Present the problem, HMW statement and solution concept.

Content:

1. Original HMW question.
2. Confusion, Fragmentation, Exclusion.
3. Original solution text.
4. One Hub, Scalability, Guidance.

Media:

1. Reserve image slots for problem and solution visuals.
2. The user will insert or confirm images later.

Layout:

1. Large HMW statement.
2. Theme colour emphasis on key phrase.
3. Supporting problem and solution media areas.

Reusable components:

1. case-statement.
2. problem-solution-pair.

### 4.8 Contribution

Purpose: Show the user's role across management and design work.

Content:

Use the original two-hats content.

Layout:

1. Two-column hairline panel.
2. Project Manager.
3. UX Designer and Researcher.
4. No heavy card styling.

Reusable component:

1. role-split.

### 4.9 Design Process and Roadmap

Purpose: Explain the flexible Double Diamond process and the live roadmap.

Content:

Use the original Design Process and Roadmap text.

Media:

1. roadmap.png as a full-width evidence image.
2. This image needs modal enlargement.
3. The modal should support original-resolution viewing and drag movement.
4. If possible in the next implementation phase, add pan and zoom support.

Reusable components:

1. process-band.
2. wide-evidence-image.
3. image-modal-pan.

### 4.10 Impacts

Purpose: Summarise the user's six key roles across the project lifecycle.

Content:

1. Service Blueprint Workshop.
2. Evaluative Workshop.
3. Information Architecture.
4. Usability Test.
5. Field Survey.
6. Prototyping.

Layout:

1. Six-item grid.
2. Light hairline card style.
3. Very subtle hover state.
4. No heavy colour blocks.

Reusable component:

1. impact-grid.

### 4.11 Service Blueprint Workshop

Purpose: Show how the service blueprint revealed internal process relationships.

Content:

Use the original Service Blueprint Workshop text and Influence text.

Media:

1. blueprint.png as a major evidence image.
2. If a workshop photo exists later, include it as a supporting image.
3. Use captions where available.

Layout:

1. Text plus media story.
2. Influence as full-width emphasis band.
3. Blueprint image can use modal enlargement.

Reusable components:

1. case-media-story.
2. influence-band.
3. wide-evidence-image.

### 4.12 Evaluative Workshop

Purpose: Explain the evaluation framework and prioritisation method.

Content:

Use the original Evaluative Workshop text and Influence text.

Media:

1. evaluative-workshop.png.
2. evaluation-pathway.png.
3. Evaluation table or quadrant images when confirmed.

Layout:

1. Intro text.
2. Influence full-width band.
3. Evaluation pathway full-width when the image needs more width.
4. Smaller supporting evidence images in a grid.

Reusable components:

1. evidence-full.
2. evidence-grid.
3. influence-band.

### 4.13 Information Architecture

Purpose: Explain how the new hub connects with existing MoJ pages.

Content:

Use the original IA text, including the bathroom centre analogy and Influence.

Media:

1. ia-concept.png as supporting small image.
2. ia.png as the largest IA image.
3. Include captions if available.
4. Use modal enlargement for ia.png.

Layout:

1. Text and small diagram first.
2. Large full-width IA diagram after the explanation.
3. Influence full-width band.

Reusable components:

1. ia-section.
2. image-caption.
3. wide-evidence-image.

### 4.14 Usability Test

Purpose: Show how mixed-method testing created specific design direction.

Content:

Use original text for Severity Rating and MS Clarity Analysis.

Media:

1. severity-rating-pathway.png.
2. usability-test-table.png.
3. clarity.png.
4. Other testing images if confirmed later.

Layout:

1. Medium image cards.
2. Compact evidence grid.
3. No oversized testing screenshots unless the image needs it.
4. Text should carry the insight, not the image size.

Reusable component:

1. test-evidence-grid.

### 4.15 Final Design

Purpose: Present the final high-fidelity solution and key feature logic.

Content:

Use original text for:

1. Final Design introduction.
2. Always Have a Choice.
3. Search Result Optimisation.
4. Just Enough Information.
5. Intuitive Guide.

Media:

1. final-design.png may be used as the intro outcome image.
2. Feature images should match each subsection.
3. Do not mix incorrect images into the wrong feature.

Layout:

1. Intro with possible full-width outcome image.
2. Alternating feature-story layout.
3. Frequent text and image pairing.
4. Responsive stacking on smaller screens.

Reusable components:

1. feature-story.
2. feature-story-reverse.

### 4.16 Design System

Purpose: Show how ASH became a reusable and accessible visual system.

Content:

Use original Design System text and support future case projects with a flexible structure.

Standard submodules:

1. Brand.
2. Colour.
3. Typography or font, when available.
4. Iconset.
5. Accessibility.
6. Influence.

ASH media:

1. ds-hero.png.
2. ds-color.png.
3. ds-icon.png.
4. ds-accessibility.png.

Layout:

1. Do not mix all images into one grid.
2. Pair each system topic with the relevant text and image.
3. Long images can become full-width evidence moments.
4. Responsive behaviour must keep images readable.

Reusable component:

1. system-module.

### 4.17 Retrospective

Purpose: Close the case with value, learnings and next steps.

Content:

Use original Retrospective content.

Layout:

1. Deep teal or graphite-tint section.
2. Three content groups.
3. Stronger ending rhythm, but more restrained than the original Figma page.

Reusable component:

1. case-retrospective.

### 4.18 HENEX Recipe

Purpose: Show the formal HENEX recipe mapping and links to Philosophy.

Content:

Primary:

1. R15, Clarity & Accessibility Audit.
2. Perception × Empathy × Interface.

Secondary:

1. R14, Accessibility Walkthrough.
2. R06, Inclusive Onboarding Paths.
3. R18, Step by Step Path Design.
4. R05, Belonging Artifacts Walk.

Interaction:

1. Keep recipe IDs visible.
2. Support popovers for recipe explanation.
3. Link recipe IDs back to Philosophy anchors where appropriate.
4. Do not explain the full HENEX framework inside the case study.

Reusable component:

1. case-recipe.

### 4.19 Related Projects

Purpose: Provide a richer next-reading path.

Projects for the first template review:

1. New World Design System.
2. NZ Police Victim Hub.
3. Terminal 2, Guangzhou Baiyun International Airport.
4. Back to Works.

Layout:

1. Image area.
2. Category.
3. Project title.
4. Short description.
5. Optional recipe hint.
6. Light hover state.

Current note:

The related project pages may not exist yet. The first template review can use project image cards and link unavailable projects to Works or use placeholder href values until the real pages exist.

Reusable component:

1. related-project-card.

## 5. Interaction Plan

### 5.1 Image modal

The minimal image modal from the current case study page can remain as a base. It should be upgraded for large diagrams.

Required behaviour:

1. Click large evidence image to open modal.
2. Close with floating close button.
3. Close with Escape.
4. Support original-resolution viewing where possible.
5. Support drag movement for large roadmap, blueprint and IA images.
6. Consider zoom controls or wheel zoom in the implementation phase.

### 5.2 Recipe popover

Recipe IDs near the end of the case should keep popover behaviour. The popover should show recipe name, triad and short explanation. It should avoid heavy framework explanation.

### 5.3 Screencast placeholder

Phase 1 should not include a custom video player. Use a styled placeholder. When media is available, use native video controls.

## 6. CSS Scope Plan

The case study CSS should style only case content.

Do not override:

1. site-header.
2. site-nav.
3. site-brand.
4. site-footer.
5. footer-grid.
6. footer-column.

The case study CSS can define:

1. case theme variables.
2. case section patterns.
3. media patterns.
4. evidence image styles.
5. HENEX lens styles.
6. recipe styles.
7. related project cards.
8. modal styles.

## 7. File Plan

First create a template review page:

1. works/ash-template.html.
2. assets/css/case-study.css.
3. assets/js/case-study.js.

After review and approval, apply the template to the production page:

1. works/accessibility-support-hub.html.
2. assets/css/case-study.css.
3. assets/js/case-study.js.

## 8. Implementation Dependencies

Before code generation, request these files again if they are not available in the active conversation context:

1. index.html.
2. works.html.
3. assets/js/main.js.
4. assets/js/case-study.js.

These files are needed to verify exact header and footer structure, related project image paths, global JavaScript behaviour and reusable case interactions.

If these files are not available at implementation time, use the confirmed header and footer reference and clearly mark any uncertain related project paths.

## 9. Acceptance Criteria

The ASH template review is successful when:

1. The page uses the original ASH text as the main content source.
2. The hero uses a pale ASH theme background with subtle teal gradient and no main visual image.
3. The overview is text-led in the first review version.
4. The project facts and skills are integrated and visually quiet.
5. A screencast placeholder appears after the overview area.
6. The HENEX Lens explains the case to framework relationship without overloading tags.
7. Large diagrams use wide layouts and support modal enlargement.
8. Roadmap, blueprint and IA are treated as high-priority evidence images.
9. Testing evidence uses compact or medium media layouts.
10. Final Design and Design System use frequent image and text pairing.
11. Influence modules are visually emphasised and readable.
12. Recipe mapping appears near the end with R15 as primary and R14, R06, R18 and R05 as secondary.
13. Related projects use richer image cards.
14. The global header and footer are not rewritten or overridden.
15. The page remains responsive and accessible.

## 10. Next Step

The next working step is to generate the ASH template review page after the required source code files are available.

Proposed review file name:

works/ash-template.html

