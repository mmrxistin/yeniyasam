// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber Ve Lillahil Hamd

// El Hamdu Lîllah ya Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn
// La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehu'l-hamdu.
// Yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir

import React from 'react'
import MansetSlider from './components/mmanset'
import MmSlider from './components/mmslider'
import MmVideoGallery from './components/mmvideos'
import MmPhotoGallery from './components/mmfoto'
import MmAuthorGrid from './components/mmyazarliste'
import MmJinDergi from './components/mmjin'

/* GÜNÜN YAZARLARI — hedef tasarımdaki köşe yazısı kartları */
const gununYazarlari = [
  { name: 'NURCAN BAYSAL', title: 'Bölgede sivil toplumun hafızası ve dayanışma ağları üzerine', href: '/malper/mmmmm' },
  { name: 'HASAN ÖZGÜR TOP', title: 'Kamera, bellek ve gerçeğin belgelenmesi: Yeni yönelimler', href: '/malper/mmmmm' },
  { name: 'FIRAT YÜCEL', title: 'Sinemada ortak üretim modelleri ve bağımsız sinemanın geleceği', href: '/malper/mmmmm' },
  { name: 'AHMET KAYA', title: 'Kürtçe edebiyatta modern akımlar ve yeni arayışlar', href: '/malper/mmmmm' },
  { name: 'ZEHRA DOĞAN', title: 'Sanatın ezber bozan gücü ve renklerin direnişi üzerine', href: '/malper/mmmmm' },
]

