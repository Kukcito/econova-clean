import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

export default function ContactoPage(){
  return (
    <main>
      <Navbar />
      <PageHeader kicker="Conversemos" title="Agenda un diagnóstico sin costo">
        Te proponemos un plan de 45–60 minutos para mapear el punto de partida y priorizar quick wins.
      </PageHeader>
      <Contact />
      <Footer />
    </main>
  )
}
