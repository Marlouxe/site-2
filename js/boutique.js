/* ===================================================
   TRYHOOKME — BOUTIQUE JS
   Filtrage des produits par catégorie
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── FILTRE PRODUITS ──────────────────────────────
  const filterLinks = document.querySelectorAll('.sidebar-link[data-filter]');
  const cards = document.querySelectorAll('.product-card[data-cat]');

  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.dataset.filter;

      // Mettre à jour les liens actifs
      filterLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Filtrer les cartes
      cards.forEach(card => {
        const cats = card.dataset.cat.split(' ');
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = '';
          card.style.animation = 'fadeInCard 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ── SIDEBAR TOGGLE MOBILE ───────────────────────
  const toggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

});

// Animation CSS injectée dynamiquement
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInCard {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
