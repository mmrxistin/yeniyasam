// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah
// La îlahe îll Allah û vahdehû lâ şerîke leh, lehul-mülku ve lehul-hamdü.
//  ve hüve alâ külli şey’in kadîr.
// Allah û Ekber Ve Lîllahîl Hamd.
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchOverlay from '@/components/SearchOverlay';
import MainContent from '@/components/MainContent';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="site-main container">
        <MainContent />
      </main>
      <Footer />
      <SearchOverlay />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
