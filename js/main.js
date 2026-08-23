// Messina Home — site scripti
document.addEventListener('DOMContentLoaded', function () {

  // Mobil menü aç/kapat
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Footer yılı
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Karusel ok butonları (Öne Çıkan Kategoriler)
  document.querySelectorAll('.car-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = document.getElementById(btn.dataset.target);
      if (!track) return;
      var card = track.querySelector('.car-card');
      var step = (card ? card.offsetWidth : 340) + 24;
      var dir = parseInt(btn.dataset.dir, 10) || 1;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    });
  });

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero görsel karuseli — gelişmiş kontroller ve otomatik geçiş
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

  // Saloni Tarzı Video Kontrolleri & Fallback Yönetimi
  var videoEl = document.getElementById('hero-bg-video');
  var playToggle = document.getElementById('hero-play-toggle');
  var muteToggle = document.getElementById('hero-mute-toggle');
  var sliderFallback = document.getElementById('hero-slider-fallback');

  if (videoEl) {
    videoEl.addEventListener('playing', function () {
      videoEl.classList.add('is-playing');
      if (sliderFallback) sliderFallback.style.opacity = '0';
    });

    videoEl.addEventListener('error', function () {
      if (sliderFallback) sliderFallback.style.opacity = '1';
    });

    if (playToggle) {
      playToggle.addEventListener('click', function () {
        var isPaused = videoEl.paused;
        var iconPause = playToggle.querySelector('.icon-pause');
        var iconPlay = playToggle.querySelector('.icon-play');
        var label = playToggle.querySelector('.ctrl-label');

        if (isPaused) {
          videoEl.play();
          if (iconPause) iconPause.style.display = 'block';
          if (iconPlay) iconPlay.style.display = 'none';
          if (label) label.textContent = 'Durdur';
          playToggle.classList.remove('active');
        } else {
          videoEl.pause();
          if (iconPause) iconPause.style.display = 'none';
          if (iconPlay) iconPlay.style.display = 'block';
          if (label) label.textContent = 'Oynat';
          playToggle.classList.add('active');
        }
      });
    }

    if (muteToggle) {
      muteToggle.addEventListener('click', function () {
        var isMuted = videoEl.muted;
        var iconMuted = muteToggle.querySelector('.icon-muted');
        var iconUnmuted = muteToggle.querySelector('.icon-unmuted');
        var label = muteToggle.querySelector('.ctrl-label');

        if (isMuted) {
          videoEl.muted = false;
          if (iconMuted) iconMuted.style.display = 'none';
          if (iconUnmuted) iconUnmuted.style.display = 'block';
          if (label) label.textContent = 'Sesi Kapat';
          muteToggle.classList.add('active');
        } else {
          videoEl.muted = true;
          if (iconMuted) iconMuted.style.display = 'block';
          if (iconUnmuted) iconUnmuted.style.display = 'none';
          if (label) label.textContent = 'Ses Aç';
          muteToggle.classList.remove('active');
        }
      });
    }
  }

  // Kaydırınca beliren öğeler
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
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    }
  }

  // İletişim formu -> WhatsApp'a yönlendirme
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value.trim();
      var phone = document.getElementById('cf-phone').value.trim();
      var message = document.getElementById('cf-message').value.trim();

      var text = 'Merhaba Messina Home, ben ' + name + '.';
      if (phone) text += ' Telefon: ' + phone + '.';
      if (message) text += ' Mesajım: ' + message;

      var waNumber = '905050332457';
      var url = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }
});
