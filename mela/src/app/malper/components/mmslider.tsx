// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah,  La ilahe illAllah u Allahu Ekber
"use client";

import React, { useState } from "react";

/**
 * Üst slider: Son Dakika (solda) + Yazarlar (sağda)
 * Otomatik geçişli, ok butonlu modern slider.
 */

const sonDakika = [
  { title: "Gîyadin'de siyanür süreci başladı!", href: "/malper/penc", cat: "EKOLOJİ" },
  { title: "Nisêbîn'de anma alanına ziyaretler sürüyor", href: "/malper/du", cat: "GÜNDEM" },
  { title: "Maden işçileri kazandı: Direnişimiz zaferle sonuçlandı", href: "/malper/se", cat: "EKONOMİ" },
  { title: "Irak'ta 12 milletvekili ve yetkilinin mal varlığına el konuldu", href: "/malper/yek", cat: "DÜNYA" },
  { title: "Uyuşturucuya karşı çıktığı için tutuklanan 3 genç tahliye edildi", href: "/malper/car", cat: "GÜNDEM" },
];

const yazarlar = [
  { title: "Suriye'de tasfiye mi, yeni bir kuruculuk mu?", author: "Ender İmrek", href: "/malper/mmmmm" },
  { title: "Seslerin efsanesi", author: "Ahmet Güneş", href: "/malper/mmmmm" },
  { title: "'Ama ne Terörsüz Türkiye!'", author: "Dicle Anter", href: "/malper/mmmmm" },
  { title: "Gökyüzüne bakmadan geçen günler…", author: "Bahadır Altan", href: "/malper/mmmmm" },
  { title: "Müzakere ve mücadele", author: "Ertuğrul Kürkçü", href: "/malper/mmmmm" },
];

function useAutoIndex(length: number) {
  const [index, setIndex] = useState(0);
  return [index, setIndex] as const;
}

function ArrowButtons({
  count,
  index,
  setIndex,
  dark,
}: {
  count: number;
  index: number;
  setIndex: (i: number) => void;
  dark?: boolean;
}) {
  const base =
    "mm-slider-arrow flex h-8 w-8 items-center justify-center rounded-full border shadow-sm transition-all hover:scale-105";
  const cls = dark
    ? `${base} border-zinc-600 bg-zinc-800/80 text-white hover:bg-zinc-700`
    : `${base} border-zinc-300 bg-white/90 text-zinc-800 hover:bg-zinc-100`;

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        aria-label="Önceki"
        className={cls}
        onClick={() => setIndex((index - 1 + count) % count)}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Sonraki"
        className={cls}
        onClick={() => setIndex((index + 1) % count)}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function SonDakikaSlider() {
  const [index, setIndex] = useAutoIndex(sonDakika.length);
  const item = sonDakika[index];

  return (
    <div className="mm-hero-slider">
      <div className="mm-slider-tag mm-slider-tag-red">
        <span className="size-2 rounded-full bg-white animate-pulse" />
        SON DAKİKA
      </div>

      <a href={item.href} className="mm-slider-content group" key={index}>
        <span className="mm-slider-cat">{item.cat}</span>
        <h3 className="mm-slider-title">{item.title}</h3>
      </a>

      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-3">
        <ArrowButtons count={sonDakika.length} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

function YazarSlider() {
  const [index, setIndex] = useAutoIndex(yazarlar.length);
  const item = yazarlar[index];

  return (
    <div className="mm-yazar-slider">
      <div className="mm-slider-tag mm-slider-tag-dark">YAZARLAR</div>

      <a href={item.href} className="mm-yazar-content" key={index}>
        <div className="mm-yazar-avatar">
          {item.author.slice(0, 1)}
        </div>
        <div>
          <h3 className="mm-yazar-title">{item.title}</h3>
          <span className="mm-yazar-name">{item.author}</span>
        </div>
      </a>

      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-3">
        <ArrowButtons count={yazarlar.length} index={index} setIndex={setIndex} dark />
      </div>
    </div>
  );
}

export default function MmSlider() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
      <div>
        <SonDakikaSlider />
      </div>

      <div className="mm-slider-divider" aria-label="Yeni Yaşam logosu ayracı">
        <img
          src="https://yeniyasamgazetesi9.com/wp-content/uploads/2022/01/logo-e1643612364952.png"
          alt="Yeni Yaşam"
          className="mm-slider-divider-logo"
        />
      </div>

      <div>
        <YazarSlider />
      </div>
    </div>
  );
}
