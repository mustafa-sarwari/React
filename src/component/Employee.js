import EditEmployee from './EditEmployee';
export default function Employee({ name, role, img, onSave, onDelete, busy }) {
  return <article className="w-full max-w-sm p-4 bg-white rounded-xl shadow">
    <img className="object-cover rounded-full h-24 w-24" src={img} alt={name} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = '/photo/img (1).jpg'; }} />
    <h2 className="text-lg">{name}</h2><p>{role}</p>
    <EditEmployee name={name} role={role} img={img} onSave={onSave} busy={busy} />
    <button type="button" disabled={busy} className="border rounded px-3 py-2 ml-2" onClick={() => { if (window.confirm(`Delete ${name}?`)) onDelete().catch(() => {}); }}>Delete</button>
  </article>;
}
