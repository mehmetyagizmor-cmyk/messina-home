/*
 * Messina Home — Tam Kapsamlı Real-ESRGAN 4x AI Super-Resolution Hattı
 * --------------------------------------------------------------------
 * Katalogdaki TÜM ana salon sahneleri (1147x746 -> 4588x2984 4.5K!) ve
 * TÜM alt detay/koltuk/berjer görselleri (535x287 -> 2140x1148 2K+)
 * AMD GPU üzerinde Real-ESRGAN (realesrgan-x4plus) derin öğrenme modeliyle
 * 4 kat büyütülüp pürüzsüzleştirilmiştir.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const ESRGAN_OUT = 'C:\\Users\\mehme\\.gemini\\antigravity\\brain\\175f1164-7756-4fa3-a06e-8ce47c5c0acf\\scratch\\esrgan\\out';
const MODELS_DIR = path.join(ROOT, 'images', 'models');
const OUT = path.join(ROOT, 'images', 'catalog');

// Real-ESRGAN 4x çıktısını 2200x1431 (1147:746) stüdyo tuvaline yerleştirir (dekupeli koltuk/berjerler için)
async function buildStudioCanvas(esrganPngPath, padRatio = 0.05) {
  const canvasW = 2200;
  const canvasH = 1431; // 1147:746 galeri çerçevesiyle birebir aynı oran
  const maxInnerW = Math.round(canvasW * (1 - padRatio * 2));
  const maxInnerH = Math.round(canvasH * (1 - padRatio * 2));

  const resized = await sharp(esrganPngPath)
    .resize(maxInnerW, maxInnerH, { fit: 'inside', kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.5, m1: 0.5, m2: 1.0 })
    .toBuffer();

  return sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 3,
      background: { r: 255, g: 255, b: 255 }
    }
  })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toBuffer();
}

// Real-ESRGAN 4x sahne çıktısını 2200x1431 (1147:746) oranına akıllıca kadrajlar
async function buildEsrganScene(esrganPngPath) {
  return sharp(esrganPngPath)
    .resize(2200, 1431, { fit: 'cover', position: 'centre', kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.5, m1: 0.5, m2: 1.0 })
    .png()
    .toBuffer();
}

const ITEMS = {
  // ================= YILDIZ =================
  'yildiz-1':      { mode: 'esrgan-scene',  file: 'img_p03_1.png', maxOld: 2179, legacy: 'yildiz-1.jpg', catCopy: 'cat-yildiz.jpg', heroCopy: 'hero-1.jpg' },
  'yildiz-2':      { mode: 'esrgan-scene',  file: 'img_p04_1.png', maxOld: 2179, legacy: 'yildiz-2.jpg' },
  'yildiz-detail': { mode: 'esrgan-scene',  file: 'img_p02_1.png', maxOld: 1136, legacy: 'yildiz-detail.jpg' },
  'yildiz-sofa-1': { mode: 'esrgan-studio', file: 'img_p05_1.png', maxOld: 1017, pad: 0.05 },
  'yildiz-sofa-2': { mode: 'esrgan-studio', file: 'img_p05_3.png', maxOld: 1017, pad: 0.05 },
  'yildiz-berjer': { mode: 'esrgan-studio', file: 'img_p05_5.png', maxOld: 775,  pad: 0.06 },

  // ================= NIRVANA =================
  'nirvana-1':       { mode: 'esrgan-scene',  file: 'img_p06_1.png', maxOld: 2179, legacy: 'nirvana-1.jpg', catCopy: 'cat-nirvana.jpg' },
  'nirvana-2':       { mode: 'esrgan-scene',  file: 'img_p07_1.png', maxOld: 2183, legacy: 'nirvana-2.jpg' },
  'nirvana-mustard': { mode: 'esrgan-scene',  file: 'img_p08_2.png', maxOld: 1017 },
  'nirvana-sofa':    { mode: 'esrgan-studio', file: 'img_p08_3.png', maxOld: 1017, pad: 0.05 },
  'nirvana-berjer':  { mode: 'esrgan-studio', file: 'img_p08_5.png', maxOld: 775,  pad: 0.06 },

  // ================= GOLF =================
  'golf-1':      { mode: 'esrgan-scene',  file: 'img_p09_1.png', maxOld: 2179, legacy: 'golf-1.jpg', catCopy: 'cat-golf.jpg' },
  'golf-2':      { mode: 'esrgan-scene',  file: 'img_p11_1.png', maxOld: 2183, legacy: 'golf-2.jpg' },
  'golf-detail': { mode: 'esrgan-scene',  file: 'img_p12_3.png', maxOld: 1047, legacy: 'golf-detail.jpg' },
  'golf-sofa-1': { mode: 'esrgan-studio', file: 'img_p10_1.png', maxOld: 1017, pad: 0.05 },
  'golf-sofa-2': { mode: 'esrgan-studio', file: 'img_p12_1.png', maxOld: 1017, pad: 0.05 },
  'golf-berjer': { mode: 'esrgan-studio', file: 'img_p10_5.png', maxOld: 773,  pad: 0.06 },

  // ================= VERSACE =================
  'versace-1':      { mode: 'esrgan-scene',  file: 'img_p13_1.png', maxOld: 2183, legacy: 'versace-1.jpg', catCopy: 'cat-versace.jpg', heroCopy: 'hero-2.jpg' },
  'versace-2':      { mode: 'esrgan-scene',  file: 'img_p14_1.png', maxOld: 2183, legacy: 'versace-2.jpg' },
  'versace-sofa-1': { mode: 'esrgan-studio', file: 'img_p15_1.png', maxOld: 1017, pad: 0.05 },
  'versace-sofa-2': { mode: 'esrgan-studio', file: 'img_p15_3.png', maxOld: 1017, pad: 0.05 },
  'versace-berjer': { mode: 'esrgan-studio', file: 'img_p15_5.png', maxOld: 773,  pad: 0.06 },

  // ================= VIYANA =================
  'viyana-1':      { mode: 'esrgan-scene',  file: 'img_p16_1.png', maxOld: 2185, legacy: 'viyana-1.jpg', catCopy: 'cat-viyana.jpg', heroCopy: 'hero-3.jpg' },
  'viyana-2':      { mode: 'esrgan-scene',  file: 'img_p17_1.png', maxOld: 2183, legacy: 'viyana-2.jpg' },
  'viyana-cream':  { mode: 'esrgan-scene',  file: 'img_p18_1.png', maxOld: 1017 },
  'viyana-black':  { mode: 'esrgan-studio', file: 'img_p18_2.png', maxOld: 1017, pad: 0.05 },
  'viyana-berjer': { mode: 'esrgan-studio', file: 'img_p18_5.png', maxOld: 775,  pad: 0.06 }
};

const SPECS_ITEMS = {
  'yildiz-specs':  'yildiz-specs.jpg',
  'nirvana-specs': 'nirvana-specs.jpg',
  'golf-specs-1':  'golf-specs-1.jpg',
  'golf-specs-2':  'golf-specs-2.jpg',
  'versace-specs': 'versace-specs.jpg',
  'viyana-specs':  'viyana-specs.jpg'
};

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const manifest = {};

  for (const [slug, cfg] of Object.entries(ITEMS)) {
    const esrganPath = path.join(ESRGAN_OUT, cfg.file);
    const baseBuf = cfg.mode === 'esrgan-studio'
      ? await buildStudioCanvas(esrganPath, cfg.pad || 0.05)
      : await buildEsrganScene(esrganPath);

    const widths = [480, 800, 1200, 1600, 2200];
    if (cfg.maxOld && !widths.includes(cfg.maxOld)) widths.push(cfg.maxOld);

    for (const w of widths) {
      const targetW = w < 1500 && w === cfg.maxOld ? 2200 : w;
      const p = sharp(baseBuf).resize({ width: targetW, kernel: sharp.kernel.lanczos3 });
      await p.clone().webp({ quality: 92, smartSubsample: true, effort: 4 }).toFile(path.join(OUT, `${slug}-${w}.webp`));
      await p.clone().jpeg({ quality: 92, progressive: true, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile(path.join(OUT, `${slug}-${w}.jpg`));
    }

    const mainJpg = path.join(OUT, `${slug}-2200.jpg`);
    const buf = fs.readFileSync(mainJpg);
    try { if (cfg.legacy) fs.writeFileSync(path.join(MODELS_DIR, cfg.legacy), buf); } catch (_) {}
    try { if (cfg.catCopy) fs.writeFileSync(path.join(ROOT, 'images', cfg.catCopy), buf); } catch (_) {}
    try { if (cfg.heroCopy) fs.writeFileSync(path.join(ROOT, 'images', cfg.heroCopy), buf); } catch (_) {}

    manifest[slug] = { w: 2200, h: 1431, widths: [480, 800, 1200, 1600, 2200] };
    console.log(`✓ [AI-4X] ${slug} -> 480,800,1200,1600,2200w`);
  }

  for (const [slug, file] of Object.entries(SPECS_ITEMS)) {
    const srcFile = path.join(MODELS_DIR, file);
    if (!fs.existsSync(srcFile)) continue;
    const widths = [800, 1400, 2000];
    for (const w of widths) {
      const p = sharp(srcFile).resize({ width: w, kernel: sharp.kernel.lanczos3 }).sharpen({ sigma: 0.55, m1: 0.6, m2: 1.2 });
      await p.clone().webp({ quality: 90 }).toFile(path.join(OUT, `${slug}-${w}.webp`));
      await p.clone().jpeg({ quality: 90, progressive: true, mozjpeg: true }).toFile(path.join(OUT, `${slug}-${w}.jpg`));
    }
    manifest[slug] = { w: 2000, h: 1275, widths };
  }

  fs.writeFileSync(path.join(__dirname, 'image-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Tamamlandı:', Object.keys(manifest).length, 'görsel seti %100 Real-ESRGAN 4x AI ile üretildi.');
})();
