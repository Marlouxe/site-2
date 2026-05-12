/* ===================================================
   TRYHOOKME — CYBERFOLIO JS
   Navigation sidebar + effets terminal
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── SIDEBAR ACTIVE AU SCROLL ─────────────────────
  const sections = document.querySelectorAll('.cyber-section, .cyber-hero, .cyber-cta-section');
  const sideLinks = document.querySelectorAll('.sidebar-link[data-section]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sideLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.35, rootMargin: `-${64}px 0px 0px 0px` });

  sections.forEach(s => { if (s.id) observer.observe(s); });

  // ── SMOOTH SCROLL SIDEBAR ────────────────────────
  sideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── SIDEBAR TOGGLE MOBILE ────────────────────────
  const toggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  // ── EFFET TYPAGE TERMINAL ────────────────────────
  const termLines = document.querySelectorAll('.terminal-line');
  termLines.forEach((line, i) => {
    line.style.opacity = '0';
    setTimeout(() => {
      line.style.transition = 'opacity 0.3s';
      line.style.opacity = '1';
    }, 400 + i * 300);
  });

});
