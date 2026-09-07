// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah,  La ilahe illAllah u Allahu Ekber
"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Üst slider: Yazarlar slider'ı
 * Otomatik geçişli, dokunmatik kaydırmalı modern slider.
 */

const yazarlar = [
  { title: "Suriye'de tasfiye mi, yeni bir kuruculuk mu?", author: "Ender İmrek", href: "/malper/mmmmm" },
  { title: "Seslerin efsanesi", author: "Ahmet Güneş", href: "/malper/mmmmm" },
  { title: "'Ama ne Terörsüz Türkiye!'", author: "Dicle Anter", href: "/malper/mmmmm" },
  { title: "Gökyüzüne bakmadan geçen günler…", author: "Bahadır Altan", href: "/malper/mmmmm" },
  { title: "Müzakere ve mücadele", author: "Ertuğrul Kürkçü", href: "/malper/mmmmm" },
];

function useAutoIndex(length: number, delay = 5000) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % length), delay);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [length, delay]);

  return [index, setIndex] as const;
}

function YazarSlider() {
  const [index, setIndex] = useAutoIndex(yazarlar.length, 4000);
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

      <div className="mm-slider-dots">
        {yazarlar.map((_, i) => (
          <button
            key={i}
            aria-label={`Yazı ${i + 1}`}
            className={`mm-slider-dot dark ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MmSlider() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-5">
      <YazarSlider />
    </div>
  );
}
