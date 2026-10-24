// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

// Tam ekran arama katmanı — 'use client' gerektiren DOM davranışını main.js yönetir.
export default function SearchOverlay() {
  return (
    <>
    <div className="search-overlay" id="searchOverlay" aria-hidden="true">
      <button className="search-close-btn" id="searchCloseBtn" aria-label="Aramayı kapat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
      </button>
      <form className="search-overlay-form" action="/arama" method="get">
        <label htmlFor="searchInput" className="search-overlay-label">SİTEDE ARA</label>
        <div className="search-overlay-input-wrap">
          <input type="text" id="searchInput" name="q" placeholder="Haber, yazar veya konu..." autoComplete="off" />
          <button type="submit" aria-label="Ara"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
        </div>
        <div className="search-overlay-hints"><span>Popüler:</span><a href="/arama?q=dünya">Dünya</a><a href="/arama?q=kadın">Kadın</a><a href="/arama?q=ekoloji">Ekoloji</a><a href="/arama?q=ekonomi">Ekonomi</a></div>
      </form>
    </div>
    </>
  )
}
