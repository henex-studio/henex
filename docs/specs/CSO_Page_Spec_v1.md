# CSO Page Spec v1

Date: 2026-07-24
Project: HENEX Website
Status: Confirmed, ready to build
Scope: New 9th architecture case study page, Changsha Olympic Sports Centre (CSO). This page differs from the other 8 architecture pages in one deliberate way: the narrative centre of gravity is project management and delivery ownership, not design. It is written to support Cafe's applications for project management, delivery lead and product owner roles.

## 0. Source of truth and claim authority

Primary knowledge base, in priority order:
1. `docs/knowledge/Career_Profile.md` Section 4.10A — claim-boundary authority.
2. `docs/knowledge/Portfolio.md` Section B.9 — full narrative evidence.
3. `CSO_Portfolio_Page_Handover.md` (uploaded 2026-07-24) — content handover, consistent with the two above.
4. Cafe's spoken account, scheme brief, multimedia script and project facts in `cso.docx` (uploaded).

All page copy is drawn from these. Nothing is invented beyond them.

### Claim boundaries applied on this page (non-negotiable)

1. Describe it as a consortium / joint-institute bid, never a solo entry.
2. Result framing: reached the competition shortlist and received a prize of RMB 2.6 million (about NZD 650,000), not the winning bid, did not proceed to construction. Never "won", "selected", or "built". Do not use or translate the brief's "优胜"/"中标" tier labels.
3. The page text must NOT name the partner institute (no "SZAD", no "深总院", no "Shenzhen"), and must NOT mention the internal fee-share split or any internal financial figures. Only the RMB 2.6 million total prize and the qualitative "rare net-positive international competition" point are public.
4. Role is the project-manager function carrying owner responsibilities, not a formally titled "Service Owner" or "Design Owner".
5. Cafe did not own the design concept. A separate chief design lead owned it. The page credits Cafe with delivery, planning, cost, coordination and quality ownership, and is explicit that the concept came from the design lead / team.

### One deliberate exception, confirmed by Cafe 2026-07-24

Image watermarks credit **© SZAD / GDAD** (both institutes). Cafe explicitly overrode handover lines 75/91 for the image-credit case only. This applies to the watermark string on images only. The partner institute is still never named in visible body text, captions, headings or meta. This is the single, scoped exception; everything in boundary rule 3 above still holds for text.

## 1. Routing and file plan

| Item | Value |
|---|---|
| New file | `works/changsha-olympic-sports-centre.html` |
| Title tag | `Changsha Olympic Sports Centre \| HENEX` |
| Meta description | `Changsha Olympic Sports Centre architecture case study by HENEX.` |
| OG image | `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/cso/cso-home.webp` |
| OG url | `https://henex.uk/works/changsha-olympic-sports-centre.html` |
| Body classes | `architecture-case-page architecture-case-page--cso` |
| Stylesheets | `global.css`, `architecture-case.css` only. No new per-project CSS, matching the other 8 architecture pages. |
| Scripts | `main.js`, `case-interactions.js`, `glossary.js` |

Spelling: use British "Centre" throughout (matches `Portfolio.md`, the handover, and the rest of the site). The existing chronology placeholder card currently reads American "Center" and will be corrected to "Centre" during the site-wide follow-up (Section 7).

## 2. Confirmed assets

R2 path `projects/cso/`. Full file list confirmed complete by Cafe (screenshot was not truncated). `cso-home.webp` is the relation-card thumbnail only, used on `works.html`, `works-chronology.html` and related-project grids, not in the page body.

Watermark on every in-page image: **© SZAD / GDAD**.

Image-to-section assignment below is inferred from filenames (the sandbox has no network access to the R2 host, so images could not be viewed pixel-by-pixel). Cafe should sanity-check each image-to-caption match during the build review, since a filename like `perspective-riverview12` only weakly signals content.

**Hero:** `birdview-day-s.jpeg` (confirmed by Cafe).

### Curated in-page set (used)

The project has 29 candidate images. On a PM-narrative page, using all 29 would drown the delivery story in renders. The spec curates a strong subset (~15) and holds the rest back; Cafe can promote any held-back image during review.

