/* ==========================================================================
   ABDULLAH — Portfolio · shared script
   ========================================================================== */

/* -------------------------------------------------------------------------
   CONFIG — the one place to edit contact details and links.
   Leave a URL as "" until you have the real one; the site then shows a
   friendly note instead of linking to a made-up address.
   ------------------------------------------------------------------------- */
const CONFIG = {
  whatsappNumber: "923123774418",            // 03123774418 in international format
  email: "abdullah.uiuxdesigner@gmail.com",
  phoneDisplay: "+92 311 6039723",            // as shown in your designs
  phoneLink: "+923116039723",
  location: "Lahore, Pakistan",
  cvUrl: "",                                  // e.g. "assets/Abdullah-CV.pdf"
  socials: {
    facebook: "",                             // e.g. "https://facebook.com/yourname"
    twitter: "",
    instagram: ""
  },
  // Optional live links per project card (key = data-project value). Empty = opens the image preview.
  projects: {
    "ai-automation": "",
    "portfolio": "",
    "cloth-house-1": "",
    "cloth-house-2": "",
    "crypto-1": "",
    "crypto-2": ""
  }
};

/* ------------------------------ Icons ---------------------------------- */
const ICONS = {
  "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "arrow-up": '<path d="M12 19V5M5 12l7-7 7 7"/>',
  star: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.400l-5.900 3.100 1.200-6.500L2.500 9.400l6.600-.9z"/>',
  cap: '<path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 2.200 9 2.200 12 0v-5"/>',
  devices: '<rect x="3" y="4" width="14" height="11" rx="2"/><rect x="13" y="11" width="8" height="10" rx="1.500" fill="#1f1f1f"/><path d="M7 19h4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  pen: '<path d="M12 20h9M16.500 3.500a2.100 2.100 0 013 3L7 19l-4 1 1-4z"/>',
  bolt: '<path d="M13 2L3 14h9l-1 8 10-12h-9z" fill="currentColor"/>',
  quote: '<path d="M4 17c0-5 2-9 6-10v3c-2 1-3 3-3 5h3v5H4zm10 0c0-5 2-9 6-10v3c-2 1-3 3-3 5h3v5h-6z" fill="currentColor" stroke="none"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 15l2 2 4-4"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
  phone: '<path d="M22 16.900v3a2 2 0 01-2.200 2 19.800 19.800 0 01-8.600-3.100 19.500 19.500 0 01-6-6A19.800 19.800 0 012.100 4.200 2 2 0 014.100 2h3a2 2 0 012 1.700c.1 1 .4 1.900.7 2.800a2 2 0 01-.5 2.100L8.100 9.900a16 16 0 006 6l1.300-1.300a2 2 0 012.100-.4c.9.300 1.800.6 2.800.7a2 2 0 011.700 2z"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  download: '<path d="M20 16.500A4.500 4.500 0 0017.500 8h-1.300A7 7 0 103 14.900M12 12v9M8 17l4 4 4-4"/>',
  "chevron-down": '<path d="M6 9l6 6 6-6"/>',
  send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  facebook: '<path d="M14 8h2V5h-2.500C11.300 5 10 6.400 10 8.500V10H8v3h2v7h3v-7h2.200l.4-3H13V8.800c0-.5.200-.8 1-.8z" fill="currentColor" stroke="none"/>',
  twitter: '<path d="M21 6.500c-.6.300-1.300.5-2 .6.700-.4 1.200-1.100 1.500-1.900-.7.400-1.400.7-2.200.8a3.500 3.500 0 00-6 3.200A10 10 0 013.700 5.500a3.500 3.500 0 001.100 4.700c-.6 0-1.100-.2-1.600-.4 0 1.700 1.200 3.100 2.800 3.500-.5.100-1 .2-1.600.1.400 1.400 1.700 2.400 3.200 2.400A7 7 0 013 17.100 10 10 0 008.400 18.700c6.500 0 10-5.400 10-10v-.5c.7-.5 1.200-1.100 1.600-1.700z" fill="currentColor" stroke="none"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="4.500" stroke-width="2.200"/><circle cx="12" cy="12" r="3.600" stroke-width="2.200"/><circle cx="16.800" cy="7.200" r="1" fill="currentColor" stroke="none"/>',
  figma: '<path d="M8 2h4v6H8a3 3 0 010-6z" fill="#F24E1E" stroke="none"/><path d="M12 2h4a3 3 0 010 6h-4z" fill="#FF7262" stroke="none"/><path d="M8 8h4v6H8a3 3 0 010-6z" fill="#A259FF" stroke="none"/><circle cx="15" cy="11" r="3" fill="#1ABCFE" stroke="none"/><path d="M8 14h4v3a3 3 0 11-4-2.800z" fill="#0ACF83" stroke="none"/>'
};
const svg = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[n] || ""}</svg>`;
const hydrateIcons = (root = document) => root.querySelectorAll("[data-icon]:not([data-done])").forEach((el) => { el.insertAdjacentHTML("afterbegin", svg(el.dataset.icon)); el.dataset.done = "1"; });

/* ------------------------ WhatsApp helpers ------------------------------ */
const waLink = (text = "") => `https://wa.me/${CONFIG.whatsappNumber}${text ? "?text=" + encodeURIComponent(text) : ""}`;
const openWhatsApp = (text) => { const w = window.open(waLink(text), "_blank", "noopener,noreferrer"); if (!w) window.location.href = waLink(text); };

