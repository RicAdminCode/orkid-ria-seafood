import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFile } from 'node:fs/promises';
import { createWorker } from '../server/worker.js';
import { seal, unseal, digest } from '../server/security.js';
import { SCOPE, publicReview } from '../server/google.js';
const sql=await readFile(new URL('../migrations/0001_reviews.sql',import.meta.url),'utf8');
function database(){
 const db=new DatabaseSync(':memory:');db.exec(sql);
 return {raw:db,prepare(query){return {bind(...values){return {async first(){return db.prepare(query).get(...values)||null;},async run(){return db.prepare(query).run(...values);}};},async run(){return db.prepare(query).run();}};},async batch(stmts){db.exec('BEGIN');try{const results=[];for(const stmt of stmts)results.push(await stmt.run());db.exec('COMMIT');return results;}catch(e){db.exec('ROLLBACK');throw e;}}};
}
const origin='http://localhost:3123';
function environment(){return {DB:database(),SITE_ORIGIN:origin,GOOGLE_CLIENT_ID:'mock-client',GOOGLE_CLIENT_SECRET:'mock-secret',ADMIN_PASSWORD:'mock-admin-password-32-characters-minimum',TOKEN_ENCRYPTION_KEY:Buffer.alloc(32,7).toString('base64url'),ASSETS:{fetch:()=>new Response('asset')}};}
function req(path,env,{method='GET',body,admin=false,headers={}}={}){
 return new Request(origin+path,{method,headers:{'CF-Connecting-IP':'192.0.2.1',...(admin?{Authorization:'Basic '+btoa('admin:'+env.ADMIN_PASSWORD)}:{}),...(body?{'Content-Type':'application/x-www-form-urlencoded',Origin:origin}:{}),...headers},body});
}
const ok=data=>new Response(JSON.stringify(data),{headers:{'Content-Type':'application/json'}});
const review=i=>({reviewId:`mock-${i}`,reviewer:{displayName:'Mock reviewer'},starRating:i===0?'ONE':'FIVE',comment:`Mock review ${i}`,createTime:'2026-01-01T00:00:00Z',updateTime:'2026-01-01T00:00:00Z',reviewReply:{comment:'private omitted field'}});
async function seed(env){
 env.DB.raw.prepare('INSERT INTO settings VALUES (?,?)').run('connection',await seal({refreshToken:'mock-refresh-secret'},env.TOKEN_ENCRYPTION_KEY,'connection'));
 env.DB.raw.prepare('INSERT INTO settings VALUES (?,?)').run('location','accounts/123/locations/456');
 env.DB.raw.prepare('INSERT INTO settings VALUES (?,?)').run('revision','mock-revision');
}
async function csrfToken(worker,env){const result=await worker.fetch(req('/admin/reviews',env,{admin:true}),env);const html=await result.text();return html.match(/name="csrf" value="([^"]+)"/)[1];}
function provider(calls=[]){return async(url,options)=>{
 calls.push([String(url),options]);
 if(String(url).endsWith('/token'))return ok({access_token:'mock-access'});
 if(String(url).includes('/reviews?')){const u=new URL(url);return ok({reviews:u.searchParams.has('pageToken')?[review(6)]:Array.from({length:6},(_,i)=>review(i)),averageRating:3.7,totalReviewCount:7,...(!u.searchParams.has('pageToken')?{nextPageToken:'google-next-token'}:{})});}
 if(String(url).includes('businessinformation'))return ok({metadata:{mapsUri:'https://maps.google.com/?cid=123'}});
 if(String(url).includes('accountmanagement'))return ok({accounts:[]});
 throw Error('Unexpected mock request');
};}
test('mocked pagination exposes only public fields, includes negative reviews, seals cursor and uses Google totals',async()=>{
 const env=environment();await seed(env);const calls=[],worker=createWorker(provider(calls));
 const response=await worker.fetch(req('/api/reviews',env),env);assert.equal(response.status,200);assert.match(response.headers.get('Cache-Control'),/no-store/);
 const first=await response.json();assert.equal(first.reviews.length,6);assert.equal(first.reviews[0].rating,1);assert.equal(first.averageRating,3.7);assert.equal(first.totalReviewCount,7);assert.ok(first.nextCursor);assert.ok(!first.nextCursor.includes('google-next-token'));
 assert.deepEqual(Object.keys(first.reviews[0]),['id','name','rating','createTime','updateTime','text','photoUrl']);
 assert.ok(!JSON.stringify(first).includes('secret'));assert.ok(!JSON.stringify(first).includes('private omitted'));
 const next=await worker.fetch(req('/api/reviews?cursor='+encodeURIComponent(first.nextCursor),env),env);const second=await next.json();assert.equal(second.reviews.length,1);assert.equal(second.nextCursor,null);
 const urls=calls.filter(([u])=>u.includes('/reviews?')).map(([u])=>new URL(u));assert.equal(urls[0].searchParams.get('pageSize'),'6');assert.equal(urls[1].searchParams.get('pageToken'),'google-next-token');assert.equal(urls[0].searchParams.get('orderBy'),'updateTime desc');
 assert.deepEqual(env.DB.raw.prepare('SELECT key FROM settings ORDER BY key').all().map(x=>x.key),['connection','location','revision']);
});
test('unconfigured, expired/tampered cursor, changed selection and revoked refresh token fail closed',async()=>{
 const env=environment();const worker=createWorker(provider());assert.equal((await worker.fetch(req('/api/reviews',env),env)).status,503);await seed(env);
 for(const cursor of ['tampered',await seal({exp:1},env.TOKEN_ENCRYPTION_KEY,'cursor'),await seal({exp:Date.now()+10000,revision:'old',parent:'accounts/123/locations/456'},env.TOKEN_ENCRYPTION_KEY,'cursor')]){
  const r=await worker.fetch(req('/api/reviews?cursor='+encodeURIComponent(cursor),env),env);assert.equal(r.status,400);assert.equal((await r.json()).error,'INVALID_CURSOR');
 }
 const revoked=createWorker(async()=>new Response(JSON.stringify({error:'invalid_grant'}),{status:400}));
 const r=await revoked.fetch(req('/api/reviews',env),env);assert.equal((await r.json()).error,'AUTH_REQUIRED');assert.equal(env.DB.raw.prepare("SELECT * FROM settings WHERE key='connection'").get(),undefined);
});
test('mocked upstream 403, 429, 500 and timeout return safe errors without upstream payload',async()=>{
 for(const [status,code] of [[403,'AUTH_REQUIRED'],[429,'RATE_LIMITED'],[500,'UPSTREAM_UNAVAILABLE']]){
  const env=environment();await seed(env);const worker=createWorker(async()=>new Response(JSON.stringify({error:{message:'mock-secret-sensitive-upstream'}}),{status}));
  const r=await worker.fetch(req('/api/reviews',env),env);assert.equal((await r.json()).error,code);
 }
 const env=environment();await seed(env);const worker=createWorker(async()=>{throw Error('mock private network detail');});assert.equal((await (await worker.fetch(req('/api/reviews',env),env)).json()).error,'UPSTREAM_UNAVAILABLE');
});
test('public rate limiter and cross-site/method protection',async()=>{
 const env=environment(),worker=createWorker(provider());
 assert.equal((await worker.fetch(req('/api/reviews',env,{headers:{'Sec-Fetch-Site':'cross-site'}}),env)).status,403);
 assert.equal((await worker.fetch(req('/api/reviews',env,{method:'POST'}),env)).status,405);
 for(let i=0;i<28;i++)await worker.fetch(req('/api/reviews',env),env);
 const r=await worker.fetch(req('/api/reviews',env),env);assert.equal(r.status,429);assert.equal(r.headers.get('Retry-After'),'60');
});
test('admin requires authentication, same-origin POST, csrf; stored credentials encrypted',async()=>{
 const env=environment(),worker=createWorker(provider());
 const denied=await worker.fetch(req('/admin/reviews',env),env);assert.equal(denied.status,401);assert.ok(denied.headers.has('WWW-Authenticate'));
 let r=await worker.fetch(req('/admin/reviews/connect',env,{admin:true,method:'POST',body:'csrf=bad'}),env);assert.equal(r.status,403);
 const csrf=await csrfToken(worker,env);
 r=await worker.fetch(req('/admin/reviews/connect',env,{admin:true,method:'POST',body:new URLSearchParams({csrf}),headers:{Origin:'https://evil.example'}}),env);assert.equal(r.status,403);
 await seed(env);assert.ok(!env.DB.raw.prepare("SELECT value FROM settings WHERE key='connection'").get().value.includes('mock-refresh-secret'));
 const wrongKey=Buffer.alloc(32,8).toString('base64url');await assert.rejects(()=>unseal(env.DB.raw.prepare("SELECT value FROM settings WHERE key='connection'").get().value,wrongKey,'connection'));
});
test('mocked OAuth state + PKCE flow, browser binding and replay protection',async()=>{
 const env=environment();let exchange;
 const worker=createWorker(async(url,options)=>{if(String(url).endsWith('/token')){exchange=new URLSearchParams(options.body);return ok({access_token:'mock-access',refresh_token:'mock-refresh-secret',scope:SCOPE});}return provider()(url,options);});
 const csrf=await csrfToken(worker,env);
 const connect=await worker.fetch(req('/admin/reviews/connect',env,{admin:true,method:'POST',body:new URLSearchParams({csrf})}),env);assert.equal(connect.status,303);
 const auth=new URL(connect.headers.get('Location'));assert.equal(auth.origin,'https://accounts.google.com');assert.equal(auth.searchParams.get('scope'),SCOPE);assert.equal(auth.searchParams.get('code_challenge_method'),'S256');
 const state=auth.searchParams.get('state'),cookie=connect.headers.get('Set-Cookie').split(';')[0];
 const callback=`/admin/reviews/callback?state=${state}&code=mock-code`;
 const result=await worker.fetch(req(callback,env,{admin:true,headers:{Cookie:cookie}}),env);assert.equal(result.status,303);
 assert.equal(await digest(exchange.get('code_verifier')),auth.searchParams.get('code_challenge'));assert.equal(exchange.get('redirect_uri'),origin+'/admin/reviews/callback');
 assert.equal((await worker.fetch(req(callback,env,{admin:true,headers:{Cookie:cookie}}),env)).status,400);
 assert.equal((await unseal(env.DB.raw.prepare("SELECT value FROM settings WHERE key='connection'").get().value,env.TOKEN_ENCRYPTION_KEY,'connection')).refreshToken,'mock-refresh-secret');
});
test('mocked location verification is required; disconnect clears secrets even when revocation fails',async()=>{
 const env=environment();await seed(env);const worker=createWorker(provider());const csrf=await csrfToken(worker,env);
 const denied=createWorker(async(url,options)=>String(url).includes('/reviews?')?new Response(JSON.stringify({error:'unverified'}),{status:403}):provider()(url,options));
 let r=await denied.fetch(req('/admin/reviews/select',env,{admin:true,method:'POST',body:new URLSearchParams({csrf,location:'accounts/123/locations/789'})}),env);assert.equal(r.status,503);assert.equal(env.DB.raw.prepare("SELECT value FROM settings WHERE key='location'").get().value,'accounts/123/locations/456');
 r=await worker.fetch(req('/admin/reviews/select',env,{admin:true,method:'POST',body:new URLSearchParams({csrf,location:'accounts/123/locations/789'})}),env);assert.equal(r.status,303);
 const failRevoke=createWorker(async()=>{throw Error('offline');});r=await failRevoke.fetch(req('/admin/reviews/disconnect',env,{admin:true,method:'POST',body:new URLSearchParams({csrf})}),env);assert.equal(r.status,200);assert.match(await r.text(),/could not be confirmed/);assert.equal(env.DB.raw.prepare('SELECT count(*) AS n FROM settings').get().n,0);
});
test('missing public fields stay missing; profile URL and content cannot become executable markup',()=>{
 const result=publicReview({reviewer:{profilePhotoUrl:'javascript:alert(1)'},comment:'<img onerror="alert(1)">'});assert.equal(result.name,null);assert.equal(result.photoUrl,null);assert.equal(result.rating,null);assert.equal(result.createTime,null);assert.equal(result.text,'<img onerror="alert(1)">');
});
test('public budget exhaustion does not block an authenticated administrator; CSP permits Google consent',async()=>{
 const env=environment(),worker=createWorker(provider());
 for(let i=0;i<50;i++)await worker.fetch(req('/api/reviews',env,{headers:{'CF-Connecting-IP':`192.0.2.${i}`}}),env);
 assert.equal((await worker.fetch(req('/api/reviews',env,{headers:{'CF-Connecting-IP':'192.0.2.100'}}),env)).status,429);
 const admin=await worker.fetch(req('/admin/reviews',env,{admin:true}),env);assert.equal(admin.status,200);assert.match(admin.headers.get('Content-Security-Policy'),/form-action 'self' https:\/\/accounts.google.com/);
});
test('OAuth callback from another browser cannot connect an account',async()=>{
 const env=environment(),worker=createWorker(()=>{throw Error('must not call Google');});const csrf=await csrfToken(worker,env);
 const connect=await worker.fetch(req('/admin/reviews/connect',env,{admin:true,method:'POST',body:new URLSearchParams({csrf})}),env);
 const state=new URL(connect.headers.get('Location')).searchParams.get('state');
 const result=await worker.fetch(req(`/admin/reviews/callback?state=${state}&code=mock-code`,env,{admin:true,headers:{Cookie:'gbp_oauth=wrong-browser'}}),env);
 assert.equal(result.status,400);assert.equal(env.DB.raw.prepare('SELECT count(*) AS n FROM settings').get().n,0);
});
test('scheduled cleanup removes expired OAuth state and quota counters',async()=>{
 const env=environment(),worker=createWorker(provider());env.DB.raw.prepare('INSERT INTO oauth_states VALUES (?,?,?)').run('old','encrypted',0);env.DB.raw.prepare('INSERT INTO rate_limits VALUES (?,?,?)').run('old',1,0);
 await worker.scheduled({},env);assert.equal(env.DB.raw.prepare('SELECT count(*) AS n FROM oauth_states').get().n,0);assert.equal(env.DB.raw.prepare('SELECT count(*) AS n FROM rate_limits').get().n,0);
});
