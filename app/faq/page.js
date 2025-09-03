export const metadata = { title: 'FAQ | ECONOVA' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Preguntas frecuentes</h1>
        <div className="card" style={{marginTop:16}}>
          <h2 className="h3">¿Cuánto tarda un diagnóstico?</h2><p>2–3 semanas.</p>
        </div>
        <div className="card" style={{marginTop:16}}>
          <h2 className="h3">¿Preparan certificación ISO?</h2><p>Sí, end-to-end.</p>
        </div>
        <div className="card" style={{marginTop:16}}>
          <h2 className="h3">¿Cómo se licencía Radar4?</h2><p>Proyecto por sitio + mantenimiento anual.</p>
        </div>
      </div>
    </section>
  )
}
