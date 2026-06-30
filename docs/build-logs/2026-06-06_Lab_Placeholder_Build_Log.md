# 2026-06-06 Lab Placeholder Build Log

## Phase
HENEX Website, Lab placeholder page completion.

## Completed work

1. Created a lightweight `lab.html` placeholder page in the website root directory.
2. Reused the existing global dependencies only:
   - `assets/css/global.css`
   - `assets/css/pages.css`
   - `assets/js/main.js`
3. Added the confirmed Lab positioning line:
   "A space for visual experiments, artistic studies and creative ideas."
4. Kept the page intentionally simple, with a hero section, coming soon section, links back to Works and HENEX Philosophy, existing footer, theme toggle and back-to-top button.
5. Updated the Lab page theme direction to use the HENEX Emotion colour, `#FF5688`, instead of reusing the Works green theme.
6. Cleaned the CSS implementation so Lab styling is integrated into the existing files rather than appended as a patch.

## Files updated

1. `lab.html`
   - Added as a new root-level page.
   - Uses `body class="page-lab"`.
   - Uses `page-hero--lab` for the Lab-specific hero.
   - Keeps the same header, navigation, footer, theme toggle and back-to-top structure as other global pages.

2. `assets/css/global.css`
   - Added `.page-lab` page-level accent tokens near the existing page accent rules.
   - Lab uses `--page-accent: var(--color-emotion);`.
   - Added matching dark mode Lab token values.

3. `assets/css/pages.css`
   - Added `.page-hero--lab` near the existing hero variants.
   - Added light mode and dark mode Lab hero gradients using the HENEX Emotion colour.
   - Removed the earlier append-style Lab patch and integrated the rules into the clean page pattern structure.

## Key decisions

1. Lab remains a placeholder for now.
   It should not become a full content system until real Lab items are ready.

2. No new Lab CSS file was created.
   This keeps Phase 1 simple and follows the current CSS architecture.

3. Lab uses the HENEX Emotion colour.
   The Lab page is closer to visual experiments, artistic studies and creative ideas, so the Emotion accent is more suitable than the Works Nature accent.

4. `page-hero--lab` is now its own hero variant.
   The first version borrowed `page-hero--works`, but this was corrected to avoid semantic and visual mismatch.

5. CSS was cleaned rather than patched.
   Lab page-level tokens belong in `global.css`. Lab hero styling belongs in `pages.css`.

## Acceptance checks completed

1. `lab.html` exists in the root directory.
2. The global Lab navigation link now has a valid destination.
3. The page uses existing global visual and interaction systems.
4. No new CSS file was introduced.
5. Lab uses the confirmed line exactly.
6. Lab uses the HENEX Emotion colour as the page accent.
7. Light mode and dark mode hero states are defined.
8. The page includes skip link, semantic landmarks, footer and back-to-top button.
9. The page uses `aria-current="page"` for the Lab navigation item.

## Known issues and follow-up notes

1. `philosophy.html` still has a footer class typo, where `footer-column` appears to be broken by an unintended line break. This is outside the Lab task scope but should be fixed later.
2. Lab content is intentionally minimal. Real Lab items, image fields or exploratory cards should only be added when the content direction is ready.
3. If Lab later becomes a richer visual archive, create a proper Lab content pattern first rather than adding isolated custom styles.

## Next planned work

Start the New World Design System case study as the second validation project for the UX case study template.

Expected page:
`works/new-world-design-system.html`

Expected dependencies:
- `../assets/css/global.css`
- `../assets/css/ux-case-study.css`
- `../assets/js/main.js`
- `../assets/js/ux-case-study.js`

The next phase should test whether the existing UX case study template can support a system-focused digital project, including design system audit, component evolution, token logic, documentation and handoff.

## RAG update reminder

After review, upload this build log into:

`HENEX Website Space / Build Logs / 2026-06-06_Lab_Placeholder_Build_Log.md`

Also ensure the latest versions of these files are stored in the project knowledge base if needed:

1. `lab.html`
2. `assets/css/global.css`
3. `assets/css/pages.css`
