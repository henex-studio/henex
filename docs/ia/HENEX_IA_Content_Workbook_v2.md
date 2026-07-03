# HENEX IA Content Workbook v2

> Updated from v1. Adds Case Study IA Framework v4, including the audit process, findings, insights and decisions that produced it. All other sheets carried forward from v1 unchanged.

## Change Log

| Version | Date | Summary |
| --- | --- | --- |
| v1 | 2026-05 | Initial workbook covering IA Pages, Project Inventory, Home Scenarios, Tag System, Lab Inventory and Image Asset Guide. |
| v2 | 2026-07-02 | Added Case Study IA Framework sheet. Records the full audit of all 8 UX case study pages, findings, insights and the final IA framework (v4) for UX case studies. |


## Sheet: Case Study IA Framework

### 1. Background

The existing 8 UX case study pages were built incrementally without a shared IA template. Each page chose its own section order, naming and content grouping. This created inconsistency across pages and made the portfolio harder to read as a coherent body of work.

A full audit was conducted in July 2026 to establish a unified, extensible IA framework for all UX case studies.

### 2. Audit Scope

All 8 live UX case study pages were read from GitHub via MCP.

| Code | Project | Sections | File size |
| --- | --- | ---: | --- |
| VTH | Victim Hub | 16 | 34.7 KB |
| ASH | Accessibility Support Hub | 18 | 38.6 KB |
| STD | Studier | 12 | 27.6 KB |
| VSK | Voting Starter Kit | 15 | 30.3 KB |
| NDS | New World Design System | 16 | 32.5 KB |
| WSO | Who's Singing OuTūīside | 15 | 44.9 KB |
| WST | Welnest | 16 | 39.4 KB |
| RKT | ReKraft | 16 | 49.0 KB |

### 3. Audit Method

Each page was read in full HTML. The following were extracted and compared across all 8 pages.

1. Section order and naming.
2. Presence or absence of key content types (Background, Solution, Outcome, Feedback, Design Process, Design System, Final Design, Role/Contribution, Read More toggles).
3. Layout class patterns and project-specific CSS prefixes.
4. Content grouping logic in the process layer (activity-based vs phase-based vs DD-named).
5. Hero variant (standard vs background-hero).

### 4. Findings

F1. No shared IA skeleton existed. Section order, naming and content grouping logic differed across every page.

F2. Two IA evolution stages were visible. Earlier pages (VTH, ASH) buried Outcome deep in the page. Later pages (VSK, NDS, WSO, WST, RKT) moved Outcome and Feedback before the process layer, naturally forming a front-loaded story.

F3. VTH was the only page without a Solution section.

F4. Process layer naming had two competing patterns: custom topic names (VTH, ASH, STD) vs Double Diamond phase names (WSO, WST, RKT). The DD-named pattern was more consistent.

F5. Only 3 of 8 pages had Read More toggles (WSO, WST, RKT). All were later builds.

F6. Background existed in only 2 of 8 pages (VTH, ASH). Other pages merged background into Overview or Problem.

F7. Design System appeared as a standalone section in 5 of 8 pages (ASH, NDS, WSO, WST, RKT).

F8. Feedback appeared in 5 of 8 pages, all course projects. Professional projects (VTH) had no feedback section but could include stakeholder feedback.

F9. Role/Contribution appeared in 3 pages (VTH, ASH, STD). Naming was inconsistent: "My Role" vs "Contribution".

F10. Layout classes were heavily project-specific. Each project created its own CSS prefix (vth-, studier-, wso-, wst-, rkt-) with minimal reuse of shared layout patterns.

F11. Pages ranged from 12 to 18 sections. The average was 15.5. All pages were longer than necessary for quick reading.

### 5. Insights

I1. The three-layer reading model (Glance, Story, Process) is validated by the natural evolution of later pages. It does not need to be invented. It needs to be formalised.

I2. Process layer sections should use a standard vocabulary (Research, Design, Validation) rather than DD phase names or custom topic names. Individual activities (Service Blueprint, Evaluative Workshop, etc.) should be grouped inside these standard sections, not given their own sections.

I3. Design System content belongs inside the Design section, not as a standalone section.

I4. A standard set of section names eliminates the naming inconsistency problem across all pages.

I5. Read More toggles should be applied systematically to all Layer 3 sections to keep pages compact.

I6. The framework must accommodate at least three project narrative types: service design (VTH), course/team projects (ASH, VSK, RKT), and product builds (STD). This requires a flexible set of required and optional sections rather than a rigid template.

I7. Layout patterns need to converge from project-specific to framework-standard. This is a DS task, not an IA task, but the IA framework should anticipate it by keeping section types finite and well-defined.

