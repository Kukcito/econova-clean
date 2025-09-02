export default function PageHeader({title, kicker, children, cta}){
  return (
    <header className="section hero" style={{paddingTop:60,paddingBottom:40}}>
      <div className="container" data-animate>
        {kicker && <p className="lead" style={{color:'#9fb3c8',marginBottom:8}}>{kicker}</p>}
        <h1 className="h1" style={{marginBottom:12}}>{title}</h1>
        {children && <p className="lead" style={{maxWidth:800}}>{children}</p>}
        {cta}
      </div>
    </header>
  )
}
