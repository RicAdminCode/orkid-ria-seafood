const q = (selector, context = document) => context.querySelector(selector);
const qa = (selector, context = document) => [...context.querySelectorAll(selector)];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
function applyMotionPreference() {
  document.documentElement.classList.toggle('motion-paused', reducedMotion.matches);
  if (reducedMotion.matches) qa('.reveal').forEach(el => el.classList.add('in'));
}
applyMotionPreference();
reducedMotion.addEventListener('change', applyMotionPreference);

const header = q('.site-header');
const menu = q('.mobile-menu');
header?.classList.add('navigation-ready');
function setMenu(open) {
  header?.classList.toggle('open', open);
  menu?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  if (menu) menu.textContent = open ? 'Close' : 'Menu';
}
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
qa('.nav-link').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (header && !header.contains(event.target)) setMenu(false);
});
matchMedia('(max-width: 760px)').addEventListener('change', () => setMenu(false));

const slides = qa('.slide');
let current = Math.max(0, slides.findIndex(slide => slide.classList.contains('active')));
function show(index, automatic = false) {
  if (!slides.length) return;
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === current);
    if (i === current) {
      const photo = q('img', slide);
      if (photo) photo.loading = 'eager';
    }
    slide.setAttribute('aria-hidden', String(i !== current));
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} of ${slides.length}`);
  });
  const count = q('.slide-count');
  if (count) {
    count.setAttribute('aria-live', automatic ? 'off' : 'polite');
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
}
q('.next')?.addEventListener('click', () => show(current + 1));
q('.prev')?.addEventListener('click', () => show(current - 1));
q('.slider-controls')?.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  show(current + (event.key === 'ArrowRight' ? 1 : -1));
});
show(current);

const hero = q('.hero-main');
function canRotateHero() {
  return hero && !document.hidden && !reducedMotion.matches &&
    !hero.matches(':focus-within') && !q('.slider-controls:hover', hero) && hero.getBoundingClientRect().bottom > 0;
}
if (hero && slides.length > 1) setInterval(async () => {
  if (!canRotateHero()) return;
  const expected = current;
  const photo = q('img', slides[(current + 1) % slides.length]);
  if (photo) {
    photo.loading = 'eager';
    try { await photo.decode(); } catch { return; }
  }
  if (current === expected && canRotateHero()) show(current + 1, true);
}, 3000);

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  }), { threshold: .08 });
  document.documentElement.classList.add('motion-ready');
  qa('.reveal').forEach(el => observer.observe(el));
  // Keyboard navigation must never land on visually hidden content.
  document.addEventListener('focusin', event => event.target.closest('.reveal')?.classList.add('in'));
}

// Keep decorative cards still during interaction and when motion is paused.
qa('.rotating-card').forEach((card, cardIndex) => {
  const photos = qa('.card-photo', card);
  let photoIndex = Math.max(0, photos.findIndex(photo => photo.classList.contains('is-current')));
  if (photos.length < 2) return;
  setInterval(() => {
    if (document.hidden || reducedMotion.matches || card.matches(':hover, :focus-within')) return;
    // A broken photograph must not prevent the remaining photographs from rotating.
    for (let offset = 1; offset < photos.length; offset++) {
      const nextIndex = (photoIndex + offset) % photos.length;
      if (!photos[nextIndex].complete || !photos[nextIndex].naturalWidth) continue;
      photos[photoIndex].classList.remove('is-current');
      photos[nextIndex].classList.add('is-current');
      photoIndex = nextIndex;
      break;
    }
  }, 5000 + cardIndex * 1000);
});

qa('[data-rail-direction]').forEach(button => {
  button.addEventListener('click', () => {
    const rail = q('.photo-rail', button.closest('section'));
    const item = rail?.firstElementChild;
    if (!item) return;
    const distance = item.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).gap);
    rail.scrollBy({ left: Number(button.dataset.railDirection) * distance, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  });
});

const guestRail = q('.guest-story-rail');
if (guestRail && guestRail.children.length > 1) {
  const section = guestRail.closest('section');
  setInterval(() => {
    if (document.hidden || reducedMotion.matches ||
        section.matches(':hover') || section.contains(document.activeElement) || guestRail.matches(':active')) return;
    const bounds = guestRail.getBoundingClientRect();
    const maximum = guestRail.scrollWidth - guestRail.clientWidth;
    if (bounds.top >= window.innerHeight || bounds.bottom <= 0 || maximum <= 1) return;
    const distance = guestRail.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(guestRail).gap);
    const atEnd = guestRail.scrollLeft >= maximum - 2;
    guestRail.scrollTo({ left: atEnd ? 0 : Math.min(guestRail.scrollLeft + distance, maximum), behavior: atEnd ? 'instant' : 'smooth' });
  }, 5000);
}

if (document.body.classList.contains('structure-match')) {
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

const seafoodRail = q('.seafood-showcase .feature-rail');
if (seafoodRail) {
  const section = seafoodRail.closest('section');
  const originals = qa('.dish-card', seafoodRail);
  if (originals.length > 1) {
    for (const [card, prepend] of [[originals.at(-1), true], [originals[0], false]]) {
      const clone = card.cloneNode(true);
      clone.inert = true;
      clone.setAttribute('aria-hidden', 'true');
      if (prepend) seafoodRail.prepend(clone);
      else seafoodRail.append(clone);
    }
    const cards = qa('.dish-card', seafoodRail);
    const progress = q('.feature-progress span', section);
    const status = q('.feature-status', section);
    let selected = 1;
    let settleTimer;
    function selectCard(index, animate = true) {
      selected = index;
      const card = cards[index];
      seafoodRail.scrollTo({
        left: card.offsetLeft - (seafoodRail.clientWidth - card.offsetWidth) / 2,
        behavior: animate && !reducedMotion.matches ? 'smooth' : 'instant'
      });
      updateCards();
    }
    function updateCards() {
      cards.forEach((card, index) => {
        card.classList.toggle('is-featured', index === selected);
        card.setAttribute('aria-current', String(index === selected));
      });
      const realIndex = (selected - 1 + originals.length) % originals.length;
      if (progress) {
        progress.style.width = `${100 / originals.length}%`;
        progress.style.left = `${realIndex * 100 / originals.length}%`;
      }
    }
    function settleCards() {
      if (selected === 0) selectCard(originals.length, false);
      else if (selected === cards.length - 1) selectCard(1, false);
      if (status) status.textContent = `${(selected - 1 + originals.length) % originals.length + 1} of ${originals.length} · ${q('h3', cards[selected]).textContent}`;
    }
    seafoodRail.addEventListener('scroll', () => {
      const center = seafoodRail.scrollLeft + seafoodRail.clientWidth / 2;
      selected = cards.reduce((nearest, card, index) =>
        Math.abs(card.offsetLeft + card.offsetWidth / 2 - center) <
        Math.abs(cards[nearest].offsetLeft + cards[nearest].offsetWidth / 2 - center) ? index : nearest, 0);
      updateCards();
      clearTimeout(settleTimer);
      settleTimer = setTimeout(settleCards, 150);
    }, { passive: true });
    qa('[data-feature-direction]', section).forEach(button => button.addEventListener('click', () => {
      // Resolve a loop boundary before starting another user-requested movement.
      if (selected === 0 || selected === cards.length - 1) settleCards();
      selectCard(selected + Number(button.dataset.featureDirection));
    }));
    seafoodRail.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      q(`[data-feature-direction="${event.key === 'ArrowRight' ? 1 : -1}"]`, section).click();
    });
    window.addEventListener('resize', () => selectCard(selected, false));
    seafoodRail.classList.add('carousel-ready');
    selectCard(1, false);
    settleCards();
  }
}
