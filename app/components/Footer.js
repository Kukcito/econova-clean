export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16}}>
        <div><strong>ECONOVA</strong> · © {new Date().getFullYear()}</div>
        <div style={{color:'#9fb3c8'}}>ISO 14001 / 45001 · GRI · ODS · Radar4</div>
      </div>
    </footer>
  );
}
