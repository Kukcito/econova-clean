import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import Image from 'next/image'

const bullets = [
  'Modelo multicriterio: severidad, probabilidad, costo, ODS, reputación',
  'Escenarios “what-if” y simulación de ROI',
  'Trazabilidad por responsable y evidencia cargada',
  'Exportables para consejo, auditoría y reportes GRI'
]

export default function Radar4Page(){
  return (
    <main>
      <Navbar />
      <PageHeader kicker="Producto" title="Radar4: prioriza por impacto real">
        Una visual que ordena riesgos y proyectos por impacto para ejecutar lo importante primero.
      </PageHeader>

      <section className="section container">
        <div className="grid grid-2">
          <div className="card" data-animate>
            <ul style={{margin:0,paddingLeft:18}}>
              {bullets.map((b,i)=><li key={i} className="lead" style={{marginBottom:8}}>{b}</li>)}
            </ul>
            <div className="btns" style={{marginTop:14}}>
              <a className="btn btn-primary" href="/contacto">Solicitar demo</a>
              <a className="btn btn-ghost" href="/servicios">Ver servicios</a>
            </div>
          </div>
          <div className="card" data-animate>
            {/* usa /public/video/radar4.mp4 o cambia por un iframe de YouTube */}
            <video controls width="100%" poster="/images/radar4-1.jpg" style={{borderRadius:12}}>
              <source src="/video/radar4.mp4" type="video/mp4" />
            </video>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:10}}>
              <Image src="/images/radar4-1.jpg" alt="Radar4 captura 1" width={550} height={360}/>
              <Image src="/images/radar4-2.jpg" alt="Radar4 captura 2" width={550} height={360}/>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
