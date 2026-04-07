export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '36px 24px',
      color: '#A09CB0', fontSize: '0.8rem',
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      position: 'relative', zIndex: 1,
    }}>
      &copy; 2026{' '}
      <a href="https://asistan7-24.com" target="_blank" rel="noreferrer" style={{
        color: '#E8663C', textDecoration: 'none', fontWeight: 600,
      }}>
        asistan 7/24
      </a>
      , TEKMED Tıbbi Danışmanlık Sağlık Hizmetleri ve Ekipman Ticaret Ltd. Şti. tescilli markasıdır.
    </footer>
  )
}
