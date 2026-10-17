// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah
// La ilahe illAllahu vahdehu la sharika leh, lehu'l-mulku ve lehu'l-hamdu.
// yuhyi ve yumit
// Huwe Hayyun la yemut
// ve bîyadîhîl xayr
// ve huve ala kulli şey'in kadir
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illAllah, Allahu Ekber, Allahu Ekber ve lillahi'l-hamd
import React from "react";
import Mmmnavbar from "./components/mmnav";
import Footer from "./components/mmbingeh";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

// Editörün Seçtikleri — yeniyasamgazetesi9.com güncel içerik
const editorPicks = [
  { title: "Gülistan Doku'nun kaybolduğu saatlerde defalarca telefon görüşmesi ortaya çıktı", href: "/malper/yek" },
  { title: "Katledilmeden önce polise başvuran Sultan Kara'ya 'Bu ailede adam öldürecek tip yok' denildi", href: "/malper/rojname" },
  { title: "2 köyde 60 yıldır yol ve su yok: Siyasi tercihlerimizden dolayı cezalandırılıyoruz", href: "/malper/xane" },
  { title: "Amed sokaklarına şehitlerin posterleri asıldı", href: "/malper/car" },
  { title: "Avrupa'da kuraklık nehirleri kurutuyor", href: "/malper/penc" },
  { title: "Bir çağın içinden, bir barışın eşiğinde", href: "/malper/mmmmm" },
];

// Site açılmadığında gösterilecek statik yedek kapak (döngüyü/askıda kalmayı önler)
const FALLBACK_MANSET = "https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/mrd-29-08-26-nisebin-taziye-ucuncu-gun23-750x375.jpg";

