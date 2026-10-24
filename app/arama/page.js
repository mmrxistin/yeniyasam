// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

Arama sonuçları — kaynak yapıdaki arama.php karşılığı.
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchOverlay from '@/components/SearchOverlay';

export const metadata = {
  title: 'Arama — Yeni Yaşam Gazetesi',
};

export default function AramaPage() {
  return (
    <>
      <Header />
      <main className="site-main container">
        <h1 className="section-title">Arama</h1>
        <p className="page-placeholder">Arama sonuçları — kaynak yapıdaki arama.php karşılığı.</p>
        <p className="page-placeholder">
          <a href="/">← Ana sayfaya dön</a>
        </p>
      </main>
      <Footer />
      <SearchOverlay />
    </>
  );
}
