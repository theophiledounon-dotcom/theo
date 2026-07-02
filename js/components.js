/* ==========================================================================
   components.js v2 — Théophile Sèdonou DOUNON
   Header, footer, mobile menu, dark mode, FR/EN, scroll reveal
   Facebook + WhatsApp dans la navbar et le footer
   ========================================================================== */
(function(){
  const WHATSAPP = "https://wa.me/2290163280409";
  const EMAIL    = "theophiledounon@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/th%C3%A9ophile-s%C3%A8donou-dounon-858a6138a";
  const FACEBOOK = "https://www.facebook.com/share/1GkXuvYZ2M/";

  const T = {
    fr: {
      nav_home:"Accueil", nav_about:"À propos", nav_skills:"Compétences",
      nav_projects:"Projets", nav_certs:"Certifications", nav_contact:"Me contacter",
      footer_desc:"Étudiant en Statistique Appliquée à l'ENSPD — Développeur Web Freelance — Leader UNJED-BÉNIN",
      footer_nav:"Navigation", footer_links:"Liens", footer_contact:"Contact",
      footer_copy:"Portfolio Personnel. Tous droits réservés.",
      footer_made:"Fait avec", footer_for:"pour inspirer l'Afrique",
    },
    en: {
      nav_home:"Home", nav_about:"About", nav_skills:"Skills",
      nav_projects:"Projects", nav_certs:"Certifications", nav_contact:"Contact me",
      footer_desc:"Applied Statistics Student at ENSPD — Freelance Web Developer — UNJED-BÉNIN Leader",
      footer_nav:"Navigation", footer_links:"Links", footer_contact:"Contact",
      footer_copy:"Personal Portfolio. All rights reserved.",
      footer_made:"Made with", footer_for:"to inspire Africa",
    }
  };

  let currentLang = localStorage.getItem("lang") || "fr";
  function t(k){ return (T[currentLang]&&T[currentLang][k]) || T.fr[k] || k; }

  function navItems(){
    return [
      { key:"nav_home",     href:"index.html" },
      { key:"nav_about",    href:"a-propos.html" },
      { key:"nav_skills",   href:"competences.html" },
      { key:"nav_projects", href:"projets.html" },
      { key:"nav_certs",    href:"certifications.html" },
    ];
  }

  const ICON_SUN   = `<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>`;
  const ICON_MOON  = `<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></svg>`;
  const ICON_MENU  = `<svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  const ICON_CLOSE = `<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>`;
  const ICON_HEART = `<svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.8 1.8 5 5.6 5 8 5 9.7 6.3 12 9c2.3-2.7 4-4 6.4-4 3.8 0 5.2 3.8 3.6 6.9C19.5 16.4 12 21 12 21z"/></svg>`;

  const ICON_FB = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>`;
  const ICON_WA = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.64.07a8.09 8.09 0 0 1-2.38-1.47 8.94 8.94 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52s.2-.3.3-.5.05-.37-.02-.52-.67-1.61-.91-2.2c-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37 3.35 3.35 0 0 0-1.04 2.49 5.82 5.82 0 0 0 1.22 3.1 13.33 13.33 0 0 0 5.1 4.5c.71.31 1.27.49 1.7.63a4.1 4.1 0 0 0 1.88.12 3.07 3.07 0 0 0 2.01-1.42 2.5 2.5 0 0 0 .17-1.42c-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.65 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 12 2z"/></svg>`;

  function currentPage(){
    if(window.ACTIVE_NAV) return window.ACTIVE_NAV;
    const p = window.location.pathname.split("/").pop();
    return p===""?"index.html":p;
  }

  function buildHeader(){
    const page = currentPage();
    const links = navItems().map(item =>
      `<a href="${item.href}" class="nav-link${item.href===page?" active":""}" data-i18n="${item.key}">${t(item.key)}</a>`
    ).join("");

    return `
    <header class="site-header">
      <div class="container nav-bar">
        <a href="index.html" class="nav-logo">
          <div class="logo-badge">TSD</div>
          <span>Théophile S. DOUNON</span>
        </a>
        <nav class="nav-links" aria-label="Navigation principale">${links}</nav>
        <div class="nav-actions">
          <a href="${FACEBOOK}" target="_blank" rel="noopener noreferrer" class="nav-social-btn fb" aria-label="Facebook">${ICON_FB}</a>
          <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" class="nav-social-btn wa" aria-label="WhatsApp">${ICON_WA}</a>
          <a href="contact.html" class="btn btn-primary nav-cta" data-i18n="nav_contact">${t("nav_contact")}</a>
          <button class="lang-toggle" id="lang-toggle" aria-label="Changer la langue">${currentLang==="fr"?"EN":"FR"}</button>
          <button class="theme-toggle" id="theme-toggle" aria-label="Changer le thème">${ICON_SUN}${ICON_MOON}</button>
          <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Menu" aria-expanded="false">${ICON_MENU}${ICON_CLOSE}</button>
        </div>
      </div>
      <nav class="mobile-nav container" id="mobile-nav" aria-label="Navigation mobile">
        ${links}
        <a href="contact.html" class="btn btn-primary btn-block" data-i18n="nav_contact">${t("nav_contact")}</a>
      </nav>
    </header>`;
  }

  function buildFooter(){
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="grid footer-grid">
          <div>
            <div class="footer-brand-row">
              <div class="logo-badge">TSD</div>
              <span>Théophile Sèdonou DOUNON</span>
            </div>
            <p class="desc" data-i18n="footer_desc">${t("footer_desc")}</p>
            <div class="footer-social-row">
              <a href="${FACEBOOK}" target="_blank" rel="noopener noreferrer" class="footer-social-btn fb" aria-label="Facebook">${ICON_FB}</a>
              <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" class="footer-social-btn wa" aria-label="WhatsApp">${ICON_WA}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_nav">${t("footer_nav")}</h4>
            <ul>
              <li><a href="index.html" data-i18n="nav_home">${t("nav_home")}</a></li>
              <li><a href="a-propos.html" data-i18n="nav_about">${t("nav_about")}</a></li>
              <li><a href="competences.html" data-i18n="nav_skills">${t("nav_skills")}</a></li>
              <li><a href="projets.html" data-i18n="nav_projects">${t("nav_projects")}</a></li>
              <li><a href="certifications.html" data-i18n="nav_certs">${t("nav_certs")}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_contact">${t("footer_contact")}</h4>
            <ul>
              <li><a href="mailto:${EMAIL}">Email</a></li>
              <li><a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="${LINKEDIN}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="${FACEBOOK}" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="contact.html" data-i18n="nav_contact">${t("nav_contact")}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
          <p>&copy; ${year} Théophile Sèdonou DOUNON — <span data-i18n="footer_copy">${t("footer_copy")}</span></p>
          <p class="made-with"><span data-i18n="footer_made">${t("footer_made")}</span> ${ICON_HEART} <span data-i18n="footer_for">${t("footer_for")}</span></p>
        </div>
      </div>
    </footer>`;
  }

  function injectLayout(){
    const h = document.getElementById("header-placeholder");
    const f = document.getElementById("footer-placeholder");
    if(h) h.outerHTML = buildHeader();
    if(f) f.outerHTML = buildFooter();
  }

  function applyLang(lang){
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const v = T[lang]&&T[lang][el.getAttribute("data-i18n")];
      if(v) el.textContent = v;
    });
    const btn = document.getElementById("lang-toggle");
    if(btn) btn.textContent = lang==="fr"?"EN":"FR";
    if(typeof window.onLangChange==="function") window.onLangChange(lang);
  }

  function wireMobileMenu(){
    const btn = document.getElementById("mobile-menu-btn");
    const nav = document.getElementById("mobile-nav");
    if(!btn||!nav) return;
    btn.addEventListener("click",()=>{
      const o = nav.classList.toggle("open");
      btn.classList.toggle("open",o);
      btn.setAttribute("aria-expanded",String(o));
    });
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
      nav.classList.remove("open"); btn.classList.remove("open");
      btn.setAttribute("aria-expanded","false");
    }));
  }

  function wireThemeToggle(){
    const btn = document.getElementById("theme-toggle");
    if(!btn) return;
    btn.addEventListener("click",()=>{
      const d = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme",d?"dark":"light");
    });
  }

  function wireLangToggle(){
    const btn = document.getElementById("lang-toggle");
    if(!btn) return;
    btn.addEventListener("click",()=>applyLang(currentLang==="fr"?"en":"fr"));
  }

  function wireScrollReveal(){
    const items = document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale");
    if(!items.length) return;
    if(!("IntersectionObserver" in window)){
      items.forEach(el=>el.classList.add("in-view")); return;
    }
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add("in-view"); obs.unobserve(e.target); }
      });
    },{threshold:.1});
    items.forEach(el=>obs.observe(el));
  }

  // Animated counter
  function wireCounters(){
    const counters = document.querySelectorAll(".count-up");
    if(!counters.length) return;
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.target)||0;
        const dur = 1400;
        const start = performance.now();
        function update(now){
          const t = Math.min((now-start)/dur,1);
          const ease = 1-Math.pow(1-t,3);
          el.textContent = Math.round(ease*target)+(el.dataset.suffix||"");
          if(t<1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        obs.unobserve(el);
      });
    },{threshold:.4});
    counters.forEach(el=>obs.observe(el));
  }

  document.addEventListener("DOMContentLoaded",()=>{
    injectLayout();
    wireMobileMenu();
    wireThemeToggle();
    wireLangToggle();
    wireScrollReveal();
    wireCounters();
    applyLang(currentLang);
  });
})();
