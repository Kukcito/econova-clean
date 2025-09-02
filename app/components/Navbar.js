// app/components/Navbar.js
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand" aria-label="ECONOVA">
          {/* Width/height grandes para evitar que Next lo “encajone” */}
          <Image
            src="/logo.svg"
            alt="ECONOVA"
            priority
            width={360}
            height={120}
            className="logo"
          />
        </a>

        <nav className="menu" aria-label="Principal">
          <a href="/servicios">Servicios</a>
          <a href="/metodologia">Metodología</a>
          <a href="/radar4">Radar4</a>
          <a href="/faq">FAQ</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
