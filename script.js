
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
