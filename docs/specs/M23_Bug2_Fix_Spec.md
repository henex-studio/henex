# M23 Bug2 Fix Spec

Source: Cafe's Bug2.docx review (17 screenshots) of the deployed NDS, VSK, RKT and WST pages, after the Bug1 round. This spec root-causes every item and defines the exact fix. Items marked BLOCKER need input from Cafe before build. Items marked REVERSAL change a decision made in Bug1 and are called out for confirmation.

Reference standard for icons and Design System features: `works/victim-hub-v2.html` (VTH v2).

---

## Part A. Common issues (highest priority)

These are the "共性问题" Cafe flagged as still unresolved. Fixing them at the shared layer fixes several screenshots at once.

### A1. Card icons must use Tabler icons, not hand-drawn inline SVG

Root cause. NDS, VSK and WST card icons are bespoke inline `<svg>` paths. VTH v2 uses Tabler webfont icons (`<i class="ti ti-name">` inside a `.vth2-icon` wrapper). Two defects follow from the custom SVG approach. First, the shared rule `.ux-icon-card__icon path, .ux-icon-card__icon circle` in `ux-case-study.css` does not include `rect`, so any bare `<rect>` (VSK card 1 "Fit the medium") falls back to the SVG default black fill. That is the VSK "icon colour not unified" screenshot. Second, the drawings are inconsistent in weight and style across pages.

Fix. Replace every bespoke card icon with a Tabler webfont icon, matching VTH v2. Keep each page's existing icon wrapper class, change the wrapper element to `<span>`, and put a single `<i class="ti ti-name">` inside. Update each wrapper's CSS to size the glyph with `font-size` (about 1.9rem) and `line-height: 1`, keeping the current unframed, theme-coloured treatment.

Icon mapping.

| Page | Card | Tabler icon |
|---|---|---|
| NDS Insight | Inconsistency | ti-arrows-shuffle |
| NDS Insight | Redundancy | ti-copy |
| NDS Insight | Divergence | ti-git-fork |
| NDS Principles | Consistency | ti-layout-grid |
| NDS Principles | Clarity | ti-focus-2 |
| NDS Principles | Accessibility | ti-accessible |
| NDS Principles | Inclusivity | ti-users |
| NDS Principles | Simplicity | ti-square-rounded |
| NDS Principles | Visibility | ti-eye |
| VSK Principles | Fit the medium | ti-devices |
| VSK Principles | Use plain visual language | ti-photo |
| VSK Principles | Build trust through evidence | ti-shield-check |
| VSK Principles | Make policies tangible | ti-box |
| WST Principles | Transparency | ti-eye |
| WST Principles | Clarity | ti-focus-2 |
| WST Principles | Efficiency | ti-bolt |
| WST Principles | Accessibility | ti-accessible |
| WST Principles | Supportiveness | ti-heart-handshake |
| WST Principles | Inclusiveness | ti-users |

19 icons total. RKT has no card icons, so it is unaffected.

### A2. HENEX Recipe tag spacing (real root cause)

Root cause. The Bug1 F25 fix set `.ux-recipe-primary + .ux-recipe-tags { margin-top: 8px }`, but `.ux-recipe-primary` still carries `margin: 0 0 var(--space-lg)`, a 32px bottom margin. Adjacent vertical margins collapse to the larger value, so the real gap between the recipe name and the node tags stayed at 32px. The F25 change had no visible effect, which is why Cafe keeps seeing the same gap.

Fix (in `ux-case-study.css`). Drop the name's own bottom margin when it is immediately followed by the node tags, so the collapse resolves to the small value:

```css
.ux-recipe-primary:has(+ .ux-recipe-tags) { margin-bottom: 8px; }
.ux-recipe-primary + .ux-recipe-tags { margin-top: 0; }
```

`:has()` is supported in all current browsers. The Secondary Recipe row (`.ux-recipe-primary.ux-secondary-recipe` followed by `.ux-recipe-popovers`) is not matched, so its spacing is unchanged. This is a single shared-CSS change that fixes all four pages.

### A3. Design System feature format unification

Root cause. The Bug1 CA4 standard is VTH v2's `.vth2-ds-feature__text` pattern: a short `<h4>` title plus one `<p>` description, no kicker. VSK's `.vsk-ds-stack` articles still use kicker plus long `<h3>` plus `<p>`, which reads as two titles.

