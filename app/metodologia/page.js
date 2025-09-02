import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import Image from 'next/image'

const pasos = [
  {t:'1. Diagnóstico y matriz legal', d:'Relevamos cumplimiento, controles y cultura. Construimos la matriz de requisitos y el mapa de brechas.'},
  {t:'2. Plan y priorización', d:'Priorizamos por riesgo, impacto y esfuerzo usando Radar4. Definimos quick-wins y roadmap.'},
  {t:'3. Implementación', d:'Documentos, procesos, bitácoras, indicadores y responsables. Acompañamiento a la operación.'},
  {t:'4. Capacitación', d:'Rutas por rol con microlearning y talleres prácticos. Evaluamos adopción.'},
  {t:'5. Auditoría interna', d:'Pre-auditoría, hallazgos y acciones correctivas. Evidencias listas.'},
  {t:'6. Certificación y mejora', d:'Acompañamiento a auditoría de tercera parte y plan de mejora continua.'},
]

export default function MetodologiaPage(){
  return (
    <main>
      <Navbar />
      <PageHeader
        kicker="Cómo trabajamos"
        title="Metodología ECONOVA: rápida, trazable y humana"
      >
        Un enfoque pragmático que reduce tiempos a auditoría (promedio 90 días) y mejora la adopción real en terreno.
      </PageHeader>

      <section className="section container">
        <div className="grid grid-2">
          <div className="card" data-animate>
            <div className="timeline">
              {pasos.map((p,i)=>(
                <div key={i} className="step" data-step={i+1}>
                  <strong>{p.t}</strong><br/><span className="lead">{p.d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card" data-animate>
            <Image src="/images/metodologia.jpg" alt="Metodología ECONOVA" width={900} height={600}/>
            <p className="lead" style={{marginTop:10}}>
              Integramos herramientas visuales y tableros para que dirección y equipos tomen decisiones informadas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
