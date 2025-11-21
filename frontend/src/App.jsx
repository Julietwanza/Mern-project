import React from 'react'
import Home from './pages/Home'
import NewProject from './pages/NewProject'


export default function App() {
const [route, setRoute] = React.useState('home')
return (
<div style={{ fontFamily: 'system-ui, Arial', padding: 24 }}>
<header style={{ display: 'flex', justifyContent: 'space-between' }}>
<h1>SDG: Clean Water</h1>
<nav>
<button onClick={() => setRoute('home')}>Home</button>
<button onClick={() => setRoute('new')}>Propose Project</button>
</nav>
</header>
<main style={{ marginTop: 20 }}>
{route === 'home' ? <Home /> : <NewProject onDone={() => setRoute('home')} />}
</main>
</div>
)
}
