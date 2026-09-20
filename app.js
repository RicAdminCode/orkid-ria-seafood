const q=(s,c=document)=>c.querySelector(s),qa=(s,c=document)=>[...c.querySelectorAll(s)];
const header=q('.site-header'),menu=q('.mobile-menu');
function setMenu(open){header?.classList.toggle('open',open);menu?.setAttribute('aria-expanded',String(open));menu?.setAttribute('aria-label',open?'Close navigation':'Open navigation');if(menu)menu.textContent=open?'Close':'Menu'}
menu?.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus()}});
const slides=qa('.slide');let current=Math.max(0,slides.findIndex(s=>s.classList.contains('active')));
function show(n){if(!slides.length)return;current=(n+slides.length)%slides.length;slides.forEach((slide,i)=>{slide.classList.toggle('active',i===current);slide.setAttribute('aria-hidden',String(i!==current))});const count=q('.slide-count');if(count)count.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0')}
q('.next')?.addEventListener('click',()=>show(current+1));q('.prev')?.addEventListener('click',()=>show(current-1));show(current);
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.08});document.documentElement.classList.add('motion-ready');qa('.reveal').forEach(el=>observer.observe(el))}