### 6. Design Decisions

D1. Three-layer structure adopted: Layer 1 (Glance), Layer 2 (Story), Layer 3 (Process), plus a fixed Ending.

D2. Layer 2 ends with a visual transition into Layer 3. The specific visual treatment (background colour change) is deferred to per-project implementation.

D3. Layer 3 opens with a lightweight card group summarising the process contents, plus a title and short paragraph.

D4. Contribution (team role description) is placed at the end of Layer 2, before Feedback. It belongs to the "what I did" story, not the "how I did it" process.

D5. In-page navigation is deferred as a future enhancement (floating nav bar on scroll). Not in scope for the current build.

D6. Figma prototype embedding via iframe is confirmed as technically feasible and will be used in Outcome or Delivery sections where available.

D7. "Final Design" renamed to "Delivery" to accommodate projects where the output is not a design artifact (e.g. a service, a tool, a system).

D8. Icons will use Tabler Icons in SVG format, downloaded per-icon into assets/icons/. Project-specific icons in project subdirectories, shared icons in a common directory.

### 7. Framework Definition — v4 Final

**Layer 1 — Glance**

| # | Section | Required |
| --- | --- | --- |
| 0 | Hero | Yes |
| 1 | Overview + Meta | Yes |

**Layer 2 — Story**

| # | Section | Required |
| --- | --- | --- |
| 2 | Background | No |
| 3 | Problem | Yes |
| 4 | Solution | Yes |
| 5 | Outcome | Yes |
| 6 | Contribution | No (team projects only) |
| 7 | Feedback | No |

**Layer 3 — Process**

Opens with a lightweight card group and summary paragraph.

| # | Section | Required |
| --- | --- | --- |
| 8 | Research | Yes |
| 9 | Design | Yes |
| 10 | Validation | No |
| 11 | Delivery | Yes |

**Ending**

| # | Section | Required |
| --- | --- | --- |
| 12 | Reflection | Yes |
| 13 | Recipe | Yes |
| 14 | Related | Yes |

**Totals:** 11 required sections, 4 optional sections (Background, Contribution, Feedback, Validation).

### 8. Section Definitions

| Section | Purpose | Content guidance |
| --- | --- | --- |
| Hero | First impression. Title, tags, one-line summary, CTA. | Keep to one sentence. Tags from the Tag System sheet. |
| Overview + Meta | High-level summary of the project. What was done, for whom, what was produced. | Includes Meta block: Client, Role, Team, Timeline, Tools, HENEX Lens, Skills. |
| Background | Higher-level context that frames the project. | Only when the project sits inside a larger programme or context that needs separate explanation. |
| Problem | Core problem definition. | Includes HMW statement. Can include supporting data or illustration. |
| Solution | Strategic direction or concept choice. | Abstract and methodological. Not specific deliverables. Often includes a concept diagram or 2-3 solution pillars. |
| Outcome | Core result. What was produced and its value. | Video, prototype embed, contextual mockup or key screenshots. Not testing metrics (those go in Validation). |
| Contribution | Role in a team project. | Only for team projects. Describes what the author specifically owned or led. Individual projects omit this section. |
| Feedback | External validation of the work. | Course feedback, stakeholder quotes, user testimonials. |
| Research | Investigation and evidence gathering. | Methods, findings, insights, principles. Subsumes all research activities (interviews, surveys, benchmarking, observation). Use Read More for detailed content. |
| Design | Design decisions and system creation. | IA, interaction, visual design, design system, component decisions. Subsumes all design activities including DS documentation. Use Read More for detailed content. |
| Validation | Testing and iteration. | Usability testing, A/B testing, expert review, metrics. Use Read More for detailed test rounds. |
| Delivery | Final deliverables in detail. | High-fidelity screenshots, prototype embeds, detailed feature walkthroughs. Complements Outcome (which shows the headline result) with the full picture. |
| Reflection | What was learned. | Three-card format with fixed labels: **Value** (core contribution), **Learned** (constraints, trade-offs, what would be done differently), **Next** (forward direction). Labels are DS-level; content is project-specific. |
| Recipe | HENEX Method Recipe connection. | Primary recipe link, explanation, recipe tags, secondary recipe popovers. |
| Related | Related project recommendations. | 4 project cards. Global component. |

### 9. Read More Rules

1. Read More applies at the section level inside Layer 3.
2. Each section shows core information by default (key findings, key insights, key screenshots).
3. Detailed content (full test round results, additional screenshots, extended methodology) is hidden behind a toggle button.
4. The toggle uses aria-expanded and hidden attributes for accessibility.
5. Button text switches between "Read more" and "Show fewer".
6. Sections with limited content do not need Read More. The toggle is only added when content volume justifies it.


