# 2026-06-06 ASH UX Template Baseline Build Log

## Completed

1. Consolidated the Accessibility Support Hub page into a clean UX case study template baseline.
2. Removed dependency on `case-study.css` and `case-study.js`.
3. Created a dedicated page stylesheet, script, and close icon.
4. Confirmed the main layout patterns for Hero, Meta, Evaluative Workshop, Information Architecture, Usability Test, Final Design, HENEX Method Recipe, and Related Projects.
5. Produced a reusable UX template specification for future case studies.

## Key decisions

1. The UX template uses isolated page files.
2. Project internal cards use theme colour hover behaviour.
3. Related Projects use neutral global hover behaviour.
4. The hero dark mode has a dedicated dark background treatment.
5. The evaluation pathway is part of the Evaluative Workshop section and sits above the Influence card.
6. Public text uses `Accessibility Support Hub`, `the hub`, or `this project` instead of the internal shorthand.

## Risks resolved

1. Repeated patch style CSS changes were replaced by a clean template file.
2. Modal image logic was isolated so original page images are not modified.
3. Dark mode hero contrast was handled explicitly.
4. The UX template baseline is no longer tied to the older generic case study code.

## Next actions

1. Upload the clean files to GitHub.
2. Test locally in VS Code and then through Vercel deployment.
3. Use the specification as the starting point for future UX case study pages.
4. Add the specification to the project knowledge base.
