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

export default function Page(){
  return (
    <main>
      <OnView />
      <Navbar />
      <Hero />
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
