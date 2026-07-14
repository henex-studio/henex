# UX Case Study Content Mapping Table v1

**Version:** 1.0
**Created:** 2026-07-07
**Owner:** Cafe Yi
**Status:** DRAFT, pending Cafe approval
**Purpose:** Phase 3B deliverable. Maps the current HTML structure of all 8 UX case study pages against the Master Template Spec (`docs/specs/UX_Case_Master_Template_Spec_v1.md`). This table is the execution reference for Phase 4 (VTH v2 build) and Phases 5-7 (retrofits).

**How to read this document:** Each page has a section table showing current content mapped to master template slots, followed by a gap list of required changes. A cross-page summary of universal findings follows the eight page tables.

---

## 0. Universal Findings (apply to all 8 pages)

These are systemic, not page-specific. They must be addressed once at the CSS/component level, not repeated per page.

1. **The 4-tier background system (N/L/P/D) does not exist yet.** Every page currently uses only a single binary modifier, `.ux-section--tint`, alternating with the untinted default. There is no gradient tier, no deep tier, no flat-light tier. This is expected, since the tier system is a Phase 3A output. All 8 pages need their section background classes rebuilt against the new tier tokens.
2. **No page has a "Secondary Recipe" label.** Every Recipe section shows "Primary recipe" plus 4 popover buttons for related recipes, but never labels them "Secondary Recipe" as the spec requires (Section 8.2, rule 3). This is a sitewide fix, 8 pages.
3. **Base class inconsistency.** `.ux-solution` and `.ux-retro` sections omit the shared `.ux-section` base class that every other section uses. This affects spacing and tier inheritance. Found on: VSK, STD, RKT, WST (Solution), and all 8 pages (Retro). Needs a base-class audit during retrofit.
4. **No section carries a semantic `id` attribute in most pages** (anchors rely on `aria-labelledby` pointing to heading ids instead). Minor, but worth standardizing during retrofit for consistent deep-linking.
5. **"Screencast" / "Preview" / "Video" sections are resolved: they fold into Outcome.** Confirmed by Cafe. Every page's walkthrough video (also called Screencast, Video, or Prototype Walkthrough) and every final-effect preview image belongs inside the Outcome section, presented under a single "Outcome" kicker and heading. This is not a separate slot. Applies to VTH, ASH, WST, WSO.
6. **Validation is the most inconsistently handled chapter-2 slot across all 8 pages.** Some have it explicit (VTH, ASH), some have functional-equivalent content mislabeled (VSK "Concept Exploration and Testing", STD "Research Use Case", now confirmed by Cafe as genuine Validation content), and some have none at all (RKT, WSO) or nest it inside Develop (WST). NDS is a special case, see NDS section below: no formal validation exists, resolved as a "live verification" entry point instead of a written section.
7. **"Final Design" sections fold into Delivery.** Confirmed by Cafe. Any standalone scene-by-scene or screen-by-screen walkthrough of the finished product (WST, WSO) is Delivery's closing content, not a separate slot.
8. **"Design System" content folds into Design.** Confirmed by Cafe. Typography, colour, component library and token content (ASH "Design System", NDS Foundations/Components, WST/WSO Develop's DS blocks) belongs inside the Design section. Delivery is reserved for final outcomes only.
9. **"Impact"/"Impacts" disambiguation, confirmed by Cafe.** If it is one consolidated top-level section about the author's role across the whole project (e.g., ASH's "Impacts", which duplicates its Contribution content), merge it into **Contribution**. If it appears as small per-section notes about what a section's findings changed, it belongs in the **Influence Block** pattern instead. Rule: Contribution = impact of the person, Influence = impact of the content.

---

## 1. Victim Hub (VTH)

**Mapping basis changed per Cafe's direction (2026-07-07):** This section now maps from the reference page (`docs/reference/10-Project Summary_R2.html`) as the primary content source, not the current live `victim-hub.html`. Content unique to the current live page that the reference page lacks is merged in afterward. This reverses the original approach, which mapped from the live page.

**Reference page section order:** Overview(01) → Background(02) → Problem(03) → Project Approach and Governance(04) → Research and Evidence(05) → Findings and Design Response(06) → Design Principles(07) → IA and Content Strategy(08) → Prototype and Validation(09) → Final Outcome and Handover(10) → Go-live and BAU Planning(11) → Project Reflection and Next Steps(12) → Glossary.