Fix. Convert each VSK DS sub-block to a short title plus one description, dropping the kicker. Example, Icon System: title "Icon System", description "Simple icons translate repeated actions and information categories into quick visual cues, reducing reading load across the kit." Apply the same to Typography and to Illustration and Accessibility. Verify NDS and WST DS sub-blocks already follow the single-title format during build; RKT was unified in Bug1 CA4.

### A4. Fixed images must not be clickable and must not carry a frame

Root cause. Some evidence images are wrapped in a `data-modal-src` button (click to enlarge) and sit inside a bordered frame. Cafe wants static images with no border where the content is already legible at full width.

Fix. Where flagged (NDS Variables, see B5), remove the modal-trigger button wrapper so the `<img>` stands alone, and remove the frame border. Keep lazy loading.

---

## Part B. NDS (New World Design System)

B1. Icons. Replace the 3 Insight and 6 Principles icons per A1.

B2. Stray divider line (screenshot 6). Root cause: `.system-scope-note` in `nds.css` has `border-top: 1px solid var(--theme-border-soft)` above the "deliberate scope decision" paragraph. Fix: remove the `border-top` and the top padding it paired with.

B3. Merge Core Components and Component Scope (screenshot 9). Root cause: two adjacent blocks say the same thing. The `.ux-section-head` "Core Components / Component evidence for the main shopping journey / These components carry the core online grocery journey..." and the `.ux-scope-block` "Why Search, Cards and Buttons? / I did not try to document every interface element..." repeat the same point. Fix: merge into one block. Keep the "Core Components" kicker and the "Component evidence for the main shopping journey." title, fold the rationale into one paragraph, and keep the three chips (Search to Find, Cards to Compare, Buttons to Act). Remove the duplicate `.ux-scope-block`.

B4. IA and component-scope diagrams (screenshots 7, 8). Cafe wants the native HTML IA tree and flow diagram (built in Bug1 N9) replaced with two uploaded images. Confirmed URLs: information architecture `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/nds/ia.png`, component-scope flow `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/nds/journey.png`. Fix: replace the two native-HTML blocks with plain `<figure><img>` blocks using these URLs, lazy loaded, no clickable frame. Remove the now-unused IA-tree and flow-diagram CSS from `nds.css`.

B5. Variables image (screenshot 10). Root cause: the `variables.png` figure is wrapped in a `data-modal-src` button (clickable) and sits in a frame. Fix per A4: remove the button wrapper, keep a plain `<img>`, remove the border.

B6. Delivery images order and layout (screenshot 11). Filenames confirmed correct against Cafe's R2 listing: `nds_Page_basic.png`, `nds_Page_icon.png`, `nds_Page_color.png`, `nds_Page_font.png`, `nds_Page_button.png`, `nds_Page_card.png`, `nds_Page_search.png` (folder `projects/nds/`). The current markup uses the right filenames but the wrong order and layout. Target order: 1 basic, 2 icon, 3 colour, 4 font, 5 button, 6 card, 7 search. Layout: image 1 full width and always visible, images 2 to 7 behind Read more, shown two per row. The expanded images must be scrollable (a fixed-height frame with `overflow-y: auto` and the full tall image inside), not a fixed top-crop. Fix: reorder the seven figures, move image 1 out as the full-width lead, wrap 2 to 7 in the Read-more panel as a two-column grid, and change `.nds-delivery-frame` from a cropped `aspect-ratio` frame to a scrollable fixed-height frame.

B7. Recipe tags. Fixed by A2.

---

## Part C. VSK (Voting Starter Kit)

C1. Icon colour (screenshot 1). Fixed by A1. Note the specific cause: VSK card 1 uses bare `<rect>` with no `__fill` class and no `rect` in the shared stroke rule, so it renders black while the stroke-based icons render orange.

C2. DS feature Icon System (screenshot 2). Fixed by A3: single title plus description, no kicker, applied to all three VSK DS sub-blocks.

C3. Social Media block (screenshot 3). Two parts.

