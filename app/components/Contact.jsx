'use client';
import {useState} from 'react';
import Reveal from './Reveal';

export default function Contact(){
  const [state, setState] = useState({name:'', email:'', message:''});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const res = await fetch('/api/contact', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(state)
      });
      if(res.ok) setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <Reveal><p className="kicker">Hablemos</p></Reveal>
        <Reveal delay={60}><h2 className="h2">Diagnóstico sin costo</h2></Reveal>
        <Reveal delay={120}><p className="lead-long" style={{maxWidth:'80ch'}}>Una sesión de 45–60 minutos para mapear tu punto de partida, riesgos críticos y un primer backlog de quick wins. Te llevas un resumen ejecutivo.</p></Reveal>

        <div className="grid-2" style={{marginTop:'16px', alignItems:'start'}}>
          <Reveal delay={160}>
            <form className="card" onSubmit={onSubmit}>
              <label className="lead">Nombre</label>
              <input required className="input" value={state.name}
                     onChange={e=>setState(s=>({...s, name:e.target.value}))} />
              <label className="lead" style={{marginTop:'10px'}}>Email</label>
              <input required type="email" className="input" value={state.email}
                     onChange={e=>setState(s=>({...s, email:e.target.value}))} />
              <label className="lead" style={{marginTop:'10px'}}>Mensaje</label>
              <textarea required rows={5} className="input" value={state.message}
                        onChange={e=>setState(s=>({...s, message:e.target.value}))} />
              <button disabled={loading} className="btn btn-green" style={{marginTop:'12px'}}>
                {loading ? 'Enviando…' : 'Enviar'}
              </button>
              {sent && <p className="lead" style={{marginTop:'8px', color:'var(--green)'}}>¡Gracias! Te contactamos en breve.</p>}
            </form>
          </Reveal>

          <Reveal delay={220}>
            <div className="card">
              <h3 className="h3">También por correo</h3>
              <p className="lead"><a href="mailto:contacto@econova.mx">contacto@econova.mx</a></p>
              <h3 className="h3" style={{marginTop:'14px'}}>Dónde operamos</h3>
              <p className="lead">LatAm (MX, CO, CL, PE) y proyectos globales remotos.</p>
              <img src="/img/team.jpg" alt="Equipo Econova" style={{borderRadius:'12px', marginTop:'12px'}} />
            </div>
          </Reveal>
        </div>
      </div>
      <style jsx global>{`
        .input{
          width: 100%; background: rgba(255,255,255,.02); color: var(--fg);
          border: 1px solid var(--line); border-radius: 10px; padding: 12px;
        }
        .input:focus{ outline: none; border-color: rgba(255,255,255,.18); }
      `}</style>
    </section>
  );
}
