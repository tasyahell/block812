
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}
const revealNodes = document.querySelectorAll('.section, .card, .feature, .service-card, .price-card, .news-card, .photo-card, .footer, .cta, .link-card, .booking-card, .mini-card, .photo-real');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
revealNodes.forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});
// ===== PAGE TRANSITION =====
const pageTransition = document.getElementById('page-transition');

window.addEventListener('load', () => {
  setTimeout(() => {
    pageTransition?.classList.add('hide');
  }, 400);
});

document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');

  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    link.hasAttribute('target')
  ) return;

  link.addEventListener('click', function(e){
    e.preventDefault();

    pageTransition?.classList.remove('hide');

    setTimeout(() => {
      window.location.href = this.href;
    }, 400);
  });
});

// функция для кнопок
function goToPage(url){
  pageTransition?.classList.remove('hide');
  setTimeout(() => {
    window.location.href = url;
  }, 400);
}
