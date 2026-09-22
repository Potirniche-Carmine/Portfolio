const lightbox = document.querySelector('.lightbox');
const triggers = [...document.querySelectorAll('[data-lightbox]')];
let current = 0;
let imageTrigger;

function showImage(index) {
  current = (index + triggers.length) % triggers.length;
  const trigger = triggers[current];
  const source = trigger.querySelector('img');
  const caption = trigger.closest('figure').querySelector('figcaption');
  const image = lightbox.querySelector('img');
  image.src = source.currentSrc || source.src;
  image.alt = source.alt;
  const fullWidth = Number(source.getAttribute('width'));
  const fullHeight = Number(source.getAttribute('height'));
  const [x,y,width,height] = trigger.dataset.crop?.split(' ').map(Number) || [0,0,fullWidth,fullHeight];
  const frame = lightbox.querySelector('.lightbox-image');
  frame.style.setProperty('--aspect',width / height);
  frame.style.setProperty('--image-width',`${fullWidth / width * 100}%`);
  frame.style.setProperty('--image-left',`${-x / width * 100}%`);
  frame.style.setProperty('--image-top',`${-y / height * 100}%`);
  lightbox.querySelector('.image-count').textContent = `${current + 1} / ${triggers.length}`;
  lightbox.querySelector('.lightbox-footer p').textContent = caption?.innerText || source.alt;
  lightbox.querySelector('.original-image').href = image.src;
}

triggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
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
