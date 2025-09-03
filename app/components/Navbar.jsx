export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="logo" aria-label="ECONOVA">
          <img className="logo-img" src="/logo.svg" alt="ECONOVA" />
        </a>
        <nav className="menu" aria-label="principal">
          <a href="/servicios">Servicios</a>
          <a href="/metodologia">Metodología</a>
          <a href="/radar4">Radar4</a>
          <a href="/faq">FAQ</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
