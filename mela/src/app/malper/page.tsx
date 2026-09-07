// Bismillahirahmanirahim
 // Elhamdulillahirrabbulalemin
 // Esselatu vesselamu ala seyyidina Muhammedin
 // Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
 // SubhanAllah, Elhamdulillah, Allahu Ekber
 // Allah u Ekber Ve Lillahil Hamd



// El Hamdu Lîllah ya Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn
// La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehu'l-hamdu
// Yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir
 import React from 'react'
 import MansetSlider from './components/mmanset'
 import ParvekirinaYek from './yek/parvekirin'
 import Parvekirinayekayeke from './yek/yek/parvekirin'

 import Du from './du/parvekirin'
 import Rojnm from './rojname/ForYouFeed'
 import Dirok from './dirok/ForYouFeed'
 import Car from './car/ForYouFeed'
 import Penc from './penc/ForYouFeed'
 import Se from './se/parvekirin'
 import Xane from './xane/ForYouFeed'
 // El Hamdu Lîllah ya Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn
 // La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehu'l-hamdu.
 // Yuhyi ve yumit
 // Biyadihil xayr
 // ve huve ala kulli şey'in kadir

function page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* LEAD BÖLÜMÜ: büyük manşet solda, liste sağda */}
      <section className="border-b border-zinc-200 bg-white px-4 py-6 sm:px-6">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-12">

          <div className="lg:col-span-8">
            <div className="border border-zinc-200">
              <MansetSlider />
            </div>
          </div>

          {/* ABC sağ kolon — "Top Stories" listesi */}
          <div className="lg:col-span-4">
            <h2 className="mb-0 border-b-[3px] border-zinc-900 pb-2 text-sm font-black uppercase tracking-[0.14em]">
              Öne Çıkanlar
            </h2>

            <ul className="m-0 list-none divide-y divide-zinc-200 p-0">
              <li>
                <a href="/malper/penc" className="group flex gap-3 py-4 no-underline">
                  <div className="h-16 w-24 shrink-0 overflow-hidden bg-zinc-100">
                    <ParvekirinaYek />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#d90000]">Ekoloji</span>
                    <h3 className="mt-1 text-sm font-bold leading-5 text-zinc-900 group-hover:text-[#d90000] group-hover:underline">
                      Gîyadin'de siyanür süreci başladı!
                    </h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="/malper/car" className="group flex gap-3 py-4 no-underline">
                  <div className="h-16 w-24 shrink-0 overflow-hidden bg-zinc-100">
                    <img
                      src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/amd-29-08-2026-3genc-tahliye-350x250.jpeg"
                      alt="3 genç tahliye edildi"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#d90000]">Gündem</span>
                    <h3 className="mt-1 text-sm font-bold leading-5 text-zinc-900 group-hover:text-[#d90000] group-hover:underline">
                      Uyuşturucuya karşı çıktığı için tutuklanan 3 genç tahliye edildi
                    </h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="/malper/rojname" className="group flex gap-3 py-4 no-underline">
                  <div className="h-16 w-24 shrink-0 overflow-hidden bg-zinc-100">
                    <img
                      src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/690x390cc-mrk-28-08-2028-turk-sihasi-yunanitan-havaalanina-girdi-360x180.jpg"
                      alt="Yunanistan"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#d90000]">Dünya</span>
                    <h3 className="mt-1 text-sm font-bold leading-5 text-zinc-900 group-hover:text-[#d90000] group-hover:underline">
                      Türkiye İHA'sı Yunanistan havaalanına girdi
                    </h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="/malper/dirok" className="group flex gap-3 py-4 no-underline">
                  <div className="h-16 w-24 shrink-0 overflow-hidden bg-zinc-100">
                    <img
                      src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/823x463cc-amd-29-08-26-gulistan-doku-dosya-yeni-gelisme-350x250.jpeg"
                      alt="Gülistan Doku dosyası"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#d90000]">Güncel</span>
                    <h3 className="mt-1 text-sm font-bold leading-5 text-zinc-900 group-hover:text-[#d90000] group-hover:underline">
                      Gülistan Doku'nun kaybolduğu saatlerde defalarca telefon görüşmesi ortaya çıktı
                    </h3>
                  </div>
                </a>
              </li>
            </ul>

            <a
              href="/malper/yek"
              className="mt-2 inline-block border border-zinc-900 px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-zinc-900 no-underline transition-colors hover:bg-zinc-900 hover:text-white"
            >
              Tüm Haberler →
            </a>
          </div>

        </div>
      </section>


      {/* HABER AKIŞI */}
      <section className="border-t border-zinc-200 bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-[1280px]">

          <h2 className="border-b-[3px] border-zinc-900 pb-2 text-sm font-black uppercase tracking-[0.14em]">
            Güncel Haberler
          </h2>

          <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-12">

            <div className="lg:col-span-8">
              <ul className="m-0 list-none divide-y divide-zinc-200 p-0">

                <li>
                  <article className="group py-6">
                    <div className="flex flex-col gap-5 md:flex-row">
                      <div className="h-48 w-full shrink-0 overflow-hidden bg-zinc-100 md:h-40 md:w-64">
                        <Parvekirinayekayeke />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#d90000]">Güncel</span>
                        <h3 className="mt-1 text-xl font-bold leading-tight group-hover:text-[#d90000] group-hover:underline sm:text-2xl">
                          Nisêbîn'de bir kişi gözaltına alındı
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                          Hakkında yakalama kararı bulunduğu gerekçesiyle Rıdvan Aslan,
                          Nisêbîn ilçe merkezinde gözaltına alındı.
                        </p>
                        <a href="/malper/penc" className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-[#d90000] no-underline hover:underline">
                          Devamını Oku →
                        </a>
                      </div>
                    </div>
                  </article>
                </li>

                <li>
                  <article className="group py-6">
                    <div className="flex flex-col gap-5 md:flex-row">
                      <div className="h-48 w-full shrink-0 overflow-hidden bg-zinc-100 md:h-40 md:w-64">
                        <img
                          src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/amd-29-08-2026-3genc-tahliye-350x250.jpeg"
                          alt="3 genç tahliye edildi"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#d90000]">Gündem</span>
                        <h3 className="mt-1 text-xl font-bold leading-tight group-hover:text-[#d90000] group-hover:underline sm:text-2xl">
                          Uyuşturucuya karşı çıktığı için tutuklanan 3 genç tahliye edildi
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                          Uyuşturucu ticaretine karşı çıktığı için tutuklanan 3 genç,
                          yargı sürecinin ardından tahliye edildi.
                        </p>
                        <Car />
                        <a href="/malper/rojname" className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-[#d90000] no-underline hover:underline">
                          Devamını Oku →
                        </a>
                      </div>
                    </div>
                  </article>
                </li>

                <li>
                  <article className="group py-6">
                    <div className="flex flex-col gap-5 md:flex-row">
                      <div className="h-48 w-full shrink-0 overflow-hidden bg-zinc-100 md:h-40 md:w-64">
                        <img
                          src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/mrd-29-08-26-nisebin-taziye-ucuncu-gun23-750x375.jpg"
                          alt="Irak'ta mal varlıklarına el konuldu"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#d90000]">Dünya</span>
                        <h3 className="mt-1 text-xl font-bold leading-tight group-hover:text-[#d90000] group-hover:underline sm:text-2xl">
                          Irak'ta 12 milletvekili ve yetkilinin mal varlığına el konuldu
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                          Irak Kerx Mahkemesi ve Maliye Bakanlığı, 12 eski milletvekili
                          ile eski danışmanların tüm mal varlıklarına el koydu.
                        </p>
                        <Rojnm />
                        <a href="/malper/se" className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-[#d90000] no-underline hover:underline">
                          Devamını Oku →
                        </a>
                      </div>
                    </div>
                  </article>
                </li>

              </ul>
            </div>

            {/* ÇOK OKUNAN — ABC sağ ray */}
            <aside className="lg:col-span-4">
              <div className="border border-zinc-200">
                <div className="border-b-[3px] border-zinc-900 px-5 py-4">
                  <h2 className="text-sm font-black uppercase tracking-[0.14em]">
                    Çok Okunan Haberler
                  </h2>
                </div>

                <div className="divide-y divide-zinc-200">
                  {[
                    { n: '01', t: "Kaya petrolü Amed'i kurutup zehirleyecek", h: '/malper/penc' },
                    { n: '02', t: 'Murat Karayılan: Savaş koşulları nedeniyle şahadetleri zamanında açıklayamadık', h: '/malper/car' },
                    { n: '03', t: 'IBAN üzerinden yatırım dolandırıcılığı', h: '/malper/rojname' },
                    { n: '04', t: 'Entelektüel tartışması, barış ve Öcalan meselesine dair…', h: '/malper/dirok' },
                  ].map((item) => (
                    <a key={item.n} href={item.h} className="group flex gap-4 p-5 no-underline transition-colors hover:bg-[#fafafa]">
                      <span className="text-2xl font-black leading-none text-zinc-300 group-hover:text-[#d90000]">
                        {item.n}
                      </span>
                      <h3 className="text-sm font-bold leading-5 text-zinc-900 group-hover:text-[#d90000] group-hover:underline">
                        {item.t}
                      </h3>
                    </a>
                  ))}
                  <Penc />
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* KATEGORİLER — ABC 4'lü grid */}
      <section className="border-t border-zinc-200 bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-[1280px]">

          <h2 className="border-b-[3px] border-zinc-900 pb-2 text-sm font-black uppercase tracking-[0.14em]">
            Kategoriler
          </h2>

          <div className="mt-2 grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">

            {[
              { cat: 'Gündem', title: 'Günün Manşeti', href: '/malper/car', comp: null },
              { cat: 'Kadın', title: 'Kadın Haberleri', href: '/malper/rojname', comp: <Se /> },
              { cat: 'Kültür', title: 'Kültür & Sanat', href: '/malper/dirok', comp: <Xane /> },
              { cat: 'Dünya', title: 'Dünya Haberleri', href: '/malper/se', comp: <Dirok /> },
            ].map((k) => (
              <div key={k.cat} className="flex min-h-[200px] flex-col justify-between bg-white p-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#d90000]">{k.cat}</span>
                  <h3 className="mt-2 text-xl font-bold">{k.title}</h3>
                  {k.comp && <div className="mt-3">{k.comp}</div>}
                </div>
                <a
                  href={k.href}
                  className="mt-6 text-xs font-black uppercase tracking-[0.12em] text-zinc-900 no-underline hover:text-[#d90000] hover:underline"
                >
                  Haberleri Gör →
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER AYIRICI */}
      <div className="h-2 bg-zinc-200" />

    </main>
  )
}

export default page
