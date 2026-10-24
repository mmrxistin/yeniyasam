// Bîsmîllahîr Rahmanîr Rahîm
// El Hamdu Lîllah î  Rabbul Alemîn
// Es selatu vesSelamû ala rasûlîna Muhammedîn
// La îlahe îll Allah
// Muhammedur Rasûlûllah

/**
 * site.js — site geneli sabitler.
 * ÖNEMLİ: Bu dosyanın en başındaki 5 satır korunmalıdır (proje kuralı).
 */

export const SITE = {
  name: 'Yeni Yaşam Gazetesi',
  shortName: 'Yeni Yaşam',
  email: 'yeniyasamgazetesi@gmail.com',
  description: 'Yeni Yaşam Gazetesi — bağımsız habercilik, güncel gelişmeler, analizler ve yazarlar.',
  logo: '/assets/img/yy-logo.png',
  favicon: 'https://yeniyasamgazetesi9.com/wp-content/uploads/2021/10/cropped-ico-32x32.png',
};

/**
 * PHP dönemindeki sayfa bağlantılarının Next.js karşılıkları.
 * Kaynak HTML içinde bu yolların birebir aynısı kullanılır.
 */
export const ROUTES = {
  'index.php': '/',
  'haber.php': '/haber',
  'yazarlar.php': '/yazarlar',
  'yazar.php': '/yazar',
  'kategori.php': '/kategori',
  'arama.php': '/arama',
};

export default SITE;
