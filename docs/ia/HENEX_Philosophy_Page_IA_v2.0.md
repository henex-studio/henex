# HENEX Philosophy Page — IA and Content Structure v2
Version: 2.0
Date: 2026-06-06
Replaces: 2026-06-01_HENEX_Philosophy_Page_IA_Content_Structure_v1.md
Status: Current. Based on live philosophy.html as of 2026-06-06.
Purpose: AI context input. Covers the Philosophy page section structure, copy and content rules. Theory and framework logic are in HENEX_Framework_Theory_v1.0.md.

---

## 1. Page Role

```
Philosophy page = recipe-first framework page
Works page      = project navigation
Case study page = case-first project story
```

The Philosophy page explains the HENEX framework and method recipes. Case studies stay focused on the project and use recipe tags as backlinks to this page. A case study should not explain the whole HENEX framework.

Example backlink format:
```
R24 Trust & Cooperation Rules → philosophy.html#r24
```

---

## 2. Page-Level Positioning

**Page scope:** Services, digital products and built environments (spatial systems). Editorial and content systems are in mapping files for future expansion, not foregrounded in this version.

**Hero CTA logic:** Do not use "Explore the recipes" in the hero. Recipes have not been introduced yet at that point. Use "Explore the framework" instead, linking to `#framework`.

---

## 3. Confirmed Section Structure (Live)

Six narrative sections, matching the live philosophy.html:

```
1. Hero — A framework distilled from practice.
2. Core idea — Design as relational work.
3. Framework structure — Three dimensions of every design relationship.
4. Nodes — Nine nodes for locating relational needs.
5. Method logic — From node relationships to recipes. (includes recipe library)
6. Selected work — How recipes return to practice.
```

---

## 4. Section 1 — Hero

**Kicker:** Philosophy
**H1:** A framework distilled from practice.
**Lead:**
> HENEX is my working framework for reading and shaping design relationships across services, digital products and built environments. It helps me move from observation to method, and from method to work that can be tested, delivered and used.

**CTAs:**
- Primary: "Explore the framework" → `#framework`
- Outline: "View Works" → `works.html`

**Visual:** `assets/icons/henex/henex-logo-triple.svg` (aria-hidden, decorative)

---

## 5. Section 2 — Core Idea

**Kicker:** Core idea
**H2:** Design as relational work.
**Intro:**
> HENEX helps me read how relationships work, locate where relationships need support, and reorganise them into more coherent, meaningful and usable experiences.

**Formula:**
> (Human + Emotion + Nature) × Nexus = Experience

**Three relational condition cards (flip/hover):**

| Card | Label | Title | Default copy | Hover copy |
|---|---|---|---|---|
| Human (blue) | Public services | Support pathways | People may need clearer support to move forward. | HENEX reads people, support and action when a path is unclear. |
| Emotion (pink) | Digital products | Interface confidence | Interfaces may need clearer feedback and structure. | HENEX connects task logic, interaction rules and confidence. |
| Nature (green) | Built environments | Public experience | Spaces may need better context and sensory support. | HENEX connects people, material systems and operational context. |

---

## 6. Section 3 — Three Dimensions

**Kicker:** Framework structure
**H2:** Three dimensions of every design relationship.
**ID on section:** `id="framework"` (anchor target from Hero CTA)
**Intro:**
> HENEX reads design relationships through three dimensions: Human, Emotion and Nature. The three dimensions work together to describe who is involved, what is felt, and where the experience happens.

**Required page anchors:** `#human`, `#emotion`, `#nature` (Home page links to these)

**Three dimension cards (hover reveal):**

| Card | ID | H3 | Default | Hover | Nodes shown |
|---|---|---|---|---|---|
| Human | `#human` | How people understand, decide and act. | Human factors shape how people recognise roles, interpret choices and take action. | Human asks who is involved, how people understand a situation and what helps them act with confidence. | Identity, Perception, Agency |
| Emotion | `#emotion` | How experience carries feeling and meaning. | Emotional cues shape how people interpret, trust and remember an experience. | Emotion asks what is felt, where support is needed and how meaning is formed through the experience. | Affect, Empathy, Meaning |
| Nature | `#nature` | How context, matter and interface shape interaction. | Material and contextual cues shape where experience happens and how contact is made. | Nature asks what medium carries the experience, what matter gives it form and how people meet the system. | Medium, Matter, Interface |

---

## 7. Section 4 — Nine Nodes

**Kicker:** Nodes
**H2:** Nine nodes for locating relational needs.
**Intro:**
> Each node points to a place where a design relationship may need attention. A node helps locate what needs to be understood, supported or reorganised.

**Node cards (9 total, hover reveal):**

