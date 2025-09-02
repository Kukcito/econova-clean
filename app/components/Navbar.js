// app/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="ECONOVA">
          {/* <img> en lugar de <Image> para forzar tamaño por CSS */}
          <img src="/logo.svg" alt="ECONOVA" className="logo-img" />
        </Link>

        <nav className="menu" aria-label="Principal">
          <Link href="/servicios">Servicios</Link>
          <Link href="/metodologia">Metodología</Link>
          <Link href="/radar4">Radar4</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
