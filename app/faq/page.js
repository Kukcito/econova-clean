// app/faq/page.js
import FAQ from '../components/FAQ';

export const metadata = { title: 'FAQ' };

export default function FaqPage() {
  return (
    <section className="section container">
      <p className="lead">Dudas frecuentes</p>
      <h1>Preguntas frecuentes</h1>
      <p>
        Aquí resolvemos las preguntas más comunes sobre nuestros servicios, enfoques y alcances. Si no
        encuentras lo que buscas, contáctanos: con gusto te orientamos.
      </p>

      {/* Reutiliza tu componente de preguntas frecuentes */}
      <div style={{ marginTop: '24px' }}>
        <FAQ />
      </div>
    </section>
  );
}
