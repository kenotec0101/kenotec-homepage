
document.addEventListener('DOMContentLoaded', function () {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const cards = Array.from(document.querySelectorAll('.portfolio-card'));
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      cards.forEach(card => {
        const visible = group === 'all' || card.dataset.group === group;
        card.classList.toggle('hide', !visible);
      });
    });
  });
});
