import Navbar from './components/Navbar'
import OnView from './components/OnView'
import Hero from './components/Hero'
import KPIs from './components/KPIs'
import Services from './components/Services'
import Methodology from './components/Methodology'
import Radar4 from './components/Radar4'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Image from 'next/image'

export default function Page(){
  return (
    <main>
      <OnView />
      <Navbar />
      <Hero />
      <section className="section container" data-animate>
        <div className="lead" style={{marginBottom:10,color:'#9fb3c8'}}>Confían en nosotros</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16,alignItems:'center'}}>
          {['cliente1','cliente2','cliente3','aliado1','aliado2'].map((n,i)=>(
            <Image key={i} src={`/logos/${n}.svg`} alt={`Logo ${n}`} width={140} height={34}/>
          ))}
        </div>
      </section>
      <KPIs />
      <Services />
      <Methodology />
      <Radar4 />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
