// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah
// La ilahe illAllahu vahdehu la sharika leh, lehu'l-mulku ve lehu'l-hamdu,
// yuhyi ve yumit
// bîyadîhîl xayr
//  ve huve ala kulli şey'in kadir
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illAllah, Allahu Ekber, Allahu Ekber ve lillahi'l-hamd
import React from "react";
import Mmmnavbar from "./components/mmnav";
import Footer from "./components/mmbingeh";
import ContactForm from "./components/mmfrm";
import MmLiveTv from "./components/mmlivetv";

// Yeni Yaşam Media YouTube kanalı
const CHANNEL_ID = "UCeHJLmZ75jsot6tzDk-BUUA";
// Kanalın son videoları oynatma listesi (uploads playlist = UU + channelId[2..])
const UPLOADS_PLAYLIST = "UUeHJLmZ75jsot6tzDk-BUUA";

// Editörün Seçtikleri — yeniyasamgazetesi9.com güncel içerik
const editorPicks = [
  { title: "Gülistan Doku'nun kaybolduğu saatlerde defalarca telefon görüşmesi ortaya çıktı", href: "/malper/yek" },
  { title: "Katledilmeden önce polise başvuran Sultan Kara'ya 'Bu ailede adam öldürecek tip yok' denildi", href: "/malper/rojname" },
  { title: "2 köyde 60 yıldır yol ve su yok: Siyasi tercihlerimizden dolayı cezalandırılıyoruz", href: "/malper/xane" },
  { title: "Amed sokaklarına şehitlerin posterleri asıldı", href: "/malper/car" },
  { title: "Avrupa'da kuraklık nehirleri kurutuyor", href: "/malper/penc" },
  { title: "Bir çağın içinden, bir barışın eşiğinde", href: "/malper/mmmmm" },
];



// El Hamdu Lîllah ya Kerîm î Rezzaq î Vehhab î Ehed î Quddus î Heq bêdawîtî..

// Günün Manşeti — yeniyasamgazetesi9.com/gunun-manseti/ sayfasından
// güncel gazete kapağı dinamik olarak çekilir.
async function getGununManseti(): Promise<{ img: string; href: string } | null> {
  try {
    const res = await fetch("https://yeniyasamgazetesi9.com/gunun-manseti/", {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; YeniYasamBot/1.0)" },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const now = new Date();
    const ym = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}`;
    const esc = ym.replace("/", "\\/");
    const re = new RegExp(
      `https://yeniyasamgazetesi9\\.com/wp-content/uploads/${esc}/[^"'\\s]+\\.(?:jpg|jpeg|png)`,
      "i"
    );
    const match = html.match(re);
    if (!match) {
      const fallback = html.match(
        /https:\/\/yeniyasamgazetesi9\.com\/wp-content\/uploads\/[^"'\s]+\.(?:jpg|jpeg|png)/i
      );
      if (!fallback) return null;
      return { img: fallback[0], href: "https://yeniyasamgazetesi9.com/gunun-manseti/" };
    }
    return { img: match[0], href: "https://yeniyasamgazetesi9.com/gunun-manseti/" };
  } catch {
    return null;
  }
}

async function getKarikatur(): Promise<{ img: string; href: string; title: string } | null> {
  try {
    const res = await fetch("https://yeniyasamgazetesi9.com/", {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; YeniYasamBot/1.0)" },
    });
    if (!res.ok) return null;

    const html = await res.text();
    const match = html.match(
      /<h3[^>]*>\s*<span>KARİKATÜR<\/span>\s*<\/h3>.*?<a[^>]*href="([^"]+)"[^>]*>\s*<img[^>]*src="([^"]+)"/is
    );

    if (!match) {
      const fallback = html.match(/https:\/\/yeniyasamgazetesi9\.com\/wp-content\/uploads\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/i);
      if (!fallback) return null;
      return {
        img: fallback[0],
        href: "https://yeniyasamgazetesi9.com/karikatur/",
        title: "Karikatür",
      };
    }

    return {
      img: match[2],
      href: match[1],
      title: "Karikatür",
    };
  } catch {
    return null;
  }
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const manset = await getGununManseti();
  const karikatur = await getKarikatur();
  const bugun = new Date().toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f5]">
      {/*
      <Alert variant="success" style={{ width: "100%", textAlign: "center" }}>
        اَشْهَدُ اَنْ لاَ اِلٰهَ اِلاَّ اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
      </Alert>
      */}
      <Mmmnavbar />

      {/* Üst kısım: Son Dakika + Yazarlar slider'ı */}
      <div className="mm-shell">

        {/* Ana ızgara: içerik solda (geniş), TV sağda (dar kolon) */}
        <div className="mm-grid-frame mx-auto w-full">

          {/* ANA İÇERİK */}
          <main className="mm-main-col p-3 sm:p-4 md:p-5">

            {children}


          </main>

          {/* TV KOLONU */}
          <aside className="mm-tv-col p-2 sm:p-3">

            <div className="mm-tv-panel">

              {/* ABC News tarzı Canlı TV */}
              <MmLiveTv />

              {/* GÜNÜN MANŞETİ — gazete kapağı */}
              <div className="mm-manset-box">
                <div className="mm-manset-head">GÜNÜN MANŞETİ</div>
                {manset ? (
                  <a
                    href={manset.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mm-manset-link"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={manset.img}
                      alt={`Günün Manşeti — ${bugun}`}
                      className="mm-manset-img"
                    />
                    <span className="mm-manset-date">{bugun}</span>
                  </a>
                ) : (
                  <div className="mm-manset-fallback">
                    Gazete kapağı şu anda yüklenemedi.
                  </div>
                )}
              </div>

              {/* Editörün Seçtikleri */}
              <div className="mm-editor-pick">
                <div className="mm-editor-head">
                  <span className="mm-editor-star">★</span>
                  EDİTÖRÜN SEÇTİKLERİ
                </div>

                <div className="mm-editor-list">
                  {editorPicks.map((pick, i) => (
                    <a
                      href={pick.href}
                      key={i}
                      className="mm-editor-item"
                    >
                      <span className="mm-editor-idx">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="mm-editor-txt">
                        {pick.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mm-karikatur-box">
                <div className="mm-karikatur-head">KARİKATÜR</div>
                {karikatur ? (
                  <a
                    href={karikatur.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mm-karikatur-link"
                  >
                    <img
                      src={karikatur.img}
                      alt={karikatur.title}
                      className="mm-karikatur-img"
                    />
                    <span className="mm-karikatur-caption">Günün karikatürü</span>
                  </a>
                ) : (
                  <div className="mm-karikatur-fallback">
                    Karikatür şu anda yüklenemedi.
                  </div>
                )}
              </div>

            </div>
          </aside>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
