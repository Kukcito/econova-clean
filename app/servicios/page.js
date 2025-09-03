export const metadata = { title: 'Servicios | ECONOVA' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Servicios para acelerar tu sostenibilidad</h1>
        <p className="lead">
          Diseñamos, implementamos y operamos sistemas que protegen personas y medio ambiente
          y convierten la sostenibilidad en ventaja competitiva.
        </p>

        <div className="grid-2" style={{marginTop:24}}>
          <div className="card">
            <h2 className="h3">Diagnóstico & Gap Assessment</h2>
            <ul>
              <li>Assessment 2–3 semanas</li><li>Matriz legal aplicable</li><li>Plan táctico y quick wins</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">ISO 14001 / 45001</h2>
            <ul>
              <li>Diseño del sistema</li><li>Formación por rol</li><li>Preparación para certificación</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">Informes GRI & ODS</h2>
            <ul>
              <li>Materialidad y stakeholders</li><li>Indicadores y narrativa</li><li>Tablero ejecutivo</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">Radar4</h2>
            <ul>
              <li>Visibilidad de riesgos</li><li>Justificables ante comité</li><li>Integración con tu BI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
