import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KPIs from './components/KPIs';
import Why from './components/Why';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Radar4 from './components/Radar4';
import Footer from './components/Footer';

export default function Page(){
  return (
    <>
      <Navbar />
      <Hero />
      <KPIs />
      <Why />
      <Services />
      <Methodology />
      <Radar4 />
      <Footer />
    </>
  );
}
