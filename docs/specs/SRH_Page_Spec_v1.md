# SRH Page Spec v1

Date: 2026-07-18
Project: HENEX Website
Status: Confirmed, ready to build
Scope: New 8th architecture case study page, Shenzhen Reform and Opening-up Exhibition Hall (SRH). Source material: `docs/reference/srh.pdf` (Figma export, text + 27 embedded images) and the confirmed R2 asset list at `projects/srh/`.

Revision note (v1, confirmed): the PDF was re-rendered as a full-page image and read strip by strip to confirm the true visual order of every image, replacing the earlier guess based on PDF internal object order. All open questions below are resolved with Cafe's answers.

## 1. Routing and File Plan

| Item | Value |
|---|---|
| New file | `works/shenzhen-reform-exhibition-hall.html` |
| Title tag | `Shenzhen Reform and Opening-up Exhibition Hall \| HENEX` |
| Meta description | `Shenzhen Reform and Opening-up Exhibition Hall architecture case study by HENEX.` |
| OG image | `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/srh/srh-home.webp` |
| OG url | `https://henex.uk/works/shenzhen-reform-exhibition-hall.html` |
| Body classes | `architecture-case-page architecture-case-page--srh` |
| Stylesheets | `global.css`, `architecture-case.css` only. No new per-project CSS file, matching the existing 7 architecture pages (none of them define per-case theme colours). |
| Scripts | `main.js`, `case-interactions.js`, `glossary.js` (same as other 7 pages) |

**Open question 1:** filename. I propose `shenzhen-reform-exhibition-hall.html`, following the place + facility-type pattern used by `great-bay-area-science-hall.html` and `guangzhou-football-park.html`. Confirm or give me the name you want.

## 2. Confirmed Assets

13 files exist at `projects/srh/` on R2. `srh-home.webp` is the relation-card thumbnail only, used on `works.html` and other pages' related-project cards, not inside the page body itself, matching the `*-home.webp` pattern already established for the other 7 projects.

All 12 in-page images are copyrighted **© GDAD**, per your cc.docx image9 annotation.

Confirmed by rendering the PDF's actual page (not just the internal image-object order) and reading it strip by strip top to bottom, then matching against your confirmation that `birdview-south` and `south-west` are the first and second images after the hero:

| Filename | Content (confirmed from rendered page) | Section |
|---|---|---|
| `hero.png` | Day exterior, wide drone shot, plaza with visitors | Hero |
| `birdview-south.png` | Dusk, elevated distant aerial against city skyline. First image after hero, sits right under the meta panel/skills block. | Overview |
| `south-west.png` | River at night, building lit up, paired beside the "From Fishing Village to Global Innovation Hub" paragraph. Second image after hero. | Overview |
| `masterplan.png` | Site plan card, captioned "Artistic landscape that metaphors the rapids of a river," paired beside the "An Architectural Metaphor of Reform and Nature" paragraph. | Concept |
| `jade.png` | Jade / raw jade / calligraphy 3-panel, captioned "From raw stone to jade." Sits directly under the "Concept" sub-header. | Concept stack |
| `concept.png` | 5-icon strip captioned "A warm and tough jade prescription" (national thought, ripple scour, unpolished jade, building image, warm jade). | Concept stack |
| `dna.png` | 4-icon strip captioned "Upwardly-Spiraling DNA." | Concept stack |
| `high-desity-city.png` | 6-icon strip captioned "Green Corridor in a high-density city." | Concept stack |
| `unity.png` | 4-icon strip captioned "Unity of human and nature." | Concept stack |
| `roof.png` | Elevated glass rooftop terrace aerial with lake in view, paired with the "A Journey Toward Harmony and Immersion" paragraph. | Journey |
| `interior.png` | Atrium interior, ring skylight, sculpture, visitors. Second image in the Journey section. | Journey |
| `streetview.png` | Day, ground-level approach shot with a cyclist and pedestrians, showing the facade's scale pattern. Sits alone right before the Retrospective heading. | Journey, closing image |

This resolves the two open questions from the draft: the image identities are now confirmed from the actual rendered layout rather than guessed, and the Concept section carries a 5-figure stack (jade, concept, dna, high-desity-city, unity) rather than 4, since the PDF gives each of these five its own distinct caption.

## 3. Page Outline

Section order follows the PYZ skeleton (Overview, Role, Concept, Journey, Retrospective, Recipe, Related), the shortest of the 7 existing pages, per your instruction to match NT3/PYZ density.

### Hero
`arch-hero` with `hero.png`, alt text describing the day exterior with plaza.

### Title block + meta panel
- Kicker: `Spatial Systems` (uniform across all 7 existing pages, SRH follows suit)
- H1: `Shenzhen Reform and Opening-up Exhibition Hall`
- Lead: one sentence connecting the museum's narrative-and-journey design problem to HENEX, e.g. "Turning forty years of reform history into a single legible visitor journey through narrative structure, spatial sequencing and exhibit-level clarity."
- Meta grid:
  - Client: Bureau of Public Works of Shenzhen Municipality
  - Role: Project Director
  - Timeline: 2021
  - Status: `Competition finalist, second prize` (confirmed; the PDF's literal value "Finished Biding" was a typo for "Finished Bidding", replaced with the more specific framing that matches the PDF's own subtitle and Result line)
  - Location: Shenzhen, China
  - GFA: 90,650 sqm
  - HENEX Lens: see Section 5 below
- Skills list (from PDF, 7 items): Exhibition architectural design, Conceptual design, Storytelling, Design coordination, Quality control, Site inspections, Spatial strategy

