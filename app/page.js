// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section hero-wrap" aria-label="Hero">
        <div className="container hero-content">
          <p className="lead">Sostenibilidad & Seguridad basadas en datos</p>
          <h1 className="h1" style={{ maxWidth: 980 }}>
            Sostenibilidad que protege vidas y agrega valor
          </h1>
          <p className="lead" style={{ maxWidth: 720 }}>
            Convertimos medio ambiente y seguridad en motor de competitividad
            real: diagnósticos rápidos, estandarización ISO, reporting GRI y
            priorización con Radar4 para ejecutar lo que más impacta.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <a className="btn btn-green" href="/contacto">
              Agendar diagnóstico
            </a>
            <a className="btn" href="/radar4">
              Ver <strong>Radar4</strong> en acción
            </a>
          </div>

          {/* KPIs */}
          <div className="kpi-grid" style={{ marginTop: 28 }}>
            <div className="card">
              <h3 className="h2" style={{ margin: 0 }}>-35%</h3>
              <p className="lead" style={{ margin: 0 }}>Incidentes</p>
            </div>
            <div className="card">
              <h3 className="h2" style={{ margin: 0 }}>+25%</h3>
              <p className="lead" style={{ margin: 0 }}>Madurez HSE</p>
            </div>
            <div className="card">
              <h3 className="h2" style={{ margin: 0 }}>90 días</h3>
              <p className="lead" style={{ margin: 0 }}>Resultados</p>
            </div>
          </div>
        </div>

        {/* Fondo suave (usa tu gradiente actual) */}
        <div className="hero-bg" />
        <div className="hero-shapes" />
      </section>

      {/* SERVICIOS + GALERÍA */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="h2">Servicios para acelerar tu sostenibilidad</h2>
              <p className="lead">
                Diseñamos, implementamos y operamos sistemas que protegen
                personas y medio ambiente, entregan evidencia y **crean valor
                medible** en el negocio.
              </p>

              <div className="grid-3" style={{ marginTop: 16 }}>
                <div className="card">
                  <b>01 · Diagnóstico</b>
                  <p style={{ marginTop: 8 }}>
                    Assessment integral, entrevistas, revisión documental,
                    matriz legal aplicable y mapa de brechas con priorización
                    por riesgo/impacto.
                  </p>
                </div>
                <div className="card">
                  <b>02 · Implementación</b>
                  <p style={{ marginTop: 8 }}>
                    ISO 14001/45001, programas, capacitación y operación con
                    tablero de indicadores.
                  </p>
                </div>
                <div className="card">
                  <b>03 · Reporting & mejora</b>
                  <p style={{ marginTop: 8 }}>
                    Informes GRI/ESG, ODS, auditorías internas y mejora
                    continua con Radar4.
                  </p>
                </div>
              </div>
            </div>

            {/* Galería toques “pro” */}
            <div className="grid-3">
              <figure className="card" style={{ padding: 10 }}>
                <Image
                  src="/media/diag.jpg"
                  width={620}
                  height={420}
                  alt="Diagnóstico en planta"
                />
                <figcaption className="lead" style={{ marginTop: 8 }}>
                  Diagnóstico rápido de brechas
                </figcaption>
              </figure>
              <figure className="card" style={{ padding: 10 }}>
                <Image
                  src="/media/iso.jpg"
                  width={620}
                  height={420}
                  alt="ISO 14001 / 45001"
                />
                <figcaption className="lead" style={{ marginTop: 8 }}>
                  Implementación ISO 14001/45001
                </figcaption>
              </figure>
              <figure className="card" style={{ padding: 10 }}>
                <Image
                  src="/media/ods.jpg"
                  width={620}
                  height={420}
                  alt="GRI y ODS"
                />
                <figcaption className="lead" style={{ marginTop: 8 }}>
                  Informes GRI y ODS para stakeholders
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* RADAR4 BENEFICIOS */}
      <section className="section" id="radar4">
        <div className="container grid-2">
          <div>
            <h2 className="h2">Prioriza con Radar4 impactos y decisiones</h2>
            <p className="lead">
              Un modelo de priorización que convierte cientos de hallazgos en
              una **lista accionable** según riesgo, costo, beneficio y tiempo.
            </p>

            <ul style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>Visibilidad de riesgos ejecutables en un tablero único.</li>
              <li>Análisis ROI para cada iniciativa.</li>
              <li>Justificables ante consejo/finanzas.</li>
              <li>Simulación de escenarios y quick wins en 90 días.</li>
            </ul>
          </div>

          <div className="grid-3">
            <div className="card">
              <b>37%</b>
              <p className="lead" style={{ marginTop: 6 }}>
                reducción de exposición en 6 meses
              </p>
            </div>
            <div className="card">
              <b>15%</b>
              <p className="lead" style={{ marginTop: 6 }}>
                ahorro por decisiones mejor informadas
              </p>
            </div>
            <div className="card">
              <b>99%</b>
              <p className="lead" style={{ marginTop: 6 }}>
                trazabilidad y evidencia de cumplimiento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="section" id="sectores">
        <div className="container">
          <h2 className="h2">Sectores y contextos donde entregamos impacto</h2>
          <div className="grid-4" style={{ marginTop: 16 }}>
            {[
              "Industria & manufactura",
              "Energía y minería",
              "Construcción & infraestructura",
              "Retail & logística",
              "Alimentos & bebidas",
              "Salud y pharma",
              "Educación & campus",
              "Gobierno",
            ].map((t) => (
              <div className="card" key={t}>
                <b>{t}</b>
                <p style={{ marginTop: 6 }}>
                  Casos reales con reducción de incidentes, mejora de indicadores
                  y auditorías exitosas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS / CASOS */}
      <section className="section" id="resultados">
        <div className="container">
          <h2 className="h2">Resultados recientes con impacto tangible</h2>

          <div className="grid-3" style={{ marginTop: 16 }}>
            <div className="card">
              <b>Corporativo industrial · 3 plantas</b>
              <p style={{ marginTop: 6 }}>
                -41% incidentes en 10 meses, certificación ISO 45001 y reporte
                GRI alineado a ODS 3, 8 y 12.
              </p>
            </div>
            <div className="card">
              <b>Operador logístico · 12 sitios</b>
              <p style={{ marginTop: 6 }}>
                Estandarización de procesos HSE, tablero de indicadores y quick
                wins con payback &lt; 90 días.
              </p>
            </div>
            <div className="card">
              <b>Alimentos y bebidas</b>
              <p style={{ marginTop: 6 }}>
                Identificación de riesgos críticos y roadmap de inversión con
                ROI &gt; 18% en 12 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section" id="testimonios">
        <div className="container grid-2">
          <div className="card">
            <p>
              “Pasamos de iniciativas sueltas a un **roadmap** claro que previene
              incidentes y justifica decisiones con datos. Radar4 nos ordenó.”
            </p>
            <p className="lead">— Directora HSE, holding industrial</p>
          </div>
          <div className="card">
            <p>
              “Logramos certificar ISO y comunicar ESG sin fricción. La
              dirección entiende ahora **qué priorizar y por qué**.”
            </p>
            <p className="lead">— CFO, logística nacional</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 className="h3" style={{ marginBottom: 6 }}>
                ¿Listo para bajar incidentes y comunicar valor?
              </h3>
              <p className="lead" style={{ margin: 0 }}>
                Agenda un diagnóstico sin costo. En 45–60 min definimos
                siguientes pasos y quick wins.
              </p>
            </div>
            <a className="btn btn-green" href="/contacto">Agendar ahora</a>
          </div>
        </div>
      </section>
    </>
  );
}
