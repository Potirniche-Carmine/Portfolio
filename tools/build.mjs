import { mkdir, copyFile, cp, unlink } from 'node:fs/promises';
const pages = ['index.html','404.html','robots.txt','sitemap.xml'];
await mkdir('dist',{recursive:true});
// Remove pages from the earlier build when updating an existing output folder.
for (const page of ['umbratic.html','updrafted.html','infernal.html','resume.html']) {
  await unlink(`dist/${page}`).catch(error => { if (error.code !== 'ENOENT') throw error; });
}
for (const page of pages) await copyFile(page,`dist/${page}`);
await cp('assets','dist/assets',{recursive:true});
await mkdir('dist/resume',{recursive:true});
for (const file of ['Carmine-Potirniche-Resume.tex','content.json','template.tex','sources.md']) {
  await unlink(`dist/resume/${file}`).catch(error => { if (error.code !== 'ENOENT') throw error; });
}
await copyFile('resume/Carmine-Potirniche-Resume.pdf','dist/resume/Carmine-Potirniche-Resume.pdf');
console.log('Static site built in dist/. No runtime dependencies.');
