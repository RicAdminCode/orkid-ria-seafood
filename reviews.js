// Reviews stay in memory only; refresh replaces all pages to reflect Google edits/deletions.
export function mountReviews(root, { fetcher = fetch, refreshMs = 300000 } = {}) {
  const doc = root.ownerDocument;
  const list = root.querySelector('[data-review-list]');
  const status = root.querySelector('[data-review-status]');
  const summary = root.querySelector('[data-review-summary]');
  const google = root.querySelector('[data-review-google]');
  const more = root.querySelector('[data-review-more]');
  const retry = root.querySelector('[data-review-retry]');
  let cursor = null, pending = false, lastSuccess = 0, retryAppend = false, serial = 0;
  const node = (tag, text, className) => {
    const el = doc.createElement(tag);
    if (text !== undefined) el.textContent = text;
    if (className) el.className = className;
    return el;
  };
  function renderReview(review) {
    const card = node('article', undefined, 'google-review');
    const heading = node('div', undefined, 'review-person');
    // A missing or failed photo needs no fabricated avatar or identity.
    if (review.photoUrl && /^https:\/\//.test(review.photoUrl)) {
      const photo = node('img');
      photo.src = review.photoUrl; photo.alt = ''; photo.loading = 'lazy';
      photo.referrerPolicy = 'no-referrer'; photo.addEventListener('error', () => photo.remove());
      heading.append(photo);
    }
    heading.append(node('h3', review.name || 'Name unavailable'));
    card.append(heading);
    const meta = node('div', undefined, 'review-meta');
    if (Number.isFinite(review.rating) && review.rating >= 1 && review.rating <= 5) {
      const stars = node('span', '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating), 'review-stars');
      stars.setAttribute('aria-label', `${review.rating} out of 5 stars`); meta.append(stars);
    }
    const date = new Date(typeof review.createTime === 'string' && review.createTime.trim() ? review.createTime : NaN);
    if (!Number.isNaN(date.valueOf())) {
      const time = node('time', new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date));
      time.dateTime = date.toISOString(); meta.append(time);
    }
    card.append(meta);
    if (review.text) {
      const text = node('p', review.text, 'review-text');
      text.id = `google-review-text-${++serial}`; card.append(text);
      if (review.text.length > 240 || review.text.split('\n').length > 4) {
        text.classList.add('is-collapsed');
        const toggle = node('button', 'Read more', 'review-read-more');
        toggle.type = 'button'; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-controls', text.id);
        toggle.addEventListener('click', () => {
          const expanded = toggle.getAttribute('aria-expanded') !== 'true';
          toggle.setAttribute('aria-expanded', String(expanded));
          text.classList.toggle('is-collapsed', !expanded); toggle.textContent = expanded ? 'Read less' : 'Read more';
        }); card.append(toggle);
      }
    } else card.append(node('p', 'Rating only — no written review.', 'review-no-text'));
    return card;
  }
  async function load(append = false) {
    if (pending) return;
    pending = true; retryAppend = append; root.setAttribute('aria-busy', 'true');
    more.disabled = true; retry.hidden = true; status.textContent = append ? 'Loading more Google reviews…' : 'Loading Google reviews…';
    if (!append) { list.replaceChildren(); summary.textContent = ''; google.hidden = true; more.hidden = true; cursor = null; }
    try {
      const response = await fetcher(`/api/reviews${append && cursor ? `?cursor=${encodeURIComponent(cursor)}` : ''}`, { cache: 'no-store', credentials: 'omit', signal: AbortSignal.timeout(40000) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'UPSTREAM_UNAVAILABLE');
      if (!Array.isArray(data.reviews)) throw new Error('UPSTREAM_UNAVAILABLE');
      const firstNew = list.children.length;
      data.reviews.forEach(review => list.append(renderReview(review)));
      summary.textContent = Number.isFinite(data.totalReviewCount)
        ? `${Number.isFinite(data.averageRating) ? `${data.averageRating.toFixed(1)} out of 5 · ` : ''}${data.totalReviewCount.toLocaleString('en')} Google reviews` : '';
      const listing = new URL(data.googleUrl);
      if (listing.protocol === 'https:' && ['google.com', 'www.google.com', 'maps.google.com', 'maps.app.goo.gl'].includes(listing.hostname)) { google.href = listing.href; google.hidden = false; }
      cursor = data.nextCursor || null; more.hidden = !cursor;
      status.textContent = list.children.length ? `Showing ${list.children.length} Google reviews.${cursor ? '' : ' All available reviews are shown.'}` : 'No Google reviews are available yet.';
      lastSuccess = Date.now();
      if (append && list.children[firstNew]) { list.children[firstNew].tabIndex = -1; list.children[firstNew].focus(); }
    } catch (error) {
      const messages = { NOT_CONNECTED: 'Google reviews are not connected yet.', AUTH_REQUIRED: 'Google reviews are temporarily unavailable while access is renewed.', RATE_LIMITED: 'Google reviews are busy. Please try again shortly.', INVALID_CURSOR: 'The reviews have changed. Reload to see the latest reviews.' };
      status.textContent = messages[error.message] || 'Google reviews could not be loaded. Please try again.';
      if (error.message === 'INVALID_CURSOR') retryAppend = false;
      retry.hidden = false;
    } finally { pending = false; root.setAttribute('aria-busy', 'false'); more.disabled = false; }
  }
  more.addEventListener('click', () => load(true)); retry.addEventListener('click', () => load(retryAppend));
  const refresh = () => { if (!doc.hidden && Date.now() - lastSuccess >= refreshMs) void load(false); };
  const timer = setInterval(refresh, refreshMs);
  doc.addEventListener('visibilitychange', refresh);
  void load();
  return { reload: () => load(false), destroy: () => { clearInterval(timer); doc.removeEventListener('visibilitychange', refresh); } };
}
if (typeof document !== 'undefined') {
  const root = document.querySelector('[data-google-reviews]');
  if (root && !root.hidden) mountReviews(root);
}
