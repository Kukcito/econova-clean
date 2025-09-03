// app/page.js
import Image from "next/image";

export const metadata = { title: "ECONOVA — Sostenibilidad que protege y agrega valor" };

export default function Home() {
  return (
    <>
      {/* HERO con imagen */}
      <section className="section hero-wrap">
        <div className="container hero-content">
          <div style={{ display:"grid", gap:16 }}>
            <p className="lead">Sostenibilidad & Seguridad basadas en datos</p>
            <h1 className="h1" style={{ maxWidth: 980 }}>
              Protegemos vidas, fortalecemos instituciones y creamos valor medible.
            </h1>
            <p className="lead" style={{ maxWidth: 760 }}>
              Convertimos medio ambiente y seguridad en un motor real de competitividad:
              diagnóstico rápido, implementación ISO 14001/45001, reporting GRI y
              priorización con <strong>Radar4</strong> para ejecutar lo que más impacta.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginTop:4 }}>
              <a className="btn btn-green" href="/contacto">Agendar diagnóstico</a>
              <a className="btn" href="/radar4">Ver Radar4 en acción</a>
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ marginTop: 24 }}>
            <Image
              src="/media/hero.jpg"
              alt="Operación segura y sostenible"
              width={1400}
              height={800}
              className="img-fluid"
              priority
            />
          </div>

          {/* KPIs */}
          <div className="kpi-grid" style={{ marginTop: 24 }}>
            <div className="card"><h3 className="h2" style={{margin:0}}>-35%</h3><p className="lead" style={{margin:0}}>Incidentes</p></div>
            <div className="card"><h3 className="h2" style={{margin:0}}>+25%</h3><p className="lead" style={{margin:0}}>Madurez HSE</p></div>
            <div className="card"><h3 className="h2" style={{margin:0}}>90 días</h3><p className="lead" style={{margin:0}}>Resultados visibles</p></div>
          </div>
        </div>
      </section>

      {/* SERVICIOS + GALERÍA */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="h2">Servicios para acelerar tu sostenibilidad</h2>
              <p className="lead">
                Diseñamos, implementamos y operamos sistemas que protegen personas y medio
                ambiente. Entregamos evidencia y <strong>valor medible</strong> con auditorías exitosas.
              </p>

              <div className="grid-3" style={{ marginTop: 16 }}>
                <div className="card">
                  <b>01 · Diagnóstico & Gap</b>
                  <p style={{ marginTop: 8 }}>
                    Línea base con entrevistas, recorridos y revisión documental. Mapa de brechas
                    y matriz legal aplicable con prioridad por riesgo/impacto y costo/beneficio.
                  </p>
                </div>
                <div className="card">
                  <b>02 · ISO 14001/45001</b>
                  <p style={{ marginTop: 8 }}>
                    Procedimientos, capacitación, controles operativos, auditorías internas y
                    acompañamiento a auditor externo. Tablero de indicadores y estandarización.
                  </p>
                </div>
                <div className="card">
                  <b>03 · ESG, GRI & ODS</b>
                  <p style={{ marginTop: 8 }}>
                    Levantamiento y aseguramiento de datos multisede, materialidad, y reportes
                    que comunican impacto a stakeholders con narrativa clara de negocio.
                  </p>
                </div>
              </div>
            </div>

            {/* Galería: nunca desborda por .img-fluid y grids minmax */}
            <div className="grid-3">
              <figure className="card" style={{ padding: 10 }}>
                <Image src="/media/diag.jpg" alt="Diagnóstico en planta" width={620} height={420} className="img-fluid" />
                <figcaption className="lead" style={{ marginTop: 8 }}>Diagnóstico rápido de brechas</figcaption>
              </figure>
              <figure className="card" style={{ padding: 10 }}>
                <Image src="/media/iso.jpg" alt="ISO 14001/45001" width={620} height={420} className="img-fluid" />
                <figcaption className="lead" style={{ marginTop: 8 }}>Implementación ISO 14001/45001</figcaption>
              </figure>
              <figure className="card" style={{ padding: 10 }}>
                <Image src="/media/ods.jpg" alt="Informes GRI y ODS" width={620} height={420} className="img-fluid" />
                <figcaption className="lead" style={{ marginTop: 8 }}>Informes GRI y ODS</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE RADAR4 con imagen alusiva */}
      <section className="section" id="radar4-home">
        <div className="container grid-2">
          <div>
            <h2 className="h2">Radar4: decide con datos y prioriza lo que más impacta</h2>
            <p className="lead">
              Radar4 transforma hallazgos dispersos en un <strong>backlog ejecutable</strong> con ROI,
              riesgo residual, costo y responsables. Elimina el ruido y orienta inversión.
            </p>
            <ul style={{ marginTop: 10, paddingLeft: 18 }}>
              <li>Simulación de escenarios (presupuesto, plazo, riesgo residual).</li>
              <li>Quick wins en 90 días con evidencia para auditorías y comité.</li>
              <li>Transparencia (99% trazabilidad) y narrativa para finanzas.</li>
            </ul>
            <div style={{ marginTop: 14 }}>
              <a className="btn btn-green" href="/radar4">Conocer Radar4</a>
            </div>
          </div>
          <div className="card" style={{ padding: 10 }}>
            <Image
              src="/media/radar4.jpg"
              alt="Vista de Radar4 priorizando iniciativas"
              width={1200}
              height={750}
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      {/* RESULTADOS + TESTIMONIOS (extendido) */}
      <section className="section" id="resultados">
        <div className="container">
          <h2 className="h2">Resultados recientes con impacto tangible</h2>
          <div className="grid-3" style={{ marginTop: 16 }}>
            <div className="card">
              <b>Holding manufactura · 3 plantas</b>
              <p style={{ marginTop: 6 }}>
                -41% incidentes en 10 meses; certificación ISO 45001; tablero de
                KPIs con desviaciones y CAPAs integradas; reporte GRI alineado a ODS 3, 8 y 12.
              </p>
            </div>
            <div className="card">
              <b>Operador logístico · 12 sitios</b>
              <p style={{ marginTop: 6 }}>
                Estandarización HSE, entrenamiento y quick wins con payback &lt; 90 días.
                Disminución de multas y mejores inspecciones.
              </p>
            </div>
            <div className="card">
              <b>Alimentos y bebidas</b>
              <p style={{ marginTop: 6 }}>
                Roadmap de inversión priorizado; ROI &gt; 18% anual; auditorías
                más ágiles con evidencia centralizada y narrativa ESG clara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ display:"flex", gap:16, alignItems:"center", justifyContent:"space-between", flexWrap:"wrap" }}>
            <div>
              <h3 className="h3" style={{ marginBottom: 6 }}>¿Listo para bajar incidentes y comunicar valor?</h3>
              <p className="lead" style={{ margin: 0 }}>
                Agenda un diagnóstico sin costo. En 45–60 min definimos pasos y quick wins.
              </p>
            </div>
            <a className="btn btn-green" href="/contacto">Agendar ahora</a>
          </div>
        </div>
      </section>
    </>
  );
}
