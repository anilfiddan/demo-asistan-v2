import { Link } from 'react-router-dom'

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: 'rgba(255,248,242,0.85)', backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(232,102,60,0.08)',
    padding: '0 40px', height: 72,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  brand: {
    display: 'flex', alignItems: 'center', gap: 12,
    textDecoration: 'none',
  },
  logo: { height: 38 },
  name: {
    fontFamily: "'Ballega','Plus Jakarta Sans',sans-serif",
    fontWeight: 800, fontSize: '1.3rem', color: '#1A1A2E', letterSpacing: '-0.03em',
  },
  tag: {
    background: 'linear-gradient(135deg,#E8663C,#FF8A5C)',
    color: '#fff', fontSize: '0.7rem', fontWeight: 700,
    padding: '3px 10px', borderRadius: 20,
    letterSpacing: '0.05em', textTransform: 'uppercase',
  },
}

export default function Navbar() {
  return (
    <nav style={s.nav}>
      <Link to="/" style={s.brand}>
        <img src="/logo-icon.png" alt="asistan 7/24" style={s.logo} />
        <span style={s.name}>asistan 7/24</span>
      </Link>
      <span style={s.tag}>Demo</span>
    </nav>
  )
}
