// UX case study interactions.
(function(){
  const modal=document.querySelector('[data-ux-modal]');
  const canvas=modal?modal.querySelector('.ux-modal__canvas'):null;
  const modalImage=document.querySelector('[data-modal-image]');
  const modalTitle=document.querySelector('#modal-title');
  const modalCaption=document.querySelector('[data-modal-caption]');
  const closeButton=document.querySelector('[data-modal-close]');
  let lastFocus=null,isDragging=false,startX=0,startY=0,translateX=0,translateY=0,lastX=0,lastY=0,baseScale=1,zoom=1;
  function apply(){if(modalImage)modalImage.style.transform=`translate(${translateX}px, ${translateY}px) scale(${baseScale*zoom})`;}
  function reset(){isDragging=false;translateX=0;translateY=0;lastX=0;lastY=0;baseScale=1;zoom=1;if(canvas)canvas.classList.remove('is-dragging');apply();}
  function fit(){if(!modalImage||!canvas)return;const rect=canvas.getBoundingClientRect();const w=modalImage.naturalWidth||rect.width;const h=modalImage.naturalHeight||rect.height;modalImage.style.width=`${w}px`;modalImage.style.height=`${h}px`;baseScale=Math.min((rect.width-56)/w,(rect.height-56)/h,1);zoom=1;translateX=0;translateY=0;apply();}
  function openModal(trigger){if(!modal||!modalImage||!closeButton)return;lastFocus=trigger;const src=trigger.getAttribute('data-modal-src');modalImage.removeAttribute('src');modalImage.removeAttribute('style');modalImage.alt=trigger.getAttribute('data-modal-caption')||trigger.getAttribute('data-modal-title')||'Image preview';if(modalTitle)modalTitle.textContent=trigger.getAttribute('data-modal-title')||'Image preview';if(modalCaption)modalCaption.textContent=trigger.getAttribute('data-modal-caption')||'';modal.classList.add('is-open');document.body.classList.add('ux-modal-open');reset();modalImage.src=src;modalImage.addEventListener('load',fit,{once:true});if(modalImage.complete)fit();closeButton.focus();}
  function closeModal(){if(!modal)return;modal.classList.remove('is-open');document.body.classList.remove('ux-modal-open');reset();if(modalImage){modalImage.removeAttribute('src');modalImage.removeAttribute('style');modalImage.alt='';}if(lastFocus)lastFocus.focus();}
  document.querySelectorAll('[data-modal-src]').forEach(trigger=>trigger.addEventListener('click',()=>openModal(trigger)));
  if(closeButton)closeButton.addEventListener('click',closeModal);
  if(modal)modal.addEventListener('click',event=>{if(event.target===modal)closeModal();});
  if(canvas){canvas.addEventListener('pointerdown',event=>{if(!modal.classList.contains('is-open'))return;isDragging=true;canvas.classList.add('is-dragging');canvas.setPointerCapture(event.pointerId);startX=event.clientX;startY=event.clientY;lastX=translateX;lastY=translateY;});canvas.addEventListener('pointermove',event=>{if(!isDragging)return;translateX=lastX+event.clientX-startX;translateY=lastY+event.clientY-startY;apply();});function endDrag(event){if(!isDragging)return;isDragging=false;canvas.classList.remove('is-dragging');if(event&&canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);}canvas.addEventListener('pointerup',endDrag);canvas.addEventListener('pointercancel',endDrag);canvas.addEventListener('wheel',event=>{if(!modal.classList.contains('is-open'))return;event.preventDefault();zoom=Math.min(4,Math.max(1,event.deltaY>0?zoom-.12:zoom+.12));apply();},{passive:false});}
  window.addEventListener('resize',()=>{if(modal&&modal.classList.contains('is-open'))fit();});
  const popover=document.querySelector('[data-recipe-popover]');let active=null;
  function closePopover(){if(!popover)return;popover.classList.remove('is-open');popover.innerHTML='';if(active)active.setAttribute('aria-expanded','false');active=null;}
  function openPopover(trigger){if(!popover)return;if(active===trigger&&popover.classList.contains('is-open')){closePopover();return;}if(active)active.setAttribute('aria-expanded','false');active=trigger;trigger.setAttribute('aria-expanded','true');popover.innerHTML=`<span>Secondary recipe</span><h3>${trigger.dataset.recipeTitle}</h3><p>${trigger.dataset.recipeBody}</p><a href="${trigger.dataset.recipeLink}">View recipe</a>`;const rect=trigger.getBoundingClientRect();popover.style.top=`${Math.max(16,Math.min(rect.bottom+10,window.innerHeight-220))}px`;popover.style.left=`${Math.max(16,Math.min(rect.left,window.innerWidth-380))}px`;popover.classList.add('is-open');}
  document.querySelectorAll('.ux-recipe-trigger').forEach(trigger=>{trigger.setAttribute('aria-expanded','false');trigger.addEventListener('click',()=>openPopover(trigger));});
  document.addEventListener('click',event=>{const target=event.target;if(!(target instanceof Element))return;if(!target.closest('.ux-recipe-trigger')&&!target.closest('[data-recipe-popover]'))closePopover();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeModal();closePopover();}});
})();
