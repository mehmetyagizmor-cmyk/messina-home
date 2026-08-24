// Messina Home — Ana Script Dosyası (Saloni Mobilya Referanslı Video & Sinema Yönetimi)
document.addEventListener('DOMContentLoaded', function () {

  // ---------- 1. Mobil Menü Aç / Kapat ----------
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

  // ---------- 2. Footer Yılı ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- 3. Karusel Ok Butonları ----------
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

  // ---------- 4. Hero Görsel Karuseli (Fallback) ----------
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

  // ---------- 5. Hero Arka Plan Videosu Yönetimi ----------
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

    if (!heroVideo.paused || heroVideo.readyState >= 2) {
      handleHeroPlaying();
    }

    heroVideo.addEventListener('error', function () {
      if (heroSliderFallback) heroSliderFallback.style.opacity = '1';
    });

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
          if (label) label.textContent = 'Durdur';
          heroPlayToggle.classList.remove('active');
        } else {
          heroVideo.pause();
          if (iconPause) iconPause.style.display = 'none';
          if (iconPlay) iconPlay.style.display = 'block';
          if (label) label.textContent = 'Oynat';
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
          if (label) label.textContent = 'Sesi Kapat';
          heroMuteToggle.classList.add('active');
        } else {
          heroVideo.muted = true;
          if (iconMuted) iconMuted.style.display = 'block';
          if (iconUnmuted) iconUnmuted.style.display = 'none';
          if (label) label.textContent = 'Ses Aç';
          heroMuteToggle.classList.remove('active');
        }
      });
    }
  }

  // ---------- 6. Zaman Biçimlendirme Yardımcısı (mm:ss) ----------
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  // ---------- 7. Messina Sinema — İnteraktif Video Galerisi ----------
  var cinemaVideo = document.getElementById('cinema-main-video');
  var cinemaFrame = document.getElementById('cinema-frame');
  var cinemaOverlay = document.getElementById('cinema-overlay');
  var cinemaBigPlay = document.getElementById('cinema-big-play');
  var cinemaBadge = document.getElementById('cinema-badge');
  var cinemaDurationText = document.getElementById('cinema-duration-text');
  var cinemaCurrentTitle = document.getElementById('cinema-current-title');
  var cinemaCurrentDesc = document.getElementById('cinema-current-desc');
  var cinemaPosterFallback = document.getElementById('cinema-poster-fallback');
  var cinemaPlayLabel = document.getElementById('cinema-play-label');

  // Alt kontrol çubuğu öğeleri
  var cinemaControlsBar = document.getElementById('cinema-controls-bar');
  var cinemaPlayPauseBtn = document.getElementById('cinema-play-pause-btn');
  var cinemaProgressWrapper = document.getElementById('cinema-progress-wrapper');
  var cinemaProgressFill = document.getElementById('cinema-progress-fill');
  var cinemaTimeCurrent = document.getElementById('cinema-time-current');
  var cinemaTimeTotal = document.getElementById('cinema-time-total');
  var cinemaAudioBtn = document.getElementById('cinema-audio-btn');
  var cinemaFullscreenBtn = document.getElementById('cinema-fullscreen-btn');

  var cinemaTabs = document.querySelectorAll('.cinema-tab-btn');

  function updateCinemaPlayState(isPlaying) {
    if (!cinemaBigPlay || !cinemaControlsBar) return;
    var bigPlayIcon = cinemaBigPlay.querySelector('.icon-play');
    var bigPauseIcon = cinemaBigPlay.querySelector('.icon-pause');
    var ctrlPlayIcon = cinemaPlayPauseBtn ? cinemaPlayPauseBtn.querySelector('.icon-ctrl-play') : null;
    var ctrlPauseIcon = cinemaPlayPauseBtn ? cinemaPlayPauseBtn.querySelector('.icon-ctrl-pause') : null;

    if (isPlaying) {
      if (bigPlayIcon) bigPlayIcon.style.display = 'none';
      if (bigPauseIcon) bigPauseIcon.style.display = 'block';
      if (ctrlPlayIcon) ctrlPlayIcon.style.display = 'none';
      if (ctrlPauseIcon) ctrlPauseIcon.style.display = 'block';
      if (cinemaPlayLabel) cinemaPlayLabel.textContent = 'Videoyu Duraklat';
      if (cinemaOverlay) cinemaOverlay.classList.add('is-hidden');
      if (cinemaPosterFallback) cinemaPosterFallback.classList.remove('visible');
      cinemaControlsBar.classList.add('is-active');
    } else {
      if (bigPlayIcon) bigPlayIcon.style.display = 'block';
      if (bigPauseIcon) bigPauseIcon.style.display = 'none';
      if (ctrlPlayIcon) ctrlPlayIcon.style.display = 'block';
      if (ctrlPauseIcon) ctrlPauseIcon.style.display = 'none';
      if (cinemaPlayLabel) cinemaPlayLabel.textContent = 'Tanıtım Videosunu İzle';
      if (cinemaOverlay) cinemaOverlay.classList.remove('is-hidden');
    }
  }

  if (cinemaVideo) {
    cinemaVideo.addEventListener('play', function () { updateCinemaPlayState(true); });
    cinemaVideo.addEventListener('pause', function () { updateCinemaPlayState(false); });
    cinemaVideo.addEventListener('playing', function () { updateCinemaPlayState(true); });
    cinemaVideo.addEventListener('canplay', function () {
      if (cinemaVideo.paused) {
        cinemaVideo.play().then(function(){ updateCinemaPlayState(true); }).catch(function(){});
      }
    });

    if (!cinemaVideo.paused || cinemaVideo.readyState >= 2) {
      updateCinemaPlayState(true);
    }

    cinemaVideo.addEventListener('ended', function () {
      updateCinemaPlayState(false);
      if (cinemaProgressFill) cinemaProgressFill.style.width = '0%';
    });

    cinemaVideo.addEventListener('timeupdate', function () {
      if (cinemaVideo.duration) {
        var pct = (cinemaVideo.currentTime / cinemaVideo.duration) * 100;
        if (cinemaProgressFill) cinemaProgressFill.style.width = pct + '%';
        if (cinemaTimeCurrent) cinemaTimeCurrent.textContent = formatTime(cinemaVideo.currentTime);
      }
    });

    cinemaVideo.addEventListener('loadedmetadata', function () {
      if (cinemaTimeTotal && cinemaVideo.duration) {
        cinemaTimeTotal.textContent = formatTime(cinemaVideo.duration);
      }
    });

    // Dev Play butonu tıklaması
    if (cinemaBigPlay) {
      cinemaBigPlay.addEventListener('click', function (e) {
        e.stopPropagation();
        if (cinemaVideo.paused) {
          cinemaVideo.play().catch(function () {
            // Video dosyası yoksa modalı açarak YouTube veya tanıtım görseliyle oynat
            openVideoModal(cinemaVideo.currentSrc || 'videos/tanitim-filmi.mp4', cinemaCurrentTitle ? cinemaCurrentTitle.textContent : 'Messina Home Tanıtım Filmi', cinemaCurrentDesc ? cinemaCurrentDesc.textContent : '');
          });
        } else {
          cinemaVideo.pause();
        }
      });
    }

    // Alt bardaki Play/Pause butonu
    if (cinemaPlayPauseBtn) {
      cinemaPlayPauseBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (cinemaVideo.paused) {
          cinemaVideo.play().catch(function(){});
        } else {
          cinemaVideo.pause();
        }
      });
    }

    // İlerleme çubuğuna tıklayarak sarma (seek)
    if (cinemaProgressWrapper) {
      cinemaProgressWrapper.addEventListener('click', function (e) {
        var rect = cinemaProgressWrapper.getBoundingClientRect();
        var clickX = e.clientX - rect.left;
        var ratio = Math.max(0, Math.min(1, clickX / rect.width));
        if (cinemaVideo.duration) {
          cinemaVideo.currentTime = ratio * cinemaVideo.duration;
        }
      });
    }

    // Ses Aç/Kapat Butonu
    if (cinemaAudioBtn) {
      cinemaAudioBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var unmutedIcon = cinemaAudioBtn.querySelector('.icon-ctrl-unmuted');
        var mutedIcon = cinemaAudioBtn.querySelector('.icon-ctrl-muted');
        cinemaVideo.muted = !cinemaVideo.muted;
        if (cinemaVideo.muted) {
          if (unmutedIcon) unmutedIcon.style.display = 'none';
          if (mutedIcon) mutedIcon.style.display = 'block';
        } else {
          if (unmutedIcon) unmutedIcon.style.display = 'block';
          if (mutedIcon) mutedIcon.style.display = 'none';
        }
      });
    }

    // Tam Ekran Butonu
    if (cinemaFullscreenBtn) {
      cinemaFullscreenBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!document.fullscreenElement) {
          if (cinemaFrame && cinemaFrame.requestFullscreen) cinemaFrame.requestFullscreen();
          else if (cinemaVideo.webkitRequestFullscreen) cinemaVideo.webkitRequestFullscreen();
        } else {
          if (document.exitFullscreen) document.exitFullscreen();
        }
      });
    }

    // Sekmeler arası geçiş
    cinemaTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        cinemaTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        var videoSrc = tab.dataset.videoSrc;
        var poster = tab.dataset.poster;
        var title = tab.dataset.title;
        var desc = tab.dataset.desc;
        var duration = tab.dataset.duration;
        var tag = tab.dataset.tag;

        if (cinemaBadge) cinemaBadge.textContent = tag;
        if (cinemaDurationText) cinemaDurationText.textContent = duration;
        if (cinemaTimeTotal) cinemaTimeTotal.textContent = duration;
        if (cinemaCurrentTitle) cinemaCurrentTitle.textContent = title;
        if (cinemaCurrentDesc) cinemaCurrentDesc.textContent = desc;

        if (cinemaPosterFallback) {
          cinemaPosterFallback.style.backgroundImage = "url('" + poster + "')";
          cinemaPosterFallback.classList.add('visible');
        }

        cinemaVideo.pause();
        cinemaVideo.poster = poster;

        // Video kaynağını güncelle
        var sources = cinemaVideo.querySelectorAll('source');
        if (sources.length > 0) {
          sources[0].src = videoSrc;
        } else {
          cinemaVideo.src = videoSrc;
        }
        cinemaVideo.load();
        updateCinemaPlayState(false);
        if (cinemaProgressFill) cinemaProgressFill.style.width = '0%';
        if (cinemaTimeCurrent) cinemaTimeCurrent.textContent = '00:00';
      });
    });
  }

  // ---------- 8. Evrensel Video Modalı (Pop-up Sinema) ----------
  var videoModal = document.getElementById('video-modal');
  var videoModalClose = document.getElementById('video-modal-close');
  var videoModalBackdrop = document.getElementById('video-modal-backdrop');
  var videoModalPlayer = document.getElementById('video-modal-player');
  var videoModalIframe = document.getElementById('video-modal-iframe');
  var videoModalTitle = document.getElementById('video-modal-title');
  var videoModalDesc = document.getElementById('video-modal-desc');

  function openVideoModal(src, title, desc, isYoutube) {
    if (!videoModal) return;

    if (title && videoModalTitle) videoModalTitle.textContent = title;
    if (desc && videoModalDesc) videoModalDesc.textContent = desc;

    if (isYoutube && videoModalIframe && videoModalPlayer) {
      videoModalPlayer.style.display = 'none';
      videoModalPlayer.pause();
      videoModalIframe.style.display = 'block';
      videoModalIframe.src = src;
    } else if (videoModalPlayer) {
      if (videoModalIframe) {
        videoModalIframe.style.display = 'none';
        videoModalIframe.src = '';
      }
      videoModalPlayer.style.display = 'block';
      if (src) {
        var s = videoModalPlayer.querySelector('source');
        if (s) s.src = src;
        else videoModalPlayer.src = src;
        videoModalPlayer.load();
      }
      videoModalPlayer.play().catch(function(){});
    }

    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (videoModalPlayer) {
      videoModalPlayer.pause();
    }
    if (videoModalIframe) {
      videoModalIframe.src = '';
    }
  }

  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
  if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('is-open')) {
      closeVideoModal();
    }
  });

  // Hero "Tanıtım Videosunu İzle" butonu
  var heroWatchBtn = document.getElementById('hero-watch-film-btn');
  if (heroWatchBtn) {
    heroWatchBtn.addEventListener('click', function () {
      var cinemaSection = document.getElementById('sinema-bolumu');
      if (cinemaSection) {
        cinemaSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function () {
          if (cinemaBigPlay) cinemaBigPlay.click();
        }, 600);
      } else {
        openVideoModal('videos/tanitim-filmi.mp4', 'Messina Home 2026 Tanıtım Filmi', 'İnegöl Showroom ve Tasarım Koleksiyonu');
      }
    });
  }

  // ---------- 8.5 Modal Tetikleyicisi ----------
  var cinemaModalTrigger = document.getElementById('cinema-modal-trigger');
  if (cinemaModalTrigger) {
    cinemaModalTrigger.addEventListener('click', function () {
      var src = 'videos/showroom-video.mp4';
      var title = 'Messina Home Showroom & Tasarım Tanıtımı';
      var desc = 'Modern hatlar, lüks dokular ve konfor odaklı salon takımlarının sinematik detayları.';
      openVideoModal(src, title, desc);
    });
  }

  // Kategori kartlarındaki video rozetleri tıklaması
  document.querySelectorAll('.video-pill-badge').forEach(function (badge) {
    badge.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var card = badge.closest('.car-card');
      var title = card ? (card.querySelector('h3') ? card.querySelector('h3').textContent : 'Model Video İnceleme') : 'Model Video İnceleme';
      openVideoModal('videos/showroom-video.mp4', title + ' · Video İnceleme', 'Messina Home usta işçiliği ve modüler konfor ayrıntıları.');
    });
  });

  // ---------- 9. Kaydırınca Beliren Öğeler (IntersectionObserver) ----------
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

  // ---------- 10. İletişim Formu -> WhatsApp Yönlendirmesi ----------
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

  // ---------- 11. Lüks Özel Mouse İmleci (Custom Luxury Cursor) ----------
  var cursorDot = document.getElementById('cursor-dot');
  var cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var mouseX = -100, mouseY = -100;
    var ringX = -100, ringY = -100;

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px) translate(-50%, -50%)';
    });

    function animateCursorRing() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      cursorRing.style.transform = 'translate(' + ringX + 'px, ' + ringY + 'px) translate(-50%, -50%)';
      requestAnimationFrame(animateCursorRing);
    }
    requestAnimationFrame(animateCursorRing);

    // Hover etkileri (Linkler, Butonlar, Kartlar, Giriş Alanları, Videolar)
    var interactiveEls = document.querySelectorAll('a, button, input, textarea, select, .car-card, .smart-card, .info-item, .m-badge-item, .cinema-player-card, .mag-media, .hero-clean-tag, .hero-ctrl-btn, .cinema-ctrl-btn, .cinema-big-play-btn');
    interactiveEls.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursorRing.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', function () {
        cursorRing.classList.remove('cursor-hover');
      });
    });

    document.addEventListener('mouseleave', function () {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
    });
  }

});
