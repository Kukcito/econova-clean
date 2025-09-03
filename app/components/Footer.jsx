export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
        <div>© {new Date().getFullYear()} ECONOVA · Sostenibilidad & Seguridad</div>
        <div>
          <a href="/contacto">contacto@econova.mx</a>
        </div>
      </div>
    </footer>
  )
}
