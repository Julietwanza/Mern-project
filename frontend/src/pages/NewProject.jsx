import React from 'react'


const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'


export default function NewProject({ onDone }) {
const [form, setForm] = React.useState({ title: '', description: '', location: '', impact: 'Supply' })
const [saving, setSaving] = React.useState(false)


const submit = async (e) => {
e.preventDefault();
setSaving(true)
try {
const res = await fetch(`${API}/projects`, {
method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
})
if (!res.ok) throw new Error('Failed')
setForm({ title: '', description: '', location: '', impact: 'Supply' })
onDone && onDone()
} catch (err) {
alert('Error creating project')
} finally { setSaving(false) }
}


return (
<form onSubmit={submit} style={{ maxWidth: 600 }}>
<h2>Propose a Water Project</h2>
<div>
<label>Title</label><br/>
<input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
</div>
<div>
<label>Description</label><br/>
<textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
</div>
<div>
<label>Location</label><br/>
<input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
</div>
<div>
<label>Impact</label><br/>
<select value={form.impact} onChange={e => setForm({ ...form, impact: e.target.value })}>
<option>Supply</option>
<option>Sanitation</option>
<option>Education</option>
<option>Other</option>
</select>
</div>
<div style={{ marginTop: 8 }}>
<button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Submit'}</button>
</div>
</form>
)
}
