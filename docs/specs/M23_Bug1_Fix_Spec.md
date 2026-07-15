# M2/M3 Bug1 Fix Spec

**Version:** draft 1, for approval
**Created:** 2026-07-15
**Scope:** NDS, RKT, VSK, WST (the four M-2 and M-3 pages)
**Source:** Cafe's `Bug1.docx`, a full light walkthrough of all four rebuilt pages, 53 annotated screenshots.
**Status:** Specification only. No code has changed. Approve or amend each item before the build round starts.

---

## How to read this

Items are grouped into common issues that span several pages, then per page. Each item states where it happens, the root cause where I have confirmed one, the fix, and the files it touches. Colour values and two structural calls need your decision and sit in Part F. Nothing here is coded yet.

I already traced the harder defects to their real cause in the CSS rather than guessing, so most items below are ready to build once you confirm the colours.

---

## Part A. Common issues

These repeat across pages. Cafe asked that they be recorded as recurring so they do not come back on later pages. I checked the already shipped pages (ASH, STD, VTH v2) for each one, and noted whether they are affected.

### CA1. Feedback kicker must read "Feedback", not "Course Feedback"

Where: NDS, RKT, VSK, WST. All four currently render `Course Feedback` as the kicker.
Shipped pages: ASH and STD have no Feedback section, VTH v2 does not use this label, so they are clean.
Fix: change the kicker text to `Feedback` on all four pages. The section heading and cards stay as they are.
Files: the four HTML files.

### CA2. Reflection heading consistency (resolved)

Where: NDS, RKT, VSK, WST. Cafe circled the Reflection H2 on each and asked for consistency with the completed pages.
Finding: the kicker already reads `Reflection` everywhere, and the three cards already read Value, Learned, Next everywhere, so structure is already unified. Only the H2 wording differed.
Decision, confirmed by Cafe: all four pages use the ASH wording, `Looking back, looking forward.`, as the single standard. Update the Reflection H2 on NDS, RKT, VSK and WST to this line.
Files: the four HTML files.

### CA3. Influence block belongs at the end of its sub-section

Where: called out on RKT and WST, and it is the general rule. An Influence block should always sit as the last element of the sub-section it belongs to, after the evidence it comments on.
Fix: audit every Influence block on the four pages and move any that sits mid-section to the end of that sub-section. On VSK the Influence block under the prototype must also span full width, see V7.
Files: the four HTML files, plus a width rule check in the four CSS files.

### CA4. Design System sub-block title and text style must be unified

Where: NDS, RKT, VSK, WST all style the Design System sub-block titles and body text differently.
Fix: standardise every Design System sub-block to the VTH pattern, one title plus one paragraph, no kicker, with a single shared type size and spacing. The title uses each page's own theme colour. This means dropping the kicker line inside these sub-blocks where one exists and matching VTH's heading size and margin values.
Shipped pages: VTH v2 is the reference, no change. ASH and STD Design sections should be checked against the same values so the standard truly holds, this is a light verification not a rebuild.
Files: the four CSS files, small HTML edits where a kicker line is removed.

### CA5. Recipe tags must sit close to the recipe name

Where: flagged on NDS. Cafe asked to check every already changed case for the same gap and fix them together.
Finding: this is the same defect class as F25, which tightened the tag spacing on ASH and STD. NDS, RKT, VSK, WST were built before that lesson and need the same tightening.
Fix: apply the F25 adjacent-sibling spacing rule so the tag row sits directly under the recipe name on all four pages. Re-verify ASH and STD still read correctly.
Files: the four CSS files.

### CA6. Kicker and heading ink on themed backgrounds

Where: strongest on NDS, where the kicker ink is purple and clashes, and present anywhere a kicker or heading still uses a colour that fights its background.
Root cause on NDS: `--ux-accent-ink` is bound to the purple secondary, so every kicker, meta label, lens label and recipe label renders purple. Cafe wants these red instead, using the primary with a slightly deeper tone for headings, and the same treatment carried into dark mode.
Fix: retarget the ink tokens per page so kickers and headings read in the page's own primary family rather than a clashing hue. Exact values sit in Part F2, since Cafe asked to adjust colour holistically and confirm by eye.
Files: the four CSS files, token level only, which is why one change flips every downstream use at once.

