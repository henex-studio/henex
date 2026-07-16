# VTH v2 Phase 4 — Handover Document

**Created:** 2026-07-07
**Purpose:** Provide complete context for a new session to rebuild the VTH v2 page from scratch, after two failed attempts in the previous session.
**Status:** Phase 4 rolled back. No v2 files remain in the repo. Start fresh from production `works/victim-hub.html`.

---

## 1. Standard Hierarchy (Critical — Read This First)

The standard hierarchy, from highest to lowest authority:

1. **Master Template Spec** (`docs/specs/UX_Case_Master_Template_Spec_v1.md`) — THE design system standard. Defines narrative structure, color system, background tiers, layout patterns, card types, typography, hero, recipe, related projects, dark mode, responsive rules.
2. **Content Mapping Table** (`docs/ia/UX_Case_Content_Mapping_Table_v1.md`) — Section 1 (VTH) maps every reference page section to a master template slot with confirmed content assignments.
3. **Production page** (`works/victim-hub.html`) — The working baseline. All real R2 asset URLs, CSS linking, modal system, recipe popovers are here. Start from this file.
4. **Reference page** (`docs/reference/10-Project introduction_portfolio-case-study_refined_visualfix_no-glow.html`) — ONE input for visual details (icon mappings, hi-fi shell component, numbered kickers). NOT the visual standard. The spec overrides it where they differ.

**The previous session's critical error:** Claude said "以参考页面为视觉标准" (reference page as visual standard). This is WRONG. The spec files are the standard. The reference page is an input.

---

## 2. Build Approach

Start from the production `works/victim-hub.html` and apply ONLY the confirmed changes from the spec + content mapping. Do not invent, do not add things not discussed. Where uncertain, ask Cafe.

**CSS architecture:** `global.css` → `ux-case-study.css` → `vth.css` → `vth-v2.css` (new, v2-only additions). The v2 CSS file loads ONLY on the preview page. It does not modify `vth.css` or any shared file.

