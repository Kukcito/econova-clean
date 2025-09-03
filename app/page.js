// app/page.js
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Radar4 from './components/Radar4';

import About from './components/About';
import Compliance from './components/Compliance';
import Sectors from './components/Sectors';
import Cases from './components/Cases';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Media from './components/Media'; // opcional

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Methodology />
      <Radar4 />

      {/* Bloques extensos */}
      <About />
      <Compliance />
      <Sectors />
      <Cases />
      <Testimonials />

      {/* Galería opcional */}
      <Media />

      {/* Cierre */}
      <FAQ />
      <Contact />
    </>
  );
}
