# VTH Content Mapping — IA v4 Framework

> Phase 3 deliverable. Maps all Victim Hub content to the IA v4 framework defined in HENEX_IA_Content_Workbook_v2.md. Sources: current `victim-hub.html` (GitHub main) and reference page `10-Project introduction_portfolio-case-study_refined_visualfix_no-glow.html`.

---

## 0. VTH-Specific Decisions

| Decision | Value | Tag |
|----------|-------|-----|
| Theme primary | `#00164B` (navy) | `[VTH-SPECIFIC]` |
| Theme secondary | `#B30D0D` (red) | `[VTH-SPECIFIC]` |
| Hero variant | Dark gradient (radial highlight + linear navy-to-blue) | `[DS-LEVEL]` D07 |
| Background section | Included (Police programme context) | `[VTH-SPECIFIC]` |
| Contribution section | Included (team project: Principal Advisor + 1 Advisor) | `[VTH-SPECIFIC]` |
| Feedback section | Deferred — see Open Question Q3 | `[VTH-SPECIFIC]` |
| Validation section | Included (has usability testing data) | `[VTH-SPECIFIC]` |
| Prototype embed | Figma embed in Delivery section | `[VTH-SPECIFIC]` |
| Icons | Tabler SVG per-icon, project set in `assets/icons/vth/` | `[DS-LEVEL]` D10 |
| Glossary | Not included in IA v4 framework. Drop from VTH v2. | `[VTH-SPECIFIC]` |

---

## 1. Section-by-Section Mapping

### Section 0 — Hero (Layer 1, Required)

**IA v4 purpose:** First impression. Title, tags, one-line summary, CTA.

| Field | Value |
|-------|-------|
| Content source | Current page hero, refined |
| Layout | Hero (dark gradient variant) |
| Cards | None |
| Read More | No |

**Tags:** Public Sector Advisory · Service Design · Content Strategy · Professional Work

**Title:** Victims Hub

**Summary:** Evidence-led service improvement for a victim-centred public sector digital touchpoint.

**CTAs:**
- Primary: "View Screencast" → scrolls to Outcome section video
- Secondary: "Back to Works" → ../works.html

**Media:** None (dark gradient background only, no hero image).

**Text status:** Reuse. No changes needed.

**Notes:**
- `[DS-LEVEL]` Hero uses the unified dark gradient variant per D07.
- `[VTH-SPECIFIC]` The gradient uses VTH navy/blue colours.
- Reference page hero has a larger min-height (86vh) and richer gradient with radial highlights. Adopt the reference page gradient treatment for more visual presence.

---

### Section 1 — Overview + Meta (Layer 1, Required)

**IA v4 purpose:** High-level summary. What was done, for whom, what was produced.

| Field | Value |
|-------|-------|
| Content source | Current page Overview section + reference page meta cards |
| Layout | L2 (Aside + Content) |
| Cards | C1 Standard (meta block) |
| Read More | No |

**Aside kicker:** Overview

**Aside title:** A clearer first point of contact for victim information.

**Body text:** Reuse current page Overview copy (two paragraphs about the project sitting within the Justice Sector Victims Work Programme, and the Principal Advisor role). No rewrite needed.

**Meta block (current page format):**

| Label | Value |
|-------|-------|
| Client | NZ Police, Justice Sector Victims Work Programme |
| Role | Principal Advisor, Service Design Lead |
| Team | Principal Advisor and 1 Advisor |
| Timeline | March to June 2026 |
| Tools | Figma, FigJam, Excel, Studier |
| HENEX Lens | R24 · Trust & Cooperation Rules — Agency × Empathy × Interface |

**Skills block:** Public sector advisory · Project management · Stakeholder alignment · Evidence strategy · Service design · Information architecture · Content strategy · Usability testing · Delivery planning · Handover planning

**Alternative meta format (reference page):** The reference page uses a 4-card meta row (Project context, Focus, Outputs, Stage) instead of the label/value pairs. This is a visual style choice, not an IA change.

**Decision:** Keep current label/value list per Q1.

---

### Section 2 — Background (Layer 2, Optional — Included)

