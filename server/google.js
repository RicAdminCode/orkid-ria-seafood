export const SCOPE='https://www.googleapis.com/auth/business.manage';
export class ServiceError extends Error {
  constructor(code,status=503){super(code);this.code=code;this.status=status;}
}
export async function googleJSON(url, options={}, transport=fetch) {
  let response;
  try { response=await transport(url,{...options,signal:AbortSignal.timeout(12000),redirect:'error'}); }
  catch { throw new ServiceError('UPSTREAM_UNAVAILABLE'); }
  let data;
  try { data=await response.json(); } catch { throw new ServiceError('UPSTREAM_UNAVAILABLE'); }
  if(!response.ok){
    if(response.status===401 || data.error==='invalid_grant') throw new ServiceError('AUTH_REQUIRED');
    if(response.status===403) throw new ServiceError('ACCESS_DENIED');
    if(response.status===429) throw new ServiceError('RATE_LIMITED',429);
    if(response.status===400) throw new ServiceError('GOOGLE_REJECTED',400);
    throw new ServiceError('UPSTREAM_UNAVAILABLE');
  }
  return data;
}
export async function tokenRequest(env,fields,transport){
 return googleJSON('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:env.GOOGLE_CLIENT_ID,client_secret:env.GOOGLE_CLIENT_SECRET,...fields})},transport);
}
export async function api(url,accessToken,transport){return googleJSON(url,{headers:{Authorization:`Bearer ${accessToken}`}},transport);}
export async function reviewsPage(parent,accessToken,pageToken,transport){
 if(!/^accounts\/[\w-]+\/locations\/[\w-]+$/.test(parent)) throw new ServiceError('NOT_CONNECTED');
 const url=new URL(`https://mybusiness.googleapis.com/v4/${parent}/reviews`);
 url.searchParams.set('pageSize','6'); // Within Google's maximum of 50; fetch only the requested page.
 url.searchParams.set('orderBy','updateTime desc');
 if(pageToken)url.searchParams.set('pageToken',pageToken);
 return api(url.href,accessToken,transport);
}
const stars={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5};
export function publicReview(review){
 return {id:typeof review.reviewId==='string'?review.reviewId:'',name:review.reviewer?.displayName??null,rating:stars[review.starRating]??null,createTime:review.createTime??null,updateTime:review.updateTime??null,text:review.comment??'',photoUrl:safePhoto(review.reviewer?.profilePhotoUrl)};
}
function safePhoto(value){try{const url=new URL(value);return url.protocol==='https:'&&(/(^|\.)googleusercontent\.com$/.test(url.hostname)||/(^|\.)ggpht\.com$/.test(url.hostname))?url.href:null;}catch{return null;}}
export function listingUrl(value){try{const u=new URL(value);if(u.protocol==='https:' && (['google.com','www.google.com','maps.google.com','maps.app.goo.gl'].includes(u.hostname)))return u.href;}catch{}throw new ServiceError('LISTING_UNAVAILABLE');}
