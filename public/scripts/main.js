(function () {
  "use strict";

  /* ============================
   * 1. REVEAL ANIMATIONS
   * ============================ */
  (function initReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    function observe() {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
        observer.observe(el);
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", observe);
    } else {
      observe();
    }
  })();

  /* ============================
   * 2. GALLERY LIGHTBOX
   * ============================ */
  (function initGallery() {
    var section = document.getElementById("galeria");
    if (!section) return;

    var grid = section.querySelector("[data-gallery-grid]");
    var lightbox = section.querySelector("[data-gallery-lightbox]");
    if (!grid || !lightbox) return;

    var items = Array.from(grid.querySelectorAll("[data-gallery-item]"));
    var filters = section.querySelectorAll("[data-gallery-filter]");
    var activeFilter = "Todas";
    var openIndex = -1;
    var touchStartX = 0;

    function visibleItems() {
      return items.filter(function (el) { return el.style.display !== "none"; });
    }

    function applyFilter(filter) {
      activeFilter = filter;
      items.forEach(function (el) {
        var cat = el.getAttribute("data-category");
        el.style.display = filter === "Todas" || cat === filter ? "" : "none";
      });
      filters.forEach(function (btn) {
        var isActive = btn.getAttribute("data-gallery-filter") === filter;
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
        btn.classList.toggle("is-active", isActive);
      });
      closeLightbox();
    }

    function closeLightbox() {
      openIndex = -1;
      lightbox.hidden = true;
      lightbox.innerHTML = "";
      document.body.style.overflow = "";
    }

    function trapFocus(container) {
      var focusable = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      container.addEventListener("keydown", function trapHandler(e) {
        if (e.key !== "Tab") return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });
    }

    function openLightbox(index) {
      var vis = visibleItems();
      if (index < 0 || index >= vis.length) return;

      openIndex = index;
      var el = vis[index];
      var type = el.getAttribute("data-type");
      var alt = el.getAttribute("data-alt") || "";
      var badge = el.getAttribute("data-badge") || "";

      lightbox.hidden = false;
      document.body.style.overflow = "hidden";

      var mediaHtml =
        type === "video"
          ? '<video src="' + el.getAttribute("data-full") + '" controls autoplay playsinline class="gallery-lightbox-media"></video>'
          : '<img src="' + el.getAttribute("data-full") + '" alt="' + alt.replace(/"/g, "&quot;") + '" class="gallery-lightbox-media" />';

      lightbox.innerHTML =
        '<div class="gallery-lightbox-backdrop" data-close>' +
        '<button type="button" class="gallery-lightbox-close" aria-label="Fechar" data-close>&times;</button>' +
        '<div class="gallery-lightbox-panel" role="dialog" aria-modal="true" aria-label="Visualização de mídia">' +
        '<div class="gallery-lightbox-media-wrap">' + mediaHtml + "</div>" +
        '<div class="gallery-lightbox-footer">' +
        '<div><span class="gallery-lightbox-badge">' + badge + '</span><p class="gallery-lightbox-caption">' + alt + "</p></div>" +
        '<div class="gallery-lightbox-nav">' +
        '<span class="gallery-lightbox-count">' + (index + 1) + " / " + vis.length + "</span>" +
        '<button type="button" aria-label="Anterior" data-prev>&larr;</button>' +
        '<button type="button" aria-label="Seguinte" data-next>&rarr;</button>' +
        "</div></div></div></div>";

      lightbox.querySelector("[data-prev]").addEventListener("click", function (e) {
        e.stopPropagation();
        openLightbox((index - 1 + vis.length) % vis.length);
      });
      lightbox.querySelector("[data-next]").addEventListener("click", function (e) {
        e.stopPropagation();
        openLightbox((index + 1) % vis.length);
      });
      lightbox.querySelectorAll("[data-close]").forEach(function (node) {
        node.addEventListener("click", closeLightbox);
      });
      lightbox.querySelector(".gallery-lightbox-panel").addEventListener("click", function (e) {
        e.stopPropagation();
      });

      // Focus trap
      trapFocus(lightbox);
      setTimeout(function () { lightbox.querySelector("button")?.focus(); }, 100);
    }

    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyFilter(btn.getAttribute("data-gallery-filter"));
      });
    });

    items.forEach(function (el) {
      el.addEventListener("click", function () {
        var vis = visibleItems();
        openLightbox(vis.indexOf(el));
      });
    });

    // Touch swipe
    lightbox.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    lightbox.addEventListener("touchend", function (e) {
      if (openIndex < 0) return;
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) < 50) return;
      var vis = visibleItems();
      openLightbox(diff > 0 ? (openIndex + 1) % vis.length : (openIndex - 1 + vis.length) % vis.length);
    });

    // Keyboard nav
    document.addEventListener("keydown", function (e) {
      if (openIndex < 0) return;
      var vis = visibleItems();
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") openLightbox((openIndex - 1 + vis.length) % vis.length);
      if (e.key === "ArrowRight") openLightbox((openIndex + 1) % vis.length);
    });
  })();

  /* ============================
   * 3. CONTACT FORM
   * ============================ */
  (function initContact() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var errorEl = form.querySelector("[data-contact-error]");

    // Real-time validation feedback
    var inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(function (input) {
      input.addEventListener("blur", function () {
        if (input.hasAttribute("required") && !input.value.trim()) {
          input.style.borderColor = "hsl(0 70% 60%)";
        } else {
          input.style.borderColor = "";
        }
      });
      input.addEventListener("input", function () {
        if (input.value.trim()) input.style.borderColor = "";
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]').value.trim();
      var phone = form.querySelector('[name="phone"]').value.trim();
      var service = form.querySelector('[name="service"]').value;
      var message = form.querySelector('[name="message"]').value.trim();

      if (!name || !phone) {
        if (errorEl) {
          errorEl.hidden = false;
          errorEl.textContent = "Por favor preenche o nome e o telefone.";
        }
        return;
      }

      if (errorEl) errorEl.hidden = true;

      var text = [
        "Olá! Gostaria de marcar:",
        "",
        "*Nome:* " + name,
        "*Telefone:* " + phone,
        "*Serviço:* " + service,
        message ? "*Mensagem:* " + message : "",
      ].filter(Boolean).join("\n");

      var base = form.getAttribute("data-whatsapp-url") || "https://wa.me/351935449306";
      window.open(base + "?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
    });
  })();

  /* ============================
   * 4. MAP FACADE
   * ============================ */
  (function initMaps() {
    var btn = document.querySelector("[data-map-load]");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var wrap = btn.closest("[data-map-facade]");
      if (!wrap) return;
      wrap.innerHTML =
        '<iframe title="Localização JL e Extensões em Vila Real" src="https://www.google.com/maps?q=Av.+Gen.+Alves+Ro%C3%A7adas+15,+5000-687+Vila+Real&output=embed" class="h-52 w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    });
  })();
})();