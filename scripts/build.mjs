import { cp, mkdir, rm, readdir, readFile, appendFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { build } from 'esbuild';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
// Explicit allowlist: server, secrets, docs, fixtures and dependencies never ship as assets.
for (const file of ['styles.css','reviews.css','admin.css','robots.txt','sitemap.xml']) {
  await cp(file, `dist/${file}`);
}
async function media(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) await media(path);
    else if (/\.(jpg|jpeg|png|webp|avif|svg|mp4)$/i.test(entry.name)) {
      await mkdir(`dist/${dir}`, { recursive: true });
      await cp(path, `dist/${path}`);
    }
  }
}
await media('assets');
await build({ entryPoints:['frontend/main.tsx'], outfile:'dist/application.js', bundle:true, format:'esm', platform:'browser', target:'es2022', minify:true, jsx:'automatic', define:{'process.env.NODE_ENV':'"production"'} });
await mkdir('.wrangler', { recursive:true });
await build({ entryPoints:['frontend/prerender.tsx'], outfile:'.wrangler/prerender.mjs', bundle:true, packages:'external', format:'esm', platform:'node', jsx:'automatic' });
const { prerender } = await import('../.wrangler/prerender.mjs');
for (const [path,name,file] of [
  ['/','home','index.html'], ['/menu/','menu','menu/index.html'], ['/about/','about','about/index.html'],
  ['/restaurant/','restaurant','restaurant/index.html'], ['/reservation/','reservation','reservation/index.html'],
  ['/__not-found__/','not-found','404.html']
]) {
  await mkdir(`dist/${file.slice(0,file.lastIndexOf('/')+1)}`, { recursive:true });
  await writeFile(`dist/${file}`, await prerender(path,name));
}
execFileSync('pnpm', ['exec','tailwindcss','-i','frontend/tailwind.css','-o','dist/tailwind.css','--minify'], { stdio:'inherit' });
await appendFile('dist/styles.css', '\n' + await readFile('dist/tailwind.css','utf8'));
await rm('dist/tailwind.css');
console.log('Built public assets in dist/');
