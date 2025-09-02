'use client'
import Image from 'next/image'

export default function Navbar(){
  return (
    <nav className="navbar" data-animate>
      <div className="container nav-inner">
        <a href="/" className="logo" aria-label="ECONOVA">
          <Image src="/logo.svg" alt="ECONOVA" width={120} height={28} priority />
        </a>
        <div className="nav-links" style={{display:'flex',gap:6,flexWrap:'wrap'}}>
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
