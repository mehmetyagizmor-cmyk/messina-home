// ==========================================================================
// Messina Home — Ana Script & Çok Dilli (TR / EN) Yönetim Sistemi
// ==========================================================================

// ---------- 1. Çeviri Sözlüğü (i18n Dictionary) ----------
var translations = {
  tr: {
    // Üst Çubuk & Arama
    top_search: "ARA",
    top_stores: "ATÖLYEMİZ",
    search_placeholder: "Model, kumaş veya renk arayın... (Örn: Yıldız, Nirvana, Versace, Golf, Viyana)",
    search_popular: "Popüler Modeller:",
    search_no_res: "Sonuç bulunamadı. Lütfen model adı veya kategori deneyin.",

    // Navigasyon
    nav_home: "ANA SAYFA",
    nav_collection: "KOLEKSİYON",
    nav_about: "HAKKIMIZDA",
    nav_contact: "İLETİŞİM",
    nav_model_yildiz: "Yıldız Koltuk Takımı",
    nav_model_nirvana: "Nirvana Koltuk Takımı",
    nav_model_golf: "Golf Koltuk Takımı",
    nav_model_versace: "Versace Koltuk Takımı",
    nav_model_viyana: "Viyana Koltuk Takımı",
    nav_wa_btn: "WhatsApp İletişim",

    // Hero
    hero_pause: "Durdur",
    hero_play: "Oynat",
    hero_mute: "Ses Aç",
    hero_unmute: "Sesi Kapat",
    hero_scroll: "Keşfetmek İçin Kaydırın",

    // Manifesto
    manifesto_eyebrow: "Zamansız Tasarım · İnegöl Zanaatı",
    manifesto_h1: "Konfor ve Zarafetin Sanata Dönüştüğü Yer",
    manifesto_lead: "Modern estetik, birinci sınıf dokuma kumaşlar ve İnegöl'ün usta el işçiliğiyle hazırlanan 2026 koltuk takımı koleksiyonumuz yaşam alanlarınıza değer katıyor.",
    manifesto_btn_explore: "Koleksiyonu Keşfet",
    manifesto_btn_wa: "WhatsApp Katalog & Fiyat",

    // Rozetler
    badge_producer_title: "İnegöl Üretici Güvencesi",
    badge_producer_desc: "Doğrudan atölyeden birinci sınıf malzeme",
    badge_custom_title: "Kişiye Özel Ölçü & Kumaş",
    badge_custom_desc: "Mekanınıza göre sınırsız renk ve doku",
    badge_delivery_title: "Türkiye Geneli Teslimat",
    badge_delivery_desc: "Güvenli paketleme ve eve teslim kurulum",

    // Öne Çıkanlar / Karusel
    sec_collection_eyebrow: "2026 Koleksiyonu",
    sec_collection_title: "Öne Çıkan Koltuk Takımlarımız",
    btn_view_model: "Modeli İncele",
    card_yildiz_title: "YILDIZ Koltuk Takımı",
    card_yildiz_desc: "Doğal ahşap kol detayları ve yatak mekanizması.",
    card_nirvana_title: "NIRVANA Koltuk Takımı",
    card_nirvana_desc: "Kapitone chester el işçiliği ve nubuk doku.",
    card_golf_title: "GOLF Koltuk Takımı",
    card_golf_desc: "Kavisli kol ergonomisi ve yüksek sırt berjer.",
    card_versace_title: "VERSACE Koltuk Takımı",
    card_versace_desc: "Altın metal ayaklar ve lüks kadife dikişler.",
    card_viyana_title: "VIYANA Koltuk Takımı",
    card_viyana_desc: "Gold çerçeveli zarif hatlar ve şık tasarım.",

    // Neden Biz
    sec_why_eyebrow: "Neden Messina Home?",
    sec_why_title: "Kalite ve Güveni Bir Arada Sunuyoruz",
    why_1_title: "Kaliteli Malzeme",
    why_1_desc: "Fırınlanmış masif gürgen ağacı ve 35 DNS HR sünger ile üretilen dayanıklı iskelet yapısı.",
    why_2_title: "Özenli Seçki",
    why_2_desc: "Her modelde konfor, silinebilir lüks kumaş dokusu ve zamansız estetik.",
    why_3_title: "Bursa İnegöl'de",
    why_3_desc: "Mobilyanın kalbinde doğrudan üretici avantajı; ürünleri yerinde inceleyebilirsiniz.",
    why_4_title: "Kolay İletişim",
    why_4_desc: "WhatsApp üzerinden hızlıca fiyat alabilir, kumaş ve ölçü taleplerinizi iletebilirsiniz.",

    // CTA Bantları
    cta_eyebrow: "Bize Ulaşın",
    cta_title: "Hayalinizdeki Koltuğu Birlikte Bulalım",
    cta_lead: "Sorularınız için WhatsApp üzerinden yazabilir ya da İnegöl'deki mağazamızı ziyaret edebilirsiniz.",
    btn_wa_write: "WhatsApp'tan Yazın",
    btn_contact_info: "İletişim Bilgileri",
    btn_visit_workshop: "Atölyemizi Ziyaret Edin",

    // Ürünler Sayfası
    prod_hero_eyebrow: "2026 Koleksiyonu",
    prod_hero_title: "Koltuk Takımı Koleksiyonumuz",
    prod_zoom_hint: "Büyüt",
    prod_specs_title: "Teknik Ölçüler (Genişlik / Derinlik / Yükseklik)",
    spec_3str_label: "3'lü Koltuk (3 str)",
    spec_bergere_label: "Berjer (Bergere)",
    spec_feat_bed: "Açılır Yatak Mekanizması",
    spec_feat_wood_arm: "Masif Ahşap Kolçak",
    spec_feat_foam: "35 DNS HR Sünger",
    spec_feat_clean_fabric: "Silinebilir Kumaş",
    spec_feat_chester: "Kapitone Chester İşçilik",
    spec_feat_back_bed: "Geriye Açılır Yatak Sistemi",
    spec_feat_colors_taba: "Lüks Hardal & Taba Renkler",
    spec_feat_hornbeam: "Fırınlanmış Masif Gürgen",
    spec_feat_curved_arm: "Kavisli Modern Kol Tasarımı",
    spec_feat_high_back: "Yüksek Sırtlı Berjer Konforu",
    spec_feat_dual_color: "Çift Renk Kombin Seçeneği",
    spec_feat_sofabed_opt: "Yataklı Mekanizma Opsiyonu",
    spec_feat_gold_legs: "Pirinç / Altın Metal Ayaklar",
    spec_feat_velvet: "Lüks Kadife & İpek Doku",
    spec_feat_wide_bed: "Geniş Açılır Yatak Alanı",
    spec_feat_versace_buckle: "Özel Versace Toka Detayları",
    spec_feat_gold_frame: "Altın Çerçeve & Ayak Tasarımı",
    spec_feat_contrast: "Kontrast Siyah / Krem Şıklığı",
    spec_feat_sculpt_bergere: "Heykelsi Özel Berjer Sırtı",
    prod_btn_wa_order: "WhatsApp'tan Fiyat & Sipariş",
    prod_yildiz_desc: "Doğal masif ahşap kol ve ayak detaylarıyla zenginleştirilmiş, ergonomik sırt minderleri ve yatak fonksiyonu ile modern yaşam alanları için mükemmel konfor.",
    prod_nirvana_desc: "Zengin kapitone chester el dikişleri, asil nubuk ve deri dokulu kumaş kartelası ve lüks ahşap baza detaylarıyla salonunuza prestij katan ayrıcalıklı bir takım.",
    prod_golf_desc: "Dikey boğumlu modern dikiş yapısı, kavisli ergonomik kol formu ve yüksek sırtlı konfor berjeri ile hem estetik hem de eşsiz bir oturum ergonomisi sunar.",
    prod_versace_desc: "Işıltılı altın metal ayaklar, lüks mürdüm ve pudra kadife dokular, zengin biye dikişleri ve derin oturum rahatlığıyla saray zarafetini modern salonlara taşıyor.",
    prod_viyana_desc: "Siyah ve krem rengin kusursuz altın bordürlerle dansı. Heykelsi berjer sırt formu, özel tasarım dikey nervür dikişler ve yatak olabilme fonksiyonu.",
    prod_custom_eyebrow: "Özel Ölçü & Kumaş Seçenekleri",
    prod_custom_title: "Evinize ve Zevkinize Özel Üretim",
    prod_custom_lead: "Tüm modellerimizde dilediğiniz renk, kumaş dokusu ve salonunuza uygun ölçü değişiklikleri yapılmaktadır.",

    // Hakkımızda Sayfası
    about_hero_eyebrow: "Bizi Tanıyın",
    about_hero_title: "Hakkımızda",
    about_story_eyebrow: "Hikayemiz",
    about_story_title: "Konforu ve Zarafeti Evinize Taşıyoruz",
    about_story_p1: "Messina Home olarak, mobilyanın başkenti Bursa İnegöl'de oturma alanlarınıza değer katan lüks koltuk takımları üretiyoruz.",
    about_story_p2: "Yıldız, Nirvana, Golf, Versace ve Viyana gibi özgün koleksiyonlarımızla; fırınlanmış masif gürgen ağacı iskelet, 35 DNS HR yüksek konforlu süngerler ve kolay temizlenebilir silinebilir kumaşları titizlikle bir araya getiriyoruz.",
    about_val_eyebrow: "Değerlerimiz",
    about_val_title: "Bizi Farklı Kılan Nedir?",
    val_1_title: "Güvenilirlik & Zanaat",
    val_1_desc: "Söz verdiğimiz kalitede ürünü, usta el işçiliği ve birinci sınıf malzeme güvencesiyle sunarız.",
    val_2_title: "Müşteri Odaklılık",
    val_2_desc: "Her müşterimizin yaşam alanına özel ölçü, renk kombinasyonu ve modüler çözümler üretiriz.",
    val_3_title: "Kalite Kontrolü",
    val_3_desc: "Atölyemizden çıkan her iskeleti, dikişi, süngeri ve mekanizmayı titizlikle test ederiz.",
    badge_atelier_label: "İnegöl Atölyesi",

    // İletişim Sayfası
    contact_page_eyebrow: "Bize Ulaşın",
    contact_page_title: "İletişim ve Atölye Bilgilerimiz",
    contact_info_eyebrow: "İletişim Bilgileri",
    contact_info_title: "Size Yardımcı Olmaktan Mutluluk Duyarız",
    contact_info_desc: "Modellerimiz, teknik ölçüler, özel kumaş seçenekleri veya fiyat teklifi almak için dilediğiniz zaman bize ulaşabilirsiniz.",
    contact_phone_title: "WhatsApp / Telefon",
    contact_address_title: "Atölye & Mağaza Adresi",
    contact_address_val: "Mahmudiye Mah. 27. Mobilya Sk. No: 60 İnegöl / Bursa",
    contact_hours_title: "Çalışma Saatleri",
    contact_hours_val: "Pazartesi – Cuma: 08:00 – 19:00",
    contact_social_title: "Instagram & E-posta",
    contact_form_eyebrow: "Mesaj Gönderin",
    contact_form_title: "Bize Yazın",
    contact_form_desc: "Formu doldurduğunuzda mesajınız WhatsApp üzerinden doğrudan bize iletilecektir.",
    form_label_name: "Ad Soyad",
    form_placeholder_name: "Adınız Soyadınız",
    form_label_phone: "Telefon",
    form_placeholder_phone: "05xx xxx xx xx",
    form_label_msg: "Mesajınız / İlgilendiğiniz Model",
    form_placeholder_msg: "Yıldız, Nirvana, Golf, Versace veya Viyana modelleri ve özel ölçü taleplerinizi yazabilirsiniz...",
    form_btn_send: "WhatsApp ile Gönder",
    form_note: "Gönder butonuna bastığınızda WhatsApp açılır ve mesajınız hazır şekilde iletilir.",

    // Footer
    footer_tagline: "Bursa İnegöl'de modern tasarım ve usta el işçiliğiyle üretilen lüks koltuk takımları.",
    footer_quick_links: "Koleksiyonlar",
    footer_contact_title: "İletişim & Adres",
    footer_rights: "Tüm hakları saklıdır. Bursa / İnegöl."
  },
  en: {
    // Top Bar & Search
    top_search: "SEARCH",
    top_stores: "OUR WORKSHOP",
    search_placeholder: "Search for models, fabrics or colors... (e.g. Yildiz, Nirvana, Versace, Golf, Viyana)",
    search_popular: "Popular Models:",
    search_no_res: "No results found. Please try another model name.",

    // Navigation
    nav_home: "HOME",
    nav_collection: "COLLECTION",
    nav_about: "ABOUT US",
    nav_contact: "CONTACT",
    nav_model_yildiz: "Yildiz Sofa Set",
    nav_model_nirvana: "Nirvana Sofa Set",
    nav_model_golf: "Golf Sofa Set",
    nav_model_versace: "Versace Sofa Set",
    nav_model_viyana: "Viyana Sofa Set",
    nav_wa_btn: "WhatsApp Contact",

    // Hero
    hero_pause: "Pause",
    hero_play: "Play",
    hero_mute: "Unmute",
    hero_unmute: "Mute",
    hero_scroll: "Scroll to Discover",

    // Manifesto
    manifesto_eyebrow: "Timeless Design · İnegöl Craftsmanship",
    manifesto_h1: "Where Comfort and Elegance Turn Into Art",
    manifesto_lead: "Elevate your living spaces with our 2026 luxury sofa set collection, crafted with contemporary aesthetics, premium upholstery fabrics, and master handcraft in İnegöl.",
    manifesto_btn_explore: "Explore Collection",
    manifesto_btn_wa: "WhatsApp Catalog & Pricing",

    // Badges
    badge_producer_title: "Direct Producer Guarantee",
    badge_producer_desc: "First-class materials crafted directly in our atelier",
    badge_custom_title: "Custom Dimensions & Fabrics",
    badge_custom_desc: "Unlimited texture and color choices tailored to your space",
    badge_delivery_title: "Worldwide & Nationwide Delivery",
    badge_delivery_desc: "Secure packing and direct white-glove delivery",

    // Featured / Carousel
    sec_collection_eyebrow: "2026 Collection",
    sec_collection_title: "Featured Luxury Sofa Sets",
    btn_view_model: "View Model",
    card_yildiz_title: "YILDIZ Sofa Set",
    card_yildiz_desc: "Natural wood arm accents & convertible bed mechanism.",
    card_nirvana_title: "NIRVANA Sofa Set",
    card_nirvana_desc: "Tufted chester craftsmanship & luxury nubuck texture.",
    card_golf_title: "GOLF Sofa Set",
    card_golf_desc: "Curved arm ergonomics & high-back armchair comfort.",
    card_versace_title: "VERSACE Sofa Set",
    card_versace_desc: "Gold metal legs & royal plum velvet stitching.",
    card_viyana_title: "VIYANA Sofa Set",
    card_viyana_desc: "Gold-framed contours & black/cream contrast style.",

    // Why Us
    sec_why_eyebrow: "Why Messina Home?",
    sec_why_title: "Delivering Quality & Trust Together",
    why_1_title: "Premium Materials",
    why_1_desc: "Built with kiln-dried solid hornbeam frames and 35 DNS HR high-resilience foam for lasting endurance.",
    why_2_title: "Curated Selection",
    why_2_desc: "Supreme ergonomics, easy-care luxury fabrics, and timeless aesthetics in every piece.",
    why_3_title: "In Bursa İnegöl",
    why_3_desc: "Direct producer advantages in the heart of Turkish furniture manufacturing.",
    why_4_title: "Easy Communication",
    why_4_desc: "Instant pricing, fabric samples, and bespoke requests via direct WhatsApp line.",

    // CTA Bands
    cta_eyebrow: "Contact Us",
    cta_title: "Let's Find Your Dream Sofa Together",
    cta_lead: "Reach out via WhatsApp or visit our workshop in İnegöl for questions and quotes.",
    btn_wa_write: "Write on WhatsApp",
    btn_contact_info: "Contact Details",
    btn_visit_workshop: "Visit Our Workshop",

    // Products Page
    prod_hero_eyebrow: "2026 Collection",
    prod_hero_title: "Our Sofa Set Collection",
    prod_zoom_hint: "Zoom",
    prod_specs_title: "Technical Dimensions (Width / Depth / Height)",
    spec_3str_label: "3-Seater Sofa (3 str)",
    spec_bergere_label: "Armchair (Bergere)",
    spec_feat_bed: "Convertible Bed Mechanism",
    spec_feat_wood_arm: "Solid Wood Armrest",
    spec_feat_foam: "35 DNS HR Foam",
    spec_feat_clean_fabric: "Easy-Clean Fabric",
    spec_feat_chester: "Tufted Chester Craft",
    spec_feat_back_bed: "Back-Fold Bed System",
    spec_feat_colors_taba: "Mustard & Tan Palette",
    spec_feat_hornbeam: "Kiln-Dried Hornbeam Frame",
    spec_feat_curved_arm: "Curved Modern Arm Design",
    spec_feat_high_back: "High-Back Ergonomic Armchair",
    spec_feat_dual_color: "Dual-Tone Color Option",
    spec_feat_sofabed_opt: "Convertible Bed Option",
    spec_feat_gold_legs: "Brass / Gold Metal Legs",
    spec_feat_velvet: "Luxury Velvet & Silk Texture",
    spec_feat_wide_bed: "Spacious Fold-Out Bed",
    spec_feat_versace_buckle: "Signature Versace Buckle Accents",
    spec_feat_gold_frame: "Gold Frame & Leg Design",
    spec_feat_contrast: "Black & Cream Contrast Elegance",
    spec_feat_sculpt_bergere: "Sculptural Armchair Back",
    prod_btn_wa_order: "Get Price & Order on WhatsApp",
    prod_yildiz_desc: "Enhanced with natural solid wood arm and leg details, ergonomic back cushions, and convertible bed function for supreme modern living comfort.",
    prod_nirvana_desc: "A prestigious set featuring lavish tufted chester hand-stitching, rich nubuck texture, and elegant wood plinth details that command attention.",
    prod_golf_desc: "Combining vertical channel stitching, sculptural curved arms, and a high-back ergonomic lounge armchair for unmatched seating posture.",
    prod_versace_desc: "Gleaming gold metal legs, regal plum & mink velvet textures, and deep seating comfort bringing palace grandeur into contemporary homes.",
    prod_viyana_desc: "The graceful harmony of black and cream accented by gold borders. Sculptural armchair profile and effortless fold-out bed function.",
    prod_custom_eyebrow: "Custom Dimensions & Fabrics",
    prod_custom_title: "Customized Tailoring for Your Home",
    prod_custom_lead: "All models can be customized in terms of color palette, fabric texture, and exact centimeter dimensions.",

    // About Us Page
    about_hero_eyebrow: "About Us",
    about_hero_title: "About Messina Home",
    about_story_eyebrow: "Our Story",
    about_story_title: "Bringing Comfort and Elegance into Your Home",
    about_story_p1: "At Messina Home, based in Bursa İnegöl — Turkey's furniture capital — we manufacture luxury sofa sets that redefine living spaces.",
    about_story_p2: "Across our original collections like Yildiz, Nirvana, Golf, Versace, and Viyana, we meticulously combine kiln-dried solid hornbeam frames, 35 DNS HR high-resilience foam, and easy-clean stain-resistant fabrics.",
    about_val_eyebrow: "Our Values",
    about_val_title: "What Sets Us Apart?",
    val_1_title: "Trust & Craftsmanship",
    val_1_desc: "We deliver guaranteed quality through master artisanal handcraft and certified first-class materials.",
    val_2_title: "Client-Centric Approach",
    val_2_desc: "We engineer bespoke dimensions, custom upholstery combinations, and modular setups for every client.",
    val_3_title: "Rigorous Quality Control",
    val_3_desc: "Every single timber frame, seam, cushion, and bed mechanism is thoroughly tested before leaving our atelier.",
    badge_atelier_label: "Inegol Workshop",

    // Contact Page
    contact_page_eyebrow: "Contact Us",
    contact_page_title: "Contact & Workshop Information",
    contact_info_eyebrow: "Contact Details",
    contact_info_title: "We Would Love to Assist You",
    contact_info_desc: "Get in touch with us anytime for sofa set models, technical measurements, custom upholstery swatches, or price quotations.",
    contact_phone_title: "WhatsApp / Phone",
    contact_address_title: "Atelier & Showroom Address",
    contact_address_val: "Mahmudiye Dist. 27th Mobilya St. No: 60 Inegol / Bursa, Turkey",
    contact_hours_title: "Opening Hours",
    contact_hours_val: "Monday – Friday: 08:00 – 19:00",
    contact_social_title: "Instagram & Email",
    contact_form_eyebrow: "Send a Message",
    contact_form_title: "Write to Us",
    contact_form_desc: "Fill in the form to directly launch WhatsApp with your pre-filled inquiry.",
    form_label_name: "Full Name",
    form_placeholder_name: "Your Full Name",
    form_label_phone: "Phone Number",
    form_placeholder_phone: "05xx xxx xx xx",
    form_label_msg: "Your Message / Model of Interest",
    form_placeholder_msg: "Inquire about Yildiz, Nirvana, Golf, Versace, or Viyana models and custom dimensions...",
    form_btn_send: "Send via WhatsApp",
    form_note: "Clicking submit will open WhatsApp with your message ready to send.",

    // Footer
    footer_tagline: "Luxury sofa sets crafted with modern design and master craftsmanship in Bursa İnegöl, Turkey.",
    footer_quick_links: "Collections",
    footer_contact_title: "Contact & Address",
    footer_rights: "All rights reserved. Bursa / İnegöl."
  }
};