**Key structural note:** The reference page is a single linear narrative (research-first, outcome-last). The master template asks for a 3-depth disclosure: Chapter 1 gives a quick Background→Problem→Solution→Outcome→Contribution summary before Chapter 2 unpacks the full process. This means some reference content needs to appear twice at different depths, a short teaser version in Chapter 1 and the full version in Chapter 2, rather than a straight 1:1 section copy. The table below marks where this split applies.

**Content re-plan confirmed by Cafe (2026-07-07, second pass):** After reviewing the split-teaser proposal above, Cafe redirected the Background/Problem/Solution/Outcome assignment. The reference page's section-level grouping does not match where the content actually belongs conceptually, three pieces of content needed to move to different slots. This replaces the earlier "teaser + full" split idea for Solution, that content already exists in full in the reference page, it was just filed under the wrong kicker.

| Reference section | Maps to | Chapter | Notes |
|---|---|---|---|
| Overview(01) | Overview+Meta | 0 | Direct copy. |
| Background(02), text + image only | Background | 1 | Keep the section title, lead paragraph, and the `current-site.png` screenshot. **Drop the 3 cards** (Fragmented content, Internal structure, Unclear next steps), these move to Problem. |
| Background(02)'s 3 cards (Fragmented content, Internal structure, Unclear next steps) + live page's HMW statement | **Problem** | 1 | Use the live page's Problem copy (two paragraphs on how the challenge broadened from a page refresh to whether people can understand/recognise/act with confidence) and its HMW blockquote: "How might we redesign the NZ Police victim pages so that someone who may or has experienced a crime can quickly understand where to go, feel that the pages were written for them, and move forward with confidence?" Place the 3 cards from reference's Background section directly below the HMW statement, per the master spec's problem-card layout rule (no extra description needed under HMW). |
| Problem(03)'s content (title "The problem was guidance, resonance and confidence", lead text, 3 cards: Guidance/Resonance/Confidence) | **Solution** | 1 | This is a full re-labelling, not a teaser. The reference page filed this content under "Problem", but it is actually the strategic response, the three shifts (clearer guidance, resonant language, visible confidence-building) the project committed to. Reframe the title as a solution statement (e.g., "A strategy built on guidance, resonance and confidence") and keep the same 3 cards and icons (sign-right/Guidance, message/Resonance, sparkles/Confidence). The reference page's Influence note here ("This reframed the work from a page refresh into an information architecture, language and confidence problem.") should be reworded to describe what the solution direction shaped, rather than kept as a problem-framing statement. |
| Final Outcome and Handover(10), video only | **Outcome** | 1 | Only the walkthrough video belongs in Chapter 1 Outcome. Everything else in this reference section (hi-fi prototype tabs, the 4 handover cards: Hi-fi direction, IA and content model, Handover package, Delivery readiness) moves to Chapter 2 Delivery. |
| Project Approach and Governance(04) + current page's "My Role" | **Contribution** | 1 | Merge target, per Cafe's earlier decision. Combine the reference page's approach/governance narrative (evidence-gathering, IA/content translation, governance, stakeholder alignment, prototype direction, BAU planning) with the current live page's "My Role" 6 cards. Reshape into 1-2 labelled role cards following the ASH pattern, rather than 6 flat cards. |
| Research and Evidence(05) | Research | 2 | Direct copy. Method grid (interviews, usability tests, best-practice analysis, content inventory, data pages, card sorting, scored directions) is strong content, keep as-is. |
| Findings and Design Response(06) | Research | 2 | Direct copy, kept in full here (no longer split as a Chapter 1 teaser, since Solution now has its own dedicated content from the old Problem section, see above). |
| Design Principles(07) | Research | 2 | Fold in as Research's principles output (9 principle cards). This is the "Insights and principles" content the live page also has, reference page's version is fuller and should be the base. |
| IA and Content Strategy(08) | Design | 2 | Direct copy, including the IA diagram SVG. |
| Prototype and Validation(09) | Validation | 2 | Direct copy, kept in full here (no longer used as a Chapter 1 Outcome teaser metric). |
| Final Outcome and Handover(10), hi-fi prototype + 4 cards | **Delivery** | 2 | Hi-fi prototype tabs and the 4 handover cards (Hi-fi direction, IA and content model, Handover package, Delivery readiness) move here, per Cafe's confirmation. The video stays in Chapter 1 Outcome, not duplicated here. |
| Go-live and BAU Planning(11) | Delivery | 2 | Fold in as Delivery's closing content (post-plan gallery, roadmap, timeline scenarios, resource view), joining the hi-fi/handover content above. |
| Project Reflection and Next Steps(12) | Reflection | Ending | Direct copy. Retitle kicker/heading to "Looking back, looking forward" for cross-page consistency. |
| Glossary | Not used on this page | — | Resolved, see below. No glossary section appears on any case study page. |
| (live page only) HENEX Method Recipe (R24) | HENEX Recipe | Ending | Not in reference page (reference page predates the HENEX system). Carry over from live page, add "Secondary Recipe" label; current set R18, R15, R04, R09. |
| (live page only) Related Projects | Related Projects | Ending | Not in reference page. Carry over from live page structure. |

