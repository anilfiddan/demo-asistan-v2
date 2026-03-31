const s = {
  footer: {
    textAlign: 'center', padding: 40,
    borderTop: '1px solid rgba(232,102,60,0.08)',
    color: '#4A4A6A', fontSize: '0.85rem',
    fontFamily: "'Plus Jakarta Sans',sans-serif",
  },
  link: { color: '#E8663C', textDecoration: 'none', fontWeight: 600 },
}

export default function Footer() {
  return (
    <footer style={s.footer}>
      &copy; 2026 <a href="https://asistan7-24.com" target="_blank" rel="noreferrer" style={s.link}>asistan 7/24</a>, TEKMED Tıbbi Danışmanlık Sağlık Hizmetleri ve Ekipman Ticaret Ltd. Şti. tescilli markasıdır.
    </footer>
  )
}
