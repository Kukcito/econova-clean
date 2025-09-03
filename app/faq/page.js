export const metadata = { title: 'FAQ | ECONOVA' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Preguntas frecuentes</h1>

        <div className="card" style={{marginTop:16}}>
          <h2 className="h3">¿Cuánto tarda un diagnóstico?</h2>
          <p>Entre 2 y 3 semanas, según número de sitios y disponibilidad de evidencias.</p>
        </div>

        <div className="card" style={{marginTop:16}}>
          <h2 className="h3">¿Pueden preparar la certificación ISO?</h2>
          <p>Sí. Implementamos, entrenamos y pre-auditamos, y acompañamos en la auditoría externa.</p>
        </div>

        <div className="card" style={{marginTop:16}}>
          <h2 className="h3">¿Cómo se licencía Radar4?</h2>
          <p>Proyecto por sitio y mantenimiento anual; integrable con tu BI.</p>
        </div>
      </div>
    </section>
  )
}
