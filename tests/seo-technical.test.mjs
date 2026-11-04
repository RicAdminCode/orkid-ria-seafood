import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createWorker} from '../server/worker.js';

const origin='https://orkidriaseafood.com';
const worker=createWorker();
function environment(site=origin){return {SITE_ORIGIN:site,ASSETS:{fetch:async request=>new Response(new URL(request.url).pathname==='/missing-page'?'Not found':request.url,{status:new URL(request.url).pathname==='/missing-page'?404:200})}};}
for(const [input,expected] of [
 ['http://orkidriaseafood.com/menu?release=old',origin+'/menu/'],
 [origin+'/restaurant/index.html?release=old',origin+'/restaurant/'],
 [origin+'/?release=old',origin+'/'],
 ['https://www.orkidriaseafood.com/about/',origin+'/about/'],
 ['https://orkid-ria-seafood.steep-mud-60fb.workers.dev/reservation/',origin+'/reservation/']
])test(`canonical redirect: ${input}`,async()=>{
 const response=await worker.fetch(new Request(input),environment());
 assert.equal(response.status,301);assert.equal(response.headers.get('Location'),expected);
});
for(const input of [origin+'/',origin+'/styles.css?v=123','http://localhost:3123/menu/?release=test','https://unrelated.example/menu/'])test(`preserves ${input}`,async()=>{
 const response=await worker.fetch(new Request(input),environment());
 assert.equal(response.status,200);assert.equal(response.headers.get('Location'),null);assert.equal(await response.text(),input);
});
test('local SITE_ORIGIN disables production normalisation',async()=>{
 const response=await worker.fetch(new Request(origin+'/?release=test'),environment('http://localhost:3123'));
 assert.equal(response.status,200);
});
test('campaign attribution survives host/path redirects and preview flag removal',async()=>{
 const query='utm_source=editorial&utm_medium=referral&utm_campaign=pantai_tengah&gclid=sample-click';
 const response=await worker.fetch(new Request(`https://www.orkidriaseafood.com/about/index.html?release=preview&${query}`),environment());
 assert.equal(response.status,301);
 assert.equal(response.headers.get('Location'),`${origin}/about/?${query}`);
 const landing=await worker.fetch(new Request(response.headers.get('Location')),environment());
 assert.equal(landing.status,200);
 assert.equal(landing.headers.get('Location'),null);
 assert.equal(await landing.text(),`${origin}/about/?${query}`);
});
test('canonical pages preserve campaign, referral and repeated query parameters',async()=>{
 for(const query of ['utm_source=instagram&utm_medium=social','fbclid=sample&ref=hotel','utm_content=one&utm_content=two']){
  const url=`${origin}/menu/?${query}`;
  const response=await worker.fetch(new Request(url),environment());
  assert.equal(response.status,200);assert.equal(await response.text(),url);
 }
});
test('unknown page retains true 404',async()=>{
 const response=await worker.fetch(new Request(origin+'/missing-page'),environment());assert.equal(response.status,404);
});
test('OAuth and API parameters are not canonical redirects',async()=>{
 for(const path of ['/admin/reviews/callback?code=test&state=test','/api/reviews?cursor=test']){
  const response=await worker.fetch(new Request('https://orkid-ria-seafood.steep-mud-60fb.workers.dev'+path),environment());
  assert.equal(response.status,403);assert.equal(response.headers.get('Location'),null);
 }
});
test('robots points to a sitemap containing exactly five public canonical pages',async()=>{
 const robots=await readFile('robots.txt','utf8'),sitemap=await readFile('sitemap.xml','utf8');
 assert.match(robots,/Sitemap: https:\/\/orkidriaseafood.com\/sitemap.xml/);
 assert.match(robots,/Disallow: \/admin\//);assert.match(robots,/Disallow: \/api\//);
 assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>match[1]),['/','/menu/','/about/','/restaurant/','/reservation/'].map(path=>origin+path));
 const build=await readFile('scripts/build.mjs','utf8');assert.match(build,/'robots.txt','sitemap.xml'/);
});
test('Cloudflare routes canonical and www hosts through the normalisation worker',async()=>{
 const config=JSON.parse(await readFile('wrangler.jsonc','utf8'));
 assert.deepEqual(config.routes,[
  {pattern:'orkidriaseafood.com/*',zone_name:'orkidriaseafood.com'},
  {pattern:'www.orkidriaseafood.com/*',zone_name:'orkidriaseafood.com'}
 ]);
});
