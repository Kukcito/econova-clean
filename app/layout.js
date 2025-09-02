import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'ECONOVA — Sostenibilidad que protege vidas',
  description: 'ISO 14001 / ISO 45001 · Informes GRI · ODS · Radar4.',
  metadataBase: new URL('https://econova-clean.vercel.app'),
  openGraph: {
    title: 'ECONOVA — Sostenibilidad que protege vidas',
    description: 'Fortalece instituciones y crea valor medible.',
    url: 'https://econova-clean.vercel.app',
    siteName: 'ECONOVA',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    locale: 'es_MX',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
  icons: { icon: '/favicon.ico' }
};

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