### CA7. Finding and Implication, and Synthesis, card style

Where: RKT and VSK both combine Finding and Implication inside one card, and both use a Synthesis card style Cafe wants changed. NDS uses the same Synthesis style.
Fix, Finding and Implication: split them into two card groups, a Finding row and an Implication row, aligned in columns so Finding 01 sits directly above Implication 01, to show the pairing. Applies to RKT and VSK.
Fix, Synthesis and Insight cards: bring the card visual style into line with the shared card standard, same as the NDS principle-card fix in N7. Applies to NDS and VSK together.
Files: RKT, VSK, NDS HTML and CSS.

### CA8. Prototype evidence behind Read more

Where: VSK and WST show every prototype and user-flow image inline, which crowds the section.
Fix: keep the first prototype or the primary evidence visible, move the rest behind the shared Read more control, matching the pattern used on VTH and the legacy pages. Specific items are V7 and W6.
Files: VSK and WST HTML, using the existing `data-expand-trigger` module, no new JS.

---

## Part B. NDS, New World Design System

### N1. Kicker and primary colour (values confirmed)

The kickers are purple and clash with the page, and the red paired with purple reads as dirty. Change the global page kicker ink to the primary red `#E11A2C`, with heading text the deeper red `#B60416`, and adjust the dark mode values too. The dark-mode purple pairing is acceptable and stays. Root cause and mechanism are in CA6. Retarget `--ux-accent-ink` to the primary red and set the heading ink to `#B60416`, which fixes Overview, Background, Problem, Solution, Outcome, Feedback, Reflection and the meta and recipe labels at once.

### N2. Problem section, remove the duplicate HMW

The Problem H2 is a How might we sentence, but the HMW appears again in the next section. Remove the HMW headline here. Replace it with a short label plus one descriptive paragraph that summarises the problem, then keep the existing three cards below. Files: NDS HTML.

### N3. HMW band colour

Inside the red HMW band the emphasised words are purple and red-purple, which fights the red background. Change the emphasised words to a light tint of the same red family, a salmon or pale red, so contrast holds without a second hue. Cafe confirmed this direction with a sample. Files: NDS CSS.

### N4. Solution layout to stacked

Move the right-hand diagram below the text so the section is a top to bottom layout, text then image, not side by side. Files: NDS HTML, and a CSS layout rule for this section.

### N5. Outcome kicker colour

The kicker on the Outcome dark background should read in the light red tint, consistent with the tier-d kicker treatment. This follows from N1 and the tier-d ink token. Files: NDS CSS.

### N6. Insight cards need icons

The three Insight cards, Inconsistency, Redundancy, Divergence, each need an icon on the right that expresses the idea, in the VTH v2 principle-card style, an unframed enlarged icon. Files: NDS HTML for the icons, CSS for placement.

### N7. Principles cards

Match the VTH format for title, icon and description. Change the icons to the VTH style, remove the outer frame and enlarge them. The cards must also use the global card style rather than a bespoke one. Remove the odd white line that currently sits between the card and the text. Files: NDS HTML and CSS.

### N8. Colour sub-block, white background text

On the white background in the Colour sub-block the text colour needs to change so it is readable against white. Files: NDS CSS.

### N9. Design section restructure

The Design section jumps straight into why Search, Cards and Buttons were chosen, with no lead-in. Bring the content from the original NDS reference page across, in this order. First the Information Architecture, the three column tree under New World Design System, Introduction, Foundations, Design Elements. Then the component scope reasoning, why these three components were chosen, using the online grocery shopping flow diagram. Only after that comes the design content, colour, icon, typography and components. Both diagrams can be rebuilt in HTML. Files: NDS HTML, CSS for the two diagrams.

### N10. Delivery, replace the Figma embed with a scrollable image set

The embedded Figma prototype does not load. Replace it with the seven microsite pages Cafe uploaded to R2, shown as scrollable long images at a visible ratio of 16 to 10. Show one page, hide the other six behind Read more. Filenames on R2: `nds_Page_search.png`, `nds_Page_card.png`, `nds_Page_button.png`, `nds_Page_font.png`, `nds_Page_color.png`, `nds_Page_icon.png`, `nds_Page_basic.png`. Files: NDS HTML, CSS for the scroll frame, using the existing Read more module.

