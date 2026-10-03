/* =========================================================================
   cactus® · web · v7 · interacciones
   Las animaciones van siempre (como en juliamarro.com); se apagan con ?motion=0.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- contacto ---------- */
  var CONFIG = {
    whatsapp: "5491163596278",   // +54 9 11 6359-6278
    email: "estudio.c4ctus@gmail.com"
  };

  /* ---------- proyectos: lo que se abre al tocar un trabajo ----------
     slides: { src, alt } para imágenes, { html, alt } para láminas armadas con HTML,
     o { video, poster, w, h, alt } para videos (se reproducen con sonido al abrirse). */
  var PROJECTS = {
    video: {
      kind: "motion · manual de marca",
      title: "Video de marca",
      meta: [["cliente", "cactus®"], ["servicios", "motion, edición, reels"], ["formatos", "horizontal y reel"], ["año", "2026"]],
      text: [
        "El manual de marca de cactus® contado en 30 segundos. Arranca con un teléfono que suena: es tu marca preguntando por nosotros.",
        "Después repasa el logotipo, la grilla, el monograma, las tipografías, los colores y la trama, y termina en las aplicaciones."
      ],
      slides: [
        { video: "assets/video/cactus-video-1080.mp4", poster: "assets/video/cactus-gancho.jpg", w: 1920, h: 1080, alt: "Video de marca de cactus®, versión horizontal" },
        { video: "assets/video/cactus-reel-720.mp4", poster: "assets/video/cactus-reel.jpg", w: 720, h: 1280, alt: "Video de marca de cactus®, versión reel" }
      ]
    },
    udent: {
      kind: "identidad de marca · en proceso",
      title: "U.Dent",
      meta: [["cliente", "estudio dental"], ["servicios", "naming, logotipo, isotipo, papelería"], ["año", "2026"]],
      text: [
        "Naming e identidad para un estudio dental. La U del logotipo está dibujada con dieciséis puntos: las dieciséis piezas de la arcada superior, con los molares atrás y los incisivos adelante.",
        "El sistema combina un peso liviano y uno pesado separados por un punto, como en Estudio.Dental o Turnos.En el día. Negro y blanco, con un único acento verde bosque."
      ],
      slides: [
        { src: "assets/img/udent/01.svg", alt: "Logotipo de U.Dent con el isotipo de puntos, claro sobre negro" },
        { src: "assets/img/udent/02.svg", alt: "Logotipo de U.Dent sobre blanco, con el punto en verde bosque" },
        { src: "assets/img/udent/03.svg", alt: "Isotipo de U.Dent: la U de dieciséis puntos sobre verde bosque" },
        { alt: "Sistema liviano.pesado de U.Dent", html:
          '<div class="sys">' +
          '<p><span class="l">Estudio</span><span class="d">.</span><span class="b">Dental</span></p>' +
          '<p><span class="l">Turnos</span><span class="d">.</span><span class="b">En el día</span></p>' +
          '<p><span class="l">Carillas</span><span class="d">.</span><span class="b">En 7 días</span></p>' +
          '<p><span class="l">Longevidad</span><span class="d">.</span><span class="b">Oral</span></p>' +
          '</div>' }
      ]
    },
    identidad: {
      kind: "identidad propia",
      title: "cactus®",
      meta: [["cliente", "cactus®"], ["servicios", "logotipo, reducciones, trama, manual de marca"], ["año", "2026"]],
      text: [
        "Nuestra propia marca: un logotipo en Poppins Bold con una A dibujada a mano en forma de estrella, dos reducciones para formatos chicos y una trama a 20° para fondos.",
        "Tres colores (verde, negro y blanco) y la Aston Script para los remates."
      ],
      slides: [
        { src: "assets/img/logo-papel-negro.webp", alt: "Logotipo de cactus® en blanco sobre papel negro" },
        { src: "assets/img/cactus-papel-verde.webp", alt: "Logotipo de cactus® impreso sobre papel verde" },
        { src: "assets/img/trama-verde.webp", alt: "Trama de la A estrella a 20 grados sobre verde" }
      ]
    },
    nosllaman: {
      kind: "campaña",
      title: "Nos llaman?",
      meta: [["cliente", "cactus®"], ["servicios", "afiches, redes, video"], ["año", "2026"]],
      text: [
        "La campaña de lanzamiento de cactus®: un teléfono que suena y es tu marca preguntando por nosotros.",
        "Afiches en dos versiones, historias para redes y un video de marca."
      ],
      slides: [
        { src: "assets/img/afiche-blanco.webp", alt: "Afiche Nos llaman? sobre blanco, con el teléfono verde" },
        { src: "assets/img/afiche-negro.webp", alt: "Afiche Nos llaman? sobre negro" }
      ]
    },
    afiches: {
      kind: "afiches tipográficos",
      title: "Probando frases",
      meta: [["cliente", "cactus®"], ["servicios", "tipografía, afiches"], ["año", "2026"]],
      text: [
        "Pruebas de cómo conviven la Poppins y la Aston Script en las piezas de la marca: juntas, por separado y con todos los colores."
      ],
      slides: [
        { src: "assets/img/poster-frases-verde.webp", alt: "Afiche verde: probando frases para testear distintas gráficas" },
        { src: "assets/img/poster-colores-negro.webp", alt: "Afiche negro: probando todos los colores juntos" },
        { src: "assets/img/poster-frases-negro.webp", alt: "Afiche negro: probando frases, versión negra" }
      ]
    }
  };

  window.__cactusReady = true;

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var root = document.documentElement;
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  var motion = root.classList.contains("motion");
  var lenis = null;
  var waUrl = function (text) { return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text); };
  function playQuiet(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }

  /* sin viudas: une las dos últimas palabras con un espacio que no corta,
     así nunca queda una palabra sola en la última línea */
  function noWidow(el) {
    if (!el || (el.textContent.trim().match(/\s+/g) || []).length < 2) return; // con menos de 3 palabras no hace falta
    var nodes = [], tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n, word = false;
    while ((n = tw.nextNode())) nodes.push(n);
    for (var k = nodes.length - 1; k >= 0; k--) {
      var v = nodes[k].nodeValue;
      for (var i = v.length - 1; i >= 0; i--) {
        if (!/\s/.test(v.charAt(i))) { word = true; continue; }
        if (word) { nodes[k].nodeValue = v.slice(0, i) + " " + v.slice(i + 1); return; }
      }
    }
  }
  var WIDOWS = ".somos__lead, .somos__body, .sec-lead, .srv__desc, .warn__body, .srv-cta__sel, .works__hint";
  $$(WIDOWS).forEach(noWidow);
  // con sonido; si el navegador no lo deja, arranca en silencio (se activa desde los controles)
  function playLoud(v) {
    var p = v.play();
    if (p && p.catch) p.catch(function (err) { if (err && err.name === "NotAllowedError") { v.muted = true; playQuiet(v); } });
  }

  /* ---------- contacto ---------- */
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
  $$("[data-wa]").forEach(function (a) { a.href = waUrl("Hola cactus! Quiero hacer una consulta."); });
  var mailLink = $("[data-mail]");
  if (mailLink) mailLink.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Consulta desde la web");

  var copyBtn = $("#copy-mail");
  if (copyBtn) copyBtn.addEventListener("click", function () {
    var done = function () {
      copyBtn.classList.add("is-copied"); copyBtn.textContent = "¡copiado!";
      clearTimeout(copyBtn._t);
      copyBtn._t = setTimeout(function () { copyBtn.classList.remove("is-copied"); copyBtn.textContent = "copiar"; }, 1800);
    };
    var fallback = function () {
      var ta = document.createElement("textarea");
      ta.value = CONFIG.email; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      ta.remove(); done();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(CONFIG.email).then(done, fallback);
    else fallback();
  });

  /* ---------- servicios: elegís uno o varios y consultás todo junto ---------- */
  var askBtn = $("#ask-btn"), askN = $("[data-ask-n]"), askSel = $("#ask-sel");
  var askIdle = askSel ? askSel.textContent : "";
  var srvs = $$(".srv");
  function updateAsk(bump) {
    var sel = srvs.filter(function (b) { return b.getAttribute("aria-pressed") === "true"; }).map(function (b) { return b.dataset.srv; });
    askBtn.href = waUrl(sel.length ? "Hola cactus! Quiero consultar por: " + sel.join(", ") + "." : "Hola cactus! Quiero hacer una consulta.");
    askN.hidden = !sel.length;
    askN.textContent = sel.length;
    if (askSel) { askSel.innerHTML = sel.length ? "Elegiste: <b>" + sel.join(", ") + "</b>." : askIdle; noWidow(askSel); }
    // un golpecito al botón cada vez que cambia la selección, para que se note
    if (bump && window.gsap && motion) gsap.fromTo(askBtn, { scale: 1.06 }, { scale: 1, duration: 0.6, ease: "back.out(3)", overwrite: true });
  }
  srvs.forEach(function (b) {
    b.addEventListener("click", function () {
      b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
      updateAsk(true);
    });
  });
  updateAsk(false);

  /* servicios: en el celu el cartel de "atención" asoma del costado y se abre (o se cierra) al tocarlo */
  var warn = $(".srv-head .warn"), smallMQ = window.matchMedia("(max-width: 760px)");
  if (warn) {
    var openWarn = function (open) {
      warn.classList.toggle("is-open", open);
      if (smallMQ.matches) warn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    var setWarn = function () {
      if (smallMQ.matches) {
        warn.setAttribute("role", "button"); warn.setAttribute("tabindex", "0");
        warn.setAttribute("aria-expanded", warn.classList.contains("is-open") ? "true" : "false");
      } else {
        ["role", "tabindex", "aria-expanded"].forEach(function (a) { warn.removeAttribute(a); });
        warn.classList.remove("is-open");
      }
    };
    warn.addEventListener("click", function (e) {
      if (!smallMQ.matches) return;
      e.stopPropagation();
      openWarn(!warn.classList.contains("is-open"));
    });
    warn.addEventListener("keydown", function (e) {
      if (smallMQ.matches && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openWarn(!warn.classList.contains("is-open")); }
    });
    document.addEventListener("click", function () { if (warn.classList.contains("is-open")) openWarn(false); });
    setWarn();
    if (smallMQ.addEventListener) smallMQ.addEventListener("change", setWarn); else smallMQ.addListener(setWarn);
  }

  /* ---------- header (siempre negro): se vuelve sólido apenas bajás ---------- */
  var hdr = $("#hdr"), pvOpen = false;
  if ("IntersectionObserver" in window) {
    var mark = document.createElement("div");
    mark.setAttribute("aria-hidden", "true");
    mark.style.cssText = "position:absolute;top:0;left:0;width:1px;height:10px;pointer-events:none";
    document.body.prepend(mark);
    new IntersectionObserver(function (en) { hdr.classList.toggle("is-solid", !en[0].isIntersecting); }).observe(mark);

    // el video de la mesa de trabajos: se carga recién cerca de la pantalla y se pausa cuando no se ve
    if (motion) {
      var vidIO = new IntersectionObserver(function (en) {
        en.forEach(function (e) {
          var v = e.target;
          v._inView = e.isIntersecting;
          if (e.isIntersecting && !pvOpen) {
            if (!v.getAttribute("src")) v.src = v.dataset.src;
            playQuiet(v);
          } else if (!v.paused) v.pause();
        });
      }, { rootMargin: "20% 0px 20% 0px" });
      $$(".piece video").forEach(function (v) { vidIO.observe(v); });
    }

    // el teléfono suena solo mientras la banda está en pantalla
    $$(".band--call").forEach(function (b) {
      new IntersectionObserver(function (en) { b.classList.toggle("is-off", !en[0].isIntersecting); }).observe(b);
    });

    /* aparecer al scrollear: los que entran juntos salen escalonados */
    if (motion) {
      var rvIO = new IntersectionObserver(function (entries) {
        var k = 0;
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.style.transitionDelay = (k++ * 0.07) + "s";
          en.target.classList.add("in");
          rvIO.unobserve(en.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      $$(".rv").forEach(function (el) { rvIO.observe(el); });
    }
  } else {
    $$(".rv").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- anclas ---------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      var el = id && id.length > 1 ? document.getElementById(id.slice(1)) : null;
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset: id === "#inicio" ? 0 : -40, duration: 1.4, easing: function (t) { return 1 - Math.pow(1 - t, 4); } });
      else el.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- proyecto abierto: imágenes + panel de texto ---------- */
  var pv = $("#pv"), pvSlides = $("#pv-slides"), pvCount = $("#pv-count"), pvAt = 0, pvList = [], pvLast = null;
  function pvGo(i) {
    if (!pvList.length) return;
    pvAt = (i + pvList.length) % pvList.length;
    pvList.forEach(function (s, k) {
      s.classList.toggle("on", k === pvAt);
      // los videos: el que queda a la vista arranca, los demás se pausan
      var v = $("video", s);
      if (v) { if (k === pvAt) playLoud(v); else if (!v.paused) v.pause(); }
    });
    pvCount.textContent = pad(pvAt + 1) + " / " + pad(pvList.length);
    var single = pvList.length < 2;
    $$(".pv__nav").forEach(function (b) { b.hidden = single; });
    pvCount.hidden = single;
  }
  function pvOpenProject(id, slide) {
    var p = PROJECTS[id];
    if (!p) return;
    pvLast = document.activeElement;
    pvSlides.innerHTML = "";
    pvList = p.slides.map(function (s) {
      var f = document.createElement("figure");
      f.className = "pv__slide";
      if (s.html) { f.innerHTML = s.html; f.setAttribute("role", "img"); f.setAttribute("aria-label", s.alt || ""); }
      else if (s.video) {
        var v = document.createElement("video");
        v.controls = true; v.playsInline = true; v.preload = "metadata";
        if (s.w) { v.width = s.w; v.height = s.h; }
        if (s.poster) v.poster = s.poster;
        v.src = s.video;
        v.setAttribute("aria-label", s.alt || "");
        f.appendChild(v);
      }
      else { var img = document.createElement("img"); img.src = s.src; img.alt = s.alt || ""; img.draggable = false; f.appendChild(img); }
      pvSlides.appendChild(f);
      return f;
    });
    $("#pv-kind").textContent = p.kind;
    $("#pv-title").textContent = p.title;
    $("#pv-meta").innerHTML = p.meta.map(function (m) { return "<div><dt>" + m[0] + "</dt><dd>" + m[1] + "</dd></div>"; }).join("");
    $("#pv-text").innerHTML = p.text.map(function (t) { return "<p>" + t + "</p>"; }).join("");
    noWidow($("#pv-title")); $$("#pv-text p").forEach(noWidow);
    pv.hidden = false; pvOpen = true;
    $$(".piece video").forEach(function (v) { if (!v.paused) v.pause(); });
    document.body.classList.add("no-scroll");
    if (lenis) lenis.stop();
    pvGo(slide || 0);
    if (hasGSAP && motion) {
      gsap.fromTo(pv, { opacity: 0 }, { opacity: 1, duration: 0.35 });
      gsap.fromTo(".pv__panel > *", { x: 28, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, stagger: 0.05, ease: "expo.out", delay: 0.05 });
      gsap.fromTo(pvSlides, { scale: 0.96 }, { scale: 1, duration: 0.8, ease: "expo.out" });
    }
    $("#pv-x").focus();
  }
  function pvClose() {
    if (!pvOpen) return;
    pvOpen = false; pv.hidden = true;
    $$("video", pvSlides).forEach(function (v) { v.pause(); });
    if (motion) $$(".piece video").forEach(function (v) { if (v._inView && v.getAttribute("src")) playQuiet(v); });
    document.body.classList.remove("no-scroll");
    if (lenis) lenis.start();
    if (pvLast) pvLast.focus({ preventScroll: true });
  }
  $("#pv-x").addEventListener("click", pvClose);
  $$("[data-pv]").forEach(function (b) { b.addEventListener("click", function () { pvGo(pvAt + Number(b.dataset.pv)); }); });
  // tocar la imagen pasa a la siguiente (en los videos, el toque es para sus controles)
  pvSlides.addEventListener("click", function (e) { if (e.target.closest("video")) return; pvGo(pvAt + 1); });
  document.addEventListener("keydown", function (e) {
    if (!pvOpen) return;
    if (e.key === "Escape") pvClose();
    if (e.target && e.target.tagName === "VIDEO") return; // las flechas adelantan o atrasan el video
    if (e.key === "ArrowRight") pvGo(pvAt + 1);
    if (e.key === "ArrowLeft") pvGo(pvAt - 1);
  });
  var tsx = null;
  $("#pv-stage").addEventListener("touchstart", function (e) { tsx = e.target.closest("video") ? null : e.touches[0].clientX; }, { passive: true });
  $("#pv-stage").addEventListener("touchend", function (e) {
    if (tsx == null) return;
    var dx = e.changedTouches[0].clientX - tsx; tsx = null;
    if (Math.abs(dx) > 50) pvGo(pvAt + (dx < 0 ? 1 : -1));
  });

  var pieces = $$(".piece");
  pieces.forEach(function (p) {
    p.setAttribute("tabindex", "0");
    p.setAttribute("role", "button");
    p.setAttribute("aria-label", "Ver el proyecto: " + $(".piece__tag", p).textContent.replace(/\s+/g, " ").trim());
    var open = function () { pvOpenProject(p.dataset.project, Number(p.dataset.slide) || 0); };
    p.addEventListener("click", function () { if (!p._dragged) open(); });
    p.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });

  /* =======================================================================
     Movimiento (GSAP + ScrollTrigger + Lenis)
     ======================================================================= */
  if (!hasGSAP) { root.classList.remove("js"); return; }
  gsap.registerPlugin(ScrollTrigger);
  dragPieces(); // arrastrar anda siempre que haya GSAP

  if (!motion) { gsap.set(".hero__tag .w, .hl", { opacity: 1 }); return; }

  if (window.Lenis) {
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  var fontsReady = Promise.race([
    document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
    new Promise(function (r) { setTimeout(r, 1500); })
  ]);
  fontsReady.then(function () {
    [heroIntro, parallax, servicesFade, floatPieces].forEach(function (fn) {
      try { fn(); } catch (e) { if (window.console) console.error("[cactus]", fn.name, e); }
    });
    gsap.set(".hero__tag .w, .hl", { opacity: 1 });
    ScrollTrigger.refresh();
  });
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });

  /* inicio: la única animación es la de cactus, letra por letra. "no te quedes afuera" queda quieto */
  function heroIntro() {
    gsap.set(".hl", { opacity: 1 });
    gsap.timeline({ defaults: { ease: "expo.out" } })
      .from(".hl:not(.hl--r)", { y: 400, duration: 1.3, stagger: 0.07 }, 0.2)
      .from(".hl--r", { scale: 0, transformOrigin: "50% 50%", duration: 0.7, ease: "back.out(2.4)" }, 1.05);
  }

  /* la trama se desliza adentro de su banda */
  function parallax() {
    $$(".plx").forEach(function (f) {
      var el = $(".band__bg", f) || $("img, svg", f), amt = Math.min(9.6, parseFloat(f.dataset.plx) || 8);
      gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: "none", scrollTrigger: { trigger: f, start: "top bottom", end: "bottom top", scrub: true } });
    });
  }

  /* servicios: el fondo se funde de negro a blanco al llegar y vuelve a negro al irse */
  function servicesFade() {
    var srv = $("#servicios");
    var inST = { trigger: srv, start: "top 62%", end: "top 18%", scrub: true };
    var outST = { trigger: "#trabajos", start: "top 80%", end: "top 45%", scrub: true };
    gsap.fromTo(root, { "--page": "#191919" }, { "--page": "#F6F6F6", ease: "power1.inOut", scrollTrigger: inST });
    gsap.fromTo(srv, { "--s-fg": "#F6F6F6" }, { "--s-fg": "#191919", ease: "power3.inOut", scrollTrigger: inST });
    gsap.fromTo(root, { "--page": "#F6F6F6" }, { "--page": "#191919", ease: "power2.inOut", immediateRender: false, scrollTrigger: outST });
    gsap.fromTo(srv, { "--s-fg": "#191919" }, { "--s-fg": "#F6F6F6", ease: "power3.inOut", immediateRender: false, scrollTrigger: outST });
  }

  /* trabajos: caen sobre la mesa y flotan a distintas velocidades con el scroll */
  function floatPieces() {
    var board = $("#board"), small = window.innerWidth < 901;
    pieces.forEach(function (p) {
      var fl = $(".piece__float", p), img = $(".piece__frame img, .piece__frame video", p);
      var px = (parseFloat(p.dataset.float) || 60) * (small ? 0.35 : 1);
      gsap.fromTo(fl, { y: px }, { y: -px, ease: "none", scrollTrigger: { trigger: board, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.set(img, { scale: 1.07 });
      gsap.fromTo(img, { yPercent: -3 }, { yPercent: 3, ease: "none", scrollTrigger: { trigger: p, start: "top bottom", end: "bottom top", scrub: true } });
    });
    gsap.from($$(".piece__tilt"), {
      y: -60, scale: 1.1, opacity: 0,
      rotation: function (i) { return (i % 2 ? 1 : -1) * (6 + (i * 3) % 6); },
      duration: 1.1, stagger: 0.08, ease: "power3.out",
      scrollTrigger: { trigger: board, start: "top 80%" }
    });
  }

  /* trabajos: se arrastran con el mouse o con el dedo (con inercia y un poco de giro).
     Con el dedo, si arrancás de costado movés la pieza; si arrancás para arriba o abajo, scrollea la página */
  function dragPieces() {
    var board = $("#board"), topZ = 10;
    pieces.forEach(function (p) {
      var tilt = $(".piece__tilt", p);
      p.addEventListener("pointerdown", function (e) {
        var touch = e.pointerType !== "mouse";
        if (!touch && e.button !== 0) return;
        if (!touch) e.preventDefault();
        var x0 = gsap.getProperty(p, "x"), y0 = gsap.getProperty(p, "y");
        var sx = e.clientX, sy = e.clientY, lx = sx, lt = performance.now(), vx = 0, vy = 0, ly = sy, moved = false;
        var br = board.getBoundingClientRect(), pr = p.getBoundingClientRect();
        var baseL = pr.left - x0, baseT = pr.top - y0, w = pr.width, h = pr.height;
        var clampX = gsap.utils.clamp(br.left - baseL - w * 0.35, br.right - baseL - w * 0.65);
        var clampY = gsap.utils.clamp(br.top - baseT - h * 0.25, br.bottom - baseT - h * 0.75);
        try { p.setPointerCapture(e.pointerId); } catch (err) {}
        function move(ev) {
          var dx = ev.clientX - sx, dy = ev.clientY - sy;
          if (!moved) {
            if (touch) {
              if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) { up(); return; } // es scroll: lo deja pasar
              if (Math.abs(dx) < 10) return;
            } else if (Math.hypot(dx, dy) <= 5) return;
            moved = true;
            gsap.killTweensOf(p);
            x0 = gsap.getProperty(p, "x"); y0 = gsap.getProperty(p, "y"); sx = ev.clientX; sy = ev.clientY; dx = 0; dy = 0;
            p.style.zIndex = ++topZ;
            p.classList.add("is-drag");
            gsap.to(tilt, { scale: 1.04, duration: 0.3, ease: "power2.out" });
          }
          gsap.set(p, { x: clampX(x0 + dx), y: clampY(y0 + dy) });
          var now = performance.now(), dt = Math.max(8, now - lt);
          vx = (ev.clientX - lx) / dt; vy = (ev.clientY - ly) / dt; lx = ev.clientX; ly = ev.clientY; lt = now;
          gsap.to(tilt, { rotation: gsap.utils.clamp(-12, 12, vx * 8), duration: 0.35, ease: "power2.out", overwrite: "auto" });
        }
        function up() {
          p.removeEventListener("pointermove", move);
          p.removeEventListener("pointerup", up);
          p.removeEventListener("pointercancel", up);
          if (!moved) return; // fue un clic: abre el proyecto
          p.classList.remove("is-drag");
          p._dragged = true;
          setTimeout(function () { p._dragged = false; }, 0);
          gsap.to(p, { x: clampX(gsap.getProperty(p, "x") + vx * 160), y: clampY(gsap.getProperty(p, "y") + vy * 160), duration: 1, ease: "power3.out" });
          gsap.to(tilt, { rotation: 0, scale: 1, duration: 1.1, ease: "elastic.out(1, 0.5)" });
        }
        p.addEventListener("pointermove", move);
        p.addEventListener("pointerup", up);
        p.addEventListener("pointercancel", up);
      });
    });
  }
})();