**Feedback section:** Absent in both reference and live pages. VTH is a professional project (not coursework), no course-feedback quotes exist. Recommend omitting Feedback for this page.

**Glossary, resolved:** Confirmed by Cafe, no case study page shows a glossary section. Instead, Cafe wants a sitewide inline term-popover component, click a defined term inline in body text, a small card appears with a plain-English "This means: ..." explanation, similar to the tooltip pattern visible in the reference page's embedded hi-fi prototype screenshot (e.g., "Victim Impact Statement" term with a "This means: a statement that tells the court how the crime affected you..." popover). This is a separate, later initiative, not part of the Phase 3-7 retrofit scope. Logged in the Execution Plan's Post-Convergence Roadmap as a new item, to be scoped after the full site retrofit completes.

---

## 2. Accessibility Support Hub (ASH)

| Current section | Maps to | Tier (current) | Notes |
|---|---|---|---|
| Hero | Hero | — | `ux-hero` (no --cover, only page without it) |
| Overview | Overview+Meta | N (default) | |
| Screencast | Fold into Outcome | L (tint) | Per universal rule 5 |
| Background | Background | N (default) | |
| Problem | Problem | N (default) | HMW framing |
| Solution | Solution | N (default) | `ux-solution`, missing `.ux-section` base |
| Contribution | Contribution | L (tint) | Already matches master slot |
| Design Process | Process | N (default) | Static block, not nav cards yet |
| Impacts | Fold into Contribution | L (tint) | Per universal rule 9: single consolidated role section duplicating Contribution |
| Service Blueprint Workshop | Research | N (default) | |
| Evaluative Workshop | Research/Design boundary | L (tint) | |
| Information Architecture | Design | N (default) | |
| Usability Test | Validation | L (tint) | |
| Final Design | Fold into Delivery | N (default) | Per universal rule 7 |
| Design System | Fold into Design | L (tint) | Per universal rule 8 |
| Retrospective | Reflection | (ux-retro, own class) | |
| HENEX Method Recipe (R15) | HENEX Recipe | N (default) | No Secondary label |
| Related Projects | Related Projects | N (default) | |

**Feedback section:** Absent. ASH has a "Course Work" hero tag but no testimonial content. Recommend checking source material for instructor feedback; if none exists, omit Feedback for this page.

**Contribution:** Already well-formed. Kicker "Contribution", H2 "Wearing two hats across the project lifecycle." Two labelled role cards: Project Manager, UX Designer and Researcher. This is the reference pattern other pages' Contribution sections should follow.

**Structural changes required:**
1. Merge "Impacts" (6 numbered cards) into Contribution, since it duplicates the same role narrative. Removes a redundant top-level section.
2. Convert "Design Process" static block into the spec's 4-card navigation pattern (Research/Design/Validation/Delivery cards linking to sub-sections).
3. Fold "Design System" into Design (not Delivery), per the confirmed universal rule. Delivery keeps only Final Design's finished-outcome content.
4. Add "Secondary Recipe" label; current set R14, R06, R18, R05 becomes secondary list.
5. Standardize `.ux-solution` and `.ux-retro` to include `.ux-section` base class.

---

## 3. New World Design System (NDS)