### N11. Reflection heading

See CA2 and Part F1.

### N12. Recipe tag spacing

See CA5.

### N13. Feedback kicker

See CA1.

---

## Part C. RKT, Rekraft

Overall colour is fine, Cafe confirmed. The items are structural and spacing.

### R1. Solution heading spacing and size

The gap between the Solution title and its description is too tight, and the H2 looks larger than neighbouring sections. Tighten the title to description spacing to match the other chapters, and confirm the Solution H2 size matches sibling sections such as Outcome and Background rather than running larger. Files: RKT CSS, with a size check against `.ux-copy h2` and `.ux-chapter-head h2`.

### R2. Feedback kicker

See CA1.

### R3. Influence position

Move the Influence block to the end of its sub-section. See CA3.

### R4. Research, too much dense text

The Research section carries a long paragraph that few will read. Condense it into a small set of refined cards that carry the point. Files: RKT HTML, CSS if a new card grid is needed.

### R5. Finding and Implication split

Split the combined Finding plus Implication cards into two aligned card groups, Finding row above, Implication row below, columns paired. See CA7. Files: RKT HTML and CSS.

### R6. Scope as cards

Replace the paragraph plus single Design Scope card with a set of cards, three or the matching number of items, one per module, Community, Market, Ako. Files: RKT HTML and CSS.

### R7. Develop restructure

Bring the concept diagram forward as the core of the design idea, then the journey map, then the current prototype sketches, then the rest. The concept diagram is on R2 as `functions.png`. The journey map is best rebuilt in HTML, it is a three stage by five row matrix, stages Before, During, After, rows Goals, Thoughts, Feelings, Pain Points, Opportunities. Files: RKT HTML, CSS for the journey matrix.

### R8. Reflection heading

See CA2 and Part F1.

---

## Part D. VSK, Voting Starter Kit

### V1. Colour, heading orange too dark and dirty (value confirmed)

The large headings use a dark orange that reads dirty. Make it brighter, accepting some loss of contrast since the headings are large. Confirmed value from Cafe's sample, `#EC5B00`. Apply this to the heading ink on VSK, and set the dark mode value by brightening from the same hue. Files: VSK CSS.

### V2. Problem section

Remove the descriptive paragraph under the Problem, it is redundant. The right image should not have an enlarge control and should not have a frame. Files: VSK HTML and CSS.

### V3. Solution contrast, confirmed root cause

The Solution shows a pale background with near invisible white text. Root cause found, the section carries both `ux-tier-s` and `ux-solution`. `ux-tier-s` paints a light background, `ux-solution` forces white text, so white text lands on a light background. NDS and RKT carry only `ux-tier-s` and read correctly. Fix, remove the `ux-solution` class from the VSK Solution section so it matches NDS and RKT, dark text on the light tone. Files: VSK HTML, one class removal.

### V4. Feedback kicker

See CA1.

### V5. Finding and Implication split

Split into two cards, same as RKT. See CA7. Files: VSK HTML and CSS.

### V6. Synthesis card style

Bring the Synthesis card style into line with the shared card standard, same change as NDS principles in N7. See CA7. Files: VSK CSS.

### V7. Prototype and Influence

Move the other two prototypes behind Read more. The Influence card below should span full width. See CA8 and CA3. Files: VSK HTML and CSS.

### V8. Delivery, remove the container box

The Social Media section is wrapped in a white rounded container that no other sub-section uses. Remove the box so it reads flush with the section. Besides the Social Media content, move everything below it behind Read more. Files: VSK HTML and CSS.

### V9. Reflection heading

See CA2 and Part F1.

---

## Part E. WST, Welnest

### W1. Colour, reduce three hues to two

The text colours span three hues, which is too many, and the brown title reads dirty. Merge to two, orange and gold, and keep contrast in mind for the orange. The Welnest product yellow on the Solution background is part of this, see W3b below, Cafe confirmed it should fold into the theme rather than stand alone. Files: WST CSS.

