# Fevnote Case Study Content Mapping v1

**Created:** 2026-10-07
**Status:** FINAL, approved by Cafe 2026-10-07. Ready for build.
**Authority:** `docs/specs/UX_Case_Master_Template_Spec_v1.md` (content v2.0)
**Page:** `works/fevnote.html` (new, built natively on the master template, no retrofit needed)
**Category:** Digital Systems. Public page, no password.

## 0. Source material

All content below is drawn from the Fevnote project folder (`Desktop/Work/Fevnote`). Nothing here is invented. Where evidence is missing, the gap is marked **[GAP]** and listed again in Section 6.

| Source | Location | Used for |
|---|---|---|
| MVP Specification v1.0 | `Fevnote/下载 Family Fever Record MVP Specification v1.0.md` | Original problem framing, Research |
| MVP Specification v2.0 | `Fevnote/code/fevnote/docs/specification.md` | Problem, scope, medical boundaries, v1 to v2 changes |
| Build Log | `Fevnote/code/fevnote/docs/BUILD-LOG.md` | Design decisions, testing findings, spec overrides, Delivery |
| Git history | `Fevnote/code/fevnote` (105 commits, 2026-08-08 to 2026-08-29) | Timeline, before/after screenshots |
| Cafe's own account | This session, 2026-10-07 | Real fever episode use, GP review |
| Screenshots | `Fevnote/case-study-assets/screenshots/` | All imagery (fixture data, fictional child "Sam") |

Evidence rule for this page: Fevnote had no formal usability study. Validation comes from Cafe using the app during his own child's fever, same-day real-device testing during the build, and one GP consultation using Doctor View. The copy must say exactly that, never "usability testing" or "user research".

## 1. Positioning

**Narrative lead:** UX. Designing for a parent at 3am, one hand, no keyboard, inside strict medical boundaries.
**Supporting thread:** an independent product, designed and developed by Cafe alone, that reached a live, invite-only release in about three weeks. This thread sits in Meta and Delivery so it supports the UX story instead of competing with Studier, which is also a self-built product.

**One-line summary (draft):** A fever log for parents that records a reading in seconds, keeps every moment of care on one timestamp, and turns a sleepless night into one clear summary for the doctor.

## 2. Section map

Tone ladder verified for adjacency: Hero, Overview S, Background P, Problem L, HMW D, Solution S, Outcome D, In Use L (Feedback slot), Process D, Research S, Design L, Validation S, Delivery D, Reflection P, Recipe L, Related neutral. Four D moments (HMW, Outcome, Process, Delivery), within the Section 3.3 limit. Contribution does not apply: Fevnote is a solo project (Cafe, 2026-10-07). Without Contribution, Outcome D and Process D would sit next to each other, so the Feedback slot is kept as a short L section (see 2.8). This matches the Welnest and NDS pattern, where an L section sits between Outcome and Process.

### 2.1 Hero

