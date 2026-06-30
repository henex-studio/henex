# Fix Log: Modal image disappears after closing

Date: 2026-06-15
File affected: assets/js/case-interactions.js
Symptom: After closing the image modal, the roadmap image on the page
disappeared and was replaced by alt text.

## Root cause

The `data-modal-caption` attribute was used on two different elements:

1. The trigger `<button>` elements, as a data carrier for modal content.
2. The `<p>` element inside the modal panel, as the display target.

The JS initialised `modalCaption` using a global querySelector:

```javascript
// Wrong: searches the entire page
const modalCaption = document.querySelector('[data-modal-caption]');
```

Because the roadmap `<button>` appeared first in DOM order, this selector
matched the button instead of the modal `<p>`. When `openModal()` ran
`modalCaption.textContent = '...'`, it replaced the button's inner content,
destroying the `<img>` tag inside it. The image disappeared from the page.

Other trigger images were unaffected because their buttons appeared later in
DOM order and the roadmap button was always matched first.

## Fix

Scope the querySelector to inside the modal container:

```javascript
// Correct: searches only within the modal
const modalCaption = modal ? modal.querySelector('[data-modal-caption]') : null;
```

## Rule to follow going forward

When a data attribute is used on both trigger elements and target elements,
always scope the target querySelector to its container. Never use
document.querySelector() for modal internals. Use modal.querySelector()
instead.

Attributes used as JS data carriers on triggers (data-modal-src,
data-modal-title, data-modal-caption) must not share the same name as
attributes used on display targets inside the modal panel.

## Diagnostic method used

Added console.log() calls at each step inside openModal() to track when
document.querySelectorAll('button[data-modal-src] img').length dropped from
6 to 5. Narrowed down to the modalCaption.textContent assignment, then
confirmed by running document.querySelector('[data-modal-caption]').outerHTML
in the Console, which returned the trigger button instead of the modal paragraph.