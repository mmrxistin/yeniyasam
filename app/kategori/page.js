// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

Kategori arşivi — kaynak yapıdaki kategori.php karşılığı.
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchOverlay from '@/components/SearchOverlay';

export const metadata = {
  title: 'Kategori — Yeni Yaşam Gazetesi',
};

export default function KategoriPage() {
  return (
    <>
      <Header />
      <main className="site-main container">
        <h1 className="section-title">Kategori</h1>
        <p className="page-placeholder">Kategori arşivi — kaynak yapıdaki kategori.php karşılığı.</p>
        <p className="page-placeholder">
          <a href="/">← Ana sayfaya dön</a>
        </p>
      </main>
      <Footer />
      <SearchOverlay />
    </>
  );
}
