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
import MmSlider from "./components/mmslider";
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
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
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
