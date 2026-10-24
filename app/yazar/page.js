// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

Tek yazar sayfası — kaynak yapıdaki yazar.php karşılığı.
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchOverlay from '@/components/SearchOverlay';

export const metadata = {
  title: 'Yazar — Yeni Yaşam Gazetesi',
};

export default function YazarPage() {
  return (
    <>
      <Header />
      <main className="site-main container">
        <h1 className="section-title">Yazar</h1>
        <p className="page-placeholder">Tek yazar sayfası — kaynak yapıdaki yazar.php karşılığı.</p>
        <p className="page-placeholder">
          <a href="/">← Ana sayfaya dön</a>
        </p>
      </main>
      <Footer />
      <SearchOverlay />
    </>
  );
}
