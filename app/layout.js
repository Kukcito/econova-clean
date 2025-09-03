// app/layout.js
import './globals.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://econova-clean.vercel.app'),
  title: { default: 'ECONOVA', template: '%s — ECONOVA' },
  description:
    'ISO 14001 / ISO 45001 · Informes GRI · ODS · Radar4 para decisiones basadas en datos.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'ECONOVA',
    description:
      'Sostenibilidad que protege vidas, fortalece instituciones y crea valor medible.',
    url: 'https://econova-clean.vercel.app',
    siteName: 'ECONOVA',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'ECONOVA' }],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {/* 👇 esto deja hueco bajo el header sticky */}
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
