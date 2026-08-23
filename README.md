# Messina Home — Web Sitesi

Bursa İnegöl'deki Messina Home koltuk mağazası için hazırlanmış, 4 sayfalık statik web sitesi.

## Dosya Yapısı

```
ilter-dukkan/
├─ index.html        → Ana Sayfa
├─ urunler.html       → Ürünler
├─ hakkimizda.html    → Hakkımızda
├─ iletisim.html      → İletişim (WhatsApp'a giden form + harita)
├─ css/style.css      → Tüm site stili (lüks/şık tema: koyu zemin + altın vurgular)
├─ js/main.js         → Mobil menü, footer yılı, iletişim formu → WhatsApp
└─ images/            → Gerçek ürün fotoğrafları buraya eklenecek
```

## Şu An Yer Tutucu (Placeholder) Olan Yerler

- **Ürün görselleri** — `images/` klasöründeki fotoğraflar Unsplash'ten alınmış, lisans olarak ticari kullanıma açık **temsili** görsellerdir (gerçek Messina Home ürünleri değildir). Bu yüzden ilgili görsellerin üzerinde küçük "Temsili Görsel" etiketi var. Gerçek ürün fotoğrafları geldiğinde `images/` klasöründeki dosyaları aynı isimle değiştirmen yeterli — kod tarafında hiçbir şey değişmene gerek kalmaz. Dosya/kullanım eşleşmesi:
  - `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` → Ana sayfa üst banner (geçişli 3 görsel)
  - `cat-kose-koltuk.jpg`, `cat-kanepe.jpg`, `cat-berjer.jpg`, `cat-cekyat.jpg`, `cat-sandalye-puf.jpg`, `cat-ozel-tasarim.jpg` → kategori görselleri (Ana sayfa karuseli + Ürünler sayfası)
  - `showcase-magaza.jpg`, `showcase-ozel-tasarim.jpg` → Ana sayfadaki büyük 2'li vitrin
  - `hakkimizda.jpg` → Hakkımızda sayfasındaki görsel
- **Ürün isimleri** — kategori bazlı (Köşe Koltuk Grubu, Kanepe vb.); spesifik model isimleri henüz yok.
- **Hakkımızda metni** — genel/tanıtım amaçlı yazıldı, istersen daha kişisel bir hikayeyle değiştirebiliriz.
- **Adres** — şu an sadece "İnegöl, Bursa" yazıyor ve harita da genel İnegöl konumunu gösteriyor. Tam adres (sokak/mahalle) verilirse haritayı ve yazıyı buna göre güncelleriz.

## Hareketli Öğeler

- Ana sayfa üst banner'ında 3 görsel ~5.5 saniyede bir yumuşak geçişle değişir, her görsel yavaşça yakınlaşır (Saloni'deki gibi).
- Ürün kartları ve büyük vitrin görsellerinin üzerine gelince hafifçe yakınlaşır (hover zoom).
- Sayfa kaydırıldıkça bölümler ve kartlar yumuşakça belirir (scroll-reveal). Kullanıcının sisteminde "hareketi azalt" ayarı açıksa bu animasyonlar otomatik devre dışı kalır (erişilebilirlik).

## Siteyi Bilgisayarında Görüntüleme

`index.html` dosyasına çift tıklaman yeterli, tarayıcıda açılır. Diğer sayfalara üst menüden geçebilirsin.

## Yayına Alma (Hosting)

Site tamamen statik (HTML/CSS/JS) olduğu için Netlify, Vercel, GitHub Pages gibi ücretsiz servislerle ya da normal bir hosting/cPanel ile yayına alınabilir. Bir alan adı (domain) seçildiğinde bu adımı birlikte yaparız.

## İletişim Formu Nasıl Çalışıyor?

Sitede backend/sunucu olmadığı için "İletişim" sayfasındaki form, girilen bilgilerle hazır bir WhatsApp mesajı oluşturup WhatsApp'ı açar. Böylece mesajlar doğrudan **0505 033 24 57** numarasına WhatsApp üzerinden ulaşır.
