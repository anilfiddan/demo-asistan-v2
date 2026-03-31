import { Link } from 'react-router-dom'
import ElevenLabsWidget from '../components/ElevenLabsWidget'

const s = {
  page: {
    paddingTop: 72, minHeight: '100vh', display: 'flex', flexDirection: 'column',
  },
  header: {
    padding: '48px 40px 32px', maxWidth: 900, margin: '0 auto', width: '100%',
  },
  back: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    color: '#E8663C', fontSize: '0.9rem', fontWeight: 600,
    marginBottom: 24, cursor: 'pointer',
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    textDecoration: 'none',
  },
  titleRow: {
    display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12,
  },
  icon: {
    width: 52, height: 52,
    background: 'linear-gradient(135deg,rgba(232,102,60,0.1),rgba(255,138,92,0.08))',
    borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.5rem', flexShrink: 0,
  },
  title: {
    fontWeight: 800, fontSize: 'clamp(1.4rem,3vw,2rem)',
    color: '#1A1A2E', letterSpacing: '-0.02em',
    fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0,
  },
  desc: {
    color: '#4A4A6A', fontSize: '1rem', lineHeight: 1.7,
    fontFamily: "'Plus Jakarta Sans',sans-serif", maxWidth: 600,
  },
  widgetArea: {
    flex: 1, maxWidth: 900, margin: '0 auto', width: '100%',
    padding: '0 40px 60px',
  },
  widgetBox: {
    background: '#fff', borderRadius: 20,
    border: '1px solid rgba(232,102,60,0.1)',
    padding: 40, minHeight: 500,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    position: 'relative',
  },
  topBar: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 4,
    background: 'linear-gradient(90deg,#E8663C,#FF8A5C)',
  },
  hint: {
    color: '#4A4A6A', fontSize: '0.95rem',
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    lineHeight: 1.6, textAlign: 'center',
  },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: 'rgba(232,102,60,0.08)', color: '#E8663C',
    fontSize: '0.82rem', fontWeight: 600, padding: '8px 18px', borderRadius: 20,
    marginTop: 20,
  },
  pulse: {
    width: 8, height: 8, background: '#E8663C', borderRadius: '50%',
    animation: 'pulse 2s infinite',
  },
}

export default function DemoPage({ demo }) {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.5; transform:scale(1.3); }
        }
        @media (max-width:640px) {
          .demo-header { padding: 32px 20px 24px !important; }
          .demo-widget-area { padding: 0 20px 40px !important; }
          .demo-widget-box { padding: 24px !important; }
        }
      `}</style>

      <div style={s.page}>
        <div style={s.header} className="demo-header">
          <Link to="/" style={s.back}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Tüm Demolar
          </Link>
          <div style={s.titleRow}>
            <div style={s.icon}>{demo.icon}</div>
            <h1 style={s.title}>{demo.title}</h1>
          </div>
          <p style={s.desc}>{demo.description}</p>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', width: '100%', padding: '0 40px 60px', textAlign: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(232,102,60,0.1)', padding: '60px 40px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg,#E8663C,#FF8A5C)' }} />

            <div style={{ width: 80, height: 80, margin: '0 auto 24px', background: 'linear-gradient(135deg,rgba(232,102,60,0.12),rgba(255,138,92,0.08))', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem' }}>
              {demo.icon}
            </div>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(232,102,60,0.08)', color: '#E8663C', fontSize: '0.78rem', fontWeight: 600, padding: '6px 14px', borderRadius: 20, marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, background: '#E8663C', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
              Asistan Hazır
            </span>

            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#4A4A6A', fontSize: '1rem', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
              Sağ alt köşedeki butona tıklayarak <strong style={{ color: '#1A1A2E' }}>{demo.title}</strong> asistanıyla sesli görüşmenizi başlatın.
            </p>
          </div>
        </div>

        <ElevenLabsWidget agentId={demo.agentId} />
      </div>
    </>
  )
}
