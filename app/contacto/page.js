// app/contacto/page.js
import Contact from '../components/Contact';

export const metadata = { title: 'Contacto' };

export default function ContactoPage() {
  return (
    <section className="section container">
      <p className="lead">Hablemos</p>
      <h1>Agenda un diagnóstico sin costo</h1>
      <p>
        Cuéntanos tu contexto y objetivos. Te proponemos una sesión breve para validar brechas, priorizar
        acciones y definir quick-wins. También podemos mostrarte Radar4 en acción.
      </p>

      {/* Reutiliza tu formulario (usa /api/contact) */}
      <div style={{ marginTop: '24px' }}>
        <Contact />
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h3>También puedes escribirnos</h3>
        <p><a href="mailto:contacto@econova.mx">contacto@econova.mx</a></p>
      </div>
    </section>
  );
}
