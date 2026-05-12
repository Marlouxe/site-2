/* ===================================================
   TRYHOOKME — JS PRINCIPAL
   =================================================== */

// ── NAVBAR SCROLL ──────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── BURGER MENU MOBILE ──────────────────────────────
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  // Fermer au clic sur un lien
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── PRÉ-SÉLECTION DROPDOWN CONTACT ─────────────────
// Lit le paramètre ?sujet= dans l'URL pour pré-sélectionner l'objet
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('sujet');
  if (select) {
    const params = new URLSearchParams(window.location.search);
    const sujet = params.get('sujet');
    if (sujet) {
      const option = select.querySelector(`option[value="${sujet}"]`);
      if (option) {
        option.selected = true;
        select.dispatchEvent(new Event('change'));
      }
    }
  }
});
