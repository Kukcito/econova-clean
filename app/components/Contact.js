'use client'
import { useState } from 'react'

export default function Contact(){
  const [ok,setOk] = useState(false)
  const submit = async (e)=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    const r = await fetch('/api/contact',{method:'POST', body:JSON.stringify(data)})
    if(r.ok) setOk(true)
  }
  return (
    <section id="contacto" className="section container">
      <h2 className="h2" data-animate>Contacto</h2>
      <div className="grid grid-2">
        <form onSubmit={submit} className="card" data-animate>
          <label>Nombre<br/><input name="name" required style={i}/></label><br/>
          <label>Email<br/><input name="email" type="email" required style={i}/></label><br/>
          <label>Mensaje<br/><textarea name="message" rows={4} required style={i}/></label><br/>
          <button className="btn btn-primary" type="submit">Enviar</button>
          {ok && <p className="lead" style={{marginTop:10,color:'#86efac'}}>¡Gracias! Te contactamos pronto.</p>}
        </form>
        <div className="card" data-animate>
          <p className="lead">Escríbenos: <a href="mailto:contacto@econova.mx">contacto@econova.mx</a><br/>CDMX · LATAM</p>
          <p className="lead">Horario: 9:00–18:00 (GMT-6)</p>
        </div>
      </div>
    </section>
  )
}
const i = {width:'100%',marginTop:6,padding:'12px 14px',borderRadius:12,border:'1px solid rgba(148,163,184,.25)',background:'#0b1220',color:'#e7edf6'}
