// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

// Ana sayfa içeriği: kaynak yapının tamamı korunmuştur (manşet, video, kategoriler, footer üstü bloklar).
export default function MainContent() {
  return (
    <>


      <section className="top-triple-grid-section">
        <div className="column-left-interviews">
          <article className="op-card" data-cat="kadin">
            <div className="op-card-text">
              <div className="op-card-meta"><span className="op-card-kicker">Söyleşi</span></div>
              <h3 className="op-card-title"><a href="/haber">Bizleri birleştiren noktalara dikkat kesilmeliyiz</a></h3>
              <span className="op-card-author"><span className="op-card-dash">—</span> Nezahat Doğan</span>
            </div>
            <a href="/haber" className="op-card-thumb"><img src="/assets/photos/haber-foto12.jpeg" alt="" /></a>
          </article>
          <article className="op-card" data-cat="ekonomi">
            <div className="op-card-text">
              <div className="op-card-meta"><span className="op-card-kicker">Dosya</span></div>
              <h3 className="op-card-title"><a href="/haber">Yerel Yönetimlerde Katılımcı Demokrasi Deneyimleri</a></h3>
              <span className="op-card-author"><span className="op-card-dash">—</span> Ahmet Kaya</span>
            </div>
            <a href="/haber" className="op-card-thumb"><img src="/assets/photos/haber-foto1.jpg" alt="" /></a>
          </article>
          <article className="op-card" data-cat="ekoloji">
            <div className="op-card-text">
              <div className="op-card-meta"><span className="op-card-kicker">Forum</span></div>
              <h3 className="op-card-title"><a href="/haber">Politik alan kolektif yaratım alanıdır</a></h3>
              <span className="op-card-author"><span className="op-card-dash">—</span> Dilzar Dîlok</span>
            </div>
            <a href="/haber" className="op-card-thumb"><img src="/assets/photos/haber-foto4.jpg" alt="" /></a>
          </article>
        </div>

        <div className="column-middle-slider">
          <div className="news-slider-container">
            <div className="slider-track">
                          <div className="slide-item active" data-index="0">
                  <a href="/haber" className="slide-link">
                    <div className="slide-figure"><img src="/assets/photos/haber-foto1.jpg" alt="Manşet 1" /></div>
                    <div className="slide-text">
                      <span className="slide-cat" data-cat="dunya">Dunya</span>
                      <h2 className="slide-title">Kritik zirve: Bölgesel gelişmeler ve diplomatik temaslar masaya yatırıldı</h2>
                    </div>
                  </a>
                </div>
                          <div className="slide-item" data-index="1">
                  <a href="/haber" className="slide-link">
                    <div className="slide-figure"><img src="/assets/photos/haber-foto2.jpeg" alt="Manşet 2" /></div>
                    <div className="slide-text">
                      <span className="slide-cat" data-cat="kadin">Kadin</span>
                      <h2 className="slide-title">İntihar girişiminde bulunan Halime Çiçek yaşamını yitirdi</h2>
                    </div>
                  </a>
                </div>
                          <div className="slide-item" data-index="2">
                  <a href="/haber" className="slide-link">
                    <div className="slide-figure"><img src="/assets/photos/haber-foto3.jpg" alt="Manşet 3" /></div>
                    <div className="slide-text">
                      <span className="slide-cat" data-cat="gundem">Gundem</span>
                      <h2 className="slide-title">Yerel yönetimlerden ortak kalkınma hamlesi ve yeni projeler</h2>
                    </div>
                  </a>
                </div>
                          <div className="slide-item" data-index="3">
                  <a href="/haber" className="slide-link">
                    <div className="slide-figure"><img src="/assets/photos/haber-foto4.jpg" alt="Manşet 4" /></div>
                    <div className="slide-text">
                      <span className="slide-cat" data-cat="ekonomi">Ekonomi</span>
                      <h2 className="slide-title">Piyasalarda son durum: Enflasyon rakamları ve beklentiler</h2>
                    </div>
                  </a>
                </div>
                          <div className="slide-item" data-index="4">
                  <a href="/haber" className="slide-link">
                    <div className="slide-figure"><img src="/assets/photos/haber-foto5.jpg" alt="Manşet 5" /></div>
                    <div className="slide-text">
                      <span className="slide-cat" data-cat="kultur-sanat">Kultur-sanat</span>
                      <h2 className="slide-title">Uluslararası belgesel film festivali sinemaseverlerle buluşuyor</h2>
                    </div>
                  </a>
                </div>
                          <div className="slide-item" data-index="5">
                  <a href="/haber" className="slide-link">
                    <div className="slide-figure"><img src="/assets/photos/haber-foto9.jpg" alt="Manşet 6" /></div>
                    <div className="slide-text">
                      <span className="slide-cat" data-cat="ekoloji">Ekoloji</span>
                      <h2 className="slide-title">Westan Tarım Komünü: 3 ayda 150 aileye ulaştı</h2>
                    </div>
                  </a>
                </div>
                          <div className="slide-item" data-index="6">
                  <a href="/haber" className="slide-link">
                    <div className="slide-figure"><img src="/assets/photos/haber-foto7.jpg" alt="Manşet 7" /></div>
                    <div className="slide-text">
                      <span className="slide-cat" data-cat="teknoloji">Teknoloji</span>
                      <h2 className="slide-title">Yapay zeka düzenlemelerinde yeni dönem ve küresel etkileri</h2>
                    </div>
                  </a>
                </div>
                      </div>
            <button className="slider-btn prev-btn" aria-label="Önceki">&#10094;</button>
            <button className="slider-btn next-btn" aria-label="Sonraki">❯</button>
          </div>
          <div className="slider-numbers-pagination">
                      <button className="slide-num-btn active" data-index="0">1</button>
                      <button className="slide-num-btn" data-index="1">2</button>
                      <button className="slide-num-btn" data-index="2">3</button>
                      <button className="slide-num-btn" data-index="3">4</button>
                      <button className="slide-num-btn" data-index="4">5</button>
                      <button className="slide-num-btn" data-index="5">6</button>
                      <button className="slide-num-btn" data-index="6">7</button>
                  </div>
        </div>

        <aside className="column-right-opinions">
          <div className="col-header"><h3><a href="/yazarlar">GÜNÜN YAZARLARI <span>❯</span></a></h3></div>
          <div className="opinion-list">
                      <article className="opinion-item">
                <div className="author-avatar"><img src="/assets/photos/yazar1.jpeg" alt="Nurcan Baysal" /></div>
                <div className="opinion-content">
                  <span className="author-name">Nurcan Baysal</span>
                  <h4 className="opinion-title"><a href="/yazar">Bölgede sivil toplumun hafızası ve dayanışma ağları üzerine</a></h4>
                </div>
              </article>
                      <article className="opinion-item">
                <div className="author-avatar"><img src="/assets/photos/yazar2.webp" alt="Hasan Özgür Top" /></div>
                <div className="opinion-content">
                  <span className="author-name">Hasan Özgür Top</span>
                  <h4 className="opinion-title"><a href="/yazar">Kamera, bellek ve gerçeğin belgelenmesi: Yeni yönelimler</a></h4>
                </div>
              </article>
                      <article className="opinion-item">
                <div className="author-avatar"><img src="/assets/photos/yazar3.webp" alt="Fırat Yücel" /></div>
                <div className="opinion-content">
                  <span className="author-name">Fırat Yücel</span>
                  <h4 className="opinion-title"><a href="/yazar">Sinemada ortak üretim modelleri ve bağımsız sinemanın geleceği</a></h4>
                </div>
              </article>
                      <article className="opinion-item">
                <div className="author-avatar"><img src="/assets/photos/yazar4.webp" alt="Ahmet Kaya" /></div>
                <div className="opinion-content">
                  <span className="author-name">Ahmet Kaya</span>
                  <h4 className="opinion-title"><a href="/yazar">Kürtçe edebiyatta modern akımlar ve yeni arayışlar</a></h4>
                </div>
              </article>
                      <article className="opinion-item">
                <div className="author-avatar"><img src="/assets/photos/yazar5.jpeg" alt="Zehra Doğan" /></div>
                <div className="opinion-content">
                  <span className="author-name">Zehra Doğan</span>
                  <h4 className="opinion-title"><a href="/yazar">Sanatın ezber bozan gücü ve renklerin direnişi üzerine</a></h4>
                </div>
              </article>
                  </div>
        </aside>
      </section>

      <section className="video-carousel-section">
        <div className="container">
          <div className="section-title-bar dark">
            <a href="#"><h2>YENİ YAŞAM MEDYA</h2></a>
            <div className="carousel-nav">
              <button className="carousel-prev" aria-label="Önceki">&#10094;</button>
              <button className="carousel-next" aria-label="Sonraki">❯</button>
            </div>
          </div>
          <div className="video-carousel-track" id="videoTrack">
                      <article className="video-carousel-card">
                <a href="/haber" className="vcc-link">
                  <div className="vcc-thumb">
                    <img src="/assets/photos/haber-foto1.jpg" alt="Video" />
                    <div className="play-btn-overlay"><span>▶</span></div>
                    <span className="vcc-duration">08:42</span>
                  </div>
                  <h3 className="vcc-title">Pervin Buldan ve heyetten Barış Anneleri&#039;ne anlamlı ziyaret</h3>
                  <span className="vcc-cat">Politika</span>
                </a>
              </article>
                      <article className="video-carousel-card">
                <a href="/haber" className="vcc-link">
                  <div className="vcc-thumb">
                    <img src="/assets/photos/haber-foto9.jpg" alt="Video" />
                    <div className="play-btn-overlay"><span>▶</span></div>
                    <span className="vcc-duration">10:43</span>
                  </div>
                  <h3 className="vcc-title">Munzur Vadisi&#039;nde HES projelerine karşı adım</h3>
                  <span className="vcc-cat">Ekoloji</span>
                </a>
              </article>
                      <article className="video-carousel-card">
                <a href="/haber" className="vcc-link">
                  <div className="vcc-thumb">
                    <img src="/assets/photos/haber-foto3.jpg" alt="Video" />
                    <div className="play-btn-overlay"><span>▶</span></div>
                    <span className="vcc-duration">05:42</span>
                  </div>
                  <h3 className="vcc-title">Ortadoğu&#039;da yeni dengeler ve cepheleşmeler</h3>
                  <span className="vcc-cat">Dünya</span>
                </a>
              </article>
                      <article className="video-carousel-card">
                <a href="/haber" className="vcc-link">
                  <div className="vcc-thumb">
                    <img src="/assets/photos/haber-foto4.jpg" alt="Video" />
                    <div className="play-btn-overlay"><span>▶</span></div>
                    <span className="vcc-duration">11:47</span>
                  </div>
                  <h3 className="vcc-title">Enflasyon sarmalında dar gelirlinin yaşam mücadelesi</h3>
                  <span className="vcc-cat">Ekonomi</span>
                </a>
              </article>
                      <article className="video-carousel-card">
                <a href="/haber" className="vcc-link">
                  <div className="vcc-thumb">
                    <img src="/assets/photos/haber-foto2.jpeg" alt="Video" />
                    <div className="play-btn-overlay"><span>▶</span></div>
                    <span className="vcc-duration">11:47</span>
                  </div>
                  <h3 className="vcc-title">Meclis&#039;te yeni yasama dönemi başlarken kritik gündem</h3>
                  <span className="vcc-cat">Politika</span>
                </a>
              </article>
                      <article className="video-carousel-card">
                <a href="/haber" className="vcc-link">
                  <div className="vcc-thumb">
                    <img src="/assets/photos/haber-foto5.jpg" alt="Video" />
                    <div className="play-btn-overlay"><span>▶</span></div>
                    <span className="vcc-duration">11:47</span>
                  </div>
                  <h3 className="vcc-title">Uluslararası Belgesel Film Festivali kapılarını açıyor</h3>
                  <span className="vcc-cat">Kültür-Sanat</span>
                </a>
              </article>
                      <article className="video-carousel-card">
                <a href="/haber" className="vcc-link">
                  <div className="vcc-thumb">
                    <img src="/assets/photos/haber-foto11.jpeg" alt="Video" />
                    <div className="play-btn-overlay"><span>▶</span></div>
                    <span className="vcc-duration">11:47</span>
                  </div>
                  <h3 className="vcc-title">Kent bostanları yaygınlaşıyor: Yerel üretim alternatifleri</h3>
                  <span className="vcc-cat">Yaşam</span>
                </a>
              </article>
                      <article className="video-carousel-card">
                <a href="/haber" className="vcc-link">
                  <div className="vcc-thumb">
                    <img src="/assets/photos/haber-foto8.jpg" alt="Video" />
                    <div className="play-btn-overlay"><span>▶</span></div>
                    <span className="vcc-duration">11:47</span>
                  </div>
                  <h3 className="vcc-title">İHD&#039;den hak ihlalleri raporu: Adalet çağrısı yinelendi</h3>
                  <span className="vcc-cat">Gündem</span>
                </a>
              </article>
                  </div>
        </div>
      </section>

      <section className="daily-features-section">
        <div className="daily-features-grid">
          <article className="daily-card daily-card--manset">
            <div className="daily-card-header"><h3>GÜNÜN MANŞETİ</h3><span className="daily-arrow">❯</span></div>
            <a href="#" className="daily-card-link"><div className="daily-card-body"><img src="/assets/photos/yy.jpg" alt="Bugünün Yeni Yaşamı" /></div></a>
          </article>
          <article className="daily-card daily-card--jin">
            <div className="daily-card-header"><h3>JIN DERGİ</h3><span className="daily-arrow">❯</span></div>
            <a href="#" className="daily-card-link"><div className="daily-card-body"><img src="/assets/photos/jin.jpeg" alt="Jin Dergi" /></div></a>
          </article>
          <article className="daily-card daily-card--karikatur">
            <div className="daily-card-header"><h3>GÜNÜN KARİKATÜRÜ</h3><span className="daily-arrow">❯</span></div>
            <a href="#" className="daily-card-link"><div className="daily-card-body"><img src="/assets/photos/karikatur.jpeg" alt="Günün Karikatürü" /></div></a>
          </article>
          <article className="daily-card daily-card--abone">
            <div className="daily-card-body">
              <div className="abone-inner">
                <span className="abone-tag">DESTEK OL</span>
                <h3 className="abone-title">Yeni Yaşam'a<br />Abone Ol</h3>
                <p className="abone-desc">Bağımsız haberciliğe güç kat.</p>
                <a href="#" className="abone-cta"><span>Abone Ol</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="custom-news-sections">
              <div className="news-block-row">
            <div className="category-col"><h3 className="category-title" data-cat="dunya">DÜNYA</h3></div>
            <div className="news-items-grid">
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto6.webp" alt="Haber" /></a>
                  <h4><a href="/haber">Yerel Yönetimlerde Katılımcı Demokrasi Deneyimleri</a></h4>
                  <p>Kent uzlaşıları ve yerel meclislerin karar alma mekanizmalarındaki yeri...</p>
                  <span className="news-date">25 Eylül 2026</span>
                </article>
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto4.jpg" alt="Haber" /></a>
                  <h4><a href="/haber">Ekoloji Mücadelesi ve Yerel Direnişler</a></h4>
                  <p>Doğal yaşam alanlarını koruma ekseninde gelişen sivil toplum hareketleri...</p>
                  <span className="news-date">24 Eylül 2026</span>
                </article>
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto5.jpg" alt="Haber" /></a>
                  <h4><a href="/haber">Hak Temelli Haberciliğin Güncel Sorunları</a></h4>
                  <p>Dijital çağda bağımsız medyanın sürdürülebilirliği ve karşılaştığı engeller...</p>
                  <span className="news-date">23 Eylül 2026</span>
                </article>
                      </div>
          </div>
              <div className="news-block-row">
            <div className="category-col"><h3 className="category-title" data-cat="kadin">KADIN</h3></div>
            <div className="news-items-grid">
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto11.jpeg" alt="Haber" /></a>
                  <h4><a href="/haber">Deprem Bölgesinde Toplumsal Yaşam ve Dayanışma</a></h4>
                  <p>Afet sonrası kurulan yaşam alanlarında dayanışma ağlarının dönüştürücü gücü...</p>
                  <span className="news-date">25 Eylül 2026</span>
                </article>
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto6.webp" alt="Haber" /></a>
                  <h4><a href="/haber">Anadilde Eğitim ve Çok Dilli Yaşam Üzerine</a></h4>
                  <p>Kültürel haklar bağlamında anadilin kamusal alandaki görünürlüğü...</p>
                  <span className="news-date">24 Eylül 2026</span>
                </article>
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto9.jpg" alt="Haber" /></a>
                  <h4><a href="/haber">Dijital Yayıncılıkta Yeni Alternatif Modeller</a></h4>
                  <p>Geleneksel medyanın dışında kalan alanlarda üretilen özgün içerikler...</p>
                  <span className="news-date">23 Eylül 2026</span>
                </article>
                      </div>
          </div>
              <div className="news-block-row">
            <div className="category-col"><h3 className="category-title" data-cat="cevre">EKOLOJİ</h3></div>
            <div className="news-items-grid">
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto11.jpeg" alt="Haber" /></a>
                  <h4><a href="/haber">Deprem Bölgesinde Toplumsal Yaşam ve Dayanışma</a></h4>
                  <p>Afet sonrası kurulan yaşam alanlarında dayanışma ağlarının dönüştürücü gücü...</p>
                  <span className="news-date">25 Eylül 2026</span>
                </article>
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto6.webp" alt="Haber" /></a>
                  <h4><a href="/haber">Anadilde Eğitim ve Çok Dilli Yaşam Üzerine</a></h4>
                  <p>Kültürel haklar bağlamında anadilin kamusal alandaki görünürlüğü...</p>
                  <span className="news-date">24 Eylül 2026</span>
                </article>
                          <article className="news-card">
                  <a href="/haber" className="news-card-img"><img src="/assets/photos/haber-foto9.jpg" alt="Haber" /></a>
                  <h4><a href="/haber">Dijital Yayıncılıkta Yeni Alternatif Modeller</a></h4>
                  <p>Geleneksel medyanın dışında kalan alanlarda üretilen özgün içerikler...</p>
                  <span className="news-date">23 Eylül 2026</span>
                </article>
                      </div>
          </div>
    
        <div className="news-block-row">
          <div className="category-col"><h3 className="category-title" data-cat="forum">FORUM</h3></div>
          <div className="features-layout-grid">
            <div className="feature-main-card">
              <a href="/haber" className="feature-img-link"><img src="/assets/photos/haber-foto8.jpg" alt="Manşet Görseli" /></a>
              <div className="feature-content">
                <h3 className="feature-title"><a href="/haber">Dün erken, yarın geç, şimdi zamanıdır!</a></h3>
                <p className="feature-excerpt">Demokratik toplumun/ulusun inşa hamlesi risk ve fırsatı iç içe barındırıyor. Bu sefer rolümüzü layıkıyla oynamak için hem riski hem fırsatı...</p>
                <span className="feature-author">Ergin Atabey</span>
              </div>
            </div>
            <div className="feature-side-list">
              <div className="feature-side-card">
                <a href="/haber" className="side-img-link"><img src="/assets/photos/haber-foto12.jpeg" alt="Yan 1" /></a>
                <div className="side-content">
                  <h4 className="side-title"><a href="/haber">Özgürlük neden önce ilişkilerde başlar?</a></h4>
                  <span className="side-author">Nimet Sevim</span>
                </div>
              </div>
              <div className="feature-side-card">
                <a href="/haber" className="side-img-link"><img src="/assets/photos/haber-foto13.jpg" alt="Yan 2" /></a>
                <div className="side-content">
                  <h4 className="side-title"><a href="/haber">'Çaylak Filozof' okuyucuyla buluştu</a></h4>
                  <span className="side-author">Ayhan Kavak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="daily-photo-section">
        <div className="container">
          <div className="daily-photo-header"><h2>GÜNÜN FOTOSU</h2><span className="daily-arrow">❯</span></div>
          <div className="daily-photo-grid">
            <a href="#" className="daily-photo-img-wrap"><img src="/assets/photos/3556.jpg" alt="Günün Fotosu" /></a>
            <div className="daily-photo-caption">
              <span className="caption-tag">FOTOĞRAFIN HİKAYESİ</span>
              <h3 className="caption-title">Kuzey Suriye'de gerginlik sürüyor</h3>
              <p className="caption-desc">Bölgede devam eden çatışmalar sivil halkı zorluyor. Yerel kaynaklara göre son 24 saatte onlarca aile yerinden edildi.</p>
              <span className="caption-meta">Fotoğraf: Yeni Yaşam Arşivi · 04.10.2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="multi-column-news-section">
        <div className="news-four-columns">
                  <div className="news-col">
              <div className="col-header"><h3><a href="/kategori">Politika <span>❯</span></a></h3></div>
              <article className="col-featured">
                <a href="/haber" className="col-featured-img-link"><div className="col-featured-img"><img src="/assets/photos/haber-foto2.jpeg" alt="Haber" /></div></a>
                <h4><a href="/haber">Meclis'te yeni yasama döneminde kritik gündemler</a></h4>
                <p>Yeni dönemin ilk haftasında yerel yönetimler ve anayasa tartışmaları öncelikli başlıklar arasında yer alıyor.</p>
              </article>
              <div className="col-sub-list">
                              <article className="sub-news-item"><h4><a href="/haber">İmamoğlu davasında istinaf kararının siyasi yankıları sürüyor</a></h4></article>
                              <article className="sub-news-item"><h4><a href="/haber">Muhalefet partilerinden ortak asgari ücret ve geçim zirvesi</a></h4></article>
                              <article className="sub-news-item"><h4><a href="/haber">Yerel seçim ittifakları için kulisler hareketleniyor</a></h4></article>
                          </div>
            </div>
                  <div className="news-col">
              <div className="col-header"><h3><a href="/kategori">Kültür-Sanat <span>❯</span></a></h3></div>
              <article className="col-featured">
                <a href="/haber" className="col-featured-img-link"><div className="col-featured-img"><img src="/assets/photos/haber-foto3.jpg" alt="Haber" /></div></a>
                <h4><a href="/haber">Ortadoğu'da diplomatik trafik hızlandı: Yeni zirve bekleniyor</a></h4>
                <p>Bölgesel aktörler arasında artan gerilimi düşürmek için arabuluculuk girişimleri yoğunlaştı.</p>
              </article>
              <div className="col-sub-list">
                              <article className="sub-news-item"><h4><a href="/haber">Avrupa'da aşırı sağın yükselişi parlamentoları nasıl etkiliyor?</a></h4></article>
                              <article className="sub-news-item"><h4><a href="/haber">Latin Amerika'da sol hükümetlerden yeni entegrasyon hamlesi</a></h4></article>
                              <article className="sub-news-item"><h4><a href="/haber">İklim krizinde yeni dönemeç: Zirveden ortak karar çıktı mı?</a></h4></article>
                          </div>
            </div>
                  <div className="news-col">
              <div className="col-header"><h3><a href="/kategori">Emek-Ekonomi <span>❯</span></a></h3></div>
              <article className="col-featured">
                <a href="/haber" className="col-featured-img-link"><div className="col-featured-img"><img src="/assets/photos/haber-foto4.jpg" alt="Haber" /></div></a>
                <h4><a href="/haber">Enflasyon verileri sonrası piyasalarda son durum ne?</a></h4>
                <p>Merkez Bankası'nın yıl sonu tahminleri ve döviz kurlarındaki hareketlilik yatırımcıların gözünü bu haftaya çevirdi.</p>
              </article>
              <div className="col-sub-list">
                              <article className="sub-news-item"><h4><a href="/haber">KOBİ'ler için yeni kredi destek paketleri açıklandı</a></h4></article>
                              <article className="sub-news-item"><h4><a href="/haber">Enerji maliyetleri sanayi üretimini nasıl baskılıyor?</a></h4></article>
                              <article className="sub-news-item"><h4><a href="/haber">Asgari ücret görüşmeleri takvimi netleşiyor</a></h4></article>
                          </div>
            </div>
                  <div className="news-col">
              <div className="col-header"><h3><a href="/kategori">Toplum-Yaşam <span>❯</span></a></h3></div>
              <article className="col-featured">
                <a href="/haber" className="col-featured-img-link"><div className="col-featured-img"><img src="/assets/photos/haber-foto5.jpg" alt="Haber" /></div></a>
                <h4><a href="/haber">Uluslararası Belgesel Film Festivali kapılarını açıyor</a></h4>
                <p>Dünyanın dört bir yanından bağımsız yapımların katıldığı festival bu yıl zengin bir seçki sunuyor.</p>
              </article>
              <div className="col-sub-list">
                              <article className="sub-news-item"><h4><a href="/haber">Kürt edebiyatında son dönem çeviri eserlerin yükselişi</a></h4></article>
                              <article className="sub-news-item"><h4><a href="/haber">İstanbul'un tarihi mekanlarında sergilenen modern sanat projeleri</a></h4></article>
                              <article className="sub-news-item"><h4><a href="/haber">Bağımsız tiyatroların yeni sezon sahnede karşılaştığı zorluklar</a></h4></article>
                          </div>
            </div>
              </div>
      </section>

      <section className="editor-picks-section">
        <div className="container">
          <div className="editor-picks-header">
            <div className="editor-picks-title-wrap"><h2 className="editor-picks-title">EDİTÖRÜN SEÇTİKLERİ</h2></div>
            <a href="#" className="editor-picks-more">Tümü
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
          <div className="editor-picks-grid">
            <article className="editor-picks-hero">
              <a href="/haber" className="editor-picks-hero-img"><img src="/assets/photos/haber-foto5.jpg" alt="Manşet" /></a>
              <div className="editor-picks-hero-body">
                <span className="editor-picks-cat" data-cat="politika">Politika</span>
                <h3 className="editor-picks-hero-title"><a href="/haber">Pervin Buldan ve heyetten Barış Anneleri'ne anlamlı ziyaret</a></h3>
                <p className="editor-picks-hero-excerpt">Ziyaret sırasında tecridin kaldırılması ve barış mücadelesinin ortaklaştırılması gerektiği vurgulandı.</p>
                <span className="editor-picks-meta">4 saat önce · 5 dk okuma</span>
              </div>
            </article>
            <div className="editor-picks-list">
                          <article className="editor-picks-item">
                  <div className="editor-picks-item-body">
                    <span className="editor-picks-cat" data-cat="gundem">Gundem</span>
                    <h4 className="editor-picks-item-title"><a href="/haber">İHD'den hak ihlalleri raporu: Adalet çağrısı yinelendi</a></h4>
                    <span className="editor-picks-meta">3 saat önce</span>
                  </div>
                </article>
                          <article className="editor-picks-item">
                  <div className="editor-picks-item-body">
                    <span className="editor-picks-cat" data-cat="yerel">Yerel</span>
                    <h4 className="editor-picks-item-title"><a href="/haber">Diyarbakır'da kültür-sanat sezonu açılıyor</a></h4>
                    <span className="editor-picks-meta">5 saat önce</span>
                  </div>
                </article>
                          <article className="editor-picks-item">
                  <div className="editor-picks-item-body">
                    <span className="editor-picks-cat" data-cat="ekonomi">Ekonomi</span>
                    <h4 className="editor-picks-item-title"><a href="/haber">Tarım üreticilerinden artan girdi maliyetlerine tepki</a></h4>
                    <span className="editor-picks-meta">6 saat önce</span>
                  </div>
                </article>
                          <article className="editor-picks-item">
                  <div className="editor-picks-item-body">
                    <span className="editor-picks-cat" data-cat="ekoloji">Ekoloji</span>
                    <h4 className="editor-picks-item-title"><a href="/haber">Kaz Dağları'nda su kaynakları tehdit altında</a></h4>
                    <span className="editor-picks-meta">8 saat önce</span>
                  </div>
                </article>
                      </div>
          </div>
        </div>
      </section>

      <section className="news-block block-ecology">
        <div className="col-header"><h3><a href="#">Söyleşi <span>❯</span></a></h3></div>
        <div className="ecology-grid-3col">
          <article className="eco-card">
            <a href="/haber" className="eco-card-img"><img src="/assets/photos/haber-foto9.jpg" alt="Eko 1" /></a>
            <span className="card-cat" data-cat="ekoloji">Ekoloji</span>
            <h3><a href="/haber">Munzur Vadisi'nde HES projelerine karşı yeni hukuki adım</a></h3>
          </article>
          <article className="eco-card">
            <a href="/haber" className="eco-card-img"><img src="/assets/photos/haber-foto10.webp" alt="Eko 2" /></a>
            <span className="card-cat" data-cat="dunya">Dünya</span>
            <h3><a href="/haber">Kaz Dağları'nda su kaynakları tehdit altında: Rapor açıklandı</a></h3>
          </article>
          <article className="eco-card">
            <a href="/haber" className="eco-card-img"><img src="/assets/photos/haber-foto11.jpeg" alt="Eko 3" /></a>
            <span className="card-cat" data-cat="yasam">Yaşam</span>
            <h3><a href="/haber">Kent bostanları yaygınlaşıyor: Yerel üretim alternatifleri</a></h3>
          </article>
        </div>
      </section>

      <section className="news-block block-horizontal">
        <div className="col-header"><h3><a href="#">Güncel Analiz ve Dosyalar <span>❯</span></a></h3></div>
        <div className="horizontal-strip-list">
          <article className="strip-card">
            <a href="/haber" className="strip-card-img"><img src="/assets/photos/haber-foto12.jpeg" alt="Analiz 1" /></a>
            <div className="strip-content">
              <span className="card-cat" data-cat="dunya">Dünya</span>
              <h3><a href="/haber">Ortadoğu'da yeni dengeler ve diplomatik cepheleşmeler</a></h3>
              <p>Bölgesel aktörlerin son hamleleri küresel ölçekte nasıl yankı buluyor?</p>
            </div>
          </article>
          <article className="strip-card">
            <a href="/haber" className="strip-card-img"><img src="/assets/photos/haber-foto13.jpg" alt="Analiz 2" /></a>
            <div className="strip-content">
              <span className="card-cat" data-cat="ekonomi">Ekonomi</span>
              <h3><a href="/haber">Enflasyon sarmalında dar gelirlinin yaşam mücadelesi</a></h3>
              <p>Temel tüketim maddelerindeki artış bütçeleri eritmeye devam ediyor.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="news-block block-grid4">
        <div className="col-header"><h3><a href="#">Spor <span>❯</span></a></h3></div>
        <div className="grid-4col">
          <article className="standard-card">
            <a href="/haber" className="standard-card-img"><img src="/assets/photos/haber-foto4.jpg" alt="Kültür 1" /></a>
            <span className="card-cat" data-cat="sanat">Sanat</span>
            <h4><a href="/haber">Haftanın karikatür seçkisi yayımlandı</a></h4>
          </article>
          <article className="standard-card">
            <a href="/haber" className="standard-card-img"><img src="/assets/photos/haber-foto13.jpg" alt="Kültür 2" /></a>
            <span className="card-cat" data-cat="kadin">Kadın</span>
            <h4><a href="/haber">Kadın hareketinden ortak manifesto</a></h4>
          </article>
          <article className="standard-card">
            <a href="/haber" className="standard-card-img"><img src="/assets/photos/haber-foto6.webp" alt="Kültür 3" /></a>
            <span className="card-cat" data-cat="edebiyat">Edebiyat</span>
            <h4><a href="/haber">Yeni çıkan kitaplar ve eleştiri yazıları</a></h4>
          </article>
          <article className="standard-card">
            <a href="/haber" className="standard-card-img"><img src="/assets/photos/haber-foto5.jpg" alt="Kültür 4" /></a>
            <span className="card-cat" data-cat="sanat">Sanat</span>
            <h4><a href="/haber">Bağımsız sinema günleri başlıyor</a></h4>
          </article>
        </div>
      </section>
    </>
  )
}
