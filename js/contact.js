/* ==========================================================================
   contact.js — Web3Forms
   Remplacez WEB3FORMS_ACCESS_KEY par votre clé (https://web3forms.com)
   ========================================================================== */
(function () {
  const WEB3FORMS_ACCESS_KEY = "REMPLACEZ_PAR_VOTRE_CLE_WEB3FORMS";

  const MSGS = {
    fr: {
      nokey: "Formulaire non configuré : ajoutez votre clé Web3Forms dans js/contact.js.",
      sending: "Envoi en cours...",
      success: "Merci ! Message envoyé. Je vous réponds sous 24h.",
      error: "Erreur d'envoi. Réessayez ou contactez-moi via WhatsApp.",
      network: "Connexion impossible. Vérifiez votre réseau.",
      submit: "Envoyer le message"
    },
    en: {
      nokey: "Form not configured: add your Web3Forms key in js/contact.js.",
      sending: "Sending...",
      success: "Thank you! Message sent. I'll reply within 24h.",
      error: "Send error. Try again or reach me via WhatsApp.",
      network: "Network error. Check your connection.",
      submit: "Send message"
    }
  };

  function getLang() { return localStorage.getItem("lang") || "fr"; }
  function m(key) { const l = getLang(); return (MSGS[l] && MSGS[l][key]) || MSGS.fr[key]; }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const submitBtn = document.getElementById("contact-submit");
    const messageBox = document.getElementById("form-message");

    function showMessage(type, text) {
      messageBox.textContent = text;
      messageBox.className = "form-message " + type + " show";
    }

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      if (WEB3FORMS_ACCESS_KEY === "REMPLACEZ_PAR_VOTRE_CLE_WEB3FORMS") {
        showMessage("error", m("nokey")); return;
      }

      const formData = new FormData(form);
      formData.set("access_key", WEB3FORMS_ACCESS_KEY);
      const payload = Object.fromEntries(formData);

      submitBtn.disabled = true;
      submitBtn.textContent = m("sending");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        if (result.success) { showMessage("success", m("success")); form.reset(); }
        else showMessage("error", m("error"));
      } catch {
        showMessage("error", m("network"));
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = m("submit");
      }
    });
  });
})();
