// HENEX case study interactions.
(function () {
  const imageModal = document.querySelector('[data-image-modal]');
  const modalImage = document.querySelector('[data-modal-image-target]');
  const modalTitle = document.querySelector('#modal-title');
  const modalCaption = document.querySelector('[data-modal-caption]');
  const modalClose = document.querySelector('[data-modal-close]');
  let lastFocusedElement = null;

  function openImageModal(trigger) {
    if (!imageModal || !modalImage || !modalClose) return;
    lastFocusedElement = trigger;
    const imageSrc = trigger.getAttribute('data-modal-image');
    const imageTitle = trigger.getAttribute('data-modal-title') || 'Image preview';
    const imageCaption = trigger.getAttribute('data-modal-caption') || '';
    modalImage.src = imageSrc;
    modalImage.alt = imageCaption || imageTitle;
    modalTitle.textContent = imageTitle;
    modalCaption.textContent = imageCaption;
    imageModal.classList.add('is-open');
    document.body.classList.add('modal-open');
    modalClose.focus();
  }

  function closeImageModal() {
    if (!imageModal) return;
    imageModal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  document.querySelectorAll('[data-modal-image]').forEach((trigger) => {
    trigger.addEventListener('click', () => openImageModal(trigger));
  });

  if (modalClose) modalClose.addEventListener('click', closeImageModal);
  if (imageModal) imageModal.addEventListener('click', (event) => { if (event.target === imageModal) closeImageModal(); });

  const recipePopover = document.querySelector('[data-recipe-popover]');
  let activeRecipeTrigger = null;

  function closeRecipePopover() {
    if (!recipePopover) return;
    recipePopover.classList.remove('is-open');
    recipePopover.innerHTML = '';
    if (activeRecipeTrigger) activeRecipeTrigger.setAttribute('aria-expanded', 'false');
    activeRecipeTrigger = null;
  }

  function openRecipePopover(trigger) {
    if (!recipePopover) return;
    if (activeRecipeTrigger === trigger && recipePopover.classList.contains('is-open')) { closeRecipePopover(); return; }
    if (activeRecipeTrigger) activeRecipeTrigger.setAttribute('aria-expanded', 'false');
    activeRecipeTrigger = trigger;
    trigger.setAttribute('aria-expanded', 'true');
    recipePopover.innerHTML = `<p class="case-kicker">Secondary recipe</p><h3>${trigger.dataset.popoverTitle}</h3><p>${trigger.dataset.popoverBody}</p>`;
    const rect = trigger.getBoundingClientRect();
    recipePopover.style.top = `${Math.max(16, Math.min(rect.bottom + 10, window.innerHeight - 190))}px`;
    recipePopover.style.left = `${Math.max(16, Math.min(rect.left, window.innerWidth - 360))}px`;
    recipePopover.classList.add('is-open');
  }

  document.querySelectorAll('.recipe-trigger').forEach((trigger) => {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', () => openRecipePopover(trigger));
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.recipe-trigger') && !event.target.closest('[data-recipe-popover]')) closeRecipePopover();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { closeImageModal(); closeRecipePopover(); }
  });
})();