## Sheet: IA Pages

Carried forward from v1. No changes.

| Level | Page title | Slug | File path | Parent | Nav visibility | Phase | Status | Primary goal | Key sections | Primary CTA | Secondary CTA | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | Home | home | index.html |  | Main | Phase 1 | Build next | Position professional identity, introduce HENEX theory, show selected work, create routes into Works, About, Philosophy and Lab | Hero, Capability strip, HENEX framework preview, Featured Works, About preview, Lab entry, Footer | View Works | Explore HENEX | HENEX theory remains on Home. HENEX Website project is not shown in Home Works for now. |
| 1 | About | about | about.html | home | Main | Phase 1 | Planned | Explain the transition from built environments to public services and digital systems | Profile hero, Professional bridge, Capabilities, Timeline, Selected experience, CTA | Contact | View Works |  |
| 1 | Philosophy | philosophy | philosophy.html | home | Main | Phase 1 | Planned | Explain HENEX framework and three dimensions with nine nodes | HENEX definition, Human, Emotion, Nature, Nine nodes, Works mapping | Explore Works | Contact | Use anchors for #human, #emotion, #nature and nine nodes. |
| 1 | Works | works | works.html | home | Main | Phase 1 | Planned | Show formal case studies and project evidence | Works hero, Featured project, Category groups, Project grid, Archive | View Featured Work | Contact | Primary categories: Service Systems, Digital Systems, Spatial Systems. Future category: Editorial Systems. |
| 1 | Lab | lab | lab.html | home | Main | Phase 1 | Placeholder | Create a future space for visual experiments, artistic studies and creative ideas | Intro, Visual experiments, Artistic studies, Photography, Creative ideas | Visit Lab |  | Use confirmed Lab copy: A space for visual experiments, artistic studies and creative ideas. |


## Sheet: Project Inventory

Carried forward from v1. No changes.