### W2. HMW section

Change the brown emphasised text to orange. Move the right image below the text so the section is a top to bottom layout. Files: WST HTML and CSS.

### W3. Outcome images

Remove the current top Outcome image. Bring the lower image up and place it to the right of the text. Files: WST HTML.

### W3b. Solution background, fold the product yellow into the theme (confirmed)

The Solution section uses the Welnest product yellow, which Cafe finds too jarring in a large area. Fold it into the existing theme instead. Root cause is the same class pattern as VSK V3, the WST Solution section carries `ux-tier-s ux-solution`, and a page rule `.ux-case-page--welnest .ux-solution` paints the yellow. Fix, remove the `ux-solution` class from the WST Solution section and delete the yellow page override, so the Solution reads as a normal tone-s section in the amber theme, matching NDS and RKT. The small design-system yellow swatch stays, it is a content-level element, not a large background. This also resolves part of W1 by removing the third large-area hue. Files: WST HTML, one class removal, and WST CSS, delete the yellow override rule.

### W4. Feedback kicker

See CA1.

### W5. Principle cards

Match the VTH v2 principle style, using Welnest's own colours. Same treatment as NDS N7. Files: WST HTML and CSS.

### W6. Develop, user flow and prototype behind Read more

Move the user flow and prototype evidence behind Read more. See CA8. Files: WST HTML.

### W7. Design System sub-block style

Unify the Design System titles and text to the VTH pattern, one title plus one paragraph, no kicker, unified size and spacing, title in the theme colour. See CA4. Files: WST CSS, small HTML edits.

### W8. Influence position

Move Influence blocks to the end of their sub-sections. See CA3. Files: WST HTML.

### W9. Delivery layout, confirmed root cause

The Delivery heading is centred, which is not the agreed layout. Root cause found, the markup puts `ux-wide-head` directly on the `.container` element, so it inherits the container's centring and its 900px cap makes the block sit centred. RKT and VSK nest `ux-wide-head` inside `.container`, so they left align. Fix, change the WST Delivery markup to the nested pattern, `.container` wrapping a separate `ux-wide-head` div. Files: WST HTML, one markup change.

### W10. Reflection heading

See CA2 and Part F1.

---

## Part F. Decisions, resolved

### F1. Reflection H2 wording, resolved

All four pages use the ASH line, `Looking back, looking forward.`, as the single standard. See CA2. This also becomes the standard for later pages.

### F2. Colour values, resolved for VSK, one item still open for NDS

1. NDS kicker and label ink, move from the purple secondary to the primary red. Light mode, kicker and label ink use the primary red `#E11A2C`, heading text uses the deeper red Cafe tuned, `#B60416`. Dark mode brightens from the same reds, and keeps the dark mode purple pairing Cafe accepted. Exact dark-mode hex will be proposed in the build for a quick visual check.
2. NDS primary red itself, Cafe felt it reads dirty next to purple. Once the kickers leave purple the red should settle. If it still reads off after the kicker change, I will propose a cleaner scarlet for review. Not a blocker.
3. VSK heading orange, confirmed `#EC5B00`, dark mode brightened from the same hue. See V1.
4. WST, merge to two hues, orange and gold. The product yellow on the Solution background folds into the theme, see W3b, so the large areas carry only the two theme hues.

### F3. WST Solution background, resolved

Fold the product yellow into the theme. Implementation in W3b.

---

## Glossary

Kicker, the small label above a section heading, for example the word Overview.
Ink token, a CSS variable that sets text colour once per page and adjusts for dark mode, so one change updates every place that uses it.
Tier, the background tone system, tier-s is a light tone, tier-d is a deep emphasis tone.
ux-solution, a section style that paints a dark gradient and forces white text, used for the Solution section on some pages.
ux-wide-head, the left aligned chapter heading style, kicker plus title plus description stacked.
Read more, the shared expand and collapse control that hides extra evidence until the reader opens it.
HMW, How might we, the question that frames the design problem.
Journey map, a matrix that tracks a user's goals, thoughts, feelings, pain points and opportunities across stages.
IA, Information Architecture, how content is grouped and ordered.
