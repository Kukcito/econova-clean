import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'

const faqs = [
  ['¿Trabajan con sector público y privado?', 'Sí. Contamos con experiencia en fuerzas públicas, manufactura y servicios. Adaptamos el enfoque regulatorio y de control.'],
  ['¿Tiempo típico a certificación?', '90 días en promedio desde diagnóstico, variando por punto de partida y disponibilidad interna.'],
  ['¿Incluyen diseño editorial del reporte GRI?', 'Sí. Entregamos contenido, visualizaciones y maquetación listas para publicar.'],
  ['¿Pueden operar como “equipo extendido”?', 'Sí. Podemos operar procesos (bitácoras, KPIs, evidencias) mientras se consolida el equipo interno.'],
  ['¿Cómo funciona Radar4?', 'Es un modelo multicriterio ponderado. Se parametriza por negocio y evidencia. Permite simular escenarios y calcular ROI.']
]

export default function FAQPage(){
  return (
    <main>
      <Navbar />
      <PageHeader kicker="Ayuda" title="Preguntas frecuentes">
        Si no ves tu pregunta, escríbenos a <a href="mailto:contacto@econova.mx">contacto@econova.mx</a>.
      </PageHeader>

      <section className="section container">
        <div className="grid grid-2">
          {faqs.map(([q,a],i)=>(
            <details key={i} className="card" data-animate open={i<2}>
              <summary style={{cursor:'pointer',fontWeight:800}}>{q}</summary>
              <p className="lead" style={{marginTop:6}}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
