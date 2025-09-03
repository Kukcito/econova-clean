// app/layout.js
import './globals.css'
import OnView from './components/OnView' // tu observer (ok)
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  title: 'ECONOVA — Sostenibilidad que crea valor',
  description: 'ISO 14001 / ISO 45001 · GRI · ODS · Radar4.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'ECONOVA',
    description: 'Sostenibilidad que protege vidas y crea valor.',
    images: ['/og.jpg'],
    url: 'https://econova-site.vercel.app',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable}`}>
      <body className="page">
        {/* El Navbar y Footer los montas dentro del layout global */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Observer de apariciones si lo usas */}
        <OnView />
      </body>
    </html>
  )
}

// Nota: Importa tus componentes reales
import Navbar from './components/Navbar'
import Footer from './components/Footer'
