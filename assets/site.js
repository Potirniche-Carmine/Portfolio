const lightbox = document.querySelector('.lightbox');
const triggers = [...document.querySelectorAll('[data-lightbox]')];
let current = 0;
let imageTrigger;

function showImage(index) {
  current = (index + triggers.length) % triggers.length;
  const trigger = triggers[current];
  const source = trigger.querySelector('img');
  const image = lightbox.querySelector('img');
  image.src = trigger.dataset.image || source.currentSrc || source.src;
  image.alt = trigger.dataset.alt || source.alt;
  // Reserve the original image ratio while the next screenshot loads.
  const cover = source || trigger.closest('.project')?.querySelector('.project-cover');
  image.width = Number(cover?.getAttribute('width')) || 1920;
  image.height = Number(cover?.getAttribute('height')) || 1080;
  lightbox.querySelector('.image-count').textContent = `${current + 1} / ${triggers.length}`;
  lightbox.querySelector('.lightbox-footer p').textContent = trigger.dataset.caption || 'Umbratic workspace. Sample content.';
  lightbox.querySelector('.original-image').href = image.src;
}

triggers.forEach((trigger, index) => {
  trigger.addEventListener('click', event => {
    event.preventDefault();
    imageTrigger = trigger;
    showImage(index);
    lightbox.showModal();
  });
});
lightbox?.querySelector('.close-image').addEventListener('click', () => lightbox.close());
lightbox?.querySelector('.previous-image').addEventListener('click', () => showImage(current - 1));
lightbox?.querySelector('.next-image').addEventListener('click', () => showImage(current + 1));
lightbox?.addEventListener('keydown', event => {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  event.preventDefault();
  showImage(current + (event.key === 'ArrowRight' ? 1 : -1));
});
lightbox?.addEventListener('click', event => {
  if (event.target !== lightbox) return;
  const rect = lightbox.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) lightbox.close();
});
lightbox?.addEventListener('close', () => imageTrigger?.focus({preventScroll:true}));