### Overview
Content: what the Exhibition Hall is, the competition context (Second Prize, one of Shenzhen's ten cultural facilities marking the 40th reform anniversary), Shenzhen's fishing-village-to-innovation-hub transformation story, and my role summary folded in as a closing sentence, matching NT3/PYZ's pattern of ending Overview with a HENEX connective sentence.
Images: `birdview-south.png` as the section's establishing wide-image, `south-west.png` paired alongside the Shenzhen transformation paragraph.

### Role
Content: responsibilities from the PDF, project-lead coordination, narrative and bidding-deliverable ownership, team and schedule management, quality assurance. No image, matching the Role section convention on all 7 existing pages.

### Concept
Content: the architectural metaphor paragraph (organic composition, spiraling DNA-like path, green corridor, ascending ramp as "road of reform"), paired with `masterplan.png` in a two-column layout (matching how the PDF itself pairs this image with this exact paragraph). One `circulation` glossary tag placed where the ramp/path sequencing is described.
Below that: a 5-figure `arch-concept-stack` (one more than NT3's 4, since the source gives each its own caption): `jade.png` ("From raw stone to jade"), `concept.png` ("A warm and tough jade prescription"), `dna.png` ("Upwardly-Spiraling DNA"), `high-desity-city.png` ("Green Corridor in a high-density city"), `unity.png` ("Unity of human and nature").

### Journey (renamed from PDF's "A Journey Toward Harmony and Immersion")
Content: ecological pathways, elevated viewing platforms, the convergence of "Road of Reform" and "Road of Ecology," flexible exhibition spaces, the museum-as-cultural-monument closing idea.
Images: `roof.png`, `interior.png`, `streetview.png` (closing wide-image, sits right before Retrospective in the source).

### Retrospective
Content: rewritten from the PDF's Aim/Methods/Result block into HENEX voice (first person for judgement, neutral for fact, per the Voice and Narrative Rules doc), reflecting on what a competition narrative for a commemorative museum teaches about coordinating historical depth, multi-voice storytelling and visitor legibility under bid timeline pressure.
No image, matching the Retrospective convention on all 7 existing pages.

## 4. HENEX Method Recipe

The PDF already lists 6 methods in near site-ready language:

| Method | R-code | Triad |
|---|---|---|
| Purpose Story Script | R07 | Identity × Meaning × Medium |
| Multiple Viewpoint Story | R13 | Perception × Empathy × Medium |
| Mission-First Navigation | R09 | Identity × Meaning × Interface |
| Step-by-Step Path Design | R18 | Perception × Meaning × Interface |
| Atmosphere Palette | R02 | Identity × Affect × Matter |
| Clarity & Accessibility Audit | R15 | Perception × Empathy × Interface |

All 7 existing pages show 1 primary + 3 secondary (4 pills total), never more. Since the PDF gives us 6, I need to cut 2 for the pill display (the other 2 can still live in prose elsewhere).

**Confirmed:**
- Primary: **R07 · Purpose Story Script** — the PDF itself describes this as "a coherent spine for the 40-year reform narrative," which is the organising method behind the whole project.
- Secondary: **R13 · Multiple Viewpoint Story** (parallel perspectives across themes and exhibits), **R09 · Mission-First Navigation** (exhibition IA from theme to chapter to exhibit to interaction), **R18 · Step-by-Step Path Design** (the visitor route pacing described in the Journey section).
- Dropped from pills, folded into prose instead: **R02 Atmosphere Palette** (mentioned in the Journey section's materials/light description), **R15 Clarity & Accessibility Audit** (mentioned in the Retrospective as a QA discipline).

## 5. Related Projects

Proposed 4 links: **Great Bay Area Science Hall** (closest peer, also exhibition/civic narrative), **Guangzhou Baiyun T2** (large civic-scale complex delivery), **Shantou University & AYG Venue** (strong concept-narrative precedent), **Guangzhou Football Park** (spatial systems peer).

None of the 7 existing pages currently link back to Great Bay Area Science Hall or Poly Yuzhu either (they were added after the other 5 pages' related-grids were written), so SRH not being linked from the other 6 pages on day one matches existing site behaviour rather than introducing a new gap. Flagging this as a known site-wide follow-up, not something today's build needs to fix.

## 6. Site-Wide Follow-Up (Confirmed: Bundled Into Today's Build)

Building the page alone does not make it reachable from the rest of the site. Bundled into today's work:
1. `works.html`: add an SRH card to the Spatial Systems grid (pattern: `<article class="project-card project-card--compact">`, meta line `Museum and Exhibition · Spatial Systems`).
2. `works-chronology.html`: add the 2021 entry.
3. Not doing: adding SRH into the other 6 pages' `arch-related` grids, since per Section 5 this isn't required to match current site behaviour (GSH and PYZ aren't cross-linked from the older 5 pages either).

## 7. Build Plan

1. Switch model back to Sonnet, no extended thinking, once this spec is confirmed (mechanical execution against a settled spec).
2. Build `works/shenzhen-reform-exhibition-hall.html` following the outline in Section 3, reusing `architecture-case.css` classes as-is (no new CSS needed).
3. Apply `.photo-credit © GDAD` to all 12 in-page images during construction, using the `.arch-figure__media` wrapper pattern already fixed for the other 7 pages, so this page never has the mis-anchored watermark bug those pages had.
4. Static verification: tag balance, no duplicate ids, brace balance (n/a, no new CSS), broken-link check, dark mode check.
5. Update `docs/HENEX_Project_Execution_Plan.md` with the new page and remind you to re-upload it to RAG.
