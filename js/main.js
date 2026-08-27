// ==========================================================================
// Messina Home — Ana Script & Çok Dilli (TR / EN) Yönetim Sistemi
// ==========================================================================

// ---------- 1. Çeviri Sözlüğü (i18n Dictionary) ----------
var translations = {
  tr: {
    top_career: "KARİYER",
    top_stores: "ATÖLYEMİZ",
    top_search: "ARA",
    search_placeholder: "Model, kategori veya kumaş arayın... (Örn: Köşe, Kanepe, Berjer)",
    search_popular: "Popüler Aramalar:",
    search_no_res: "Sonuç bulunamadı. Lütfen farklı bir arama terimi deneyin.",
    nav_home: "ANA SAYFA",
    nav_collection: "KOLEKSİYON",
    nav_about: "HAKKIMIZDA",
    nav_contact: "İLETİŞİM",
    nav_stores: "MAĞAZALAR",
    nav_cat_corner: "Köşe Koltuk Grubu",
    nav_cat_sofa: "Kanepe / Üçlü Koltuk",
    nav_cat_armchair: "Berjer Koltuk",
    nav_cat_sofabed: "Yataklı Koltuk (Çekyat)",
    nav_cat_chair_pouf: "Sandalye & Puf",
    nav_cat_custom: "Özel Tasarım",
    hero_tag: "Messina Home · 2026 Koleksiyon & Atölye Turu",
    hero_pause: "Durdur",
    hero_play: "Oynat",
    hero_mute: "Ses Aç",
    hero_unmute: "Sesi Kapat",
    hero_scroll: "Keşfetmek İçin Kaydırın",
    manifesto_eyebrow: "Zamansız Tasarım · İnegöl Zanaatı",
    manifesto_h1: "Konfor ve Zarafetin Sanata Dönüştüğü Yer",
    manifesto_lead: "Saloni çizgilerini aratmayan modern estetik; İnegöl'ün usta el işçiliği ve birinci sınıf dokuma kumaşlarıyla yaşam alanlarınıza lüks ve zamansız bir atmosfer katıyor.",
    manifesto_btn_explore: "Koleksiyonu Keşfet",
    manifesto_btn_wa: "WhatsApp Katalog & Fiyat",
    badge_producer_title: "İnegöl Üretici Güvencesi",
    badge_producer_desc: "Doğrudan atölyeden birinci sınıf malzeme",
    badge_custom_title: "Kişiye Özel Ölçü & Kumaş",
    badge_custom_desc: "Mekanınıza göre sınırsız renk ve doku",
    badge_delivery_title: "Türkiye Geneli Teslimat",
    badge_delivery_desc: "Güvenli paketleme ve eve teslim kurulum",
    sec_collection_eyebrow: "Öne Çıkanlar",
    sec_collection_title: "2026 Koltuk Koleksiyonu",
    sec_collection_desc: "Modern çizgiler, ergonomik sırt destekleri ve silinebilir lüks dokuma kumaşlarla evinize şıklık katın.",
    sec_cinema_eyebrow: "Sinematik Deneyim",
    sec_cinema_title: "Yaşam Alanınızda İnegöl Ustalığı",
    sec_cinema_desc: "Her dikişinde zarafet, her detayında konfor. Messina Home dünyasını keşfedin.",
    sec_showcase_eyebrow: "Mimari Vizyon",
    sec_showcase_title: "Mekanlara Özel Tasarım & Üretim",
    sec_showcase_desc: "Evinizin ölçülerine ve zevkinize özel kişiselleştirilmiş mobilya çözümleri.",
    sec_why_eyebrow: "Neden Messina Home?",
    sec_why_title: "Konforun ve Kalitenin Farkı",
    sec_why_desc: "Yılların getirdiği mobilya zanaatını modern tasarım anlayışıyla harmanlıyoruz.",
    cat_corner_title: "Köşe Koltuk Grubu",
    cat_corner_desc: "Geniş oturum, modüler yerleşim ve pürüzsüz dokuma kumaş kalitesi.",
    cat_sofa_title: "Kanepe & Üçlü Koltuk",
    cat_sofa_desc: "Zarif hatlar, yüksek ayak tasarımı ve birinci sınıf sünger konforu.",
    cat_armchair_title: "Berjer Koltuk",
    cat_armchair_desc: "Okuma köşeleriniz ve dinlenme anlarınız için şık tamamlayıcı.",
    cat_sofabed_title: "Yataklı Koltuk (Çekyat)",
    cat_sofabed_desc: "Kolay açılır mekanizma, ekstra saklama sandığı ve üstün uyku rahatlığı.",
    cat_chair_pouf_title: "Sandalye & Puf",
    cat_chair_pouf_desc: "Yemek ve salon alanlarınızı tamamlayan ergonomik formlar.",
    cat_custom_title: "Kişiye Özel Tasarım",
    cat_custom_desc: "Ölçünüze, salonunuza ve kumaş seçiminize özel butik üretim.",
    btn_details: "Detayları İncele",
    btn_all_products: "Tüm Ürünleri İncele",
    badge_rep: "Temsili Görsel",
    about_eyebrow: "Bizi Tanıyın",
    about_title: "İnegöl'den Dünyaya Uzanan Konfor",
    about_lead: "Messina Home olarak Bursa İnegöl'de başlayan mobilya yolculuğumuzda, modern çizgileri usta el işçiliğiyle buluşturuyoruz.",
    about_card1_title: "Birinci Sınıf İskelet & Sünger",
    about_card1_desc: "Fırınlanmış gürgen ağacı iskelet ve 35 dansite HR sünger ile uzun ömürlü dayanıklılık.",
    about_card2_title: "Leke Tutmaz Lüks Kumaşlar",
    about_card2_desc: "Kolay temizlenebilir keten, kadife, bukle ve nubuk dokular.",
    about_card3_title: "Kişiye Özel Çözümler",
    about_card3_desc: "Salonunuzun santimetresine göre modüler üretim ve renk uyumu.",
    about_history_title: "Hikayemiz",
    about_history_p1: "Mobilyanın başkenti İnegöl'de kurulan atölyemizde, her koltuğu bir sanat eseri özeniyle üretiyoruz.",
    about_history_p2: "Amacımız sadece bir oturma grubu sunmak değil, aileniz ve sevdiklerinizle en güzel anıları paylaşacağınız sıcak ve lüks bir yaşam alanı yaratmaktır.",
    contact_eyebrow: "Bize Ulaşın",
    contact_title: "Sorularınız İçin Bize Ulaşın, Size Yardımcı Olmaktan Mutluluk Duyarız",
    contact_lead: "Koltuk modellerimiz, kumaş kartelalarımız ve özel ölçü talepleriniz için bize ulaşın.",
    contact_address_title: "Adresimiz",
    contact_address_val: "Ertuğrulgazi Cad. Mobilya Vadisi, İnegöl / Bursa",
    contact_phone_title: "Telefon & WhatsApp",
    contact_hours_title: "Çalışma Saatleri",
    contact_hours_val: "Pazartesi – Cumartesi: 09:00 – 19:30 | Pazar: 11:00 – 18:00",
    contact_form_title: "Bize Mesaj Gönderin",
    contact_form_name: "Adınız Soyadınız",
    contact_form_phone: "Telefon Numaranız",
    contact_form_message: "Mesajınız / İlgilendiğiniz Ürün",
    contact_form_btn: "WhatsApp Üzerinden Gönder",
    contact_form_note: "Form gönderildiğinde doğrudan WhatsApp açılacak ve mesajınız iletilecektir.",
    footer_tagline: "Bursa İnegöl'de modern tasarım ve usta el işçiliğiyle üretilen lüks koltuk takımları.",
    footer_quick_links: "Hızlı Bağlantılar",
    footer_categories: "Koleksiyonlar",
    footer_contact: "İletişim & Konum",
    footer_rights: "Tüm hakları saklıdır. Bursa / İnegöl."
  },
  en: {
    top_career: "CAREER",
    top_stores: "OUR WORKSHOP",
    top_search: "SEARCH",
    search_placeholder: "Search for models, categories or fabrics... (e.g. Corner, Sofa, Armchair)",
    search_popular: "Popular Searches:",
    search_no_res: "No results found. Please try another search term.",
    nav_home: "HOME",
    nav_collection: "COLLECTION",
    nav_about: "ABOUT US",
    nav_contact: "CONTACT",
    nav_stores: "STORES",
    nav_cat_corner: "Corner Sofa Sets",
    nav_cat_sofa: "Sofa / 3-Seater Couch",
    nav_cat_armchair: "Armchair & Accent Chairs",
    nav_cat_sofabed: "Convertible Sofa Beds",
    nav_cat_chair_pouf: "Chairs & Poufs",
    nav_cat_custom: "Bespoke Custom Design",
    hero_tag: "Messina Home · 2026 Collection & Workshop Tour",
    hero_pause: "Pause",
    hero_play: "Play",
    hero_mute: "Unmute",
    hero_unmute: "Mute",
    hero_scroll: "Scroll to Discover",
    manifesto_eyebrow: "Timeless Design · İnegöl Craftsmanship",
    manifesto_h1: "Where Comfort and Elegance Turn Into Art",
    manifesto_lead: "Contemporary aesthetics rivaling leading luxury European brands; bringing timeless warmth to your living spaces with master craftsmanship and premium woven fabrics from İnegöl.",
    manifesto_btn_explore: "Explore Collection",
    manifesto_btn_wa: "WhatsApp Catalog & Pricing",
    badge_producer_title: "Direct Producer Guarantee",
    badge_producer_desc: "First-class materials crafted directly in our atelier",
    badge_custom_title: "Custom Dimensions & Fabrics",
    badge_custom_desc: "Unlimited texture and color choices tailored to your space",
    badge_delivery_title: "Worldwide & Nationwide Delivery",
    badge_delivery_desc: "Secure packing and direct white-glove delivery",
    sec_collection_eyebrow: "Featured Picks",
    sec_collection_title: "2026 Sofa Collection",
    sec_collection_desc: "Elevate your home with modern silhouettes, ergonomic back support, and easy-to-clean luxury fabrics.",
    sec_cinema_eyebrow: "Cinematic Experience",
    sec_cinema_title: "İnegöl Mastery in Your Living Room",
    sec_cinema_desc: "Elegance in every stitch, pure comfort in every detail. Step inside the Messina Home world.",
    sec_showcase_eyebrow: "Architectural Vision",
    sec_showcase_title: "Bespoke Furniture for Distinct Spaces",
    sec_showcase_desc: "Personalized furniture solutions customized to your room dimensions and refined taste.",
    sec_why_eyebrow: "Why Messina Home?",
    sec_why_title: "The Difference of Craft and Comfort",
    sec_why_desc: "Blending decades of furniture craftsmanship with contemporary architectural sensibilities.",
    cat_corner_title: "Corner Sofa Sets",
    cat_corner_desc: "Spacious seating, modular layouts, and ultra-durable luxury woven textures.",
    cat_sofa_title: "Sofas & Couches",
    cat_sofa_desc: "Sculptural profiles, elevated metal/wood legs, and high-resilience foam comfort.",
    cat_armchair_title: "Accent & Lounge Armchairs",
    cat_armchair_desc: "The perfect companion for your reading nooks and cozy lounging hours.",
    cat_sofabed_title: "Convertible Sofa Beds",
    cat_sofabed_desc: "Effortless opening mechanism, generous hidden storage, and superior sleeping comfort.",
    cat_chair_pouf_title: "Dining Chairs & Poufs",
    cat_chair_pouf_desc: "Ergonomic seating companions that complete your dining and living spaces.",
    cat_custom_title: "Bespoke Custom Furniture",
    cat_custom_desc: "Tailor-made production according to your architectural floor plan and fabric selection.",
    btn_details: "View Details",
    btn_all_products: "View All Products",
    badge_rep: "Showcase Visual",
    about_eyebrow: "About Us",
    about_title: "Comfort Reaching from İnegöl to the World",
    about_lead: "Starting our furniture journey in Bursa İnegöl, we bring together contemporary design lines with timeless artisanal handcraft.",
    about_card1_title: "Kiln-Dried Hornbeam & Premium Foam",
    about_card1_desc: "Kiln-dried solid hornbeam frames paired with 35 DNS HR foam for decades of enduring durability.",
    about_card2_title: "Stain-Resistant Luxury Fabrics",
    about_card2_desc: "Easy-care linens, velvets, boucle, and nubuck textiles in rich bespoke palettes.",
    about_card3_title: "Customized Architectural Solutions",
    about_card3_desc: "Modular tailoring to the exact centimeters of your living room.",
    about_history_title: "Our Story",
    about_history_p1: "Founded in İnegöl, Turkey's furniture capital, we craft each sofa with the meticulous care of an art piece.",
    about_history_p2: "Our purpose is not merely to build furniture, but to create a warm, luxurious haven where you share life's finest memories.",
    contact_eyebrow: "Contact Us",
    contact_title: "Reach Out With Any Questions — We'd Love to Help",
    contact_lead: "Get in touch for our sofa collections, fabric swatches, or custom dimension consultations.",
    contact_address_title: "Our Address",
    contact_address_val: "Ertugrulgazi St. Furniture Valley, Inegol / Bursa, Turkey",
    contact_phone_title: "Phone & WhatsApp",
    contact_hours_title: "Opening Hours",
    contact_hours_val: "Monday – Saturday: 09:00 – 19:30 | Sunday: 11:00 – 18:00",
    contact_form_title: "Send Us a Message",
    contact_form_name: "Full Name",
    contact_form_phone: "Phone Number",
    contact_form_message: "Your Message / Interested Model",
    contact_form_btn: "Send via WhatsApp",
    contact_form_note: "Submitting this form will automatically open WhatsApp with your pre-filled inquiry.",
    footer_tagline: "Luxury sofa collections crafted with modern design and master craftsmanship in Bursa İnegöl.",
    footer_quick_links: "Quick Links",
    footer_categories: "Collections",
    footer_contact: "Contact & Location",
    footer_rights: "All rights reserved. Bursa / İnegöl."
  }
};

