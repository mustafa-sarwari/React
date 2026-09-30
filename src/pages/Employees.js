import { useEffect, useState } from 'react';
import Employee from '../component/Employee';
import AddEmployee from '../component/AddEmployee';
import '../index.css';
async function request(path = '', options = {}) {
  const response = await fetch('/api/employees' + path, { ...options, headers: { 'Content-Type': 'application/json' } });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error || 'Unable to save employee.');
  return body;
}
export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    let active = true;
    request().then(rows => { if (active) setEmployees(rows); })
      .catch(error => { if (active) setError(error.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);
  async function mutate(action) {
    setBusy(true); setError('');
    try { await action(); }
    catch (error) { setError(error.message); throw error; }
    finally { setBusy(false); }
  }
  const add = values => mutate(async () => {
    const row = await request('', { method: 'POST', body: JSON.stringify(values) });
    setEmployees(rows => [row, ...rows]);
  });
  const edit = (id, values) => mutate(async () => {
    const updated = await request('/' + id, { method: 'PATCH', body: JSON.stringify(values) });
    setEmployees(rows => rows.map(row => row.id === id ? updated : row));
  });
  const remove = id => mutate(async () => {
    await request('/' + id, { method: 'DELETE' }); setEmployees(rows => rows.filter(row => row.id !== id));
  });
  const visible = employees.filter(row => `${row.name} ${row.role}`.toLowerCase().includes(query.toLowerCase()));
  return <main className="bg-gray-100 min-h-screen p-4">
    <label htmlFor="employee-search">Search name or role</label>
    <input id="employee-search" className="block border rounded p-2 w-full max-w-lg" value={query} onChange={event => setQuery(event.target.value)} />
    {error && <p role="alert">{error} Start the API on port 4000 if it is unavailable.</p>}
    {loading ? <p role="status">Loading employees…</p> : <>
      <p>{visible.length} employees</p>
      <AddEmployee onSave={add} busy={busy} />
      <div className="flex flex-wrap gap-4 mt-4">{visible.map(row => <Employee key={row.id} {...row} onSave={values => edit(row.id, values)} onDelete={() => remove(row.id)} busy={busy} />)}</div>
      {!visible.length && <p>No employees found. Add an employee to get started.</p>}
    </>}
  </main>;
}
