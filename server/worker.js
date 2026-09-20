import {random,encode,digest,seal,unseal,isAdmin,escape,formBody} from './security.js';
import {SCOPE,ServiceError,tokenRequest,api,reviewsPage,publicReview,listingUrl} from './google.js';

const securityHeaders={'Cache-Control':'no-store, private','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','X-Frame-Options':'DENY','Content-Security-Policy':"default-src 'none'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; form-action 'self' https://accounts.google.com; base-uri 'none'; frame-ancestors 'none'"};
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{...securityHeaders,'Content-Type':'application/json',...(status===429?{'Retry-After':'60'}:{})}});
const redirect=(path,headers={})=>new Response(null,{status:303,headers:{...securityHeaders,Location:path,...headers}});
const read=async(env,key)=>(await env.DB.prepare('SELECT value FROM settings WHERE key=?').bind(key).first())?.value;
const write=(env,key,value)=>env.DB.prepare('INSERT INTO settings(key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind(key,value).run();
const remove=(env,key)=>env.DB.prepare('DELETE FROM settings WHERE key=?').bind(key).run();
const configured=env=>env.GOOGLE_CLIENT_ID&&env.GOOGLE_CLIENT_SECRET&&env.TOKEN_ENCRYPTION_KEY&&env.ADMIN_PASSWORD?.length>=32;
const cookie=request=>(request.headers.get('Cookie')||'').split(';').map(x=>x.trim()).find(x=>x.startsWith('gbp_oauth='))?.slice(10);
const cookieHeader=(env,value,age=600)=>`gbp_oauth=${value}; HttpOnly; SameSite=Lax; Path=/admin/reviews; Max-Age=${age}${new URL(env.SITE_ORIGIN).protocol==='https:'?'; Secure':''}`;

async function limit(env,key,max){
 const bucket=Math.floor(Date.now()/60000);
 const row=await env.DB.prepare('INSERT INTO rate_limits(key,count,expires) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count').bind(`${key}:${bucket}`,Date.now()+120000).first();
 if(row.count>max)throw new ServiceError('RATE_LIMITED',429);
}
async function getConnection(env){const saved=await read(env,'connection');return saved?unseal(saved,env.TOKEN_ENCRYPTION_KEY,'connection'):null;}
async function access(env,transport){
 const connection=await getConnection(env);
 if(!connection)throw new ServiceError('NOT_CONNECTED');
 try{
  const token=await tokenRequest(env,{grant_type:'refresh_token',refresh_token:connection.refreshToken},transport);
  if(!token.access_token)throw new ServiceError('AUTH_REQUIRED');
  return token.access_token;
 }catch(error){
  if(error.code==='AUTH_REQUIRED') await remove(env,'connection');
  throw error;
 }
}
const locationInfo=(parent,token,transport)=>api(`https://mybusinessbusinessinformation.googleapis.com/v1/${parent.split('/').slice(2).join('/')}?readMask=name,title,metadata`,token,transport);
function adminPage(content,status=200){
 return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Google reviews · Orkid Ria administration</title><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/admin.css"></head><body><main class="admin-shell"><a href="/">← Orkid Ria</a><h1>Google reviews</h1>${content}</main></body></html>`,{status,headers:{...securityHeaders,'Content-Type':'text/html; charset=utf-8'}});
}
function form(action,csrf,content){return `<form method="post" action="${action}"><input type="hidden" name="csrf" value="${escape(csrf)}">${content}</form>`;}
async function csrf(env){return seal({exp:Date.now()+3600000,admin:await digest(env.ADMIN_PASSWORD)},env.TOKEN_ENCRYPTION_KEY,'csrf');}
async function validateForm(request,env){
 if(request.headers.get('Origin')!==env.SITE_ORIGIN)throw new ServiceError('FORBIDDEN',403);
 let data,token;
 try{data=await formBody(request);token=await unseal(data.get('csrf'),env.TOKEN_ENCRYPTION_KEY,'csrf');}catch{throw new ServiceError('FORBIDDEN',403);}
 if(token.admin!==await digest(env.ADMIN_PASSWORD))throw new ServiceError('FORBIDDEN',403);
 return data;
}
async function publicReviews(request,env,transport){
 if(!configured(env))throw new ServiceError('NOT_CONNECTED');
 const parent=await read(env,'location');
 const revision=await read(env,'revision');
 if(!parent)throw new ServiceError('NOT_CONNECTED');
 const cursor=new URL(request.url).searchParams.get('cursor');let pageToken;
 if(cursor){
  try{const data=await unseal(cursor,env.TOKEN_ENCRYPTION_KEY,'cursor');if(data.revision!==revision||data.parent!==parent)throw Error();pageToken=data.token;}catch{throw new ServiceError('INVALID_CURSOR',400);}
 }
 const token=await access(env,transport);
 let page;
 try{page=await reviewsPage(parent,token,pageToken,transport);}catch(error){if(cursor&&error.code==='GOOGLE_REJECTED')throw new ServiceError('INVALID_CURSOR',400);throw error;}
 const location=await locationInfo(parent,token,transport);
 return json({
  averageRating:typeof page.averageRating==='number'?page.averageRating:null,
  totalReviewCount:Number.isInteger(page.totalReviewCount)?page.totalReviewCount:null,
  reviews:(page.reviews||[]).map(publicReview),
  googleUrl:listingUrl(location.metadata?.mapsUri),
  nextCursor:page.nextPageToken?await seal({parent,revision,token:page.nextPageToken,exp:Date.now()+600000},env.TOKEN_ENCRYPTION_KEY,'cursor'):null,
  fetchedAt:new Date().toISOString()
 });
}
async function administration(request,env,transport){
 if(!await isAdmin(request,env))return new Response('Administrator authentication required.',{status:401,headers:{...securityHeaders,'WWW-Authenticate':'Basic realm="Orkid Ria administration", charset="UTF-8"'}});
 await limit(env,'admin-global',20);
 if(!configured(env))return adminPage('<p>Server setup is incomplete. Configure the Google client ID, client secret, token encryption key, administrator password, and site origin as described in the setup guide.</p>',503);
 const url=new URL(request.url),path=url.pathname;
 if(path==='/admin/reviews/callback'&&request.method==='GET'){
  const state=url.searchParams.get('state');const browser=cookie(request);
  if(!state||!browser)throw new ServiceError('OAUTH_STATE_INVALID',400);
  // Atomic consumption prevents replay, even with concurrent callbacks.
  const row=await env.DB.prepare('DELETE FROM oauth_states WHERE id=? AND expires>? RETURNING payload').bind(await digest(state),Date.now()).first();
  let saved;try{saved=await unseal(row?.payload,env.TOKEN_ENCRYPTION_KEY,'oauth');}catch{throw new ServiceError('OAUTH_STATE_INVALID',400);}
  if(saved.browser!==await digest(browser)||saved.admin!==await digest(env.ADMIN_PASSWORD))throw new ServiceError('OAUTH_STATE_INVALID',400);
  if(url.searchParams.has('error'))return adminPage('<p>Google authorisation was cancelled or denied. No new connection was saved.</p><a href="/admin/reviews">Return to setup</a>',400);
  const code=url.searchParams.get('code');if(!code)throw new ServiceError('OAUTH_STATE_INVALID',400);
  const tokens=await tokenRequest(env,{grant_type:'authorization_code',code,code_verifier:saved.verifier,redirect_uri:`${env.SITE_ORIGIN}/admin/reviews/callback`},transport);
  if(!tokens.refresh_token||!tokens.scope?.split(' ').includes(SCOPE))throw new ServiceError('OAUTH_SCOPE_OR_OFFLINE_ACCESS_MISSING',400);
  await env.DB.batch([
   env.DB.prepare('INSERT INTO settings(key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind('connection',await seal({refreshToken:tokens.refresh_token},env.TOKEN_ENCRYPTION_KEY,'connection')),
   env.DB.prepare('DELETE FROM settings WHERE key IN (?,?)').bind('location','revision')
  ]);
  return redirect('/admin/reviews',{'Set-Cookie':cookieHeader(env,'',0)});
 }
 if(request.method==='POST'){
  const data=await validateForm(request,env);
  if(path==='/admin/reviews/connect'){
   const state=random(),browser=random(),verifier=encode(crypto.getRandomValues(new Uint8Array(32)));
   await env.DB.prepare('INSERT INTO oauth_states(id,payload,expires) VALUES (?,?,?)').bind(await digest(state),await seal({browser:await digest(browser),admin:await digest(env.ADMIN_PASSWORD),verifier},env.TOKEN_ENCRYPTION_KEY,'oauth'),Date.now()+600000).run();
   const target=new URL('https://accounts.google.com/o/oauth2/v2/auth');
   target.search=new URLSearchParams({client_id:env.GOOGLE_CLIENT_ID,redirect_uri:`${env.SITE_ORIGIN}/admin/reviews/callback`,response_type:'code',scope:SCOPE,access_type:'offline',prompt:'consent',state,code_challenge:await digest(verifier),code_challenge_method:'S256'}).toString();
   return redirect(target.href,{'Set-Cookie':cookieHeader(env,browser)});
  }
  if(path==='/admin/reviews/select'){
   const parent=data.get('location');if(!/^accounts\/[\w-]+\/locations\/[\w-]+$/.test(parent||''))throw new ServiceError('INVALID_LOCATION',400);
   const token=await access(env,transport);
   // Google only allows reviews.list for verified locations. Do not trust submitted Maps links.
   await reviewsPage(parent,token,null,transport);
   const location=await locationInfo(parent,token,transport);listingUrl(location.metadata?.mapsUri);
   await env.DB.batch([
    env.DB.prepare('INSERT INTO settings(key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind('location',parent),
    env.DB.prepare('INSERT INTO settings(key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind('revision',random())
   ]);
   return redirect('/admin/reviews');
  }
  if(path==='/admin/reviews/disconnect'){
   const connection=await getConnection(env);
   await env.DB.batch([env.DB.prepare('DELETE FROM settings'),env.DB.prepare('DELETE FROM oauth_states')]);
   let revoked=true;
   if(connection){try{const result=await transport('https://oauth2.googleapis.com/revoke',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({token:connection.refreshToken}),signal:AbortSignal.timeout(12000)});revoked=result.ok;}catch{revoked=false;}}
   return adminPage(`<p>Local connection and location selection removed. ${revoked?'Google access revoked.':'Google revocation could not be confirmed. Remove this app from your Google Account permissions to finish revocation.'}</p><a href="/admin/reviews">Return to setup</a>`);
  }
  throw new ServiceError('NOT_FOUND',404);
 }
 if(request.method!=='GET'||path!=='/admin/reviews')throw new ServiceError('NOT_FOUND',404);
 const csrfToken=await csrf(env),connection=await getConnection(env),parent=await read(env,'location');
 let content=`<p>Connect a Google account that owns or manages the verified restaurant location. The permission Google requires can manage business information; this integration only reads reviews and listing details.</p><p>Status: ${connection?(parent?'Location selected; reviews are requested live.':'Google authorised; choose a location below.'):'Not connected.'}</p>`;
 content+=form('/admin/reviews/connect',csrfToken,'<button type="submit">Connect Google account</button>');
 if(!connection)return adminPage(content);
 content+=form('/admin/reviews/disconnect',csrfToken,'<button type="submit">Disconnect and revoke Google access</button>');
 const token=await access(env,transport);
 const account=url.searchParams.get('account');
 if(account){
  if(!/^accounts\/[\w-]+$/.test(account))throw new ServiceError('INVALID_ACCOUNT',400);
  const endpoint=new URL(`https://mybusinessbusinessinformation.googleapis.com/v1/${account}/locations`);
  endpoint.search=new URLSearchParams({readMask:'name,title,storefrontAddress',pageSize:'50',...(url.searchParams.get('page')?{pageToken:url.searchParams.get('page')}:{})});
  const data=await api(endpoint.href,token,transport);
  content+='<h2>Select the restaurant</h2><p>Confirm the name and address. Selection succeeds only if Google allows reviews access and supplies a listing URL.</p>';
  for(const loc of data.locations||[]){
   content+=form('/admin/reviews/select',csrfToken,`<input type="hidden" name="location" value="${escape(account+'/'+loc.name)}"><p><strong>${escape(loc.title)}</strong><br>${escape([...(loc.storefrontAddress?.addressLines||[]),loc.storefrontAddress?.locality].filter(Boolean).join(', '))}</p><button type="submit">Use this location</button>`);
  }
  if(data.nextPageToken)content+=`<a href="?${escape(new URLSearchParams({account,page:data.nextPageToken}))}">More locations →</a>`;
  content+='<p><a href="/admin/reviews">Back to accounts</a></p>';
 }else{
  const endpoint=new URL('https://mybusinessaccountmanagement.googleapis.com/v1/accounts');endpoint.searchParams.set('pageSize','20');if(url.searchParams.get('page'))endpoint.searchParams.set('pageToken',url.searchParams.get('page'));
  const data=await api(endpoint.href,token,transport);content+='<h2>Select an account</h2><ul>';
  for(const acct of data.accounts||[])content+=`<li><a href="?account=${encodeURIComponent(acct.name)}">${escape(acct.accountName)}</a></li>`;
  content+='</ul>';if(data.nextPageToken)content+=`<a href="?page=${encodeURIComponent(data.nextPageToken)}">More accounts →</a>`;
 }
 return adminPage(content);
}

export function createWorker(transport=fetch){return {
 async fetch(request,env){
  const path=new URL(request.url).pathname;
  if(!path.startsWith('/api/')&&!path.startsWith('/admin/'))return env.ASSETS.fetch(request);
  try{
   const site=new URL(env.SITE_ORIGIN);
   if(site.origin!==env.SITE_ORIGIN || (site.protocol!=='https:'&&!['localhost','127.0.0.1'].includes(site.hostname)))throw new ServiceError('SERVER_CONFIGURATION');
   if(new URL(request.url).origin!==site.origin)throw new ServiceError('FORBIDDEN',403);
   const ip=await digest(request.headers.get('CF-Connecting-IP')||'local');
   await limit(env,`ip:${path.startsWith('/admin/')?'admin':'public'}:${ip}`,path.startsWith('/admin/')?20:30);
   if(path.startsWith('/api/'))await limit(env,'public-global',50); // Reserve separate capacity for authenticated administrators.
   if(path==='/api/reviews'){
    if(request.method!=='GET')return json({error:'METHOD_NOT_ALLOWED'},405);
    if(request.headers.get('Sec-Fetch-Site')==='cross-site')throw new ServiceError('FORBIDDEN',403);
    return await publicReviews(request,env,transport);
   }
   if(path.startsWith('/admin/reviews'))return await administration(request,env,transport);
   throw new ServiceError('NOT_FOUND',404);
  }catch(error){
   const code=error instanceof ServiceError?error.code:'UPSTREAM_UNAVAILABLE';
   if(path.startsWith('/admin/'))return adminPage(`<p>Unable to complete this action (${escape(code)}).</p><p>Check the setup guide for the matching error. No credentials are displayed.</p><a href="/admin/reviews">Return to setup</a>`,error.status||503);
   return json({error:['ACCESS_DENIED','AUTH_REQUIRED'].includes(code)?'AUTH_REQUIRED':code},error.status||503);
  }
 },
 async scheduled(_event,env){await env.DB.batch([env.DB.prepare('DELETE FROM rate_limits WHERE expires<?').bind(Date.now()),env.DB.prepare('DELETE FROM oauth_states WHERE expires<?').bind(Date.now())]);}
};}
export default createWorker();
