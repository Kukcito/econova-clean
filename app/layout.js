import './globals.css'
import OnView from './components/OnView'   // 👈 importa el observador global

export const metadata = {
  title: 'ECONOVA — Sostenibilidad que crea valor',
  description: 'ISO 14001 / ISO 45001 · GRI · ODS · Radar4.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'ECONOVA',
    description: 'Sostenibilidad que protege vidas y crea valor.',
    images: ['/og.jpg'],
    url: 'https://econova-site.vercel.app',
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <OnView />      {/* 👈 ahora todas las páginas activan las animaciones */}
        {children}
      </body>
    </html>
  )
}