/* MEDYA ŞERİDİ — YENİ YAŞAM MEDYA videoları */
const medyaVideolari = [
  { title: 'Pervin Buldan ve heyetten Barış Anneleri\'ne anlamlı ziyaret', cat: 'POLİTİKA', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/mrd-29-08-26-nisebin-taziye-ucuncu-gun23-750x375.jpg', href: '/malper/car' },
  { title: 'Munzur Vadisi\'nde HES projelerine karşı adım', cat: 'EKOLOJİ', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/690x390cc-mrk-28-08-2028-turk-sihasi-yunanitan-havaalanina-girdi-360x180.jpg', href: '/malper/xane' },
  { title: 'Ortadoğu\'da yeni dengeler ve cepheleşmeler', cat: 'DÜNYA', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/823x463cc-amd-29-08-26-gulistan-doku-dosya-yeni-gelisme-350x250.jpeg', href: '/malper/se' },
  { title: 'Enflasyon sarmalında dar gelirlinin yaşam mücadelesi', cat: 'EKONOMİ', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/amd-29-08-2026-3genc-tahliye-350x250.jpeg', href: '/malper/dirok' },
  { title: 'Uluslararası Belgesel Film Festivali kapılarını açıyor', cat: 'KÜLTÜR', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/mrd-29-08-26-nisebin-taziye-ucuncu-gun23-750x375.jpg', href: '/malper/dirok' },
  { title: 'Kent bostanları yaygınlaşıyor: Yerel üretim alternatifleri', cat: 'YAŞAM', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/690x390cc-mrk-28-08-2028-turk-sihasi-yunanitan-havaalanina-girdi-360x180.jpg', href: '/malper/xane' },
]

/* KATEGORİ BLOKLARI — hedef tasarımdaki haber sütunları */
const kategoriler = [
  {
    cat: 'DÜNYA', href: '/malper/se',
    lead: { title: 'Yerel Yönetimlerde Katılımcı Demokrasi Deneyimleri', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/823x463cc-amd-29-08-26-gulistan-doku-dosya-yeni-gelisme-350x250.jpeg' },
    items: ['Kent uzlaşıları ve yerel meclislerin karar alma mekanizmalarındaki yeri', 'Ekoloji Mücadelesi ve Yerel Direnişler', 'Hak Temelli Haberciliğin Güncel Sorunları'],
  },
  {
    cat: 'KADIN', href: '/malper/rojname',
    lead: { title: 'Deprem Bölgesinde Toplumsal Yaşam ve Dayanışma', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/amd-29-08-2026-3genc-tahliye-350x250.jpeg' },
    items: ['Afet sonrası kurulan yaşam alanlarında dayanışma ağları', 'Anadilde Eğitim ve Çok Dilli Yaşam Üzerine', 'Dijital Yayıncılıkta Yeni Alternatif Modeller'],
  },
  {
    cat: 'EKOLOJİ', href: '/malper/xane',
    lead: { title: 'Ekoloji Mücadelesi ve Yerel Direnişler', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/690x390cc-mrk-28-08-2028-turk-sihasi-yunanitan-havaalanina-girdi-360x180.jpg' },
    items: ['Doğal yaşam alanlarını koruma ekseninde gelişen hareketler', 'Kaz Dağları\'nda su kaynakları tehdit altında', 'Gîyadin\'de siyanür süreci başladı!'],
  },
  {
    cat: 'FORUM', href: '/malper/account',
    lead: { title: 'Dün erken, yarın geç, şimdi zamanıdır!', img: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/mrd-29-08-26-nisebin-taziye-ucuncu-gun23-750x375.jpg' },
    items: ['Demokratik toplumun inşa hamlesi: risk ve fırsat', 'Özgürlük neden önce ilişkilerde başlar?', '\'Çaylak Filozof\' okuyucuyla buluştu'],
  },
]

/* EDİTÖRÜN SEÇTİKLERİ — zaman etiketli liste */
const secilenler = [
  { cat: 'POLİTİKA', title: 'Pervin Buldan ve heyetten Barış Anneleri\'ne anlamlı ziyaret', time: '4 SAAT ÖNCE', href: '/malper/car' },
  { cat: 'GUNDEM', title: 'İHD\'den hak ihlalleri raporu: Adalet çağrısı yinelendi', time: '3 SAAT ÖNCE', href: '/malper/yek' },
  { cat: 'YEREL', title: 'Diyarbakır\'da kültür-sanat sezonu açılıyor', time: '5 SAAT ÖNCE', href: '/malper/xane' },
  { cat: 'EKONOMİ', title: 'Tarım üreticilerinden artan girdi maliyetlerine tepki', time: '6 SAAT ÖNCE', href: '/malper/dirok' },
  { cat: 'EKOLOJİ', title: 'Kaz Dağları\'nda su kaynakları tehdit altında', time: '8 SAAT ÖNCE', href: '/malper/penc' },
]

function page() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100">
      {/* ÜST SLIDER — Son Dakika */}
      <MmSlider />

      {/* LEAD — Büyük manşet + Günün Manşetleri */}
      <section className="yy-section">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <MansetSlider />
          </div>

          <div className="lg:col-span-4">
            <div className="yy-section-head">
              <h2 className="yy-section-title">GÜNÜN MANŞETLERİ</h2>
              <a href="/malper/yek" className="yy-section-all">TÜMÜ ❯</a>
            </div>
            <ul className="m-0 list-none divide-y divide-zinc-200 dark:divide-zinc-800 p-0">
              {[
                { cat: 'EKOLOJİ', t: "Gîyadin'de siyanür süreci başladı!", h: '/malper/penc' },
                { cat: 'GÜNDEM', t: 'Uyuşturucuya karşı çıktığı için tutuklanan 3 genç tahliye edildi', h: '/malper/car' },
                { cat: 'DÜNYA', t: "Türkiye İHA'sı Yunanistan havaalanına girdi", h: '/malper/se' },
                { cat: 'GÜNCEL', t: "Gülistan Doku'nun kaybolduğu saatlerde telefon görüşmesi ortaya çıktı", h: '/malper/dirok' },
              ].map((n) => (
                <li key={n.h}>
                  <a href={n.h} className="group block py-3.5 no-underline">
                    <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#d90000]">{n.cat}</span>
                    <h3 className="mt-1 text-sm font-bold leading-snug text-zinc-900 dark:text-zinc-100 group-hover:text-[#d90000]">
                      {n.t}
                    </h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GÜNÜN YAZARLARI */}
      <section className="yy-section">
        <div className="yy-section-head">
          <h2 className="yy-section-title">GÜNÜN YAZARLARI</h2>
          <a href="/malper/mmmmm" className="yy-section-all">❯</a>
        </div>
        <div className="yy-yazarlar-grid">
          {gununYazarlari.map((y) => (
            <a key={y.name} href={y.href} className="yy-yazar-card">
              <span className="yy-yazar-name">{y.name}</span>
              <h3 className="yy-yazar-title">{y.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* YENİ YAŞAM MEDYA — video şeridi */}
      <section className="yy-section">
        <div className="yy-section-head">
          <h2 className="yy-section-title">YENİ YAŞAM MEDYA</h2>
          <a href="/malper/yek" className="yy-section-all">TÜMÜ ❯</a>
        </div>
        <div className="yy-video-grid">
          {medyaVideolari.map((v) => (
            <a key={v.title} href={v.href} className="group block no-underline">
              <div className="yy-video-card">
                <img src={v.img} alt={v.title} loading="lazy" />
                <div className="yy-video-play">
                  <span>
                    <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </div>
                <span className="yy-video-cat">▶ {v.cat}</span>
              </div>
              <h3 className="yy-video-title">{v.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* FOTO GALERİ */}
      <MmPhotoGallery />

      {/* KATEGORİ BLOKLARI */}
      <section className="yy-section">
        <div className="yy-cat-grid">
          {kategoriler.map((k) => (
            <div key={k.cat}>
              <div className="yy-cat-col-head">
                <span>{k.cat}</span>
                <a href={k.href} className="yy-section-all" style={{ marginLeft: 'auto' }}>❯</a>
              </div>
              <a href={k.href} className="yy-cat-lead group">
                <img src={k.lead.img} alt={k.lead.title} className="yy-cat-lead-img" loading="lazy" />
                <h3 className="yy-cat-lead-title">{k.lead.title}</h3>
              </a>
              <div>
                {k.items.map((t) => (
                  <a key={t} href={k.href} className="yy-cat-item">
                    <span className="yy-cat-item-dot">●</span>
                    <span className="yy-cat-item-txt">{t}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDİTÖRÜN SEÇTİKLERİ — zaman etiketli liste */}
      <section className="yy-section">
        <div className="yy-section-head">
          <h2 className="yy-section-title">EDİTÖRÜN SEÇTİKLERİ</h2>
          <a href="/malper/yek" className="yy-section-all">TÜMÜ ❯</a>
        </div>
        <ul className="m-0 list-none divide-y divide-zinc-200 dark:divide-zinc-800 p-0">
          {secilenler.map((s) => (
            <li key={s.title}>
              <a href={s.href} className="group flex items-baseline gap-3 py-3.5 no-underline">
                <span className="w-20 shrink-0 text-[10px] font-black uppercase tracking-[0.14em] text-[#d90000]">{s.cat}</span>
                <span className="flex-1 text-sm font-bold leading-snug text-zinc-900 dark:text-zinc-100 group-hover:text-[#d90000]">{s.title}</span>
                <span className="shrink-0 text-[10px] font-bold text-zinc-400">{s.time}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* VİDEO GALERİ */}
      <MmVideoGallery />

      {/* JİN DERGİ — tam bölüm */}
      <MmJinDergi />

      {/* YAZARLAR GRID */}
      <MmAuthorGrid />

      {/* FOOTER AYIRICI */}
      <div className="yy-red-line" />
        </main>
      )
    }

    export default page
