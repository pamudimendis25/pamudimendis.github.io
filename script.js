document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // project filter (only present on projects.html)
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('[data-category]');
  if (filterBtns.length && cards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          var show = cat === 'all' || card.getAttribute('data-category') === cat;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }
});
