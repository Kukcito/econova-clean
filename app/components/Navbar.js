'use client'
import {useState,useEffect} from 'react';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{const h=()=>setOpen(false);window.addEventListener('hashchange',h);return()=>window.removeEventListener('hashchange',h)},[]);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="logo">ECONOVA</a>
        <button className="hamb" onClick={()=>setOpen(s=>!s)} aria-label="Abrir menú">☰</button>
        <nav className={`nav-links ${open?'open':''}`}>
          <a href="#servicios">Servicios</a>
          <a href="#metodologia">Metodología</a>
          <a href="#radar4">Radar4</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto" className="btn btn-primary">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
