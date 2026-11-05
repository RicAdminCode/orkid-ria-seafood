import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { Window } from 'happy-dom';

const baseline = JSON.parse(await readFile('tests/fixtures/page-parity.json','utf8'));
test('404 is fully pre-rendered for visitors without JavaScript', async () => {
  const html = await readFile('dist/404.html','utf8');
  assert.match(html, /This table is empty\./);
  assert.match(html, /Return Home/);
  assert.match(html, /content="noindex"/);
});
for (const slug of Object.keys(baseline)) test(`React prerender preserves content, images and links: /${slug}`, async () => {
  const window = new Window({url:'https://orkidriaseafood.com/'+(slug?slug+'/':'')});
  try {
    window.document.write(await readFile(`dist/${slug?slug+'/':''}index.html`,'utf8'));
    window.document.querySelectorAll('script').forEach(node=>node.remove());
    const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
    const actual={
      text:hash(window.document.body.textContent.replace(/\s+/g,' ').trim()),
      images:hash([...window.document.querySelectorAll('img')].map(e=>[e.src,e.alt,e.width,e.height])),
      links:hash([...window.document.querySelectorAll('a')].map(e=>[e.href,e.textContent.trim()])),
    };
    assert.deepEqual(actual,baseline[slug]);
  } finally { await window.happyDOM.close(); }
});