/* ------------------------------ Toast ---------------------------------- */
let toastTimer;
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 3800);
}

/* ------------------- Shared header / CTA / footer ----------------------- */
const NAV = [["home", "Home", "index.html"], ["about", "About", "about.html"], ["services", "Services", "services.html"], ["project", "Project", "project.html"], ["contact", "Contact", "contact.html"]];

function headerHTML(page) {
  const links = NAV.map(([k, label, href]) => `<a href="${href}"${k === "contact" ? ' class="nav-contact' + (page === k ? " active" : "") + '"' : page === k ? ' class="active"' : ""}${page === k ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  return `<header class="site-header"><div class="container header-inner">
    <a class="logo" href="index.html" aria-label="Abdullah — home">ABDULLAH</a>
    <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav" data-icon="menu"></button>
    <nav class="nav" id="site-nav" aria-label="Main">${links}</nav></div></header>`;
}
const ctaHTML = () => `<section class="cta" id="get-in-touch" aria-labelledby="cta-title"><div class="container cta-grid">
  <div><p class="eyebrow">Get in touch</p><h2 class="h2" id="cta-title">Let’s Work<br>Together</h2>
  <p class="lead">I offer a range of design services to help you build your brand and create meaningful digital experiences.</p>
  <a class="btn btn-primary" href="#" data-wa="Hi Abdullah, I’d like to work with you.">Contact Me <i data-icon="arrow-right"></i></a></div>
  <ul class="contact-list">
    <li><span class="ring" data-icon="mail"></span><div><strong>Email</strong><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></div></li>
    <li><span class="ring" data-icon="phone"></span><div><strong>Phone</strong><a href="tel:${CONFIG.phoneLink}">${CONFIG.phoneDisplay}</a></div></li>
    <li><span class="ring" data-icon="pin"></span><div><strong>Location</strong><span>${CONFIG.location}</span></div></li>
  </ul></div></section>`;
const footerHTML = () => `<footer class="site-footer"><div class="container footer-inner">
  <a class="logo" href="index.html">ABDULLAH</a><p class="copy">© 2023. Ideapeel. All rights reserved.</p>
  <div class="socials">${["facebook", "twitter", "instagram"].map((n) => `<button type="button" data-social="${n}" aria-label="${n[0].toUpperCase() + n.slice(1)}" data-icon="${n}"></button>`).join("")}</div>
  </div></footer>
  <button class="to-top" type="button" aria-label="Back to top" data-icon="arrow-up"></button>`;

document.querySelectorAll("[data-include]").forEach((el) => {
  const page = document.body.dataset.page, k = el.dataset.include;
  el.outerHTML = k === "header" ? headerHTML(page) : k === "cta" ? ctaHTML() : footerHTML();
});
hydrateIcons();

/* ------------------------------ Behaviour ------------------------------- */
// Mobile menu
const toggle = document.querySelector(".nav-toggle"), nav = document.querySelector(".nav");
if (toggle && nav) {
  const setMenu = (open) => { nav.classList.toggle("open", open); toggle.setAttribute("aria-expanded", open); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu"); toggle.innerHTML = svg(open ? "close" : "menu"); };
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); toggle.focus(); } });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  matchMedia("(min-width: 901px)").addEventListener("change", (m) => m.matches && setMenu(false));
}

// WhatsApp buttons
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-wa]");
  if (!a) return;
  e.preventDefault(); openWhatsApp(a.dataset.wa);
});
document.querySelectorAll("a[data-wa]").forEach((a) => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener noreferrer"; });

// Social icons + CV
document.addEventListener("click", (e) => {
  const s = e.target.closest("[data-social]");
  if (s) { const url = CONFIG.socials[s.dataset.social]; url ? window.open(url, "_blank", "noopener,noreferrer") : toast("Add your " + s.dataset.social + " URL in js/script.js (CONFIG.socials)."); }
  const cv = e.target.closest("[data-cv]");
  if (cv) { e.preventDefault(); CONFIG.cvUrl ? window.open(CONFIG.cvUrl, "_blank", "noopener") : toast("Add your CV file path in js/script.js (CONFIG.cvUrl)."); }
});

// Back to top
const topBtn = document.querySelector(".to-top");
if (topBtn) {
  const onScroll = () => topBtn.classList.toggle("show", window.scrollY > 500);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  topBtn.addEventListener("click", () => scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));
}

// Project filters
const chips = document.querySelectorAll(".chip");
chips.forEach((chip) => chip.addEventListener("click", () => {
  chips.forEach((c) => c.setAttribute("aria-pressed", c === chip));
  const f = chip.dataset.filter;
  document.querySelectorAll(".project[data-cat]").forEach((p) => p.classList.toggle("hidden", f !== "all" && !p.dataset.cat.split(" ").includes(f)));
}));

// Project cards: open the configured URL, otherwise a larger preview
const lb = document.querySelector(".lightbox");
document.querySelectorAll(".project-img[data-project]").forEach((btn) => btn.addEventListener("click", () => {
  const url = CONFIG.projects[btn.dataset.project];
  if (url) return window.open(url, "_blank", "noopener,noreferrer");
  if (!lb) return;
  const card = btn.closest(".project");
  lb.querySelector("img").src = btn.querySelector("img").src;
  lb.querySelector("img").alt = btn.querySelector("img").alt;
  lb.querySelector("figcaption").innerHTML = `${card.querySelector("h3").textContent}<span>${card.querySelector(".meta").textContent.replace(/\s+/g, " ").trim()}</span>`;
  lb.classList.add("open"); lb.querySelector(".lightbox-close").focus();
  lb._from = btn;
}));
if (lb) {
  const close = () => { lb.classList.remove("open"); lb._from && lb._from.focus(); };
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".lightbox-close")) close(); });
  document.addEventListener("keydown", (e) => e.key === "Escape" && lb.classList.contains("open") && close());
}

// FAQ accordion
document.querySelectorAll(".faq-q").forEach((q) => q.addEventListener("click", () => {
  const item = q.closest(".faq-item"), open = !item.classList.contains("open");
  item.classList.toggle("open", open); q.setAttribute("aria-expanded", open);
}));

// Contact form → WhatsApp
const form = document.getElementById("contact-form");
if (form) {
  const subject = form.elements.subject;
  subject.addEventListener("change", () => subject.classList.toggle("has-value", !!subject.value));
  const rules = {
    name: (v) => v.trim().length >= 2 || "Please enter your name.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.",
    subject: (v) => !!v || "Please select a subject.",
    message: (v) => v.trim().length >= 10 || "Please write at least 10 characters."
  };
  const check = (f) => { const r = rules[f.name](f.value), wrap = f.closest(".field"); wrap.classList.toggle("invalid", r !== true); if (r !== true) wrap.querySelector(".err").textContent = r; f.setAttribute("aria-invalid", r !== true); return r === true; };
  Object.keys(rules).forEach((n) => form.elements[n].addEventListener("blur", () => check(form.elements[n])));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = Object.keys(rules).map((n) => check(form.elements[n])).every(Boolean);
    if (!ok) { form.querySelector(".invalid input, .invalid select, .invalid textarea")?.focus(); return; }
    const v = (n) => form.elements[n].value.trim();
    const text = ["New Portfolio Contact Message", `Name: ${v("name")}`, `Email: ${v("email")}`, `Subject: ${form.elements.subject.selectedOptions[0].text}`, `Message: ${v("message")}`].join("\n");
    openWhatsApp(text);
    toast("WhatsApp is opening with your message ready. Press send there to deliver it.");
  });
}

/* ------------------------------- Motion --------------------------------
   Scroll reveals, counters, header, progress bar, card spotlight, tilt,
   magnetic buttons and a custom cursor. Styles live in the "MOTION LAYER"
   section of css/style.css. All of it is skipped for reduced motion.
   ------------------------------------------------------------------------- */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const raf = (fn) => { let q = false; return (...a) => { if (q) return; q = true; requestAnimationFrame(() => { q = false; fn(...a); }); }; };

  // Header shrink + scroll progress (cheap, kept even for reduced motion minus the bar)
  const header = document.querySelector(".site-header");
  const bar = document.createElement("div"); bar.className = "scroll-progress"; bar.setAttribute("aria-hidden", "true"); document.body.prepend(bar);
  const onScroll = raf(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    header && header.classList.toggle("scrolled", scrollY > 30);
  });
  addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onScroll); onScroll();

  // Card spotlight follows the pointer
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest && e.target.closest(".card");
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", `${e.clientX - r.left}px`); c.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, { passive: true });

  if (reduce) return;

  // Decorative glow behind portraits
  document.querySelectorAll(".portrait").forEach((p) => p.insertAdjacentHTML("afterbegin", '<span class="glow" aria-hidden="true"></span>'));

  /* ---- Scroll reveal ---- */
  document.documentElement.classList.add("js-motion");
  const groups = [
    // [selector, extra class, stagger children?]
    [".hero .eyebrow, .hero .h1, .hero .lead, .hero .btn", "", true],
    [".hero-art", "zoom"],
    [".stats .stat", "", true],
    [".section-head > *, .skills-head > *", "", true],
    [".about-intro > .portrait", "from-left"],
    [".about-intro > div:last-child > *, .journey > div:first-child > *, .split > div:first-child > *, .why > div:first-child > *, .talk > div:first-child > *, .find > div:first-child > *, .cta-grid > div:first-child > *", "", true],
    [".projects-grid > .project", "", true],
    [".service-grid4 > *, .service-grid6 > *, .skills-grid > *, .testimonials > *, .process > *, .why-cards > *, .feature-grid > *, .timeline > *", "", true],
    [".filters .chip", "", true],
    [".contact-list li", "from-right", true],
    [".chart-card, .talk-card, .map", "from-right"],
    [".faq-item", "", true],
    [".perks .perk", "", true]
  ];
  const targets = new Set();
  groups.forEach(([sel, extra, stagger]) => {
    const seen = new Map();
    document.querySelectorAll(sel).forEach((el) => {
      if (targets.has(el) || el.closest(".lightbox")) return;
      targets.add(el); el.classList.add("reveal"); extra && el.classList.add(extra);
      if (stagger) { const p = el.parentElement, i = seen.get(p) || 0; seen.set(p, i + 1); el.style.setProperty("--d", `${Math.min(i, 8) * 90}ms`); }
    });
  });
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target; io.unobserve(el);
    el.classList.add("in");
    // after the entrance finishes, hand control back to the normal hover transitions
    const delay = parseFloat(getComputedStyle(el).getPropertyValue("--d")) || 0;
    setTimeout(() => { el.classList.remove("reveal", "in", "from-left", "from-right", "zoom"); el.style.removeProperty("--d"); }, delay + 900);
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  targets.forEach((el) => io.observe(el));

  // Timeline line draws in
  document.querySelectorAll(".timeline").forEach((t) => {
    const o = new IntersectionObserver(([en]) => { if (en.isIntersecting) { t.classList.add("drawn"); o.disconnect(); } }, { threshold: 0.15 });
    o.observe(t);
  });

  /* ---- Count-up numbers ---- */
  const countUp = (el) => {
    const m = el.textContent.trim().match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!m) return;
    const [, pre, num, post] = m, end = parseFloat(num), dec = (num.split(".")[1] || "").length, t0 = performance.now(), dur = 1600;
    el.style.minWidth = el.offsetWidth + "px"; // stop layout jumping while digits change
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + (end * eased).toFixed(dec) + post;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const co = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { co.unobserve(en.target); countUp(en.target); } }), { threshold: 0.6 });
  document.querySelectorAll(".stat strong, .chart-stats strong").forEach((el) => co.observe(el));

  /* ---- Project filter: animate items back in ---- */
  document.querySelectorAll(".chip").forEach((chip) => chip.addEventListener("click", () => {
    document.querySelectorAll(".project[data-cat]:not(.hidden)").forEach((p, i) => {
      p.classList.remove("reveal", "in", "show-anim"); void p.offsetWidth;
      p.style.animationDelay = `${i * 70}ms`; p.classList.add("show-anim");
    });
  }));

  /* ---- Form: shake invalid fields on submit ---- */
  const form = document.getElementById("contact-form");
  form && form.addEventListener("submit", () => setTimeout(() => form.querySelectorAll(".field.invalid").forEach((f) => {
    f.classList.remove("shake"); void f.offsetWidth; f.classList.add("shake");
  }), 0));

  if (!finePointer) return;

  /* ---- 3D tilt on portraits ---- */
  document.querySelectorAll(".portrait").forEach((p) => {
    p.addEventListener("pointermove", raf((e) => {
      const r = p.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      p.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    }));
    p.addEventListener("pointerleave", () => { p.style.transform = ""; });
  });

  /* ---- Magnetic buttons ---- */
  document.querySelectorAll(".btn, .nav-contact, .socials button").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect(), x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      b.style.translate = `${x * 0.18}px ${y * 0.25}px`;
    });
    b.addEventListener("pointerleave", () => { b.style.translate = ""; });
  });

  /* ---- Custom cursor ---- */
  const dot = document.createElement("div"), ring = document.createElement("div");
  dot.className = "cursor-dot"; ring.className = "cursor-ring";
  dot.setAttribute("aria-hidden", "true"); ring.setAttribute("aria-hidden", "true");
  document.body.append(dot, ring);
  let mx = -100, my = -100, rx = -100, ry = -100;
  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    document.body.classList.add("cursor-on");
    document.body.classList.toggle("cursor-hover", !!e.target.closest("a, button, .card, .project-img, input, select, textarea, label"));
  }, { passive: true });
  document.addEventListener("pointerleave", () => document.body.classList.remove("cursor-on"));
  addEventListener("pointerdown", () => document.body.classList.add("cursor-down"));
  addEventListener("pointerup", () => document.body.classList.remove("cursor-down"));
  (function follow() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();
})();
