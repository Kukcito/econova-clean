import { cases } from '../content/home.data';

export default function Cases(){
  return (
    <section id="casos" className="section container">
      <h2 className="h2">Casos de éxito</h2>
      <div className="grid-3">
        {cases.map(cs=>(
          <article key={cs.title} className="card case-card">
            <div className="case-img" style={{backgroundImage:`url(${cs.img})`}} />
            <div className="case-body">
              <div className="badge">{cs.sector}</div>
              <h3>{cs.title}</h3>
              <p>{cs.blurb}</p>
              <ul className="bullets">
                {cs.result.map((r,i)=>(<li key={i}>{r}</li>))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
