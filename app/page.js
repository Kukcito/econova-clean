// app/page.js
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Radar4 from './components/Radar4';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Methodology />
      <Radar4 />
      <FAQ />
      <Contact />
    </>
  );
}
