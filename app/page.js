export const metadata = { title: 'ECONOVA — Inicio' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Sostenibilidad que protege vidas y agrega valor</h1>
        <p className="lead">
          Convertimos medio ambiente y seguridad en motor de competitividad real.
        </p>

        <div className="kpi-grid" style={{marginTop:24}}>
          <div className="card"><h3 className="h3">-35%</h3><p>Incidentes</p></div>
          <div className="card"><h3 className="h3">+25%</h3><p>Madurez HSE</p></div>
          <div className="card"><h3 className="h3">90 días</h3><p>Resultados</p></div>
          <div className="card"><h3 className="h3">12</h3><p>ODS que abordamos</p></div>
        </div>
      </div>
    </section>
  )
}
