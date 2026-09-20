import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Window } from 'happy-dom';
const source = await readFile(new URL('../reviews.js', import.meta.url), 'utf8');
const { mountReviews } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const sample = (id, text = 'Excellent dinner') => ({ id, name: 'Mock reviewer', rating: 1, text, createTime: '2026-01-01T00:00:00Z', photoUrl: null });
const page = (reviews, nextCursor = null) => ({ averageRating: 3.2, totalReviewCount: 7, reviews, nextCursor, googleUrl: 'https://maps.google.com/?cid=123' });
const settle = () => new Promise(resolve => setTimeout(resolve, 10));
function setup(fetcher) {
  const window = new Window(); window.document.body.innerHTML = html;
  const root = window.document.querySelector('[data-google-reviews]');
  const instance = mountReviews(root, { fetcher });
  return { root, instance, window };
}
test('mocked six initial reviews, original text, accessible controls, pagination and no fabricated photo', async () => {
  const calls = []; const long = '<script>alert(1)</script> ' + 'Original review. '.repeat(60);
  const { root, instance, window } = setup(async url => { calls.push(url); return { ok: true, json: async () => calls.length === 1 ? page(Array.from({ length: 6 }, (_, i) => sample(String(i), long)), 'opaque + token') : page([sample('7')]) }; });
  await settle();
  assert.equal(root.querySelectorAll('.google-review').length, 6);
  assert.equal(root.querySelector('.review-text').textContent, long);
  assert.equal(root.querySelectorAll('.review-text script').length, 0);
  assert.equal(root.querySelectorAll('.review-person img').length, 0);
  assert.equal(root.querySelector('.review-stars').getAttribute('aria-label'), '1 out of 5 stars');
  const toggle = root.querySelector('.review-read-more'); toggle.click();
  assert.equal(toggle.getAttribute('aria-expanded'), 'true');
  assert.equal(root.querySelector('.review-text').classList.contains('is-collapsed'), false);
  assert.equal(window.document.getElementById(toggle.getAttribute('aria-controls')), root.querySelector('.review-text'));
  root.querySelector('[data-review-more]').click(); await settle();
  assert.equal(calls[1], '/api/reviews?cursor=opaque%20%2B%20token');
  assert.equal(root.querySelectorAll('.google-review').length, 7);
  assert.equal(window.document.activeElement, root.querySelectorAll('.google-review')[6]);
  assert.equal(root.querySelector('[data-review-more]').hidden, true);
  instance.destroy(); window.happyDOM.abort();
});
test('mocked loading, API failure retry, and empty state', async () => {
  let release; let calls = 0;
  const { root, instance, window } = setup(async () => { calls++; if (calls === 1) await new Promise(resolve => { release = resolve; }); return { ok: calls > 1, json: async () => calls === 1 ? { error: 'NOT_CONNECTED' } : page([]) }; });
  assert.equal(root.getAttribute('aria-busy'), 'true'); release(); await settle();
  assert.match(root.querySelector('[data-review-status]').textContent, /not connected/);
  assert.equal(root.querySelector('[data-review-google]').hidden, true);
  root.querySelector('[data-review-retry]').click(); await settle();
  assert.match(root.querySelector('[data-review-status]').textContent, /No Google reviews/);
  assert.equal(root.getAttribute('aria-busy'), 'false');
  instance.destroy(); window.happyDOM.abort();
});
test('mocked pagination failure preserves reviews and refresh removes deleted records', async () => {
  let calls = 0;
  const { root, instance, window } = setup(async () => { calls++; return { ok: calls !== 2, json: async () => calls === 2 ? { error: 'UPSTREAM_UNAVAILABLE' } : calls === 1 ? page([sample('1')], 'next') : page([sample('updated', 'Edited review')]) }; });
  await settle(); root.querySelector('[data-review-more]').click(); await settle();
  assert.equal(root.querySelectorAll('.google-review').length, 1);
  assert.equal(root.querySelector('[data-review-retry]').hidden, false);
  await instance.reload();
  assert.equal(root.querySelectorAll('.google-review').length, 1);
  assert.equal(root.querySelector('.review-text').textContent, 'Edited review');
  instance.destroy(); window.happyDOM.abort();
});
test('mocked missing date/name and failed photo do not invent reviewer details; untrusted source link stays hidden', async () => {
  const review = { ...sample('1'), name: null, createTime: null, photoUrl: 'https://example.com/missing.jpg' };
  const { root, instance, window } = setup(async () => ({ ok: true, json: async () => ({ ...page([review]), googleUrl: 'https://google.evil.com/fake' }) }));
  await settle();
  assert.equal(root.querySelector('.review-person h3').textContent, 'Name unavailable');
  assert.equal(root.querySelector('time'), null);
  const photo = root.querySelector('.review-person img');
  photo.dispatchEvent(new window.Event('error'));
  assert.equal(root.querySelector('.review-person img'), null);
  assert.equal(root.querySelector('[data-review-google]').hidden, true);
  instance.destroy(); window.happyDOM.abort();
});
test('mocked invalid pagination cursor retries from the first page and accepts verified Maps short link', async () => {
  const calls = [];
  const { root, instance, window } = setup(async url => {
    calls.push(url);
    return { ok: calls.length !== 2, json: async () => calls.length === 2 ? { error: 'INVALID_CURSOR' } : { ...page([sample('1')], calls.length === 1 ? 'expired' : null), googleUrl: 'https://maps.app.goo.gl/verified' } };
  });
  await settle();
  assert.equal(root.querySelector('[data-review-google]').hidden, false);
  root.querySelector('[data-review-more]').click(); await settle();
  assert.match(root.querySelector('[data-review-status]').textContent, /reviews have changed/);
  root.querySelector('[data-review-retry]').click(); await settle();
  assert.deepEqual(calls, ['/api/reviews', '/api/reviews?cursor=expired', '/api/reviews']);
  assert.equal(root.querySelectorAll('.google-review').length, 1);
  instance.destroy(); window.happyDOM.abort();
});
