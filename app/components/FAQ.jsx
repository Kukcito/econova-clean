import Reveal from './Reveal';

const QA = [
  ['¿Cuánto tardan los quick wins?', 'En 30–45 días puedes ver controles operando, métricas iniciales y evidencias listas para auditoría.'],
  ['¿Trabajan con nuestro equipo?', 'Sí. Co-creamos con tus responsables. Nuestro objetivo es dejar capacidad instalada, no dependencia.'],
  ['¿Pueden operar temporalmente?', 'Podemos operar y hacer transferencia gradual, con tableros y rituales definidos.'],
];

export default function FAQ(){
  return (
    <section id="faq" className="section">
      <div className="container">
        <Reveal><p className="kicker">Preguntas frecuentes</p></Reveal>
        <Reveal delay={60}><h2 className="h2">Lo que nos preguntan al iniciar</h2></Reveal>

        <div className="grid-2" style={{marginTop:'12px'}}>
          {QA.map(([q,a], i) => (
            <Reveal key={q} delay={100 + i*80}>
              <details className="card">
                <summary className="h3" style={{cursor:'pointer'}}>{q}</summary>
                <p className="lead" style={{marginTop:'8px'}}>{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
