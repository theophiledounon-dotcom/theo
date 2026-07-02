/* ==========================================================================
   gallery.js — filtres + lightbox
   ========================================================================== */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lbClose = document.getElementById("lightbox-close");
    const lbTitle = document.getElementById("lightbox-title");
    const lbDesc  = document.getElementById("lightbox-desc");
    const lbBadge = document.getElementById("lightbox-badge");

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.category;
        items.forEach(item => {
          item.style.display = (cat === "Tous" || cat === "All" || item.dataset.category === cat) ? "" : "none";
        });
      });
    });

    items.forEach(item => {
      item.addEventListener("click", () => {
        if (!lightbox) return;
        lbTitle.textContent = item.dataset.title || "";
        lbDesc.textContent  = item.dataset.description || "";
        lbBadge.textContent = item.dataset.category || "";
        lightbox.classList.add("open");
      });
    });

    function closeLb() { if (lightbox) lightbox.classList.remove("open"); }
    if (lbClose) lbClose.addEventListener("click", closeLb);
    if (lightbox) lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLb(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });
  });
})();
