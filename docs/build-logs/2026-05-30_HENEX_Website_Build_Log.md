# 2026-05-30 HENEX Website Build Log

## Phase

Phase 1, static portfolio website build.

## Main outcome

Home v1 was moved from mood exploration into usable production code. The local development workflow was also established, and the Works landing page was started. The website now has a working Home page, a working Works landing page, image asset paths, mobile navigation behaviour, and a cleaner project structure for future case study pages.

## Completed today

1. Local workflow was set up and used.

   The project is now edited locally in VS Code, committed through Git or GitHub Desktop, pushed to GitHub, and deployed through Vercel. A `.gitignore` file was added to ignore Mac `.DS_Store` files.

2. Home v1 production code was implemented.

   The Home page now includes the night full-bleed hero, responsive navigation, mobile hamburger menu, capability cards, HENEX framework section, featured works, About preview, Lab entry and dark footer.

3. Home page mobile navigation was fixed.

   The mobile menu now opens with a full light background and no longer overlaps with the hero. The Contact item was changed into a button-style CTA. Hero spacing and mobile padding were adjusted.

4. Home page project images were connected.

   The Home page now uses project images from:

   ```text
   assets/img/projects/vth/vth-home.webp
   assets/img/projects/ash/ash-home.webp
   assets/img/projects/std/std-home.webp
   assets/img/projects/nds/nds-home.webp
   assets/img/projects/bt2/bt2-home.webp
   assets/img/projects/ayg/ayg-home.webp
   ```

5. Project image display modes were added.

   The CSS now supports project media modes such as cover, contain and focal positioning. ASH, Studier and New World Design System were set to cover mode after visual review.

6. Lab copy was confirmed.

   The final Home Lab copy is:

   ```text
   A space for visual experiments, artistic studies and creative ideas.
   ```

7. IA and project inventory were consolidated.

   The project list was converted into a consolidated workbook with IA pages, project inventory, home scenarios, tag system, lab inventory and image asset guidance. Studier was added with short name `std`.

8. Works landing page was created.

   A new `works.html` page was added. It includes:

   ```text
   Works hero
   Category overview
   Featured Work
   Service Systems
   Digital Systems
   Spatial Systems
   Full chronology CTA
   ```

9. Works project cards were connected to images.

   The Works page uses available project images for VTH, ASH, VSK, STD, NDS, WSO, WST, RKT, BT2, AYG, OPI, GFP and GSH. HENEX Website still uses a placeholder.

10. Works category card interaction was refined.

    The category cards now use a clean SVG down arrow stored at:

    ```text
    assets/icons/ui/arrow-down.svg
    ```

    The arrow indicates that clicking the card moves the user down to the corresponding category section. The hover behaviour is a subtle downward movement.

## Design decisions confirmed

1. Primary Works categories are:

   ```text
   Service Systems
   Digital Systems
   Spatial Systems
   ```

2. Future category:

   ```text
   Editorial Systems
   ```

3. Home Works does not include HENEX Website as a featured project for now.

4. HENEX theory remains on Home as a framework section.

5. Works landing page is a curated portfolio page, not a full archive.

6. A separate chronology page will be added later to collect all Work projects, including projects that may only have cards and no full case study yet.

## Issues encountered and resolved

1. The first zip-based file replacement caused accidental asset folder replacement risk.

   Resolution: future code delivery should avoid folder-level zip replacement. Use single-file replacement instructions only.

2. `.DS_Store` files appeared in Git changes.

   Resolution: `.gitignore` was added.

3. Mobile navigation initially overlapped with the hero.

   Resolution: mobile nav overlay CSS was fixed.

4. Works category arrow styling went through several failed CSS-only attempts.

   Resolution: final approach uses an external SVG icon file for stable visual quality.

## Current file status

Files created or updated today:

```text
index.html
works.html
assets/css/pages.css
assets/js/main.js
assets/icons/ui/arrow-down.svg
.gitignore
HENEX_IA_Content_Workbook_v1.xlsx
```

Project image folders in use:

```text
assets/img/projects/vth/
assets/img/projects/ash/
assets/img/projects/std/
assets/img/projects/nds/
assets/img/projects/vsk/
assets/img/projects/wso/
assets/img/projects/wst/
assets/img/projects/rkt/
assets/img/projects/bt2/
assets/img/projects/ayg/
assets/img/projects/opi/
assets/img/projects/gfp/
assets/img/projects/gsh/
```

## Next recommended steps

1. Commit and push the final category arrow fix if not already done.

   Suggested commit message:

   ```text
   Use SVG icon for Works category arrows
   ```

2. Build `works-chronology.html`.

   The chronology page should include all Work projects from the project inventory, grouped by year, phase and category.

3. Create basic placeholder case study pages to avoid 404 links.

   Priority placeholders:

   ```text
   works/victim-hub.html
   works/accessibility-support-hub.html
   works/studier.html
   works/new-world-design-system.html
   works/guangzhou-baiyun-t2.html
   works/shantou-ayg.html
   ```

4. Continue with About, Philosophy and Lab pages after the Works structure is stable.

## RAG update reminder

Upload the latest workbook and this build log back into the HENEX Website Space project documentation.

Recommended location:

```text
HENEX Website Space / Project Documentation / Phase 1
```

Archive older CSV packs once the workbook is confirmed as the primary project inventory source.
