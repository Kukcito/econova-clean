'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`} data-animate>
      <div className="container nav-inner">
        {/* LOGO grande */}
        <a href="/" className="logo" aria-label="ECONOVA">
          {/* width/height grande como tamaño base del SVG.
             El tamaño visible lo controlamos con CSS (width de .logo). */}
          <Image
            src="/logo.svg"
            alt="ECONOVA"
            width={600}
            height={120}
            priority
          />
        </a>

        <div className="nav-links" style={{ display:'flex', gap: 10, flexWrap:'wrap' }}>
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