Title: Fevnote. Tags: Product Design, Health, PWA.
Summary: the one-line summary from Section 1.
Primary CTA: "Visit Fevnote" linking to https://fevnote.henex.uk (confirmed by Cafe, 2026-10-07). Registration is invite-only, so visitors reach the login page and the pre-registration "How Fevnote works" guide.
Secondary CTA: "Explore the process" (anchor to #process).
Visual: frosted dual-bloom standard (Spec 7.1). Phone mockups of `fev-after-current.png` and `fev-after-doctor-full.png` are optional.

### 2.2 Overview and Meta (S)

Paragraph: Fevnote helps parents record temperature, medicine and how a child is doing during a fever, then review the whole illness as one timeline and one chart. It is built for night use and makes no medical judgement.

| Meta | Value |
|---|---|
| Client | Self-initiated product |
| Timeline | August 2026, about three weeks from first commit to v0.9 |
| Role | Independent designer and developer (product, UX/UI, build) |
| Team | Solo |
| Tools | Claude, React, Vite, Supabase, Vercel, Chart.js. No Figma: the interface was designed directly in code and tested on device |
| Skills | Product strategy, interaction design, information design, design systems, accessibility, privacy by design |

### 2.3 Background (P)

Source: Spec v1.0 sections 1.1 to 1.4, v2.0 section 1.3.
Content: during a child's fever, parents track readings and doses through notes, messages and memory. At night this means typing in the dark, information split between two parents, doubt about when the last dose was given, and a hard conversation with the doctor afterwards.
Asset: none needed. Text only, or text with the app icon.

### 2.4 Problem (L) and HMW (D)

Problem cards (four, from Spec v2.0 section 1.3, condensed):
1. Recording at night takes too much typing.
2. Records end up fragmented or incomplete.
3. Parents lose track of when each medicine was last given.
4. The illness is hard to explain clearly to a doctor.

HMW interlude (draft): "How might we let a tired parent record a fever **in seconds, one-handed, in the dark**, and still hand the doctor **one clear story** of the illness?"

### 2.5 Solution (S)

Three pillars, each one card with an icon:
1. **One moment, one record.** Temperature, medicine, condition and note are saved together under a single time.
2. **No keyboard for the common case.** Scroll wheels for temperature and dose. The keyboard only opens for an optional note.
3. **Facts, not advice.** The app shows what was recorded and how long ago. It never says whether to give medicine or whether a reading is dangerous.

### 2.6 Outcome (D)

Scope: the product result only. Real-world use belongs to In Use (2.8), so the two sections never repeat each other (Cafe, 2026-10-07).
Heading draft: "Live, and ready for the next fever."
Media: `fev-after-current.png` (light) with `fev-after-current-dark.png`, plus `fev-after-doctor-full.png`.
Copy points, all verified:
1. Live at fevnote.henex.uk as an installable web app, currently v0.9 in invite-only testing.
2. What ships: one-tap recording moments, a timeline and chart of the whole illness, Doctor View with print and PDF, light and dark themes, several children per account.
No numeric metrics. None were measured, so none are claimed.

### 2.7 Contribution (not used)

Fevnote was designed and developed by Cafe alone, so the Contribution section does not apply. Spec section 1 limits it to team projects.

### 2.8 In Use (L, Feedback slot), confirmed by Cafe 2026-10-07

Short section, text with one image. Title draft: "Tested where it matters."
Content: Cafe used Fevnote through his own child's fever, then opened Doctor View at the GP visit. The GP could follow the whole course of the illness from the summary, which is the outcome the spec set as its own success measure (Spec v2.0 section 21). Written in first person as Cafe's own account, not as a quote, because no words were recorded. "My child" is allowed. The child's name and any real recorded data are never shown.
Asset: `fev-after-doctor-full.png` cropped to the summary and chart.
The LinkedIn tester call produced no sign-ups and is not mentioned here.
Outcome (2.6) then keeps the product result and the live status, and this section carries the real-world evidence.

### 2.9 Process (D)

Four navigation cards: Research, Design, Validation, Delivery. One-line summary each.

### 2.10 Research (S)

Retitled in copy as problem framing, because no interviews or studies took place.
Content:
1. **Lived problem and constraints.** Night use, one hand, two parents on two phones, a doctor at the end.
2. **Medical boundaries set before any screen.** No dose advice, no safe or dangerous labels, elapsed time shown as plain fact with no colour or threshold (Spec v2.0 section 3).
3. **Specification v1 to v2.** Scope was cut before the build started: no undo, no realtime sync, one temperature wheel instead of two, Doctor View printed through the browser instead of a PDF library. Shown as a compact before/after list, five items maximum.
Influence block: "Constraints first meant the first build was small enough to test on the same day."

### 2.11 Design (L)

The core chapter. Five sub-blocks, the first one visible and the rest behind Read more.

1. **Three buttons became one record (lead story).** Before: Temperature, Medicine and Note were separate actions, each stamped with its own time. In real use a parent measures, fetches medicine, gives it and writes a note over several minutes, so one moment of care became three timestamps, and the record could not answer the key question: what was the temperature when the medicine was given. After: one Add Record form with a single "Recorded at" time. A first version with collapsible sections was rejected because every reveal step costs time at night. The form was flattened so time, temperature and medicine are directly usable. Temperature then became required, because a reading is always taken. Assets: `fev-before-current.png`, `fev-before-med-sheet.png`, `fev-after-record-form.png`.
2. **The list that shows cause and effect.** The recent readings list went through three shapes: temperature only, temperature and medicine as separate rows, and finally one row per moment (time, temperature, medicine). The separate-row version was rejected because it hid the link between a dose and the reading. Recent readings and the full timeline were then merged into one component with a Show more toggle. Asset: `fev-after-current.png` (timeline rows).
3. **A chart that informs without alarming.** A shaded band marks the typical range 36.1 to 37.2°C, sourced from Mayo Clinic and checked against the original page. It uses a neutral tint, not traffic-light colours. The vertical axis keeps a minimum span so a small change is never drawn as a dramatic curve. Only the highest, lowest and latest readings are labelled, after labelling every point felt cluttered. Asset: chart crop from `fev-after-current-full.png`.
4. **One-handed input.** Scroll wheels built on native scroll snapping. Real-device testing found the wheel was capturing page scroll, so its touch area was narrowed to the centre column.
5. **A calm visual system.** The coral palette comes from the app icon, following the brief "warm, soft, comfortable, relaxed". An early orange button passed contrast numerically but read poorly because text and background shared one hue, so it moved to black text. Header controls were regrouped after mis-taps, and a five-tier rule now decides whether a control is a button or a text link. Assets: `fev-after-current-dark.png`, icon.

### 2.12 Validation (S)

Format: the lighter "live verification" variant allowed by Spec section 1 (Chapter 2 table).
Content:
1. **Same-day real-device testing.** Each build was tried on a phone within hours. Findings drove the redesigns in 2.11 (unified record, list shape, header mis-taps, wheel scroll capture, contrast).
2. **A real fever.** Cafe used Fevnote through his own child's illness.
3. **The doctor test.** The GP followed the illness from Doctor View, the scenario the whole product was designed for. Cross-reference 2.8 rather than repeating it.
4. **Security verified, not assumed.** Database access rules were tested inside the database (owner sees their rows, anonymous visitors see none), after a first check was found to prove nothing.
Plain statement in copy: no formal usability study has been run yet, and broader testing with other parents is the next step.

### 2.13 Delivery (D)

Content:
1. **Doctor View.** A read-only summary of child details, record summary, chart and the full timeline, with print and save-as-PDF through the browser. Asset: `fev-after-doctor-full.png`.
2. **From family tool to invite-only product.** Invite-code registration, several children per account, privacy policy with recorded consent, data export, account deletion, and a read-only admin panel that cannot see any child's name or recorded values.
3. **Installable web app.** Home-screen install on iPhone and Android, light and dark themes, an onboarding guide built from real screens.
4. **The build log as handover.** Every decision and every spec override is recorded with its reason. A short excerpt of "Decisions that override the specification" makes a strong closing visual.
Live link card to fevnote.henex.uk.

### 2.14 Reflection (P), "Looking back, looking forward."

**Value:** A small product, scoped hard, that did its job in a real illness and at a real GP visit.
**Learned:** Testing in real conditions changed the core interaction within hours, which no amount of spec writing had predicted. A colour pair can also pass a contrast ratio and still be hard to read when both colours share one hue, so contrast is now checked by eye as well as by number.
The privacy policy change is deliberately left out of the public page (Cafe, 2026-10-07).
**Next:** Testing with other parents beyond his own family, a re-consent flow when the privacy policy changes, offline saving, and photo-to-record scanning (deferred).

### 2.15 HENEX Recipe (L)

Confirmed by Cafe, 2026-10-07.
Primary: **R12 · Calm Clarity Tuning** (Perception × Affect × Interface). Reduce cognitive load while keeping the experience calm. It covers the 3am brief, the soft palette and the chart that informs without alarming.
Secondary: **R21 · Small Step Actions** (a full record in a few taps), **R13 · Multiple Viewpoint Story** (the same data shaped for a parent and for a doctor), **R24 · Trust & Cooperation Rules** (medical boundaries and privacy commitments).
R12 is also NDS's primary recipe. The rules allow a shared primary, and R12 fits Fevnote better than any alternative.

### 2.16 Related Projects

Digital Systems first: Studier, Accessibility Support Hub, Victim Hub, Welnest. Back to works button bottom right.

## 3. Colour

Confirmed by Cafe, 2026-10-07: palette B from `docs/reference/fevnote-palette-preview.html`.
Primary: `#AF4941` (deep brick red from Fevnote's own palette). White text on it measures 5.45:1.
Secondary: `#F5847A` (Fevnote's coral). It fails as small text on white (2.48:1), so it is used only for decoration such as the hero bloom. Kickers and emphasis use ink tokens.
Derived tokens as used in the preview: soft `#DA7468`, pale `#FCF0EE`, tone S `linear-gradient(150deg, #F6DAD6, #F9E4E1 58%, #FCEEEC)`, tone P `linear-gradient(145deg, #FDF4F3, #F0CBC6 82%)`, emphasis `linear-gradient(135deg, #7E2F29, #933832 60%, #86322C)`, alert ink `#FFC6BE`, accent ink `#AF4941`, strong ink `#92372F`. Dark mode follows the mandatory Spec 2.4 overrides, with accent ink `color-mix(in srgb, #F5847A 70%, white)`.

## 4. Asset inventory

All screenshots use fixture data for a fictional child ("Sam"). No real data appears anywhere.

| File | Shows | Section |
|---|---|---|
| fev-before-current.png | Old home screen with three separate record buttons (commit b67c03a) | Design 1 |
| fev-before-temp-sheet.png | Old separate temperature sheet | Design 1 (optional) |
| fev-before-med-sheet.png | Old separate medicine sheet | Design 1 |
| fev-after-record-form.png | Unified Add Record form | Design 1 |
| fev-after-current.png | Current screen, grouped moments | Outcome, Design 2 |
| fev-after-current-full.png | Full current screen | Design 3 |
| fev-after-current-dark.png | Dark mode | Outcome, Design 5 |
| fev-after-doctor-full.png | Doctor View | Outcome, Delivery 1 |
| fevnote-icon-new.svg | App icon | Background or Design 5 |

Still needed: a hero image or composite, an optional chart crop, an optional build log excerpt image. All go to R2 under `/projects/fev/`.
Known issue: in the current app, chart labels at the right edge are clipped ("38.6°", "P 5.0ml"). This is a real Fevnote defect. Cafe decided not to fix it for now, so chart crops must avoid the right edge.

## 5. Build checklist (after this mapping is approved)

1. `works/fevnote.html` and `assets/css/fev.css` (token pattern, mandatory dark overrides per Spec 2.4). Note for the build: Spec 2.2's colour table should gain a Fevnote row.
2. Images uploaded to R2 `/projects/fev/`.
3. `works.html` card, `works-chronology.html` entry.
4. Related sections on 2 to 3 Digital Systems pages updated to include Fevnote.
5. IA Content Workbook Project Inventory row (short name `fev`).
6. Recipe mapping file updated with the confirmed recipes.
7. Self-audit per Spec 13.8, then Cafe's light and dark walkthrough.

## 6. Open items for Cafe

Resolved 2026-10-07: no Contribution section, no visitor access, "my child" allowed with no name or real data, no Figma, recipe recommendation accepted as default, app red palette for colour, chart bug left unfixed.

Resolved later on 2026-10-07: the app link is allowed on the page, the privacy point is left out, the recipe is confirmed.

Resolved: section sequence option 2 (Outcome D, In Use L, Process D), from `docs/reference/fevnote-sequence-preview.html`.

No open items.