var searchableItems = [
  {
    id: "kose-koltuk",
    title_tr: "Köşe Koltuk Grubu",
    title_en: "Corner Sofa Sets",
    desc_tr: "Modüler lüks yerleşim ve geniş oturum",
    desc_en: "Modular luxury layout & spacious seating",
    category_tr: "Koleksiyon",
    category_en: "Collection",
    url: "urunler.html#kose-koltuk",
    img: "images/cat-kose-koltuk.jpg",
    tags: ["köşe", "l koltuk", "corner", "modüler", "kanepe", "oturma grubu", "sectionals"]
  },
  {
    id: "kanepe",
    title_tr: "Kanepe / Üçlü Koltuk",
    title_en: "Sofas & Couches",
    desc_tr: "Zarif siluet ve birinci sınıf sünger konforu",
    desc_en: "Sculptural profile and premium foam comfort",
    category_tr: "Koleksiyon",
    category_en: "Collection",
    url: "urunler.html#kanepe",
    img: "images/cat-kanepe.jpg",
    tags: ["kanepe", "üçlü", "sofa", "couch", "koltuk", "living room"]
  },
  {
    id: "berjer",
    title_tr: "Berjer Koltuk",
    title_en: "Accent Armchairs",
    desc_tr: "Okuma ve dinlenme köşeleri için şık berjer",
    desc_en: "Elegant armchairs for reading and lounge spaces",
    category_tr: "Koleksiyon",
    category_en: "Collection",
    url: "urunler.html#berjer",
    img: "images/cat-berjer.jpg",
    tags: ["berjer", "tekli", "armchair", "lounge", "dinlenme"]
  },
  {
    id: "cekyat",
    title_tr: "Yataklı Koltuk (Çekyat)",
    title_en: "Convertible Sofa Beds",
    desc_tr: "Kolay açılır mekanizma ve ekstra sandıklı depolama",
    desc_en: "Easy fold-out mechanism with hidden storage",
    category_tr: "Koleksiyon",
    category_en: "Collection",
    url: "urunler.html#cekyat",
    img: "images/cat-cekyat.jpg",
    tags: ["çekyat", "yataklı", "sofabed", "misafir", "sandıklı"]
  },
  {
    id: "sandalye-puf",
    title_tr: "Sandalye & Puf",
    title_en: "Chairs & Poufs",
    desc_tr: "Yemek odası ve salon tamamlayıcı formlar",
    desc_en: "Dining chairs & accent poufs",
    category_tr: "Koleksiyon",
    category_en: "Collection",
    url: "urunler.html#sandalye-puf",
    img: "images/cat-sandalye-puf.jpg",
    tags: ["sandalye", "puf", "chair", "pouf", "bench", "oturak"]
  },
  {
    id: "ozel-tasarim",
    title_tr: "Özel Tasarım & Projeler",
    title_en: "Bespoke Custom Furniture",
    desc_tr: "Mekanınıza özel santimetre ölçüsünde üretim",
    desc_en: "Tailor-made production for your architectural project",
    category_tr: "Projeler",
    category_en: "Projects",
    url: "urunler.html#ozel-tasarim",
    img: "images/cat-ozel-tasarim.jpg",
    tags: ["özel", "tasarım", "proje", "mimari", "custom", "bespoke", "inegöl"]
  }
];