| Current section | Maps to | Tier (current) | Notes |
|---|---|---|---|
| Hero | Hero | — | `ux-hero--cover system-hero` |
| Overview | Overview+Meta | N (default) | |
| Screencast | Fold into Outcome | L (tint) | Per universal rule 5 |
| Background | **Background (new)** | N (default) | See draft below, source: Cafe's course reflection PDF |
| Problem | Problem | N (default) | `ux-problem system-hmw` |
| Solution | Solution | N (default) | `system-solution` |
| Outcome | Outcome | N (default) | `system-showcase` |
| Course Feedback | Feedback | L (tint) | Present, 3 quotes |
| Design Process | Process | N (default) | Static block, not nav cards |
| System Audit | Research | L (tint) | |
| Principles and Scope | Research | N (default) | Bridges Research/Design, folds into Research per Cafe |
| Token Ready Foundations | Design | L (tint) | Dual red/purple DS color system |
| Core Components | Design | N (default) | |
| Documentation and Variables | Design | L (tint) | Per universal rule 8, DS documentation content stays in Design, not Delivery |
| Validation | **Validation (new, "live verification" format)** | N (default) | See resolution below |
| Retrospective | Reflection | (ux-retro, own class) | |
| HENEX Method Recipe (R17) | HENEX Recipe | N (default) | No Secondary label |
| Related Projects | Related Projects | N (default) | |

**Feedback section:** Present and well-formed. Kicker "Course Feedback", 3 quotes on clarity, foundations, and component complexity. No changes needed beyond tier reassignment.

**Contribution:** Not applicable. NDS is an individual project (Team: "Individual" in meta). Confirmed no Contribution section needed.

