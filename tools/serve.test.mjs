import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { readFile } from 'node:fs/promises';
import { networkInterfaces } from 'node:os';

async function start(t, args) {
  const env = { ...process.env, PORT: '0' };
  delete env.HOST;
  const child = spawn(process.execPath, args, { env, stdio: ['ignore', 'pipe', 'pipe'] });
  t.after(async () => {
    if (child.exitCode === null && !child.killed) {
      const stopped = once(child, 'exit');
      child.kill();
      await stopped;
    }
  });
  return await new Promise((resolve, reject) => {
    let output = '';
    const timeout = setTimeout(() => reject(new Error(`Server did not start: ${output}`)), 10000);
    const fail = error => { clearTimeout(timeout); reject(error); };
    child.once('error', fail);
    child.once('exit', code => fail(new Error(`Server exited (${code}): ${output}`)));
    child.stderr.on('data', data => { output += data; });
    child.stdout.on('data', data => {
      output += data;
      const address = output.match(/Portfolio: (http:\/\/[^\s]+)/)?.[1];
      if (address) { clearTimeout(timeout); resolve(new URL(address)); }
    });
  });
}

test('production is reachable by the proxy and serves only built public files', async t => {
  const manifest = JSON.parse(await readFile('package.json', 'utf8'));
  const address = await start(t, manifest.scripts.start.split(' ').slice(1));
  assert.equal(address.hostname, '0.0.0.0');
  // macOS only routes loopback aliases that were explicitly configured.
  // Use its network address to retain the check for a localhost-only binding.
  const proxyHost = process.platform === 'darwin'
    ? Object.values(networkInterfaces()).flat().find(entry => entry.family === 'IPv4' && !entry.internal)?.address
    : '127.0.0.2';
  assert.ok(proxyHost, 'A network interface is required to verify proxy access');
  address.hostname = proxyHost;
  const page = await fetch(address, { signal: AbortSignal.timeout(5000) });
  assert.equal(page.status, 200);
  assert.match(await page.text(), /Carmine/);
  const pdf = await fetch(new URL('/resume/Carmine-Potirniche-Resume.pdf', address));
  assert.equal(pdf.status, 200);
  assert.equal(pdf.headers.get('content-type'), 'application/pdf');
  assert.equal(Buffer.from(await pdf.arrayBuffer()).subarray(0, 5).toString(), '%PDF-');
  for (const route of ['/resume/Carmine-Potirniche-Resume.tex', '/resume/content.json', '/package.json', '/.git/config']) {
    assert.equal((await fetch(new URL(route, address))).status, 404, route);
  }
});

test('development remains bound to localhost', async t => {
  const address = await start(t, ['tools/serve.mjs']);
  assert.equal(address.hostname, '127.0.0.1');
  assert.equal((await fetch(address)).status, 200);
});