async function fetchWithTimeout(url: string, timeoutMs = 6000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      // Dev modunda da cache'lensin ki her istekte yeniden çekilmesin (ağır site ~5sn)
      cache: "force-cache",
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

async function getGununManseti(): Promise<{ img: string; href: string } | null> {
  try {
    const targetUrl = "https://yeniyasamgazetesi9.com/gunun-manseti/";
    const res = await fetchWithTimeout(targetUrl);
    if (!res.ok) return null;
    const html = await res.text();

    // URL'yi mutlak hale getiren yardımcı fonksiyon
    const makeAbsolute = (url: string) => {
      if (url.startsWith('http')) return url;
      return `https://yeniyasamgazetesi9.com${url.startsWith('/') ? '' : '/'}${url}`;
    };

    // 1. En güvenilir: Open Graph Image (og:image)
    const ogImg = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i);
    if (ogImg) return { img: makeAbsolute(ogImg[1]), href: targetUrl };

    // 2. Alternatif: 'attachment-large' veya 'attachment-full' sınıflı görseller
    const largeImgMatch = html.match(/src="([^"]+uploads\/[^"]+\.(?:jpg|jpeg|png|webp))"[^>]+class="[^"]*attachment-(?:large|full|medium_large)/i);
    if (largeImgMatch) return { img: makeAbsolute(largeImgMatch[1]), href: targetUrl };

    // 3. Alternatif: Tarih bazlı klasör içindeki ilk büyük görsel
    const now = new Date();
    const ym = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}`;
    const esc = ym.replace("/", "\\/");
    const re = new RegExp(`src="([^"]+uploads\/${esc}\/[^"]+\.(?:jpg|jpeg|png|webp))"`, "i");
    const match = html.match(re);
    if (match) return { img: makeAbsolute(match[1]), href: targetUrl };

    // 4. Son çare: Herhangi bir uploads görseli
    const fallback = html.match(/src="([^"]+uploads\/[^"]+\.(?:jpg|jpeg|png|webp))"/i);
    if (fallback) return { img: makeAbsolute(fallback[1]), href: targetUrl };

    // Site yanıt vermediyse statik yedek kapak kullan (savaş donması önlenir)
    return { img: FALLBACK_MANSET, href: targetUrl };
  } catch (err) {
    return { img: FALLBACK_MANSET, href: targetUrl };
  }
}

async function getKarikatur(): Promise<{ img: string; href: string; title: string } | null> {
  try {
    const res = await fetchWithTimeout("https://yeniyasamgazetesi9.com/");
    if (!res.ok) return null;
    const html = await res.text();

    const makeAbsolute = (url: string) => {
      if (url.startsWith('http')) return url;
      return `https://yeniyasamgazetesi9.com${url.startsWith('/') ? '' : '/'}${url}`;
    };

    const match = html.match(/<h3[^>]*>\s*<span>KARİKATÜR<\/span>\s*<\/h3>[\s\S]*?<a[^>]*href="([^"]+)"[^>]*>\s*<img[^>]*src="([^"]+)"/i);
    if (match) {
      return { img: makeAbsolute(match[2]), href: makeAbsolute(match[1]), title: "Karikatür" };
    }

    const fallback = html.match(/src="([^"]+uploads\/[^"]+\.(?:jpg|jpeg|png|webp))"/i);
    if (fallback) {
      return { img: makeAbsolute(fallback[1]), href: "https://yeniyasamgazetesi9.com/karikatur/", title: "Karikatür" };
    }
    return null;
  } catch { return null; }
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const manset = await getGununManseti();
  const karikatur = await getKarikatur();
  const bugun = new Date().toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Mmmnavbar />
      <div className="yy-shell">
        {/* ÜST ŞERİT — DÜNYA • KADIN • EKOLOJİ / POLİTİKA • EKONOMİ • KÜLTÜR SÖYLEŞİ */}
        <div className="yy-topstrip">
          <div className="yy-topstrip-inner">
            <a href="/malper/se" className="yy-topstrip-link">DÜNYA</a>
            <span className="yy-topstrip-dot">•</span>
            <a href="/malper/rojname" className="yy-topstrip-link yy-accent">KADIN</a>
            <span className="yy-topstrip-dot">•</span>
            <a href="/malper/xane" className="yy-topstrip-link">EKOLOJİ</a>
            <span className="yy-topstrip-sep" />
            <a href="/malper/car" className="yy-topstrip-link yy-accent">POLİTİKA</a>
            <span className="yy-topstrip-dot">•</span>
            <a href="/malper/dirok" className="yy-topstrip-link">EKONOMİ</a>
            <span className="yy-topstrip-dot">•</span>
            <a href="/malper/dirok" className="yy-topstrip-link">KÜLTÜR</a>
            <span className="yy-topstrip-sep" />
            <a href="/malper/account" className="yy-topstrip-link">SÖYLEŞİ</a>
          </div>
        </div>

        <div className="yy-grid-frame mx-auto w-full">
          {/* ANA İÇERİK */}
          <main className="yy-main-col">
            {children}
          </main>

          {/* SAĞ RAY — GÜNÜN MANŞETİ / JİN DERGİ / KARİKATÜR / DESTEK OL */}
          <aside className="yy-rail-col">
            {/* GÜNÜN MANŞETİ */}
            <a href={manset ? manset.href : "https://yeniyasamgazetesi9.com/gunun-manseti/"} target="_blank" rel="noopener noreferrer" className="yy-rail-box yy-rail-manset">
              <div className="yy-rail-head yy-rail-head-red">
                <span>GÜNÜN MANŞETİ</span>
                <span className="yy-rail-arrow">❯</span>
              </div>
              {manset ? (
                <img src={manset.img} alt={`Günün Manşeti — ${bugun}`} className="yy-rail-manset-img" />
              ) : <div className="yy-rail-fallback">Gazete kapağı şu anda yüklenemedi.</div>}
            </a>

            {/* JİN DERGİ */}
            <a href="https://jindergi.com" target="_blank" rel="noopener noreferrer" className="yy-rail-box">
              <div className="yy-rail-head">
                <span>JİN DERGİ</span>
                <span className="yy-rail-arrow">❯</span>
              </div>
              <img
                src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/amd-29-08-2026-3genc-tahliye-350x250.jpeg"
                alt="Jin Dergi"
                className="yy-rail-box-img"
              />
            </a>

            {/* GÜNÜN KARİKATÜRÜ */}
            <a href={karikatur ? karikatur.href : "https://yeniyasamgazetesi9.com/karikatur/"} target="_blank" rel="noopener noreferrer" className="yy-rail-box">
              <div className="yy-rail-head">
                <span>GÜNÜN KARİKATÜRÜ</span>
                <span className="yy-rail-arrow">❯</span>
              </div>
              {karikatur ? (
                <img src={karikatur.img} alt={karikatur.title} className="yy-rail-box-img" />
              ) : <div className="yy-rail-fallback">Karikatür şu anda yüklenemedi.</div>}
            </a>

            {/* DESTEK OL / ABONE */}
            <div className="yy-support-box">
              <div className="yy-support-label">DESTEK OL</div>
              <div className="yy-support-title">Yeni Yaşam'a<br />Abone Ol</div>
              <p className="yy-support-text">Bağımsız haberciliğe güç kat.</p>
              <a href="/subscribe" className="yy-support-btn">ABONE OL</a>
            </div>

            {/* EDİTÖRÜN SEÇTİKLERİ */}
            <div className="yy-editor-box">
              <div className="yy-editor-head">
                <span>EDİTÖRÜN SEÇTİKLERİ</span>
                <a href="/malper/yek" className="yy-editor-all">TÜMÜ</a>
              </div>
              <div className="yy-editor-list">
                {editorPicks.map((pick, i) => (
                  <a href={pick.href} key={i} className="yy-editor-item">
                    <span className="yy-editor-cat">{["POLİTİKA", "GUNDEM", "YEREL", "EKONOMİ", "EKOLOJİ", "SÖYLEŞİ"][i]}</span>
                    <span className="yy-editor-txt">{pick.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* SOSYAL MEDYA */}
            <div className="yy-social-bar">
              <span className="yy-social-label">Takip Edin</span>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="hover:text-[#d90000] transition-colors"><Facebook size={16} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-[#d90000] transition-colors"><Twitter size={16} /></a>
                <a href="#" aria-label="Instagram" className="hover:text-[#d90000] transition-colors"><Instagram size={16} /></a>
                <a href="#" aria-label="Youtube" className="hover:text-[#d90000] transition-colors"><Youtube size={16} /></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