**Background section, confirmed draft (source: Cafe's course reflection, `cafe_yi_UXDN423_2_reflection.pdf`):**

> Kicker: Background
> Title: A familiar site, deconstructed for real this time.
> Body: New World's website was already familiar ground, a site visited often enough to notice its quirks. An earlier course assignment only skimmed its surface with an overview analysis. This project went further, pulling the interface apart like a scattered jigsaw puzzle, since no real design system files existed to reference. What emerged was a site caught between two eras, a newer dropdown-driven experience layered awkwardly over older breadcrumb navigation, with typography, colour and component patterns drifting out of sync across desktop and mobile.

**Validation section, confirmed resolution:** No formal validation phase exists for this project, it was self-tested by Cafe for navigation clarity, link behaviour and content readability. Per Cafe's decision, this slot uses a lighter "live verification" format rather than written test results: a short paragraph explaining the self-testing approach, plus a direct embed or link to the working Figma design-system microsite prototype, so visitors can verify usability themselves. Draft copy:

> Kicker: Validation
> Title: See it working, not just read about it.
> Body: Rather than a formal usability study, this design system was validated through direct self-testing: checking that navigation stays clear, links resolve correctly, and content reads well across the microsite's pages. The prototype below is live, open it and judge the system's clarity for yourself.
> [Embed or link: Figma design-system microsite prototype]

**Structural changes required:**
1. Author the Background section above.
2. Author the Validation section above (live verification format), source the Figma prototype link/embed from Cafe.
3. Fold "Principles and Scope" into Research as a bridging sub-block (principles precede foundations/components in a DS workflow, but the research-to-principles pipeline keeps it in Research per spec).
4. Fold "Documentation and Variables" into Design (not Delivery), per the confirmed universal rule.
5. Convert "Design Process" into the 4-card navigation pattern.
6. Add "Secondary Recipe" label; current set R15, R03, R09, R18.
7. Note the dual red/purple color system (`system-swatch--red`/`system-swatch--purple`) inside Foundations is intentional and separate from the page's primary/secondary theme tokens; do not conflate the two systems during retrofit.

---

## 4. Voting Starter Kit (VSK)

| Current section | Maps to | Tier (current) | Notes |
|---|---|---|---|
| Hero | Hero | — | `ux-hero--cover` |
| Overview | Overview+Meta | N (default) | |
| Problem | Problem | N (default) | |
| Solution Strategy | Solution | — | `ux-solution`, missing `.ux-section` base |
| Outcome | Outcome | L (tint) | |
| Course Feedback | Feedback | N (default) | Present, 3 quotes |
| Design Process | Process | L (tint) | Static block, not nav cards |
| Scope and Findings | Research | N (default) | |
| Research Synthesis and Principles | Research/Design boundary | L (tint) | |
| Concept Exploration and Testing | **Validation** | N (default) | Mislabeled; content is genuine usability/concept testing |
| Final Design Decisions | Delivery | L (tint) | |
| Visual System | Design | N (default) | Out of order, appears after Delivery |
| Retrospective | Reflection | (ux-retro, own class) | |
| HENEX Method Recipe (R19) | HENEX Recipe | N (default) | No Secondary label |
| Related Projects | Related Projects | — | Missing `.ux-section` base |

**Feedback section:** Present and well-formed. 3 quotes on rigor, accessibility, and visual storytelling.

**Contribution:** **Confirmed absent.** Only a generic meta line exists (Role: Research and Analysis, UX/UI Design, Usability Testing; Team: 4 UX Designers). No individual-attribution narrative anywhere in the HTML.

**Contribution build plan (from `docs/reference/vsk.pdf`):** Cafe led mixed qualitative and quantitative research planning, framed the problem with data, and delivered test-backed content strategies and prototypes. Team of 4 UX Designers. Build a new Contribution section following ASH's pattern: 1-2 labelled role cards (e.g., "Research and Analysis Lead", "UX/UI Designer") describing the specific contribution, since this is currently unauthored content requiring new copy.

**Structural changes required:**
1. Author new Contribution section per plan above, insert after Feedback and before Process, per master order.
2. Rename "Concept Exploration and Testing" to Validation, or restructure content to sit clearly in the Validation slot (currently reads ambiguous between concept iteration and testing).
3. Move "Visual System" earlier, before Final Design Decisions (Design must precede Delivery in the master order); currently the page has it positioned after Delivery, which reverses the intended reading order.
4. Add `.ux-section` base class to Solution and Related Projects sections.
5. Convert "Design Process" into the 4-card navigation pattern.
6. Add "Secondary Recipe" label; current set R21, R16, R25, R06.

---

## 5. Studier (STD)

| Current section | Maps to | Tier (current) | Notes |
|---|---|---|---|
| Hero | Hero | — | `studier-hero` |
| Overview | Overview+Meta | N (default) | |
| Background | **Background (new)** | N (default) | See draft below, source: Cafe's project context |
| Problem | Problem | N (default) | `ux-problem studier-problem` |
| My Role | Contribution | N (default) | 4 cards, ready-made match |
| Solution | Solution | — | `studier-solution`, missing `.ux-section` base |
| Core Features | Design + Delivery (split) | N (default) | Reads as merged Design+Delivery, needs splitting |
| Product Evolution | Process (supporting content) | L (tint) | Enrich with dev log, see below |
| Research Use Case | **Validation** | N (default) | Confirmed by Cafe: this is Validation content (35 participants, 323 responses, 50.5% success) |
| Impact | Outcome | L (tint) | |
| Retrospective | Reflection | (ux-retro, own class) | |
| HENEX Method Recipe (R27) | HENEX Recipe | N (default) | No Secondary label |
| Related Projects | Related Projects | N (default) | |

**Feedback section:** Absent. STD is a self-initiated project with no course or instructor context, so no feedback quotes exist. Recommend omitting Feedback for this page, consistent with VTH.

**Contribution:** Already well-formed. Kicker "My Role", H2 "I owned the tool, the test workflow and the analysis." 4 cards: Product ownership, AI-assisted build, Research operations, Data analysis. Matches the Contribution slot directly, no new content needed, only relabeling from "My Role" to "Contribution" kicker for cross-page consistency (or keep "My Role" as page-level flavor text within the Contribution slot, per Cafe's preference).

**Background section, confirmed draft (source: Cafe's project context):**

> Kicker: Background
> Title: A project needed tree testing, and no ready tool could be trusted with it.
> Body: A research project called for structured tree testing, but the available third-party tools raised concerns around data privacy and security, and none could be adapted quickly enough for the timeline. With limited time and a real need for control over participant data, Studier was built from scratch as a working internal platform rather than a one-off prototype.

**Product Evolution enrichment (source: `docs/reference/Studier_development_log.md`):** The dev log records versions v1.00 through v3.07, showing continuous iteration driven by real usage. Notable feedback-driven changes to fold into this content: v3.01-v3.03 added task progress navigation, locked review mode and automatic tree expansion on review, refinements made after observing participant behaviour. v3.05 added data cleaning workflows to handle duplicate responses, directly motivated by real response data quality issues. v3.06 added "clear and republish" so the same test could be reused for another round. This gives Product Evolution (or the enriched Validation content) a genuine iteration narrative rather than a static timeline.

**Structural changes required:**
1. Author the Background section above, insert between Overview and Problem.
2. Split "Core Features" into proper Design (feature specification) and Delivery (final feature set) content, since it currently merges both without clear boundaries.
3. Enrich "Product Evolution" with the dev-log iteration story above, keep as Process supporting content (not a separate slot).
4. Relabel "Research Use Case" as Validation, confirmed by Cafe as validation content.
5. Add "Secondary Recipe" label; current set R18, R15, R24, R21.
6. Add `.ux-section` base class to Solution and Retrospective.

---

## 6. ReKraft (RKT)

| Current section | Maps to | Tier (current) | Notes |
|---|---|---|---|
| Hero | Hero | — | `ux-hero--cover rkt-hero` |
| Overview | Overview+Meta | N (default) | |
| Problem | Problem | N (default) | |
| Concept | Background | L (tint) | Best-fit, correctly positioned |
| Solution | Solution | — | `ux-solution`, missing `.ux-section` base |
| Outcome | Outcome | L (tint) | |
| Course Feedback | Feedback | N (default) | Present, 2 quotes |
| Design Process | Process | L (tint) | **Adjacent-tint violation** (see below) |
| Discover | Research | L (tint) | **Adjacent-tint violation** (see below) |
| Define | Design | N (default) | Persona, scoping, principles |
| Develop | Design/Validation boundary | L (tint) | Prototyping stages + testing "Influence" note |
| Design System | Fold into Design | N (default) | Per universal rule 8 |
| Final Design | Delivery | N (default) | |
| Retrospective | Reflection | (ux-retro, own class) | |
| HENEX Method Recipe (R07) | HENEX Recipe | N (default) | No Secondary label |
| Related Projects | Related Projects | N (default) | |

**Tier defect found:** "Design Process" and "Discover" are two consecutive `.ux-section--tint` sections, directly violating the adjacent-tier rule. This must be corrected during retrofit, insert a neutral section between them or change one to a different tier.

**Feedback section:** Present and well-formed. Kicker "Course Feedback", intro on cultural depth and research breadth, 2 quotes on Kaitiakitanga integration and research quality.

**Contribution:** **Confirmed absent.** Only a generic meta line exists (Role: Project Management, UX Research, UX/UI Design, Usability Testing; Team: 4 UX Designers).

**Contribution build plan (from `docs/reference/rkt.pdf`):** Cafe served as PM and UX Designer, led the research and design framework, defined the information architecture and user flows, produced lo-to-hi-fidelity prototypes and brand/visual assets, and validated the "share-trade-learn" pathway. Team of 4 UX Designers. Build a new Contribution section: recommend two labelled role cards, "Project Management" (schedule, framework, team coordination) and "UX Research and Design" (IA, user flows, prototypes, brand assets), following the ASH two-hats pattern. Insert after Course Feedback and before Design Process, per master order.

**Structural changes required:**
1. Author new Contribution section per plan above.
2. Fix the adjacent-tint violation between Design Process and Discover, insert a neutral (N) section between them, or reassign one to a different tier per the new 4-tier system.
3. **No dedicated Validation section**, despite usability testing being referenced in the Overview meta role field and in Retrospective ("Five usability participants is not enough..."). Recommend extracting this into a proper Validation section rather than leaving it implicit in Develop and Retrospective.
4. Add "Secondary Recipe" label; current set R25, R26, R22, R24.
5. Add `.ux-section` base class to Solution and Retrospective.

---

## 7. Welnest (WST)

| Current section | Maps to | Tier (current) | Notes |
|---|---|---|---|
| Hero | Hero | — | `ux-hero--cover` |
| Overview | Overview+Meta | N (default) | |
| Preview | Fold into Outcome | L (tint) | Per universal rule 5, final-effect image belongs in Outcome |
| Background | **Background (new)** | N (default) | See draft below, confirmed by Cafe, no changes requested |
| Problem | Problem | N (default) | |
| Solution | Solution | — | `ux-solution`, missing `.ux-section` base |
| Outcome | Outcome | N (default) | Absorbs "Preview" content |
| Course Feedback | Feedback | L (tint) | Present, 3 quotes |
| Design Process | Process | N (default) | Static mini-cards, not full nav cards |
| Discover | Research | L (tint) | Includes findings grid |
| Define | Design | N (default) | 6 principle cards |
| Develop | Design + Validation combined | L (tint) | Includes nested usability testing sub-block (6 test cards) |
| Design System (Deliver) | Fold into Design | N (default) | Per universal rule 8, typography/colour/brand content stays in Design |
| Final Design | Fold into Delivery | L (tint) | Per universal rule 7, Comparison View, Contact and Inspection |
| Retrospective | Reflection | (ux-retro, own class) | |
| HENEX Method Recipe (**R06, changed**) | HENEX Recipe | N (default) | Recipe ID changed, see resolution below |
| Related Projects | Related Projects | N (default) | |

**Feedback section:** Present and well-formed. 3 quotes on plain-language reframing, iterative testing rigor, and comparison feature value.

**Contribution:** Not applicable. WST is an individual project (Team: "Individual" in meta). Confirmed no Contribution section needed.

**Background section, confirmed draft (no changes requested by Cafe):**

> Kicker: Background
> Title: Renting in a new country starts with a trust problem, not a search problem.
> Body: Newcomer families arriving in Wellington face a housing market shaped by unfamiliar policies, inconsistent listing quality, and processes that assume local knowledge. Existing rental platforms and guidance resources are fragmented across government sites, agent listings and word-of-mouth advice, leaving little support for someone navigating all of it for the first time.

**Recipe ID conflict, resolved:** Confirmed via `docs/content/2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.md` (Project_Recipe_Map sheet): R24 was assigned Primary to both P01 (VTH) and P08 (Welnest), a genuine conflict in the source mapping document, not a website build error. Welnest's Primary recipe changes to **R06 · Inclusive Onboarding Paths** (Identity × Empathy × Interface): "Design onboarding and flows that adapt to language, ability, and cultural context to reduce exclusion." This fits Welnest's newcomer-focused positioning better than R24, which is oriented toward marketplace/exchange trust rather than onboarding guidance. R06 was already in Welnest's own secondary list, so it moves up to Primary. New secondary set: R24 (trust mechanisms demoted to secondary, still relevant), R18, R21, R12. This change also needs to be applied to `docs/content/2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.md`.

**Structural changes required:**
1. Author the Background section above, insert between Preview/Overview and Problem.
2. Extract the nested usability-testing sub-block from Develop into a standalone Validation section, since it currently has real content (6 test cards) but no top-level slot.
3. Fold "Final Design" into Delivery as a closing sub-block, and "Design System (Deliver)" into Design, per the confirmed universal rules (these two previously shared one Delivery-only assumption, now split correctly).
4. Apply the Recipe ID change above (R24 → R06 Primary, updated secondary set).
5. Add "Secondary Recipe" label with the new secondary set: R24, R18, R21, R12.
6. Add `.ux-section` base class to Solution.
7. Fold "Preview" into Outcome, removing it as a standalone section.

---

## 8. Who's Singing OuTūīside (WSO)

| Current section | Maps to | Tier (current) | Notes |
|---|---|---|---|
| Hero | Hero | — | `wso-hero`. Anomalous h1 id `wso-hero-title` (should be `case-title`) |
| Overview | Overview+Meta | N (default) | |
| Video placeholder | Fold into Outcome | L (tint) | Per universal rule 5 |
| Problem | Problem | N (default) | |
| Solution | Solution | N (default) | `wso-solution-section`, has `.ux-section` base (unlike other pages) |
| Outcome | Outcome | L (tint) | Absorbs "Video placeholder" content |
| Course Feedback | Feedback | N (default) | Present, 3 quotes. Note: untinted, breaks parity with WST's tinted Feedback |
| Design Process | Process | L (tint) | |
| Discover | Research | N (default) | Includes embedded `<h3>Background</h3>` sub-heading, personal/biographical copy |
| Define | Design/Validation boundary | L (tint) | Ideation, lo-fi prototypes; comparative usability test only mentioned in copy |
| Develop | Design (Delivery-adjacent) | N (default) | Typography, color, iconography, illustration, interaction, accessibility |
| Final Design | Fold into Delivery | L (tint) | Per universal rule 7, scene walkthrough |
| Retrospective | Reflection | (ux-retro, own class) | Kicker/title already reads "Looking back, looking forward" |
| HENEX Method Recipe (R16) | HENEX Recipe | N (default) | No Secondary label |
| Related Projects | Related Projects | N (default) | |

**Feedback section:** Present and well-formed. 3 quotes on immersion, scope, and iterative research depth.

**Contribution:** Not applicable. WSO is an individual project (Team: "Individual" in meta). Confirmed no Contribution section needed.

**Structural changes required:**
1. **No standalone top-level Background section.** Content exists as a nested `<h3>Background</h3>` inside Discover, containing personal/biographical narrative. Recommend promoting this to a proper top-level Background section per the master template, since the content already exists and just needs restructuring, not new authoring.
2. **No dedicated Validation section.** The comparative usability test is only mentioned in Define's copy, not represented as its own content block. Recommend extracting into a proper Validation section, consistent with the fix recommended for WST.
3. Fix anomalous h1 id `wso-hero-title` to standard `case-title` for consistency with the other 7 pages.
4. Remove leftover developer comments in markup (`<!-- Fix 1 -->` through `<!-- Fix 11 -->`, some referencing "VSK" as a copy source), these are draft artifacts that should not remain in production HTML.
5. Fold "Final Design" into Delivery, per the confirmed universal rule.
6. Reassign Feedback's tier to match the sitewide pattern established after tier system finalization (currently untinted here, tinted in WST, inconsistent).
7. Add "Secondary Recipe" label; current set R10, R13, R12.
8. Remove duplicate `id="final-design"` alongside `aria-labelledby="final-title"` on the Final Design section.

---

## 9. Summary Table: Contribution and Feedback Coverage

| Project | Contribution | Feedback | Notes |
|---------|--------------|----------|-------|
| VTH | Exists as "My Role", needs merge/reshape | Absent (professional project) | Merge My Role + governance narrative into Contribution |
| ASH | Exists, well-formed | Absent | Reference pattern for other Contribution sections |
| NDS | N/A (individual) | Present, well-formed | No action needed on either |
| VSK | **Missing, needs authoring from PDF** | Present, well-formed | Contribution build plan documented above |
| STD | Exists as "My Role", well-formed | Absent (self-initiated project) | Minor relabeling only |
| RKT | **Missing, needs authoring from PDF** | Present, well-formed | Contribution build plan documented above |
| WST | N/A (individual) | Present, well-formed | No action needed on either |
| WSO | N/A (individual) | Present, well-formed | No action needed on either |

## 10. Summary Table: Validation Section Status

| Project | Current status | Action needed |
|---------|----------------|----------------|
| VTH | Explicit ("Prototype and validation") | None, already matches slot |
| ASH | Explicit ("Usability Test") | None, already matches slot |
| NDS | Confirmed no formal validation | Resolved: "live verification" format with self-test copy + Figma prototype embed/link |
| VSK | Mislabeled ("Concept Exploration and Testing") | Rename/restructure to Validation |
| STD | Mislabeled ("Research Use Case") | Confirmed by Cafe as Validation content, relabel |
| RKT | Implicit only (mentioned in meta/Retrospective) | Extract into standalone Validation section |
| WST | Nested inside Develop | Extract into standalone Validation section |
| WSO | Implicit only (mentioned in Define copy) | Extract into standalone Validation section |

---

## 11. Open Items for Cafe

All items from the original v1 open-items list are now resolved as of 2026-07-07:

1. ~~NDS Validation gap~~ — Resolved: no formal validation, self-test with live Figma prototype entry point.
2. ~~WST/VTH Recipe ID conflict~~ — Resolved: Welnest's Primary recipe changes to R06 (Inclusive Onboarding Paths).
3. ~~Background section gaps~~ — Resolved: drafts confirmed for NDS, STD, WST. WSO's existing nested background content will be promoted to a top-level section (no new drafting needed).
4. ~~RKT/VSK Contribution copy~~ — Confirmed, proceed with drafted role cards.
5. ~~STD Product Evolution enrichment~~ — Resolved using `Studier_development_log.md`.
6. ~~Extra sections fold-in~~ — Resolved: Screencast/Video/Prototype Walkthrough/Preview all fold into Outcome under a unified "Outcome" heading. Final Design folds into Delivery. Design System/DS content folds into Design. Impacts: consolidated role-section Impacts fold into Contribution; per-section impact notes fold into the Influence block pattern.

7. ~~VTH Glossary placement~~ — Resolved (2026-07-07, second pass): no glossary section appears on any case study page, including VTH. Cafe instead wants a sitewide inline term-popover component, logged as a new Post-Convergence Roadmap item (`docs/HENEX_Project_Execution_Plan.md` Section 3.6), scoped for after the full retrofit completes, not part of Phase 3-7.
8. ~~VTH Background/Problem/Solution/Outcome content assignment~~ — Resolved (2026-07-07, second pass): Cafe reassigned content across these four sections after reviewing the first-pass split proposal, see Section 1's "Content re-plan confirmed by Cafe" note above. Background keeps text+image only, Problem gains the HMW statement plus the 3 cards previously filed under Background, Solution gains the "Guidance/Resonance/Confidence" content previously filed under Problem, and Outcome is trimmed to the walkthrough video only, with hi-fi prototype and handover cards moving to Delivery.

**No open items remain.** Phase 3B is fully resolved, ready for Phase 4 to begin once Cafe gives final sign-off on this document.
