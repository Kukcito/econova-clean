export default function Page() {
  return (
    <main style={{fontFamily:'var(--font-inter)', padding:'64px 24px', maxWidth:1024, margin:'0 auto'}}>
      <header style={{marginBottom:40}}>
        <img src="/logo.svg" alt="ECONOVA" height="32" />
      </header>

      <h1 style={{fontSize:38, lineHeight:1.15, margin:'12px 0 12px'}}>
        Sostenibilidad que protege vidas, fortalece instituciones y crea valor medible.
      </h1>
      <p style={{color:'#334155', fontSize:18}}>
        ISO 14001 / ISO 45001 · Informes GRI · ODS · Radar4 para decisiones basadas en datos.
      </p>

      <div style={{display:'flex', gap:12, marginTop:24}}>
        <a href="#contacto" style={{background:'#0ea5e9', color:'#fff', padding:'12px 16px', borderRadius:8, textDecoration:'none'}}>Agendar diagnóstico</a>
        <a href="#radar4" style={{background:'#16a34a', color:'#fff', padding:'12px 16px', borderRadius:8, textDecoration:'none'}}>Ver Radar4</a>
      </div>

      <section style={{display:'grid', gridTemplateColumns:'repeat(3,minmax(0,1fr))', gap:16, marginTop:40}}>
        <div style={{border:'1px solid #e2e8f0', borderRadius:12, padding:16}}>
          <div style={{fontSize:28, fontWeight:800}}>-35%</div>
          <div style={{fontWeight:700}}>Incidentes</div>
          <div style={{color:'#64748b'}}>en 12 meses</div>
        </div>
        <div style={{border:'1px solid #e2e8f0', borderRadius:12, padding:16}}>
          <div style={{fontSize:28, fontWeight:800}}>+25%</div>
          <div style={{fontWeight:700}}>Cumplimiento</div>
          <div style={{color:'#64748b'}}>efectivo</div>
        </div>
        <div style={{border:'1px solid #e2e8f0', borderRadius:12, padding:16}}>
          <div style={{fontSize:28, fontWeight:800}}>90 días</div>
          <div style={{fontWeight:700}}>Tiempo a auditoría</div>
          <div style={{color:'#64748b'}}>promedio</div>
        </div>
      </section>

      <footer style={{marginTop:56, padding:'24px 0', color:'#64748b', borderTop:'1px solid #e2e8f0'}}>
        © {new Date().getFullYear()} ECONOVA.
      </footer>
    </main>
  );
}