| Phase | Project name | Short name | Category | Time | Type | Source | Destination | Category canonical | Slug | Asset folder | Home image path | Detail page path | Home role | Case study readiness |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | Welnest | wst | Digital system | 2025 | Real estate | Course work | Work | Digital Systems | welnest | assets/img/projects/wst/ | assets/img/projects/wst/wst-home.webp | works/welnest.html | Not on Home v1 | Level 1 |
| 1 | New World Design System | nds | Digital system | 2025 | Design System | Course work | Work | Digital Systems | new-world-design-system | assets/img/projects/nds/ | assets/img/projects/nds/nds-home.webp | works/new-world-design-system.html | Home card, Service and Digital | Level 1-2 |
| 1 | Who's Singing OuTūīside? | wso | Digital system | 2025 | Infographic, Data Visualization | Course work | Work | Digital Systems | whos-singing-outu-side | assets/img/projects/wso/ | assets/img/projects/wso/wso-home.webp | works/whos-singing-outu-side.html | Not on Home v1 | Level 1 |
| 2 | Rekraft | rkt | Digital system | 2025 | Te Ao Māori, Sustainable | Course work | Work | Digital Systems | rekraft | assets/img/projects/rkt/ | assets/img/projects/rkt/rkt-home.webp | works/rekraft.html | Not on Home v1 | Level 1 |
| 1 | Voting Starter Kit | vsk | Digital system | 2025 | Community | Course work | Work | Digital Systems | voting-starter-kit | assets/img/projects/vsk/ | assets/img/projects/vsk/vsk-home.webp | works/voting-starter-kit.html | Not on Home v1 | Level 1 |
| 1 | Accessibility support hub | ash | Digital system | 2025-2026 | Service design | Course work | Work | Digital Systems | accessibility-support-hub | assets/img/projects/ash/ | assets/img/projects/ash/ash-home.webp | works/accessibility-support-hub.html | Home card, Service and Digital | Level 1-2 |
| 1 | Studier | std | Digital system | 2025 | Dashboard, Product Design | Course work | Work | Digital Systems | studier | assets/img/projects/std/ | assets/img/projects/std/std-home.webp | works/studier.html | Home card, Service and Digital | Level 1, needs outline |
| 1 | Victim hub | vth | Digital system | 2026 | Service design | Professional Work | Work | Digital Systems | victim-hub | assets/img/projects/vth/ | assets/img/projects/vth/vth-home.webp | works/victim-hub.html | Lead project | Level 2-3 |
| 1 | Guangzhou Baiyun International Airport Terminal 2 | bt2 | Spatial system | 2014-2018 | Transportation | Professional Work | Work | Spatial Systems | guangzhou-baiyun-t2 | assets/img/projects/bt2/ | assets/img/projects/bt2/bt2-home.webp | works/guangzhou-baiyun-t2.html | Home card, Spatial Systems | Level 1-2 |
| 1 | East Campus of Shantou University and AYG Venue | ayg | Spatial system | 2019-2022 | Sports | Professional Work | Work | Spatial Systems | shantou-ayg | assets/img/projects/ayg/ | assets/img/projects/ayg/ayg-home.webp | works/shantou-ayg.html | Home card, Spatial Systems | Level 1-2 |
| 1 | Oppein Headquarters Building | opi | Spatial system | 2016-2021 | Office | Professional Work | Work | Spatial Systems | oppein-headquarters | assets/img/projects/opi/ | assets/img/projects/opi/opi-home.webp | works/oppein-headquarters.html | Not on Home v1 | Level 1 |
| 2 | Guangzhou Football Park | gfp | Spatial system | 2022-now | Sports | Professional Work | Work | Spatial Systems | guangzhou-football-park | assets/img/projects/gfp/ | assets/img/projects/gfp/gfp-home.webp | works/guangzhou-football-park.html | Not on Home v1 | Level 1 |
| 2 | Great Bay Area Science Hall | gsh | Spatial system | 2022-2025 | Exhibition and Conference | Professional Work | Work | Spatial Systems | great-bay-area-science-hall | assets/img/projects/gsh/ | assets/img/projects/gsh/gsh-home.webp | works/great-bay-area-science-hall.html | Not on Home v1 | Level 1 |
| 2 | Shenzhen Reform and Opening-up Exhibition Hall | srh | Spatial system | 2020 | Culture | Professional Work | Work | Spatial Systems | shenzhen-reform-exhibition-hall | assets/img/projects/srh/ | assets/img/projects/srh/srh-home.webp | works/shenzhen-reform-exhibition-hall.html | Not on Home v1 | Level 1 |
| 2 | Nanning Wuxu International Airport Terminal 3 | nt3 | Spatial system | 2021 | Transportation | Professional Work | Work | Spatial Systems | nanning-wuxu-t3 | assets/img/projects/nt3/ | assets/img/projects/nt3/nt3-home.webp | works/nanning-wuxu-t3.html | Not on Home v1 | Level 1 |
| 2 | Poly Yuzhu Apartment and Commercial Street | pyz | Spatial system | 2022-now | Residence and Commercial | Professional Work | Work | Spatial Systems | poly-yuzhu | assets/img/projects/pyz/ | assets/img/projects/pyz/pyz-home.webp | works/poly-yuzhu.html | Not on Home v1 | Level 1 |
| 2 | Henex website | hnx | Digital system | 2026 | Portfolio | Professional Work | Work | Digital Systems | henex-website | assets/img/projects/hnx/ | assets/img/projects/hnx/hnx-home.webp | works/henex-website.html | Works only for now | Level 2, process archive available |


## Sheet: Home Scenarios

Carried forward from v1. No changes.

| Scenario | Group | Order | Project | Short name | Display label | Reason | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Recommended | Lead | 1 | Victim Hub | vth | Featured Work, Service Systems | Public sector service improvement with strongest evidence chain |  |
| Recommended | Service and Digital | 1 | Accessibility Support Hub | ash | Service Systems | Service pathway design |  |
| Recommended | Service and Digital | 2 | Studier | std | Digital Systems | Product and dashboard relevance |  |
| Recommended | Service and Digital | 3 | New World Design System | nds | Digital Systems | Design system evidence |  |
| Recommended | Spatial Systems | 1 | Guangzhou Baiyun T2 | bt2 | Spatial Systems | Shows large-scale spatial and delivery credibility |  |
| Recommended | Spatial Systems | 2 | Shantou AYG Venue | ayg | Spatial Systems | Shows campus, venue and spatial systems coordination |  |
| Alternative Digital Focus | Lead | 1 | Victim Hub | vth | Featured Work, Service Systems | Strongest public sector and evidence-informed lead case |  |
| Alternative Digital Focus | Digital Systems | 1 | Studier | std | Digital Systems | Product and dashboard relevance |  |
| Alternative Digital Focus | Digital Systems | 2 | New World Design System | nds | Digital Systems | Design system evidence |  |
| Alternative Digital Focus | Digital Systems | 3 | Who's Singing OuTūīside | wso | Digital Systems | Data visualisation and public communication range |  |
| Alternative Digital Focus | Spatial Systems | 1 | Guangzhou Baiyun T2 | bt2 | Spatial Systems | Spatial and delivery credibility |  |
| Alternative Digital Focus | Spatial Systems | 2 | Shantou AYG Venue | ayg | Spatial Systems | Campus and venue systems |  |