**Key principle:** "有疑问的地方，问我，不要自作主张。" (Where there are questions, ask me, don't act on your own initiative.)

---

## 3. Confirmed Changes (Apply These)

### 3.1 Section Structure Changes (from Content Mapping Table)

| Change | Detail |
|--------|--------|
| **Background** | Keep text + `current-site.png` image only. DROP the 3 cards (Fragmented content, Internal structure, Unclear next steps) — they move to Problem. |
| **Problem** | Gets: live page's HMW statement + the 3 cards from Background. Use the live page's Problem copy (two paragraphs). Place 3 cards below HMW. |
| **Solution** (NEW section) | Reference page's "Problem(03)" content becomes Solution. Title reframed: "A strategy built on guidance, resonance and confidence". Keep the 3 cards (Guidance/Resonance/Confidence) with Tabler icons. Influence line needs rewording (see Section 5). |
| **Outcome** | Only the walkthrough video. Everything else (hi-fi, 4 handover cards) moves to Delivery. |
| **"My role" → "Contribution"** | Kicker changes to "Contribution". Reshape 6 flat cards into 1-2 labelled role cards (Research/IA/Content Lead + Governance/Delivery Lead). |
| **Screencast** | Folds into Outcome. Kicker becomes "Outcome", not "Screencast". |
| **Process** (NEW section) | Chapter 2 opener with 4 clickable nav cards (Research, Design, Validation, Delivery). |
| **Delivery** | Consolidates: hi-fi prototype + 4 handover cards (from old Outcome) + Key decisions + Go-live/BAU. Three sub-blocks: D→L/P→N backgrounds. |
| **Reflection** | Kicker/heading unified to "Looking back, looking forward." |
| **Recipe** | Add "Secondary Recipe" label. Keep existing two-col layout from production. |

### 3.2 Color and Styling Changes

| Change | Detail |
|--------|--------|
| **`--ux-secondary`** | Add `--ux-secondary: var(--vth-red)` to `.ux-case-page--victim-hub`. VTH red is `#B30D0D`. |
| **Section kicker colors** | ALL section kickers use `var(--ux-secondary)` (red). Add `.ux-stack-head > .ux-kicker { color: var(--ux-secondary); }` for vertical-stack sections. |
| **Meta label colors** | CLIENT/ROLE/TEAM etc. labels use `var(--ux-primary)` per Spec Section 6.2. |
| **Hero buttons** | Primary: "View outcome" (scrolls to Outcome). Secondary: "View prototype" (scrolls to Delivery). Remove "Back to Works" from hero (it's in Related section). |
| **Background tiers** | Implement 4-tier system (N/L/P/D). Adjacent sections must not share the same tier. See Spec Section 3 for defaults. |
| **Recipe kicker** | Uses `var(--ux-secondary)` (red) for VTH. |
| **Related kicker** | Always global neutral, never themed. |

### 3.3 Icon Cards — Use Tabler Webfont Icons

The production site already loads `@tabler/icons-webfont@3.31.0`. Use `<i class="ti ti-{name}">` format.

**Solution cards (from reference page Problem section):**
- Guidance → `ti-sign-right`
- Resonance → `ti-message`
- Confidence → `ti-sparkles`

**Design Principles (from reference page, 9 cards):**
- Signal Direction → `ti-sign-right`
- Speak Victim → `ti-message`
- Reveal Paths → `ti-sitemap`
- Greet First → `ti-users`
- Set Expectations → `ti-message-check`
- Define Boundaries → `ti-shield-check`
- Enable Scanning → `ti-scan`
- Build Familiarity → `ti-layout-grid`
- Invite Action → `ti-send`

**IA categories (from reference page):**
- Understand → `ti-help-circle`
- Act → `ti-send`
- Stay informed → `ti-shield-check`

### 3.4 Hi-Fi Prototype Embed

URL: `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/08-High-fidelity%20prototype_v4.0.html`

This is an interactive iframe embed in the Delivery section (sub-block 1, Tier D). The reference page has a `.hifi-shell` component with tabs — replicate that pattern with tabs for "Hub entry" and "Information page".

### 3.5 IA Diagram

Use the REAL production image: `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/ia-structure.png`

Do NOT create a simplified SVG. The production page already has this wired up with a modal zoom.

---

## 4. Things That Must NOT Change

| Item | Reason |
|------|--------|
| Recipe layout | Production uses `ux-two-col` (1/3 left, 2/3 right). Spec Section 8.1 confirms this. Do not change to vertical stack. |
| Related Projects section | Global system section, carry over as-is from production. |
| Modal system | Already wired in production with `data-modal-src` pattern. Keep. |
| Recipe popovers | Already wired in production. Keep. |
| Corner radius values | Keep current site values (`--ux-radius`). New tokens (pill/card/media/button) are deferred to a later sitewide pass (Spec Section 5). |
| CSS 3-layer architecture | `global.css` → `ux-case-study.css` → `vth.css`. v2 additions go in a separate `vth-v2.css`. |
| All existing R2 asset URLs | Production page has all correct URLs. Don't change or lose them. |
| Go-live images | `go-live-map.png` and other images in the BAU section must remain. |

---

## 5. Open Copy Task

The VTH Solution section's Influence line needs rewording. Current text (from reference page): "This reframed the work from a page refresh into an information architecture, language and confidence problem."

This was problem-framing language but the content moved to Solution. Needs rewording to describe what the solution direction shaped. Exact wording to be confirmed with Cafe during the Phase 4 build.

---

## 6. Errors From Previous Attempts (Do Not Repeat)

1. **Hero buttons not updated** — Still said "View Screencast" / "Back to Works" instead of "View outcome" / "View prototype".
2. **Kicker colors inconsistent** — Not all section kickers used secondary/red.
3. **Meta label colors not themed** — CLIENT/ROLE/TEAM labels were not `var(--ux-primary)`.
4. **"My role" not renamed** — Should be "Contribution".
5. **IA diagram replaced with made-up SVG** — Must use the real `ia-structure.png`.
6. **Icon cards used wrong icons** — Used custom inline SVGs instead of Tabler webfont icons from reference page.
7. **Go-live images missing** — `go-live-map.png` not displayed.
8. **Recipe layout changed** — Changed from `ux-two-col` to vertical stack without authorization.
9. **Unauthorized visual changes** — Multiple elements changed that were not in the spec or content mapping.
10. **Standard hierarchy confused** — Treated reference page as THE standard instead of the spec files.
11. **Language rule violation** — Used English for working discussions instead of Chinese.

---

## 7. Key File Paths

| File | Purpose |
|------|---------|
| `docs/specs/UX_Case_Master_Template_Spec_v1.md` | THE standard |
| `docs/ia/UX_Case_Content_Mapping_Table_v1.md` | Content mapping (VTH = Section 1) |
| `docs/HENEX_Project_Execution_Plan.md` | Project progress tracker |
| `works/victim-hub.html` | Production page (BUILD BASE) |
| `assets/css/vth.css` | Production VTH CSS |
| `assets/css/ux-case-study.css` | Shared template CSS |
| `assets/css/global.css` | Global tokens and base styles |
| `docs/reference/10-Project introduction_portfolio-case-study_refined_visualfix_no-glow.html` | Reference page (input, not standard) |

---

## 8. Working Rules

1. Use Chinese for all working discussions, clarifications, planning, progress summaries. English only for formal outputs (code, spec documents).
2. Ask when uncertain. Do not guess. Do not invent.
3. When revising one section, only revise that section.
4. Raise risks and disagreements proactively.
5. Before starting any task, state a model recommendation (Sonnet for build, Sonnet+thinking or Opus for audit, Opus+thinking for planning).
6. Treat uploaded files and approved documents as the primary knowledge base.
