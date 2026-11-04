import { cp, mkdir, rm, readdir } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
// Explicit allowlist: server, secrets, docs, fixtures and dependencies never ship as assets.
for (const file of ['index.html','404.html','styles.css','app.js','reviews.css','reviews.js','admin.css','robots.txt','sitemap.xml']) {
  await cp(file, `dist/${file}`);
}
for (const dir of ['about','menu','reservation','restaurant']) {
  await mkdir(`dist/${dir}`);
  await cp(`${dir}/index.html`, `dist/${dir}/index.html`);
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
console.log('Built public assets in dist/');
