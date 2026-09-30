const { test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { buildServer } = require('./index.cjs');
test('validates submissions and keeps stored data isolated', async () => {
  const server = buildServer({ database: ':memory:' });
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  const url = `http://127.0.0.1:${server.address().port}`;
  const request = (body, headers = {}) => fetch(url + '/api/employees', { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
  try {
    assert.equal((await request({})).status, 400);
    assert.equal((await request({"name": "Sample person", "role": "Developer"}, { Origin: 'https://untrusted.example' })).status, 403);
    const response = await request({"name": "Sample person", "role": "Developer"});
    assert.equal(response.status, 201);
    const created = await response.json(); assert.ok(created.id);
    const cookie = response.headers.get('set-cookie').split(';')[0];
    const rows = await (await fetch(url + "/api/employees", { headers: { Cookie: cookie } })).json(); assert.equal(rows.length, 1); assert.equal(rows[0].id, created.id); const other = await (await fetch(url + "/api/employees")).json(); assert.equal(other.length, 0); assert.equal((await fetch(url + "/api/employees/" + created.id, { method: "DELETE", headers: { Cookie: cookie } })).status, 200);
    assert.equal((await fetch(url + '/server/index.cjs')).status, 404);
    assert.equal((await fetch(url + '/.git/config')).status, 404);
  } finally { await new Promise(resolve => server.close(resolve)); }
});
