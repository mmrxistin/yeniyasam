// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

// Sitenin üst kısmı: normal başlık, ana menü, kompakt başlık ve mobil menü.
export default function Header() {
  return (
    <>
    <header className="site-header" id="siteHeader">
      <div className="header-normal">
        <div className="header-top container">
          <div className="header-left-info">
            <button className="dark-mode-toggle" aria-label="Gece/Gündüz Modunu Değiştir">
              <svg className="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              <span className="switch-track"><span className="switch-thumb"></span></span>
              <svg className="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>
          </div>
          <button className="mobile-menu-toggle" aria-label="Menüyü Aç">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="7" x2="12" y2="7" /><line x1="2" y1="13" x2="9" y2="13" /><line x1="2" y1="19" x2="12" y2="19" />
              <circle cx="18" cy="14" r="5" /><line x1="21.5" y1="17.5" x2="24" y2="20" />
            </svg>
          </button>
          <a href="/" className="header-logo-mobile"><img src="/assets/img/yy-logo.png" alt="Yeni Yaşam" /></a>
          <div className="header-right-actions">
            <button className="header-search-btn" id="headerSearchBtn" aria-label="Sitede ara" aria-expanded="false">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <div className="header-social-icons">
              <a href="#" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
              <a href="#" aria-label="X"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
              <a href="#" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
              <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a>
              <a href="#" aria-label="Bluesky"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" /></svg></a>
            </div>
            <a href="#" className="btn-login">Giriş Yap</a>
          </div>
        </div>
      </div>

      <nav className="main-nav" id="mainNav">
        <button className="menu-close-btn" aria-label="Menüyü Kapat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
        </button>
        <div className="container main-nav-container">
          <div className="mobile-auth-buttons"><a href="#" className="btn-subscribe">Abone Ol</a><a href="#" className="btn-login">Giriş Yap</a></div>
          <form className="mobile-menu-search" action="/arama" method="get" role="search">
    	  <div className="mobile-search-box">
    		<input type="text" name="q" placeholder="Sitede ara..." aria-label="Sitede ara" autoComplete="off" />
    		<button type="submit" aria-label="Ara">
    		  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    			<circle cx="11" cy="11" r="8"></circle>
    			<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    		  </svg>
    		</button>
    	  </div>
    </form>
          <ul className="mobile-nav-list">
            <li><a href="/">Tüm Haberler</a></li>
            <li><a href="#">Güncel</a></li>
            <li><a href="/yazarlar">Yazarlar</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Dünya</a></li>
            <li><a href="/kategori">Kadın</a></li>
            <li><a href="#">Ekoloji</a></li>
            <li><a href="#">Söyleşi</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Dosya</a></li>
            <li><a href="#">Günün Fotosu</a></li>
            <li><a href="#">Politika</a></li>
            <li><a href="#">Kültür-Sanat</a></li>
            <li><a href="#">Emek-Ekonomi</a></li>
            <li><a href="#">Toplum-Yaşam</a></li>
            <li><a href="#">Editörün Seçtikleri</a></li>
            <li><a href="#">Spor</a></li>
          </ul>
          <div className="nav-group nav-group-left">
            <ul className="nav-list">
              <li><a href="#">Dünya</a></li>
              <li className="dot">•</li>
              <li><a href="/kategori">Kadın</a></li>
              <li className="dot">•</li>
              <li><a href="#">Ekoloji</a></li>
            </ul>
          </div>
          <div className="logo-area"><a href="/" className="site-logo-link"><img src="/assets/img/yy-logo.png" alt="Yeni Yaşam Logo" className="site-logo-img" /></a></div>
          <div className="nav-group nav-group-right">
            <ul className="nav-list">
              <li><a href="#">Politika</a></li>
              <li className="dot">•</li>
              <li><a href="#">Ekonomi</a></li>
              <li className="dot">•</li>
              <li><a href="#">Kültür</a></li>
            </ul>
          </div>
          <div className="mobile-menu-social">
            <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
            <a href="#" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
            <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a>
            <a href="#" aria-label="Bluesky"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" /></svg></a>
          </div>
        </div>
      </nav>

      <div className="header-compact">
        <div className="container header-compact-inner">
          <div className="compact-left">
            <button className="dark-mode-toggle" aria-label="Gece/Gündüz Modunu Değiştir">
              <svg className="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              <span className="switch-track"><span className="switch-thumb"></span></span>
              <svg className="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>
          </div>
          <a href="/" className="compact-logo"><img src="/assets/img/yy-logo.png" alt="Yeni Yaşam" /></a>
          <div className="compact-right">
            <button className="compact-toggle" aria-label="Menüyü Aç">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="7" x2="12" y2="7" /><line x1="2" y1="13" x2="9" y2="13" /><line x1="2" y1="19" x2="12" y2="19" />
                <circle cx="18" cy="14" r="5" /><line x1="21.5" y1="17.5" x2="24" y2="20" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
