'use client'
import { useEffect, useRef } from 'react'

export default function Hero(){
  const b1 = useRef(null), b2 = useRef(null), b3 = useRef(null)

  useEffect(()=>{
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduce) return
    const onMove = (e)=>{
      const y = window.scrollY || 0
      const z = 1 + Math.min(.06, y*0.00006)
      if(b1.current) b1.current.style.transform = `translateY(${y*0.10}px) scale(${z})`
      if(b2.current) b2.current.style.transform = `translateY(${y*0.06}px) scale(${z})`
      if(b3.current) b3.current.style.transform = `translateY(${y*0.04}px) scale(${z})`
    }
    onMove()
    window.addEventListener('scroll', onMove, {passive:true})
    return ()=> window.removeEventListener('scroll', onMove)
  },[])

  return (
    <header className="section hero">
      <div className="decor">
        <div className="bubble b1" ref={b1}></div>
        <div className="bubble b2" ref={b2}></div>
        <div className="bubble b3" ref={b3}></div>
      </div>

      <div className="container hero-grid">
        <div data-animate>
          <p className="lead" style={{color:'#9fb3c8',marginBottom:8}}>Sostenibilidad & Seguridad basadas en datos</p>
          <h1 className="h1">Protegemos vidas, fortalecemos instituciones y creamos valor medible.</h1>
          <p className="lead" style={{maxWidth:680}}>
            ISO 14001 · ISO 45001 · Informes GRI · ODS · <strong>Radar4</strong> para priorizar acciones por impacto.
          </p>
          <div className="btns" style={{marginTop:18}}>
            <a className="btn btn-primary" href="#contacto">Agendar diagnóstico</a>
            <a className="btn btn-ghost" href="#radar4">Ver Radar4 en acción</a>
          </div>
          <div style={{marginTop:22,color:'var(--muted)'}}>Tiempo promedio a auditoría: <strong style={{color:'#fff'}}>90 días</strong></div>
        </div>

        <div data-animate className="grid grid-3">
          <div className="card kpi">
            <div className="value">-35%</div>
            <div className="label">Incidentes en 12 meses</div>
          </div>
          <div className="card kpi">
            <div className="value">+25%</div>
            <div className="label">Cumplimiento efectivo</div>
          </div>
          <div className="card kpi">
            <div className="value">12</div>
            <div className="label">ODS que abordamos</div>
          </div>
        </div>
      </div>
    </header>
  )
}
