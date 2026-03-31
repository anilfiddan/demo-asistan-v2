import { Link } from 'react-router-dom'
import { DEMOS } from '../data/demos'

const s = {
  hero: {
    padding: '140px 40px 80px', textAlign: 'center', position: 'relative',
  },
  glow: {
    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
    width: 600, height: 600,
    background: 'radial-gradient(circle,rgba(232,102,60,0.08) 0%,transparent 70%)',
    pointerEvents: 'none',
  },
  h1: {
    fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.2rem)',
    color: '#1A1A2E', letterSpacing: '-0.03em',
    marginBottom: 16, lineHeight: 1.15,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
  },
  accent: { color: '#E8663C' },
  sub: {
    color: '#4A4A6A', fontSize: '1.15rem',
    maxWidth: 580, margin: '0 auto 48px', lineHeight: 1.7,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
  },
  grid: {
    maxWidth: 1100, margin: '0 auto', padding: '0 40px 100px',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 32,
  },
  card: {
    background: '#fff', borderRadius: 20,
    border: '1px solid rgba(232,102,60,0.1)',
    padding: '36px 32px', position: 'relative', overflow: 'hidden',
    transition: 'all .3s cubic-bezier(.4,0,.2,1)', cursor: 'pointer',
    textDecoration: 'none', display: 'block', color: 'inherit',
  },
  topBar: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 4,
    background: 'linear-gradient(90deg,#E8663C,#FF8A5C)',
  },
  icon: {
    width: 56, height: 56,
    background: 'linear-gradient(135deg,rgba(232,102,60,0.1),rgba(255,138,92,0.08))',
    borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 20, fontSize: '1.6rem',
  },
  cardTitle: {
    fontWeight: 700, fontSize: '1.2rem', color: '#1A1A2E',
    marginBottom: 8, letterSpacing: '-0.01em',
    fontFamily: "'Plus Jakarta Sans',sans-serif",
  },
  cardDesc: {
    color: '#4A4A6A', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: 24,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
  },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: 'rgba(232,102,60,0.08)', color: '#E8663C',
    fontSize: '0.78rem', fontWeight: 600, padding: '6px 14px', borderRadius: 20,
  },
  pulse: {
    width: 8, height: 8, background: '#E8663C', borderRadius: '50%',
    animation: 'pulse 2s infinite',
  },
}

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.5; transform:scale(1.3); }
        }
        .demo-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 20px 60px rgba(232,102,60,0.12) !important;
          border-color: rgba(232,102,60,0.25) !important;
        }
      `}</style>

      <section style={s.hero}>
        <div style={s.glow} />
        <h1 style={s.h1}>
          Yapay Zeka Asistanlarımızı <span style={s.accent}>Canlı Deneyin</span>
        </h1>
        <p style={s.sub}>
          Her klinik branşına özel eğitilmiş asistanlarımızla tanışın. Aşağıdaki demoları sesli olarak test edebilirsiniz.
        </p>
      </section>

      <div style={s.grid}>
        {DEMOS.map(demo => (
          <Link to={`/demo/${demo.slug}`} key={demo.slug} className="demo-card" style={s.card}>
            <div style={s.topBar} />
            <div style={s.icon}>{demo.icon}</div>
            <h3 style={s.cardTitle}>{demo.title}</h3>
            <p style={s.cardDesc}>{demo.description}</p>
            <span style={s.badge}>
              <span style={s.pulse} />
              Canlı Demo
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
