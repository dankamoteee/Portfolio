document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    const cards = document.querySelectorAll('.card-container > div');

    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Trigger grid recalculation
    const container = document.querySelector('.card-container');
    container.style.display = 'none';
    setTimeout(() => {
      container.style.display = 'grid';
    }, 0);
  });
});
