// app/page.js

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero-wrap section">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <p className="lead reveal">
            Sostenibilidad & Seguridad basadas en datos
          </p>

          <h1 className="reveal">
            Protegemos vidas, fortalecemos instituciones
            y creamos valor medible.
          </h1>

          <p className="lead reveal">
            ISO 14001 · ISO 45001 · Informes GRI · ODS · <strong>Radar4</strong> para
            priorizar acciones por impacto.
          </p>

          <div
            className="reveal"
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}
          >
            <a className="btn btn-green" href="/contacto">Agendar diagnóstico</a>
            <a className="btn btn-primary" href="/radar4">Ver Radar4 en acción</a>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="section container">
        <div className="kpi-grid reveal">
          <div className="card">
            <div className="num">-35%</div>
            <div className="label">Incidentes en 12 meses</div>
          </div>
          <div className="card">
            <div className="num">+25%</div>
            <div className="label">Cumplimiento efectivo</div>
          </div>
          <div className="card">
            <div className="num">12</div>
            <div className="label">ODS que abordamos</div>
          </div>
          <div className="card">
            <div className="num">90 días</div>
            <div className="label">Quick-wins promedio</div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section container">
        <h2 className="reveal">Servicios</h2>
        <p className="lead reveal">
          Diseñamos, implementamos y operamos sistemas que protegen personas
          y medio ambiente, y generan evidencia para decidir.
        </p>

        <div className="grid-2 reveal">
          <div className="card">
            <h3>Diagnóstico & Gap Assessment</h3>
            <p>Levantamiento integral, entrevistas, revisión documental.</p>
            <ul>
              <li>Assessment en 2–3 semanas</li>
              <li>Quick wins 30–45 días</li>
              <li>Plan táctico y matriz legal</li>
            </ul>
          </div>

          <div className="card">
            <h3>Implementación ISO (14001/45001)</h3>
            <p>Sistemas de gestión con foco en riesgos, procesos y cumplimiento.</p>
            <ul>
              <li>Mapa de procesos y riesgos</li>
              <li>Auditorías internas</li>
              <li>Capacitación y despliegue</li>
            </ul>
          </div>

          <div className="card">
            <h3>GRI & ESG Reporting</h3>
            <p>Indicadores, tableros y reportes para stakeholders.</p>
            <ul>
              <li>KPIs y data model</li>
              <li>Tablero ejecutivo</li>
              <li>Reporte anual GRI</li>
            </ul>
          </div>

          <div className="card">
            <h3>ODS & Radar4</h3>
            <p>Priorización por impacto con radar visual simple para decidir.</p>
            <ul>
              <li>Scorecard multiparámetro</li>
              <li>Roadmap trimestral</li>
              <li>Revisión mensual</li>
            </ul>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia" className="section container">
        <h2 className="reveal">Metodología</h2>

        <div className="grid-2 reveal">
          <div className="card">
            <h3>1. Descubrir</h3>
            <p>Entendimiento del contexto, riesgos y madurez.</p>
          </div>
          <div className="card">
            <h3>2. Diseñar</h3>
            <p>Solución priorizada, métricas y plan de despliegue.</p>
          </div>
          <div className="card">
            <h3>3. Ejecutar</h3>
            <p>Implementación ágil con quick-wins y gestión del cambio.</p>
          </div>
          <div className="card">
            <h3>4. Medir & Mejorar</h3>
            <p>Tableros, auditorías y mejora continua basada en datos.</p>
          </div>
        </div>
      </section>

      {/* LOGOS CLIENTES */}
      <section id="clientes" className="section container">
        <h2 className="reveal">Confían en nosotros</h2>
        <div className="client-logos reveal">
          <img src="/logos/logo1.svg" alt="Cliente 1" />
          <img src="/logos/logo2.svg" alt="Cliente 2" />
          <img src="/logos/logo3.svg" alt="Cliente 3" />
          <img src="/logos/logo4.svg" alt="Cliente 4" />
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="section container">
        <div className="card reveal" style={{ padding: 32, textAlign: 'center' }}>
          <h2>¿Listo para crear valor medible?</h2>
          <p className="lead">
            Agenda un diagnóstico sin costo y obtén quick-wins en 30–45 días.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              marginTop: 16,
              flexWrap: 'wrap',
            }}
          >
            <a className="btn btn-green" href="/contacto">Agendar diagnóstico</a>
            <a className="btn btn-primary" href="/radar4">Ver Radar4 en acción</a>
          </div>
        </div>
      </section>
    </>
  )
}
