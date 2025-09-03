import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  metadataBase: new URL('https://econova-clean.vercel.app'), // ajusta si usas otro dominio
  title: 'ECONOVA — Sostenibilidad que protege vidas y crea valor',
  description: 'ISO 14001 / 45001 · GRI · ODS · Radar4 para priorizar acciones por impacto.',
  openGraph: {
    title: 'ECONOVA',
    description: 'Sostenibilidad que protege vidas y crea valor medible.',
    url: 'https://econova-clean.vercel.app',
    type: 'website',
    images: ['/og.jpg'],
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
