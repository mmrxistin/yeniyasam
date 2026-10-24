// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

// Tek haber sayfası — kaynak yapıdaki haber.php karşılığı.
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchOverlay from '@/components/SearchOverlay';

export const metadata = {
  title: 'Haber Detay — Yeni Yaşam Gazetesi',
};

export default function HaberDetayPage() {
  return (
    <>
      <Header />
      <main className="site-main container">
        <h1 className="section-title">Haber Detay</h1>
        <p className="page-placeholder">Tek haber sayfası — kaynak yapıdaki haber.php karşılığı.</p>
        <p className="page-placeholder">
          <a href="/">← Ana sayfaya dön</a>
        </p>
      </main>
      <Footer />
      <SearchOverlay />
    </>
  );
}
