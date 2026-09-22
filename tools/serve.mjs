import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve(process.argv.includes('--dist') ? 'dist' : '.');
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.pdf':'application/pdf','.tex':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8','.xml':'application/xml'};
const publicRoots = new Set(['index.html','404.html','robots.txt','sitemap.xml','assets','resume']);
http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url,'http://localhost');
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    if (relative.includes('\\') || relative.split('/').includes('..') || !publicRoots.has(relative.split('/')[0])) throw new Error('not-found');
    const file = path.resolve(root, relative);
    if (!file.startsWith(root + path.sep) || !(await stat(file)).isFile()) throw new Error('not-found');
    const body = await readFile(file);
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
    res.end(await readFile(path.join(root,'404.html')).catch(()=>'Page not found.'));
  }
}).listen(port,'127.0.0.1',()=>console.log(`Portfolio: http://127.0.0.1:${port}`));
