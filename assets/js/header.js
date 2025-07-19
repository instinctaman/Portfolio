// ---------Responsive-navbar-active-animation-----------

function updateHoriSelector() {
  const navbar = document.getElementById('navbarSupportedContent');
  const activeItem = navbar.querySelector('li.active');
  const horiSelector = document.querySelector('.hori-selector');

  if (activeItem && horiSelector) {
    const rect = activeItem.getBoundingClientRect();
    const navbarRect = navbar.getBoundingClientRect();

    horiSelector.style.top = (rect.top - navbarRect.top) + "px";
    horiSelector.style.left = (rect.left - navbarRect.left) + "px";
    horiSelector.style.height = rect.height + "px";
    horiSelector.style.width = rect.width + "px";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateHoriSelector();

  const navbar = document.getElementById('navbarSupportedContent');
  navbar.addEventListener('click', function(e) {
    const li = e.target.closest('li');
    if (li) {
      navbar.querySelectorAll('li').forEach(item => item.classList.remove('active'));
      li.classList.add('active');
      updateHoriSelector();
    }
  });

  window.addEventListener('resize', function() {
    setTimeout(updateHoriSelector, 500);
  });

  document.querySelector('.navbar-toggler').addEventListener('click', function() {
    setTimeout(updateHoriSelector, 300);
  });

  // Add active class based on current page
  let path = window.location.pathname.split("/").pop();
  if (path === '') path = 'index.html';
  navbar.querySelectorAll('ul li a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.parentElement.classList.add('active');
      updateHoriSelector();
    }
  });
});
// ...existing code...

// Search form handler
document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...
  const searchForm = document.getElementById('navbarSearchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = document.getElementById('navbarSearchInput').value.trim();
      if (query) {
        alert('You searched for: ' + query);
        // You can replace alert with your search logic
      }
    });
  }
});