| Filename | Inferred content | Section |
|---|---|---|
| `birdview-day-s.jpeg` | Daytime aerial from the south, full scheme | Hero |
| `birdview-dusk-s.jpeg` | Dusk aerial from the south, signature masterplan shot | Overview, establishing wide-image |
| `perspective-riverview-dusk.jpeg` | Riverfront eye-level, dusk | Planning & scheduling wide-image |
| `birdview-day-center-plaza1.jpeg` | Central celebration plaza, aerial | Coordination, communication & team support, image pair |
| `perspective-day-around-gymnasium.jpeg` | Arena/gymnasium exterior, day | Coordination, communication & team support, image pair |
| `perspective-dusk-around-stadium.jpeg` | Stadium exterior at dusk | Quality & delivery sign-off wide-image |
| `birdview-night-s.jpeg` | Night aerial, lit scheme | Cost & capacity wide-image |
| `concept-carving.jpeg` | Chrysanthemum-stone carving reference | Design Concept stack |
| `concept-Chrysanthemum.jpeg` | Chrysanthemum stone / bloom metaphor | Design Concept stack |
| `concept-mass.jpeg` | Massing generation diagram | Design Concept stack |
| `concept-urban-function.jpeg` | Urban / functional composition diagram | Design Concept stack |
| `perspective-dusk-roof.jpeg` | Roofscape at dusk, "chrysanthemum petal" roof | Design Concept closing wide-image |
| `interior-arena.jpeg` | Multi-purpose arena interior | Scheme highlights, image pair |
| `interior-space-platform.jpeg` | Elevated public viewing platform interior | Scheme highlights, image pair |

### Held back (available, not placed by default)

`birdview-day-around-stadium`, `birdview-day-center-plaza2`, `birdview-day-n`, `birdview-day-ne`, `perspective-riverview1`, `perspective-riverview12`, `interior-big-stair1..4`, `concept-function`, `concept-function-area`, `concept-function-axis`, `concept-function-group`, `concept-functon-time`. Reason: redundant angles (multiple near-identical birdviews), over-granular functional diagrams (6 concept-function variants), or repetitive interior stair shots. Cafe can swap any of these in during review.

## 3. Page outline

Section order keeps the standard architecture chrome (hero, title+meta, related, footer) and the standard section components (`arch-section`, `arch-two-col`, `arch-wide-image`, `arch-image-pair`, `arch-concept-stack`, `arch-section--henex`, `arch-related`), but re-weights the middle of the page toward delivery. The PM sections are the marquee content.

### Hero
`arch-hero` with `birdview-day-s.jpeg`. Case tags: `Architecture`, `Sports`, and `Professional Work` (secondary), matching the AYG/GSH tag pattern.