// ---------- 2. Arama Verileri (5 Gerçek Model) ----------
var searchableItems = [
  {
    id: "yildiz",
    title_tr: "YILDIZ Koltuk Takımı",
    title_en: "YILDIZ Sofa Set",
    desc_tr: "Doğal ahşap kol detayları, yatak mekanizması (3'lü: 230×95×70 cm)",
    desc_en: "Natural wood arm details with bed mechanism (3-str: 230×95×70 cm)",
    category_tr: "Koltuk Takımı",
    category_en: "Sofa Set",
    url: "urunler.html#yildiz",
    img: "images/models/yildiz-1.jpg",
    tags: ["yıldız", "yildiz", "koltuk takımı", "yataklı", "ahşap", "sofa set", "3lü", "berjer"]
  },
  {
    id: "nirvana",
    title_tr: "NIRVANA Koltuk Takımı",
    title_en: "NIRVANA Sofa Set",
    desc_tr: "Kapitone chester el işçiliği ve nubuk doku (3'lü: 230×97×70 cm)",
    desc_en: "Chester tufted craftsmanship & nubuck texture (3-str: 230×97×70 cm)",
    category_tr: "Koltuk Takımı",
    category_en: "Sofa Set",
    url: "urunler.html#nirvana",
    img: "images/models/nirvana-1.jpg",
    tags: ["nirvana", "kapitone", "chester", "nubuk", "koltuk takımı", "taba", "hardal", "sofa"]
  },
  {
    id: "golf",
    title_tr: "GOLF Koltuk Takımı",
    title_en: "GOLF Sofa Set",
    desc_tr: "Dikey kanal dikişler ve yüksek sırtlı berjer konforu (3'lü: 226×95×70 cm)",
    desc_en: "Vertical channel stitching and high-back armchair (3-str: 226×95×70 cm)",
    category_tr: "Koltuk Takımı",
    category_en: "Sofa Set",
    url: "urunler.html#golf",
    img: "images/models/golf-1.jpg",
    tags: ["golf", "kiremit", "vizon", "koltuk", "berjer", "yüksek sırt", "sofa"]
  },
  {
    id: "versace",
    title_tr: "VERSACE Koltuk Takımı",
    title_en: "VERSACE Sofa Set",
    desc_tr: "Altın metal ayaklar, lüks mürdüm kadife kumaş ve yatak (3'lü: 230×97×70 cm)",
    desc_en: "Gold metal legs, luxury plum velvet & convertible bed (3-str: 230×97×70 cm)",
    category_tr: "Koltuk Takımı",
    category_en: "Sofa Set",
    url: "urunler.html#versace",
    img: "images/models/versace-1.jpg",
    tags: ["versace", "gold", "altın", "mürdüm", "kadife", "koltuk takımı", "lüks"]
  },
  {
    id: "viyana",
    title_tr: "VIYANA Koltuk Takımı",
    title_en: "VIYANA Sofa Set",
    desc_tr: "Gold metal çerçeve, siyah/krem kontrast şıklığı (3'lü: 228×95×70 cm)",
    desc_en: "Gold metal framing, black & cream contrast elegance (3-str: 228×95×70 cm)",
    category_tr: "Koltuk Takımı",
    category_en: "Sofa Set",
    url: "urunler.html#viyana",
    img: "images/models/viyana-1.jpg",
    tags: ["viyana", "vienna", "siyah", "krem", "gold", "koltuk takımı", "tasarım berjer"]
  }
];

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('js-enabled');
  document.body.classList.add('is-loaded');

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
      ? 'Hello, I would like to get information about Messina Home sofa collections, models and pricing.'
      : 'Merhaba, Messina Home koltuk modelleriniz ve fiyatlar hakkında bilgi almak istiyorum.';

    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href.includes('text=')) {
        var base = href.split('?')[0];
        link.setAttribute('href', base + '?text=' + encodeURIComponent(defaultMsg));
      }
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

  // ---------- Mobil Menü Çekmecesi ----------
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

  // ---------- Arama Modalı ----------
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
      var lightbox = document.getElementById('image-lightbox-modal');
      if (lightbox && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // ---------- Footer Yılı ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Karusel Kaydırma ----------
  var carBtnPrev = document.querySelector('.car-btn[data-dir="-1"]');
  var carBtnNext = document.querySelector('.car-btn[data-dir="1"]');
  var carTrack = document.querySelector('.carousel-track');

  if (carBtnPrev && carTrack) {
    carBtnPrev.addEventListener('click', function() {
      carTrack.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }
  if (carBtnNext && carTrack) {
    carBtnNext.addEventListener('click', function() {
      carTrack.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

  // ---------- Kaydırınca Beliren Öğeler (IntersectionObserver) ----------
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    }
  }

  // ---------- İletişim Formu -> WhatsApp Yönlendirmesi ----------
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value.trim();
      var phone = document.getElementById('cf-phone') ? document.getElementById('cf-phone').value.trim() : '';
      var message = document.getElementById('cf-message').value.trim();

      var text = currentLang === 'en'
        ? ('Hello Messina Home, my name is ' + name + '.' + (phone ? ' Phone: ' + phone + '.' : '') + (message ? ' Message: ' + message : ''))
        : ('Merhaba Messina Home, ben ' + name + '.' + (phone ? ' Telefon: ' + phone + '.' : '') + (message ? ' Mesajım: ' + message : ''));

      var waNumber = '905464379275';
      var url = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }

  // ---------- Hero Slider Otomatik Döngü ----------
  var heroSlides = document.querySelectorAll('.hero-slide');
  var heroCurrentIndex = 0;
  var heroSlideTimer = null;

  function showHeroSlide(index) {
    if (!heroSlides.length) return;
    heroCurrentIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach(function (s, i) {
      s.classList.toggle('active', i === heroCurrentIndex);
    });
  }

  function startHeroSlideTimer() {
    if (heroSlides.length <= 1) return;
    clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(function () {
      showHeroSlide(heroCurrentIndex + 1);
    }, 5500);
  }

  if (heroSlides.length > 1) {
    startHeroSlideTimer();
  }

});
