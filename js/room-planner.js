// ==========================================================================
// Messina Home — 3D Oda Planlayıcı
// Oda ölçülerini santimetre olarak alır, koltuk modellerini gerçek ölçekte
// (1 three.js birimi = 1 metre) sahneye yerleştirir; sürükle-bırak ile
// taşıma, kaydırıcı ile döndürme ve oda/çakışma sınır kontrolü sağlar.
// ==========================================================================

(function () {
  "use strict";

  var canvasEl = document.getElementById('planner-canvas');
  if (!canvasEl || typeof THREE === 'undefined') return;

  // ---------- Ürün Verisi (urunler.html'deki gerçek ölçülerle aynı) ----------
  var SOFA_MODELS = [
    {
      id: 'yildiz', name: 'Yıldız', colorHex: 0xC7A165,
      pieces: [
        { id: '3lu', w: 230, d: 95, h: 70 },
        { id: 'berjer', w: 85, d: 85, h: 85 }
      ]
    },
    {
      id: 'nirvana', name: 'Nirvana', colorHex: 0xA9722E,
      pieces: [
        { id: '3lu', w: 230, d: 97, h: 70 },
        { id: 'berjer', w: 85, d: 85, h: 70 }
      ]
    },
    {
      id: 'golf', name: 'Golf', colorHex: 0x8A7D6E,
      pieces: [
        { id: '3lu', w: 226, d: 95, h: 70 },
        { id: 'berjer', w: 72, d: 65, h: 75 }
      ]
    },
    {
      id: 'versace', name: 'Versace', colorHex: 0x5B2A45,
      pieces: [
        { id: '3lu', w: 230, d: 97, h: 70 },
        { id: 'berjer', w: 85, d: 85, h: 70 }
      ]
    },
    {
      id: 'viyana', name: 'Viyana', colorHex: 0x2A2620,
      pieces: [
        { id: '3lu', w: 228, d: 95, h: 70 },
        { id: 'berjer', w: 70, d: 80, h: 80 }
      ]
    }
  ];

  // ---------- Durum ----------
  var spawnCursor = { x: 20, z: 20, rowDepth: 0 };
  var room = { Wcm: 400, Dcm: 350, Hcm: 270 };
  var items = [];
  var itemIdCounter = 1;
  var selectedItemId = null;
  var roomBuiltOnce = false;
  var topView = false;
  var draggingItem = null;

  var renderer = null, scene = null, camera = null, controls = null;
  var roomGroup = null, boxHelper = null;
  var invalidHelpers = {};
  var resizeFn = null;
  var initializedScene = false;

  var raycaster = new THREE.Raycaster();
  var pointerNDC = new THREE.Vector2();
  var floorPlaneMath = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  var dragOffset = new THREE.Vector3();

  // ---------- Yardımcılar ----------
  function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

  function currentLang() {
    try { return localStorage.getItem('messina_lang') || 'tr'; } catch (e) { return 'tr'; }
  }

  function t(key) {
    if (window.translations) {
      var lang = currentLang();
      if (translations[lang] && translations[lang][key] != null) return translations[lang][key];
      if (translations.tr && translations.tr[key] != null) return translations.tr[key];
    }
    return key;
  }

  function labelForPiece(pieceId) {
    return pieceId === '3lu' ? t('spec_3str_label') : t('spec_bergere_label');
  }

  function hexColor(n) { return '#' + ('000000' + n.toString(16)).slice(-6); }

  function findItem(id) {
    for (var i = 0; i < items.length; i++) { if (items[i].id === id) return items[i]; }
    return null;
  }

  function disposeObject(root) {
    root.traverse(function (o) {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach(function (m) { m.dispose(); });
        else o.material.dispose();
      }
    });
  }

  // ---------- Geometrik Kontroller (Döndürülmüş Dikdörtgen) ----------
  function getCorners(item, shrinkCm) {
    shrinkCm = shrinkCm || 0;
    var hw = Math.max(item.w / 2 - shrinkCm, 0.1);
    var hd = Math.max(item.d / 2 - shrinkCm, 0.1);
    var theta = item.rotationDeg * Math.PI / 180;
    var cos = Math.cos(theta), sin = Math.sin(theta);
    var local = [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]];
    return local.map(function (p) {
      var lx = p[0], lz = p[1];
      var rx = lx * cos + lz * sin;
      var rz = -lx * sin + lz * cos;
      return { x: item.x + rx, z: item.z + rz };
    });
  }

  function isFullyInsideRoom(corners) {
    var eps = 0.5;
    return corners.every(function (c) {
      return c.x >= -eps && c.x <= room.Wcm + eps && c.z >= -eps && c.z <= room.Dcm + eps;
    });
  }

  function polygonsOverlap(A, B) {
    var polys = [A, B];
    for (var p = 0; p < polys.length; p++) {
      var poly = polys[p];
      for (var i = 0; i < poly.length; i++) {
        var p1 = poly[i], p2 = poly[(i + 1) % poly.length];
        var axisX = -(p2.z - p1.z), axisZ = (p2.x - p1.x);
        var len = Math.hypot(axisX, axisZ) || 1;
        axisX /= len; axisZ /= len;
        var minA = Infinity, maxA = -Infinity, minB = Infinity, maxB = -Infinity;
        A.forEach(function (c) { var proj = c.x * axisX + c.z * axisZ; if (proj < minA) minA = proj; if (proj > maxA) maxA = proj; });
        B.forEach(function (c) { var proj = c.x * axisX + c.z * axisZ; if (proj < minB) minB = proj; if (proj > maxB) maxB = proj; });
        if (maxA < minB || maxB < minA) return false;
      }
    }
    return true;
  }

  function validateAll() {
    items.forEach(function (it) { it.insideRoom = isFullyInsideRoom(getCorners(it, 0)); });
    items.forEach(function (it) { it.overlapping = false; });
    for (var i = 0; i < items.length; i++) {
      for (var j = i + 1; j < items.length; j++) {
        if (polygonsOverlap(getCorners(items[i], 1), getCorners(items[j], 1))) {
          items[i].overlapping = true;
          items[j].overlapping = true;
        }
      }
    }
    items.forEach(function (it) {
      it.valid = it.insideRoom && !it.overlapping;
      if (it.material) it.material.emissive.setHex(it.valid ? 0x000000 : 0xaa1f1f);
      updateItemBadge(it);
      if (!it.valid) {
        if (!invalidHelpers[it.id]) {
          invalidHelpers[it.id] = new THREE.BoxHelper(it.group, 0xd23c3c);
          scene.add(invalidHelpers[it.id]);
        }
        invalidHelpers[it.id].update();
      } else {
        removeInvalidHelper(it.id);
      }
    });
    renderRoomSummary();
  }

  function removeInvalidHelper(id) {
    var helper = invalidHelpers[id];
    if (!helper) return;
    scene.remove(helper);
    helper.geometry.dispose();
    helper.material.dispose();
    delete invalidHelpers[id];
  }

  // ---------- 3D Model Üretimi ----------
  function buildSofaGroup(piece, colorHex) {
    var w = piece.w / 100, d = piece.d / 100, h = piece.h / 100;
    var legHeight = Math.min(0.12, h * 0.16);
    var seatH = Math.max(h * 0.4, 0.06);
    var backThickness = clamp(d * 0.18, 0.12, d * 0.6);
    var seatDepth = Math.max(d - backThickness, 0.05);
    var armWidth = Math.min(w * 0.09, 0.14);
    if (armWidth * 2 >= w * 0.9) armWidth = w * 0.08;

    var group = new THREE.Group();
    var mat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.85, metalness: 0.04 });
    var legMat = new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.6 });

    var legSize = Math.min(0.045, w * 0.04, d * 0.04);
    var legGeo = new THREE.BoxGeometry(legSize, legHeight, legSize);
    [
      [-w / 2 + legSize, -d / 2 + legSize],
      [w / 2 - legSize, -d / 2 + legSize],
      [-w / 2 + legSize, d / 2 - legSize],
      [w / 2 - legSize, d / 2 - legSize]
    ].forEach(function (p) {
      var leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(p[0], legHeight / 2, p[1]);
      group.add(leg);
    });

    var seatWidth = Math.max(w - armWidth * 2, w * 0.5);
    var seat = new THREE.Mesh(new THREE.BoxGeometry(seatWidth, seatH, seatDepth), mat);
    seat.position.set(0, legHeight + seatH / 2, backThickness / 2);
    group.add(seat);

    var backHeight = Math.max(h - legHeight, 0.1);
    var back = new THREE.Mesh(new THREE.BoxGeometry(w, backHeight, backThickness), mat);
    back.position.set(0, legHeight + backHeight / 2, -d / 2 + backThickness / 2);
    group.add(back);

    if (armWidth > 0.02) {
      var armHeight = backHeight * 0.82;
      var armDepth = d * 0.88;
      var armGeo = new THREE.BoxGeometry(armWidth, armHeight, armDepth);
      var armL = new THREE.Mesh(armGeo, mat);
      armL.position.set(-w / 2 + armWidth / 2, legHeight + armHeight / 2, 0);
      group.add(armL);
      var armR = new THREE.Mesh(armGeo, mat);
      armR.position.set(w / 2 - armWidth / 2, legHeight + armHeight / 2, 0);
      group.add(armR);
    }

    group.userData.tintMaterial = mat;
    return group;
  }

  function resetSpawnCursor() {
    spawnCursor.x = 20; spawnCursor.z = 20; spawnCursor.rowDepth = 0;
  }

  // Yeni parçaları basit bir "kutu paketleme" mantığıyla art arda, üst üste
  // binmeyecek şekilde konumlandırır; sığmazsa bir alt sıraya geçer.
  function nextSpawnPosition(piece) {
    var margin = 20;
    if (spawnCursor.x + piece.w > room.Wcm - margin && spawnCursor.x > margin) {
      spawnCursor.x = margin;
      spawnCursor.z += spawnCursor.rowDepth + margin;
      spawnCursor.rowDepth = 0;
    }
    var cx = spawnCursor.x + piece.w / 2;
    var cz = spawnCursor.z + piece.d / 2;
    spawnCursor.x += piece.w + margin;
    spawnCursor.rowDepth = Math.max(spawnCursor.rowDepth, piece.d);
    cx = clamp(cx, piece.w / 2, Math.max(piece.w / 2, room.Wcm - piece.w / 2));
    cz = clamp(cz, piece.d / 2, Math.max(piece.d / 2, room.Dcm - piece.d / 2));
    return { x: cx, z: cz };
  }

  function updateGroupTransform(item) {
    var wx = (item.x - room.Wcm / 2) / 100;
    var wz = (item.z - room.Dcm / 2) / 100;
    item.group.position.set(wx, 0, wz);
    item.group.rotation.y = item.rotationDeg * Math.PI / 180;
  }

  // ---------- Sahne Kurulumu ----------
  function ensureSceneInit() {
    if (initializedScene) return;
    initializedScene = true;

    var wrap = document.getElementById('planner-canvas-wrap');

    renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4eee5);

    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 0.8;
    controls.maxDistance = 100;
    controls.minPolarAngle = 0.2;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    controls.target.set(0, 0, 0);

    var hemi = new THREE.HemisphereLight(0xffffff, 0x3a3226, 0.95);
    scene.add(hemi);
    var dir = new THREE.DirectionalLight(0xffffff, 0.65);
    dir.position.set(5, 8, 4);
    scene.add(dir);

    resizeFn = function () {
      var w = wrap.clientWidth, h = wrap.clientHeight;
      if (w <= 0 || h <= 0) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', resizeFn);
    if (window.ResizeObserver) { new ResizeObserver(resizeFn).observe(wrap); }
    resizeFn();

    setupPointerEvents();
    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    if (controls) controls.update();
    if (boxHelper) boxHelper.update();
    if (renderer && scene && camera) renderer.render(scene, camera);
  }

  function resetCamera() {
    var Wm = room.Wcm / 100, Dm = room.Dcm / 100, Hm = room.Hcm / 100;
    var fovRad = camera.fov * Math.PI / 180;
    if (topView) {
      var halfSpan = Math.max(Wm, Dm) / 2 * 1.25;
      var h = halfSpan / Math.tan(fovRad / 2);
      camera.position.set(0, Math.max(h, 3), 0.0001);
      controls.target.set(0, 0, 0);
    } else {
      var radius = Math.sqrt(Wm * Wm + Dm * Dm + Hm * Hm) / 2;
      var dist = (radius / Math.sin(fovRad / 2)) * 1.3;
      var dir = new THREE.Vector3(0.8, 0.55, 0.8).normalize();
      camera.position.copy(dir.multiplyScalar(dist));
      controls.target.set(0, Hm * 0.15, 0);
    }
    controls.update();
  }

  function buildRoom(Wcm, Dcm, Hcm) {
    resetSpawnCursor();
    room.Wcm = Wcm; room.Dcm = Dcm; room.Hcm = Hcm;
    var Wm = Wcm / 100, Dm = Dcm / 100, Hm = Hcm / 100;

    if (roomGroup) { scene.remove(roomGroup); disposeObject(roomGroup); }
    roomGroup = new THREE.Group();

    var floorMat = new THREE.MeshStandardMaterial({ color: 0xe9dcc4, roughness: 0.9 });
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(Wm, Dm), floorMat);
    floor.rotation.x = -Math.PI / 2;
    roomGroup.add(floor);

    var gridMat = new THREE.LineBasicMaterial({ color: 0xb8a988, transparent: true, opacity: 0.35 });
    var pts = [];
    var step = 0.5;
    var gx, gz;
    for (gx = -Wm / 2; gx <= Wm / 2 + 1e-6; gx += step) { pts.push(gx, 0.002, -Dm / 2, gx, 0.002, Dm / 2); }
    for (gz = -Dm / 2; gz <= Dm / 2 + 1e-6; gz += step) { pts.push(-Wm / 2, 0.002, gz, Wm / 2, 0.002, gz); }
    var gridGeo = new THREE.BufferGeometry();
    gridGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    roomGroup.add(new THREE.LineSegments(gridGeo, gridMat));

    var wallMat = new THREE.MeshStandardMaterial({ color: 0xfaf7f2, transparent: true, opacity: 0.4, side: THREE.DoubleSide, roughness: 1 });
    var backWall = new THREE.Mesh(new THREE.PlaneGeometry(Wm, Hm), wallMat);
    backWall.position.set(0, Hm / 2, -Dm / 2);
    roomGroup.add(backWall);

    var leftWall = new THREE.Mesh(new THREE.PlaneGeometry(Dm, Hm), wallMat.clone());
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-Wm / 2, Hm / 2, 0);
    roomGroup.add(leftWall);

    scene.add(roomGroup);
    resetCamera();

    items.forEach(function (it) {
      it.x = clamp(it.x, 0, Wcm);
      it.z = clamp(it.z, 0, Dcm);
      updateGroupTransform(it);
    });
    validateAll();
  }

  // ---------- Sürükle-Bırak ----------
  function getPointerNDC(e) {
    var rect = renderer.domElement.getBoundingClientRect();
    pointerNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointerNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function intersectFurniture(e) {
    getPointerNDC(e);
    raycaster.setFromCamera(pointerNDC, camera);
    var meshes = [];
    var meshItemMap = [];
    items.forEach(function (it) {
      it.group.traverse(function (o) { if (o.isMesh) { meshes.push(o); meshItemMap.push(it); } });
    });
    var hits = raycaster.intersectObjects(meshes, false);
    if (!hits.length) return null;
    var idx = meshes.indexOf(hits[0].object);
    return idx >= 0 ? meshItemMap[idx] : null;
  }

  function getFloorPoint(e) {
    getPointerNDC(e);
    raycaster.setFromCamera(pointerNDC, camera);
    var pt = new THREE.Vector3();
    raycaster.ray.intersectPlane(floorPlaneMath, pt);
    return pt || new THREE.Vector3();
  }

  function setupPointerEvents() {
    var canvas = renderer.domElement;

    canvas.addEventListener('pointerdown', function (e) {
      var hitItem = intersectFurniture(e);
      if (hitItem) {
        draggingItem = hitItem;
        selectItem(hitItem.id);
        var floorPt = getFloorPoint(e);
        dragOffset.set(hitItem.group.position.x - floorPt.x, 0, hitItem.group.position.z - floorPt.z);
        controls.enabled = false;
        try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
      } else {
        selectItem(null);
      }
    });

    canvas.addEventListener('pointermove', function (e) {
      if (!draggingItem) return;
      var floorPt = getFloorPoint(e);
      var wx = floorPt.x + dragOffset.x, wz = floorPt.z + dragOffset.z;
      var xCm = wx * 100 + room.Wcm / 2;
      var zCm = wz * 100 + room.Dcm / 2;
      setItemPosition(draggingItem, xCm, zCm);
    });

    window.addEventListener('pointerup', function (e) {
      if (draggingItem) { try { canvas.releasePointerCapture(e.pointerId); } catch (err) {} }
      draggingItem = null;
      controls.enabled = true;
    });
  }

  // ---------- Öğe Yönetimi ----------
  function setItemPosition(item, xCm, zCm) {
    item.x = clamp(xCm, 0, room.Wcm);
    item.z = clamp(zCm, 0, room.Dcm);
    updateGroupTransform(item);
    validateAll();
  }

  function setItemRotation(item, deg) {
    item.rotationDeg = ((deg % 360) + 360) % 360;
    updateGroupTransform(item);
    validateAll();
  }

  function selectItem(id) {
    selectedItemId = id;
    if (boxHelper) { scene.remove(boxHelper); boxHelper = null; }
    var it = id != null ? findItem(id) : null;
    if (it) { boxHelper = new THREE.BoxHelper(it.group, 0xdfc394); scene.add(boxHelper); }
    items.forEach(updateItemBadge);
  }

  function updateEmptyHint() {
    var hint = document.getElementById('planner-empty-hint');
    if (hint) hint.classList.toggle('is-hidden', items.length > 0);
  }

  function addFurniture(modelId, pieceId) {
    if (!roomBuiltOnce) return;
    var model = SOFA_MODELS.filter(function (m) { return m.id === modelId; })[0];
    if (!model) return;
    var piece = model.pieces.filter(function (p) { return p.id === pieceId; })[0];
    if (!piece) return;

    var spot = nextSpawnPosition(piece);
    var x = spot.x, z = spot.z;

    var group = buildSofaGroup(piece, model.colorHex);
    scene.add(group);

    var item = {
      id: itemIdCounter++,
      modelId: modelId,
      pieceId: pieceId,
      modelName: model.name,
      w: piece.w, d: piece.d, h: piece.h,
      x: x, z: z, rotationDeg: 0,
      colorHex: model.colorHex,
      group: group,
      material: group.userData.tintMaterial,
      valid: true, insideRoom: true, overlapping: false
    };
    items.push(item);
    updateGroupTransform(item);
    selectItem(item.id);
    renderItemsList();
    validateAll();
    updateEmptyHint();
  }

  function removeItem(id) {
    var idx = -1;
    for (var i = 0; i < items.length; i++) { if (items[i].id === id) { idx = i; break; } }
    if (idx === -1) return;
    var it = items[idx];
    scene.remove(it.group);
    disposeObject(it.group);
    removeInvalidHelper(id);
    items.splice(idx, 1);
    if (selectedItemId === id) selectItem(null);
    renderItemsList();
    validateAll();
    updateEmptyHint();
  }

  function clearScene() {
    items.forEach(function (it) { scene.remove(it.group); disposeObject(it.group); removeInvalidHelper(it.id); });
    items.length = 0;
    resetSpawnCursor();
    selectItem(null);
    renderItemsList();
    renderRoomSummary();
    updateEmptyHint();
  }

  // ---------- Arayüz Oluşturma ----------
  function renderModelCards() {
    var wrap = document.getElementById('planner-model-cards');
    if (!wrap) return;
    var html = '';
    SOFA_MODELS.forEach(function (m) {
      html += '<div class="planner-model-card">' +
        '<div class="planner-model-card-head"><span class="planner-model-swatch" style="background:' + hexColor(m.colorHex) + '"></span><strong>' + m.name + '</strong></div>';
      m.pieces.forEach(function (p) {
        var label = labelForPiece(p.id);
        var addLabel = p.id === '3lu' ? t('planner_add_3lu') : t('planner_add_berjer');
        html += '<div class="planner-model-piece-row">' +
          '<span class="planner-model-piece-dims">' + label + '<br>' + p.w + ' × ' + p.d + ' × ' + p.h + ' cm</span>' +
          '<button type="button" class="planner-add-btn" data-model="' + m.id + '" data-piece="' + p.id + '">+ ' + addLabel + '</button>' +
          '</div>';
      });
      html += '</div>';
    });
    wrap.innerHTML = html;
    wrap.querySelectorAll('.planner-add-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        addFurniture(btn.getAttribute('data-model'), btn.getAttribute('data-piece'));
      });
    });
  }

  function updateItemBadge(item) {
    if (!item.dom) return;
    item.dom.card.classList.toggle('is-invalid', !item.valid);
    item.dom.card.classList.toggle('is-selected', selectedItemId === item.id);
    item.dom.status.className = 'planner-item-status ' + (item.valid ? 'ok' : 'warn');
    var text;
    if (item.valid) text = t('planner_status_ok');
    else if (!item.insideRoom) text = t('planner_status_outside');
    else text = t('planner_status_overlap');
    item.dom.status.textContent = text;
    if (document.activeElement !== item.dom.inputX) item.dom.inputX.value = Math.round(item.x);
    if (document.activeElement !== item.dom.inputZ) item.dom.inputZ.value = Math.round(item.z);
  }

  function renderItemsList() {
    var listEl = document.getElementById('planner-items-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    if (!items.length) {
      var empty = document.createElement('p');
      empty.className = 'planner-empty-list';
      empty.setAttribute('data-i18n', 'planner_empty_scene');
      empty.textContent = t('planner_empty_scene');
      listEl.appendChild(empty);
      return;
    }

    items.forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'planner-item-card';

      var head = document.createElement('div');
      head.className = 'planner-item-head';
      var swatch = document.createElement('span');
      swatch.className = 'planner-item-swatch';
      swatch.style.background = hexColor(item.colorHex);
      var title = document.createElement('span');
      title.className = 'planner-item-title';
      title.textContent = item.modelName + ' — ' + labelForPiece(item.pieceId);
      var removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'planner-item-remove';
      removeBtn.innerHTML = '&times;';
      removeBtn.title = t('planner_remove_item');
      removeBtn.addEventListener('click', function () { removeItem(item.id); });
      head.appendChild(swatch); head.appendChild(title); head.appendChild(removeBtn);

      var dims = document.createElement('div');
      dims.className = 'planner-item-dims';
      dims.textContent = item.w + ' × ' + item.d + ' × ' + item.h + ' cm';

      var controlsWrap = document.createElement('div');
      controlsWrap.className = 'planner-item-controls';

      var rowX = document.createElement('div');
      rowX.className = 'planner-item-row';
      var labelX = document.createElement('label');
      labelX.textContent = 'X (cm)';
      var inputX = document.createElement('input');
      inputX.type = 'number'; inputX.min = 0; inputX.max = room.Wcm; inputX.step = 1;
      inputX.value = Math.round(item.x);
      inputX.addEventListener('input', function () {
        setItemPosition(item, parseFloat(inputX.value) || 0, item.z);
      });
      rowX.appendChild(labelX); rowX.appendChild(inputX);

      var rowZ = document.createElement('div');
      rowZ.className = 'planner-item-row';
      var labelZ = document.createElement('label');
      labelZ.textContent = 'Z (cm)';
      var inputZ = document.createElement('input');
      inputZ.type = 'number'; inputZ.min = 0; inputZ.max = room.Dcm; inputZ.step = 1;
      inputZ.value = Math.round(item.z);
      inputZ.addEventListener('input', function () {
        setItemPosition(item, item.x, parseFloat(inputZ.value) || 0);
      });
      rowZ.appendChild(labelZ); rowZ.appendChild(inputZ);

      var rowR = document.createElement('div');
      rowR.className = 'planner-item-row planner-item-row--rotation';
      var labelR = document.createElement('label');
      function refreshRotationLabel() { labelR.textContent = t('planner_rotation_label') + ' ' + Math.round(item.rotationDeg) + '°'; }
      refreshRotationLabel();
      var inputR = document.createElement('input');
      inputR.type = 'range'; inputR.min = 0; inputR.max = 355; inputR.step = 5;
      inputR.value = item.rotationDeg;
      inputR.addEventListener('input', function () {
        setItemRotation(item, parseFloat(inputR.value) || 0);
        refreshRotationLabel();
      });
      var rot90 = document.createElement('button');
      rot90.type = 'button';
      rot90.className = 'planner-rotate90-btn';
      rot90.textContent = '⟳ 90°';
      rot90.title = t('planner_rotate_90');
      rot90.addEventListener('click', function () {
        setItemRotation(item, (item.rotationDeg + 90) % 360);
        inputR.value = item.rotationDeg;
        refreshRotationLabel();
      });
      rowR.appendChild(labelR); rowR.appendChild(inputR); rowR.appendChild(rot90);

      controlsWrap.appendChild(rowX); controlsWrap.appendChild(rowZ); controlsWrap.appendChild(rowR);

      var status = document.createElement('span');
      status.className = 'planner-item-status';

      card.appendChild(head);
      card.appendChild(dims);
      card.appendChild(controlsWrap);
      card.appendChild(status);
      card.addEventListener('click', function (e) {
        var tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'BUTTON') return;
        selectItem(item.id);
      });

      listEl.appendChild(card);
      item.dom = { card: card, status: status, inputX: inputX, inputZ: inputZ };
      updateItemBadge(item);
    });
  }

  function renderRoomSummary() {
    var el = document.getElementById('planner-room-summary');
    if (!el) return;
    var totalM2 = (room.Wcm / 100) * (room.Dcm / 100);
    var usedM2 = items.reduce(function (s, it) { return s + (it.w / 100) * (it.d / 100); }, 0);
    el.innerHTML =
      '<div class="planner-room-summary-item"><strong>' + totalM2.toFixed(1) + ' m²</strong><span>' + t('planner_area_total') + '</span></div>' +
      '<div class="planner-room-summary-item"><strong>' + usedM2.toFixed(1) + ' m²</strong><span>' + t('planner_area_used') + '</span></div>';
  }

  function setTopView(isTop) {
    topView = isTop;
    var btn3d = document.getElementById('view-3d-btn');
    var btnTop = document.getElementById('view-top-btn');
    if (btn3d) btn3d.classList.toggle('active', !isTop);
    if (btnTop) btnTop.classList.toggle('active', isTop);
    controls.enableRotate = !isTop;
    controls.minPolarAngle = isTop ? 0 : 0.2;
    controls.maxPolarAngle = isTop ? 0 : Math.PI / 2 - 0.05;
    resetCamera();
  }

  function downloadSceneImage() {
    if (!renderer) return;
    renderer.render(scene, camera);
    var url = renderer.domElement.toDataURL('image/png');
    var a = document.createElement('a');
    a.href = url;
    a.download = 'messina-home-oda-plani.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // ---------- Sayfa Başlatma ----------
  document.addEventListener('DOMContentLoaded', function () {
    var buildBtn = document.getElementById('planner-build-btn');
    var noticeEl = document.getElementById('planner-no-room-notice');
    var workspaceEl = document.getElementById('planner-workspace');
    var widthInput = document.getElementById('room-width');
    var depthInput = document.getElementById('room-depth');
    var heightInput = document.getElementById('room-height');

    if (!buildBtn) return;

    function setBuildBtnLabel() {
      var span = buildBtn.querySelector('span[data-i18n]');
      if (!span) return;
      var key = roomBuiltOnce ? 'planner_btn_update' : 'planner_btn_create';
      span.setAttribute('data-i18n', key);
      span.textContent = t(key);
    }

    buildBtn.addEventListener('click', function () {
      var w = clamp(parseFloat(widthInput.value) || 400, 150, 1500);
      var d = clamp(parseFloat(depthInput.value) || 350, 150, 1500);
      var h = clamp(parseFloat(heightInput.value) || 270, 200, 400);
      widthInput.value = w; depthInput.value = d; heightInput.value = h;

      roomBuiltOnce = true;
      if (noticeEl) noticeEl.style.display = 'none';
      if (workspaceEl) workspaceEl.classList.remove('is-hidden');

      ensureSceneInit();
      buildRoom(w, d, h);
      if (resizeFn) resizeFn();
      renderModelCards();
      renderItemsList();
      renderRoomSummary();
      setBuildBtnLabel();
    });

    var view3dBtn = document.getElementById('view-3d-btn');
    var viewTopBtn = document.getElementById('view-top-btn');
    if (view3dBtn) view3dBtn.addEventListener('click', function () { setTopView(false); });
    if (viewTopBtn) viewTopBtn.addEventListener('click', function () { setTopView(true); });

    var resetCamBtn = document.getElementById('reset-cam-btn');
    if (resetCamBtn) resetCamBtn.addEventListener('click', function () { if (initializedScene) resetCamera(); });

    var downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) downloadBtn.addEventListener('click', downloadSceneImage);

    var clearBtn = document.getElementById('clear-scene-btn');
    if (clearBtn) clearBtn.addEventListener('click', clearScene);

    // Dil değişiminde dinamik olarak üretilen metinleri yenile
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        renderModelCards();
        if (roomBuiltOnce) { renderItemsList(); renderRoomSummary(); }
        setBuildBtnLabel();
      });
    });
  });
})();
