import './globals.css'

// IMPORTA SOLO ESTOS DOS COMPONENTES (default export):
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// opcional: evita warning de metadataBase
export const metadata = {
  title: 'ECONOVA — Sostenibilidad & Seguridad',
  description:
    'ISO 14001 / ISO 45001 • GRI • ODS • Radar4. Sostenibilidad y Seguridad basadas en datos.',
  metadataBase: new URL('https://econova-clean.vercel.app'), // ajusta a tu dominio final
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'ECONOVA',
    description:
      'ISO 14001 / ISO 45001 • GRI • ODS • Radar4. Decisiones por impacto.',
    images: ['/og.jpg'],
    url: 'https://econova-clean.vercel.app',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* HEADER ÚNICO */}
        <Navbar />

        {/* EL CONTENIDO DE CADA RUTA */}
        <main className="page">{children}</main>

        {/* FOOTER ÚNICO */}
        <Footer />
      </body>
    </html>
  )
}