document.addEventListener('DOMContentLoaded', function () {

  var currentLang = localStorage.getItem('messina_lang') || 'tr';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'tr';
    currentLang = lang;
    localStorage.setItem('messina_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    updateWhatsAppLinks(lang);
  }

  function updateWhatsAppLinks(lang) {
    var defaultMsg = lang === 'en'
      ? 'Hello, I would like to get information about Messina Home furniture collection, models and pricing.'
      : 'Merhaba, Messina Home koltuk modelleriniz ve fiyatlar hakkında bilgi almak istiyorum.';

    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      var href = link.getAttribute('href');
      var base = href.split('?')[0];
      link.setAttribute('href', base + '?text=' + encodeURIComponent(defaultMsg));
    });
  }

  document.querySelectorAll('.lang-btn, .lang-item').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var targetLang = btn.getAttribute('data-lang');
      if (targetLang === 'tr' || targetLang === 'en') {
        applyLanguage(targetLang);
      } else {
        applyLanguage('en');
      }
    });
  });

  applyLanguage(currentLang);

  var toggleBtn = document.getElementById('nav-toggle-btn');
  var drawer = document.getElementById('mobile-drawer');
  var drawerClose = document.getElementById('mobile-drawer-close');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', function () {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    });
  }
  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', function () {
      drawer.classList.remove('open');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    });
  }
  if (drawer) {
    drawer.querySelectorAll('.mobile-nav-item').forEach(function (a) {
      a.addEventListener('click', function () {
        drawer.classList.remove('open');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var searchModal = document.getElementById('search-modal');
  var openSearchBtn = document.getElementById('open-search-btn');
  var mobileSearchBtn = document.getElementById('mobile-search-btn');
  var closeSearchBtn = document.getElementById('search-modal-close');
  var searchBackdrop = document.getElementById('search-modal-backdrop');
  var searchInput = document.getElementById('site-search-input');
  var searchItemsList = document.getElementById('search-items-list');

  function openSearch() {
    if (!searchModal) return;
    if (drawer) drawer.classList.remove('open');
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    if (searchInput) {
      searchInput.value = '';
      setTimeout(function () { searchInput.focus(); }, 150);
      renderSearchResults('');
    }
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
  }

  if (openSearchBtn) openSearchBtn.addEventListener('click', openSearch);
  if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);

  function renderSearchResults(query) {
    if (!searchItemsList) return;
    query = (query || '').toLowerCase().trim();

    var filtered = searchableItems.filter(function (item) {
      if (!query) return true;
      var titleTR = (item.title_tr || '').toLowerCase();
      var titleEN = (item.title_en || '').toLowerCase();
      var descTR = (item.desc_tr || '').toLowerCase();
      var descEN = (item.desc_en || '').toLowerCase();
      var tagMatch = item.tags && item.tags.some(function (t) { return t.toLowerCase().includes(query); });

      return titleTR.includes(query) || titleEN.includes(query) || descTR.includes(query) || descEN.includes(query) || tagMatch;
    });

    if (filtered.length === 0) {
      searchItemsList.innerHTML = '<p style="color:rgba(255,255,255,0.6); padding:20px 0; text-align:center;">' + (translations[currentLang].search_no_res) + '</p>';
      return;
    }

    var html = '';
    filtered.forEach(function (item) {
      var title = currentLang === 'en' ? item.title_en : item.title_tr;
      var desc = currentLang === 'en' ? item.desc_en : item.desc_tr;
      var cat = currentLang === 'en' ? item.category_en : item.category_tr;

      html += '<a href="' + item.url + '" class="search-item-card" onclick="document.getElementById(\'search-modal\').classList.remove(\'active\')">' +
        '<img src="' + item.img + '" alt="' + title + '" class="search-item-img">' +
        '<div class="search-item-info">' +
          '<h4 class="search-item-title">' + title + '</h4>' +
          '<p class="search-item-desc">' + desc + '</p>' +
        '</div>' +
        '<span class="search-item-badge">' + cat + '</span>' +
      '</a>';
    });

    searchItemsList.innerHTML = html;
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      renderSearchResults(searchInput.value);
    });
  }

  document.querySelectorAll('.quick-tag').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var q = btn.getAttribute('data-query');
      if (searchInput) {
        searchInput.value = q;
        renderSearchResults(q);
      }
    });
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSearch();
      if (drawer) drawer.classList.remove('open');
      var videoModal = document.getElementById('video-modal');
      if (videoModal && videoModal.classList.contains('active')) {
        videoModal.classList.remove('active');
        var player = document.getElementById('modal-video-player');
        if (player) player.pause();
      }
    }
  });


  // ---------- 6. Footer Yılı ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- 7. Hero Görsel Karuseli (Fallback) ----------
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.hero-dot');
  var prevBtn = document.getElementById('hero-prev');
  var nextBtn = document.getElementById('hero-next');
  var current = 0;
  var timer = null;

  function showSlide(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      s.classList.toggle('active', i === current);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  function startSliderTimer() {
    if (reduceMotion || slides.length <= 1) return;
    clearInterval(timer);
    timer = setInterval(function () {
      showSlide(current + 1);
    }, 5500);
  }

  if (slides.length > 1) {
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        showSlide(current - 1);
        startSliderTimer();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        showSlide(current + 1);
        startSliderTimer();
      });
    }
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        showSlide(i);
        startSliderTimer();
      });
    });
    startSliderTimer();
  }

  // ---------- 8. Hero Arka Plan Videosu Yönetimi ----------
  var heroVideo = document.getElementById('hero-bg-video');
  var heroPlayToggle = document.getElementById('hero-play-toggle');
  var heroMuteToggle = document.getElementById('hero-mute-toggle');
  var heroSliderFallback = document.getElementById('hero-slider-fallback');

  if (heroVideo) {
    function handleHeroPlaying() {
      heroVideo.classList.add('is-playing');
      if (heroSliderFallback) heroSliderFallback.style.opacity = '0';
    }
    heroVideo.addEventListener('playing', handleHeroPlaying);
    heroVideo.addEventListener('canplay', function () {
      heroVideo.play().then(handleHeroPlaying).catch(function () {});
    });
    if (!heroVideo.paused || heroVideo.readyState >= 2) handleHeroPlaying();
    heroVideo.addEventListener('error', function () { if (heroSliderFallback) heroSliderFallback.style.opacity = '1'; });

    if (heroPlayToggle) {
      heroPlayToggle.addEventListener('click', function () {
        var isPaused = heroVideo.paused;
        var iconPause = heroPlayToggle.querySelector('.icon-pause');
        var iconPlay = heroPlayToggle.querySelector('.icon-play');
        var label = heroPlayToggle.querySelector('.ctrl-label');
        if (isPaused) {
          heroVideo.play().catch(function(){});
          if (iconPause) iconPause.style.display = 'block';
          if (iconPlay) iconPlay.style.display = 'none';
          if (label) label.textContent = currentLang === 'en' ? 'Pause' : 'Durdur';
          heroPlayToggle.classList.remove('active');
        } else {
          heroVideo.pause();
          if (iconPause) iconPause.style.display = 'none';
          if (iconPlay) iconPlay.style.display = 'block';
          if (label) label.textContent = currentLang === 'en' ? 'Play' : 'Oynat';
          heroPlayToggle.classList.add('active');
        }
      });
    }

    if (heroMuteToggle) {
      heroMuteToggle.addEventListener('click', function () {
        var isMuted = heroVideo.muted;
        var iconMuted = heroMuteToggle.querySelector('.icon-muted');
        var iconUnmuted = heroMuteToggle.querySelector('.icon-unmuted');
        var label = heroMuteToggle.querySelector('.ctrl-label');
        if (isMuted) {
          heroVideo.muted = false;
          if (iconMuted) iconMuted.style.display = 'none';
          if (iconUnmuted) iconUnmuted.style.display = 'block';
          if (label) label.textContent = currentLang === 'en' ? 'Mute' : 'Sesi Kapat';
          heroMuteToggle.classList.add('active');
        } else {
          heroVideo.muted = true;
          if (iconMuted) iconMuted.style.display = 'block';
          if (iconUnmuted) iconUnmuted.style.display = 'none';
          if (label) label.textContent = currentLang === 'en' ? 'Unmute' : 'Ses Aç';
          heroMuteToggle.classList.remove('active');
        }
      });
    }
  }

  // ---------- 9. Video İnceleme Modalı ----------
  var videoModal = document.getElementById('video-modal');
  var videoPlayer = document.getElementById('modal-video-player');
  var modalTitle = document.getElementById('modal-video-title');
  var modalDesc = document.getElementById('modal-video-desc');
  var modalClose = document.getElementById('video-modal-close');
  var modalBackdrop = document.getElementById('video-modal-backdrop');

  function openVideoModal(src, title, desc) {
    if (!videoModal) return;
    if (modalTitle && title) modalTitle.textContent = title;
    if (modalDesc && desc) modalDesc.textContent = desc;

    if (videoPlayer) {
      videoPlayer.src = src;
      videoPlayer.load();
      videoPlayer.play().catch(function () {});
    }

    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.src = '';
    }
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeVideoModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeVideoModal);

  document.querySelectorAll('.video-pill-badge').forEach(function (badge) {
    badge.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var card = badge.closest('.car-card');
      var title = card ? (card.querySelector('h3') ? card.querySelector('h3').textContent : 'Model Video İnceleme') : 'Model Video İnceleme';
      openVideoModal('videos/showroom-video.mp4', title + ' · Video İnceleme', 'Messina Home usta işçiliği ve modüler konfor ayrıntıları.');
    });
  });

  // ---------- 10. Kaydırınca Beliren Öğeler (IntersectionObserver) ----------
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window && !reduceMotion) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    }
  }

  // ---------- 11. İletişim Formu -> WhatsApp Yönlendirmesi ----------
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value.trim();
      var phone = document.getElementById('cf-phone').value.trim();
      var message = document.getElementById('cf-message').value.trim();

      var text = currentLang === 'en'
        ? ('Hello Messina Home, my name is ' + name + '.' + (phone ? ' Phone: ' + phone + '.' : '') + (message ? ' Message: ' + message : ''))
        : ('Merhaba Messina Home, ben ' + name + '.' + (phone ? ' Telefon: ' + phone + '.' : '') + (message ? ' Mesajım: ' + message : ''));

      var waNumber = '905050332457';
      var url = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }

  // ---------- Sayfa Açılış Fade-In ----------
  var reduceMotion = false;
  try {
    reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch(e) {
    reduceMotion = false;
  }
  document.body.classList.add('is-loaded');


  // ---------- Parallax Efekti ----------
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length && !reduceMotion) {
    var isTicking = false;
    function updateParallax() {
      var scrollY = window.pageYOffset || 0;
      var windowH = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var elTop = rect.top + scrollY;
        var elH = rect.height;
        if (scrollY + windowH > elTop && scrollY < elTop + elH + windowH) {
          var factor = parseFloat(el.getAttribute('data-parallax')) || 0.04;
          var relY = (scrollY + windowH * 0.5) - (elTop + elH * 0.5);
          el.style.transform = 'translate3d(0,' + (relY * factor).toFixed(1) + 'px,0)';
        }
      });
      isTicking = false;
    }
    window.addEventListener('scroll', function () {
      if (!isTicking) {
        requestAnimationFrame(updateParallax);
        isTicking = true;
      }
    }, { passive: true });
    updateParallax();
  }

  // ---------- 3D Kart Tilt Efekti ----------
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    document.querySelectorAll('.car-card, .m-badge-item, .feature, .arch-card, .smart-card').forEach(function (card) {
      card.classList.add('tilt-card');
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var rotX = ((e.clientY - rect.top - rect.height / 2) / rect.height * 2) * -3;
        var rotY = ((e.clientX - rect.left - rect.width / 2) / rect.width * 2) * 3;
        card.style.transform = 'perspective(1000px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

});



