import EmployeeForm from './EmployeeForm';
export default function EditEmployee({ name, role, img, onSave, busy }) { return <EmployeeForm initial={{ name, role, img }} onSave={onSave} busy={busy} label="Edit employee" />; }
