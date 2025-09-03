import './globals.css'
import OnView from './components/OnView'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'ECONOVA — Sostenibilidad que crea valor',
  description: 'ISO 14001 / ISO 45001 · GRI · ODS · Radar4',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'ECONOVA',
    description: 'Sostenibilidad que protege vidas y crea valor.',
    url: 'https://econova-site.vercel.app',
    type: 'website',
    images: ['/og.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Header Fijo */}
        <Navbar />

        {/* Compensa altura de header */}
        <main className="page">{children}</main>

        <Footer />

        {/* Activa animaciones reveal */}
        <OnView />
      </body>
    </html>
  )
}
