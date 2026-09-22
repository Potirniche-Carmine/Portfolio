import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const files = (await readdir(root)).filter(name => name.endsWith('.html'));
const pages = new Map(await Promise.all(files.map(async name => [name, await readFile(name, 'utf8')])));
const failures = [];
if (pages.size !== 2 || !pages.has('index.html') || !pages.has('404.html')) failures.push('Expected one portfolio page and the error page');
let references = 0;
for (const [name, html] of pages) {
  if ((html.match(/<h1\b/g) || []).length !== 1) failures.push(`${name}: expected one page heading`);
  if (!html.includes('<html lang="en">')) failures.push(`${name}: missing language`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) failures.push(`${name}: duplicate element ID`);
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(image[0])) failures.push(`${name}: image missing alternative text`);
  }
  for (const match of html.matchAll(/\b(?:src|href|data-image)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(https?:|mailto:|tel:|data:)/.test(value)) continue;
    const [rawPath, fragment] = value.split('#');
    const file = decodeURIComponent(rawPath.split('?')[0].replace(/^\/+/, '') || name);
    const target = path.resolve(root, file);
    references++;
    if (!target.startsWith(root + path.sep)) { failures.push(`${name}: reference outside site: ${value}`); continue; }
    try { await stat(target); } catch { failures.push(`${name}: missing ${value}`); continue; }
    if (fragment && pages.has(file) && !pages.get(file).includes(`id="${fragment}"`)) failures.push(`${name}: missing fragment ${value}`);
  }
  for (const match of html.matchAll(/\b(?:aria-controls|aria-labelledby)="([^"]+)"/g)) {
    for (const id of match[1].split(' ')) if (!ids.includes(id)) failures.push(`${name}: missing accessible reference ${id}`);
  }
}
const pdf = await readFile('resume/Carmine-Potirniche-Resume.pdf');
assert.equal(pdf.subarray(0,5).toString(), '%PDF-', 'Resume download must be a PDF');
const data = JSON.parse(await readFile('resume/content.json','utf8'));
const resumeTex = await readFile('resume/Carmine-Potirniche-Resume.tex','utf8');
assert.ok(resumeTex.includes('\\begin{document}') && resumeTex.includes('\\end{document}'), 'LaTeX download must contain a complete document');
for (const row of [...data.experience,...data.projects]) {
  if (!pages.get('index.html').includes(row.name)) failures.push(`index.html: missing ${row.name}`);
  if (!resumeTex.includes(row.name)) failures.push(`Resume source: missing ${row.name}`);
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Passed: one portfolio page, error page, ${references} local references, accessible references, and resume files.`);
}