Border (root cause confirmed by Cafe's inspector screenshot: the frame is on `article.vsk-social-feature`, not the image). `.vsk-social-feature` is listed in the shared C1 card contract in `global.css` (the base rule at line 475 and the hover rule at line 523), which apply `border`, `border-radius` and `box-shadow`. Bug1 V8 removed the border from the `.vsk-social-feature` rule in `vsk.css` but missed this shared list in `global.css`, so the frame stayed. This is the same shared-selector trap recorded in the kicker-audit lesson. Fix: remove `.vsk-social-feature` from both the base selector list (line 475) and the hover selector list (line 523) in `global.css`. The block then renders with no frame or shadow, as intended.

Contrast: the block sits in the tier-d (dark orange) Delivery section, but `.vsk-social-feature p:not(.ux-kicker)` forces `color: var(--theme-text-soft)` (a dark grey meant for light backgrounds) with higher specificity than the tier-d light-text rule, so the description is low contrast. Fix: within tier-d, set the social-feature description to the tier-d light text colour.

C4. Solution three touchpoint cards (screenshot 4). Root cause: in Bug1 (V3) the Solution section changed from an emphasis/dark background to `ux-tier-s` (light), but `.ux-touchpoint-card` still uses dark-background styling, `background: rgba(255,255,255,.14)` and near-white text, so the card text is white on a pale background and nearly invisible. Fix: restyle `.ux-touchpoint-card` for a light background, a solid surface fill, a soft border, and dark theme text (`--theme-text` for the title, `--theme-text-soft` for the body), keeping the label in the accent ink.

---

## Part D. RKT (ReKraft)

D1. Journey Map (screenshot 13). Replace the native HTML journey matrix (`.rkt-journey__grid`, built in Bug1 R7) with the uploaded image `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/rkt/journey.png` in a plain figure, lazy loaded. Remove the now-unused `.rkt-journey__*` matrix CSS from `rkt.css`.

D2. Develop media too large (screenshot 14). Root cause: the concept diagram (`functions.png`), the journey map, the sketches and the screenshots each render full width. Cafe wants all Develop media constrained to the right two-thirds. Fix: give the Develop media a shared layout that holds the media at about 66 percent width (a left text column or left margin taking the other third), consistent with the section's other feature rows.

D3. Persona content is fabricated (screenshot 15). VERIFIED against `docs/reference/rkt.pdf`: the words "persona" and "Emma" do not appear anywhere in the source. The paragraph inventing "a persona, Emma, a young professional who cares about sustainability..." is not grounded. The PDF's actual Define/Ideation content is: "Ideation surveyed adjacent directions (DIY reuse platform, energy sharing, trail-based cultural learning, guardianship challenges) and converged on a waste-to-treasure community platform for the strongest alignment of SDG 12, feasibility, and user appeal," and "Development translated principles into a three-module product structure." Fix: rewrite the opening paragraph to reflect this, remove the Emma persona entirely, and cut the "Ideation expanded the solution space before collapsing it..." sentence Cafe found inflated. The three module cards (Community, Market, Ako) stay.

D4. Design System Influence position (screenshot 16). The Design System section's Influence block currently sits directly under the section heading, before the colour and type sub-blocks. Move it to the end of the section, after the sub-blocks, matching how Influence closes other sections.

---

## Part E. WST (Welnest)

E1. Solution background to bright yellow (screenshot 17). This adjusts the Bug1 W3b decision for a concrete reason Cafe confirmed: the Solution illustration's own colours (its pale interior and orange elements) merge into the current pale amber `ux-tier-s` background, and the illustration image cannot be re-exported or recoloured, so the only lever left is the section background. A bright yellow background separates the illustration from the section again. Fix: give the WST Solution section a bright yellow background (start from the brand gold `#FFB200`), and set all text to a high-contrast dark ink so the heading, body and any card text pass contrast on yellow. Verify the illustration reads cleanly against the new background during build.

E2. Icons. Replace the 6 Principles icons per A1.

---

## Part F. Blockers, all resolved by Cafe

1. NDS Delivery filenames (B6). Resolved. Filenames are correct as listed: `nds_Page_basic/icon/color/font/button/card/search.png` in `projects/nds/`. Work is reorder and relayout, not renaming.
2. NDS IA and flow images (B4). Resolved. `projects/nds/ia.png` and `projects/nds/journey.png` confirmed.
3. RKT journey image (D1). Resolved. `projects/rkt/journey.png` confirmed.
4. VSK social frame (C3). Resolved. Confirmed not in the image. Root-caused to the shared C1 card list in `global.css`; remove `.vsk-social-feature` from both selector lists (lines 475 and 523).
5. WST Solution yellow (E1). Resolved. Bright yellow background needed because the illustration merges into the pale amber and the image cannot be adjusted.

No open blockers. The build is deterministic and can run on Sonnet without extended thinking.
