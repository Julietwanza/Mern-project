import React from 'react'
import ProjectCard from '../components/ProjectCard'


const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'


export default function Home() {
const [projects, setProjects] = React.useState([])
const [loading, setLoading] = React.useState(true)


React.useEffect(() => {
fetch(`${API}/projects`)
.then(r => r.json())
.then(data => setProjects(data))
.catch(console.error)
.finally(() => setLoading(false))
}, [])


return (
<div>
<h2>Projects</h2>
{loading ? <p>Loading...</p> : (
<div style={{ display: 'grid', gap: 12 }}>
{projects.length === 0 && <p>No projects yet — propose one!</p>}
{projects.map(p => <ProjectCard key={p._id} p={p} />)}
</div>
)}
</div>
)
}
