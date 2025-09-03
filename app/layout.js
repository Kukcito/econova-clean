// app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'ECONOVA — Sostenibilidad y Seguridad',
  description:
    'ISO 14001 / ISO 45001, informes GRI y Radar4. Protegemos vidas, fortalecemos instituciones y creamos valor medible.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'ECONOVA',
    description:
      'Sostenibilidad y Seguridad basadas en datos. ISO 14001 / 45001, GRI, Radar4.',
    url: 'https://econova-site.vercel.app',
    type: 'website',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
