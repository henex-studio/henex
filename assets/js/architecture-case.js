/* HENEX Architecture Case JS v0.2
   Scope: architecture case study pages only. */
(function(){
  const popover=document.querySelector('[data-arch-recipe-popover]');
  let active=null;

  function closePopover(){
    if(!popover) return;
    popover.classList.remove('is-open');
    popover.innerHTML='';
    if(active) active.setAttribute('aria-expanded','false');
    active=null;
  }

  function openPopover(trigger){
    if(!popover) return;
    if(active===trigger&&popover.classList.contains('is-open')){
      closePopover();
      return;
    }
    if(active) active.setAttribute('aria-expanded','false');
    active=trigger;
    trigger.setAttribute('aria-expanded','true');
    popover.innerHTML=`<span class="arch-popover__eyebrow">Secondary recipe</span><h3 class="arch-popover__title">${trigger.dataset.recipeTitle}</h3><p class="arch-popover__body">${trigger.dataset.recipeBody}</p><a class="arch-popover__link" href="${trigger.dataset.recipeLink}">View recipe</a>`;
    const rect=trigger.getBoundingClientRect();
    popover.style.top=`${Math.max(16,Math.min(rect.bottom+10,window.innerHeight-260))}px`;
    popover.style.left=`${Math.max(16,Math.min(rect.left,window.innerWidth-380))}px`;
    popover.classList.add('is-open');
  }

  document.querySelectorAll('.arch-recipe-trigger').forEach(trigger=>{
    trigger.setAttribute('aria-expanded','false');
    trigger.addEventListener('click',event=>{
      event.preventDefault();
      event.stopPropagation();
      openPopover(trigger);
    });
  });

  document.addEventListener('click',event=>{
    const target=event.target;
    if(!(target instanceof Element)) return;
    if(!target.closest('.arch-recipe-trigger')&&!target.closest('[data-arch-recipe-popover]')) closePopover();
  });

  document.addEventListener('keydown',event=>{
    if(event.key==='Escape') closePopover();
  });
})();