| Node | Dimension | Default copy | Hover copy (when to use) |
|---|---|---|---|
| Identity | Human | Culture, role, belonging and self understanding. | Use Identity when roles and responsibilities need to become visible. |
| Perception | Human | How people read, sense and understand information or environments. | Use Perception when clarity, hierarchy or interpretation needs improvement. |
| Agency | Human | The ability to choose, act and influence outcomes. | Use Agency when people need clearer control, next steps or decision support. |
| Affect | Emotion | The immediate feeling tone carried by an experience. | Use Affect when atmosphere, tension or first response shapes the experience. |
| Empathy | Emotion | Support, care and the need to feel understood. | Use Empathy when pressure, vulnerability or support needs must be recognised. |
| Meaning | Emotion | Value, memory and why an experience matters. | Use Meaning when interpretation gives weight to a design choice. |
| Medium | Nature | The channel or environment that carries the experience. | Use Medium when service, digital or spatial context changes engagement. |
| Matter | Nature | The material, visual or physical substance of an experience. | Use Matter when form, texture, image or condition shapes response. |
| Interface | Nature | The touchpoint where people meet a system, product or place. | Use Interface when contact points need clearer feedback or connection. |

**Icon paths:** `assets/icons/henex/node-[nodename].svg`

---

## 8. Section 5 — Recipes

**Kicker:** Method logic
**H2 (id="recipes"):** From node relationships to recipes.
**Intro:**
> A recipe brings three nodes together, one from each dimension, to describe a fuller design situation. It is a practical method for reading and reorganising a specific relationship through design.

### Recipe formation equation (static display)

Shows Agency + Empathy + Interface = R24 Trust & Cooperation Rules as the example.

### Recipe library

**Sub-kicker:** Recipe library
**H3:** A library of 27 method recipes.
**Intro:**
> The compact cards below show the full method system. Hover or focus a card to see when that recipe is useful.

**Card fields (compact):**
1. Recipe ID (R01–R27)
2. Triad label (node × node × node)
3. Recipe name
4. Default copy: what it does
5. Hover copy: "When to use" + usage context

**Card anchors:** `id="r01"` through `id="r27"`

**Full recipe copy source:** `2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.xlsx`

---

## 9. Section 6 — Selected Work

**Kicker:** Selected work
**H2:** How recipes return to practice.
**Intro:**
> Selected projects show how HENEX moves from framework to work. Each case highlights one primary recipe and the three nodes that shape the design situation.

**Three practice cards (live version):**

| Project | Category | Primary recipe | Triad nodes |
|---|---|---|---|
| NZ Police Victim Hub | Service | R24 Trust & Cooperation Rules | Agency, Empathy, Interface |
| New World Design System | Digital | R12 Calm Clarity Tuning | Perception, Affect, Interface |
| Guangzhou Baiyun T2 | Built | R11 Sensory Wayfinding Map | Perception, Affect, Matter |

> Note: ASH was in the earlier IA spec but is not in the current live page. The live page uses VTH, NDS and BT2. Update when case study pages are ready.

**Closing note:**
> If you want to see how these recipes appear inside project work, start with the selected works page and open the relevant case studies.

**CTA:** "View Works" → `works.html`

---

## 10. Phase 1 and Phase 1.5

### Phase 1 (current — live)
- Full six-section structure as above
- Static recipe library with all 27 compact cards
- R01–R27 anchors
- R24 as featured formation example
- Three selected work practice cards
- No interactive filter

### Phase 1.5 (progressive enhancement — planned)
- Node filter chips on recipe library
- Live counter: "Showing X of 27"
- Click recipe to update detail panel
- Related works update with selected recipe
- Reset filters
- Keyboard accessible interaction

---

## 11. Data Source Rules

| Sheet | Use |
|---|---|
| Recipe_Card_Copy | Recipe grid and expanded recipe details |
| Project_Recipe_Map | Selected work cards |
| Project_Recipe_Matrix | Future filters and backlinks |
| Recipe_Coverage | Recipe-to-work relationship checks |

Primary file: `2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.xlsx`

---

## 12. Key Content Rules

1. Hero CTA: use "Explore the framework", not "Explore the recipes".
2. No internal abbreviations in public-facing text (not "ASH", "VTH", "NDS", "BT2").
3. Architecture examples use spatial thinking language, not forced UX language.
4. Recipe tags in case studies link back to Philosophy with `philosophy.html#r##` format.
5. Case studies do not re-explain the full HENEX framework.

---

## Glossary

| Term | Meaning |
|---|---|
| Section kicker | Small label above a heading, e.g. "Philosophy", "Core idea" |
| Hover reveal / text-stage | Two-state copy pattern: default text shown at rest, hover/focus reveals second copy |
| Practice card | Work card in Section 6, showing project + primary recipe + triad nodes |
| Recipe formation | Visual equation showing how three nodes combine to make one recipe |
| Phase 1.5 | Planned progressive enhancement layer on top of Phase 1 static build |
| Triad | The three nodes (one per dimension) that form a recipe |
| Backlink | A link from a case study back to a specific recipe anchor on the Philosophy page |
