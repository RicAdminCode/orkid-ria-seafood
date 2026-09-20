import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {Window} from 'happy-dom';
const slugs=['','menu','about','restaurant','reservation'];
const descriptions=new Set();
for(const slug of slugs)test(`SEO document and local assets: /${slug}`,()=>{
 const window=new Window();const document=window.document;
 document.write(readFileSync(`${slug?slug+'/':''}index.html`,'utf8'));
 const canonical=`https://orkidriaseafood.com/${slug?slug+'/':''}`;
 assert.equal(document.querySelector('link[rel=canonical]').href,canonical);
 assert.equal(document.querySelectorAll('h1').length,1);
 const description=document.querySelector('meta[name=description]').content;
 assert.ok(!descriptions.has(description));descriptions.add(description);
 assert.equal(document.querySelector('meta[property="og:url"]').content,canonical);
 const graph=JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
 const business=graph.find(x=>x['@type']==='Restaurant');
 assert.equal(business.telephone,'+60176144128');assert.ok(!business.aggregateRating);
 assert.ok(document.querySelector('.business-address').textContent.includes('Lot 418'));
 for(const img of document.querySelectorAll("img")){
  assert.ok(img.hasAttribute('alt'));assert.ok(+img.width>0&&+img.height>0);
  for(const path of [img.getAttribute('src'),...img.getAttribute('srcset').split(',').map(x=>x.trim().split(' ')[0])])assert.ok(existsSync(path.replace(/^\.\.\//,'')),path);
 }
 for(const a of document.querySelectorAll('a[href]')){
  const url=new URL(a.getAttribute('href'),canonical);
  if(url.origin!==new URL(canonical).origin)continue;
  const path=url.pathname;
  assert.ok(existsSync(path.slice(1)+(path.endsWith('/')?'index.html':'')),path);
 }
 if(slug){assert.ok(document.querySelector('[aria-label=Breadcrumb]'));assert.ok(graph.some(x=>x['@type']==='BreadcrumbList'));}
 else assert.ok(document.querySelector('[data-google-reviews]').hidden);
 window.happyDOM.abort();
});
