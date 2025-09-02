'use client'
import { useState } from 'react'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  return (
    <nav className="navbar" data-animate>
      <div className="container nav-inner">
        <div className="logo">ECONOVA</div>
        <button aria-label="Menú" onClick={()=>setOpen(v=>!v)} className="btn btn-ghost" style={{display:'none'}} />
        <div className="nav-links" style={{display:'flex',gap:6,flexWrap:'wrap'}}>
          <a href="#servicios">Servicios</a>
          <a href="#metodologia">Metodología</a>
          <a href="#radar4">Radar4</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  )
}
