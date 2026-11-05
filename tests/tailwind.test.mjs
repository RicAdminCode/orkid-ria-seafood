import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

test('Tailwind compiles prefixed utilities without a reset that restyles existing pages', async () => {
  const dir = await mkdtemp('frontend/.tailwind-test-');
  try {
    await writeFile(`${dir}/input.css`, '@import "../tailwind.css";\n@source inline("tw:flex tw:p-4");');
    execFileSync('pnpm', ['exec','tailwindcss','-i',`${dir}/input.css`,'-o',`${dir}/output.css`,'--minify'], { stdio:'pipe' });
    const css = await readFile(`${dir}/output.css`, 'utf8');
    assert.match(css, /\.tw\\:flex\{display:flex\}/);
    assert.match(css, /\.tw\\:p-4\{/);
    assert.doesNotMatch(css, /box-sizing:border-box/);
    assert.doesNotMatch(css, /(?:^|\})\.flex\{/);
  } finally {
    await rm(dir, { recursive:true, force:true });
  }
});
