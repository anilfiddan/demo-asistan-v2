import { Link } from 'react-router-dom'
import ElevenLabsWidget from '../components/ElevenLabsWidget'

export default function DemoPage({ demo }) {
  return (
    <>
      <div className="bg-glow" />

      <div style={{
        paddingTop: 68, minHeight: '100vh', display: 'flex', flexDirection: 'column',
        position: 'relative', zIndex: 1,
      }}>
        <div className="demo-header" style={{
          padding: '44px 40px 28px', maxWidth: 860, margin: '0 auto', width: '100%',
        }}>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            color: '#E8663C', fontSize: '0.85rem', fontWeight: 600,
            marginBottom: 28, cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            textDecoration: 'none',
            background: '#fff', padding: '8px 16px', borderRadius: 14,
            border: '1px solid rgba(0,0,0,0.04)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            transition: 'all .2s ease',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Tüm Demolar
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
            <div style={{
              width: 52, height: 52,
              background: 'linear-gradient(145deg, #FFF0E8, #FFE4D6)',
              borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem', flexShrink: 0,
            }}>
              {demo.icon}
            </div>
            <h1 style={{
              fontWeight: 800, fontSize: 'clamp(1.3rem,3vw,1.85rem)',
              color: '#2D2B3D', letterSpacing: '-0.02em',
              fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0,
            }}>
              {demo.title}
            </h1>
          </div>
          <p style={{
            color: '#7E7A8F', fontSize: '0.95rem', lineHeight: 1.7,
            fontFamily: "'Plus Jakarta Sans',sans-serif", maxWidth: 520,
          }}>
            {demo.description}
          </p>
        </div>

        <div className="demo-widget-area" style={{
          maxWidth: 860, margin: '0 auto', width: '100%',
          padding: '0 40px 60px', textAlign: 'center',
        }}>
          <div style={{
            background: '#fff', borderRadius: 26,
            border: '1px solid rgba(0,0,0,0.04)',
            padding: '56px 40px', position: 'relative', overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.03)',
          }}>
            <div style={{
              width: 72, height: 72, margin: '0 auto 22px',
              background: 'linear-gradient(145deg, #FFF0E8, #FFE4D6)',
              borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem',
              animation: 'float 4s ease-in-out infinite',
            }}>
              {demo.icon}
            </div>

            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'linear-gradient(135deg, #FFF3ED, #FFE8DD)',
              color: '#E8663C',
              fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: 24,
              marginBottom: 22,
            }}>
              <span style={{
                width: 7, height: 7, background: '#E8663C', borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }} />
              Asistan Hazır
            </span>

            <p style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              color: '#7E7A8F', fontSize: '0.95rem', lineHeight: 1.7,
              maxWidth: 380, margin: '0 auto',
            }}>
              Sağ alt köşedeki butona tıklayarak{' '}
              <strong style={{ color: '#2D2B3D', fontWeight: 700 }}>{demo.title}</strong>{' '}
              asistanıyla sesli görüşmenizi başlatın.
            </p>
          </div>
        </div>

        <ElevenLabsWidget agentId={demo.agentId} />
      </div>
    </>
  )
}
