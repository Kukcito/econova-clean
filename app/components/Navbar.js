// app/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" aria-label="ECONOVA">
          <img src="/logo.svg" alt="ECONOVA" className="logo-img" />
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
  );
}
