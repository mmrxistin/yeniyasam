// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah,La ilahe illAllah u Allahu Ekber
// Estağfirullah El-Azim
// Allah u Ekber Ve Lillahil Hamd
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import MmSlider from './mmslider';

const NAV_LINKS = [
  { href: '/malper', label: 'Ana Sayfa' },
  { href: '/malper/yek', label: 'Tümü' },
  { href: '/malper/car', label: 'Gündem' },
  { href: '/malper/se', label: 'Dünya' },
  { href: '/malper/dirok', label: 'Ekonomi' },
  { href: '/malper/xane', label: 'Ekoloji' },
  { href: '/malper/rojname', label: 'Kadın' },
  { href: '/malper/mmmmm', label: 'Yazarlar' },
  { href: '/malper/account', label: 'Forum' },
];

function Mmmnavbar() {
const [open, setOpen] = useState(false);
const { theme, setTheme } = useTheme();

return (
<>
<header className="relative z-50 w-full bg-white text-[#18181b]">

    {/* BBC Style Top Header Bar */}
    <div className="bg-white">
      <div className="mx-auto flex min-h-[58px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        <div className="flex min-w-[60px] items-center justify-start" />

        <div className="flex items-center gap-2 sm:gap-3">

          <button
            type="button"
            aria-label="Tema değiştir"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-9 items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-700 no-underline transition-all hover:bg-zinc-100 hover:text-[#111]"
          >
            <span>{theme === 'dark' ? 'Açık' : 'Koyu'}</span>
          </button>

          <span className="hidden text-xs font-medium capitalize text-zinc-500 md:inline-block">
            {new Date().toLocaleDateString('tr-TR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>

          <a
            href="/login"
            className="flex h-9 items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 text-xs font-bold text-zinc-700 no-underline transition-all hover:bg-zinc-100 hover:text-[#111]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <span className="hidden sm:inline">
              Giriş Yap
            </span>
          </a>

          <a
            href="/signup"
            className="flex h-9 items-center rounded-md bg-[#b5121b] px-3.5 text-xs font-black text-white no-underline shadow-lg shadow-red-900/20 transition-all hover:bg-[#d51d29] hover:text-white"
          >
            Üye Ol
          </a>

          {/* HAMBURGER — mobilde üç çizgi */}
          <button
            type="button"
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            aria-controls="mm-main-menu"
            onClick={() => setOpen((v) => !v)}
            className="mm-burger flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-zinc-300 bg-zinc-50 transition-all hover:bg-zinc-100 lg:hidden"
          >
            <div className={`mm-burger-lines ${open ? 'mm-burger-open' : ''}`}>
              <span /><span /><span />
            </div>
          </button>

        </div>
      </div>
    </div>

    {/* ANA MENÜ — açılıp kapanabilir */}
    <div className={`mm-menu-wrap ${open ? 'mm-menu-open' : ''}`} id="mm-main-menu">
      <nav className="mx-auto w-full max-w-[1600px] bg-white px-0 lg:px-8">
        <ul className="m-0 flex w-full list-none flex-col p-0 lg:flex-row lg:items-center lg:flex-wrap">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="w-full lg:w-auto">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-modern-link flex w-full items-center ${link.href === '/malper' ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* SLIDER — ana sayfa ile aynı hizaya ve çerçeveye oturtulmuş */}
    <div className="mx-auto w-full max-w-[1945px] py-12 ">
      <div className="mm-navbar-slider-frame">
        <div className="mm-navbar-slider-inner">
          <MmSlider />
        </div>
      </div>
    </div>

  </header>



</>


);
}

export default Mmmnavbar;
//SubhanAllahi Rahmanir Rahim ve Bihamdihi
// SubhanAllah i Ehed ve Bihamdihi
// SubhanAllah i Samed i Azim ve Bihamdihi
// Suphan Allahi Kerim i Vehhab ve Bihamdihi
// SubhanAllahi Azim ve Bihamdihi
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllah Muhammden abduhu ve resuluhu
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllahu vahdehu (Esma Ul Husna)la sharika leh, lehu'l-mulku ve lehu'l-hamdu.

// yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir