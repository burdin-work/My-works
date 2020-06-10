// NAV ON SCROLL
function stickyNav() {
  const nav = document.getElementsByClassName('wrapper-nav')[0];

  if (window.scrollY > 0) {
    nav.classList.add('nav-scrool-bg');
  } else {
    nav.classList.remove('nav-scrool-bg');
  }
}

window.addEventListener('scroll', stickyNav);
window.addEventListener('resize', stickyNav);
