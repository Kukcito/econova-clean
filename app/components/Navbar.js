// app/components/Navbar.js
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="/" className="brand" aria-label="ECONOVA">
          <Image
            src="/logo.svg"
            alt="ECONOVA"
            priority
            width={280}   // ancho de referencia (puedes subir a 320–360)
            height={64}   // alto de referencia
            className="logo-xl"
          />
        </a>

        {/* ...tu menú... */}
      </div>
    </header>
  );
}
