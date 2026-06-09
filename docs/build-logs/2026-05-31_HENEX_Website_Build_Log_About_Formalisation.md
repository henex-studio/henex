# 2026-05-31 HENEX Website Build Log, About Formalisation

## Phase

Phase 1.2, About page formalisation and global interaction stabilisation.

## Scope completed

1. The About page moved from preview into production files.
2. The About page now uses a full hero section, portrait image, evidence strip, practice foundations, working process, capability clusters, experience thread, markers of practice and final call to action.
3. The global theme toggle was changed from a text label and dot to an icon only sun and moon control.
4. A global Back to Top component was added and tested across Home, Works and About.
5. A local SVG icon system was introduced for UI icons and About page icons.
6. The footer colour was refined to graphite, so the footer remains distinct from dark mode sections.
7. Home wording was updated from digital systems to digital products where appropriate.
8. Works and About hero spacing was fixed after the full width hero pattern caused mobile edge alignment issues.
9. Dark mode visibility issues were fixed for theme icons, Back to Top icons, About icons and the About portrait.
10. The global CSS was cleaned after testing, removing temporary hotfix blocks and integrating the confirmed rules into the main global stylesheet.

## Files created or updated

1. `about.html`
2. `assets/css/about.css`
3. `assets/css/global.css`
4. `assets/js/main.js`
5. `index.html`
6. `works.html`
7. `assets/icons/ui/icon-sun.svg`
8. `assets/icons/ui/icon-moon.svg`
9. `assets/icons/ui/icon-arrow-up.svg`
10. `assets/icons/about/icon-spatial.svg`
11. `assets/icons/about/icon-system.svg`
12. `assets/icons/about/icon-human.svg`
13. `assets/icons/about/icon-research.svg`
14. `assets/icons/about/icon-structure.svg`
15. `assets/icons/about/icon-prototype.svg`
16. `assets/icons/about/icon-delivery.svg`
17. `assets/icons/about/icon-content.svg`
18. `assets/icons/about/icon-spatial-service.svg`
19. `assets/img/about/cafe-yi-portrait-dark.png`, prepared by Tian Yi and referenced by the About page.

## Key design decisions

1. About uses Human blue as its page accent.
2. Works keeps Nature green as its page accent.
3. The About evidence strip uses `18+`, `3.4M sqm`, `10+ awards` and `88.9% task success`.
4. Practice foundations are treated as parallel foundations, so their numeric labels were removed.
5. How I Work remains a numbered process, using `01 Frame`, `02 Structure`, `03 Prototype` and `04 Refine`.
6. The Experience thread headline was updated to: `The path has widened from built environments to a deeper practice around how people understand and use complex systems.`
7. Markers of practice replaced a CV style section, giving a more natural summary of professional recognition, education, leadership and public sector digital work.
8. The Professor level Senior Engineer title is explained as a senior technical professional title in China’s architecture and engineering practice system, not an academic teaching role.
9. Theme toggle uses local SVG icons and is placed after Contact in both desktop and mobile navigation.
10. The Back to Top component is global, fixed in the lower right area and appears after scrolling.
11. Dark mode portraits use a separate image asset instead of relying on CSS inversion.
12. SVG icons used as image files need explicit dark mode treatment because external SVG images do not inherit parent text colour.

## Problems found and resolved

1. The dark mode theme icon was not visible. The issue was fixed by applying dark mode filter rules to the icon image.
2. The mobile theme toggle became a vertical pill. The issue was fixed by enforcing circular dimensions in the mobile navigation context.
3. The Back to Top arrow was not visible in dark mode. The issue was fixed by applying dark mode filter rules to the arrow image.
4. Works and About hero text touched the viewport edge on mobile. The issue was fixed by neutralising the full bleed negative margin and re centring the hero container.
5. The About portrait was too dark in dark mode. The issue was fixed by adding a dedicated dark mode portrait image.
6. About page icon badges were too dark in dark mode. The issue was fixed by brightening badge backgrounds and inverting the external SVG icons.
7. Temporary global CSS hotfix blocks accumulated during testing. The issue was fixed by cleaning and integrating the confirmed global rules into `global.css`.

## Current known issues

1. The CV PDF is not available yet. The page already points to `assets/files/cafe-yi-cv.pdf`, but the file still needs to be added.
2. Philosophy, Lab and individual project pages are not yet formalised.
3. The Design System documentation needs to be updated to reflect the new icon system, Back to Top, dark mode image variants and About page pattern.
4. The HTML design system viewer should be created after the updated Design System document is confirmed.

## Next steps

1. Archive this build log.
2. Update the HENEX Design System document to v1.3.
3. Plan the HTML design system viewer, using the NZP Victim Hub Design System file as a structural reference rather than a visual style source.
4. Begin the HENEX Philosophy page content strategy.
5. Add the CV PDF when ready.

## RAG update reminder

Add this build log back into the HENEX website knowledge base after review.

Suggested RAG location:

`HENEX Website Space / Build Logs / 2026-05-31_HENEX_Website_Build_Log_About_Formalisation.md`
