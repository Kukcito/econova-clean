// app/page.js
import Hero from './components/Hero';
import KPIs from './components/KPIs';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Radar4 from './components/Radar4';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <section className="section container">
        <KPIs />
      </section>
      <section className="section container">
        <Services />
      </section>
      <section className="section container">
        <Methodology />
      </section>
      <section className="section container">
        <Radar4 />
      </section>
      <section className="section container">
        <FAQ />
      </section>
      <section className="section container">
        <Contact />
      </section>
    </>
  );
}
