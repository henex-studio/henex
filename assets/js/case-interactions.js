(function () {

  /* ── Popover ── */

  const popover = document.querySelector('[data-recipe-popover], [data-arch-recipe-popover]');
  let activePopoverTrigger = null;

  function closePopover() {
    if (!popover) return;
    popover.classList.remove('is-open');
    popover.innerHTML = '';
    if (activePopoverTrigger) activePopoverTrigger.setAttribute('aria-expanded', 'false');
    activePopoverTrigger = null;
  }

  function openPopover(trigger) {
    if (!popover) return;
    if (activePopoverTrigger === trigger && popover.classList.contains('is-open')) {
      closePopover();
      return;
    }
    if (activePopoverTrigger) activePopoverTrigger.setAttribute('aria-expanded', 'false');
    activePopoverTrigger = trigger;
    trigger.setAttribute('aria-expanded', 'true');

    const isArch = popover.hasAttribute('data-arch-recipe-popover');
    const eyebrowClass = isArch ? ' class="arch-popover__eyebrow"' : '';
    const titleClass   = isArch ? ' class="arch-popover__title"'   : '';
    const bodyClass    = isArch ? ' class="arch-popover__body"'    : '';
    const linkClass    = isArch ? ' class="arch-popover__link"'    : '';

    popover.innerHTML = `<span${eyebrowClass}>Secondary recipe</span><h3${titleClass}>${trigger.dataset.recipeTitle}</h3><p${bodyClass}>${trigger.dataset.recipeBody}</p><a${linkClass} href="${trigger.dataset.recipeLink}">View recipe</a>`;

    const rect = trigger.getBoundingClientRect();
    const popoverHeight = 240;
    const spaceBelow = window.innerHeight - rect.bottom;
    const topPos = spaceBelow >= popoverHeight + 16
      ? rect.bottom + 10
      : rect.top - popoverHeight - 10;

    popover.style.top  = `${Math.max(16, topPos)}px`;
    popover.style.left = `${Math.max(16, Math.min(rect.left, window.innerWidth - 380))}px`;
    popover.classList.add('is-open');
  }

  document.querySelectorAll('.ux-recipe-trigger, .arch-recipe-trigger').forEach(function (trigger) {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', function (event) {
      event.stopPropagation();
      openPopover(trigger);
    });
  });

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (
      !target.closest('.ux-recipe-trigger') &&
      !target.closest('.arch-recipe-trigger') &&
      !target.closest('[data-recipe-popover]') &&
      !target.closest('[data-arch-recipe-popover]')
    ) closePopover();
  });


  /* ── Modal ── */

  const modal        = document.querySelector('[data-ux-modal]');
  const canvas       = modal ? modal.querySelector('.ux-modal__canvas') : null;
  const modalImage   = modal ? modal.querySelector('.ux-modal__canvas img') : null;
  const modalTitle   = document.querySelector('#modal-title');
  const modalCaption = modal ? modal.querySelector('[data-modal-caption]') : null;
  const closeButton  = document.querySelector('[data-modal-close]');

  let lastFocus  = null;
  let isDragging = false;
  let startX = 0, startY = 0;
  let translateX = 0, translateY = 0;
  let lastX = 0, lastY = 0;
  let baseScale = 1, zoom = 1;

  function applyTransform() {
    if (modalImage) modalImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${baseScale * zoom})`;
  }

  function resetTransform() {
    isDragging = false;
    translateX = 0; translateY = 0;
    lastX = 0; lastY = 0;
    baseScale = 1; zoom = 1;
    if (canvas) canvas.classList.remove('is-dragging');
    if (modalImage) {
      modalImage.style.transform = '';
      modalImage.style.width = '';
      modalImage.style.height = '';
    }
  }

  function fitImage() {
    if (!modalImage || !canvas) return;
    const rect = canvas.getBoundingClientRect();
    const w = modalImage.naturalWidth;
    const h = modalImage.naturalHeight;
    if (!w || !h || !rect.width || !rect.height) return;
    baseScale = Math.min((rect.width - 56) / w, (rect.height - 56) / h, 1);
    zoom = 1;
    translateX = 0;
    translateY = 0;
    modalImage.style.width  = `${w}px`;
    modalImage.style.height = `${h}px`;
    modalImage.style.transform = `translate(0px, 0px) scale(${baseScale})`;
  }

  function openModal(trigger) {
    if (!modal || !modalImage || !closeButton) return;
    lastFocus = trigger;

    resetTransform();
    if (modalTitle)   modalTitle.textContent   = trigger.getAttribute('data-modal-title')   || 'Image preview';
    if (modalCaption) modalCaption.textContent = trigger.getAttribute('data-modal-caption') || '';

    modal.classList.add('is-open');
    document.body.classList.add('ux-modal-open');
    closeButton.focus();

    const src = trigger.getAttribute('data-modal-src');
    modalImage.src = src;
    modalImage.alt = trigger.getAttribute('data-modal-caption') || trigger.getAttribute('data-modal-title') || 'Image preview';

    setTimeout(function () {
      if (modalImage.complete && modalImage.naturalWidth) {
        fitImage();
      } else {
        modalImage.addEventListener('load', fitImage, { once: true });
      }
    }, 50);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('ux-modal-open');
    resetTransform();
    if (modalImage) {
      modalImage.style.transform = '';
      modalImage.style.width     = '';
      modalImage.style.height    = '';
      modalImage.alt = '';
    }
    if (lastFocus) lastFocus.focus();
  }

  if (modal) {
    document.querySelectorAll('[data-modal-src]').forEach(function (trigger) {
      trigger.addEventListener('click', function () { openModal(trigger); });
    });

    if (closeButton) closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });

    if (canvas) {
      canvas.addEventListener('pointerdown', function (event) {
        if (!modal.classList.contains('is-open')) return;
        isDragging = true;
        canvas.classList.add('is-dragging');
        canvas.setPointerCapture(event.pointerId);
        startX = event.clientX; startY = event.clientY;
        lastX  = translateX;   lastY  = translateY;
      });

      canvas.addEventListener('pointermove', function (event) {
        if (!isDragging) return;
        translateX = lastX + event.clientX - startX;
        translateY = lastY + event.clientY - startY;
        applyTransform();
      });

      function endDrag(event) {
        if (!isDragging) return;
        isDragging = false;
        canvas.classList.remove('is-dragging');
        if (event && canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
      }

      canvas.addEventListener('pointerup',     endDrag);
      canvas.addEventListener('pointercancel', endDrag);

      canvas.addEventListener('wheel', function (event) {
        if (!modal.classList.contains('is-open')) return;
        event.preventDefault();
        zoom = Math.min(4, Math.max(1, event.deltaY > 0 ? zoom - 0.12 : zoom + 0.12));
        applyTransform();
      }, { passive: false });
    }

    window.addEventListener('resize', function () {
      if (modal.classList.contains('is-open')) fitImage();
    });
  }


  /* ── Shared Escape key handler ── */

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
      closePopover();
    }
  });

})();