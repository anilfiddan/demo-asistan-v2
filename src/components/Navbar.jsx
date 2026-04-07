import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(255,250,246,0.75)', backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(232,102,60,0.06)',
      padding: '0 32px', height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="/logo-icon.png" alt="asistan 7/24" style={{ height: 34 }} />
        <span style={{
          fontFamily: "'Ballega','Plus Jakarta Sans',sans-serif",
          fontWeight: 800, fontSize: '1.2rem', color: '#2D2B3D', letterSpacing: '-0.03em',
        }}>
          asistan 7/24
        </span>
      </Link>
      <span style={{
        background: 'linear-gradient(135deg,#E8663C,#FF9B6A)',
        color: '#fff', fontSize: '0.65rem', fontWeight: 700,
        padding: '5px 14px', borderRadius: 24,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        boxShadow: '0 2px 12px rgba(232,102,60,0.25)',
      }}>
        Demo
      </span>
    </nav>
  )
}
