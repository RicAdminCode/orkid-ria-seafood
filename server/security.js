const encoder = new TextEncoder();
export const random = () => crypto.randomUUID();
export const encode = bytes => btoa(String.fromCharCode(...new Uint8Array(bytes))).replaceAll('+','-').replaceAll('/','_').replaceAll('=','');
const decode = text => Uint8Array.from(atob(text.replaceAll('-','+').replaceAll('_','/')), c => c.charCodeAt(0));
export async function digest(text) { return encode(await crypto.subtle.digest('SHA-256', encoder.encode(text))); }
async function key(secret) {
  const raw = decode(secret);
  if (raw.length !== 32) throw new Error('Invalid encryption configuration');
  return crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt','decrypt']);
}
export async function seal(value, secret, purpose) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:encoder.encode(purpose)},await key(secret),encoder.encode(JSON.stringify(value)));
  return `${encode(iv)}.${encode(data)}`;
}
export async function unseal(text, secret, purpose) {
  if (typeof text !== 'string' || text.length > 16000) throw new Error('Invalid envelope');
  const parts = text.split('.');
  if (parts.length !== 2) throw new Error('Invalid envelope');
  const plain = await crypto.subtle.decrypt({name:'AES-GCM',iv:decode(parts[0]),additionalData:encoder.encode(purpose)},await key(secret),decode(parts[1]));
  const value = JSON.parse(new TextDecoder().decode(plain));
  if (value.exp && value.exp <= Date.now()) throw new Error('Expired envelope');
  return value;
}
export async function isAdmin(request, env) {
  if (!env.ADMIN_PASSWORD || env.ADMIN_PASSWORD.length < 32) return false;
  const supplied = request.headers.get('Authorization') || '';
  const expected = 'Basic ' + btoa('admin:' + env.ADMIN_PASSWORD);
  const [a,b] = await Promise.all([digest(supplied),digest(expected)]);
  let diff=0;
  for(let i=0;i<a.length;i++) diff |= a.charCodeAt(i)^b.charCodeAt(i);
  return diff===0;
}
export const escape = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export async function formBody(request) {
  if (!(request.headers.get('Content-Type') || '').startsWith('application/x-www-form-urlencoded')) throw new Error('Invalid form');
  const reader=request.body?.getReader(); let text='',size=0;
  if(!reader) throw new Error('Missing form');
  const decoder=new TextDecoder();
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>16000){await reader.cancel();throw new Error('Form too large');}text+=decoder.decode(value,{stream:true});}
  return new URLSearchParams(text+decoder.decode());
}
