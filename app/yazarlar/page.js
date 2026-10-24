// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

Yazar listesi — kaynak yapıdaki yazarlar.php karşılığı.
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchOverlay from '@/components/SearchOverlay';

export const metadata = {
  title: 'Yazarlar — Yeni Yaşam Gazetesi',
};

export default function YazarlarPage() {
  return (
    <>
      <Header />
      <main className="site-main container">
        <h1 className="section-title">Yazarlar</h1>
        <p className="page-placeholder">Yazar listesi — kaynak yapıdaki yazarlar.php karşılığı.</p>
        <p className="page-placeholder">
          <a href="/">← Ana sayfaya dön</a>
        </p>
      </main>
      <Footer />
      <SearchOverlay />
    </>
  );
}
