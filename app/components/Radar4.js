'use client';
import { useState } from 'react';

const presets = {
  actual: [0.55, 0.60, 0.48, 0.62, 0.52],
  foco90: [0.70, 0.72, 0.65, 0.75, 0.68],
  objetivo12: [0.86, 0.88, 0.84, 0.90, 0.87],
};
const axes = ['Cumplimiento','Riesgo','Cultura','Operación','Reporte'];

function polygonPath(values, r=120, cx=150, cy=150){
  const step = (Math.PI*2)/values.length;
  const pts = values.map((v,i)=>{
    const a = -Math.PI/2 + i*step;
    const x = cx + Math.cos(a) * r * v;
    const y = cy + Math.sin(a) * r * v;
    return `${x},${y}`;
  }).join(' ');
  return `M ${pts} Z`;
}

export default function Radar4(){
  const [mode, setMode] = useState('actual');
  const values = presets[mode];

  return (
    <section id="radar4" className="section container">
      <div className="radar-head">
        <h2 className="h2">Radar4</h2>
        <div className="seg">
          {[['actual','Situación actual'],['foco90','Mejora 90 días'],['objetivo12','Objetivo 12 meses']].map(([k,label])=>(
            <button key={k} onClick={()=>setMode(k)} className={`seg-btn ${mode===k?'is-active':''}`}>{label}</button>
          ))}
        </div>
      </div>

      <div className="radar-wrap">
        <svg viewBox="0 0 300 300" className="radar">
          {/* ejes */}
          {[0,1,2,3,4].map(i=>{
            const a = -Math.PI/2 + i*((Math.PI*2)/5);
            const x = 150 + Math.cos(a)*120;
            const y = 150 + Math.sin(a)*120;
            return <line key={i} x1="150" y1="150" x2={x} y2={y} className="axis"/>;
          })}
          {/* anillos */}
          {[0.25,0.5,0.75,1].map((k,i)=>(
            <circle key={i} cx="150" cy="150" r={120*k} className="ring"/>
          ))}
          {/* polígono */}
          <path d={polygonPath(values)} className="poly"/>
        </svg>
        <ul className="radar-legend">
          {axes.map((t,i)=>(<li key={i}>{t}</li>))}
        </ul>
      </div>
    </section>
  );
}