## Sheet: Tag System

Carried forward from v1. No changes.

| Tag group | Tag | Definition | Recommended use | Display on Home | Notes |
| --- | --- | --- | --- | --- | --- |
| Primary Category | Service Systems | Public-facing service, support, civic or accessibility work where people need to understand, access or act within a system | Works category and possible Home grouping | Yes | Final primary category |
| Primary Category | Digital Systems | Digital products, dashboards, design systems, websites, data visualisation and interface systems | Works category and possible Home grouping | Yes | Final primary category |
| Primary Category | Spatial Systems | Architecture, spatial strategy, planning, transport, campus, workplace and complex spatial delivery | Works category and possible Home grouping | Yes | Final primary category |
| Future Category | Editorial Systems | Publication, content strategy, portfolio curation, book planning, information design and visual editing systems | Future Works category | No | Future category if enough editorial projects are added |
| Capability | Information Architecture | Structuring content, navigation and task pathways | Project tags | Yes |  |
| Capability | Usability Testing | Testing and validating task success or ease | Project tags | Yes |  |
| Capability | Dashboard Design | Designing backend or dashboard interfaces | Project tags | Yes | Important for Studier |
| Capability | Design System | Reusable component and visual system work | Project tags | Yes | Important for NDS and HENEX Website |
| Capability | Complex Delivery | Managing constraints, people and systems to deliver outcomes | Project tags | Yes | Important bridge from architecture |
| Capability | Editorial Systems | Structuring editorial content into a coherent system | Project tags | No | Future editorial category |
| Capability | Content Strategy | Planning content structure, hierarchy and narrative | Project tags | No | Future editorial category |
| Capability | Publication Design | Design and planning of book or publication outputs | Project tags | No | Future editorial category |
| HENEX Dimension | Human | Identity, Perception and Agency dimension | HENEX metadata | Optional |  |
| HENEX Dimension | Emotion | Affect, Empathy and Meaning dimension | HENEX metadata | Optional |  |
| HENEX Dimension | Nature | Medium, Matter and Interface dimension | HENEX metadata | Optional |  |
| HENEX Node | Identity | How people understand self or role | HENEX node chip | Optional |  |
| HENEX Node | Perception | How people sense, read and interpret information | HENEX node chip | Optional |  |
| HENEX Node | Agency | How people decide and act | HENEX node chip | Optional |  |
| HENEX Node | Affect | How experience carries feeling | HENEX node chip | Optional |  |
| HENEX Node | Empathy | How experience supports understanding of others | HENEX node chip | Optional |  |
| HENEX Node | Meaning | How experience connects to purpose or value | HENEX node chip | Optional |  |
| HENEX Node | Medium | The channel or environment that carries interaction | HENEX node chip | Optional |  |
| HENEX Node | Matter | The material or substance of experience | HENEX node chip | Optional |  |
| HENEX Node | Interface | The boundary or surface where interaction happens | HENEX node chip | Optional |  |


## Sheet: Lab Inventory

Carried forward from v1. No changes.

| Title | Slug | Type | Phase | Status | Summary | Home entry | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lab | lab | Main page | Phase 1 | Placeholder | A space for visual experiments, artistic studies and creative ideas. | Yes | Confirmed Lab headline copy |
| New Zealand Parliament | new-zealand-parliament | Photography | 3 | Future | New Zealand Parliament visual or photographic study. | No |  |
| Nga Mokopuna | nga-mokopuna | Photography | 3 | Future | Nga Mokopuna visual or photographic study. | No |  |
| Zealandia | zealandia | Photography | 3 | Future | Zealandia visual or photographic study. | No |  |
| Wellington | wellington | Photography | 3 | Future | Wellington visual or photographic study. | No |  |


## Sheet: Image Asset Guide

Carried forward from v1. No changes.

| Asset type | Path pattern | Recommended size | Format | Notes |
| --- | --- | --- | --- | --- |
| Home project hero | assets/img/projects/{short-name}/{short-name}-home.webp | 1600-2400 px wide | WebP preferred | Use real image when available, otherwise placeholder |
| Case study hero | assets/img/projects/{short-name}/{short-name}-hero.webp | 2000-2800 px wide | WebP preferred | For top of project page |
| Case study inline | assets/img/projects/{short-name}/{short-name}-01.webp | 1200-2000 px wide | WebP preferred | Use numbered naming |
| Icon | assets/icons/henex/{icon-name}.svg | SVG viewBox tight | SVG | Already colour-exported, keep CSS variables ready for future parameter control |
