import { about } from '../content/home.data';

export default function About(){
  return (
    <section id="quienes" className="section container">
      <h2 className="h2">Quiénes somos</h2>
      <p className="rich">{about.who}</p>

      <div className="grid-3" style={{marginTop:16}}>
        <div className="card">
          <h3>Misión</h3>
          <p>{about.mission}</p>
        </div>
        <div className="card">
          <h3>Visión</h3>
          <p>{about.vision}</p>
        </div>
        <div className="card">
          <h3>Valores</h3>
          <ul className="list">
            {about.values.map(([k,v])=>(
              <li key={k}><strong>{k}:</strong> {v}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="team">
        {about.team.map(m=>(
          <article key={m.name} className="team-card">
            <div className="avatar" style={{backgroundImage:`url(${m.img})`}} />
            <div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