### Title block + meta panel
- Kicker: `Spatial Systems`
- H1: `Changsha Olympic Sports Centre`
- Lead (PM-framed, one sentence, holistic not cost-led): e.g. "Owning delivery of an eight-team international competition bid end to end, from the project plan and team organisation to coordination, quality sign-off and on-site handover."
- Meta grid:
  - Client: `Changsha Urban Development Group Co., Ltd.` (English name confirmed by Cafe for 长沙城发; replaces the earlier draft rendering)
  - Role: `Project Manager` (with `<small>` or lead line noting the project-owner function; keep the strong-line as "Project Manager", the owner nuance lives in the body)
  - Timeline: `June 2024 to January 2025` (worded month range, matching the site's "2022 to present" style rather than a bare year; covers the 2024.6–2025.1 involvement window Cafe confirmed)
  - Status: `Competition shortlist, NZD 650K prize` (neutral shortlist-plus-prize framing; not "winning")
  - Location: `Changsha, China`
  - GFA: `564,000 m²` (venue zone; the 591,000 m² coordination zone is described in the Scheme section, not the meta)
  - HENEX Lens: `R18 · Step by Step Path Design` — `Perception × Meaning × Interface`
- Skills list (PM-oriented, drawn from the delivery story, balanced across the five delivery dimensions): Project management, Delivery planning, Node-control scheduling, Team organisation, Stakeholder coordination, Cross-team communication, Quality sign-off, Demand and capacity management, Cost control, Meeting facilitation.

### Currency convention (applies to all figures on the page)

Cafe's audience for these applications is New Zealand. Write NZD as the primary figure everywhere, converting at RMB/NZD = 1/4. RMB may follow in parentheses only where it adds public-record accuracy (the prize). Specifically:
- Prize: `NZD 650,000` (RMB 2.6 million), the public prize figure, framed as shortlist-plus-prize.
- Estimated construction cost: about `NZD 1.5 billion` (from the roughly RMB 5.9 billion estimate).
- Never state the internal fee-share or net-output figures in either currency (claim boundary 3).

### Overview
What the project is (the "one stadium, two arenas" civic sports complex, its scale and cost in NZD, the eight-team international competition, the consortium of two design institutes described generically). Then the framing move: I owned the delivery of this bid end to end, planning, people, coordination, quality and cost together, not the design idea. The emphasis is holistic project management, not any single lever. End with the HENEX connective sentence pointing to R18.
Image: `birdview-dusk-s.jpeg` as the establishing wide-image.

> **Rebalance note (Cafe, 2026-07-24):** cost control is an outcome, not the headline. The five PM sections below carry equal weight: planning, coordination and communication, team support, quality sign-off, and cost. Do not let the Overview, the Retrospective, or any single section frame the project as primarily a cost-control story. The through-line is whole-project management ownership.

### Role and ownership
The PM function carrying the owner role (firm had no separate owner title). Alongside a separate chief design lead who owned the concept; I owned the process, the people and the delivery, planning, resourcing, coordination, quality and cost, not the design idea. Core team of six to seven architecture specialists plus coordinated structural, MEP and façade engineers. Escalation-based management style: let the team run, step into detailed coordination only on blockers they could not resolve. No image (Role sections are imageless across all architecture pages).

### Planning and scheduling
The node-control schedule drafted at the outset, the backbone of the whole bid. Three phases: an internal design phase, an internal "PK" (head-to-head) between the two teams' competing schemes, and a post-direction deepening phase once one direction was chosen. Each phase with its own control rhythm and defined hand-off points, so a compressed twelve-week, two-institute effort stayed legible and on pace. This is the concrete R18 evidence: a complex multi-team bid sequenced into understand → decide → act.
Glossary tags available: `consortium` (already in glossary).
Image: `perspective-riverview-dusk.jpeg` wide-image.

### Coordination, communication and team support
The people core of the role, given equal or greater weight than cost. Single point of contact with the partner institute (generically described, never named). Coordinated upward with the chief design lead on concept direction and downward with the team on blockers and resourcing, and chaired internal coordination meetings as the meeting host, setting attendees, agenda and pace. Actively supported the team: mentored architects, surfaced what each member needed, and found the resources to unblock them, stepping into detailed coordination personally only when they flagged something they could not resolve. This is the "team support" pillar Cafe called out, and it should read as a genuine management strength, not a footnote to cost.
Image: `arch-image-pair` of `birdview-day-center-plaza1.jpeg` and `perspective-day-around-gymnasium.jpeg`.

### Quality and delivery sign-off
Set the deliverable standard and the discipline hand-off interface, defining how much depth each contribution needed at competition stage rather than construction depth. Held final quality sign-off on the key competition deliverables, including outsourced vendor work: renders, multimedia and animation, the physical model, and print. Coordinated on-site competition delivery, the physical model install and liaison with the competition organiser on install timing and any changes. Quality was owned as its own discipline, not treated as a by-product of the budget.
Image: `perspective-dusk-around-stadium.jpeg` wide-image.

### Cost and capacity
One delivery lever among several, not the headline. Negotiated the fee-share split with the partner institute (described generically, partner not named), then broke the budget down per node into headcount by discipline and hard-cost items, including a fixed rendering count with a small agreed float (the "around ten renders, plus or minus one to two" granularity from Cafe's account). Used scenario planning across three outcomes (not shortlisted, shortlisted, winning) to pre-plan the resourcing and cost response for each rather than reacting after the fact. The result, a rare net-positive return on an international competition, is stated here as evidence of disciplined management, then left; it is not elevated above the planning, people and quality work.
Image: `birdview-night-s.jpeg` wide-image.

### Design Concept (brief, credited to the design team)
Short, honest context section. The concept, 刚柔相济·菊花石记 (rendered in English as "rigid and soft in harmony, a chrysanthemum-stone chronicle"), draws on Changsha's intangible cultural heritage of chrysanthemum-stone carving, positioning the complex as a landscape landmark, a culture-and-sport centre and an urban engine. Explicitly framed as the design lead's / team's concept, not Cafe's, with one sentence on how the PM role turned that concept into a deliverable competition scheme. Keep this section short: it is context, not the page's focus.
Images: `arch-concept-stack` of `concept-carving.jpeg`, `concept-Chrysanthemum.jpeg`, `concept-mass.jpeg`, `concept-urban-function.jpeg`. Closing wide-image: `perspective-dusk-roof.jpeg` (the "chrysanthemum petal" roof).

### Scheme highlights (brief)
One compact section on what the scheme delivered, so the page still shows the building: the 65,000-seat main stadium riverside, the 18,000-seat arena and 4,000-seat aquatics hall, the layered public viewing platforms, and the post-event / everyday civic use (the "four core spaces": celebration plaza, professional venues, commercial green valley, sports park). Kept factual and short.
Images: `arch-image-pair` of `interior-arena.jpeg` and `interior-space-platform.jpeg`.

### Retrospective
PM lessons in first person, balanced across the whole management role rather than headlined by cost: holding a compressed, two-institute bid together through a clear plan, keeping the people coordinated and supported, protecting deliverable quality under a hard ceiling, and, as one result among these, achieving a rare net-positive return. Close by connecting this delivery-ownership experience to the service / product delivery roles Cafe is now targeting, this being the strongest portfolio evidence of owning whole-project delivery over a specialist team without holding the design-concept role.
No image (Retrospective is imageless across all architecture pages).

### HENEX Method Recipe
- Primary: **R18 · Step by Step Path Design**, nodes Perception × Meaning × Interface.
- Rationale (also the honest bridge for the design-method vs PM tension): R18 is normally a design-path method about arranging a user's tasks in the order they think. Here I applied the same understand → decide → act logic to the delivery process itself: the node-control schedule sequenced a complex, two-institute, multi-discipline bid into legible phases with clear hand-offs, so the team always knew what to understand, decide and produce next. The connective paragraph will state this bridge explicitly rather than pretending the project was a design-method showcase.
- Secondary pills: **R13 · Multiple Viewpoint Story** (coordinating two institutes, multiple disciplines, and upward/downward viewpoints into one coherent bid), **R09 · Mission-First Navigation** (organising the whole effort around the delivery goal, on time, coordinated and to standard, rather than around disciplines).
- All three anchors (`#r18`, `#r13`, `#r09`) exist in `philosophy.html`.

### Related Projects
Four cards: **Guangzhou Football Park** (closest peer, large stadium), **Great Bay Area Science Hall** (civic competition, PM-adjacent), **East Campus of Shantou University and AYG Venue** (sports/civic venue), **Nanning Wuxu Airport Terminal 3** (large competition delivery). Standard `arch-related-card` markup.

## 4. Voice and narrative

Follow `HENEX_Case_Study_Voice_and_Narrative_Rules.md`: first person for judgement and decisions ("I drafted the node-control schedule", "I set the delivery standard"), neutral voice for facts (scale, cost, competition structure). This page leans slightly more first-person than the design-led pages, because the evidence being shown is Cafe's own management decisions. Keep IELTS 6.5–7, active voice, short paragraphs, no em-dash separators (project style rule).

## 5. Watermark application

Every in-page image (including the hero) gets `<span class="photo-credit">© SZAD / GDAD</span>`, using the `.arch-figure__media` wrapper for figure images and the direct `.arch-hero .photo-credit` pattern for the hero, exactly as fixed on the SRH build. No new CSS needed.

## 6. HENEX Lens design-method tension (noted, resolved)

CSO is the only page whose real subject is delivery management, while the HENEX framework is a design methodology. Resolution: keep the HENEX Lens and Recipe for site consistency, but write the Recipe connective text to bridge honestly (Section 3, Recipe). Do not overclaim that project management is a HENEX design recipe; frame it as applying the same sequencing logic to delivery. Cafe delegated the primary-recipe choice ("你来定"); R18 chosen for the reasons above.

## 7. Site-wide follow-up (bundled into the build, matching the SRH precedent)

1. `works.html`: add a CSO card to the Spatial Systems grid. Position: immediately before the PYZ card (Cafe's instruction). Resulting grid order: BT2, AYG, OPI, GFP, GSH, CSO, PYZ, NT3, SRH. Meta line: `Sports · Spatial Systems`. Title: `Changsha Olympic Sports Centre`.
2. `works-chronology.html`: a locked placeholder CSO card already exists in the 2024 row (currently non-linked, American spelling "Center"). Convert it to a live linked card and correct the spelling to "Centre". Meta stays `Sports · Spatial Systems`.
3. Not doing: cross-linking CSO into the other 8 pages' `arch-related` grids, consistent with how SRH/GSH/PYZ were handled (newest pages are not retro-added to older pages' related grids).

## 8. Open items for Cafe's build-review (not blocking spec sign-off)

1. Image-to-caption matches are inferred from filenames; confirm each render sits with sensible caption text during review, since the images could not be viewed here.
2. The curated ~15-image set vs the 29 available: confirm the held-back images (Section 2) can stay out, or name any to promote.
3. The Client English rendering `Changsha Olympic New Town Investment and Development Co., Ltd.` is my translation of the Chinese name Cafe gave; confirm it reads correctly.

## 9. Build plan

1. Confirm this spec, then switch model back to Sonnet (no extended thinking) for the mechanical build.
2. Build `works/changsha-olympic-sports-centre.html` on the existing template, no new CSS.
3. Apply the `© SZAD / GDAD` watermark to all in-page images plus the hero, using the `.arch-figure__media` wrapper pattern.
4. Bundle the two site-wide entries (Section 7).
5. Static verification: tag balance, no duplicate ids, all image and link references resolve, all three HENEX anchors resolve, dark-mode check.
6. Update `docs/HENEX_Project_Execution_Plan.md` and remind Cafe to re-upload it to RAG.
