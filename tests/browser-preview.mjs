// Isolated visual/keyboard fixture. Not copied into dist or shipped by Wrangler.
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('dist');
createServer(async(req,res)=>{
 const url=new URL(req.url,'http://localhost:3124');
 res.setHeader('Cache-Control','no-store');
 if(url.pathname==='/api/reviews'){
  const offset=url.searchParams.has('cursor')?6:0;
  res.setHeader('Content-Type','application/json');
  return res.end(JSON.stringify({averageRating:3.4,totalReviewCount:8,googleUrl:'https://maps.google.com/?cid=123',nextCursor:offset?null:'mock-next',reviews:Array.from({length:offset?2:6},(_,i)=>({id:`fixture-${offset+i}`,name:`MOCK reviewer ${offset+i+1}`,rating:i===0?1:4,createTime:'2026-01-01T00:00:00Z',text:i===0?'MOCK TEXT — not a real Google review. '.repeat(30):'MOCK TEXT — testing card layout only. This is not customer feedback.',photoUrl:null}))}));
 }
 const path=resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
 if(!path.startsWith(root+'/')){res.statusCode=404;return res.end();}
 try{
  let content=await readFile(path);
  if(path.endsWith('index.html'))content=String(content).replace('data-google-reviews hidden', 'data-google-reviews').replace('<body>','<body><p style="padding:16px;background:#d4b579;color:#141510">MOCK REVIEW FIXTURE — NOT LIVE GOOGLE DATA</p>');
  res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.jpg':'image/jpeg'})[extname(path)]||'application/octet-stream');res.end(content);
 }catch{res.statusCode=404;res.end();}
}).listen(3124,'127.0.0.1',()=>console.log('MOCK ONLY review fixture: http://localhost:3124/#google-reviews'));
