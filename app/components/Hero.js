'use client'
import {useEffect,useRef} from 'react';

export default function Hero(){
  const deco = useRef(null);
  useEffect(()=>{
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce) return;
    const onScroll=()=>{
      if(!deco.current) return;
      const y = window.scrollY*0.06;
      deco.current.style.transform = `translateY(${y}px) scale(${1 + y/1200})`;
    };
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  return (
    <section className="hero">
      <div className="container">
        <h1 className="h1">Sostenibilidad que protege vidas, fortalece instituciones y crea valor medible.</h1>
        <p className="lead">ISO 14001 / ISO 45001 · Informes GRI · ODS (3, 8, 11, 13, 16) · Radar4 para decisiones basadas en datos.</p>
        <div className="btns" style={{display:'flex',gap:12,marginTop:14}}>
          <a className="btn btn-primary" href="#contacto">Agendar diagnóstico</a>
          <a className="btn btn-green" href="#radar4">Ver Radar4 en acción</a>
        </div>
      </div>
      <div ref={deco} className="hero-deco" aria-hidden="true"/>
    </section>
  );
}
