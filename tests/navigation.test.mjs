import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Window } from 'happy-dom';

// Mocked DOM interaction checks; these do not measure rendered layout or real browsers.
const source = await readFile(new URL('../app.js', import.meta.url), 'utf8');
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const storageKey = 'orkid-ria-motion-paused';
function setup(t, savedPreference) {
  const window = new Window({ url: 'http://localhost:3123' });
  // Prevent third-party resources and inline scripts from participating in these checks.
  window.document.write(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<link\b[^>]*>/gi, ''));
  const intervals = [];
  window.setInterval = (callback, delay) => intervals.push({ callback, delay });
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const matchMedia = window.matchMedia.bind(window);
  window.matchMedia = query => query === '(prefers-reduced-motion: reduce)' ? media : matchMedia(query);
  if (savedPreference !== undefined) window.localStorage.setItem(storageKey, savedPreference);
  window.eval(source.replace('export function mountInteractions', 'function mountInteractions') + '\nwindow.disposeInteractions = mountInteractions();');
  window.document.dispatchEvent(new window.Event('DOMContentLoaded'));
  t.after(() => { window.disposeInteractions(); return window.happyDOM.close(); });
  return { window, document: window.document, intervals, media };
}

test('mocked mobile navigation Escape closes the menu and restores trigger focus', t => {
  const { window, document } = setup(t);
  const menu = document.querySelector('.mobile-menu');
  menu.click();
  document.querySelector('.nav-link').focus();
  assert.equal(menu.getAttribute('aria-expanded'), 'true');
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape' }));
  assert.equal(menu.getAttribute('aria-expanded'), 'false');
  assert.equal(document.querySelector('.site-header').classList.contains('open'), false);
  assert.equal(document.activeElement, menu);
});

test('page cleanup removes event handlers and carousel clones before route unmount', t => {
  const { window, document } = setup(t);
  const menu = document.querySelector('.mobile-menu');
  window.disposeInteractions();
  menu.click();
  assert.equal(menu.getAttribute('aria-expanded'),'false');
  assert.equal(document.querySelectorAll('.feature-rail .dish-card[inert]').length,0);
});

test('mocked mobile navigation closes on outside click or a selected navigation link', t => {
  const { document } = setup(t);
  const menu = document.querySelector('.mobile-menu');
  menu.click();
  document.querySelector('main').click();
  assert.equal(menu.getAttribute('aria-expanded'), 'false');
  menu.click();
  const link = document.querySelector('.nav-link');
  link.addEventListener('click', event => event.preventDefault());
  link.click();
  assert.equal(menu.getAttribute('aria-expanded'), 'false');
});

test('mocked carousel arrow keys change the visible photograph and wrap at either end', t => {
  const { window, document } = setup(t);
  const slides = [...document.querySelectorAll('.slide')];
  const activeIndex = () => slides.findIndex(slide => slide.classList.contains('active'));
  const start = activeIndex();
  const next = document.querySelector('.next');
  const key = value => next.dispatchEvent(new window.KeyboardEvent('keydown', { key: value, bubbles: true, cancelable: true }));
  key('ArrowRight');
  assert.equal(activeIndex(), (start + 1) % slides.length);
  key('ArrowLeft');
  assert.equal(activeIndex(), start);
  for (let i = 0; i < slides.length; i++) key('ArrowLeft');
  assert.equal(activeIndex(), start);
  assert.equal(document.querySelectorAll('.slide[aria-hidden="false"]').length, 1);
  assert.equal(slides[start].getAttribute('aria-hidden'), 'false');
});

test('mocked footer omits the removed motion button despite an obsolete pause preference', t => {
  const { document } = setup(t, 'true');
  assert.equal(document.querySelector('.motion-toggle'), null);
  assert.equal(document.documentElement.classList.contains('motion-paused'), false);
});

test('mocked guest stories advance and wrap, but stay still during reading or reduced motion', async t => {
  const { window, document, intervals, media } = setup(t, 'true');
  const rail = document.querySelector('.guest-story-rail');
  const section = rail.closest('section');
  let hovered = false, offscreen = false, hidden = false;
  const matches = section.matches.bind(section);
  section.matches = selector => selector === ':hover' ? hovered : matches(selector);
  rail.getBoundingClientRect = () => ({ top: offscreen ? window.innerHeight : 100, bottom: offscreen ? window.innerHeight + 400 : 500 });
  rail.firstElementChild.getBoundingClientRect = () => ({ width: 448 });
  rail.style.gap = '32px';
  Object.defineProperty(rail, 'scrollWidth', { value: 2000 });
  Object.defineProperty(rail, 'clientWidth', { value: 900 });
  Object.defineProperty(document, 'hidden', { get: () => hidden });
  Object.defineProperty(media, 'matches', { value: false, writable: true });
  const movements = [];
  rail.scrollTo = options => { movements.push(options); rail.scrollLeft = options.left; };
  const tick = async () => {
    for (const timer of intervals.filter(timer => timer.delay === 5000)) await timer.callback();
  };
  await tick();
  assert.ok(rail.scrollLeft > 0, 'visible stories advance');
  assert.equal(movements.at(-1).behavior, 'smooth');
  rail.scrollLeft = rail.scrollWidth - rail.clientWidth;
  await tick();
  assert.equal(rail.scrollLeft, 0, 'last stories wrap to the start');
  assert.equal(movements.at(-1).behavior, 'instant', 'wrapping avoids sweeping past every review');
  const before = movements.length;
  hovered = true; await tick(); hovered = false;
  const link = section.querySelector('.guest-source-link');
  link.focus(); await tick(); link.blur();
  media.matches = true; await tick(); media.matches = false;
  offscreen = true; await tick(); offscreen = false;
  hidden = true; await tick(); hidden = false;
  assert.equal(movements.length, before, 'reading, reduced motion, offscreen and hidden states do not rotate');
  await tick();
  assert.ok(movements.length > before, 'rotation resumes when permitted');
});
