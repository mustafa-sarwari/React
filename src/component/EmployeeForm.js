import { useId, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
export default function EmployeeForm({ initial = {}, onSave, busy, label }) {
  const id = useId();
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({ name: '', role: '', img: '', ...initial });
  const [error, setError] = useState('');
  function open() { setValues({ name: '', role: '', img: '', ...initial }); setError(''); setShow(true); }
  async function submit(event) {
    event.preventDefault(); setError('');
    try { await onSave(values); setShow(false); }
    catch (error) { setError(error.message); }
  }
  return <>
    <button className="border rounded px-3 py-2" type="button" onClick={open} disabled={busy}>{label}</button>
    <Modal show={show} onHide={() => { if (!busy) setShow(false); }} aria-labelledby={id + '-title'}>
      <Modal.Header closeButton={!busy}><Modal.Title id={id + '-title'}>{label}</Modal.Title></Modal.Header>
      <Modal.Body><form onSubmit={submit}>
        {['name', 'role', 'img'].map(field => <div className="mb-3" key={field}>
          <label htmlFor={id + '-' + field}>{field === 'img' ? 'Image URL (optional)' : field === 'name' ? 'Full name' : 'Role'}</label>
          <input id={id + '-' + field} className="form-control" required={field !== 'img'} maxLength={field === 'img' ? 500 : 80} value={values[field]} onChange={event => setValues({ ...values, [field]: event.target.value })} />
        </div>)}
        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={busy} className="btn btn-primary">{busy ? 'Saving…' : 'Save'}</button>
      </form></Modal.Body>
    </Modal>
  </>;
}
