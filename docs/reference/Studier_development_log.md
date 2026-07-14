# Studier Development Log

## v1.00, Initial MVP package, 15 May 2026

1. Created the first downloadable MVP package for Studier.
2. Added the core tree testing workflow, including study setup, IA tree upload, task setup, participant test runner, response capture, and basic dashboard export support.
3. Set this first packaged build as the baseline version for future updates.

## v1.01, Study ownership and collection management

1. Added owner display support so tests could show who created or owned each study.
2. Added study status display for draft, published, and closed states.
3. Added improved study collection cards for managing multiple tests.

## v1.02, Test link sharing

1. Added copy link support for published tests.
2. Added copied link feedback in the study collection.
3. Added clearer access to public test links from the collection page.

## v1.03, Participant test flow improvements

1. Added the test introduction flow before tasks.
2. Added a back to welcome behaviour in the test runner.
3. Improved selected answer handling in the participant flow.

## v1.04, Admin shell and guide

1. Added a shared admin shell structure.
2. Added a user guide page.
3. Added a navigation route from the admin experience to the guide.

## v1.05, Registration and consent

1. Added registration flow.
2. Added consent page support.
3. Added database updates related to consent and registration.

## v2.00, Builder and publishing readiness

1. Added pre task questions before the main tree testing tasks.
2. Added CSV checks for IA tree setup.
3. Added readiness checks before publishing.
4. Added list view in the test collection.
5. Added stronger save, preview, and publish workflow in the Study Builder.
6. Moved Studier from a basic MVP to a more complete internal testing platform.

## v2.01, Task behaviour and response capture improvements

1. Added default collapsed tree behaviour for test and preview runs.
2. Added reset behaviour between tasks.
3. Added improved next question feedback.
4. Added task progress related data support.

## v3.00, Test lifecycle management

1. Added test closing time.
2. Added `expires_at` support in the database.
3. Added automatic close behaviour for expired tests.
4. Added closed page support for expired or manually closed public test links.
5. Added support for changing a closing time and publishing again to reopen a test.
6. Added closing time display in the test collection.

## v3.01, Preview navigation and participant task navigation

1. Added preview mode buttons back to the editor and test collection.
2. Added task progress navigation with numbered task steps.
3. Added the ability for participants to review completed tasks.
4. Prevented participants from opening future tasks.
5. Added locked review mode so submitted answers cannot be changed.

## v3.02, Review mode tree expansion

1. Added automatic tree expansion to the submitted answer path when reviewing a completed task.
2. Kept the active task tree collapsed so the first instinct testing behaviour is preserved.
3. Applied the same review expansion behaviour to preview mode.

## v3.03, Response display and collection usability

1. Improved the task progress state model for completed, current, reviewing, and future tasks.
2. Improved tree level distinction while keeping selected answers clearly marked.
3. Fixed owner name display in list view so longer owner names can wrap instead of being cut off.

## v3.04, Analytics support

1. Added support for Vercel Analytics in the deployed app.
2. Confirmed that Vite React needs `@vercel/analytics/react`.
3. Confirmed that analytics tracking only works in deployed production use, not local development.

## v3.05, Data cleaning support

1. Added a workflow for cleaning task response exports and final question exports.
2. Added duplicate response handling by keeping the latest response for each participant and task.
3. Added checks to compare response paths with the uploaded IA tree CSV version.
4. Confirmed that the Victims Navigation task responses matched the uploaded IA tree version.

## v3.06, Clear response data and republish

1. Added Clear test data for closed or draft tests.
2. Added Clear data and publish so the same test can be reused for another round of responses.
3. Added owner and admin delete policies for response data.
4. Kept Close behaviour as non destructive, meaning closing a test does not delete responses.

## v3.07, Version access and updated guide

1. Added the current Studier version number to the top navigation.
2. Added a direct link from the version number to the Guide version history.
3. Updated the Guide to reflect current functionality, including pre task questions, closing time, locked review, data clearing, republishing, and exports.
4. Added functional version history inside the Guide.
