import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import Image from 'next/image'

const valores = [
  ['Integridad','Hacemos lo correcto aun cuando nadie mira.'],
  ['Pragmatismo','Soluciones simples que funcionan en campo.'],
  ['Evidencia','Decidimos con datos, no suposiciones.'],
  ['Cuidado','Personas y planeta en el centro.']
]

export default function NosotrosPage(){
  return (
    <main>
      <Navbar />
      <PageHeader kicker="Quiénes somos" title="Equipo enfocado en resultados">
        Somos consultores y operadores con experiencia en seguridad industrial, medio ambiente y gestión del cambio.
      </PageHeader>

      <section className="section container">
        <div className="grid grid-2">
          <div className="card" data-animate>
            <h3>Misión</h3>
            <p className="lead">Acelerar la transición hacia operaciones seguras y sostenibles que protejan vidas y generen valor.</p>
            <h3>Visión</h3>
            <p className="lead">Ser el partner LATAM con la mejor combinación de rigor técnico y ejecución ágil.</p>
            <h3>Valores</h3>
            <ul style={{margin:0,paddingLeft:18}}>
              {valores.map(([t,d],i)=><li key={i}><strong>{t}.</strong> {d}</li>)}
            </ul>
          </div>
          <div className="card" data-animate>
            <Image src="/images/oficina.jpg" alt="Oficina ECONOVA" width={900} height={600}/>
            <p className="lead" style={{marginTop:10}}>Cobertura: México y LATAM · Red de especialistas y auditores.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