**IA v4 purpose:** Higher-level context. Only when the project sits inside a larger programme.

| Field | Value |
|-------|-------|
| Content source | Current page Background section |
| Layout | L2 (Aside + Content) |
| Cards | C1 Standard × 3 |
| Read More | No |

**Aside kicker:** Background

**Aside title:** Useful information existed, but the journey was fragmented.

**Body text:** Reuse current page copy (two paragraphs). No rewrite needed.

**Cards (3, reuse):**
1. Fragmented content — Victim information was spread across pages, FAQs and support references.
2. Internal structure — Content often reflected organisational categories rather than how people search for help.
3. Unclear next steps — People needed clearer paths for reporting, support, safety and what happens next.

**Media:** None.

**Text status:** Reuse.

---

### Section 3 — Problem (Layer 2, Required)

**IA v4 purpose:** Core problem definition. Includes HMW statement.

| Field | Value |
|-------|-------|
| Content source | Current page Problem section |
| Layout | L1 (Section Header + Content) for kicker/title, then L4 (Card Grid, 3-col) |
| Cards | C1 Icon variant × 3 (guidance, resonance, confidence) |
| Read More | No |

**Kicker:** Problem

**Title:** The core challenge was guidance, resonance and confidence.

**Body text:** Reuse current page copy (two paragraphs about reframing from visual refresh to structural challenge).

**Cards (3):**
1. Icon: Guidance — Help people recognise the right path and next step.
2. Icon: Resonance — Use language and labels that match how people describe their needs.
3. Icon: Confidence — Set honest expectations and make support pathways visible.

**Visual change:** Current page uses raster images (`problem-guidance.png`, etc.). Reference page uses Tabler icon cards. Adopt Tabler icons per D10.

| Card | Tabler icon |
|------|-------------|
| Guidance | `ti-sign-right` |
| Resonance | `ti-message-check` |
| Confidence | `ti-shield-check` |

**HMW statement:** Reuse current blockquote. No changes.

**Influence block:** Reuse current text.

**`[DS-LEVEL]`** Problem cards use C1 Icon variant with standard card styling.
**`[VTH-SPECIFIC]`** Icon choices are project-specific.

---

### Section 4 — Solution (Layer 2, Required — NEW)

**IA v4 purpose:** Strategic direction or concept choice. Abstract and methodological.

| Field | Value |
|-------|-------|
| Content source | New section. Content drawn from current IA & Content Strategy section (pathway model) and current My Role section (governance framing). |
| Layout | L2 (Aside + Content) |
| Cards | C1 Icon variant × 3 (pathway pillars) |
| Read More | No |

**Aside kicker:** Solution

**Aside title:** A victim pathway model with governance-ready delivery.

**Body text (write new):**
The solution combined two directions. First, restructure information around what victims need to do rather than how Police services are organised. Second, treat the project as both a design challenge and a governance challenge, connecting evidence to decisions with clear review pathways.

The pathway model organised content around three victim-centred groups. This gave the project a structure that could support immediate user needs and future content maintenance.

**Cards (3, drawn from current IA section journey cards):**
1. Icon `ti-help-circle`: Understand — Information for victims.
2. Icon `ti-send`: Act — Report a crime. Support for victims.
3. Icon `ti-shield-check`: Stay informed and safe — What happens next. Keeping safe. Give feedback.

**Influence block (write new):**
The pathway model gave the team a shared structure for IA decisions, content scope and prototype direction. It also made future content maintenance more predictable.

**Notes:**
- This section absorbs the strategic content that currently sits in the IA & Content Strategy section (the "understand/act/stay informed" model).
- The detailed IA work (diagram, content patterns) moves to Design in Layer 3.
- `[VTH-SPECIFIC]` The three pathway groups are project-specific content.

---

### Section 5 — Outcome (Layer 2, Required)

**IA v4 purpose:** Core result. What was produced and its value. Video, prototype embed, key screenshots.

| Field | Value |
|-------|-------|
| Content source | Current page Screencast section + current Prototype and Validation section (metrics only) + current Final Design section (headline deliverables) |
| Layout | L1 (Section Header + Content), then L3 (Content + Media) for video |
| Cards | C1 Standard × 3 (key deliverables) |
| Read More | No |

