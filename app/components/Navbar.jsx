// app/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" aria-label="ECONOVA" className="logo">
          <img
            src="/logo.svg"
            alt="ECONOVA"
            className="logo-img"
            // el tamaño lo controlas en CSS con --logo-h-m / --logo-h-d
          />
        </a>

        <div className="menu">
          <a href="/servicios">Servicios</a>
          <a href="/metodologia">Metodología</a>
          <a href="/radar4">Radar4</a>
          <a href="/faq">FAQ</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </nav>
  )
}
