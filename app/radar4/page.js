export const metadata = { title: 'Radar4 | ECONOVA' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Radar4: prioriza impactos y decisiones</h1>
        <div className="grid-2" style={{marginTop:24}}>
          <div className="card">
            <h2 className="h3">Qué resuelve</h2>
            <ul>
              <li>Riesgos accionables</li><li>Comparabilidad</li><li>Roadmap por impacto</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">Resultados típicos</h2>
            <ul>
              <li>-35% incidentes (12 meses)</li><li>+25% madurez HSE</li><li>99% justificables</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
