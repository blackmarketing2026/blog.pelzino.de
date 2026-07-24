/* Pelzino — globales Seitenverhalten: Nav-Toggle, Cookie-Consent, Consent-Gating */
(function () {
  "use strict";

  var CONSENT_KEY = "cookie-consent";
  var GTM_ID = "GTM-PJ3PLBSR";

  function getConsent() {
    try {
      return JSON.parse(localStorage.getItem(CONSENT_KEY));
    } catch (e) {
      return null;
    }
  }

  function setConsent(consent) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  }

  /* Google Tag Manager wird ausschliesslich dynamisch nachgeladen, nie statisch
     im HTML — erst wenn aktive Einwilligung (Statistik und/oder Marketing) vorliegt. */
  function loadTracking(consent) {
    if (window.__gtmLoaded) return;
    if (!consent || (!consent.analytics && !consent.marketing)) return;
    window.__gtmLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      consent_analytics: !!consent.analytics,
      consent_marketing: !!consent.marketing,
    });

    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", GTM_ID);
  }

  function openModal() {
    var modal = document.getElementById("cookieModal");
    if (modal) modal.classList.add("is-open");
  }

  function closeModal() {
    var modal = document.getElementById("cookieModal");
    if (modal) modal.classList.remove("is-open");
  }

  function initCookieConsent() {
    var existing = getConsent();

    if (existing) {
      loadTracking(existing);
    } else {
      window.setTimeout(openModal, 800);
    }

    var pill = document.getElementById("cookiePill");
    if (pill) pill.addEventListener("click", openModal);

    var acceptAllBtns = document.querySelectorAll("[data-cookie-accept-all]");
    acceptAllBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var consent = { analytics: true, marketing: true };
        setConsent(consent);
        loadTracking(consent);
        closeModal();
      });
    });

    var necessaryOnlyBtns = document.querySelectorAll("[data-cookie-necessary-only]");
    necessaryOnlyBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setConsent({ analytics: false, marketing: false });
        closeModal();
      });
    });

    var saveBtns = document.querySelectorAll("[data-cookie-save]");
    saveBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var analytics = document.getElementById("consentAnalytics");
        var marketing = document.getElementById("consentMarketing");
        var consent = {
          analytics: !!(analytics && analytics.checked),
          marketing: !!(marketing && marketing.checked),
        };
        setConsent(consent);
        loadTracking(consent);
        closeModal();
      });
    });

    var closeBtns = document.querySelectorAll("[data-cookie-close]");
    closeBtns.forEach(function (btn) {
      btn.addEventListener("click", closeModal);
    });
  }

  function initNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initCookieConsent();
  });
})();
