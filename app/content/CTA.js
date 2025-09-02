import { company } from '../content/home.data';

export default function CTA(){
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2 className="h2" style={{margin:0}}>¿Listos para empezar?</h2>
          <p className="lead" style={{margin:'4px 0 0'}}>
            Agenda un diagnóstico **sin costo** y recibe un plan de 90 días.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href={`mailto:${company.mail}`}>Agendar diagnóstico</a>
          <a className="btn" href="#servicios">Ver servicios</a>
        </div>
      </div>
    </section>
  );
}
