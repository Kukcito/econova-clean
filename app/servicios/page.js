import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'

const areas = [
  {
    t: 'Diagnóstico & Gap Assessment',
    d: 'Levantamiento integral, entrevistas, revisión documental, matriz legal aplicable y mapa de brechas con priorización por riesgo/impacto.',
    bullets: [
      'Assessment en 2–3 semanas',
      'Entrega ejecutiva + plan táctico',
      'Quick wins de 30–45 días'
    ]
  },
  {
    t: 'ISO 14001 / ISO 45001',
    d: 'Diseño e implementación de SGAs y SGSST orientados a certificación, con foco en adopción cultural y evidencia trazable.',
    bullets: [
      'Políticas, objetivos, procedimientos y controles',
      'Indicadores, bitácoras y verificación',
      'Acompañamiento a auditoría'
    ]
  },
  {
    t: 'GRI & Reportes de Sostenibilidad',
    d: 'Metodología GRI con materialidad, indicadores y narrativa clara para consejo, inversionistas y comunidades.',
    bullets: [
      'Análisis de materialidad',
      'Tablero ejecutivo y narrativa',
      'Diseño editorial e infografías'
    ]
  },
  {
    t: 'Radar4 (priorización por impacto)',
    d: 'Modelo multicriterio que ordena riesgos, proyectos y ODS por impacto y urgencia. Decisiones informadas, no intuitivas.',
    bullets: [
      'Escenarios “what-if”',
      'Trazabilidad por responsable',
      'ROI de cada acción'
    ]
  },
  {
    t: 'Capacitación & Cultura',
    d: 'Programas de sensibilización, microlearning y talleres prácticos para cerrar brechas de adopción.',
    bullets: [
      'Rutas por rol y nivel',
      'Microcursos y simulaciones',
      'Certificados internos'
    ]
  },
  {
    t: 'Auditoría interna & Mejora',
    d: 'Auditorías internas, acciones correctivas y planes de mejora continua post certificación.',
    bullets: [
      'Hallazgos y no conformidades',
      'Planes 8D / Ishikawa',
      'Seguimiento trimestral'
    ]
  }
]

export default function ServiciosPage(){
  return (
    <main>
      <Navbar />
      <PageHeader
        kicker="Portafolio de servicio"
        title="Servicios para acelerar tu sostenibilidad"
      >
        Diseñamos, implementamos y operamos sistemas que **protegen personas y medio ambiente**, 
        entregan evidencia y **crean valor medible** en el negocio.
      </PageHeader>

      <section className="section container">
        <div className="grid grid-3">
          {areas.map((a,i)=>(
            <article className="card" key={i} data-animate>
              <h3 style={{margin:'0 0 8px'}}>{a.t}</h3>
              <p className="lead" style={{margin:'0 0 10px'}}>{a.d}</p>
              <ul style={{margin:0,paddingLeft:18}}>
                {a.bullets.map((b,bi)=><li key={bi}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