**Kicker:** Outcome

**Title:** A tested hub direction with reusable patterns and a delivery pathway.

**Body text (edit from current):**
The outcome was a tested hub direction, a reusable page pattern and a handover pathway for future implementation. Testing showed the redesigned structure was easier to use across matched tasks compared with the baseline.

**Video embed:** Reuse current VTH screencast video (R2 URL: `projects/vth/vth.mp4`). Place prominently.

**Testing metrics (3, reuse from current Prototype and Validation):**

| Metric | Value | Change |
|--------|-------|--------|
| Success rate | 88.9% | ↗ From 66.7% |
| Ease score | 4.17/5 | ↗ +56.3% from 2.67/5 |
| Median task time | 82s | ↘ -41.4% from 140s |

**Deliverable cards (3, condensed from current Final Design):**
1. Hub direction — Tested structure for the victim information entry page.
2. Reusable page pattern — Information page template for supporting content.
3. Handover package — Evidence base, content model, go-live planning.

**Media:** Video player + optional deliverable images (handover-package.png, handover-content-inventory.png, handover-template.png).

**`[VTH-SPECIFIC]`** Outcome section uses a dark navy background treatment (per reference page #outcome styling). This is a VTH visual choice, not a DS rule.

**Decision:** Use dark navy background per Q2. `[VTH-SPECIFIC]`

---

### Section 6 — Contribution (Layer 2, Optional — Included)

**IA v4 purpose:** Role in a team project. What the author specifically owned or led.

| Field | Value |
|-------|-------|
| Content source | Current page My Role section, renamed |
| Layout | L2 (Aside + Content) |
| Cards | C1 Standard × 6 |
| Read More | No |

**Aside kicker:** Contribution

**Aside title:** Leading research, IA, content strategy and governance.

**Body text:** Reuse current page copy (three paragraphs). No rewrite needed.

**Cards (6, reuse):**
1. Research and evidence — Plan, connect and synthesise evidence across methods.
2. IA and content — Translate insights into page structures, content hierarchy and reusable patterns.
3. Governance — Support review cycles, decision pathways and formal handover readiness.
4. Stakeholder alignment — Work across business, communications, web and programme governance needs.
5. Prototype direction — Use the prototype as a shared artefact for testing and review.
6. BAU planning — Prepare the path from prototype completion to build, launch and operation.

**Influence block:** Reuse current text.

**Text status:** Reuse. Only rename section kicker from "My role" to "Contribution" per D4 and F9.

---

### Section 7 — Feedback (Layer 2, Optional — TBD)

**IA v4 purpose:** External validation. Stakeholder quotes, user testimonials.

| Field | Value |
|-------|-------|
| Content source | None currently available |
| Layout | L2 (Aside + Content) or L1 |
| Cards | C3 Quote Card |
| Read More | No |

**Status:** VTH is a professional project. Current page has no feedback section. The IA v4 framework marks this as optional. F8 from the audit notes that professional projects could include stakeholder feedback.

**Decision:** Omitted per Q3.

---

### Layer 2 → Layer 3 Visual Transition

**IA v4 decision D2:** Layer 2 ends with a visual transition into Layer 3. The specific treatment is deferred to per-project implementation.

**Recommendation:** Use a subtle background colour shift (e.g., from `--surface` to `--blue-tint` or a gentle gradient) to signal the transition from story to process.

`[VTH-SPECIFIC]` The exact transition colour is a per-project choice.

---

### Process Intro (Layer 3 Opening)

**IA v4 decision D3:** Layer 3 opens with a lightweight card group summarising process contents, plus a title and short paragraph.

| Field | Value |
|-------|-------|
| Content source | New |
| Layout | L1 (Section Header + Content), then L4 (Card Grid, 4-col) |
| Cards | C4 Category Nav variant × 4 |
| Read More | No |

**Title:** How the work developed.

**Body text (write new):**
The project moved through research, design, validation and delivery. Each phase built on evidence from the previous one.

**Nav cards (4):**
1. Research → anchor to Section 8
2. Design → anchor to Section 9
3. Validation → anchor to Section 10
4. Delivery → anchor to Section 11

---

### Section 8 — Research (Layer 3, Required)

**IA v4 purpose:** Investigation and evidence gathering. Methods, findings, insights, principles.

| Field | Value |
|-------|-------|
| Content source | Current Research and Evidence section + current Insights and Principles section |
| Layout | L2 (Aside + Content) |
| Cards | C1 Numbered × 7 (methods) + C1 Icon × 3 (design lenses) |
| Read More | Yes |

**Aside kicker:** Research

**Aside title:** The redesign was grounded in mixed evidence.

**Default visible content:**
- Summary paragraph (reuse from current Research section, first paragraph).
- 7 method cards (current page uses images, reference page uses numbered method cards). Decision: use C1 Numbered variant with method count and name.

| # | Method | Source |
|---|--------|--------|
| 01 | Interviews | Current page |
| 02 | Baseline usability testing | Current page |
| 03 | Best practice review | Current page |
| 04 | Content inventory | Current page |
| 05 | Web data analysis | Current page |
| 06 | Card sorting | Current page |
| 07 | Evaluative workshops | Current page |

- Influence block (reuse from current Research section).

**Read More content:**
- Design lenses: Structure, Tone, Behaviour (3 cards, from current Insights and Principles).
- Nine principles (image grid, from current page). Keep as image evidence.
- Influence block from current Insights section.

**Media:**
- Method images: Current page has 7 R2 images (`research-interviews.png`, etc.). The reference page uses no images for methods. Decision: retain R2 images as supporting evidence alongside the numbered cards.
- Principle images: 9 R2 images. Keep in Read More.

**`[DS-LEVEL]`** Method cards use C1 Numbered variant.
**`[VTH-SPECIFIC]`** The 7 methods and 9 principles are project content.

---

### Section 9 — Design (Layer 3, Required)

**IA v4 purpose:** Design decisions and system creation. IA, interaction, visual design. Subsumes DS documentation.

| Field | Value |
|-------|-------|
| Content source | Current IA and Content Strategy section (detailed IA) + current Key Decisions section |
| Layout | L2 (Aside + Content) |
| Cards | C1 Standard × 6 (decisions) |
| Read More | Yes |

**Aside kicker:** Design

**Aside title:** The IA shifted from organisational categories to victim pathways.

**Default visible content:**
- Summary paragraph about the IA restructuring (reuse from current IA section, adapted — the pathway model overview moves to Solution, the detailed IA work stays here).
- IA structure image (reuse `ia-structure.png`) or SVG diagram from reference page.
- Influence block.

**Read More content:**
- Key decisions and trade-offs (6 cards, reuse from current page):
  1. Treat the work as structure change, not visual refresh.
  2. Organise around victim tasks.
  3. Define Police boundaries clearly.
  4. Use the prototype as an alignment tool.
  5. Do not lock build too early.
  6. Plan for operation, not only launch.
- Content strategy details (reuse paragraphs from current IA section about page shapes, plain language, reusable patterns).

**Media:** IA structure image or inline SVG diagram.

**`[VTH-SPECIFIC]`** IA diagram and decisions are project content.
**`[DS-LEVEL]`** IA diagram styling uses shared `.ia-diagram-wrap` component.

---

### Section 10 — Validation (Layer 3, Optional — Included)

**IA v4 purpose:** Testing and iteration. Usability testing, metrics.

| Field | Value |
|-------|-------|
| Content source | Current Prototype and Validation section (detailed testing) |
| Layout | L2 (Aside + Content) |
| Cards | C1 Standard (metrics) |
| Read More | Yes |

**Aside kicker:** Validation

**Aside title:** The prototype made structure visible before build.

**Default visible content:**
- Summary paragraph about the prototype as a testing tool (reuse from current page, first two paragraphs).
- Process chips: Research findings → IA draft → Low-fi prototype → Testing and review → Hi-fi direction → Handover package.
- Low-fi prototype image (`lofi-hub.png`).

**Read More content:**
- Detailed testing methodology and results.
- Ease score comparison image (`ease-score.png`).
- Metrics repeated with more context (these also appear in Outcome as headline numbers, here they appear with methodology context).

**Media:** Low-fi prototype image, ease score comparison image.

**Notes:** The headline metrics (success rate, ease, task time) appear in Outcome (Layer 2) for impact. The detailed testing narrative, methodology and comparison images appear here for depth.

---

### Section 11 — Delivery (Layer 3, Required)

**IA v4 purpose:** Final deliverables in detail. Complements Outcome with the full picture.

| Field | Value |
|-------|-------|
| Content source | Current Final Design section + current Go-live and BAU Planning section |
| Layout | L2 (Aside + Content) |
| Cards | C1 Standard × 5 (BAU cards) |
| Read More | Yes |

**Aside kicker:** Delivery

**Aside title:** The outcome was a review-ready hub package and high-fidelity direction.

**Default visible content:**
- Summary paragraph (reuse from current Final Design, first paragraph).
- Handover deliverable images (3 images: `handover-package.png`, `handover-content-inventory.png`, `handover-template.png`).
- Scrollable hi-fi preview (`info-page.png`), or Figma prototype embed if available.

**Read More content:**
- Go-live pathway map image (`go-live-map.png`).
- Go-live cards (2): Complete the full hub package, Prepare for go-live.
- Post-launch cards (3): Hypercare, Stabilisation, BAU rhythm.
- Influence block from current Go-live section.

**Media:** Handover images, scrollable hi-fi preview, go-live map.

**Hi-fi embed:** VTH hi-fi HTML page at `assets/prototype/vth-hifi.html`, embedded via iframe using the `hifi-shell` component (header + tabs + iframe container). Per Q4.

---

### Section 12 — Reflection (Ending, Required)

**IA v4 purpose:** What was learned. Value, limitation, next steps.

| Field | Value |
|-------|-------|
| Content source | Current page Reflection section |
| Layout | L1 (Section Header + Content) |
| Cards | C1 Standard × 3 |
| Read More | No |

**Kicker:** Reflection

**Title:** Governance is part of UX in government services.

**Body text:** Reuse current lead paragraph.

**Cards (3, Value / Learned / Next — `[DS-LEVEL]` unified labels):**
1. **Value** — Connecting research to governance decisions helped the team move beyond assumptions. Decision rules and review pathways made sensitive content easier to progress. (Absorbs current Evidence + Governance cards.)
2. **Learned** — Testing depth was constrained by the project timeline. Further validation rounds and tone testing with real users would have strengthened the case for build. (New, from reference page Further validation + Tone refinement.)
3. **Next** — The hub needs delivery confirmation, sustainable ownership and a BAU rhythm to move from prototype to durable service. (Absorbs current Sustainability card + reference page Delivery visibility + Sustainable operation.)

**Text status:** Cards rewritten to fit Value / Learned / Next structure. Lead paragraph reused.

---

### Section 13 — Recipe (Ending, Required)

**IA v4 purpose:** HENEX Method Recipe connection.

| Field | Value |
|-------|-------|
| Content source | Current page Recipe section |
| Layout | L2 (Aside + Content) |
| Cards | None (recipe popovers are inline) |
| Read More | No |

**Aside kicker:** HENEX Method Recipe

**Aside title:** R24 explains how the Victims Hub turns trust, cooperation and safe action into service structure.

**Primary recipe:** R24 · Trust & Cooperation Rules — Agency × Empathy × Interface

**Body text:** Reuse current page copy.

**Recipe tags:** Agency · Empathy · Interface

**Secondary recipes (popovers):** R18, R15, R04, R09. Reuse current data attributes.

**Text status:** Reuse. No changes needed.

---

### Section 14 — Related (Ending, Required)

**IA v4 purpose:** Related project recommendations. 4 project cards. Global component.

| Field | Value |
|-------|-------|
| Content source | Current page Related Projects section |
| Layout | L4 (Card Grid, 4-col) |
| Cards | C4 Related variant × 4 |
| Read More | No |

**Cards (4, reuse):**
1. Studier — Digital Systems
2. Accessibility Support Hub — Service Systems
3. New World Design System — Digital Systems
4. Voting Starter Kit — Service Systems

**Text status:** Reuse. Global component, no VTH-specific changes.

---

## 2. Content Disposition Summary

Shows where each piece of current VTH content ends up.

| Current VTH section | IA v4 destination | Action |
|---------------------|-------------------|--------|
| Hero | 0. Hero | Reuse |
| Overview + Meta | 1. Overview + Meta | Reuse |
| Screencast | 5. Outcome (video) | Move |
| Background | 2. Background | Reuse |
| Problem | 3. Problem | Reuse, swap images for Tabler icons |
| My Role | 6. Contribution | Rename kicker, reuse content |
| Research and Evidence | 8. Research (default) | Reuse |
| Insights and Principles | 8. Research (Read More) | Move into Research |
| IA and Content Strategy (pathway model) | 4. Solution | Move strategic content to new Solution |
| IA and Content Strategy (detailed IA) | 9. Design (default) | Move detailed work to Design |
| Prototype and Validation (metrics) | 5. Outcome (headline metrics) | Move headline numbers |
| Prototype and Validation (detail) | 10. Validation | Reuse detailed testing |
| Key Decisions and Trade-offs | 9. Design (Read More) | Move into Design |
| Final Design | 5. Outcome (deliverable cards) + 11. Delivery (detail) | Split |
| Go-live and BAU Planning | 11. Delivery (Read More) | Move into Delivery |
| Reflection | 12. Reflection | Reuse |
| Recipe | 13. Recipe | Reuse |
| Related Projects | 14. Related | Reuse |

**New content needed:**
- Section 4 (Solution): title, 2 paragraphs, influence block
- Process Intro: title, 1 paragraph, 4 nav cards
- Section 5 (Outcome): title, 1 paragraph (edited from existing)

---

## 3. Media Inventory

| Asset | R2 path | Used in section | Status |
|-------|---------|-----------------|--------|
| vth.mp4 | projects/vth/vth.mp4 | 5. Outcome | Reuse |
| problem-guidance.png | projects/vth/problem-guidance.png | — | **Drop** (replace with Tabler icon) |
| problem-resonance.png | projects/vth/problem-resonance.png | — | **Drop** |
| problem-confidence.png | projects/vth/problem-confidence.png | — | **Drop** |
| research-interviews.png | projects/vth/research-interviews.png | 8. Research | Reuse |
| research-usability-test.png | projects/vth/research-usability-test.png | 8. Research | Reuse |
| research-best-practice.png | projects/vth/research-best-practice.png | 8. Research | Reuse |
| research-content-inventoried.png | projects/vth/research-content-inventoried.png | 8. Research | Reuse |
| research-page-analysis.png | projects/vth/research-page-analysis.png | 8. Research | Reuse |
| research-card-sorting.png | projects/vth/research-card-sorting.png | 8. Research | Reuse |
| research-evaluative.png | projects/vth/research-evaluative.png | 8. Research | Reuse |
| principle-signal.png | projects/vth/principle-signal.png | 8. Research (Read More) | Reuse |
| principle-speak-victim.png | projects/vth/principle-speak-victim.png | 8. Research (Read More) | Reuse |
| principle-reveal-paths.png | projects/vth/principle-reveal-paths.png | 8. Research (Read More) | Reuse |
| principle-greet-first.png | projects/vth/principle-greet-first.png | 8. Research (Read More) | Reuse |
| principle-set-expectation.png | projects/vth/principle-set-expectation.png | 8. Research (Read More) | Reuse |
| principle-define-boundary.png | projects/vth/principle-define-boundary.png | 8. Research (Read More) | Reuse |
| principle-enable-scaning.png | projects/vth/principle-enable-scaning.png | 8. Research (Read More) | Reuse |
| principle-build-familiarity.png | projects/vth/principle-build-familiarity.png | 8. Research (Read More) | Reuse |
| principle-invite-action.png | projects/vth/principle-invite-action.png | 8. Research (Read More) | Reuse |
| journey-understand.png | projects/vth/journey-understand.png | — | **Drop** (replace with Tabler icon in Solution) |
| journey-act.png | projects/vth/journey-act.png | — | **Drop** |
| journey-stay-informed.png | projects/vth/journey-stay-informed.png | — | **Drop** |
| ia-structure.png | projects/vth/ia-structure.png | 9. Design | Reuse |
| lofi-hub.png | projects/vth/lofi-hub.png | 10. Validation | Reuse |
| ease-score.png | projects/vth/ease-score.png | 10. Validation (Read More) | Reuse |
| handover-package.png | projects/vth/handover-package.png | 11. Delivery | Reuse |
| handover-content-inventory.png | projects/vth/handover-content-inventory.png | 11. Delivery | Reuse |
| handover-template.png | projects/vth/handover-template.png | 11. Delivery | Reuse |
| info-page.png | projects/vth/info-page.png | 11. Delivery | Reuse |
| go-live-map.png | projects/vth/go-live-map.png | 11. Delivery (Read More) | Reuse |

**Tabler icons needed for VTH (`assets/icons/vth/`):**

| Icon name | Used in | Tabler ID |
|-----------|---------|-----------|
| Sign right | Problem: Guidance | `ti-sign-right` |
| Message check | Problem: Resonance | `ti-message-check` |
| Shield check | Problem: Confidence | `ti-shield-check` |
| Help circle | Solution: Understand | `ti-help-circle` |
| Send | Solution: Act | `ti-send` |
| Shield check | Solution: Stay informed | `ti-shield-check` (reuse) |

**Shared icons (`assets/icons/shared/`):**

| Icon name | Used in | Tabler ID |
|-----------|---------|-----------|
| Search | Process nav: Research | `ti-search` |
| Layout grid | Process nav: Design | `ti-layout-grid` |
| Chart bar | Process nav: Validation | `ti-chart-bar` |
| Send | Process nav: Delivery | `ti-send` |

---

## 4. Open Questions

All questions resolved. Decisions recorded below.

**Q1. Meta format.** Keep current label/value list (Client, Role, Team, Timeline, Tools, HENEX Lens, Skills). More informative than reference page 4-card row.

**Q2. Dark navy Outcome section.** Adopted. Use `#00164B` dark navy background with white text. Full dark mode support required. Tagged `[VTH-SPECIFIC]`.

**Q3. Feedback section.** Omitted. VTH is a professional project with no available feedback quotes. Can be added later if stakeholder quotes become available.

**Q4. Hi-fi embed.** Place VTH hi-fi HTML page as repo asset at `assets/prototype/vth-hifi.html`. Embed in Delivery section via iframe using the `hifi-shell` component (header + tabs + iframe container) from the reference page. No external dependency, version-controlled with repo.

**Q5. Reflection card framing.** `[DS-LEVEL]` Unified three-card structure for all case studies: **Value / Learned / Next**. Labels are fixed across all projects, content is project-specific. VTH mapping:
- **Value** — Connecting research to governance decisions (absorbs current Evidence + Governance cards).
- **Learned** — Testing depth constrained by timeline; more validation and tone testing would strengthen the case (absorbs reference page Further validation + Tone refinement).
- **Next** — From prototype to operational service; delivery confirmation, ownership and BAU rhythm needed (absorbs current Sustainability + reference page Delivery visibility + Sustainable operation).

---

## 5. Section Count Comparison

| | Current VTH | IA v4 VTH | Change |
|---|---|---|---|
| Total sections | 16 | 15 (+ process intro) | -1 |
| Layer 1 | 2 (Hero, Overview) | 2 | Same |
| Layer 2 | 4 (Background, Problem, My Role, Screencast) | 5 (Background, Problem, Solution, Outcome, Contribution) | +1 (Solution new, Screencast absorbed into Outcome) |
| Layer 3 | 7 (Research, Insights, IA, Validation, Decisions, Final Design, BAU) | 4 (Research, Design, Validation, Delivery) + process intro | -3 (consolidated) |
| Ending | 3 (Reflection, Recipe, Related) | 3 | Same |

The IA v4 version is more compact in Layer 3 (7 sections → 4 with Read More) while adding a Solution section in Layer 2 for front-loaded storytelling.
