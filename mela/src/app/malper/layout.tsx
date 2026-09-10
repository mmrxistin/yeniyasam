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
import { YazarSlider } from "./components/mmslider";
import MmJinDergi from "./components/mmjin";

// Editörün Seçtikleri — yeniyasamgazetesi9.com güncel içerik
const editorPicks = [
  { title: "Gülistan Doku'nun kaybolduğu saatlerde defalarca telefon görüşmesi ortaya çıktı", href: "/malper/yek" },
  { title: "Katledilmeden önce polise başvuran Sultan Kara'ya 'Bu ailede adam öldürecek tip yok' denildi", href: "/malper/rojname" },
  { title: "2 köyde 60 yıldır yol ve su yok: Siyasi tercihlerimizden dolayı cezalandırılıyoruz", href: "/malper/xane" },
  { title: "Amed sokaklarına şehitlerin posterleri asıldı", href: "/malper/car" },
  { title: "Avrupa'da kuraklık nehirleri kurutuyor", href: "/malper/penc" },
  { title: "Bir çağın içinden, bir barışın eşiğinde", href: "/malper/mmmmm" },
];

async function fetchWithTimeout(url: string, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; YeniYasamBot/1.0)" },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

async function getGununManseti(): Promise<{ img: string; href: string } | null> {
  try {
    const res = await fetchWithTimeout("https://yeniyasamgazetesi9.com/gunun-manseti/");
    if (!res.ok) return null;
    const html = await res.text();
    const now = new Date();
    const ym = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}`;
    const esc = ym.replace("/", "\\/");
    const re = new RegExp(`https://yeniyasamgazetesi9\\.com/wp-content/uploads/${esc}/[^"'\\s]+\\.(?:jpg|jpeg|png)`, "i");
    const match = html.match(re);
    if (!match) {
      const fallback = html.match(/https:\/\/yeniyasamgazetesi9\.com\/wp-content\/uploads\/[^"'\s]+\.(?:jpg|jpeg|png)/i);
      if (!fallback) return null;
      return { img: fallback[0], href: "https://yeniyasamgazetesi9.com/gunun-manseti/" };
    }
    return { img: match[0], href: "https://yeniyasamgazetesi9.com/gunun-manseti/" };
  } catch { return null; }
}

async function getKarikatur(): Promise<{ img: string; href: string; title: string } | null> {
  try {
    const res = await fetchWithTimeout("https://yeniyasamgazetesi9.com/");
    if (!res.ok) return null;
    const html = await res.text();
    const match = html.match(/<h3[^>]*>\s*<span>KARİKATÜR<\/span>\s*<\/h3>[\s\S]*?<a[^>]*href="([^"]+)"[^>]*>\s*<img[^>]*src="([^"]+)"/i);
    if (!match) {
      const fallback = html.match(/https:\/\/yeniyasamgazetesi9\.com\/wp-content\/uploads\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/i);
      if (!fallback) return null;
      return { img: fallback[0], href: "https://yeniyasamgazetesi9.com/karikatur/", title: "Karikatür" };
    }
    return { img: match[2], href: match[1], title: "Karikatür" };
  } catch { return null; }
}

async function getJinDergiManset(): Promise<{ img: string; title: string; href: string } | null> {
  try {
    const res = await fetchWithTimeout("https://jindergi.com/");
    if (!res.ok) return null;
    const html = await res.text();

    // Jin Dergi genellikle og:image ve og:title kullanır
    const imgMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i);
    const titleMatch = html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]+)"/i);
    const urlMatch = html.match(/<meta[^>]*property="og:url"[^>]*content="([^"]+)"/i);

    if (imgMatch && titleMatch) {
      return {
        img: imgMatch[1],
        title: titleMatch[1],
        href: urlMatch ? urlMatch[1] : "https://jindergi.com"
      };
    }
    return null;
  } catch { return null; }
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const manset = await getGununManseti();
  const karikatur = await getKarikatur();
  const jinManset = await getJinDergiManset();
  const bugun = new Date().toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Mmmnavbar />
      <div className="mm-shell">
        <div className="mm-grid-frame mx-auto w-full">
          <main className="mm-main-col p-3 sm:p-4 md:p-5">
            {children}
          </main>
          <aside className="mm-tv-col p-2 sm:p-3 md:pt-5">
            <div className="mm-tv-panel">
              <div className="pt-5 mb-4">
                <YazarSlider />
              </div>
              <MmLiveTv />
              <div className="mm-editor-pick">
                <div className="mm-editor-head"><span className="mm-editor-star">★</span> EDİTÖRÜN SEÇTİKLERİ</div>
                <div className="mm-editor-list">
                  {editorPicks.map((pick, i) => (
                    <a href={pick.href} key={i} className="mm-editor-item">
                      <span className="mm-editor-idx">{String(i + 1).padStart(2, "0")}</span>
                      <span className="mm-editor-txt">{pick.title}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="mm-manset-box">
                <div className="mm-manset-head">GÜNÜN MANŞETİ</div>
                {manset ? (
                  <a href={manset.href} target="_blank" rel="noopener noreferrer" className="mm-manset-link">
                    <img src={manset.img} alt={`Günün Manşeti — ${bugun}`} className="mm-manset-img" />
                    <span className="mm-manset-date">{bugun}</span>
                  </a>
                ) : <div className="mm-manset-fallback">Gazete kapağı şu anda yüklenemedi.</div>}
              </div>
              <div className="mm-karikatur-box">
                <div className="mm-karikatur-head">KARİKATÜR</div>
                {karikatur ? (
                  <a href={karikatur.href} target="_blank" rel="noopener noreferrer" className="mm-karikatur-link">
                    <img src={karikatur.img} alt={karikatur.title} className="mm-karikatur-img" />
                    <span className="mm-karikatur-caption">Günün karikatürü</span>
                  </a>
                ) : <div className="mm-karikatur-fallback">Karikatür şu anda yüklenemedi.</div>}
              </div>

              {/* JİN DERGİ — Sidebar Box */}
              <div className="mt-2">
                <MmJinDergi sidebar mansetData={jinManset} />
              </div>

              {/* E-GAZETE — Fill Gaps */}
              <div className="mm-tv-card p-6 bg-zinc-900 text-white text-center mt-2 border-none">
                <div className="text-[#d90000] text-xs font-black uppercase tracking-widest mb-1">Yeni Yaşam</div>
                <h2 className="text-2xl font-black italic tracking-tighter mb-2">e-gazete</h2>
                <p className="text-[11px] text-zinc-400 mb-5 leading-relaxed">
                  Basılı gazete keyfini dijitalde yaşayın. <br />
                  Tüm arşiv bir tık uzağınızda.
                </p>
                <a
                  href="/subscribe"
                  className="inline-block w-full py-2.5 bg-white text-zinc-950 text-[10px] font-black uppercase tracking-[0.2em] rounded hover:bg-[#d90000] hover:text-white transition-all shadow-xl"
                >
                  HEMEN ABONE OL
                </a>
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
