const faqs = [
  {q:'¿Trabajan con sector público y privado?', a:'Sí. Tenemos experiencias en fuerzas públicas y en industria, con marcos ODS/GRI.'},
  {q:'¿Cuánto tarda un proyecto?', a:'Definimos quick wins a 90 días y un objetivo integral a 12 meses.'},
  {q:'¿Pueden ayudar con auditorías?', a:'Sí, pre-auditoría, cierre de brechas y acompañamiento durante el proceso.'},
];

export default function FAQ(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Preguntas frecuentes</h2>
        <div className="faq" style={{display:'grid',gap:10}}>
          {faqs.map((f,i)=>(
            <details key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
