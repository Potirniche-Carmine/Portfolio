const lightbox = document.querySelector('.lightbox');
const triggers = [...document.querySelectorAll('[data-lightbox]')];
const projects = [...document.querySelectorAll('.project')];
const projectToggles = projects.map(project => project.querySelector('.project-toggle'));
let current = 0;
let imageTrigger;

function activateProject(id) {
  for (const project of projects) {
    const active = project.id === id;
    project.classList.toggle('is-active', active);
    project.querySelector('.project-toggle').setAttribute('aria-expanded', String(active));
    project.querySelector('.project-body').hidden = !active;
  }
  if (window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const body = document.querySelector('.project.is-active .project-body');
    if (body) gsap.fromTo(body, {y:6}, {y:0,duration:.28,ease:'power2.out',overwrite:true,clearProps:'transform'});
  }
  window.ScrollTrigger?.refresh();
}

if (projects.length) {
  document.documentElement.classList.add('enhanced');
  activateProject(projects.some(project => project.id === location.hash.slice(1)) ? location.hash.slice(1) : 'umbratic');
  projectToggles.forEach((toggle, index) => {
    toggle.disabled = false;
    toggle.addEventListener('click', () => activateProject(toggle.closest('.project').classList.contains('is-active') ? null : toggle.dataset.project));
    toggle.addEventListener('keydown', event => {
      const offsets = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      let target;
      if (event.key in offsets) target = (index + offsets[event.key] + projects.length) % projects.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = projects.length - 1;
      if (target === undefined) return;
      event.preventDefault();
      projectToggles[target].focus();
      activateProject(projects[target].id);
    });
  });
  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    if (projects.some(project => project.id === id)) activateProject(id);
  });
}

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

// Every section remains readable if motion libraries fail or scripts are disabled.
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from('.hero-visual', {y:12, duration:.6, ease:'power3.out', clearProps:'transform'});
    const reveals = document.querySelectorAll('[data-reveal]');
    if (reveals.length) gsap.fromTo(reveals, {opacity:.7}, {opacity:1, stagger:.12, ease:'none', scrollTrigger:{trigger:'.engineering-loop', start:'top 88%', end:'top 45%', scrub:.4}});
  });
  motion.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
    ScrollTrigger.create({trigger:'.engineering',start:'top 18%',end:'bottom 57%',pin:'.engineering-heading',pinSpacing:false,invalidateOnRefresh:true});
  });
  document.querySelectorAll('.engineering-details').forEach(details => details.addEventListener('toggle', () => ScrollTrigger.refresh()));
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}
