// app/page.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 👇 de momento, SOLO Navbar y Footer.
// Lo demás lo iremos reactivando poco a poco.
export default function Page() {
  return (
    <main>
      <Navbar />
      <Footer />
    </main>
  );
}
