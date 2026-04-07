import { Link } from 'react-router-dom'
import { DEMOS } from '../data/demos'

export default function Home() {
  return (
    <>
      <div className="bg-glow" />

      <section className="hero-section" style={{
        padding: '148px 40px 64px', textAlign: 'center', position: 'relative', zIndex: 1,
      }}>
        {/* Active count pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#fff', border: '1px solid rgba(232,102,60,0.12)',
          color: '#E8663C', fontSize: '0.78rem', fontWeight: 600,
          padding: '7px 18px', borderRadius: 50, marginBottom: 28,
          boxShadow: '0 2px 16px rgba(232,102,60,0.08)',
          animation: 'fadeInUp 0.5s ease-out both',
        }}>
          <span style={{
            width: 7, height: 7, background: '#E8663C', borderRadius: '50%',
            animation: 'pulse 2s infinite',
          }} />
          {DEMOS.length} klinik branşı aktif
        </div>

        <h1 style={{
          fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.4rem)',
          color: '#2D2B3D', letterSpacing: '-0.03em',
          marginBottom: 18, lineHeight: 1.15,
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          animation: 'fadeInUp 0.5s ease-out 0.08s both',
        }}>
          Yapay Zeka Asistanlarımızı<br />
          <span style={{
            background: 'linear-gradient(135deg, #E8663C, #FF9B6A, #E8663C)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            animation: 'shimmer 4s linear infinite',
          }}>
            Canlı Deneyin
          </span>
        </h1>

        <p style={{
          color: '#7E7A8F', fontSize: '1.05rem',
          maxWidth: 480, margin: '0 auto', lineHeight: 1.75,
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          animation: 'fadeInUp 0.5s ease-out 0.16s both',
        }}>
          Her klinik branşına özel eğitilmiş asistanlarımızla tanışın.
          Demoları sesli olarak test edebilirsiniz.
        </p>
      </section>

      <div className="cards-grid" style={{
        maxWidth: 1120, margin: '0 auto', padding: '0 32px 100px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20,
        position: 'relative', zIndex: 1,
      }}>
        {DEMOS.map((demo) => (
          <Link
            to={`/demo/${demo.slug}`}
            key={demo.slug}
            className="demo-card"
            style={{
              background: '#fff',
              borderRadius: 22,
              border: '1px solid rgba(0,0,0,0.04)',
              padding: '28px 26px', position: 'relative', overflow: 'hidden',
              cursor: 'pointer', textDecoration: 'none', display: 'block', color: 'inherit',
              boxShadow: '0 2px 16px rgba(0,0,0,0.03)',
              animation: 'fadeInUp 0.45s ease-out both',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
              <div className="card-icon" style={{
                width: 52, height: 52,
                background: 'linear-gradient(145deg, #FFF0E8, #FFE4D6)',
                borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem',
                transition: 'all .3s ease',
              }}>
                {demo.icon}
              </div>

              <span className="card-arrow" style={{
                color: '#E8663C', fontSize: '1.1rem',
                transition: 'all .3s ease', opacity: 0.25, marginTop: 6,
              }}>
                &#8594;
              </span>
            </div>

            <h3 style={{
              fontWeight: 700, fontSize: '1.05rem', color: '#2D2B3D',
              marginBottom: 6, letterSpacing: '-0.01em',
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>
              {demo.title}
            </h3>

            <p style={{
              color: '#9895A8', fontSize: '0.84rem',
              lineHeight: 1.6, marginBottom: 18,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>
              {demo.description}
            </p>

            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'linear-gradient(135deg, #FFF3ED, #FFE8DD)',
              color: '#E8663C',
              fontSize: '0.72rem', fontWeight: 600, padding: '5px 13px', borderRadius: 24,
            }}>
              <span style={{
                width: 6, height: 6, background: '#E8663C', borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }} />
              Canlı Demo
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
